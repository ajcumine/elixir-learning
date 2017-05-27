defmodule Messengyr.Web.Router do
  use Messengyr.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug Guardian.Plug.VerifySession
    plug Guardian.Plug.LoadResource

  end

  pipeline :browser_session do
    plug Guardian.Plug.VerifySession
    plug Guardian.Plug.LoadResource
  end

  scope "/", Messengyr.Web do
    pipe_through [:browser, :browser_session] # Use the default browser stack

    get "/", PageController, :index

    get "/signup", PageController, :signup
    post "/signup", PageController, :create_user

    get "/login", PageController, :login
    post "/login", PageController, :login_user

    get "/logout", PageController, :logout

    get "/messages", ChatController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", Messengyr.Web do
    pipe_through :api

    resources "/users", UserController, only: [:show]
    resources "/rooms", RoomController
  end
end
