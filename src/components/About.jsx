import { skills } from '../data';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm Sree, an aspiring full-stack developer with a passion for building modern web applications.
          I recently completed the Foundations course on The Odin Project, and I'm currently diving deep into JavaScript and React.
          I enjoy crafting projects that are both functional and visually appealing.
        </p>
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
        <blockquote>
          <p>
            ⚔️ "Bring on the hardship — it's preferred on a path of carnage."
          </p>
          <cite>— Zoro</cite>
        </blockquote>
      </div>
    </section>
  );
}