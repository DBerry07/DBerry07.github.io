import { Fragment } from "react";
import "./entry.css";

function Entry(props) {
  
  return (
    <div id="entry">
      { props.content.map((item, index) =>
      <Fragment key={index}>
      {item}
      </Fragment>
    ) }
    </div>
  )
}

export default Entry;
