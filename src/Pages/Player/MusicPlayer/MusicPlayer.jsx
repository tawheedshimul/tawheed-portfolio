import React, { Component } from 'react';
import "./MusicPlayer.css"

class MusicPlayer extends Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
      isShuffled: false,
      isRepeated: true,
      isLoved: true,
      currentSong: 'STRESSED OUT',
    };
  }

  togglePlayPause = () => {
    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying,
    }));
  };

  toggleShuffle = () => {
    this.setState((prevState) => ({
      isShuffled: !prevState.isShuffled,
    }));
  };

  toggleRepeat = () => {
    this.setState((prevState) => ({
      isRepeated: !prevState.isRepeated,
    }));
  };

  toggleLove = () => {
    this.setState((prevState) => ({
      isLoved: !prevState.isLoved,
    }));
  };

  render() {
    const { isPlaying, isShuffled, isRepeated, isLoved, currentSong } = this.state;

    return (
      <article className="screen">
        {/* ... (your HTML structure) ... */}
        <table className="footer">
          <td>
            <input type="checkbox" id="love" checked={isLoved} onChange={this.toggleLove} />
            <label className="love" htmlFor="love"></label>
          </td>
          <td>
            <input type="checkbox" id="shuffle" checked={isShuffled} onChange={this.toggleShuffle} />
            <label className="shuffle" htmlFor="shuffle"></label>
          </td>
          <td>
            <input type="checkbox" id="repeat" checked={isRepeated} onChange={this.toggleRepeat} />
            <label className="repeat" htmlFor="repeat"></label>
          </td>
          <td>
            <input type="checkbox" id="options" />
            <label className="options" htmlFor="options"></label>
          </td>
        </table>
        <div className="current">
          <h2>{currentSong}</h2>
        </div>
      </article>
    );
  }
}

export default MusicPlayer;
