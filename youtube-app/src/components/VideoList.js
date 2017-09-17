import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, loading, onVideoSelect }) => {
    const videoItems = videos.map((video, i) => {
        return (
            <VideoListItem
                onVideoClick={onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {loading && 'Loading videos...'}
            {loading || videoItems}
        </ul>
    );
};

export default VideoList;