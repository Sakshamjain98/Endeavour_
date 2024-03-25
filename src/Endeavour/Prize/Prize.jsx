import PropTypes from 'prop-types';
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './styles.scss';

// import PropTypes from 'prop-types';

function PrizeHeading(props) {
    useEffect(()=>{
        Aos.init({})
    },[])
    return (
        <div data-aos="fade-up" data-aos-duaration="100"  className="PrizeHeading">
            <h1>{props.type}</h1>
        </div>
    );
}

PrizeHeading.propTypes = {
    type: PropTypes.string.isRequired,
};

function FirstPrize(props) {
    return (
        <div  className="Prizes">
            <div className='prize-icons'>{props.icon}</div>
            <h2>{props.type}</h2>
            <p>{props.content}</p>
        </div>
    );
}

FirstPrize.propTypes = {
    icon: PropTypes.element.isRequired,
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

function ThemePrize(props){
    return (
        <div  data-aos={props.i%2===0?'fade-left':"fade-right"} data-aos-duaration="800"  className="theme">
            <div className='theme-icons'>{props.icon}</div>
            <h2>{props.type}</h2>
            <p>{props.content}</p>
        </div>
    );
}

ThemePrize.propTypes = {
    i: PropTypes.number.isRequired,
    icon: PropTypes.element.isRequired,
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
export default function Prize() {
    return (
        <div> {/* Added a parent div */}
            <h1
                data-aos="zoom-in"
                data-aos-duration="00"
                id="prizes"
                className="prize_heading text-black"
                style={{ fontFamily: "repo-bold" }}
            >
                Prizes
            </h1>
            <div className="prizepool">
                <p
                    data-aos="zoom-in"
                    data-aos-duration="00"
                    id="prizes"
                    className="worth text-black"
                >
                    worth
                </p>
                <h4
                    data-aos="zoom-in"
                    data-aos-duration="00"
                    id="prizes"
                    className="prizee text-black"
                    style={{ fontFamily: "poppins" }}
                >
                    ₹ 1.25 L
                </h4>
            </div>
            <div 
                className="prizesection"
                style={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginTop: "5vh",
                }}
            >
                <div className="cards_prizes">
                    <div className="reverse">
                        <div data-aos="fade-up" className="cardone cards_">
                            <div className="bg">
                                <img
                                    src={
                                        "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/2.png"
                                    }
                                    alt=""
                                />
                                <div className="text_prizes text-black">
                                    <p style={{ textShadow: "1px 1px 4px #702963" }}>₹ 30K</p>
                                    <p>+</p>
                                    <p>
                                        Innohacks <br />
                                        swags, t-shirts, stickers.
                                    </p>
                                </div>
                            </div>
                            <div className="blob"> </div>
                        </div>
                        <div data-aos="fade-up" className="cardtwo cards_">
                            <div className="bg">
                                <img
                                    src={
                                        "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/1.png"
                                    }
                                    width={200}
                                    alt=""
                                />
                                <div className="text_prizes">
                                    <p
                                        style={{
                                            fontSize: "35px",
                                            textShadow: "1px 1px 4px #702963",
                                        }}
                                    >
                                        ₹ 50k
                                    </p>
                                    <p>+</p>
                                    <p>
                                        Innohacks <br />
                                        swags, t-shirts, stickers.
                                    </p>
                                </div>
                            </div>
                            <div className="blob"></div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="cardthree cards_">
                        <div className="bg">
                            <img
                                src={
                                    "https://s3.ap-south-1.amazonaws.com/innohacks3.0/prizes/3.png"
                                }
                                width={150}
                                alt=""
                            />
                            <div className="text_prizes">
                                <p style={{ textShadow: "1px 1px 4px #702963" }}>₹ 20k</p>
                                <p>+</p>
                                <p>
                                    Innohacks <br />
                                    swags, t-shirts, stickers.
                                </p>
                            </div>
                        </div>
                        <div className="blob"></div>
                    </div>
                </div>
               
            </div>
        </div>
    );
}
