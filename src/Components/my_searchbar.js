import React, {Component} from 'react';

// const SearchBar = ()=> {
//
// return <input />;
//

// }
class SearchBar extends Component{

render(){
//  return <input onChange={this.onInputChange} />;

  return <input onChange={ e => console.log(e.target.value) } />;

}




}


export default SearchBar;
