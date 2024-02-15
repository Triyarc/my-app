import React from 'react';
import bannerImg from '../../assets/images/bannerImg.png';
import { HomeContainer } from '../../components/style/pageStyle/Home.styled';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CardContainer from '../../components/pageComponent/Home/CardContainer';

function Home() {
  return (
    <HomeContainer>
      <img
        className='heroImg'
        src={bannerImg}
        title='Banner Image'
        alt='Banner'
      />
      <Container className='my-lg-5 py-lg-3 container'>
        <CardContainer />
      </Container>
    </HomeContainer>
  );
}

export default Home;
