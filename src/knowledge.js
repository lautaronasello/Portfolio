import React from 'react';
import { Fragment } from 'react';
import Title from './components/title';
import Card from './components/card';
import htmlimg from './components/img/html5.png';
import cssimg from './components/img/css.png';
import bootstrapimg from './components/img/bootstrap.png';
import firebaseimg from './components/img/firebase.png';
import javascriptimg from './components/img/javascript.webp';
import reactimg from './components/img/react.png';
import españaimg from './components/img/españa.png';
import usaimg from './components/img/usa.png';

class Knowledge extends React.Component {
  render() {
    const style = {
      widht: 'auto',
      height: '23rem',
    };
    return (
      <Fragment>
        <div className='position-static mt-3'>
          <br />
          <Title title='Knowledge' subtitle='These are some of my skills' />

          <div className='card-group text-center'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4 my-3'>
                  <Card
                    img={htmlimg}
                    title='HTML'
                    style={style}
                    text='The standar HTML5 markup languaje. I have Medium-high level to be able to build a large number of web pages.'
                  />
                </div>
                <div className='col-md-4 my-3'>
                  <Card
                    img={cssimg}
                    title='CSS'
                    style={style}
                    text='The graphic design language in cascading to define and create a web page.'
                  />
                </div>
                <div className='col-md-4 my-3'>
                  <Card
                    img={bootstrapimg}
                    style={style}
                    title='Bootstrap'
                    text='CSS Library for responsive web design. I have a Medium-High level in this too.'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4 my-3'>
                  <Card
                    img={firebaseimg}
                    style={style}
                    title='Firebase'
                    text='Only know how to use for deploying and RealTime database for web apps but my intention is to keep learning more.'
                  />
                </div>
                <div className='col-md-4 my-3'>
                  <Card
                    img={javascriptimg}
                    style={style}
                    title='JavaScript'
                    text='This is one of my favorites. This language add the functionality to the web page. Requires logic and lateral think.'
                  />
                </div>
                <div className='col-md-4 my-3'>
                  <Card
                    img={reactimg}
                    style={style}
                    title='React'
                    text='The JavaScript Framework created by Facebook. Im constantly learnig from this framework. I currently have a medium level on this one.'
                  />
                </div>
              </div>
            </div>
            <div className='container my-5'>
              <div className='row'>
                <h1 className='margin col-md-12 center '>Languages</h1>
              </div>
              <div className='row'>
                <div className='col-md-6 my-3'>
                  <Card
                    img={españaimg}
                    title='Spanish'
                    text='Native language. I Speak it since I was born.'
                  />
                </div>
                <div className='col-md-6 my-3'>
                  <Card
                    img={usaimg}
                    title='English'
                    text='Secondary language, I know 60% and keep learning.'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Knowledge;
