import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer relative mt-24 border-t border-white/10 bg-black/20 backdrop-blur-xl overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-cyan-500/10" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* Main Footer Content */}
        <div className="footer-grid grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Ankita Verma
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Passionate BCA student dedicated to learning,
              innovation, and building meaningful digital
              experiences through technology.
            </p>
            <p className="mt-5 text-purple-300 italic">
              "Learning Today, Creating Tomorrow."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Quick Links
            </h3>

            <ul className="footer-links space-y-3">
              {[
                "Home",
                "About",
                "Education",
                "Skills",
                // "Projects",
                "Certificates",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Connect With Me
            </h3>

            <div className="footer-contact space-y-3 text-gray-400">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-purple-400" />
                averm242114@gmail.com
              </p>

              <p>Nagpur, Maharashtra, India</p>
            </div>

            {/* Social Icons */}
            <div className="footer-social flex gap-4 mt-6">

              <a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-pink-600 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-gray-700 hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">

          <div className="footer-bottom flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ankita Verma. All Rights Reserved.
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-400">
              Made with
              <FaHeart className="text-red-500 animate-pulse" />
              using React & Tailwind CSS
            </p>

          </div>
        </div>
      </div>

      {/* Back To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
