function getLongestPath(cost_map, dependencies, starting_node){
  let longestPath = [];
  let max = 0;

  function dfs(starting_node, currPath=[], currMax=0){
    const currNodePath = currPath.concat(starting_node);
    currMax += cost_map[starting_node]; 
    if(currMax > max){
      longestPath = currNodePath;
      max = currMax;
    }

    let children = dependencies[starting_node];
    if(children && children.length > 0){
      for(let child of children){
        dfs(child, currNodePath, currMax);
      }
    }
  }
  dfs(starting_node)

  return longestPath;
}

const cost_map = {
    user_profile: 0,
    board_data: 10,
    pin_like: 4,
    pin_data: 5
};

const dependencies = {
    user_profile: ['board_data', 'pin_data'],
    pin_data: ['pin_like']
}

const starting_node = 'user_profile';

console.log(getLongestPath(cost_map, dependencies, starting_node))

function canWin(array, index){ //[3,1,7,6,2,3,0,*], 3
    console.log("array", array)
    if(index < 0 || index >= arr.length || array[index] === '*'){
      return false;
    }
    if(array[index] === 0) return true;

    const num = array[index]; //1
    const leftIdx = index - num; //6
    const rightIdx = index + num //8
    array[index] = "*";

    return canWin(array, leftIdx) && canWin(array, rightIdx);
}

console.log(undefined && false)

console.log(canWin([3,1,0,6,2,3,7,1],0))
