package data

import "profile-portfolio/internal/models"

func GetAccountRegistry() models.SystemData {
	return models.SystemData{
		Name:       "Victor Ogero",
		Title:      "Backend & Systems Architect",
		Bio:        "Process-driven full stack developer and backend systems engineer operating deep within the rigorous peer-to-peer 01-edu ecosystem to build high-performance, statically linked network software.",
		PhotoPath:  "/static/images/profile.jpg",
		ResumePath: "/static/docs/resume.pdf",
		Socials: []models.SocialLink{
			{Platform: "LinkedIn", URL: "https://www.linkedin.com/in/victor-ogero-8594611a4"},
			{Platform: "GitHub", URL: "https://github.com/Tyclone81"},
			{Platform: "Devto", URL: "https://dev.to/tyclone81"},
			{Platform: "X", URL: "https://x.com/tylervic2"},
		},
		Skills: []string{
			"Go Systems Core", "SQL Database Design", "Concurrency Primitives", "Multi-Stage Dockerization", "Vanilla JS UI Engineering",
		},
		Hobbies: []string{
			"System Architecture", "Open Source", "Low-Level Systems", "Technical Writing",
		},
		WorkHistory: []models.Experience{
			{
				Role:    "Software Engineer",
				Company: "Zone01 Kisumu",
				Summary: "Immersed in an intensive, peer-led software engineering collective focused on building robust, high-performance systems from first principles. Operating deep within Go to architect concurrent network protocols, optimize algorithmic data structures, and engineer statically compiled backend services through continuous peer code reviews and evaluation loops.",
			},
		},
		Projects: []models.Project{
			{
				Title:        "Zone01 Systems & Core Engineering Suite",
				Description:  "A comprehensive portfolio of systems-level Go software engineered within the intensive peer-to-peer 01-edu matrix. Encompasses concurrent TCP socket multiplexing (net-cat), algorithmic stack sorting optimization (push-swap), relational forum engines with SQLite CGO and session security (forum), and containerized RESTful API integration platforms.",
				Type:         "Internal",
				Technologies: []string{"Go Systems", "Concurrent TCP Sockets", "Algorithms", "SQLite", "Docker"},
				SourceURL:    "https://github.com/Tyclone81?tab=repositories",
			},
			{
				Title:        "INKA LittUp Platform",
				Description:  "A lightweight, zero-friction web platform built for ultimate convenience. It bridges the critical infrastructure gap by instantly connecting nationwide clients with a trusted network of certified electrical experts for safe, reliable home and business wiring.",
				Type:         "Personal",
				Technologies: []string{"HTML5", "CSS3", "Go Standard Library"},
				SourceURL:    "https://inkalittup.onrender.com/",
			},
		},
		Articles: []models.Article{
			{
				Title:    "The Thin Line Between Vibe Coding and Viable Coding",
				Platform: "dev.to",
				URL:      "https://dev.to/tyclone81/the-thin-line-between-vibe-coding-and-viable-coding-1mal",
				Date:     "Sep 2026",
			},
		},
	}
}
