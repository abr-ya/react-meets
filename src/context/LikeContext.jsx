import React, { createContext, useState } from 'react';

const LikeContext = createContext({
  likes: [],
  count: 0,
  addLike: (meet) => meet,
  unLike: (id) => id,
  hasLike: (id) => id,
});

// eslint-disable-next-line react/prop-types
export const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);

  const addLike = (meet) => {
    setLikes((prev) => [...prev, meet]);
  };

  const unLike = (id) => {
    setLikes((prev) => prev.filter((meet) => meet.id !== id));
  };

  const hasLike = (id) => likes.some((meet) => meet.id === id);

  const context = {
    likes,
    count: likes.iength,
    addLike,
    unLike,
    hasLike,
  };

  return (
    <LikeContext.Provider value={context}>
      {children}
    </LikeContext.Provider>
  );
};

export default LikeContext;
