
import React from 'react';
import Name from '../Name';
import Location from '../Location';
import Info from '../Info';
import Tags from '../Tags';
import Socials from '../Socials';
import './style.scss';

const Right = () => (
  <div className="right">
    <div className="container">
      <Name />
      <Location />
      <Info />
      <Tags />
      <Socials />
    </div>
  </div>
);

export default Right;
