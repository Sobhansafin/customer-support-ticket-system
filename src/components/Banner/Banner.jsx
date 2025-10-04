import React, { useContext } from "react";
import { TicketContext } from "../../context/TicketContext";
import vectorImage from '../../assets/vector1.png';

export default function Banner() {
  const { inProgressCount, resolvedCount } = useContext(TicketContext);


  const inProgressStyle = {

    backgroundImage: `linear-gradient(to right, #3538db, #b15cf6)`,
    backgroundSize: 'cover',
  };


  const resolvedStyle = {

    backgroundImage: `linear-gradient(to right, #1dcc60, #047857)`,
    backgroundSize: 'cover',
  };


  const vectorBaseStyle = {
    backgroundImage: `url(${vectorImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '180px', 
    height: '100%',
  };


  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">


      <div

        className="rounded-lg h-[150px] text-white shadow-md 
                     flex flex-col justify-center items-center overflow-hidden relative"
        style={inProgressStyle}
      >


        <div className="absolute inset-y-0 left-0" style={{
          ...vectorBaseStyle,
          backgroundPosition: 'left center',
        }}></div>


        <div className="absolute inset-y-0 right-0" style={{
          ...vectorBaseStyle,
          backgroundPosition: 'right center',
          transform: 'scaleX(-1)'
        }}></div>


        <h3 className="text-xl relative z-10">In-Progress</h3>
        <p className="text-5xl font-bold relative z-10">{inProgressCount}</p>
      </div>


      <div

        className="rounded-lg h-[150px] text-white shadow-md
                     flex flex-col justify-center items-center overflow-hidden relative"
        style={resolvedStyle}
      >


        <div className="absolute inset-y-0 left-0" style={{
          ...vectorBaseStyle,
          backgroundPosition: 'left center',
        }}></div>


        <div className="absolute inset-y-0 right-0" style={{...vectorBaseStyle,
          backgroundPosition: 'right center',
          transform: 'scaleX(-1)'
        }}></div>

        <h3 className="text-xl relative z-10">Resolved</h3>
        <p className="text-5xl font-bold relative z-10">{resolvedCount}</p>
      </div>

    </section>
  );
}