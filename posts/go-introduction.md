---
title: "Glorified hello world with Go"
excerpt: "A hitchinker guide to all the basics of Golang"
coverImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Go is a general-purpose programming language with advanced features and a clean
syntax.

#### Hello World with GO

```go
    package main
    import "fmt"
    // this is a comment
    func main() {
        fmt.Println("Hello, World")
    }
```

We created a new executable program that references the fmt library and contains one
function called main . That function takes no arguments and doesn’t return anything. It
accesses the Println function contained inside of the fmt package and invokes it using
one argument—the string Hello, World .

### Go Types

Go is a statically typed programming language. This means that variables always have
a specific type and that type cannot change. Static typing may seem cumbersome at
first. You’ll spend a large amount of your time just trying to fix your program so that
it finally compiles. But types help us reason about what our program is doing and
catch a wide variety of common mistakes.

###### Integer

Go’s integer types are uint8 , uint16 , uint32 , uint64 , int8 , int16 , int32 , and int64.
8, 16, 32, and 64 tell us how many bits each of the types use. uint means “unsigned
integer” while int means “signed integer.” Unsigned integers only contain positive
numbers (or zero).

Example

```go
package main
import "fmt"
func main() {
    fmt.Println("1 + 1 =", 1 + 1)
}
```

###### Strings

Example

```go
package main
import "fmt"
func main() {
    fmt.Println(len("Hello, World"))
    fmt.Println("Hello, World"[1])
    fmt.Println("Hello, " + "World")
}
```

###### Booleans

Example

```go
package main
import "fmt"
func main() {
    fmt.println(true && true)
    fmt.println(true && false)
    fmt.println(true || true)
    fmt.println(true || false)
    fmt.println(!true)
}
```

### Variables

```go
package main
import "fmt"

func main() {
    var x string = "Hello, World"
    fmt.Println(x)
}
```

Variables in Go are created by first using the var keyword, then specifying
the variable name ( x ) and the type ( string ), and finally, assigning a value to the variable ( Hello, World ). Assigning a value is optional, so we could use two statements,
like this:

```go
package main
import "fmt"

func main() {
    var x string
    x = "Hello, World"
    fmt.Println(x)
}
```

Variables can change their value throughout the lifetime of a program. Try
running the following:

```go
package main
import "fmt"

func main() {
    var x string
    x = "Hello, World"
    fmt.Println(x)
    x = "second"
    fmt.Println(x)
}
```

Because creating a new variable with a starting value is so common, Go also supports
a shorter statement:

```go
x := "Hello, World"
```

Notice the : before the = and that no type was specified. The type is not necessary
because the Go compiler is able to infer the type based on the literal value you assign
the variable (because you are assigning a string literal, x is given the type string ).
Generally, you should use this shorter form whenever possible.

### How to Name a Variable

The Go compiler doesn’t care what you name a variable, but you should choose names that clearly describe the variable’s purpose. Generally, it's preferred to use camelCase for naming variables as opposed to underscore naming convention like in python.

#### Scope

Let’s take another look at the program we saw at the beginning of the chapter:

```go
package main
import "fmt"
func main() {
    var x string = "Hello, World"
    fmt.Println(x)
}
```

Another way of writing this program would be like this:

```go
package main
import "fmt"

var x string = "Hello, World"

func main() {
    fmt.Println(x)
}
```

Notice that we moved the variable outside of the main function. This means that
other functions can access this variable:

```go
var x string = "Hello, World"
func main() {
    fmt.Println(x)
}
func f() {
    fmt.Println(x)
}
```

The f function now has access to the x variable. Now suppose that we wrote this
instead:

```go
func main() {
    var x string = "Hello, World"
    fmt.Println(x)
}

func f() {
    fmt.Println(x)
}
```

If you run this program, you should see an error:

```bash
$ .\main.go:11: undefined: x
```

#### Constants

Go also has support for constants. Constants are essentially variables whose values
cannot be changed later. They are created in the same way you create variables, but
instead of using the var keyword we use the const keyword:

```go
package main
import "fmt"

func main() {
    const x string = "Hello, World"
    fmt.Println(x)
}
```

Constants are a good way to reuse common values in a program without writing
them out each time. For example, Pi in the math package is defined as a constant.
You will get an error if you try to redeclare const variable

#### Defining Multiple Variables

```go
var (
    a = 5
    b = 10
    c = 15
)
```

### Control Structures

#### The for Statement

```go
package main

import "fmt"

func main() {
    i := 1
    for i <= 10 {
        fmt.Println(i)
        i = i + 1
    }
}
```

#### The if Statement

```go
package main

import "fmt"

func main() {
    for i := 1; i <= 10; i++ {
        if i % 2 == 0 {
            fmt.Println(i, "even")
        } else {
            fmt.Println(i, "odd")
        }
    }
}
```

#### The switch Statement

```go

switch i {
    case 0: fmt.Println("Zero")
    case 1: fmt.Println("One")
    case 2: fmt.Println("Two")
    case 3: fmt.Println("Three")
    case 4: fmt.Println("Four")
    case 5: fmt.Println("Five")
    default: fmt.Println("Unknown Number")
}
```

for , if , and switch are the main control flow statements. Additional statements will
be explored in later chapters.

The compiler is telling you that the x variable inside of the f function doesn’t exist. It only exists inside of the main function. The range of places where you are allowed to use x is called the scope of the variable. According to the language specification, “Go is lexically scoped using blocks.” Basically, this means that the variable exists within the nearest curly braces ( { } ), or block, including any nested curly braces (blocks), but not outside of them. Scope can be a little confusing at first; as we see more Go examples, it should become more clear

1. Python
2. Node
3. Go
4. Books

Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

## Lorem Ipsum

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.
