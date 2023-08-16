import BenefitSection from "./BenefitSection";
import "./Benefits.css";
import img01 from "../assets/images/01.svg";
import img02 from "../assets/images/02.svg";
import img03 from "../assets/images/03.svg";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits-con">
        <h2>
          <span>tere</span> benefits
        </h2>
        <div className="box">
          <div>
            <h4>01.</h4>
            <h4>
              Flexible <br /> working hours
            </h4>
            <p>
              You can decide when, and how much <br />
              time you want to drive.
            </p>
          </div>
          <img src={img01} alt="" />
        </div>
        <div className="box-mid">
          <img src={img02} alt="" />
          <div>
            <h4>02.</h4>
            <h4>Earnings</h4>
            <p>
              By driving with tere you can <br />
              earn more.
            </p>
          </div>
        </div>
        <div className="box">
          <div>
            <h4>03.</h4>
            <h4>
              Customer <br />
              support 24/7
            </h4>
            <p>
            Tere is a local service provider and we are proud to <br />
             support you in your local language. We are proud <br />
              to be at your service 24/7!
            </p>
          </div>
          <img src={img03} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
