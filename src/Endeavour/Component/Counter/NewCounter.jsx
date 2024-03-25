// import './footfall.css'

const Footfall =()=>{
    return(
        <div className="main flex justify-center items-center w-[100%]">
            <div className="col1 md:flex">
                <div className="f1 m-4 md:mx-8">
                    <img src={"https://s3.ap-south-1.amazonaws.com/innohacks3.0/barchart.gif"} alt="" style={{height:'auto', width:'10rem'}}/>
                    <p style={{fontWeight:'800',fontSize:'2.5rem',padding:'0px'}}>600,000+</p>
                    <p style={{fontWeight:'600',fontSize:'2rem', padding:'0px'}}>Impressions</p>
                </div>
                <div className="f1 m-4 md:mx-8">
                    <img src={"https://s3.ap-south-1.amazonaws.com/innohacks3.0/locationPin.gif"} alt="" style={{height:'auto', width:'10rem'}}/>
                    <p style={{fontWeight:'800',fontSize:'2.5rem',padding:'0px'}}>30+</p>
                    <p style={{fontWeight:'600',fontSize:'2rem', padding:'0px'}}>Universities</p>
                </div>
            </div>
            <div className="col2 md:flex">
                <div className="f1 m-4 md:mx-8">
                    <img src={"https://s3.ap-south-1.amazonaws.com/innohacks3.0/pen.gif"} alt="" style={{height:'auto', width:'10rem'}}/>
                    <p style={{fontWeight:'800',fontSize:'2.5rem',padding:'0px'}}>2.5k+</p>
                    <p style={{fontWeight:'600',fontSize:'2rem', padding:'0px'}}>Registrations</p>
                </div>
                <div className="f1 m-4 md:mx-8">
                    <img src={"https://s3.ap-south-1.amazonaws.com/innohacks3.0/man.gif"} alt="" style={{height:'auto', width:'10rem'}}/>
                    <p style={{fontWeight:'800',fontSize:'2.5rem',padding:'0px'}}>240+</p>
                    <p style={{fontWeight:'600',fontSize:'2rem', padding:'0px'}}>Attendees</p>
                </div>
            </div>
        </div>
    );
};

export default Footfall;
