import landingImage from "../assets/landing.png";
import addDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  // white bg,large rounded corners, shadow, large padding, flexbox
  //sets gap to size 5, aligns text to center, negative margin top
  //text size 5xl, bold, orange 600, tracking tight
  //grid layout, 2 columns, gap size 5
  //flexbox, align center, justify center, gap size 4, text center
  //font bold, text size 3xl, tracking tighter
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Welcome to Jayce Lab
        </h1>
        <span className="text-xl">
          Your next food order is just one click away!
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Ordering has never been easier!
          </span>
          <span>
            Download the app for a faster ordering and personalized ordering
            experience.
          </span>
          <img src={addDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
