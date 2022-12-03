---
title: "Getting started with CRUD API using Go"
excerpt: "Creating, reading, updating, and deleting data (CRUD) are fundamental operations in many applications. In this article, we will explore how to create a CRUD API using Go, a popular and powerful programming language."
coverImage: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
date: "2020-11-20T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

In this post we learn

1. How to use SQLite3 in Go
2. Creating a REST API with the go-restful package

## Prerequisite

Install SQLite3 database.

```terminal
On Ubuntu, run this command:
$ apt-get install sqlite3 libsqlite3-dev

On OS X, you can use the brew command to install SQLite3:
$ brew install sqlite3

Now, install the go-restful package with the following get command:
$ go get github.com/emicklei/go-restful

All SQLite3 operations are going to be done using a library called go-sqlite3
$ go get github.com/mattn/go-sqlite3
```

## CRUD operations and SQLite3 basics

Before building an API. Let’s take a look at how Go interacts with SQL driver. We will create a table, insert a player into the table, read from the table, update an existing player, and delete a player.

```go
package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

// Player schema from the database
type Player struct {
	id       int
	name     string
	club     string
	position string
	age      uint8
}

func createPlayersTable() *sql.DB {
	db, err := sql.Open("sqlite3", "./players.db")

	if err != nil {
		log.Println(err)
	}

	// Create table
	statement, err := db.Prepare("CREATE TABLE IF NOT EXISTS players (id INTEGER PRIMARY KEY, name VARCHAR(64) NOT NULL, club VARCHAR(64) NOT NULL, age INTEGER, position VARCHAR(64) NOT NULL)")
	if err != nil {
		fmt.Println("errrrr ", err)
		log.Println("Error in creating table")
	} else {
		log.Println("Successfully created table players!")
	}
	statement.Exec()

	//Flushing the DB so that we don't add already added players each time we run the programme.
	flushDB, _ := db.Prepare("delete from players")
	flushDB.Exec()

	return db
}

func createPlayer(dbDriver *sql.DB) {
	statement, err := dbDriver.Prepare("INSERT INTO players(name, club, position, age) VALUES (?, ?, ?, ?)")
	if err != nil {
		fmt.Println(err)
		log.Panic("Error in creating player")
	}
	statement.Exec("Kai Havertz", "Chelsea", "CAM", 21)
	statement.Exec("Mason Maount", "Chelsea", "CM", 22)
	statement.Exec("Jorginho", "Chelsea", "CM", 22)

	log.Println("Inserted players in the database!")
}

func readPlayer(dbDriver *sql.DB) {
	rows, _ := dbDriver.Query("SELECT id, name, club, position, age FROM players LIMIT 20")
	var tempPlayer Player

	for rows.Next() {
		rows.Scan(&tempPlayer.id, &tempPlayer.name, &tempPlayer.club, &tempPlayer.position, &tempPlayer.age)
		log.Printf("ID:%d, Name:%s, Club:%s, Position:%s, Age:%d\n", tempPlayer.id,
			tempPlayer.name, tempPlayer.club, tempPlayer.position, tempPlayer.age)
	}

	log.Println("Fetched all players from the database!")
}

func updatePlayer(dbDriver *sql.DB) {
	statement, _ := dbDriver.Prepare("update players set name=? where name=?")
	statement.Exec("Mason Mount", "Mason Maount")
	log.Println("Successfully updated the player in the database!")
}

func deletePlayer(dbDriver *sql.DB) {
	statement, _ := dbDriver.Prepare("delete from players where name=?")
	statement.Exec("Jorginho")
	log.Println("Successfully deleted the plauyer from database!")
}

func main() {

	db := createPlayersTable()
	defer db.Close()
	fmt.Println("===============================================")
	createPlayer(db)
	readPlayer(db)
	fmt.Println("===============================================")
	updatePlayer(db)
	readPlayer(db)
	fmt.Println("===============================================")
	deletePlayer(db)
	readPlayer(db)
}
```

