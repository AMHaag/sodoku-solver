/* eslint-disable @typescript-eslint/no-unused-vars */

export class Board {
  constructor(matrix) {
    this.grid = matrix;
    this.numeralsAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.missingValues = 0;
  }
  returnCell(x, y) {
    return this.grid[x][y];
  }
  returnRowArray(i) {
    return this.grid[i];
  }
  returnColArray(i) {
    const col = [
      this.grid[0][i],
      this.grid[1][i],
      this.grid[2][i],
      this.grid[3][i],
      this.grid[4][i],
      this.grid[5][i],
      this.grid[6][i],
      this.grid[7][i],
      this.grid[8][i],
    ];
    return col;
  }
  returnSubgridArray(i) {
    switch (i) {
      case 0:
        return [
          this.grid[0][0],
          this.grid[0][1],
          this.grid[0][2],
          this.grid[1][0],
          this.grid[1][1],
          this.grid[1][2],
          this.grid[2][0],
          this.grid[2][1],
          this.grid[2][2],
        ];
      case 1:
        return [
          this.grid[0][3],
          this.grid[0][4],
          this.grid[0][5],
          this.grid[1][3],
          this.grid[1][4],
          this.grid[1][5],
          this.grid[2][3],
          this.grid[2][4],
          this.grid[2][5],
        ];
      case 2:
        return [
          this.grid[0][6],
          this.grid[0][7],
          this.grid[0][8],
          this.grid[1][6],
          this.grid[1][7],
          this.grid[1][8],
          this.grid[2][6],
          this.grid[2][7],
          this.grid[2][8],
        ];
      case 3:
        return [
          this.grid[3][0],
          this.grid[3][1],
          this.grid[3][2],
          this.grid[4][0],
          this.grid[4][1],
          this.grid[4][2],
          this.grid[5][0],
          this.grid[5][1],
          this.grid[5][2],
        ];
      case 4:
        return [
          this.grid[3][3],
          this.grid[3][4],
          this.grid[3][5],
          this.grid[4][3],
          this.grid[4][4],
          this.grid[4][5],
          this.grid[5][3],
          this.grid[5][4],
          this.grid[5][5],
        ];
      case 5:
        return [
          this.grid[3][6],
          this.grid[3][7],
          this.grid[3][8],
          this.grid[4][6],
          this.grid[4][7],
          this.grid[4][8],
          this.grid[5][6],
          this.grid[5][7],
          this.grid[5][8],
        ];
      case 6:
        return [
          this.grid[6][0],
          this.grid[6][1],
          this.grid[6][2],
          this.grid[7][0],
          this.grid[7][1],
          this.grid[7][2],
          this.grid[8][0],
          this.grid[8][1],
          this.grid[8][2],
        ];
      case 7:
        return [
          this.grid[6][3],
          this.grid[6][4],
          this.grid[6][5],
          this.grid[7][3],
          this.grid[7][4],
          this.grid[7][5],
          this.grid[8][3],
          this.grid[8][4],
          this.grid[8][5],
        ];
      case 8:
        return [
          this.grid[6][6],
          this.grid[6][7],
          this.grid[6][8],
          this.grid[7][6],
          this.grid[7][7],
          this.grid[7][8],
          this.grid[8][6],
          this.grid[8][7],
          this.grid[8][8],
        ];
      default:
        break;
    }
  }
  returnSubgridArrayByCoordinate(x, y) {
    if (x < 3 && y < 3) {
      return this.returnSubgridArray(0);
    }
    if (x < 3 && y < 6) {
      return this.returnSubgridArray(1);
    }
    if (x < 3 && y < 9) {
      return this.returnSubgridArray(2);
    }
    if (x < 6 && y < 3) {
      return createSubgrid(3, 0);
    }
    if (x < 6 && y < 6) {
      return createSubgrid(3, 3);
    }
    if (x < 6 && y < 9) {
      return createSubgrid(3, 6);
    }
    if (x < 9 && y < 3) {
      return createSubgrid(6, 0);
    }
    if (x < 9 && y < 6) {
      return createSubgrid(6, 3);
    }
    if (x < 9 && y < 9) {
      return createSubgrid(6, 6);
    }
    return null;
  }
  updateCell(input, x, y) {
    if (typeof input !== Number) {
      throw 'a Board cell can only contain a Number';
    }
    if (input < 1 || input < 10) {
      throw 'a Board cell can must be between 1 and 9';
    }
    this.grid[x][y] = input;
  }
}

