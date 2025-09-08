import { test, expect } from "@playwright/test";
import { GoToHomePage } from "../../pages/goToHomePage";

test("Check Home Page", async ({ page }) => {
  const homePage = new GoToHomePage(page);

  await homePage.goToHomePage();

  // Check objects on top of page
  await expect(page).toHaveTitle("Home | PPS Mutual New Zealand");
  await expect(homePage.pps_heading).toBeVisible();
  await expect(homePage.insuranceForPros_link).toHaveText(
    "Insurance for professionals"
  );
  await expect(homePage.profitShareBenefit_link).toHaveText(
    "Profit Share Benefit"
  );
  await expect(homePage.aboutUs_link).toHaveText("About us");
  await expect(homePage.regulatoryAndConduct_link).toHaveText(
    "Regulatory and conduct"
  );
  await expect(homePage.becomeAMember_link).toHaveText("Become a member");
  await expect(homePage.becomeAnAdviser_link).toHaveText("Become an adviser");
  await expect(homePage.contactUs_link).toHaveText("Contact us");
  await expect(homePage.frequentlyAskedQuestions_link).toHaveText(
    "Frequently asked questions"
  );

  // Check objects in middle of page
  await expect(homePage.welcome_heading).toHaveText("Welcome to PPS Mutual");
  await expect(homePage.welcomeFirst_text).toHaveText(
    "PPS Mutual is a member-owned life insurer specialising in the professional market."
  );
  await expect(homePage.welcomeSecond_text).toHaveText(
    "We’re here for professionals, such as doctors, lawyers, engineers, and other qualified " +
    "experts – people with demanding careers and unique risk characteristics. We understand the " +
    "needs of the professional market and our products are designed to reflect the way professionals " +
    "work, live and plan for the future."
  );
  await expect(homePage.welcomeThird_text).toHaveText(
    "We’re New Zealand owned and operated, backed by over 80 years of global experience through the PPS " +
    "Group in South Africa. And because we’re a mutual, we share our financial success directly with " +
    "our members through our unique Profit Share Benefit."
  );
  await expect(homePage.welcomeFourth_text).toHaveText(
    "When it comes to making important financial decisions, we believe in the value of high-quality " +
    "independent advice. That’s why you can only access a PPS Mutual insurance policy through a select " +
    "group of accredited independent financial advisers."
  );
  await expect(homePage.welcomeFifth_text).toHaveText(
    "If you’d like to find out whether PPS Mutual is right for you, please get in touch and we’ll " +
    "connect you with one of our accredited advisers."
  );
  await expect(homePage.getInTouch_button).toHaveText("Get in touch");

  await expect(homePage.purpose_image).toBeVisible();
  await expect(homePage.purpose_heading).toHaveText("Purpose-built for professionals");
  await expect(homePage.purposeFirst_text).toHaveText("PPS Group has been insuring professionals for " +
    "over 80 years. It’s a segment of the market that we know well and are uniquely positioned to " +
    "serve through tailored products, specialist underwriting expertise, and personal service experience.");
  await expect(homePage.purposeSecond_text).toHaveText("With a proposition focused on protecting " +
    "professionals like you, you can feel confident knowing you’re sharing risk with like-minded individuals.");
  await expect(homePage.purposeThird_text).toHaveText("We’re for professionals – like you.");

  await expect(homePage.mutuality_image).toBeVisible();
  await expect(homePage.mutuality_heading).toHaveText("Mutuality is the best policy");
  await expect(homePage.mutualityFirst_text).toHaveText("PPS operates as a network of mutual insurers " +
    "across South Africa, Namibia, Australia, and New Zealand. PPS Mutual New Zealand is ultimately " +
    "owned by the Professional Provident Society New Zealand Trust (PPS NZ Trust) for the benefit of " +
    "members rather than external shareholders. This means we exist for a single purpose – to serve " +
    "members and their associates.");
  await expect(homePage.mutualitySecond_text).toHaveText("Our members can take comfort that all PPS " +
    "Mutual staff are based in New Zealand and every decision is made considering the best interests " +
    "of New Zealand members, with a local management and independent board.");
  await expect(homePage.mutualityThird_text).toHaveText("This is a model built on mutuality – where " +
    "real value is created together.");

  await expect(homePage.paysToBeMember_image).toBeVisible();
  await expect(homePage.paysToBeMember_heading).toHaveText("It pays to be a member");
  await expect(homePage.paysToBeMemberFirst_text).toHaveText("Unlike most life insurers, PPS Mutual " +
    "is owned by its members, who share in the financial success of the business through the Profit " +
    "Share Benefit. Each year, members may receive an allocation to their Profit Share Benefit based on " +
    "the performance and capital needs of the PPS Mutual business.");
  await expect(homePage.paysToBeMemberSecond_text).toHaveText("Believe success is best when shared?  " +
    "The feeling is mutual.");

  await expect(homePage.whatIsMutuality_heading).toHaveText("What is mutuality?");
  await expect(homePage.whatIsMutuality_button).toHaveText("Watch video");
    
  // Check objects in footer of page
  await expect(homePage.footerGoToHomepage_link_).toBeVisible();
  await expect(homePage.footerLinkedIn_link).toBeVisible();
  await expect(homePage.footerInsuranceForProfessionals_link).toHaveText("Insurance for professionals");
  await expect(homePage.footerProfitShareBenefit_link).toHaveText("Profit Share Benefit");
  await expect(homePage.footerAboutUs_link).toHaveText("About us");
  await expect(homePage.footerClaims_link).toHaveText("Claims");
  await expect(homePage.footerRegulatoryAndConduct_link).toHaveText("Regulatory and conduct");
  await expect(homePage.footerContactUs_link).toHaveText("Contact us");
  await expect(homePage.footerFrequentlyAskedQuestions_link).toHaveText("Frequently asked questions");
  await expect(homePage.footerProfessionals_heading).toHaveText("Professionals");
  await expect(homePage.footerBecomeAMember_link).toHaveText("Become a member");
  await expect(homePage.footerAdvisers_heading).toHaveText("Advisers");
  await expect(homePage.footerBecomeAnAdviser_link).toHaveText("Become an adviser");
});
