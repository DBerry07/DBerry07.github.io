import { Fragment } from "react";

export default function EntryBody(props) {
    return (
        <div id="entry-body">
            {props.items.map((item, index) =>
            <Fragment key={index}>
                {item}
            </Fragment>
            )}
        </div>
    )
}