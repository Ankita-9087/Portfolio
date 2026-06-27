import heroImage from "../assets/hero-portrait.jpeg";

export default function Hero() {
  return (
    <section id="home" className="hero-section px-6 py-24 flex items-center">
      <div className="hero-shell max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="hero-copy">
          <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight">
            Hi, I am <span className="gradient-text">Ankita Verma</span>
          </h1>

          <p className="text-gray-300 leading-8 mt-6 max-w-xl">
            I am a BCA student from Nagpur, Maharashtra, building my foundation
            in computer applications, basic computer fundamentals, internet
            skills, CorelDRAW, communication, and creative problem-solving.
          </p>

          <div className="hero-actions flex gap-4 mt-8">
            {/* <a className="primary-action px-8 py-3 rounded-xl" href="#projects">
              View Projects
            </a> */}
            <a className="secondary-action glass px-8 py-3 rounded-xl" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-card">
            <span className="orbit-ring orbit-ring-one" />
            <span className="orbit-ring orbit-ring-two" />
            <img
              src={heroImage}
              alt="Ankita Verma portrait"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
