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
				Role:     "Software Engineer",
				Company:  "Zone01 Kisumu",
				Timeline: "Jun 2026 – Present",
				BulletPoints: []string{
					"Collaborating inside a rigorous peer learning matrix to design and deploy optimized web services.",
					"Unpacking how low-level systems function under the hood using Go as the primary systems language.",
				},
			},
		},
		Projects: []models.Project{
			{
				Title:        "Zone01 Advanced Web Forum Engine",
				Description:  "An internal, statically compiled Go network platform engineered to meet rigid 01-edu evaluation specs. Features strict CGO SQLite tracking abstractions, single-active-session multi-browser constraints, and thread-safe upvote/downvote interaction engines.",
				Type:         "Internal",
				Technologies: []string{"Go", "SQLite", "Docker", "Vanilla JS"},
				SourceURL:    "https://github.com/Tyclone81",
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
