import SmileFace from "./SmileFace";

function SectionTitle({ title, isAbout = false }) {
  return (
    <div className={isAbout ? "border-t-6 border-b" : "border-t-2 border-b"}>
      <h2
        className={
          isAbout
            ? "section-title container p-4 pt-6 text-5xl font-serif italic flex gap-3"
            : "section-title container p-4 text-3xl font-mono flex"
        }
      >
        {title}

        <span className="text-primary">
          {isAbout ? <SmileFace size="medium" /> : "_"}
        </span>
      </h2>
    </div>
  );
}

export default SectionTitle;
