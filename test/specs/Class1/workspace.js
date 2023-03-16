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
    const tOrF = currentUrl.endsWith(".com/");

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

  //!Use these Func. to do actions on the web elements
  it("func. actions", async () => {
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

//? In wdio.conf.js File use (./test/specs/**/*.js) to run all your test cases but use (.only) on the file function it-block you want to use; keeps you from having to change the specs file in the wdio.conf.js File

//!Run this in the terminal (npx wdio wdio.conf.js --spec test/specs/folder/file); Enter the file to run
//?Make sure to add (.only) on the it-block you want to specifically run

/**In the DOM, tag names are inmbedded into a html doctype
 * every tag has an angular bracket (<tag)
 * (EX.) <html, <body, <div, <script, <input, <form, <link, <a, <button
 * In the <tags there are attributes='Values' (attr1='Value1')
 * (EX.) <tag attr1='Value1'; attr2='Value2'; attr3='Value3'; attr4='Value4'>
 *
 *
 *
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
 * seach Chropath in google and add the extentsion to google; refresh the page to show its added
 * -helps find unique web elemets in the DOM by using Tag names and attr's
 * id-attr's are the best way to find the uniqe web element
 */

//*How to call locators:

// Using id-attribute
//! (//*[@id="id-value"]);<--paste in chropath
//! SyntaxVS: const webElement = await $('#idValue');

// Using other attribute's value instead id-attribute
//! (//tagName[@attrName="attrValue"])<--paste in chropath
//! SyntaxVS: const webElement = await $('tagName[attrName='attrValue']');

// Using text-Value
//! (//tagName[text() = 'text value'])
//! Syntax: const webElement = await $('tagName=text value');

//Using link-text
//! (//a[text()='Link text'])
//! Syntax: const webElement = await $('=Link text');

describe("Finding WebElements using tags and attributes Locators", () => {
  it.only("to type into a web element field", async () => {
    await browser.url("https://www.facebook.com/");

    const loginField = await $("#email");
    await loginField.setValue("loginBtn@gmail.com");
    await browser.pause(2000);

    const passWordField = await $("#pass");
    await passWordField.setValue("passFld@gmail.com");
    await browser.pause(2000);

    const loginPassWordField = await $('input[data-testid="royal_emai"]');
    await loginPassWordField.setValue("loginFld@gmail.com");
    await browser.pause(2000);
  });
});
