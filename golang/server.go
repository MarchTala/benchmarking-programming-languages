package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

type User struct {
	ID             int    `json:"id"`
	BatchNumber    string `json:"BatchNumber"` // Use uppercase 'B' to match the column name in the database
	TransactionDate string `json:"TransactionDate"`
	LotNumber      string `json:"LotNumber"`
}

func main() {
	// Open a connection to the MySQL database
	db, err := sql.Open("mysql", "root:password@tcp(localhost:3306)/database")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Set up a HTTP server
	http.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
		// Fetch data from the database
		rows, err := db.Query("SELECT Id, BatchNumber, TransactionDate, LotNumber FROM tbl_user_reports LIMIT 100000")
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		// Create a slice to hold the users
		var users []User

		// Iterate over the rows and populate the users slice
		for rows.Next() {
			var user User
			err := rows.Scan(&user.ID, &user.BatchNumber, &user.TransactionDate, &user.LotNumber)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			users = append(users, user)
		}

		// Return JSON response
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(users)
	})

	// Start the HTTP server
	fmt.Println("Server listening on port 3003")
	log.Fatal(http.ListenAndServe(":3003", nil))
}

// RUN:
// go build server.go
// ./server