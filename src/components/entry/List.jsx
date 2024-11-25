// import "./list.css";
import MyList from "../../data/myList";

export default function List(props) {
  // console.log("checking list...")

  var title = props.title
  var myList = props.list

  if (props.list != null) {
    // console.log("list != null");
    return (
      <ul>
        <div className="list-item-title">{title}</div>
        { myList.map((item, index) => (
          <li className="list-item" key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
