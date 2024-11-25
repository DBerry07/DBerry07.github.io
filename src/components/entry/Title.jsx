// import "./title.css";

export default function Title(props) {
  if (props.title != null) {
    return <div id="headbar" className="justify-center">
      {props.title}
      </div>;
  }
}
