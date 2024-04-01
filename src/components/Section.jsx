export default function Section({ lines, ...props }) {
  let title = (
    <div className="section_title" {...props}>
      {lines[0]}
    </div>
  );
  let sectionBody;
  lines.map((line, index) => {
    if (index != 0) {
      sectionBody = (
        <>
          {sectionBody}
          <p className="line-span" key={index}>
            {line}
          </p>
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
