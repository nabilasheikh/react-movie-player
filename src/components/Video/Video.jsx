import './Video.css';
import { useEffect,useRef} from 'react'
import PropTypes from 'prop-types'


const VideoPlayer = (props)=> {
    const {videoSource}=props;
    const videoPlayerRef = useRef() 
    useEffect(()=>{
        videoPlayerRef.current.play()
       }, [videoSource]) 
    return (
            <div className="player-overlay">
                <video 
                    ref={videoPlayerRef} 
                    controls
                    src={videoSource} 
                    muted="muted"/>
            </div>
      );
     
    };

    VideoPlayer.propTypes={
        videoSource:PropTypes.string
    }
export default VideoPlayer;
  