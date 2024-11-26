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
        <span id={props.item + "-span"}>
          <button id={props.item + "-button"} className="w-44 h-20 font-enriqueta transition text-green-800 rounded hover:text-white hover:bg-green-800 focus:bg-green-800 focus:text-white" onClick={() => props.onSelect(props.item)}>
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
      <span id={props.item + "-span"}>
        <button id={props.item + "-button"} className="font-enriqueta transition rounded h-20 text-red-900 w-44 hover:bg-red-900 hover:text-white focus:bg-red-900 focus:text-white" onClick={() => props.onSelect(props.item)} >
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