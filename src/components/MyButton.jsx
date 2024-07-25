import "./button-menu.css";
import myTabs from "../data/constants/buttons.js";
import { Fragment } from "react";
import { panels } from "../data/constants/panels.js";
import "../css/buttons.css";

export default function MyButton(props) {
    if (
      props.item != "Hello" &&
      props.item != "Education" &&
      props.item != "History"
    ) {
        // console.log(props.colour);
      return(
        <span key={props.key} id={props.item + "-span"}>
          <button id={props.item + "-button"} className="project-button" style={{color: props.item.colour}} onClick={() => props.onSelect(props.item)}>
            {/* <span> */}
            {props.item.text}
            {/* {item.icon != "" && (
                  <img
                    src={item.icon}
                    width={17}
                    height={17}
                    className="button-icon"
                  />
                )} */}
            {/* </span> */}
            <img className="button-icon" src={props.item.icon} style={{color: props.colour}} width={25} height={25} />
          </button>
        </span>
      )
    } else {
      return (
      <span key={props.key} id={props.item + "-span"}>
        <button id={props.item + "-button"} className="about-button" style={{color: props.colour}} onClick={() => props.onSelect(props.item)} >
          {/* <span> */}
          {props.item.text}
          {/* {item.icon != "" && (
                  <img
                    src={item.icon}
                    width={17}
                    height={17}
                    className="button-icon"
                  />
                )} */}
          {/* </span> */}
        </button>
      </span>
      )
    }
  }