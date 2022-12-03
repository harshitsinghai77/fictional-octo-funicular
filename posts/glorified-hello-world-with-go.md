---
title: "Glorified Hello World with Go"
excerpt: "A hitchinker guide to all the basics of Golang. This post is all you need to get started with the Go programming language. It covers all the basics in depth to help you get started with Go. Go is a popular and powerful programming language that is well-suited to a wide range of applications."
coverImage: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
date: "2020-11-16T01:56:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Go is a general-purpose programming language with advanced features and a clean
syntax.

### Hello World with GO

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

### Integer

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

### Strings

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

### Booleans

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

### Scope

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

### Constants

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

### Defining Multiple Variables

```go
var (
    a = 5
    b = 10
    c = 15
)
```

### Control Structures

### The for Statement

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

### The if Statement

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

### The switch Statement

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

### Arrays

```go
package main

import "fmt"
func main() {
    var x [5]int
    x[4] = 100
    fmt.Println(x)
}
```

You should see this:
[0 0 0 0 100]

x[4] = 100 should be read “set the fifth element of the array x to 100.” It might seem strange that x[4] represents the fifth element instead of the fourth, but like strings, arrays are indexed starting from 0. Arrays are accessed in a similar way. We could change fmt.Println(x) to fmt.Println(x[4]) and we would get 100.

```go
func main() {

    var x [5]float64
    x[0] = 98
    x[1] = 93
    x[2] = 77
    x[3] = 82
    x[4] = 83

    var total float64 = 0
    for i := 0; i < len(x); i++ {
        total += x[i]
    }

    fmt.Println(total / float64(len(x)))
}
```

This program computes the average of a series of test scores. If you run it, you should
see 86.6 .

We are using float64(len(x)) to divide. The issue here is that len(x) and total have different types. total is a float64 while len(x) is an int . So we need to convert len(x) into a float64.

Alternatively we can use

```go
var total float64 = 0
for _, value := range x {
    total += value
}
fmt.Println(total / float64(len(x)))
```

A single underscore ( \_ ) is used to tell the compiler that we don’t need this (in this
case, we don’t need the iterator variable).

Go also provides a shorter syntax for creating arrays:

```go
x := [5]float64{ 98, 93, 77, 82, 83 }
```

Because the length of an array is part of its type name, working with arrays can be a little cumbersome. Adding or removing elements as we did here requires also changing the length inside the brackets. Because of this and other limitations, you rarely see arrays used directly in Go code. Instead, you will usually use a slice, which is a type built on top of an array.

### Slices

A slice is a segment of an array. Like arrays, slices are indexable and have a length. Unlike arrays, this length is allowed to change. Here’s an example of a slice:

```go
var x []float64
```

The only difference between this and an array is the missing length between thevbrackets. In this case, x has been created with a length of zero. If you want to create a slice, you should use the built-in make function:

```go
x := make([]float64, 5)
```

This creates a slice that is associated with an underlying float64 array of length 5.
Slices are always associated with some array, and although they can never be longer
than the array, they can be smaller. The make function also allows a third parameter:

```go
x := make([]float64, 5, 10)
```

In addition to the indexing operator, Go includes two built-in functions to assist with
slices: append and copy .

### append

append adds elements onto the end of a slice. If there’s sufficient capacity in the underlying array, the element is placed after the last element and the length is incre‐ mented. However, if there is not sufficient capacity, a new array is created, all of the existing elements are copied over, the new element is added onto the end, and the
new slice is returned.

The definition of append can be a bit confusing but it’s easier to grasp once you see it
used. Here is an example:

```go
func main() {
    slice1 := []int{1,2,3}
    slice2 := append(slice1, 4, 5)
    fmt.Println(slice1, slice2)
}
```

After running this program, slice1 has [1,2,3] and slice2 has [1,2,3,4,5] . append creates a new slice by taking an existing slice (the first argument) and appending all the following arguments to it.

### copy

copy takes two arguments: dst and src . All of the entries in src are copied into dst
overwriting whatever is there. If the lengths of the two slices are not the same, the
smaller of the two will be used.
Here is an example of copy :

```go
func main() {
    slice1 := []int{1,2,3}
    slice2 := make([]int, 2)
    copy(slice2, slice1)
    fmt.Println(slice1, slice2)
}
```

### Maps

A map is an unordered collection of key-value pairs (maps are also sometimes called
associative arrays, hash tables, or dictionaries). Maps are used to look up a value by its
associated key. Here’s an example of a map in Go:

```go
var x map[string]int
```

