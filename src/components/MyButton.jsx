import "./button-menu.css";
import "../css/buttons.css";

export default function MyButton(props) {
    if (
      props.item != "Hello" &&
      props.item != "Education" &&
      props.item != "History"
    ) {
        // console.log(props.colour);

        let icon = null;
        // if (props.item.icon != null) {
        //   icon = <img className="button-icon" src={props.item.icon} style={{color: props.colour}} width={25} height={25} />
        // }

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
            
            {icon}
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