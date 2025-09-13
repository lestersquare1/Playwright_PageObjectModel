export class GoToHomePage {
  // Add selectors and methods for the Home page here

  page: any;
  pps_heading: any;
  defaultImage: any;
  insuranceForPros_link: any;
  profitShareBenefit_link: any;
  aboutUs_link: any;
  claims_link: any;
  regulatoryAndConduct_link: any;
  becomeAMember_link: any;
  becomeAnAdviser_link: any;
  contactUs_link: any;
  frequentlyAskedQuestions_link: any;

  // Middle part of home page
  welcome_heading: any;
  welcomeFirst_text: any;
  welcomeSecond_text: any;
  welcomeThird_text: any;
  welcomeFourth_text: any;
  welcomeFifth_text: any;
  getInTouch_button: any;

  purpose_image: any;
  purpose_heading: any;
  purposeFirst_text: any;
  purposeSecond_text: any;
  purposeThird_text: any;

  mutuality: any;
  mutualityFirst_text: any;
  mutualitySecond_text: any;
  mutualityThird_text: any;

  paysToBeMember_image: any;
  paysToBeMember_heading: any;
  paysToBeMemberFirst_text: any;
  paysToBeMemberSecond_text: any;

  whatIsMutuality_heading: any;
  whatIsMutuality_button: any;

  ppsBakery_image: any;

  // Footer of home page
  footerGoToHomepage_link_: any;
  footerLinkedIn_link: any;
  footerInsuranceForProfessionals_link: any;
  footerProfitShareBenefit_link: any;
  footerAboutUs_link: any;
  footerClaims_link: any;
  footerRegulatoryAndConduct_link: any;
  footerContactUs_link: any;
  footerFrequentlyAskedQuestions_link: any;
  footerProfessionals_heading: any;
  footerBecomeAMember_link: any;
  footerAdvisers_heading: any;
  footerBecomeAnAdviser_link: any;
  mutuality_image: any;
  mutuality_heading: any;
  ppsCopywright_text: any;
  footerTermsAndConditions_link: any;
  footerPrivacyPolicy_link: any;
  directDebitTermsConditions_link: any;
  contactEmail_link: any;

  constructor(page) {
    //Top part of home page
    this.page = page;
    this.pps_heading = page.getByRole("heading", {
      name: "PPS Mutual",
      exact: true,
    });
    this.defaultImage = page.locator(".tan-circle.tan-circle-xl");
    // this.insuranceForPros_link = page
    //   .getByRole("list")
    //   .getByRole("link", { name: "Insurance for professionals" });

    this.insuranceForPros_link = page.locator('#mobile-nav').getByText('Insurance for professionals');

    this.profitShareBenefit_link = page
      .getByRole("list")
      .getByRole("link", { name: "Profit Share Benefit" });
    this.aboutUs_link = page
      .getByRole("list")
      .getByRole("link", { name: "About us" });
    this.regulatoryAndConduct_link = page
      .getByRole("list")
      .getByRole("link", { name: "Regulatory and conduct" });
    this.claims_link = page
      .getByRole("list")
      .getByRole("link", { name: "Claims" });
    this.becomeAMember_link = page
      .getByRole("list")
      .getByRole("link", { name: "Become a member" });
    this.becomeAnAdviser_link = page
      .getByRole("list")
      .getByRole("link", { name: "Become an adviser" });
    this.contactUs_link = page
      .getByRole("list")
      .getByRole("link", { name: "Contact us" });
    this.frequentlyAskedQuestions_link = page
      .getByRole("list")
      .getByRole("link", { name: "Frequently asked questions" });

    //Middle part of home page
    this.welcome_heading = page.getByRole("heading", {
      name: "Welcome to PPS Mutual",
    });
    this.welcomeFirst_text = page.getByText("PPS Mutual is a member-owned");
    this.welcomeSecond_text = page.getByText("We’re here for professionals");
    this.welcomeThird_text = page.getByText("We’re New Zealand owned and");
    this.welcomeFourth_text = page.getByText("When it comes to making");
    this.welcomeFifth_text = page.getByText("If you’d like to find out");
    this.getInTouch_button = page.getByRole("link", { name: "Get in touch" });

    this.purpose_image = page.getByRole("img", {
      name: "homepage scroller image 1",
    });
    this.purpose_heading = page.getByRole("heading", {
      name: "Purpose-built for",
    });
    this.purposeFirst_text = page.getByText("PPS Group has been insuring");
    this.purposeSecond_text = page.getByText("With a proposition focused on");
    this.purposeThird_text = page.getByText("We’re for professionals –");

    this.mutuality_image = page.getByRole("img", {
      name: "homepage scroller image 2",
    });
    this.mutuality_heading = page.getByRole("heading", {
      name: "Mutuality is the best policy",
    });
    this.mutualityFirst_text = page.getByText("PPS operates as a network of");
    this.mutualitySecond_text = page.getByText("Our members can take comfort");
    this.mutualityThird_text = page.getByText("This is a model built on");

    this.paysToBeMember_image = page.getByRole("img", {
      name: "homepage scroller image 3",
    });
    this.paysToBeMember_heading = page.getByRole("heading", {
      name: "It pays to be a member",
    });
    this.paysToBeMemberFirst_text = page.getByText(
      "Unlike most life insurers,"
    );
    this.paysToBeMemberSecond_text = page.getByText(
      "Believe success is best when"
    );

    this.whatIsMutuality_heading = page.getByRole("heading", {
      name: "What is mutuality?",
    });
    this.whatIsMutuality_button = page.getByRole("button", {
      name: "Watch video",
    });
    this.ppsBakery_image = page.getByRole("img", {
      name: "PPS Bakery video screenshot",
    });

    //Footer of home page
    this.footerGoToHomepage_link_ = page.getByRole("link", {
      name: "Go to homepage",
    });
    this.footerLinkedIn_link = page.getByRole("link", {
      name: "Visit our LinkedIn page",
    });
    this.footerInsuranceForProfessionals_link = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Insurance for professionals" });
    this.footerProfitShareBenefit_link = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Profit Share Benefit" });
    this.footerAboutUs_link = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "About us" });
    this.footerClaims_link = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Claims" });
    this.footerRegulatoryAndConduct_link = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Regulatory and conduct" });
    this.footerContactUs_link = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Contact us" });
    this.footerFrequentlyAskedQuestions_link = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Frequently asked questions" });
    this.footerProfessionals_heading = page.getByRole("heading", {
      name: "Professionals",
      exact: true,
    });
    this.footerBecomeAMember_link = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Become a member" });
    this.footerAdvisers_heading = page.getByRole("heading", {
      name: "Advisers",
    });
    this.footerBecomeAnAdviser_link = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Become an adviser" });

    this.ppsCopywright_text = page.getByText("© PPS Mutual");
    this.footerTermsAndConditions_link = page.getByRole("link", {
      name: "Terms and Conditions",
    });
    this.footerPrivacyPolicy_link = page.getByRole("link", {
      name: "Privacy Policy",
    });
    this.directDebitTermsConditions_link = page.getByRole("link", {
      name: "Direct Debit Terms Conditions",
    });
    this.contactEmail_link = page.getByRole("link", {
      name: "contact@ppsmutual.co.nz",
    });
  }

  async goToHomePage() {
    await this.page.goto("https://www.ppsmutual.co.nz/");
  }
}
