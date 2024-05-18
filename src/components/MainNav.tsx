import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

//variant ghost removes styles to manually style. hover prop written twice for multiple effects
const MainNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant="ghost"
      className="font-bold hover:text-orange-500 hover:bg-white"
      onClick={async () => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default MainNav;
