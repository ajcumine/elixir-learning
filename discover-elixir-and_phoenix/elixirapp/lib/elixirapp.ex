defmodule Elixirapp do
  @moduledoc """
  Documentation for Elixirapp.
  """

  def main() do
    name = IO.gets("What is your name? ") |> String.strip
    say_hello("Hi there", name)
  end

  def say_hello(name) do
    IO.puts("Hello #{name}!")
  end

  def say_hello(greeting, name) do
    case name do
      "" ->
        IO.puts("You need to provide a name.")
        main()
      _ ->
        IO.puts("#{greeting} #{name}!")
    end
  end
end
