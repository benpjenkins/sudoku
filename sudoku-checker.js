const getRow = (puzzle, rowIdx) => {
    return puzzle[rowIdx];
}

const getColumn = (puzzle, columnIdx) => {
    let column = [];
    for (let i = 0; i < puzzle.length; i++) {
        column.push(puzzle[i][columnIdx]);
    }
    return column;
}

const getGrid = (puzzle, xCord, yCord) => {
    let grid = [];
    let startIdx = 0;
    let endIdx = 0;
    if (yCord === 0) {
        startIdx = 0;
        endIdx = 2;
    } else if (yCord === 1) {   
        startIdx = 3;
        endIdx = 5;
    } else if (yCord === 2) {
        startIdx = 6;
        endIdx = 8;
    }
    for ( let i = startIdx; i <= endIdx; i++) {
        let val = puzzle[i]
        if (xCord === 0) {
            grid.push(val[0]);
            grid.push(val[1]);
            grid.push(val[2]);
        } else if (xCord === 1) {
            grid.push(val[3]);
            grid.push(val[4]);
            grid.push(val[5]);
        } else if (xCord === 2) {
            grid.push(val[6]);
            grid.push(val[7]);
            grid.push(val[8]);
        }
    }
    return grid;
}

const includes1to9 = (input) => {
    if (!input.includes(1)) {
        return false;
    } else if (!input.includes(2)) {
        return false;
    } else if (!input.includes(3)) {
        return false;
    } else if (!input.includes(4)) {
        return false;
    } else if (!input.includes(5)) {
        return false;
    } else if (!input.includes(6)) {
        return false;
    } else if (!input.includes(7)) {
        return false;
    } else if (!input.includes(8)) {
        return false;
    } else if (!input.includes(9)) {
        return false;
    } else {
        return true;
    }
}

sudokuIsValid = (puzzle) => {
    for (let i = 0; i < puzzle.length; i++) {
        if (includes1to9(getRow(puzzle, i)) === false) {
          return false;
        }
        if (includes1to9(getColumn(puzzle, i)) === false) {
          return false;
        } 
    }
    for (let i = 0; i < 3; i ++) {
        for (let j = 0; j < 3; j++) {
            if (includes1to9(getGrid(puzzle, i, j)) === false) {
                return false;
            }
        }
    }
    return true;
}

const isSame = (puzzle1, puzzle2) => {
    for (let i = 0; i < puzzle1.length; i++){
        let currentRow1 = puzzle1[i];
        let currentRow2 = puzzle2[i]
        for (let j = 0; j < currentRow1.length; j++) {
            if (currentRow1[j] !== currentRow2[j]) {
                return false;
            }
        }
    }
    return true;
}



//valid sudoku for testing
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

//invalid sudoku for testing
let falsePuzzle =   [[ 8,9,5,7,4,2,1,3,6 ],
                    [ 8,7,1,9,6,3,4,8,5 ],
                    [ 4,6,3,5,8,1,7,9,2 ],
                    [ 9,3,4,6,1,7,2,5,8 ],
                    [ 5,1,7,2,3,8,9,6,4 ],
                    [ 6,8,2,4,5,9,3,7,1 ],
                    [ 1,5,9,8,7,4,6,2,3 ],
                    [ 7,4,6,3,2,5,8,1,9 ],
                    [ 3,2,8,1,9,6,5,4,7 ]];


//should be true
console.log(sudokuIsValid(puzzle));
//should be false
console.log(sudokuIsValid(falsePuzzle));
//should be true
console.log(isSame (puzzle, puzzle));
//should be false
console.log(isSame (puzzle, falsePuzzle))
