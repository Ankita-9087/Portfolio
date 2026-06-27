const achievements = [
  "Participated in Maharashtra Bharat Scouts & Guides Training Program (2021).",
  "Secured 3rd Position in Hindi Story Telling Competition (2021).",
  "Participated in MY FM Rangrezz Painting Competition (2017).",
  "Participated in Lokmat Student Club Activities (2017).",
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <h2 className="text-center text-5xl font-bold">Achievements</h2>

      <ul className="max-w-4xl mx-auto mt-12 space-y-4">
        {achievements.map((item) => (
          <li key={item} className="achievement-item glass p-4 rounded-xl text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
