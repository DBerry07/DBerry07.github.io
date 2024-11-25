// import "./list.css";


export default function SubSection(props) {
    return (
        <div>
        <div className="list-item-title">{props.title}</div>
        {props.items.map((item, index) =>
            <p className="body-p" key={index}>{item}</p>
            )}
        </div>
    )
}