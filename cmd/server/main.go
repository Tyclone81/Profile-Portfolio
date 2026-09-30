package main

import (
	"log"
	"net/http"
	deliveryHTTP "profile-portfolio/internal/delivery/http"
)

func main() {
	mux := http.NewServeMux()

	// Direct structural binding to static folder directory
	fileServer := http.FileServer(http.Dir("./ui/static/"))
	mux.Handle("/static/", http.StripPrefix("/static/", fileServer))

	// Single unified delivery route root anchor
	mux.HandleFunc("/", deliveryHTTP.ServeHome())

	log.Println("[RUNTIME] Portfolio server active. Access live canvas at http://localhost:9000")
	if err := http.ListenAndServe(":9000", mux); err != nil {
		log.Fatalf("[CRITICAL] Server crashed: %v", err)
	}
}
