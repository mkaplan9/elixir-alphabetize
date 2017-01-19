# elixir-alphabetize
Alphabetizes `alias`, `require`, `use`, and `import` statements at the top of an elixir file

Packages -> elixir-alphabetize -> Beautify

## Example
```
defmodule MyApp.MyController do
  import MyThing
  use MyOtherThing
  alias MyApp.User
  alias MyApp.Organization
  @moduledoc """
  """
```

becomes

```
defmodule MyApp.MyController do
  alias MyApp.Organization
  alias MyApp.User
  import MyThing
  use MyOtherThing
  @moduledoc """
  """
```
