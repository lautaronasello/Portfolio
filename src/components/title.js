import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div className='text-center '>
        <div className='title-container my-5'>
          <h1 className='title display-4 '>{this.props.title} </h1>
          <h1 className='lead center fs-2 '>{this.props.subtitle}</h1>
        </div>
      </div>
    );
  }
}

export default Title;
