// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
//
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
//
// A partially filled sudoku which is valid.
//
// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true

/// ---------------- Solution 1 ------------------///

const isValidSudoku = board => {
  const isValid = createValidator();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!isValid(i, j, board[i][j])) {
        return false;
      }
    }
  }

  return true;
};

const createValidator = () => {
  const horizontal = Array.from(Array(9), () => new Set());
  const vertical = Array.from(Array(9), () => new Set());
  const boxes = Array.from(Array(9), () => new Set());

  return (row, col, value) => {
    if (value === '.') {
      return true;
    }

    if (horizontal[row].has(value)) {
      return false;
    }

    if (vertical[col].has(value)) {
      return false;
    }

    const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
    if (boxes[box].has(value)) {
      return false;
    }

    horizontal[row].add(value);
    vertical[col].add(value);
    boxes[box].add(value);

    return true;
  };
};
