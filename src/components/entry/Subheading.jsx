// import "./subheading.css";

export default function Subheading({ subheading }) {
  if (subheading != null) {
    let total;
    subheading.map((heading, index) => {
      total = (
        <>
          {total}
          <div id="subheading" className="w-full text-2xl justify-center text-center font-enriqueta" key={index}>
            {heading}
          </div>
        </>
      );
    });
    return total;
  }
}
