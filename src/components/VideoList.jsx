var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map(video => 
      <VideoListEntry video={video} />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

// ReactDOM.render(<VideoList videos={window.exampleVideoData} />, document.getElementById('app'));
/*
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      boldHover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      boldHover: !this.state.boldHover
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.boldHover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onListItemHover.bind(this)}>{this.props.groceries}</li>
    );
  }
}

var GroceryList = (props) => {
  return (
    <div>
      <h2>My Todo List</h2>
      <ul>
        {props.groceries.map(groceries =>
          <GroceryListItem groceries={groceries} />
        )}
      </ul>
    </div>
  )
};
ReactDOM.render(<GroceryList groceries={['hi', 'there', 'how', 'are', 'you']} />, document.getElementById("app"));
*/