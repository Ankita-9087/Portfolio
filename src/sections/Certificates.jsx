const certificates = [
  {
    title: "Prompt Engineering",
    detail: "Completed training in prompt writing and AI-assisted workflows.",
    year: "2024",
  },
  {
    title: "Excel",
    detail: "Completed training in spreadsheets, formulas, and data organization.",
    year: "2024",
  },
  {
    title: "Basic HTML, CSS and JavaScript",
    detail: "Completed training in basic web page structure, styling, and interaction.",
    year: "2024",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <h2 className="text-center text-5xl font-bold">Certificates</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {certificates.map((item) => (
          <article key={item.title} className="certificate-card glass p-6 rounded-xl">
            <p className="text-purple-300 font-semibold">{item.year}</p>
            <h3 className="text-2xl font-bold mt-3">{item.title}</h3>
            <p className="text-gray-300 leading-8 mt-3">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
