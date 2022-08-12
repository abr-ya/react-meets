import React, { useContext } from 'react';
import LikeContext from '../context/LikeContext';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {
  const { likes } = useContext(LikeContext);

  return (
    <section>
      <h1>Favorites Page</h1>
      <MeetupList meetups={likes} />
    </section>
  );
};

export default FavoritesPage;
