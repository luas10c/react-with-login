import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const withAuth = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props) => {
    const data = cookies();
    const access_token = data.get("access_token");
    if (!access_token) {
      redirect("/");
    }

    return <Component {...props} />;
  };
};
