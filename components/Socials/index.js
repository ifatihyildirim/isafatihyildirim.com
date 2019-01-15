import React from 'react';
import './style.scss';

const Social = () => {
  const socialsArray = [{
    icon: 'github',
    link: 'https://github.com/ifatihyildirim',
  },
  {
    icon: 'twitter',
    link: 'https://twitter.com/ifatihyildirim',
  },
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/isafatihyildirim',
  }];

  const socials = () => socialsArray.map(social => (
    <li key={social.icon}>
      <a href={social.link} className="social-icon">
        <i className={`fa fa-${social.icon}`} />
      </a>
    </li>
  ));

  return (
    <div>
      <ul className="social">
        {socials()}
      </ul>
    </div>
  );
};
export default Social;
