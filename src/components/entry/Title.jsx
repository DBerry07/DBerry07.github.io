import { Fragment, useState, useEffect } from "react";
import MenuButton from "../MenuButton.jsx";

export default function Title(data, handleDrawerOpen) {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000; // Set your desired breakpoint

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
      title = <div id="title">{data.title}</div>;
    } else {
      title = (
        <Fragment>
          <MenuButton handleDrawerOpen={handleDrawerOpen} />
          <div id="title">{data.title}</div>
        </Fragment>
      );
    }
  } else {
    title = null;
  }
  return title;
}
