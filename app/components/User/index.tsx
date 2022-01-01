import {Link} from "remix";
import {User} from "../../types/user.type";

type propsType = {
  user: User;
};

const UserItem = ({user}: propsType) => {
  return (
    <>
      <div className="card">
        <Link to={user.id.toString()}>
          <div className="cardContainer">
            <h4>
              <b>{user.name}</b>
            </h4>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default UserItem;
