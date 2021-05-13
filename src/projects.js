import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from './components/card';
import Title from './components/title';
import menoscaosimg from './components/img/menoscaos.png';
import snakeimg from './components/img/snake-game.jpg';
import pokeappimg from './components/img/Pikachu.png';
import githubimg from './components/img/github.png';

class Projects extends React.Component {
  render() {
    const style = {
      width: '14rem',
      height: 'auto',
    };

    return (
      <React.Fragment>
        <Container className='justify-content-center aling-items-center text-center mt-3'>
          <Row>
            <Col md={12} lg={12}>
              <Title
                title='Projects'
                subtitle='Training and freelance projects'
              />{' '}
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <Card
                img={menoscaosimg}
                alt='projects'
                title='MenosCaosPorFavor'
                text={[
                  <a
                    href='https://www.instagram.com/menoscaosporfavor/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='insta-link'
                  >
                    @menoscaosporfavor
                  </a>,
                  " landind page whit html, css, bootstrap, react and emailjs.'",
                ]}
                btn='MenosCaos'
                style={style}
                href='https://menoscaosxfavor.web.app/'
                target='_blank'
              />
            </Col>
            <Col md={3} lg={3}>
              <Card
                img={snakeimg}
                alt='Snake Game'
                title='Snake Game'
                text='Simple game inspired in traditional snake. Write with HTML5, CSS and JavaScript.'
                btn='Snake!'
                style={style}
                href='https://snake-arg.web.app/'
                target='_blank'
              />
            </Col>
            <Col md={3} lg={3}>
              <Card
                img={pokeappimg}
                alt='Pokémon'
                title='PokeApp'
                text='Pokeapp whit HTML, CSS, Bootstrap and JavasCript-React consuming the pokeapi api'
                btn='PokeApp'
                style={style}
                href='https://pokeapp-cba.web.app/'
                target='_blank'
              />
            </Col>
            <Col md={3} lg={3}>
              <Card
                img={githubimg}
                alt='GitHub'
                title='GitHub Projects'
                text={[
                  'Also have other projects in development that can be seen on github!',
                  <br />,
                  <br />,
                ]}
                btn='GitHub'
                style={style}
                href='https://github.com/lautaronasello'
                target='_blank'
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Projects;
