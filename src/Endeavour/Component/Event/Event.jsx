import a from "../../../assets/Event.jpg";

function Event() {
    return (
        <div  className="container pb-4 w-full" id="event"
        style={{
            overflowX: "hidden",
            overflowY: "hidden"
          }}
        >
            <h1 className="text-center text-blue-800 text-5xl m-2 p-2 font-serif font-bold">Events</h1>
        <div className="flex flexwrap overflow-scroll scroll-smooth ">
            {/* Your component code here */}
            <img src={a} alt="" className="aspect-video w-[40%] m-4"/>
            <img src={a} alt="" className="aspect-video w-[40%] m-4" />
            <img src={a} alt="" className="aspect-video w-[40%] m-4" />
            <img src={a} alt="" className="aspect-video w-[40%] m-4" />
            <img src={a} alt="" className="aspect-video w-[40%] m-4" />
            <img src={a} alt="" className="aspect-video w-[40%] m-4" />
            <img src={a} alt="" className="aspect-video w-[40%] m-4" />
            <img src={a} alt="" className="aspect-video w-[40%] m-4" />
        </div>
        </div>
    );
}

export default Event;