import React, { Fragment } from 'react';
import Title from './title';
import Card from './card';
import birreteimg from './img/birrete.png';
import linkedinimg from './img/linkedin.png';
import brainimg from './img/brain.png';
import userimg from './img/user1.png';
import projectsimg from './img/projects.png';
import { Col, Container, Row } from 'react-bootstrap';
class Home extends React.Component {
  render() {
    const style = {
      width: '14rem',
      height: '18rem',
    };
    const btnclass = 'btn btn-dark rounded';

    return (
      <Fragment>
        <Container className='mx-auto px-0 mt-3'>
          <Row>
            <Col md={12} lg={12}>
              <Title
                title='Lautaro Nasello'
                subtitle='Frontend Developer Web'
              />{' '}
            </Col>
          </Row>
          <Row className=''>
            {' '}
            <Col sm={2} lg={2} className='m-auto'>
              <Card
                img={userimg}
                section='About'
                text='Something about my personal life'
                btn='about'
                style={style}
                href='/about'
                btnclass={btnclass}
              />
            </Col>
            <Col sm={2} lg={2} className='m-auto'>
              <Card
                img={brainimg}
                section='Knowledge'
                text='My knowledge from new tecnologies'
                btn='Knowledge'
                style={style}
                btnclass={btnclass}
                href='/knowledge'
              />
            </Col>
            <Col sm={2} lg={2} className='m-auto'>
              <Card
                img={birreteimg}
                section='Education'
                text='My experience and learnig achademys'
                btn='Education'
                style={style}
                href='/education'
                btnclass={btnclass}
              />
            </Col>
            <Col sm={2} lg={2} className='m-auto'>
              <Card
                img={projectsimg}
                section='Projects'
                text='Training and freelance projects'
                btn='Projects'
                style={style}
                href='/projects'
                btnclass={btnclass}
              />
            </Col>
            <Col sm={2} lg={2} className='m-auto'>
              <Card
                img={linkedinimg}
                section='Contact'
                text='Social Media to contact and chat me!'
                btn='Contact'
                style={style}
                href='/contact'
                btnclass={btnclass}
              />
            </Col>
          </Row>
        </Container>
        {/*  */}
      </Fragment>
    );
  }
}
export default Home;
