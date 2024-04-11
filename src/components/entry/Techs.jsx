import "../../css/techs.css";

export default function Techs({techs}) {
    if (techs != null) {
        return(
           <div id="techs-used">
            <div>Technologies Used:</div>{
            techs.map((item, index) => {
                return <span className="technology">{item}</span>
            })
            }</div> 
        );
    }
}