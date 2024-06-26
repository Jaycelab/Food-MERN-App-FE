import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useCreateMyUser } from "@/api/MyUserApi";
import { useNavigate } from "react-router-dom";

type Props = {
  //children is a special property that is passed to components automatically
  children: React.ReactNode;
};

//wrap all components to access Auth0Provider
const Auth0ProviderWithNavigate = ({ children }: Props) => {
  //custom hoook
  const navigate = useNavigate();
  //storing Auth0 domain in environment variable
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  //check if domain, clientId, and redirectUri are defined
  if (!domain || !clientId || !redirectUri) {
    throw new Error(
      "Please define the Auth0 domain, clientId, and redirectUri in your .env file"
    );
  }
  //whenver user gets redirected, take user to callback page
  const onRedirectCallback = (appState?: AppState, user?: User) => {
    navigate("/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      //whenver user logs in, they will be redirected to the home page {redirectUri}.
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithNavigate;
