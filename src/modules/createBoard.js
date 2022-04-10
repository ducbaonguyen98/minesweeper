const addNumber = (grids, row, col) => {
    for (let i = 0; i < row; i++) { 
        for (let j = 0; j < col; j++) {
            if (grids[i][j].value === 0) 
                grids[i][j].value = countMines(grids, i, j);
        } 
    }

    return grids;
}

const countMines = (arr, x, y) => {
    let count = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) { 

            // x = 0; y = 0;

            // i = -1, j = -1 / newX = -1 / newY = -1;  => false
            // i = -1, j = 0 / newX = -1 / newY = 0;  => true
            // i = -1, j = 1 / newX = -1 / newY = 1; => false

            // i = 0, j = -1 / newX = 0 / newY = -1;  => true
            // i = 0, j = 0 / newX = 0 / newY = 0;  => false
            // i = 0, j = 1 / newX = 0 / newY = 1;  => false

            // i = 1, j = -1 / newX = 1 / newY = -1; => false
            // i = 1, j = 0 / newX = 1 / newY = 0; => true
            // i = 1, j = 1 / newX = 1 / newY = 1; => false

            const newX = x + i; 
            const newY = y + j; 
            if(newX >= 0 && newX < arr.length && newY >= 0 && newY < arr.length)
                if(arr[newX][newY].value === "X")
                    count++;
        }
    }

    return count;
}

export const createBoard = (size, listMines) => {
    const row = size;
    const col = size;
    const grids = [];
    
    for (let i = 0; i < row; i++) {
        const cols = [];
        for (let j = 0; j < col; j++) {
            const find = listMines.some(({ x, y }) => x === i && y === j);

            cols.push({
                value: find ? "X" : 0,
                x: i,
                y: j,
                isClick: false
            })
        }
        grids.push(cols);
    }

    return addNumber(grids, row, col);
}
