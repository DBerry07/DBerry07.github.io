import "../../css/Body.css";

export default function Body({ body }) {
  if (body != null) {
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
