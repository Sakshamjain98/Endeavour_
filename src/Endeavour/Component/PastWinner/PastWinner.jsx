import "./style.scss";
import one from "../../../assets/Abc.jpg";
import two from "../../../assets/Abc.jpg";
import three from "../../../assets/Abc.jpg";
import four from "../../../assets/Abc.jpg";
import five from "../../../assets/Abc.jpg";

export default function PastWinner() {
  return (
    <div className="past-winner-container overflow-hidden">
      <div className="left">
        <div className="gallery">
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
          <img src={four} alt="" />
          <img src={five} alt="" />
        </div>
      </div>
    </div>
  );
}
