// import "./htmls.css";

export default function Htmls({htmls}) {
    if (htmls != null) {
        return (
                <div id="link-bar" className="w-full  place-items-center">
                    {htmls.map((html, index) => (
                        <span key={index} className="link m-2">
                          <a href={html[0]} target="_blank" className="w-0">
                            <img src={html[1]} className="link-img h-6"/>
                          </a>
                        </span>
                    ))}
                </div>
        );
    }
}
