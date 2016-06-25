class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      curVideo: exampleVideoData[0],
      searchQuery: null,
      searchList: []
    };
  }

  onTitleClick (value) {
    this.setState({
      curVideo: value
    });
  }

  componentDidMount() {
    this.onSearch('cute kittens');
  }

  onSearch (value) {

    this.props.searchYouTube({max: 5, query: value, key: YOUTUBE_API_KEY}, (arr) => {
      this.setState({
        curVideo: arr[0],
        searchList: arr,
        searchQuery: value
      });
    });
  }

  render() {
    return (
      <div>
        <Nav onSearch={this.onSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.curVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.searchList} onTitleClick={this.onTitleClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;