function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

module.exports = {
    square, cube
}
/*
In order to be able to use members in one js file, first we export them into another file
*/
