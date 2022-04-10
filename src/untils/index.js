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