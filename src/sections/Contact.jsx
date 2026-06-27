const contact = {
  email: "averm242114@gmail.com",
  phone: "93*******1",
  address:
    "Plot No 1374-E, Parvati Nagar, Tijori Chal, Nagpur, Maharashtra 440027",
};

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name}\nEmail: ${email}`,
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="contact-panel max-w-6xl mx-auto glass p-10 rounded-3xl">
        <div>
          <p className="section-kicker">Let's connect</p>
          <h2 className="text-5xl font-bold mb-8">Contact Me</h2>

          <div className="contact-cards space-y-4 mb-8">
            <p className="text-gray-300">
              <span>Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p className="text-gray-300">
              <span>Phone</span>
              {contact.phone}
            </p>
            <p className="text-gray-300">
              <span>Address</span>
              {contact.address}
            </p>
          </div>
        </div>

        <form className="contact-form space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            aria-label="Name"
            className="w-full p-4 rounded-xl bg-black"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            className="w-full p-4 rounded-xl bg-black"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            aria-label="Message"
            className="w-full p-4 rounded-xl bg-black"
            required
          />

          <button type="submit" className="bg-purple-500 px-8 py-3 rounded-xl">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
