// import "./subheading.css";

export default function Subheading({ subheading }) {
  if (subheading != null) {
    let total;
    subheading.map((heading, index) => {
      total = (
        <>
          {total}
          <div id="subheading" className="w-full text-2xl font-enriqueta" key={index}>
            {heading}
          </div>
        </>
      );
    });
    return <div className='text-center'>{total}</div>;
  }
}
