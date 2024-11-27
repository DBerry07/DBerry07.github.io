import { Fragment } from "react";
// import "./panel.css";

function Entry(props) {
  
  return (
    <div id="entry" className="row-span-6 lg:row-span-9 lg:col-span-10 grid grid-cols-1 grid-rows-7 h-full w-full place-items-center">
      { props.content.map((item, index) =>
      <Fragment key={index}>
      {item}
      </Fragment>
    ) }
    </div>
  )
}

export default Entry;
