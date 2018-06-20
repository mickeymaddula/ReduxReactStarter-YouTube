import React from 'react'

const VideoListItem = (props) =>{

//we will parse the props that was sent and save it to video and log it
  const video = props.video;
// WE have now, onVideoSelect
//
  const onVideoSelect=props.onVideoSelect;
//We can use ES6 to just Simply return without using props
//const VideoListItem = ({video}) =>{
//console.log(video);


const imgURL=video.snippet.thumbnails.default.url;

//  return <li> Video</li>

  return (
// now when we have an onclick, we'll call onVideoSelect and apps That videos' item
<li onClick={() => onVideoSelect(video) } className="list-group-item">

                    <div className="video-list-media">
                    <div className="media-left">

  <img className="media-object" src={imgURL}></img></div>

                    <div className="media-body">

  <div className="media-heading">{video.snippet.title}</div></div></div>

  </li>);



};


export default VideoListItem
