export const getColor = (number) => {
    switch (number) {
        case 1:
            return "text-one";
        case 2:
            return "text-two";
        case 3:
            return "text-three";
        case 4:
            return "text-four"; 
        default:
            return "text-one";;
    }
}

export const getValue =  (value) => {
    switch (value) {
        case "X":
            return "💣";
        case 0:
            return ""; 
        default:
            return value;
    }
}

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