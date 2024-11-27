// import "./title.css";

export default function Title(props) {
  if (props.title != null) {
    return <div id="headbar" className="justify-center text-2xl lg:text-3xl font-enriqueta underline">
      {props.title}
      </div>;
  }
}
