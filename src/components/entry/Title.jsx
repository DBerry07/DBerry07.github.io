import "./title.css";

export default function Title(props) {
  if (props.title != null) {
    return <div id="headbar">
    <span id="title">
      {props.title}
      </span>
      </div>;
  }
}
