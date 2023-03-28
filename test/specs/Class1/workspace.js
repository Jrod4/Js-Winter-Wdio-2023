const { expect } = require("chai");
const { describe, it } = require("mocha");

describe("Basic functions of WebDriverIO", () => {
  //! this is how you launch a page
  //* Function:url()
  //* input: url address

  it("to launch a webpage", async () => {
    await browser.url("https://www.facebook.com/");
    await browser.pause(1000);
  });

  //!this is how you get the title of a page
  //* Function: getTitle()
  //* returns: title of the webpage above DOM as a string

  it("to get a title", async () => {
    await browser.url("https://www.amazon.com/");

    const pageTitle = await browser.getTitle();

    //   await browser.pause(1000);

    console.log(`This is your page title-> ${pageTitle}`);

    //! verifying that pageTitle is equals to---> "Amazon.com. Spend less. Smile more."
    //* input: expect(pageTitle, '').to.equal('use pageTitle Func Value')
    //* .to.equal() is out of the chai library

    expect(pageTitle, "NOT EQUAL").to.equal(
      "Amazon.com. Spend less. Smile more."
    );
  });

  //!this is how you get the URL of a webpage
  //*Function: getUrl();
  //*returns: URL of an webpage

  it("to get the current url", async () => {
    await browser.url("https://www.amazon.com/");
    const currentUrl = await browser.getUrl();
    const tOrF = currentUrl.endsWith(".com/"); //returns truthy or falsey

    console.log(`Your current url endsWith---> ${tOrF}`); //* this will return a boolean

    //* .to.be.true is out of the chai library
    //* verifying URL endsWith .com/
    expect(tOrF, "DOES NOT START WITH").to.be.true; //*using expect to compare Variable tOrF
  });

  //!this is how get window handle of a webpage
  //*Function: getWindowHandle
  //*returns: window handle ID but shows different syntax
  it("to get the window handle of the webpage", async () => {
    await browser.url("https://www.amazon.com/");

    await browser.pause(3000);

    const handle = await browser.getWindowHandle(); //* Returns a String Value

    console.log(`this is your window handle--> ${handle}`);

    //   expect(handle,'NOT THE WINDOW HANDLE').to.be.true; //* theres also .to.be.false
  });

  //!Using these Func. to interact on the web elements
  it("func. keywords", async () => {
    await browser.url("https://www.facebook.com/");
    await browser.pause(3000);

    //  await varName.click(); click on web element but first find element
    //  await varName.setValue(); type into web element but first find element
    //  await browser.back();
    //  await browser.forward();
    //  await browser.refresh();
    //  await varName.scrollIntoView(false);
    //  await varName.getAttribute(); returns the attribute's value as a string
    //  await varName.getText(); returns the text-value as a string
    //  await varName.isSelected(); returns Boolean
    //  await varName.isDisplayed(); returns Boolean
    //  await varName.isEnabled(); returns Boolean

    //  use (.to.be.true) and (.to.be.false) from chai library to verify(expect) for Boolean result above
  })


  it("func. actions (ex)", async () => {
    await browser.url("https://www.facebook.com/");
    await browser.pause(3000);

    await browser.url("https://www.amazon.com/");
    await browser.pause(3000);

    await browser.url("https://www.weather.com/");
    await browser.pause(3000);

    await browser.back(); //*On Amazon
    await browser.pause(3000);

    await browser.back(); //*On Facebook
    await browser.pause(3000);

    await browser.url("https://www.hotels.com/");
    await browser.pause(3000);

    await browser.back(); //*On Facebook
    await browser.pause(3000);

    await browser.forward(); //*On Hotels
    await browser.pause(3000);

    await browser.refresh();
    await browser.pause(3000);
  });

  //? Different actions of refreshing webpage

  it("refreshing webpage", async () => {
    await browser.url("https://www.amazon.com/");
    await browser.pause(3000);

    const currentUrl = await browser.getUrl(); //*Finding url and palce into a variable
    await browser.url(currentUrl); //*Using VarName currentUrl your launching the page
    await browser.pause(3000);

    await browser.back();
    await browser.pause(3000);

    await browser.forward();
    await browser.pause(3000);
  });
});

//? In wdio.conf.js File use (./test/specs/**/*.js) to run all your test cases but use (.only) on the file describe it-block you want to use; keeps you from having to change the specs file in the wdio.conf.js File

//!Run this in the terminal (npx wdio wdio.conf.js --spec test/specs/folder/file); Enter the folder and file to run code
//?Make sure to add (.only) on the it-block you want to specifically run

