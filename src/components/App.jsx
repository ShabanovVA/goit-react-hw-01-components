import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics"
import {FriendList} from 'components/FriendList/FriendList'
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import friends from "./FriendList/friends.json";
import transactions from "./TransactionHistory/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
