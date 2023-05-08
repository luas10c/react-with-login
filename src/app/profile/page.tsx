import { use } from "react";
import { withAuth } from "../../withAuth";

const fetchProfile = async (username: any) => {
  const response = await fetch(
    `https://api.github.com/users/${username.value}`
  );
  const data = await response.json();

  return data;
};

const Profile = (props) => {
  const profile = use(fetchProfile(props.username));

  return (
    <div>
      <span>.profile</span>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
};

export default withAuth(Profile);