/**In the DOM, tag names are inmbedded into a html doctype
 * every tag has an angular open bracket (<tag)
 * (EX.) <html, <body, <div, <script, <input, <form, <link, <a, <button
 * In the <tags there are attributes='Values' (attr1='Value1')
 * (EX.) <tag attr1='Value1'; attr2='Value2'; attr3='Value3'; attr4='Value4'>
 *
 *
 *(<a)<--this tagName is a Link
 * <a class="_sv4" dir="ltr" href="https://fr-fr.facebook.com/" onclick="require("IntlUtils").setCookieLocale("fr_FR", "en_US", "https:\/\/fr-fr.facebook.com\/", "www_list_selector", 1); return false;" title="French (France)">Français (France)</a>
 *
 * list of attr tag names: <a attr = 'values
 *
 * class = "_sv4"
 * dir   = "ltr"
 * href  = "https://fr-fr.facebook.com/"
 *
 * When every you see a string between a tag name open/close(<>,</>) that mens that tag a has text value
 * (EX.) <tag1>"text value"</tag1>
 *
 * search Chropath in google and add the extentsion to google; refresh the page to show its added
 * -helps find unique web elemets in the DOM by using Tag names and attr's
 * id-attr's are the best way to find the uniqe web element
 */

//*How to find unique web-elements using locators in DOM:

// Using id-attribute
//! (//*[@id="id-value"]);<--paste in chropath
//! SyntaxVS: const webElement = await $('#idValue');

// Using other attribute's value instead id-attribute
//! (//tagName[@attrName="attrValue"])<--paste in chropath
//! SyntaxVS: const webElement = await $('tagName[attrName='attrValue']');

// Using text-Value
//! (//tagName[text() = 'text value'])<--paste in chropath
//! Syntax: const webElement = await $('tagName=text value');

//Using partial attribute's value
//! //tagName[contains(@attrName, 'partialAttrValue')]<--paste in chropath
//! Syntax: const webElement = await $('tagName[attrName*=partialAttrValue]');

//Using partial text-value
//! //tagName[contains(text(), 'partial Text Value')]<--paste in chropath
//! Syntax: const webElement = await $('tagName*=partial text value');

//Using link-text <a tag are links 
//! //a[@attrName='Link text']<--paste in chropath
//! Syntax: const webElement = await $('=Link text');

//Using partial link-text
//! //a[contains(text() , 'partial link text')]<--paste in chropath
//! Syntax: const webElement = await $('*=partial link text');

