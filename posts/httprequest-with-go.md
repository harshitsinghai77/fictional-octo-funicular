---
title: "HTTP Requests with Go"
excerpt: "In this blog post, were going to see how we can make http requests using Go. We cover all the basic http requests like GET, POST and others. How to use json encoder and decoder and other things."
coverImage: "https://storage.googleapis.com/gopherizeme.appspot.com/gophers/db248fdd04d02e221b1f72ea10c85ccba1797b18.png"
date: "2020-11-17T01:24:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

We will make use of the net/http package in Go which provides all the stuff we need to make http requests or create new http servers.

## A Simple HTTP GET Request

Let’s make a very simple GET request and see how we can read the response. We would be sending a simple HTTP GET request to github.com and read the response.

For that we can just import the net/http package and use the http.Get function call. Let’s see an example:

```go
// hello.go

package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    resp, err := http.Get("https://api.github.com/users/tensorflow")
    if err != nil {
        print(err)
    }

    defer resp.Body.Close()
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        print(err)
    }

    fmt.Print(string(body))
}
```

output

```bash
$ go run hello.go

{
 "login":"tensorflow",
 "id":15658638,
 "node_id":"MDEyOk9yZ2FuaXphdGlvbjE1NjU4NjM4",
 "avatar_url":"https://avatars1.githubusercontent.com/u/15658638?v=4",
 "gravatar_id":"",
 "url":"https://api.github.com/users/tensorflow",
 "html_url":"https://github.com/tensorflow",
 "followers_url":"https://api.github.com/users/tensorflow/followers",
 "following_url":"https://api.github.com/users/tensorflow/following{/other_user}",
 "gists_url":"https://api.github.com/users/tensorflow/gists{/gist_id}",
 "starred_url":"https://api.github.com/users/tensorflow/starred{/owner}{/repo}",
 "subscriptions_url":"https://api.github.com/users/tensorflow/subscriptions",
 "organizations_url":"https://api.github.com/users/tensorflow/orgs",
 "repos_url":"https://api.github.com/users/tensorflow/repos",
 "events_url":"https://api.github.com/users/tensorflow/events{/privacy}",
 "received_events_url":"https://api.github.com/users/tensorflow/received_events",
 "type":"Organization",
 "site_admin":false,
 "name":null,
 "company":null,
 "blog":"http://www.tensorflow.org",
 "location":null,
 "email":"github-admin@tensorflow.org",
 "hireable":null,
 "bio":null,
 "public_repos":88,
 "public_gists":0,
 "followers":0,
 "following":0,
 "created_at":"2015-11-04T19:32:50Z",
 "updated_at":"2019-12-19T21:32:16Z"
}
```

We have created a separate MakeRequest function and called it from our main function. So going ahead, we will just see the changes inside this function and won’t need to think about the entire program. Inside this function, we have passed the url to http.Get and received two values – the response object and any errors that might have happened during the operation.

We did a check to see if there were any errors. If there weren’t any errors, err would be nil. Please note that this err would be reported only if there was an issue connecting to the server and getting a response back.

Next, we read the resp.Body which implements the io.ReadCloser interface and we can use ioutil.ReadAll to fully read the response. This function also returns two values – a byte slice ([]byte) and err.

Please note the string(body) part. Here, we’re converting the byte slice to a string. If we don’t do it, log.Println would print out representation of the byte slice, a list of all the bytes in that slice, individually. But we want a string representation. So we go ahead and make the conversion.

### Golang Http Post Request

For the post request example, we will make use of the httpbin.org site to help us inspect the requests.

See the following code.

```go
// hello.go

package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	reqBody, err := json.Marshal(map[string]string{
		"username": "Goher Go",
		"email":    "go@gmail.com",
	})

	if err != nil {
		print(err)
	}
	resp, err := http.Post("https://httpbin.org/post",
		"application/json", bytes.NewBuffer(reqBody))
	if err != nil {
		print(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		print(err)
	}
	fmt.Println(string(body))
}

```

#output

```bash
{
  "args": {},
  "data": "{\"email\":\"go@gmail.com\",\"username\":\"Goher Go\"}",
  "files": {},
  "form": {},
  "headers": {
    "Accept-Encoding": "gzip",
    "Content-Length": "62",
    "Content-Type": "application/json",
    "Host": "httpbin.org",
    "User-Agent": "Go-http-client/1.1"
  },
  "json": {
    "email": "go@gmail.com",
    "username": "Goher Go"
  },
  "origin": "43.241.145.32, 43.241.145.32",
  "url": "https://httpbin.org/post"
}

```

The Post function is similar. In this example, we’re going to send the JSON payload.

We are marshaling a map and will get the []byte if successful. We handled an error and then called http.Post.

This function takes a URL, the content type we’re using (in our case it is JSON), and an instance of io.Reader.

