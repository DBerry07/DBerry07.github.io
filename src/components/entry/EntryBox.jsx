import { Fragment } from "react";

export default function EntryBox(props) {
    return (
        <div id="content-box" className="row-span-6 h-full w-full text-lg">
            {props.items.map((item, index) =>
            <Fragment key={index}>
            {item}
            </Fragment>
            )}
        </div>
    )
}