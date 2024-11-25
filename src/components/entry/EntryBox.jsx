import { Fragment } from "react";

export default function EntryBox(props) {
    return (
        <div id="content-box" className="row-span-6">
            {props.items.map((item, index) =>
            <Fragment key={index}>
            {item}
            </Fragment>
            )}
        </div>
    )
}