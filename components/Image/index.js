
import React from 'react';
import './style.scss';

const Image = () => {
  const style = {
    backgroundImage: "url('https://images.unsplash.com/photo-1501274489983-5a343e378cd6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjc0MjF9')",
  };

  return (
    <div className="image" style={style} />
  );
};

export default Image;
