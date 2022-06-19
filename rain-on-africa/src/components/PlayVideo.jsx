export default function PlayVideo(props) {
    
    return (
        <video
            preload="metadata"    
            loop
            controls
            playsInline>
            <source src={props.video} type="video/mp4"/>
        </video>
    );
}