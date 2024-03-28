import { Fragment, useState, useEffect } from "react";
import MenuButton from "../MenuButton.jsx";
import { Toolbar } from "@mui/material";

export default function Title(data, handleDrawerOpen) {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800; // Set your desired breakpoint

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var title = null;
  if (Object.hasOwn(data, "title")) {
    if (width > breakpoint) {
      title = <span id="title">{data.title}</span>;
    } else {
      title = (
        <Fragment>
          <MenuButton handleDrawerOpen={handleDrawerOpen} />
          <span id="title">{data.title}</span>
        </Fragment>
      );
    }
  } else {
    title = null;
  }
  return title;
}
