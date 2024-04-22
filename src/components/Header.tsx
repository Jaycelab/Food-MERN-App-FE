import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

//div 1 - span full width of screen, align content of header within content of the page
//div#2 - uses flexbox to position direct children of div -- justify in between aligning items to center
//link bold text orange 500 weight tracking-tight to reflect logo. Link to / homepage
//nav hidden default until med screen
const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500 "
        >
          Jaycelab.com
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
