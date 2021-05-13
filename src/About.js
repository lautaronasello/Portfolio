import { Fragment } from 'react';
import React from 'react';
import foto from './components/img/about.jpeg';

class About extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='container position-static tables mt-5 pt-5'>
          <div className='row subtable'>
            <div className='col-md-12 center'>
              <img
                src={foto}
                className='img-thumbnail rounded mx-auto d-block img-abt'
                alt='About'
              ></img>
              <div className='text-center'>
                <hr />
                <h1>WHO AM I?</h1>
                <h5>
                  Hey there! My name is Lautaro, and I'm a web developer. I'm 23
                  years old, and I lived in Córdoba, Argentina. Apart from
                  coding, I'm a student of Psychology in UNC, play guitar in my
                  free times and also I keep learning new technologies because I
                  love create new things. My positive attitude for the problems
                  is my best virtue!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
