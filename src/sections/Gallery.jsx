const moments = [
  {
    title: "Learning",
    description: "Building a strong foundation in programming and technology.",
  },
  {
    title: "Creating",
    description: "Turning ideas into clear, useful digital experiences.",
  },
  {
    title: "Growing",
    description: "Improving through teamwork, practice, and curiosity.",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-center text-5xl font-bold">Gallery</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {moments.map((item) => (
          <article key={item.title} className="glass p-8 rounded-xl">
            <div className="gallery-mark" aria-hidden="true" />
            <h3 className="text-2xl font-bold mt-6">{item.title}</h3>
            <p className="text-gray-300 leading-8 mt-3">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
