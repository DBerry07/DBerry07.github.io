import { Fragment } from "react";
import "../../css/Sections.css";

export default function Sections({ sections }) {
  let totalSections = null;
  if (sections != null) {
    sections.map((sec, index) => {
      let title = <div className="section_title">{sec[0]}</div>;
      let secbody;
      sec.map((line, ind) => {
        var linebreak;
        if (ind > 1) {
          linebreak = <br></br>;
        }
        if (ind != 0) {
          secbody = (
            <>
              {secbody}
              {linebreak}
              <span className="line-span">{line}</span>
            </>
          );
        }
      });
      secbody = <div className="section-body">{secbody}</div>;
      let single = (
        <>
          <div className="section">
            {title}
            {secbody}
          </div>
          <br></br>
        </>
      );
      totalSections = (
        <>
          {totalSections}
          {single}
        </>
      );
    });
    return <div id="entry-body">{totalSections}</div>;
  }
}
