import { Fragment } from "react";

export default function Sections(data) {
  var sections = null;

  if (Object.hasOwn(data, "sections")) {
    data.sections.map((sec, index) => {
      console.log(sec);
      console.log(sec[0]);
      let item = (
        <Fragment>
          <h4 className="section_title">{sec[0]}</h4>
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