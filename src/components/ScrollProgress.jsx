import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const update = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setScroll(
        (window.pageYOffset / total) * 100
      );
    };

    window.addEventListener("scroll", update);

    return () =>
      window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-purple-500 z-50"
      style={{ width: `${scroll}%` }}
    />
  );
}