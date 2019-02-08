const getRow = (puzzle, rowIdx) => {
    return puzzle[rowIdx];
}

const getColumn = (puzzle, columnIdx) => {
    let column = [];
    for (let i = 0; i < puzzle.length; i++) {
        let currentRow = puzzle[i];
        column.push(currentRow[columnIdx]);
    }
    return column;
}

const getGrid = (puzzle, xCord, yCord) => {
    let grid = [];
    let startIdx = 0;
    let endIdx = 0;
    //these if statements specify the correct rows to begin looking 
    //for values to push to grid
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
    //this loop pushes the correct columns after the correct rows have 
    //been given to it as startIdx and endIdx
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

//check to see if every number from 1-9 is in the current row,
//column, or 3x3 grid.  Doesn't check for doubles but if previous
//functions work as expected any double would result in another number
//missing from this functions input and would then be false
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
    //test if any row is false
    for (let i = 0; i < puzzle.length; i++) {
        let value = getRow(puzzle, i)
        let result = includes1to9(value);
        if (result === false) {
          return false;
        }
    }
    //test if any column is false
    for (let i = 0; i < puzzle.length; i++) {
        let value = getColumn(puzzle, i)
        let result = includes1to9(value);
        if (result === false) {
          return false;
        }
    }
    //test if any 3x3 grid is false.
    for (let i = 0; i < 3; i ++) {
        for (let j = 0; j < 3; j++) {
            let value = getGrid(puzzle, i, j)
            let result = includes1to9(value);
            if (result === false) {
                return false;
            }
        }
    }
    //if nothing has returned false, return true
    return true;
}

const isSame = (puzzle1, puzzle2) => {
    for (let i = 0; i < puzzle1.length; i++){
        let currentRow1 = puzzle1[i];
        let currentRow2 = puzzle2[i]
        for (let j = 0; j < currentRow1.length; j++) {
            let currentChar1 = currentRow1[j];
            let currentChar2 = currentRow2[j];
            if (currentChar1 !== currentChar2) {
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
console.log(isSame (puzzle, falsePuzzle));