//Using tagName
//! //tagName
//! Syntax: onst webElement = await $('<tagName>')

  //* if using just locator and its not working to locate web element, use xPath to help
  //! pay attention to tags that are vertical to another tag;
  //!look only at opening tags <tagName
  //!use relation when wanting to find a unique tag
  //use ->/parent-tag
  //use ->/children-tag
  //use ->/sibiling-tag

  //use ->/following-sibling(any tag //!After the tag;brother and sister)
  //use ->/preceding-sibling(any tag //!Before the tag;brother and sister)

  //* if no relation use: first get into the tag by using relation
  //!dont use relation if wanting to get into any tag but is not unique
  //!use locators to find unique tag
  //use ->/following:: locators by <tagName, text value, attri = "val", etc.
  //use ->/preceding:: locators by <tagName, text value, attri = "val", etc.

  //* direct Xpath (simple xpath)
  //using attribute's value
  //! //tagName[@attrName="attr value"]<--paste in chropath
  //! Syntax: const webElement = await $('//tagName[@attrName="attr value"]');  

  //using text value
  //! //tagName[text()="text value"]<--paste in chropath
  //! Syntax: const webElement = await $('//tagName[text()="text value"]')

  //using partial attribute's value (function -> contains())
  //! //tagName[contains(@attrName, "partial attr value")]<--paste in chropath
  //! Syntax: const webElement = $('//tagName[contains(@attrName, "partial attr value")]');

  //using partial text value (function -> contains())
  //! //tagName[contains(text(), "partial text value")]<--paste in chropath
  //! Syntax: const webElement = $('//tagName[contains(text(), "partial text value")]')

  //using starting portion of attribute's value (function -> starts-with())
  //! //tagName[starts-with(@attrName, "starting attr value")]<--paste in chropath
  //! Syntax: const webElement = $('//tagName[starts-with(@attrName, "starting attr value")]');

  //using starting portion of text value (function -> starts-with())
  //! //tagName[starts-with(text(),"starting text value")]<--paste in chropath
  //! Syntax: const webElement = $('//tagName[starts-with(text(),"starting text value")]');

  //using not()
  //! //tagName[not(@attrName="attr value")]<--paste in chropath
  //? find the tag(tagName) which has attribiute(attrName) with value NOT equals to "attr value"

  //! //tagName[@attrName]<--paste in chropath
  //? find the tag(tagName) which has attribute(attrName)

  //! //tagName[not(@attrName)]<--paste in chropath
  //? find the tag(tagName) which does NOT have attribute(attrName)

  //using and/or operator
  //! //tagName[@attrName="attr value" and text()="text value"]<--paste in chropath
  //! //tagName[contains(text(), "partial text value" or starts-with(@attrName, "starting portion of attrValue")]<--paste in chropath
  //! //tagName[text()="value1" or text()="value2"]<--paste in chropath
  //******************************************************************* */
  
  describe("Finding WebElements using tags and attributes Locators", () => {
    
    it("to type into a web element field", async () => {
    await browser.url("https://www.facebook.com/");

    //find web element for log-in field in DOM
    const loginField = await $("#email");
    
    //type in login field
    await loginField.setValue("loginBtn@gmail.com");
    await browser.pause(2000);
    
    //find web element for password field in DOM
    const passWordField = await $("#pass");
    
    //type in password field
    await passWordField.setValue("passFld@gmail.com");
    await browser.pause(2000);

    // type in both web elements at the same time
    // const loginPassWordField = await $('input[data-testid="royal_emai"]');
    // await loginPassWordField.setValue("loginFld@gmail.com");
    // await browser.pause(2000);

    //getting the text value for "log in"
    const textVal = await $(
      '//div[@class="_6lux"]/following::input[@id="pass"]/following-sibling::div/preceding::div[1]/preceding::input[@name="lsd"]/following::div[@class="_6ltg"]//button'
    );

    const realTxt = await textVal.getText();
    await browser.pause(1000);
    console.log(`this is your Text val--->${realTxt}`);
    // expect(realTxt.startsWith("Log"),"does not start with log").to.be.true;
    expect(realTxt, "NOT EQAUL").to.equal("Log In");
  });

  // Verify the user lands on correct page after clicking Economy Church Chairs option
  /**
   * 1. Launch https://classroomessentialsonline.com/
   * 2. Move mouse to Church Chairs
   * 3. Click on Economy Church Chairs
   * 4. Verify "ECONOMY CHURCH CHAIRS" heading is displayed
   * 5. Verify url is "https://classroomessentialsonline.com/economy-church-chairs/"
   */

  describe("using xPath to locate web elements", () => {
    it("verify user lands on correct page", async () => {
      await browser.url("https://www.classroomessentialsonline.com/");
      await browser.pause(2000);

      //scroll down = true
      const scrollToAboutLink = await $("//a[@href='../about-us/']");
      scrollToAboutLink.scrollIntoView(true);
      await browser.pause(10000);

      //scroll up = false
      const scrollToAboutLink1 = await $("//a[@href='../about-us/']");
      scrollToAboutLink1.scrollIntoView(false);
      await browser.pause(2000);

      //Move mouse to Church Chairs
      const churchChair = await $("//a[@href='/church-chairs/']");
      await churchChair.moveTo();
      await browser.pause(2000);

      const select = await $('//a[starts-with(text(),"Economy Chur")]'); //a[starts-with(text(),"Economy Chur")]
      const txtVal = select.getText();
      const txt = await txtVal.ByVisibleText("Economy Church Chairs");
      console.log(`This is your Index 4--> ${txt}`);

      await browser.pause(2000);

     

      //Click on Economy Church Chairs
      //const ecoChairs = await $("//a[@href='/economy-church-chairs/']");
      //await ecoChairs.click();

      //await browser.pause(2000);

      //Verify "ECONOMY CHURCH CHAIRS" heading is displayed
      //const heading = await $ ('//h1[text()="Economy Church Chairs"]')
      //const txtEcoChairs = await heading.isDisplayed();

      const heading2 = await $('//h1[@class="page-heading"]');
      const txtEcoChairs2 = await heading2.getText();
      await browser.pause(2000);

      //expect(txtEcoChairs, "Not displayed").to.be.true;
      expect(txtEcoChairs2, "Not displayed").to.equals("ECONOMY CHURCH CHAIRS");

      console.log(`Get element Attr-->${txtEcoChairs2}`);
    });
  });
});