At our hands, we have the []byte, which doesn’t implement this interface.

So, we use the bytes.NewBuffer which gives us the bytes buffer based on our bytes slice.

This buffer is both readable and writable. It’s “readable” part satisfies the io.Reader interface and serves our purpose.

### JSON Requests and Responses

In Go, we would first convert our data structure to a byte slice containing the JSON representation of the data. Then we pass it to the request with the proper content type. Let’s see a code example:

```go
package main

import (
	"bytes"
	"encoding/json"
	"log"
	"net/http"
)

func main() {
	MakeRequest()
}

func MakeRequest() {

	message := map[string]interface{}{
		"hello": "world",
		"life":  42,
		"embedded": map[string]string{
			"yes": "of course!",
		},
	}

	bytesRepresentation, err := json.Marshal(message)
	if err != nil {
		log.Fatalln(err)
	}

	resp, err := http.Post("https://httpbin.org/post", "application/json", bytes.NewBuffer(bytesRepresentation))
	if err != nil {
		log.Fatalln(err)
	}

	var result map[string]interface{}

	json.NewDecoder(resp.Body).Decode(&result)

	log.Println(result)
	log.Println("data: ", result["data"])
}
```

We first created message which is a map containing a string value, an integer value and another embedded map. Then we json.Marshal it to get the []byte out of it. We also check for any errors that might happen during the marshalling.

Next, we make a POST request using the http.Post function. We pass the url, our content type, which is JSON and then we create and pass a new bytes.Buffer object from the bytes representation.

Why do we need to create a buffer here? The http.Post function expects an implementation of io.Reader – which is a brilliant design, anything that implements an io.Reader can be passed here. So we could even read this part from disk or network or any custom readers we want to implement. In our case, we can just create a bytes buffer which implements the io.Reader interface. We send the request and check for errors.

Next we declare another result variable (which is also a map type) to store the results returned from the request. We could read the full body first (like previous example) and then do json.Unmarshal on it. However, since the resp.Body is an io.Reader, we can just pass it to json.NewDecoder and then call Decode on it. Remember, we have to pass a pointer to our map, so we passed &result instead of just result.

The Decode function returns an error too. But we assumed it would not matter and didn’t check. But best practice would have been to handle it as well. We logged the result and result["data"]. The httpbin service sends different information about the request as the response. You can see those in the result map. If you want to see the data you sent, they will be in the data key of the result map.

### Posting Form Data

In our last example, we have submitted JSON payload. What if we wanted to submit form values? We have the handy http.PostForm function for that. This function takes the url and url.Values from net/url package.

The url.Values is a custom type which is actually map[string][]string internally. That is – it’s a map which contains string keys and against each key, there can be multiple string values ([]string).

In a form request, you can actually submit multiple values against one field name. That’s the reason it’s a slice of string, instead of just a key to value mapping.
Here’s an example code snippet:

```go
package main

import (
	"encoding/json"
	"log"
	"net/http"
	"net/url"
)

func main() {
	MakeRequest()
}

func MakeRequest() {
	formData := url.Values{
		"name": {"masnun"},
	}

	resp, err := http.PostForm("https://httpbin.org/post", formData)
	if err != nil {
		log.Fatalln(err)
	}

	var result map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&result)

	log.Println(result["form"])
}
```

In the above example, the formData variable is of url.Values type, which is map[string][]string — means it’s a map type, where each key has a value of []string.
For each key, we can have the list of string values.

We can use the http.PostForm function to submit forms quickly.
Remember, we talked about taking the advantage of resp.Body being an io.Reader to read as a stream? The json.NewDecoder can take the io.Reader to read the data chunk by chunk.

Then we use the Decode function to unmarshal the JSON into Go data structure, in this case, a map.

We could have used the ioutil.ReadAll like before to first read the data into the memory and then call the json.Unmarshall on it. It would have worked pretty well for a small payload.

## TIP1 : Always Close The Response Body

Here’s a lesson I learned the hard way. When we make a http request, we get a response and an error back. We may feel lazy and decide not to check for errors or close the response body (just like in the examples above).

And from the laziness comes disaster. If we do not close the response body, the connection may remain open and cause resource leak. But if the error is not nil that is in case of an error, the response can be nil. So we can’t just do a defer resp.Body.Close() in this case. We have to properly check error and then close the response body.

```go
client := http.DefaultClient
resp, err := client.Do(req)
if err != nil {
    return nil, err
}
defer resp.Body.Close()
```

## TIP2: Always Use a Timeout

Try to use your own http client and set a timeout. Not setting a timeout can block the connection and the goroutine and thus cause havoc. So do something like this:

```go
timeout := time.Duration(5 * time.Second)
client := http.Client{
    Timeout: timeout,
}
client.Get(url)
```

## Conclusion

We have seen how to send GET and POST requests in Golang using http package.

Good luck.