The map type is represented by the keyword map , followed by the key type in brackets
and finally the value type. Like arrays and slices, maps can be accessed using brackets. Try running the follow‐
ing program:

```go
var x map[string]int
x["key"] = 10
fmt.Println(x)
```

You should see an error similar to this:

```bash
$ panic: runtime error: assignment to entry in nil map
```

The problem with our program is that maps have to be initialized before they can be used. We should have written this:

```go
x := make(map[string]int)
x["key"] = 10
fmt.Println(x["key"])
```

If you run this program, you should see 10 displayed. The statement x["key"] = 10 is similar to what we saw with arrays; however, instead of being an integer, the key is a string because the map’s key type is string .

```go
x := make(map[int]int)
x[1] = 10
fmt.Println(x[1])
```

We can also delete items from a map using the built-in delete function:

```go
delete(x, 1)
```

Let’s look at an example program that uses a map:

```go
package main
import "fmt"

func main() {
    elements := make(map[string]string)
    elements["H"] = "Hydrogen"
    elements["He"] = "Helium"
    elements["Li"] = "Lithium"
    elements["Be"] = "Beryllium"
    elements["B"] = "Boron"
    elements["C"] = "Carbon"
    elements["N"] = "Nitrogen"
    elements["O"] = "Oxygen"
    elements["F"] = "Fluorine"
    elements["Ne"] = "Neon"
    fmt.Println(elements["Li"])
}
```

elements is a map that represents the first 10 chemical elements indexed by their symbol. This is a very common way of using maps: as a lookup table or a dictionary. Suppose we tried to look up an element that doesn’t exist:

```go
fmt.Println(elements["Un"])
```

If you run this, you should see nothing returned. Technically, a map returns the zero value for the value type (which for strings is the empty string). Although we could check for the zero value in a condition ( elements["Un"] == "" ), Go provides a better way:

```go
name, ok := elements["Un"]
fmt.Println(name, ok)
```

Accessing an element of a map can return two values instead of just one. The first value is the result of the lookup, the second tells us whether or not the lookup was successful. In Go, we often see code like this:

```go
if name, ok := elements["Un"]; ok {
    fmt.Println(name, ok)
}
```

Like we saw with arrays, there is also a shorter way to create maps:

```go
elements := map[string]string{
    "H": "Hydrogen",
    "He": "Helium",
    "Li": "Lithium",
    "Be": "Beryllium",
    "B": "Boron",
    "C": "Carbon",
    "N": "Nitrogen",
    "O": "Oxygen",
    "F": "Fluorine",
    "Ne": "Neon",
}
```

### Functions

Functions start with the keyword func , followed by the function’s name. The parame‐ ters (inputs) of the function are defined like this: name type, name type, ... . Our function has one parameter (the list of scores) that we named xs . After the parameters, we put the return type. Collectively, the parameters and the return type are known as the function’s signature.

Finally, we have the function body, which is a series of statements between curly
braces. Writing functions can be difficult, so it’s a good idea to break the process into manageable chunks, rather than trying to implement the entire thing in one large step.

Now let’s take the code from our main function and move it into our average function:

```go
func average(xs []float64) float64 {
    total := 0.0
    for _, v := range xs {
        total += v
    }

    return total / float64(len(xs))
}
```

Notice that we changed the fmt.Println to be a return instead. The return state‐
ment causes the function to immediately stop and return the value after it to the
function that called this one. Modify main to look like this:

```go
    func main() {
        xs := []float64{98,93,77,82,83}
        fmt.Println(average(xs))
    }
```

Running this program should give you exactly the same result as the original.

### Functions form call stacks.

Functions are built up in a call stack. Suppose we had this program:

```go
    func main() {
        fmt.Println(f1())
    }

    func f1() int {
        return f2()
    }

    func f2() int {
        return 1
    }
```

Each time we call a function, we push it onto the call stack, and each time we return from a function, we pop the last function off of the stack.

### Multiple values can be returned

Go is also capable of returning multiple values from a function. Here is an example function that returns two integers:

```go
    func f() (int, int) {
        return 5, 6
    }

    func main() {
        x, y := f()
    }
```

Multiple values are often used to return an error value along with the result ( x, err := f() ), or a boolean to indicate success ( x, ok := f() ).

### Variadic Functions

There is a special form available for the last parameter in a Go function:

```go
    func add(args ...int) int {
        total := 0
        for _, v := range args {
            total += v
        }
    return total

    func main() {
        fmt.Println(add(1,2,3))
    }
}
```

In this example, add is allowed to be called with multiple integers. This is known as a
variadic parameter.

