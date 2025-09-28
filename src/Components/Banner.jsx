import bnrImgone from "../assets/vector1.png";

const Banner = ({ inProgress, Resolved }) => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-2 gap-5 my-[50px]">
        
        <div className="relative rounded-xl p-5 bg-gradient-to-br from-purple-600 to-purple-500 h-[250px] flex items-center justify-center flex-col">
          <img src={bnrImgone} alt="" className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-20"/>
          <h2 className="text-white text-xl font-bold z-10">In-Progress</h2>                    
          <p className="text-white font-semibold text-5xl z-10">{inProgress}</p>
        </div>

        <div className="relative rounded-xl p-5 bg-gradient-to-br from-green-400 to-teal-500 h-[250px] flex items-center justify-center flex-col">
          <img src={bnrImgone} alt="" className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-20"/>
          <h2 className="text-white text-xl font-bold z-10">Resolved</h2>
          <p className="text-white font-semibold text-5xl z-10">{Resolved}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;