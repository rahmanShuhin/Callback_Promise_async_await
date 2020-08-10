const testAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Ami age");
      const err = true;
      if (err) {
        resolve();
      } else {
        reject("Something wrong");
      }
    }, 3000);
  });
};

async function init() {
  await testAsync();
  console.log("ami fore");
}
init();
