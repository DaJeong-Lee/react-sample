import React from 'react';
import { Header, Image } from 'semantic-ui-react'
import './Header.css';

const HeaderWrapper = () => (
  <Header as='h2' className="profile-header">
    <Image className="profile-image" circular src='https://avatars3.githubusercontent.com/u/6103044?s=460&v=4' />
      DaJeong's React Post
      <hr className="line"/>
  </Header>
)

export default HeaderWrapper;

