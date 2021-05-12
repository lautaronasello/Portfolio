import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className='card' style={this.props.style}>
        <img src={this.props.img} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{this.props.title} </h5>
          <p className='card-text'>{this.props.text}</p>
          <div className='justify-content-md-end d-md-flex d-grid gap-2 pt-2 pe-2'>
            <a href={this.props.href} className='btn btn-dark rounded'>
              {this.props.btn}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
