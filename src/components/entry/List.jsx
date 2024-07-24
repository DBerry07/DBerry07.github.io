import "./list.css";
import MyList from "../../data/myList";

export default function List(props) {
  console.log("checking list...")
  if (props.list != null) {
    console.log("list != null");
    return (
      <ul>
        <div className="list-item-title">{props.list.title}</div>
        {props.list.list.map((item, index) => (
          <li className="list-item" key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
