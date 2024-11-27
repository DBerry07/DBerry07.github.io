// import "./htmls.css";

export default function LinksBar({htmls}) {
    if (htmls != null) {
        return (
                <div id="link-bar" className="w-full h-full  justify-center place-items-center flex flex-row">
                    {htmls.map((html, index) => (
                          <a href={html[0]} target="_blank" className='ml-4 mr-4'>
                            <img src={html[1]} className="h-10 sepia transition hover:scale-125"/>
                          </a>
                    ))}
                </div>
        );
    }
}
