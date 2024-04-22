import { Button } from "./ui/button";

//variant ghost removes styles to manually style. hover prop written twice for multiple effects
const MainNav = () => {
  return (
    <Button
      variant="ghost"
      className="font-bold hover:text-orange-500 hover:bg-white"
    >
      Log In
    </Button>
  );
};

export default MainNav;
