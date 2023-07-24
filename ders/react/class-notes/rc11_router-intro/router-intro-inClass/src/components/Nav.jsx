import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="bg-warning">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        {/* <NavLink style={(isActive)=> ({color: isActive && "red"})} to="/instructors">Instructors
        </NavLink> */}
        <NavLink  to="/instructors">Instructors
        </NavLink>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Nav;
