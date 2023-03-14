const { describe, it } = require("moca");


describe ('Basic functions of WebDriverIO', () => {
    
    
    //! this is how you launch a page
    //* Function:url()
    //* input: url address
    
    it('to launch a webpage', async () => {
        await browser.url('https://facebook.com/')
        await browser.pause(1000)
    })
    
    
    //!this is how you get the title of a page 
    //* Function: getTitle()
    //* returns: title of the webpage above DOM as a string 
    
    it.only('to get a title', async () => {
      await browser.url("https://www.amazon.com/");

      const pageTitle = await browser.getTitle();

      console.log(`This is your page title-> ${pageTitle}`);

      //! verify that pageTitle is equals to---> "Amazon.com. Spend less. Smile more."
      //* input: expect(pageTitle, '').to.equal('use pageTitle Func Value')

       expect(pageTitle,'NOT EQUAL').to.equal('Amazon.com. Spend less. Smile more.');
    })

    // it('to get the current url', async () => {

    // })


})


