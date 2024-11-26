// import "./list.css";


export default function SubSection(props) {
    return (
        <div>
        <div className="list-item-title text-2xl text-red-700 underline mt-3">{props.title}</div>
        {props.items.map((item, index) =>
            <p className="body-p" key={index}>{item}</p>
            )}
        </div>
    )
}