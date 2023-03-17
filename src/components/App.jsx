import { Profile } from "components/Profile/Profile";
import profile from "../user.json";
export const App = () => {
  return (
    <div>
      <Profile profile={profile} />
    </div>
  );
};
