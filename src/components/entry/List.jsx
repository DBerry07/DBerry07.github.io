import "./list.css";

export default function List({ list }) {
  if (list != null) {

    var title;
    if (list.at(0).at(0) != '-') {
      title = list.at(0);
      list = list.slice(1, list.length - 1);
    } else {
      title = ""
    }

    return (
      
      <ul>
        {title}
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
