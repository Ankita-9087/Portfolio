const certificates = [
  {
    title: "Basic Computer Fundamentals",
    detail: "Completed training in Basic Computer Fundamentals.",
    year: "2023",
  },
  {
    title: "Internet Surfing",
    detail: "Completed Internet Surfing training course.",
    year: "2023",
  },
  {
    title: "CorelDRAW Training",
    detail: "Completed CorelDRAW training course.",
    year: "2023",
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
