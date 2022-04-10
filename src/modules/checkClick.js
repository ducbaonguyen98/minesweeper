export const checkClick = (gridButtons, x, y, listMines, buttonClicked = []) => {
  gridButtons[x][y].isClick = true;
  buttonClicked.push(gridButtons[x][y]);

  if(gridButtons.length * gridButtons.length - buttonClicked.length === listMines.length) {
    return { gridButtons, buttonClicked, isWin: true };
  }

  if(gridButtons[x][y].value === "X") {
    listMines.forEach(({ x, y }) => {
      gridButtons[x][y].isClick = true;
    });

    return { gridButtons, buttonClicked, isWin: false };
  }

  if(gridButtons[x][y].value === 0) {
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) { 
        // if(i !== 0 || j !== 0) {
          const newX = x + i;
          const newY = y + j;
          if(newX >= 0 && newX < gridButtons.length && newY >= 0 && newY < gridButtons.length)
            if(!gridButtons[newX][newY].isClick)
              checkClick(gridButtons, newX, newY, listMines, buttonClicked); 
        // }
      }
    }
  }

  return { gridButtons, buttonClicked, isWin: false };
};