import { Fragment } from "react";
import "../../css/Sections.css";

export default function Sections(data) {
  var sections = null;

  if (Object.hasOwn(data, "sections")) {
    data.sections.map((sec, index) => {
      console.log(sec);
      console.log(sec[0]);
      let item = (
        <Fragment>
          <div className="section_title">{sec[0]}</div>
        </Fragment>
      );
      if (sections != null) {
        sections = (
          <Fragment>
            {sections}
            {item}
          </Fragment>
        );
      } else {
        sections = item;
      }
      // console.log(sections);
      sec.map((line, ind) => {
        if (ind != 0) {
          let thing = (
            <Fragment>
              <p>{line}</p>
            </Fragment>
          );
          sections = (
            <Fragment>
              {sections}
              {thing}
            </Fragment>
          );
        }
      });
    });
    sections = <div id="entry-body">{sections}</div>;
  } else {
    sections = null;
  }
  return sections;
}
