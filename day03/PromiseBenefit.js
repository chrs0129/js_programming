function getIntoCar() {
    
    return new Promise((resolve) => {
        console.log("Get into the car");
        resolve();
  })
}
  
  function startCar(ck) {
return new Promise((resolve) => {

    console.log("Car started");
    resolve();
  })
}

  function drive() {
    return new Promise((resolve) => {
    console.log("Driving the car");
    resolve();
  })

}
getIntoCar()
.then(() => startCar())
 .then(() => drive()).finally(() => console.log("Reach the destination."));

  