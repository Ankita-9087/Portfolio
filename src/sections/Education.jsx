const education = [
  {
    title: "Bachelor of Computer Application",
    institute:
      "Dr. S.C. Gulhane Prerna College of Commerce, Science & Art (RTMNU)",
    year: "2026",
    // detail: "Currently pursuing BCA.",
  },
  {
    title: "Higher Secondary Certificate",
    institute: "Dinanath Junior College and School, Nagpur",
    year: "2023",
    // detail: "41.17%",
  },
  {
    title: "Secondary School Certificate",
    institute: "Bipin Krishna Vidya Bhavan Junior College, Nagpur",
    year: "2021",
    // detail: "63.20%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <h2 className="text-center text-5xl font-bold">Education</h2>

      <div className="max-w-4xl mx-auto mt-16 space-y-4">
        {education.map((item) => (
          <article key={item.title} className="timeline-card glass p-6 rounded-xl">
            <p className="text-purple-300 font-semibold">{item.year}</p>
            <h3 className="text-2xl font-bold mt-3">{item.title}</h3>
            <p className="text-gray-300 leading-8 mt-3">{item.institute}</p>
            <p className="text-gray-300">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
