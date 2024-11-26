// import "./htmls.css";

export default function Htmls({htmls}) {
    if (htmls != null) {
        return (
                <div id="link-bar" className="w-full mt-2 mb-2 justify-center flex flex-row">
                    {htmls.map((html, index) => (
                        <span key={index} className="link m-2 ml-4 mr-4">
                          <a href={html[0]} target="_blank">
                            <img src={html[1]} className="h-16 sepia"/>
                          </a>
                        </span>
                    ))}
                </div>
        );
    }
}
