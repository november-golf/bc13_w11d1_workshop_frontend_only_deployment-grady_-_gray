import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";



const Profile = ({setUserName}) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState("");
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-81fjsftbpawpa0nz.eu.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
      
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);






  return (
    isAuthenticated && (
      <div className="user-data">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata.nuclear_commander ? (
          setUserName(true)
        ) : false}
        {userMetadata ? (
          <pre className="meta">{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "Oops! You've triggered a nuclear apocalypse! You need to act fast or it's bad times. Login to the Nuclear Administrator Account and find the right account to cancel the launch! Username: NuclearNanny@nuke-it.com Password: NukesAreBad1! "
        )}
      </div>
    )
  
  );
};
export default Profile;

//<pre>{JSON.stringify(userMetadata, null, 2)}</pre>