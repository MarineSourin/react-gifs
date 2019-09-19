import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderList = ({ gifs }) => {
    return gifs.map(({ id }) => <Gif id={id} key={id} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
