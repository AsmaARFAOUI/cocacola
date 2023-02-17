import "./coca.css";
export default function Coca() {
  return (
    <>
      <div className="global">
        <div className="coca">
          <img
            src="https://www.coca-colaentuhogar.com/media//brands/brand/coca%20cola.svg"
            alt="cocacola"
            className="cocaImage cocaElement"
          />
          <div className="cocaSquare cocaElement"></div>
        </div>

        <div className="sprite">
          <img
            src="https://yt3.googleusercontent.com/cVzN2ebZcy6AJbCXu9IYwY-cu6NWBw11cFCX0y2arw6XVijdnCRkSz8xsgsNHG_mQ7zySAv6Qw=s900-c-k-c0x00ffffff-no-rj"
            alt="cocacola"
            className="spriteImage spriteElement"
          />
          <div className="spriteSquare spriteElement"></div>
        </div>
      </div>
    </>
  );
}
