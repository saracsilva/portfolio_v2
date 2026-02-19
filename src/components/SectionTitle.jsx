function SectionTitle({ title }) {
  return (
    <div className="border-t-2 border-b">
      <h2 className="section-title container p-4 text-3xl font-mono">
        {title}
        <span className="text-primary">_</span>
      </h2>
    </div>
  );
}

export default SectionTitle;
