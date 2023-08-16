
type benefitProps ={
  number : string;
  title: string;
  detail: string;
  img: string;
}

const BenefitSection = ({number, title ,detail , img}: benefitProps) => {
  return (
    <div className="container" style={myStyle.container}>
      <div className="title-box">
        <div>
            <span style={myStyle.span}>{number}</span>
          <h3 style={myStyle.h3}>
          {title}
          </h3>
          <p style={myStyle.p}>{detail}</p>
        </div>
      </div>
      <div className="img-box">
        <img src={img} alt="" />
      </div>
    </div>
  );
};
const myStyle = {
  container: {
    width: "1060px",
    height: "304px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  h3:{
    color: "#000",
    fontFamily: "Gilroy-light",
    fontSize: "33.9px",
    fontStyle:"normal",
    fontWeight: 600,
    lineHeight: "32.5px",
    display: "inline-block",
    maxWidth:"218px",
  },
  span:{
    color: "#75BF7A",
    fontFamily: "Gilroy-light",
    fontSize: "88px",
    fontStyle:"normal",
    fontWeight: 500,
    lineHeight: "118.8px",
    marginRight: "10px",
    display: "inline-block",
  },
  p:{
    color: "#9E9DA2",
    fontFamily: "Gilroy-light",
    fontSize: "22px",
    fontStyle:"normal",
    fontWeight: 500,
    lineHeight: "23px",
    maxWidth:"385px",
  },
  
};
export default BenefitSection;
