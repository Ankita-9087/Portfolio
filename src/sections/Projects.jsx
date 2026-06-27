const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React and Vite.",
    visualClass: "project-visual-one",
  },
  {
    title: "Student Profile",
    description: "A clean profile layout for sharing education and skills.",
    visualClass: "project-visual-two",
  },
  {
    title: "Creative Showcase",
    description: "A visual section for achievements, certificates, and work.",
    visualClass: "project-visual-three",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-center text-5xl font-bold">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {projects.map((item) => (
          <article
            key={item.title}
            className="project-card glass rounded-3xl overflow-hidden hover:scale-105 transition"
          >
            <div className={`project-visual ${item.visualClass}`} aria-hidden="true" />

            <div className="p-6">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
