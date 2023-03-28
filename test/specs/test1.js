const { expect } = require("chai");
const { describe } = require("mocha");

describe('WebDriver IO Code Test', () => {
  // Question - 1: (50-points)
  /**
   * Testcase: Verify rewards form is empty and Conitnue button is disabled
   * Steps:
   * 1. Launch hotels.com
   * 2. Click on Learn about Hotels.com Rewards
   * 3. -> Verify Hotels Rewards opened in a new window
   * 4. Click on Join Now
   * 5. -> Verify Form is blank
   * 6. -> Verify Continue button is NOT enabled
   */

  it("Verify rewards form is empty and Conitnue button is disabled", async () => {
    await browser.url("https://www.hotels.com/");
    await browser.pause(2000);

    const scrollToRewards = await $(
      '//a[text()="Learn about Hotels.com Rewards"]'
    );
    scrollToRewards.scrollIntoView(false);
    await browser.pause(2000);

    const clickRewards = await $(
      '//a[text()="Learn about Hotels.com Rewards"]'
    );
    clickRewards.click();
    await browser.pause(5000);

    const rewardsHandle = await $(
      '//h2[text()="Join to get these benefits"]'
    ).isDisplayed();
    await browser.pause(5000);
    expect(rewardsHandle, "Not your window").to.be.false;

    const joinNowBtn = await $("//a[text() = 'Join Now']");
    joinNowBtn.click();
    await browser.pause(5000);
  });

  // Question - 2: (50-points)
  /**
   * Testcase: Verify past dates are disabled in Calendar
   * Steps:
   * 1. Launch hotels.com
   * 2. Click on Dates section
   * 3. If not already, go to current month
   * 4. -> Verify all past dates are disabled
   */

  it.only("Verify past dates are disabled in Calendar", async () => {
    await browser.url("https://www.hotels.com/");
    await browser.pause(2000);

    const datesField = await $ ('//*[@id="date_form_field-btn"]')
    datesField.click();
    await browser.pause(2000);

    const backMonthBtn = await $ ('//button[@data-stid="date-picker-paging"][1]')
    backMonthBtn.click()
    await browser.pause(2000);

    const webElement = await $("//td//@disabled");
    webElement.isEnabled();
    await browser.pause(2000);

    expect(webElement,'Not disabled').to.be.false


  });
} )