const AudioTrack = ({track, audioRef}) => {
    return (
        <audio src={track ? track : null} ref={audioRef} />

    )
}

export default AudioTrack