import { Fragment } from "react";
// import "./entry.css";

function Entry(props) {
  
  return (
    <div id="entry" className="row-span-6 col-span-5">
      { props.content.map((item, index) =>
      <Fragment key={index}>
      {item}
      </Fragment>
    ) }
    </div>
  )
}

export default Entry;
