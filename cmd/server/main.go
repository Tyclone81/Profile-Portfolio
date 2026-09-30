package main

import (
	"log"
	"net/http"
	"os" // Added to read environment variables
	deliveryHTTP "profile-portfolio/internal/delivery/http"
)

func main() {
	mux := http.NewServeMux()

	// Direct structural binding to static folder directory
	fileServer := http.FileServer(http.Dir("./ui/static/"))
	mux.Handle("/static/", http.StripPrefix("/static/", fileServer))

	// Single unified delivery route root anchor
	mux.HandleFunc("/", deliveryHTTP.ServeHome())

	// 1. Get the port from Render's environment, default to 9000 locally
	port := os.Getenv("PORT")
	if port == "" {
		port = "9000"
	}

	// 2. Bind to "0.0.0.0" so Render can route public traffic to your app
	address := "0.0.0.0:" + port

	log.Printf("[RUNTIME] Portfolio server active. Listening on %s\n", address)
	if err := http.ListenAndServe(address, mux); err != nil {
		log.Fatalf("[CRITICAL] Server crashed: %v", err)
	}
}
