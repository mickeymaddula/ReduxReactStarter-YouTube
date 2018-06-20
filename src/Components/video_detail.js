//Since we wont be using any state then, we can confirm that we dont need a class os a functional component

import React from 'react';

const VideoDetail = ({video}) => {

//calling props
//const video = props.video;


//To check, handle null props we can add a statement:
//
if (!video){
  return <div>Loading..</div>;
}



//using ES6 we can remove props and just
//const VideoDetail = ({video}) =>{

 const videoId = video.id.videoId;
const url = "https://www.youtube.com/embed/"+videoId;

//Using String Interpolation, Template String from ES6 we can do:
//const url = `https://www.youtube.com/embed/${videoId}`;


  return (

<div className="video-detail col-md-B">
<div className="embed-responsive embed-responsive-16by9">
  {/* providing src to iframe */}
  <iframe className="embed-responsive-item" src={url}></iframe>
</div>
  <div className="details">

    <div>{video.snippet.title}></div>``
    <div>{video.snippet.description}</div>
  </div>
</div>

  );
};


export default VideoDetail;
