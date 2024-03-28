import { Fragment } from "react";
import "../../css/Sections.css";

export default function Sections(data) {
  var sections = null;

  if (Object.hasOwn(data, "sections")) {
    data.sections.map((sec, index) => {
      // console.log(sec);
      // console.log(sec[0]);
      let title = (
        <Fragment>
          <div className="section_title">{sec[0]}</div>
        </Fragment>
      );
      var secbody;
      sec.map((line, ind) => {
        var linebreak;
        if (ind > 1) {
          linebreak = (
            <Fragment>
              <br></br>
            </Fragment>
          );
        }
        if (ind != 0) {
          secbody = (
            <Fragment>
              {secbody}
              {linebreak}
              <span className="line-span">{line}</span>
            </Fragment>
          );
        }
      });
      secbody = (
        <Fragment>
          <div className="section-body">{secbody}</div>
        </Fragment>
      );
      let single = (
        <Fragment>
          <div className="section">
            {title}
            {secbody}
          </div>
          <br></br>
        </Fragment>
      );
      sections = (
        <Fragment>
          {sections}
          {single}
        </Fragment>
      );
    });
    sections = <div id="entry-body">{sections}</div>;
  } else {
    sections = null;
  }
  return sections;
}
