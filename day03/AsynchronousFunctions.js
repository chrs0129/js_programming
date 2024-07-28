async function findElement(locator) {
  let element = new Promise((resolve, reject) => {
    if (locator === "valid locator") {
      resolve("Element found");
    } else {
      reject("Element not found");
    }
  });
  return element;
}

async function clickElement(locator) {
  findElement(locator)
    .then(() => console.log("Element clicked"))
    .catch(() => console.log("Unable to click element"));
}

async function runTest() {
  await clickElement("valid locator");
  await clickElement("invalid locator");
}
