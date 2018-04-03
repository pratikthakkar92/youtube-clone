import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBzF6HjC8FbnDnSu2ECPl1dTdw__SZlMr0';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null,
      initialTerm: 'ReactJS',
      term: null
     };
     this.videoSearch(this.state.initialTerm);
    
  }
  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoList
        videos={this.state.videos}
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
        <VideoDetail video={this.state.selectedVideo}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));