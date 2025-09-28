import Orb from "./Orb";

export default function Hero() {
  return (
    <section id="hero" className="hero">
        <Orb
          hoverIntensity={0.8}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Sree</span></h1>
        <p className="tagline">
          A passionate developer building modern, interactive web experiences.
        </p>
        <a href="#projects" className="cta-btn">View Projects</a>
      </div>
    </section>
  );
}