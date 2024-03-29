import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LikeContext from '../context/LikeContext';
import classes from './MainNavigation.module.scss';

const MainNavigation = () => {
  const { count } = useContext(LikeContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{count}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
