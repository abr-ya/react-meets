import React, { useContext } from 'react';
import LikeContext from '../context/LikeContext';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {
  const { likes, count } = useContext(LikeContext);

  const getContent = () => {
    if (count === 0) return <p>You got not favourites yet. Start adding some?</p>;
    return <MeetupList meetups={likes} />;
  };

  return (
    <section>
      <h1>Favorites Page</h1>
      {getContent()}
    </section>
  );
};

export default FavoritesPage;
