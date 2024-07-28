console.log("Test started here");
try {
  console.log(result);
} catch (e) {
  console.log(`An error has occurred during runtime`, e);
}finally{
    console.log('Error handling is copleted');

}
console.log("Test ended here");

console.log('----------------------------------------------------------------');

console.log('New Test Started here');

throw new Error("An error has occurred during runtime");

console.log('Test is completed here');
