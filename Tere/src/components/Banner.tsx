import "./Banner.css";
import iOS from "../assets/images/ios.svg";
import Android from "../assets/images/android.svg";
import banner from "../assets/images/banner.svg";
import MyButton from "./MyButton";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-con">
        <div className="left-side">
          <p>
            DOWNLOAD APP, <br />
            SAVE MONEY, MAKE <br />
            FRIENDS!
          </p>
          <p>
            Its simple and its free. Play your part in reducing <br /> Carbon
            Footprint and help Mother Nature to <br />
            sustain its beauty. So what are you waiting for ? <br />
            Lets ride together
          </p>
          <div className="btn-box">
            <MyButton title="DOWNLOAD" src={Android} />
            <MyButton title="DOWNLOAD" src={iOS} />
          </div>
        </div>
        <div className="right-side">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="form-download">
        <p>Let’s go. Get a link <br/>to download the app.</p>
        <form action="">
          <input type="text" name="" id="" placeholder="Enter mobile phone number"/>
          <button type="submit">APPLY TO DRIVE</button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
