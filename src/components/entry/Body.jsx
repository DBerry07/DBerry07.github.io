// import "./body.css";

export default function Body({ body }) {
  if (body != null && body != undefined) {
    return (
      <>
        {body.map((item, index) => (
          <p className="body-p m-2 text-xl" key={index}>
            {item}
          </p>
        ))}
      </>
    );
  }
}
