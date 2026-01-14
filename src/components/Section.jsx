export default function Section({
  children,
  className = "",
  id,
  eyebrow,
  title,
  desc,
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || desc) && (
          <div className="mb-12 text-center">
            {eyebrow && (
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-2">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
                {title}
              </h2>
            )}
            {desc && (
              <p className="max-w-2xl mx-auto text-neutral-600">{desc}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

