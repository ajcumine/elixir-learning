defmodule Messengyr.PageController do
  use Messengyr.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
