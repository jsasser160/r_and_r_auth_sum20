import React from 'react';
import { HomeHeader, CoolImg, HomeContainer, Btn, Star } from '../styledComp/HomeStyles';
import P from '../../images/sunset.jpg';
import { Icon } from 'semantic-ui-react';

const Home = () => (
  <HomeContainer>
    <h1 style={{ background: 'blue' }}>Home page</h1>
    <h1 style={styles.headerStyles}>Home page</h1>
    <HomeHeader fSize='lrg'>Hello</HomeHeader>
    <HomeHeader fSize='sm'>Hello</HomeHeader>
    <HomeHeader>Hello</HomeHeader>
    <CoolImg src={P} />
    <Btn>Click</Btn>
    <br />
    <Star>
      <Icon name='star' />
    </Star>
    <br />
    <br />
    <br />
    <br />
    <br />
  </HomeContainer>
)
export const styles = {
  headerStyles: { 
    background: 'blue',
    color: 'white',
    fontSize: '18px',
  },
  paragraphStyles: {
    color: 'green'
  }
}
export default Home;