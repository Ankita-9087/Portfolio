export default function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="color-wash" />
      <div className="star-layer star-layer-a" />
      <div className="star-layer star-layer-b" />
      <div className="soft-bubbles" />
      <div className="floating-petals" />
      <div className="butterfly-field">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} className={`butterfly butterfly-${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