![crud-api-using-go](https://miro.medium.com/max/908/1*DBjtI65FkFHjrTelO_XkqA.png)

## Building a Football Club API with go-restful

Let us use the knowledge we gained in the previous section and create an API for the Football Database project. The roadmap is as follows:

1. Design a REST API document
2. Create models for a database
3. Implement the API logic

## Design specification

Before creating any API, we should know what the specifications of APIs are in the form of a document

HTTP VERB Path Action Resource

1.  GET /club Read Club
2.  GET /club/{club-id} Read Club
3.  POST /club Create Club
4.  DELETE /club/{club-id} DELETE Club
5.  GET /player Read Player
6.  GET /player/{player-id} Read Player
7.  POST /player Create Player
8.  DELETE /player/{player-id} DELETE Player

# Creating database models

Write a few SQL strings for creating the table for the club, player, and route resources. We are going to create a project layout for this API.

![crud-api-using-go](https://miro.medium.com/max/635/1*N2cs1yRwI9R_5iRsQVJhcA.png)

Let us start with the `dbutils/models.go` file. Add two models each for players, and clubs in the `models.go` file:

Initialize the (create tables) database in the init-tables.go file:

```go
package dbutils

import (
	"database/sql"
	"log"
)

// Initialize the database and create required table
func Initialize(dbDriver *sql.DB) {
	statement, driverError := dbDriver.Prepare(clubs)
	if driverError != nil {
		log.Println("driverError ", driverError)
	}

	// Create player table
	_, statementError := statement.Exec()
	if statementError != nil {
		log.Println("Table already exists!")
	}

	statement, statementError = dbDriver.Prepare(players)
	if statementError != nil {
		log.Println("statementError", statementError)
	}
	statement.Exec()

	log.Println("All tables created/initialized successfully!")
}
```

For the `models/go`

```go
package dbutils

const clubs = `
	CREATE TABLE IF NOT EXISTS clubs (
		ID INTEGER PRIMARY KEY AUTOINCREMENT,
		NAME VARCHAR(64) NOT NULL,
		COUNTRY VARCHAR(64) NOT NULL,
		STADIUM VARCHAR(64) NOT NULL,
		CreatedAt TIME NULL
	)
`

const players = `
	CREATE TABLE IF NOT EXISTS players (
		ID INTEGER PRIMARY KEY AUTOINCREMENT,
		NAME VARCHAR(64) NOT NULL,
		ClubID INT,
		AGE INTEGER,
		POSITION VARCHAR(64) NOT NULL,
		CreatedAt TIME NULL,
		FOREIGN KEY (ClubID) REFERENCES clubs(ID)
	)
`
```

If you observe here, we are not importing clubs, players. But, since this file is in the db utils package, variables in models.go are accessible here.

We will go step by step and understand how to build REST services using go-restful in this example. First, add the necessary imports to the program:

![crud-api-using-go](https://miro.medium.com/max/908/1*NJIufQT5kLhiTktwUBKARQ.png)

We need two external packages, go-restful and go-sqlite3 , for building the API logic. The first one is for handlers and the second package is for adding persistence features.

In GO programming we need a few structs to handle data coming in and out of the database. There should be data holders for all the models, so we will define them next. Take a look at the following code snippet:

![crud-api-using-go](https://miro.medium.com/max/908/1*akkRRG01DLI85C_JU0UssQ.png)

Now comes the actual go-restful implementation. We need to create a container for our API in go-restful . Then, we should register the web services to that container.

![crud-api-using-go](https://miro.medium.com/max/908/1*wrUa0h_FpXlMSqBU1yk5Ug.png)

Now, let us define the function handlers:

![crud-api-using-go](https://miro.medium.com/max/908/1*aVbXH6mORbMZtkCxURINdA.png)

Complete code snippet can be found here

```go
package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/emicklei/go-restful"
	"github.com/harshitsinghai/dbutils"
	_ "github.com/mattn/go-sqlite3"
)

// DB Driver visible to whole program
var DB *sql.DB

// ClubResource is the model for holding club information
type ClubResource struct {
	ID        int
	NAME      string
	COUNTRY   string
	STADIUM   string
	CreatedAt string
}

// PlayerResource is the model for holding player information
type PlayerResource struct {
	ID        int
	NAME      string
	ClubID    int
	AGE       int
	POSITION  string
	CreatedAt string
}

// Register ClubResource add paths and routes to container
func (c *ClubResource) Register(container *restful.Container) {
	ws := new(restful.WebService)
	ws.Path("/club").Consumes(restful.MIME_JSON).Produces(restful.MIME_JSON)
	ws.Route(ws.GET("").To(c.getAllClub))
	ws.Route(ws.GET("/{club-id}").To(c.getClub))
	ws.Route(ws.POST("").To(c.createClub))
	ws.Route(ws.DELETE("/{club-id}").To(c.removeClub))

	container.Add(ws)
}

// Register PlayerResource add paths and routes to container
func (p *PlayerResource) Register(container *restful.Container) {
	ws := new(restful.WebService)
	ws.Path("/player").Consumes(restful.MIME_JSON).Produces(restful.MIME_JSON)
	ws.Route(ws.GET("").To(p.getAllPlayer))
	ws.Route(ws.GET("/{player-id}").To(p.getPlayer))
	ws.Route(ws.POST("").To(p.createPlayer))
	ws.Route(ws.DELETE("/{player-id}").To(p.removePlayer))

	container.Add(ws)
}

// GET http://localhost:8000/club
func (c ClubResource) getAllClub(request *restful.Request, response *restful.Response) {
	rows, err := DB.Query("SELECT ID, NAME, COUNTRY, STADIUM, CreatedAt from clubs LIMIT 20")
	var tempClub ClubResource
	var allClub = []ClubResource{}

	if err != nil {
		response.AddHeader("Content-Type", "text/plain")
		response.WriteErrorString(http.StatusNotFound, "Clubs could not be found.")
		return
	}

	for rows.Next() {
		rows.Scan(&tempClub.ID, &tempClub.NAME, &tempClub.COUNTRY, &tempClub.STADIUM, &tempClub.CreatedAt)
		allClub = append(allClub, tempClub)
	}
	response.WriteEntity(allClub)
}

// GET http://localhost:8000/club/1
func (c ClubResource) getClub(request *restful.Request, response *restful.Response) {
	id := request.PathParameter("club-id")

	var tempPlayer PlayerResource
	var clubDetails struct {
		CLUB    ClubResource
		PLAYERS []PlayerResource
	}

	cluberr := DB.QueryRow("SELECT * from clubs WHERE ID = ?", id).Scan(&clubDetails.CLUB.ID, &clubDetails.CLUB.NAME, &clubDetails.CLUB.COUNTRY, &clubDetails.CLUB.STADIUM, &clubDetails.CLUB.CreatedAt)
	rows, err := DB.Query("SELECT players.ID, players.NAME, players.POSITION, players.AGE, players.ClubID from clubs INNER JOIN players ON clubs.ID == players.ClubID WHERE clubs.ID = ?", id)

	if err != nil && cluberr != nil {
		log.Println(err)
		response.AddHeader("Content-Type", "text/plain")
		response.WriteErrorString(http.StatusNotFound, "Trains could not be found.")
		return
	}

	for rows.Next() {
		rows.Scan(&tempPlayer.ID, &tempPlayer.NAME, &tempPlayer.POSITION, &tempPlayer.AGE, &tempPlayer.ClubID)
		clubDetails.PLAYERS = append(clubDetails.PLAYERS, tempPlayer)
	}

	response.WriteEntity(clubDetails)
}

// POST http://localhost:8000/club
func (c ClubResource) createClub(request *restful.Request, response *restful.Response) {
	decoder := json.NewDecoder(request.Request.Body)
	var tempClub ClubResource
	err := decoder.Decode(&tempClub)

	statement, _ := DB.Prepare(`INSERT INTO clubs
									(NAME, COUNTRY, STADIUM, CreatedAt) VALUES (?, ?, ?, ?)`)
	result, err := statement.Exec(tempClub.NAME, tempClub.COUNTRY, tempClub.STADIUM, time.Now())

	if err == nil {
		newID, _ := result.LastInsertId()
		tempClub.ID = int(newID)
		response.WriteHeaderAndEntity(http.StatusCreated, tempClub)
	} else {
		response.AddHeader("Content-Type", "text/plain")
		response.WriteErrorString(http.StatusInternalServerError, err.Error())
	}
}

// DELETE http://localhost:8000/club/1
func (c ClubResource) removeClub(request *restful.Request, response *restful.Response) {
	id := request.PathParameter("club-id")

	statement, _ := DB.Prepare("DELETE FROM clubs WHERE ID=?")
	_, err := statement.Exec(id)

	if err == nil {
		response.WriteHeader(http.StatusOK)
	} else {
		response.AddHeader("Content-Type", "text/plain")
		response.WriteErrorString(http.StatusInternalServerError, err.Error())
	}
}

// GET http://localhost:8000/player
func (p PlayerResource) getAllPlayer(request *restful.Request, response *restful.Response) {
	rows, err := DB.Query("SELECT ID, NAME, ClubID, AGE, POSITION, CreatedAt from players LIMIT 20")

	var tempPlayer PlayerResource
	var allPlayer = []PlayerResource{}

	if err != nil {
		response.AddHeader("Content-Type", "text/plain")
		response.WriteErrorString(http.StatusNotFound, "Clubs could not be found.")
	}
	for rows.Next() {
		rows.Scan(&tempPlayer.ID, &tempPlayer.NAME, &tempPlayer.ClubID, &tempPlayer.AGE, &tempPlayer.POSITION, &tempPlayer.CreatedAt)
		allPlayer = append(allPlayer, tempPlayer)
	}

	response.WriteEntity(allPlayer)
}

// GET http://localhost:8000/player/1
func (p PlayerResource) getPlayer(request *restful.Request, response *restful.Response) {
	id := request.PathParameter("player-id")
	err := DB.QueryRow("SELECT ID, NAME, ClubID, AGE, POSITION from players WHERE ID=?", id).Scan(&p.ID, &p.NAME, &p.ClubID, &p.AGE, &p.POSITION)

	if err != nil {
		log.Println(err)
		response.AddHeader("Content-Type", "text/plain")
		response.WriteErrorString(http.StatusNotFound, "Player could not be found.")
	} else {
		response.WriteEntity(p)
	}
}

// POST http://localhost:8000/player
func (p PlayerResource) createPlayer(request *restful.Request, response *restful.Response) {
	decoder := json.NewDecoder(request.Request.Body)
	var tempPlayer PlayerResource
	err := decoder.Decode(&tempPlayer)

	if err != nil {
		response.AddHeader("Content-Type", "text/plain")
		response.WriteErrorString(http.StatusInternalServerError,
			err.Error())
	}

	statement, _ := DB.Prepare("INSERT INTO players (NAME, ClubID, AGE, POSITION, CreatedAt) VALUES (?, ?, ?, ?, ?)")
	result, err := statement.Exec(tempPlayer.NAME, tempPlayer.ClubID, tempPlayer.AGE, tempPlayer.POSITION, time.Now())

	if err == nil {
		newID, _ := result.LastInsertId()
		tempPlayer.ID = int(newID)
		response.WriteHeaderAndEntity(http.StatusCreated, tempPlayer)
	} else {
		response.AddHeader("Content-Type", "text/plain")
		response.WriteErrorString(http.StatusInternalServerError, err.Error())
	}
}

// DELETE http://localhost:8000/club/1
func (p PlayerResource) removePlayer(request *restful.Request, response *restful.Response) {
	id := request.PathParameter("player-id")

	statement, _ := DB.Prepare("DELETE FROM players WHERE ID=?")
	_, err := statement.Exec(id)

	if err == nil {
		response.WriteHeader(http.StatusOK)
	} else {
		response.AddHeader("Content-Type", "text/plain")
		response.WriteErrorString(http.StatusInternalServerError, err.Error())
	}
}

func main() {
	var err error
	// Connect to Database
	DB, err = sql.Open("sqlite3", "./players.db")
	if err != nil {
		log.Println("Driver creation failed!")
	}

	// Create tables
	dbutils.Initialize(DB)

	wsContainer := restful.NewContainer()
	wsContainer.Router(restful.CurlyRouter{})

	c := ClubResource{}
	c.Register(wsContainer)

	p := PlayerResource{}
	p.Register(wsContainer)

	log.Println("Started listening on PORT 8000")
	server := &http.Server{
		Addr:    ":8000",
		Handler: wsContainer,
	}

	log.Fatal(server.ListenAndServe())
}
```

`go-restful is a lightweight library that is powerful in creating RESTful services in an elegant way. The main theme is to convert resources (models) into consumable APIs. Using other heavy frameworks may speed up the development, but the API can end up slower because of the wrapping of code. go-restful is a lean and low-level package for API creation.`

That’s it for today. See you soon.
