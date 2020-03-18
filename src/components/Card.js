import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <section>
        <a href={this.props.url}>
          <img class="octo-img" src={this.props.imgUrl} alt={this.props.name} />
        </a>
        <header>
          <p>
            {this.props.num}
            <a href={this.props.url}>{this.props.name}</a>
          </p>
          <a href={this.props.ownerUrl}>
            <img src={this.props.ownerImgUrl} alt={this.props.owner} />
          </a>
        </header>
      </section>
    )
  }
}

export default Card
