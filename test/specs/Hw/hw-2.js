// TC-1: Verify the current date is select by default in Sign Up dropdown
/**
 * 1. Launch facebook.com
 * 2. Click on Create New Account button
 * 3. Verify current date is displayed in the birthdate dropdowns.
 */
// Hint:
/**
 * get current date using moment-library - A
 * get default date selected in the dropdown - B
 * expect(A, '').to.equals(B)
 *
 */

const { expect } = require("chai");
const { describe } = require("mocha");
const moment = require("moment");


describe('TC-1: Verify the current date is select by default in Sign Up dropdown', () => {

it('Launch Facebook.com and verify current vs default date in drop down', async () => {

await browser.url("https://www.facebook.com/");
await browser.pause(2000)

const webElement = await $('//a[text()="Create new account"]');
await webElement.click();
await browser.pause(2000);

const currDate = moment().format('MMM DD YYYY');
//await currDate.getText();
await browser.pause(2000);

console.log(`this is your current date--> ${currDate}`);

const defaultMonth = await $('//*[@title="Month"]//option[@selected="1"]');
const month = await defaultMonth.getText();
console.log(`This is FB default month-->${month}`);
await browser.pause(2000);


const defaultDate = await $('//*[@title="Day"]//option[@selected="1"]');
const date = await defaultDate.getText();
console.log(`This is FB default date-->${date}`);


const defaultYear = await $('//*[@title="Year"]//option[@selected="1"]');
const Year = await defaultYear.getText();
console.log(`This is FB default year-->${Year}`);

const defaultDate1 = month + " " + date + " " + Year;
console.log(defaultDate1);


expect(currDate, "Are not the same").to.equal(defaultDate1);

})


it.only("Verify the travelers count on homepage", async () => {

    await browser.url("https://www.hotels.com/");
    await browser.pause(2000);

    //add guest to room1
    const travelersWebField = await $ ("//button[@data-stid='open-room-picker']")
    await travelersWebField.click();
    await browser.pause(2000);


    const GuestAddAdults1 = await $ ('//h3[text() = "Room 1"]/following::button[2]')
    await GuestAddAdults1.click();
    await GuestAddAdults1.click();
    await browser.pause(2000);

     const addRoom = await $('//button[text() = "Add another room"]');
     await addRoom.click();
     await browser.pause(2000);

     //add guest to room2
    const GuestAddAdults2 = await $('//h3[text() = "Room 2"]/following::button[2]');
    await GuestAddAdults2.click();
    await GuestAddAdults2.click();
    await browser.pause(2000);

    const doneBtn = await $("//button[text() = 'Done']")
    await doneBtn.click()
    await browser.pause(2000);

    const travelersWebField1 = await $ ('//button[text()="Travelers:" or text()="7 travelers, 2 rooms"]');
    const amtOfTravelers = await travelersWebField1.getText();
    console.log(amtOfTravelers);

    expect(amtOfTravelers, "Not equal").to.equal("7 travelers, 2 rooms");







});





})