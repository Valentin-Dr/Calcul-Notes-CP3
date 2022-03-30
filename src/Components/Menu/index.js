import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/">
            Calcul
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}