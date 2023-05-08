import { withAuth } from "../../withAuth";

const Admin = () => {
  return (
    <div>
      <span>.admin</span>
    </div>
  );
};

export default withAuth(Admin);
