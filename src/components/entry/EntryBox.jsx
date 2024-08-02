import { Fragment } from "react";

export default function EntryBox(props) {
    return (
        <div id="content-box">
            {props.items.map((item, index) =>
            <Fragment key={index}>
            {item}
            </Fragment>
            )}
        </div>
    )
}