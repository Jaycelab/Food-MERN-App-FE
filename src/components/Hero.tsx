import hero from "../assets/hero.jpg";

//img full width of container, responsive regardless of width. max height at 600px. object cover keep aspect ratio to avoid distortion
const Hero = () => {
  return (
    <div>
      <img src={hero} className="w-full max-h-[600px] object-cover" />
    </div>
  );
};

export default Hero;
