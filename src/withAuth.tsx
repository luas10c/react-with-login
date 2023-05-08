import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const withAuth = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props) => {
    const data = cookies();
    const username = data.get("username");
    if (!username) {
      redirect("/");
    }

    return <Component {...props} username={username} />;
  };
};
