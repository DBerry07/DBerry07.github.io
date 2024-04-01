export default function Body({ body }) {
  if (body != null) {
    return (
      <div id="entry-body">
        {body.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    );
  }
}
