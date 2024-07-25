export default function EntryBox(props) {
    return (
        <div id="content-box">
            {props.items.map((item, index) =>
            item
            )}
        </div>
    )
}