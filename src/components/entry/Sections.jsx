import { Fragment } from "react";
import "./sections.css";
import Section from "../Section";

export default function Sections({ sections }) {
  let allSections = null;
  if (sections != null) {
    sections.map((sec, index) => {
      let section = <Section key={index} lines={sec} />;
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
