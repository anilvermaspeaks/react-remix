import {useLoaderData} from "remix";
import {User} from "~/types/user.type";

export const loader = async ({params}: {params: {userId: string}}) => {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  return res.json();
};

const User = () => {
  const user: User = useLoaderData();
  return (
    <div className="card w100">
      {!!user && (
        <div className="cardContainer">
          <h2>
            <b>{user.name}</b>
          </h2>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user?.phone}</p>
          <p>{user?.website}</p>
        </div>
      )}
    </div>
  );
};

export default User;
