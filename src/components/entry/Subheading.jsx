import "./subheading.css";

export default function Subheading({ subheading }) {
  if (subheading != null) {
    let total;
    subheading.map((heading, index) => {
      total = (
        <>
          {total}
          <div id="subheading" key={index}>
            {heading}
          </div>
        </>
      );
    });
    return total;
  }
}
