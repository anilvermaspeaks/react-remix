import {Link} from "remix";
function Header() {
  return (
    <header className="header">
      <a href="https://www.learningmoduleindia.in" target="_blank">
        <div className="logo">
          <strong>LMI</strong>
          <div>Learning Module India</div>
        </div>
      </a>
      <div className="headerRight">
        <Link to="/users">Users</Link>
      </div>
    </header>
  );
}

export default Header;
