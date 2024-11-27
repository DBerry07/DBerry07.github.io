import { Fragment } from "react";

export default function PanelHolder(props) {
    return (
        <div id="panel-holder" className="row-span-5 overflow-y-scroll h-full w-full text-lg grid grid-cols-1 grid-rows-7">
            {props.items.map((item, index) =>
            <Fragment key={index}>
            {item}
            </Fragment>
            )}
        </div>
    )
}