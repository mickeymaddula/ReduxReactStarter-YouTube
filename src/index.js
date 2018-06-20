import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar'

import YTSearch from 'youtube-api-search'
import moment from 'moment';
import VideoList from './Components/video_list'
import VideoDetail from "./Components/video_detail"
import MyDatePicker from './Components/date_picker'
import DayPicker, { DateUtils } from 'react-day-picker';

const API_KEY = "AIzaSyDXfTL0QOvIyWNqPwkOJY11n8t_8bSVaa0";

// YTSearch({key:API_KEY, term:'puppies'}, function(data){
//   console.log(data);
// })


//class App = () => {

 class App extends Component{
constructor(props){
  super(props);
  this.state= {

    videos:[],
    selectedVideo: null,
    pubAfterDate: null,
    pubBeforeDate: null

  };



//  YTSearch({key:API_KEY, term:'puppies'},(videos) => {
  //  this.setState({videos});
  //  console.log(data);
//  })

this.videoSearch('pugs');

}

videoSearch(term){
  let myKey = 'pubBeforeDate';

console.log( "beforeDate",this.state[myKey]);
console.log( "afterDate",this.state.pubAfterDate);

  YTSearch({key:API_KEY, term:term, beforeDate:this.state.pubBeforeDate, afterDate:this.state.pubAfterDate},(data) => {
    //We'll add a new state value SelectedVideo

    //this.setState({videos:data});
    this.setState({videos:data, selectedVideo: data[0]});

    console.log(data);
  })
}


startDateSet(date){
  console.log("Back in INDEX");
  console.log("STARTDATE", date);
  this.setState({pubAfterDate: date});
}

endDateSet(date){
  console.log("Back in INDEX");
  console.log("ENDDATE", date);
  this.setState({pubBeforeDate: date});

}

render(){
return (<div>

{/* We'll pass a new call back that will take the term and do YTSearch
 */}
<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>

<MyDatePicker onStartDateSet={date => this.startDateSet(date)} onEndDateSet={date => this.endDateSet(date)}/>
{/* Just to see our component is working correctly, we'll take the first video and pass it */}

<VideoDetail video={this.state.selectedVideo} />

{/* It takes a while to call the AJAX, since react wants to render immeditately, Some parent aren't able to render for it's children. */}

{/* <VideoDetail video={this.state.selectedVideo} /> */}

{/*We'll pass a callback function from App -> VideoList -> VideoListItem  */}


{/* <VideoList videos={this.state.videos} /> */}

{/* We'll pass a function that will give us the selected video */}

<VideoList

  onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
  videos={this.state.videos} />

{/* If VideoList calls this function then, it updates another component on the app. */}
{/* NOW WE WILL EDIT VIDEOLIST */}
 </div>
);}
}




ReactDOM.render(<App />, document.querySelector('.container'));
