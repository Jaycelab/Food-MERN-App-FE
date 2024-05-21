import hero2 from "../assets/hero2.jpg";

//img full width of container, responsive regardless of width. max height at 600px. object cover keep aspect ratio to avoid distortion
const Hero = () => {
  //hero image contain. Might change to cover
  return (
    <div>
      <img src={hero2} className="w-full max-h-[600px] object-contain" />
    </div>
  );
};

export default Hero;
