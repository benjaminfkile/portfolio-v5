const handlePlaybackRate = (index: number, speed: number, elemetId: string) => {
    let elem: HTMLVideoElement | any = document.getElementById(elemetId)
    if (elem) {
        elem.playbackRate = speed
    } else {
        setTimeout(() => {
            handlePlaybackRate(index, speed, elemetId)
        }, 100);
    }
}
export default handlePlaybackRate