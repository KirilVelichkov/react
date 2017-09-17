import React, { Component } from 'react';
import SearchBar from './SearchBar';
import YouTubeApiSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import _ from 'lodash';

const API_YOUTUBE_KEY = 'AIzaSyCiajshHB9nXoGEzPey9ONc8phGlmN889Y';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      loading: true,
      selectedVideo: null
    };


    this.videoSearch = this.videoSearch.bind(this);
    this.setSelectedVideo = this.setSelectedVideo.bind(this);

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YouTubeApiSearch({ key: API_YOUTUBE_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        loading: false,
        selectedVideo: videos[0]
      });
    });
  }

  setSelectedVideo(selectedVideo) {
    this.setState({ selectedVideo });
  }

  render() {
    let { videos, loading, selectedVideo } = this.state;
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={this.setSelectedVideo}
          videos={videos}
          loading={loading} />
      </div>
    );
  }
}
