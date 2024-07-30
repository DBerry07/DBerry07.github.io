import "./body.css";

export default function Body({ body }) {
  if (body != null && body != undefined) {
    return (
      <>
        {body.map((item, index) => (
          <p className="body-p" key={index}>
            {item}
          </p>
        ))}
      </>
    );
  }
}
