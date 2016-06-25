// var App = () => (
//   <div>
//   <h1>Hello, Hannah!</h1>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={exampleVideoData}/>
//     </div>
//   </div>
// );


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      curVideo: exampleVideoData[0]
    };
  }

  onTitleClick (value) {
    this.setState({
      curVideo: value
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.curVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} onTitleClick={this.onTitleClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       done: false,
//       boldHover: false
//     };
//   }

//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//     });
//   }

//   onListItemHover() {
//     this.setState({
//       boldHover: !this.state.boldHover
//     })
//   }

//   render() {
//     var style = {
//       textDecoration: this.state.done ? 'line-through' : 'none',
//       fontWeight: this.state.boldHover ? 'bold' : 'normal'
//     };

//     return (
//       <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onListItemHover.bind(this)}>{this.props.groceries}</li>
//     );
//   }
// }