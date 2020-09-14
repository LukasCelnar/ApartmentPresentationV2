import React from 'react';
import './Video.scss'

const Video = () => {
    return (
        <div className='video'>
            <div className='video__header'>Video Prohlídka</div>
            <iframe className='video__video-player' title='video' id="ytplayer" type="text/html" width="1020" height="605" src="https://www.youtube.com/embed/3XqS8kB5_rg" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        </div>
    );
};

export default Video;