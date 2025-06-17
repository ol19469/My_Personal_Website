import "./Projects.css";

function Projects() {
  const projectList = [
    {
      title: "Book Buddy",
      description:
        "A full-stack book review platform with authentication and user dashboards.",
      tech: ["React", "Express", "PostgreSQL"],
      link: "https://github.com/yourusername/book-buddy",
    },
    {
      title: "Game Deals Tracker",
      description:
        "Frontend app that fetches game deals using an external API and displays savings.",
      tech: ["React", "JavaScript", "REST API"],
      link: "https://github.com/ol19469/PC_Game_Sales",
    },
    // Add more as needed
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="project-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
