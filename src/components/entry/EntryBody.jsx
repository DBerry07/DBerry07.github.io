export default function EntryBody(props) {
    return (
        <div id="entry-body">
            {props.items.map((item, index) =>
            item
            )}
        </div>
    )
}