function SectionTitle({ title }) {
  return (
    <h2 className="section-title border-t-2 border-b p-4 text-3xl font-mono">
      {title}
      <span className="text-primary">_</span>
    </h2>
  );
}

export default SectionTitle;