export class BoardOfPossibleValues {
  constructor(matrix) {
    this.grid = matrix;
  }
  returnCell(x, y) {
    return this.grid[x][y];
  }
  returnRowArray(i) {
    return this.grid[i];
  }
  returnColArray(i) {
    const col = [
      this.grid[0][i],
      this.grid[1][i],
      this.grid[2][i],
      this.grid[3][i],
      this.grid[4][i],
      this.grid[5][i],
      this.grid[6][i],
      this.grid[7][i],
      this.grid[8][i],
    ];
    return col;
  }
  returnSubgridArray(i) {
    switch (i) {
      case 0:
        return [
          this.grid[0][0],
          this.grid[0][1],
          this.grid[0][2],
          this.grid[1][0],
          this.grid[1][1],
          this.grid[1][2],
          this.grid[2][0],
          this.grid[2][1],
          this.grid[2][2],
        ];
      case 1:
        return [
          this.grid[0][3],
          this.grid[0][4],
          this.grid[0][5],
          this.grid[1][3],
          this.grid[1][4],
          this.grid[1][5],
          this.grid[2][3],
          this.grid[2][4],
          this.grid[2][5],
        ];
      case 2:
        return [
          this.grid[0][6],
          this.grid[0][7],
          this.grid[0][8],
          this.grid[1][6],
          this.grid[1][7],
          this.grid[1][8],
          this.grid[2][6],
          this.grid[2][7],
          this.grid[2][8],
        ];
      case 3:
        return [
          this.grid[3][0],
          this.grid[3][1],
          this.grid[3][2],
          this.grid[4][0],
          this.grid[4][1],
          this.grid[4][2],
          this.grid[5][0],
          this.grid[5][1],
          this.grid[5][2],
        ];
      case 4:
        return [
          this.grid[3][3],
          this.grid[3][4],
          this.grid[3][5],
          this.grid[4][3],
          this.grid[4][4],
          this.grid[4][5],
          this.grid[5][3],
          this.grid[5][4],
          this.grid[5][5],
        ];
      case 5:
        return [
          this.grid[3][6],
          this.grid[3][7],
          this.grid[3][8],
          this.grid[4][6],
          this.grid[4][7],
          this.grid[4][8],
          this.grid[5][6],
          this.grid[5][7],
          this.grid[5][8],
        ];
      case 6:
        return [
          this.grid[6][0],
          this.grid[6][1],
          this.grid[6][2],
          this.grid[7][0],
          this.grid[7][1],
          this.grid[7][2],
          this.grid[8][0],
          this.grid[8][1],
          this.grid[8][2],
        ];
      case 7:
        return [
          this.grid[6][3],
          this.grid[6][4],
          this.grid[6][5],
          this.grid[7][3],
          this.grid[7][4],
          this.grid[7][5],
          this.grid[8][3],
          this.grid[8][4],
          this.grid[8][5],
        ];
      case 8:
        return [
          this.grid[6][6],
          this.grid[6][7],
          this.grid[6][8],
          this.grid[7][6],
          this.grid[7][7],
          this.grid[7][8],
          this.grid[8][6],
          this.grid[8][7],
          this.grid[8][8],
        ];
      default:
        break;
    }
  }
  returnSubgridArrayByCoordinate(x, y) {
    if (x < 3 && y < 3) {
      return this.returnSubgridArray(0);
    }
    if (x < 3 && y < 6) {
      return this.returnSubgridArray(1);
    }
    if (x < 3 && y < 9) {
      return this.returnSubgridArray(2);
    }
    if (x < 6 && y < 3) {
      return createSubgrid(3, 0);
    }
    if (x < 6 && y < 6) {
      return createSubgrid(3, 3);
    }
    if (x < 6 && y < 9) {
      return createSubgrid(3, 6);
    }
    if (x < 9 && y < 3) {
      return createSubgrid(6, 0);
    }
    if (x < 9 && y < 6) {
      return createSubgrid(6, 3);
    }
    if (x < 9 && y < 9) {
      return createSubgrid(6, 6);
    }
    return null;
  }
  removeOptionFromCell(i, x, y) {
    let cell = this.grid[x][y];
    let iString = `${i}`;

    if (cell.includes(iString)) {
      let newCell = cell.replace(iString, '');
      this.updateCell(newCell, x, y);
    } else {
      throw `ERROR: ${i} does not exist in cell ${x}${y}`;
    }
  }
  updateCell(input, x, y) {
    if (typeof input !== String) {
      throw 'ERROR: a BoPV cell can only contain a string';
    } else {
      this.grid[x][y] = input;
    }
  }
  updateCellViaArray(arr, x, y) {
    if (typeof arr !== Array) {
      throw 'ERROR: this method only takes arrays as input';
    }
    let cell = arr.join('');
    this.updateCell(cell, x, y);
  }
}

