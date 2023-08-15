import "./Content1.css";
import iPhone from "../assets/images/phone.svg";
import indicator from "../assets/images/indicator.svg";

const Content1 = () => {
  return (
    <div className="content">
      <div className="content-con">
        <div className="content-box">
          <div className="title">
            <h2>
              HOW <span>TERE</span> WORKS
            </h2>
            <p>
              Download and install the tere app. Enter your phone <br /> number
              and make your user account. when approved you <br />
              may start driving.
            </p>
          </div>
          <div className="details">
            <div className="left">
              <div className="left-box">
                <div className="number">
                  <h3>1</h3>
                </div>
                <h2>REQUEST A RIDE</h2>
                <p>
                  Have to reach office or going <br />
                  for shopping ? <br />
                  Just put your current location
                  <br /> and destination and search a <br />
                  ride that suits you
                </p>
              </div>
              <div className="left-box">
                <div className="number">
                  <h3>3</h3>
                </div>
                <h2>INSTANT NOTIFICATIONS</h2>
                <p>
                  Get instant notifications for
                  <br /> your rides and be in contact <br />
                  with fellow riders all the time
                </p>
              </div>
            </div>
            <div className="middle">
              <div className="bg"></div>
              <img src={iPhone} alt="" />
              <div className="indicator">
                <img src={indicator} alt="indicator" />
              </div>
            </div>
            <div className="right">
              <div className="right-box">
                <div className="number">
                  <h3>2</h3>
                </div>
                <h2>POST A RIDE</h2>
                <p>
                  Going somewhere but hate to
                  <br /> travel alone -<br />
                  just post your ride details and <br />
                  publish it
                </p>
              </div>
              <div className="right-box">
                <div className="number">
                  <h3>4</h3>
                </div>
                <h2>CASHLESS PAYMENT</h2>
                <p>
                  Payment made easy by using <br />
                  your own Wallet - no more <br />
                  cash to carry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
