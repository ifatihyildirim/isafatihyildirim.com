import React from 'react';
import './style.scss';

const Tags = () => {
  const tagsArray = ['development', 'ruby', 'php', 'javascript', 'crystal', 'osx', 'linux', 'git'];

  const tags = () => tagsArray.map(tag => (
    <span key={tag} className="tag">{`#${tag}`}</span>
  ));
  return (
    <div className="tags">
      {tags()}
    </div>
  );
};

export default Tags;
