export default function Section({ lines }) {
  let title = <div className="section_title">{lines[0]}</div>;
  let sectionBody;
  lines.map((line, ind) => {
    if (ind != 0) {
      sectionBody = (
        <>
          {sectionBody}
          <p className="line-span">{line}</p>
        </>
      );
    }
  });
  sectionBody = <div className="section-body">{sectionBody}</div>;
  return (
    <>
      <div className="section">
        {title}
        {sectionBody}
      </div>
    </>
  );
}
