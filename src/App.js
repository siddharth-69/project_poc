import React,{ Component} from 'react';

import { Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import './App.css';

import youtube from './api/youtube'


class App extends Component{

  state={
    videos:[],
    selectedVideo: null
  }

  componentDidMount(){
    this.handleSubmit("macbook")
  }

  onVideoSelect = (video) =>{
    this.setState({selectedVideo: video})
  }

  setSelectedVideo = (video) => {
    this.setState({selectedVideo: video});
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "XXXXXXXXXXXXXXXXXX",
        q: searchTerm,
      }
    });

    this.setState({videos: response.data.items,selectedVideo: response.data.items[0]});
  }

  render(){
    const {selectedVideo,videos} = this.state
    return (
      <Grid style={{ justifyContent: "center" }} container spacing={12}>
        <Grid item xs={10}>
          <Grid container spacing={10}>
            <Grid item xs={8}>
              <SearchBar onSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={2}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App
