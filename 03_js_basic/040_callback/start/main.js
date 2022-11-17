function print(fn){
  const result = fn();
  console.log(result);
}

function fn(number = 3) {
    return number * 2;
  }
  
  debugger;
  print(fn);