export class NumbersAvailable {
  constructor() {
    this.num = {
      n1: 9,
      n2: 9,
      n3: 9,
      n4: 9,
      n5: 9,
      n6: 9,
      n6: 9,
      n7: 9,
      n8: 9,
    };
  }
  /**This Method returns an array of numbers with at least one missing from the board
   * e.g. [1,2,4,5,6,7,9]
   */
  returnArrayOfAvailableNums() {
    let arr = [];
    if (this.num.n1 > 0) {
      arr.push(1);
    }
    if (this.num.n2 > 0) {
      arr.push(2);
    }
    if (this.num.n3 > 0) {
      arr.push(3);
    }
    if (this.num.n4 > 0) {
      arr.push(4);
    }
    if (this.num.n5 > 0) {
      arr.push(5);
    }
    if (this.num.n6 > 0) {
      arr.push(6);
    }
    if (this.num.n7 > 0) {
      arr.push(7);
    }
    if (this.num.n8 > 0) {
      arr.push(8);
    }
    if (this.num.n9 > 0) {
      arr.push(9);
    }
    return arr;
  }
  /** This Method returns an array with the number of remaining members on the board
   * for every number, even if they have zero remaining.
   */
  returnNumAvailabilityArray() {
    let arr = [];
    for (const property in this.num) {
      console.log(property);
      arr.push(this.num[property]);
    }
    return arr;
  }
  returnAvailableForNum(num) {
    for (const key in this.num) {
      if (key.includes(num)) {
        return this.num[key];
      }
    }
  }
  updateNumAvailable(num, avail) {
    if (typeof num !== Number) {
      throw 'ERROR:Invalid number';
    }
    if (num < 1 || num > 9) {
      throw 'ERROR: We only use numbers 1-9 in Sodoku bud.';
    }
    if (typeof avail !== Number) {
      throw 'ERROR: avail must be a Number';
    }
    if (avail > 9) {
      throw 'ERROR: There cannot be more than 9 of any given on the board.';
    }
    switch (num) {
      case 1:
        this.num.n1 = avail;
        break;
      case 2:
        this.num.n2 = avail;
        break;
      case 1:
        this.num.n1 = avail;
        break;
      case 2:
        this.num.n2 = avail;
        break;
      case 3:
        this.num.n3 = avail;
        break;
      case 4:
        this.num.n4 = avail;
        break;
      case 5:
        this.num.n5 = avail;
        break;
      case 6:
        this.num.n6 = avail;
        break;
      case 7:
        this.num.n7 = avail;
        break;
      case 8:
        this.num.n8 = avail;
        break;
      case 9:
        this.num.n9 = avail;
        break;
      default:
        return this;
    }
    return this;
  }
  decrementNumAvail(num) {
    if (!Number.isInteger(num)) {
      throw 'ERROR:Invalid number';
    }
    if (num < 1 || num > 9) {
      throw 'ERROR: We only use numbers 1-9 in Sodoku bud.';
    }
    switch (num) {
      case 1:
        this.num.n1--;
        break;
      case 2:
        this.num.n2--;
        break;
      case 1:
        this.num.n1--;
        break;
      case 2:
        this.num.n2--;
        break;
      case 3:
        this.num.n3--;
        break;
      case 4:
        this.num.n4--;
        break;
      case 5:
        this.num.n5--;
        break;
      case 6:
        this.num.n6--;
        break;
      case 7:
        this.num.n7--;
        break;
      case 8:
        this.num.n8--;
        break;
      case 9:
        this.num.n9--;
        break;
      default:
        return this;
    }

    return this;
  }
  /**
   * This method takes an array of numbers and returns whichever has the least remaining on the board
   * @param  {...Number} nums
   * @return Number
   */
  returnLeastAvailableNum(...nums) {
    let countAvailable = 9;
    let numLeastAvailable;
    let x = nums
    console.log(this)
    x.forEach((cv,i,arr,this) => {
      if (this.returnAvailableForNum(cv) <= countAvailable) {
        countAvailable = this.returnAvailableForNum(cv);
        numLeastAvailable = cv;
      }
    });
    return numLeastAvailable
  }
}

let x = new NumbersAvailable();
x.decrementNumAvail(1)
console.log(x.returnLeastAvailableNum([1,2,3]));