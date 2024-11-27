import { Fragment } from "react";

export default function EntryBody(props) {
    return (
        <div id="entry-body" className='row-span-6 m-2'>
            {props.items.map((item, index) =>
            <Fragment key={index}>
                {item}
            </Fragment>
            )}
        </div>
    )
}