import { Fragment } from "react";
import "../../css/Sections.css";
import Section from "../Section";

export default function Sections({ sections }) {
  let allSections = null;
  if (sections != null) {
    sections.map((sec, index) => {
      let section = <Section lines={sec} />;
      allSections = (
        <>
          {allSections}
          <br></br>
          {section}
        </>
      );
    });
    return <>{allSections}</>;
  }
}
