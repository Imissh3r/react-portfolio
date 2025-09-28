export default function ProjectCard({ title, live, repo, description }) {
  return (
    <div className="project-card">
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="links">
        <a href={live} target="_blank" rel="noreferrer">Live</a>
        <a href={repo} target="_blank" rel="noreferrer">Code</a>
      </div>
    </div>
  );
}
