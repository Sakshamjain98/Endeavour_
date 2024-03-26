import penVideo from "../../../assets/pen.mp4";
import menVideo from "../../../assets/men.mp4";
import locationVideo from "../../../assets/location.mp4";
import barVideo from "../../../assets/bar.mp4";

const Footfall = () => {
  return (
    <div className="main flex justify-center items-center w-full">
      <div className="col1 md:flex p-2">
        <div className="f1 m-4 md:mx-8">
          <video src={barVideo} autoPlay loop muted style={{ height: 'auto', width: '10rem' }} />
          <p  className="md:text-2xl font-bold font-serif">600,000+</p>
          <p className="md:text-2xl font-bold font-serif text-xl">Impressions</p>
        </div>
        <div className="f1 m-4 md:mx-8 p-2">
          <video src={locationVideo} autoPlay loop muted style={{ height: 'auto', width: '10rem' }} />
          <p className="md:text-2xl font-bold font-serif">30+</p>
          <p className="md:text-2xl font-bold font-serif text-xl">Universities</p>
        </div>
      </div>
      <div className="col2 md:flex">
        <div className="f1 m-4 md:mx-8 p-2">
          <video src={penVideo} autoPlay loop muted style={{ height: 'auto', width: '10rem' }} />
          <p className="md:text-2xl font-bold font-serif">2.5k+</p>
          <p className="md:text-2xl font-bold font-serif text-xl">Registrations</p>
        </div>
        <div className="f1 m-4 md:mx-8 p-2">
          <video src={menVideo} autoPlay loop muted style={{ height: 'auto', width: '10rem' }} />
          <p className="md:text-2xl font-bold font-serif">240+</p>
          <p className="md:text-2xl font-bold font-serif text-xl">Attendees</p>
        </div>
      </div>
    </div>
  );
};

export default Footfall;
