// import "./list.css";
import MyList from "../../data/myList";

export default function List(props) {
  // console.log("checking list...")

  var title = props.title
  var myList = props.list

  if (props.list != null) {
    // console.log("list != null");
    return (
      <ul className='mt-2'>
        <div className="list-item-title first:text-2xl first:font-bold first:mt-3">{title}</div>
        { myList.map((item, index) => (
          <li className="list-item" key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
