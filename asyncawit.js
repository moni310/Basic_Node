function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Hello ,what do you want ???");
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
  }
  
  msg(); 
   
  