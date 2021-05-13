import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className='card mt-1' style={this.props.style}>
        <img
          src={this.props.img}
          className='card-img-top'
          alt={this.props.alt}
        />
        <div className='card-body'>
          <p className='fs-5 fw-bold lead'>{this.props.title} </p>
          <p className='card-text'>{this.props.text}</p>
          <div className='justify-content-md-end d-md-flex d-grid gap-2 pt-2 pe-2'>
            <a
              href={this.props.href}
              target={this.props.target}
              className={this.props.btnclass}
            >
              {this.props.btn}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
