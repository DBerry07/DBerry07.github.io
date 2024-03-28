import "../../css/Subheading.css";
import { Fragment } from "react";

export default function Subheading(data) {
  var subheading = (
    <Fragment>
      <Fragment></Fragment>
    </Fragment>
  );

  if (Object.hasOwn(data, "subheading")) {
    // console.log(data.subheading);
    data.subheading.map((sub, index) => {
      if (index === 0) {
        subheading = (
          <div id="subheading">
            <i>{sub}</i>
          </div>
        );
      } else {
        subheading = (
          <Fragment>
            {subheading}
            <div className="subsubheading">{sub}</div>
          </Fragment>
        );
      }
    });
  } else {
    subheading = null;
  }

  return subheading;
}