By using an ellipsis ( ... ) before the type name of the last parameter, you can indicate
that it takes zero or more of those parameters. In this case, we take zero or more int s.
We invoke the function like any other function except we can pass as many int s as
we want.

### Closure

It is possible to create functions inside of functions. Let’s move the add function we
saw before inside of main :

```go
func main() {
    add := func(x, y int) int {
        return x + y
    }

    fmt.Println(add(1,1))
}
```

Another example

```go
    func main() {
        x := 0
        increment := func() int {
            x++
            return x
        }
        fmt.Println(increment())
        fmt.Println(increment())
    }
```

increment adds 1 to the variable x , which is defined in the main function’s scope. This
x variable can be accessed and modified by the increment function. This is why the
first time we call increment we see 1 displayed, but the second time we call it we see 2
displayed.

A function like this together with the nonlocal variables it references is known as a
closure . In this case, increment and the variable x form the closure.

One way to use closure is by writing a function that returns another function, which
when called, can generate a sequence of numbers. For example, here’s how we might
generate all the even numbers:

```go
func makeEvenGenerator() func() uint {
    i := uint(0)
    return func() (ret uint) {
        ret = i
        i += 2
        return
    }
}
func main() {
    nextEven := makeEvenGenerator()
    fmt.Println(nextEven()) // 0
    fmt.Println(nextEven()) // 2
    fmt.Println(nextEven()) // 4
}
```

makeEvenGenerator returns a function that generates even numbers. Each time it’s called, it adds 2 to the local i variable, which—unlike normal local variables—persists between calls.

Another example

```go
package main

import "fmt"

func increment() func(x int) int {
	i := 0
	return func(x int) int {
		for j:=0; j<= x; j++{
			i += j
		}
		return i
	}
}

func main() {
	nextEven := increment()(10)
	fmt.Println(nextEven)
}
```

### defer, panic, and recover

Go has a special statement called defer that schedules a function call to be run after the function completes. Consider the following example:

```go
func main() {
    first()
    second()
}
```

defer is often used when resources need to be freed in some way. For example, when we open a file, we need to make sure to close it later. With defer:

```go
f, _ := os.Open(filename)
defer f.Close()
```

This has three advantages:

1. It keeps our Close call near our Open call so it’s easier to understand.
2. If our function had multiple return statements (perhaps one in an if and one in
   an else ), Close will happen before both of them.
3. Deferred functions are run even if a runtime panic occurs.

### panic and recover

Earlier, we created a function that called the panic function to cause a runtime error. We can handle a runtime panic with the built-in recover function. recover stops the panic and returns the value that was passed to the call to panic . We might be tempted to recover from a panic like this:

```go
package main

import "fmt"
func main() {
    panic("PANIC")
    str := recover() // this will never happen
    fmt.Println(str)
}
```

But the call to recover will never happen in this case, because the call to panic immediately stops execution of the function. Instead, we have to pair it with defer :

```go
package main

import "fmt"

func main() {
    defer func() {
        str := recover()
        fmt.Println(str)
    }()

    panic("PANIC")
}
```

A panic generally indicates a programmer error (e.g., attempting to access an index of an array that’s out of bounds, forgetting to initialize a map, etc.) or an exceptional condition that there’s no easy way to recover from (hence the name panic).

### Pointers

When we call a function that takes an argument, that argument is copied to the function:

```go
func zero(x int) {
    x = 0
}

func main() {
    x := 5
    zero(x)
    fmt.Println(x) // x is still 5
}
```

In this program, the zero function will not modify the original x variable in the main function. But what if we wanted to? One way to do this is to use a special data type known as a pointer:

```go
func zero(xPtr *int) {
    *xPtr = 0
}

func main() {
    x := 5
    zero(&x)
    fmt.Println(x) // x is 0
}
```

Pointers reference a location in memory where a value is stored rather than the value itself. By using a pointer ( \*int ), the zero function is able to modify the original variable.

### The \* and & operators

In Go, a pointer is represented using an asterisk ( \* ) followed by the type of the stored value. In the zero function, xPtr is a pointer to an int.

An asterisk is also used to dereference pointer variables. Dereferencing a pointer gives us access to the value the pointer points to. When we write *xPtr = 0 , we are saying “store the int 0 in the memory location xPtr refers to.” If we try xPtr = 0 instead, we will get a compile-time error because xPtr is not an int ; it’s a *int , which can only be given another \*int .

Finally, we use the & operator to find the address of a variable. &x returns a \*int (pointer to an int) because x is an int . This is what allows us to modify the original variable. &x in main and xPtr in zero refer to the same memory location.
