var mapData = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    
    var mapData1 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];


var foregroundData = [[-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [13,  13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  -1, -1],
  [-1, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [13, -1, -1,  13,  13,  13, -1, -1, -1, -1, -1, -1,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13, 4],
  [-1,-1, -1,  13,  -1,  13, -1, -1, -1,  13, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1,  13, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, 6, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, 2, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [16,16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]];
  
  var foregroundData1 = [[-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [13,  13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  -1, -1],
  [-1, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [13, -1, -1,  13,  13,  13, -1, -1, -1, -1, -1, -1,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13, 4],
  [-1,-1, -1,  13,  -1,  13, -1, -1, -1,  13, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1,  13, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, 6, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, 2, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [-1,-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, -1, -1,  13, 6],
  [16,16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]];
