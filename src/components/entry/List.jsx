import "./list.css";

export default function List({ list }) {
  if (list != null) {
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
