import { useState, Fragment } from "react";
import { panels } from "../data/constants/panels";
import Drawer from "@mui/material/Drawer";
import ButtonMenu from "./ButtonMenu.jsx";
import NamePanel from "./NamePanel.jsx";
import Divider from "@mui/material/Divider";

export default function ResponsiveDrawer({
  children,
  handleSelect,
  handleOpen,
  open,
}) {
  var drawer = null;

  drawer = (
    <Drawer open={open} onClose={() => handleOpen()} variant="temporary">
      <NamePanel />
      <ButtonMenu panel={panels.About} onSelect={handleSelect} />
      <Divider />
      <ButtonMenu panel={panels.Projects} onSelect={handleSelect} />
    </Drawer>
  );

  return drawer;
}
