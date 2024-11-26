// import "./body.css";

export default function Body({ body }) {
  if (body != null && body != undefined) {
    return (
      <>
        {body.map((item, index) => (
          <p className="body-p mt-2 text-xl" key={index}>
            {item}
          </p>
        ))}
      </>
    );
  }
}
