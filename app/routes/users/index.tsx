import type {LinksFunction} from "remix";
import {useLoaderData} from "remix";
import styles from "~/styles/users.css";
import {User} from "../../types/user.type";
import UserItem from "../../components/User";

export const links: LinksFunction = () => {
  return [{rel: "stylesheet", href: styles}];
};

export async function loader() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const userList = () => {
  let userList = useLoaderData();
  return (
    <>
      <h1>User List</h1>
      {userList.map((user: User) => (
        <UserItem key={user.id} user={user} />
      ))}
    </>
  );
};

export default userList;
