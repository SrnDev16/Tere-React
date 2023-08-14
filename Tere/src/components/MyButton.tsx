type buttonProps = {
  title: string;
  src: string;
};

const MyButton = ({title,src}: buttonProps) => {
  return (
    <button style={MyStyle} type="button">
      <img src={src} alt="" />
      {title}
    </button>
  );
};
const MyStyle = { 
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "260px",
  height: "67px",
  border: "none",
  borderRadius: "5px",
  padding: "23px 33px",
  backgroundColor: "#000000",
  color: "#FFFFFF",
  fontFamily: "Gilroy-bold",
  fontSize: "24.601px",
  fontStyle: "normal",
  fontWeight: " 800",
  lineHeight: "0px" /* 0% */,
};

export default MyButton;
