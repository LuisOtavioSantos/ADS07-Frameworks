function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-3xl px-4 py-8 text-center ${className}`}>
      {children}
    </section>
  );
}

export default Section;
