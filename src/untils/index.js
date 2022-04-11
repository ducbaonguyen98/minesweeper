export const formatTime = (secs) => {
    function pad(num) {
        return `0${num}`.slice(-2);
    }

    var minutes = Math.floor(secs / 60);
    secs = secs % 60;
    var hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

export const randomNumber = (number) => Math.floor(Math.random() * number) + number; 