import React, { useState, useRef } from 'react';

import stop from "../assets/images/stop.svg";

import play from "../assets/images/play.svg";

const MediaPlayer = ({ src, type }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [progress, setProgress] = useState(0);

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (event) => {
        const volume = event.target.value;
        setVolume(volume);
        videoRef.current.volume = volume;
    };

    const handleProgress = () => {
        const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(progress);
    };

    const handleSeek = (event) => {
        const seekTime = (event.target.value / 100) * videoRef.current.duration;
        videoRef.current.currentTime = seekTime;
    };

    return (
        <div className="custom-video-player">
            <video
                ref={videoRef}
                onTimeUpdate={handleProgress}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlayPause}
            >
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default MediaPlayer;