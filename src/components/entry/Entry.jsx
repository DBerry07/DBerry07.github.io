import "./entry.css";

function Entry(props) {
  
  return (
    <div id="entry">
      { props.content.map((item, index) =>
      item
    ) }
    </div>
  )
}

export default Entry;
