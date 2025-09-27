import hero from "../assets/food3.jpg";

const Hero = () => {
  return (
    <div>
      <img src={hero} className="w-full max-h-[600px] object-cover"></img>
    </div>
  );
};

export default Hero;
