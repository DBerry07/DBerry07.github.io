import "./title.css";

export default function Title(props) {
  if (props.title != null) {
    return <span id="title">{props.title}</span>;
  }
}
