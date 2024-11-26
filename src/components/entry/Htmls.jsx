// import "./htmls.css";

export default function Htmls({htmls}) {
    if (htmls != null) {
        return (
                <div id="link-bar" className="w-full h-fit justify-center flex flex-row">
                    {htmls.map((html, index) => (
                        <span key={index} className="link ml-4 mr-4">
                          <a href={html[0]} target="_blank">
                            <img src={html[1]} className="h-10 sepia"/>
                          </a>
                        </span>
                    ))}
                </div>
        );
    }
}
