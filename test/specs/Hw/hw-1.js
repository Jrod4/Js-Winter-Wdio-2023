const { expect } = require("chai");
const { describe, it } = require("mocha");

describe("Launch Page", () => {
  
    it("Verify current-temp is in between 74 and 76", async () => {
      await browser.url("https://www.accuweather.com/");
      await browser.pause(2000);

      //current-temp is less than or equal to feel-like-temp
      const currentTempElement = await $('//span[@class="recent-location-temp"]');
      const currentTempTxt = await currentTempElement.getText();
      currentTempTxt.toString();
      let currentTempStr = currentTempTxt.substring(0, 2) 
      console.log(`This is current temp in a str-->${currentTempStr}`);
      console.log(`This is your current temp text--> ${currentTempTxt}`); //72
      currentTempStr = Number(currentTempStr);


      const feelsLikeTempElement = await $('//span[@class="recent-location-real-feel-value"]');
      const feelsLikeTempTxt = await feelsLikeTempElement.getText();
      feelsLikeTempTxt.trim();
      let feelsLikeTempStr =feelsLikeTempTxt.substring(0, feelsLikeTempTxt.length-1)
      console.log(`This is feels-like temp in a str-->${feelsLikeTempStr}`);
      console.log(`This is your feels like temp text--> ${feelsLikeTempTxt}`); //70
      feelsLikeTempStr = Number(feelsLikeTempStr);


      expect(currentTempStr <= feelsLikeTempStr, 'Not True').to.be.true;

    });



  it('launch facebook and click loginBtn', async() => {
    await browser.url("https://www.facebook.com/");
    await browser.pause(2000);

     const loginField = await $("#email");
     await loginField.setValue("loginBtn@gmail.com");
     await browser.pause(2000);

     const passWordField = await $("#pass");
     await passWordField.setValue("passFld@gmail.com");
     await browser.pause(2000);

    const clickLoginBtn = await $("button=Log In");
      console.log(`This is your Login btn--> ${clickLoginBtn}`);
    
      await clickLoginBtn.click();
      await browser.pause(1000);

    const verifyErrPage = await browser.getTitle();
      console.log(`This is your page title-> ${verifyErr}`);

    expect(verifyErrPage, "NOT EQUAL").to.equal("Log into Facebook");
    
  })


  it("TC-3: Verify the empty messenger login flow", async () => {
    //lauch webpage
    await browser.url("https://www.facebook.com/");
    await browser.pause(2000);

    //click on messenger link
    const messengerLink = await $('//a[text()="Messenger"]');
    await messengerLink.click();
    await browser.pause(2000);
    
    //Verify 'Keep me signed in' checkbox is NOT selected
    const box = await $("//span[@class='_2qcu']")
    await browser.pause(2000);
    expect(await box.isEnabled(), "its unselected").to.be.true;
    
    //Click 'Log In' button
    const loginBtn = await $("//button[text() = 'Log in']");
    await loginBtn.click();
    await browser.pause(2000);

    //Verify link -> "Find your account and log in" is displayed
    const linkElement = await $ ('//a[text()="Find your account and log in."]')

    const pageIsDisplayed = await linkElement.isDisplayed();
    console.log(`This is your link-> ${pageIsDisplayed}`);
    expect(pageIsDisplayed, "Not your link").to.be.true;
    
    //Verify 'Continue' button is enabled
    const continueBttn = await $ ("//button[text()='Continue']")
    //const bttnEnabled = await continueBttn.isEnabled();
    //console.log(`This is your Button Enabled-> ${bttnEnabled}`);
    expect(await continueBttn.isEnabled(), "is not enabled").to.be.true;

    //Verify 'Keep me signed in' checkbox is NOT selected
    const checkBox = await $('//*[@type="checkbox"]')
    expect(await checkBox.isSelected(), 'is selected').to.be.false;
    
    //Click 'Keep me signed in' checkbox
     const checkBoxElement = await $('//*[@class="uiInputLabelInput"]//span');
     await checkBoxElement.click()
     await browser.pause(4000);

    //Verify 'Keep me signed in' checkbox is selected
    const checkBoxIsSelected = await $('//*[@type="checkbox"]');
    expect(await checkBoxIsSelected.isSelected(), "is selected").to.be.true;
  });

});

