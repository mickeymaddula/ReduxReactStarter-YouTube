






//import React from 'react'
import React, {Component} from 'react'
import _ from 'lodash'


class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.state={
      term: ''
    };

  }

render(){

 const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

  return(
    <div className="search-bar">
    <input

  value={this.state.term}
  onChange={e => this.onInputChange(e.target.value) } />

      {/* onChange={e => this.setState({term:e.target.value}) } /> */}
    <br/>
    Value of Input: {this.state.term}
  </div>
);
}


onInputChange(term){
  this.setState({term});
  this.props.onSearchTermChange(term);

}

}


export default SearchBar;
