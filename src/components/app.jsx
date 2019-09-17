import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "XGhTPVMgzLv7s2TOE6"
    };
  }

  search = (query) => {
    giphy('mtPnuLVloRNHZmLG64Rsw6oUvDifxVPm').search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    const gifs = [
      { id: "XGhTPVMgzLv7s2TOE6" },
      { id: "jOmQmJkjcvB3Bc8CRb" },
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}  />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
