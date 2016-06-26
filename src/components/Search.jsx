class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: null
    };

  }

  searchInput(event) {
    this.props.onSearch(this.state.searchQuery);
  }

  enteredInput(event) {
    this.setState({
      searchQuery: event.target.value
    });
    var dumpster = _.debounce(this.props.onSearch.bind(this, this.state.searchQuery), 1000);
    dumpster();
  }

  render() {
    return (<div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={this.enteredInput.bind(this)}/>
      <button className="btn hidden-sm-down" onClick={this.searchInput.bind(this)}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>);
  }

}


// Sources
// Get input from form: http://stackoverflow.com/questions/23427384/get-form-data-in-reactjs
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

//<input className="form-control" type="text" onChange={this.enteredInput.bind(this)}/>

// (e) => _.debounce(this.enteredInput.bind(this, e), 1000);