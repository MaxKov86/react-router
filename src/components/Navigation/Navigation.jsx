import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const makeClassActiveLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={makeClassActiveLink} to="/">
        Home Page
      </NavLink>
      <NavLink className={makeClassActiveLink} to="/payments">
        Payments
      </NavLink>
    </nav>
  );
};

export default Navigation;
