import { useMemo } from "react";

export const useLevel = (level) => { 

  return useMemo(() => {
    let size = 0;
    let mines = 0;

    switch (level) {
        case 0:
            size = 9;
            mines = 10;
            break;
        
        case 1:
            size = 16;
            mines = 40;
            break;
    
        default:
            break;
    }

    return [size, mines]

  },[level]);
};
