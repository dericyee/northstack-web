/**
 * Shared social-proof data for Northstack.
 *
 * Northstack is built by Deric Yee and the team behind Sigma School — one of
 * Southeast Asia's leading coding bootcamps. The track record below is real
 * Sigma School proof, used here to establish that the people building your
 * AI-native tooling have already shipped outcomes at scale.
 *
 * Sources: sigmaschool.co/about, sigmaschool.co/why-us, sigmaschool.co/press
 */

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const proofStats: Stat[] = [
  { value: 90, suffix: "+", label: "careers changed into tech" },
  { value: 46, suffix: "", label: "hiring partners, and growing" },
  { value: 10, suffix: "", label: "cohorts shipped, end to end" },
  { value: 100, suffix: "%", label: "get-hired-or-money-back promise" },
];

/** Hiring partners that recruit Sigma School graduates. */
export const hiringPartners: string[] = [
  "Grab",
  "OCBC Bank",
  "Siemens",
  "ZUS Coffee",
  "CoinGecko",
  "CARRO",
  "MoneyMatch",
  "Setel",
  "Hiredly",
  "YTL-SEA Digital Bank",
  "BookMyShow",
  "Bjak",
  "ServiceRocket",
  "SpeedHome",
  "MHUB",
  "SUPA",
  "Axrail",
  "Beyondsoft",
];

export type Press = {
  name: string;
  title: string;
  link: string;
};

export const pressFeatures: Press[] = [
  {
    name: "Vulcan Post",
    title:
      "This M'sian bootcamp promises students a full-fledged tech job in 3 months, or your money back",
    link: "https://vulcanpost.com/881129/sigma-school-malaysia-coding-bootcamp-academy/",
  },
  {
    name: "The Edge Malaysia",
    title: "Edutech: Coding computers and decoding talents",
    link: "https://theedgemalaysia.com/node/652412",
  },
  {
    name: "BFM 89.9",
    title: "Open For Business: Get A Job, Or Your Money Back",
    link: "https://www.bfm.my/podcast/enterprise/open-for-business/get-a-job-or-your-money-back",
  },
  {
    name: "Study International",
    title:
      "“You don't need a degree to succeed in tech,” says coding boot camp founder",
    link: "https://studyinternational.com/news/land-a-tech-job-with-no-experience",
  },
  {
    name: "Astro Awani",
    title: "Notepad with Ibrahim Sani: Transform Life, With Tech",
    link: "https://www.astroawani.com/video/notepad-ibrahim-sani-x7ko7m/notepad-ibrahim-sani-transform-life-tech-x8ovuiv",
  },
  {
    name: "Disruptr",
    title:
      "Bridging The Gap: How Sigma School Is Rethinking Tech Education To Meet Industry Demands",
    link: "https://www.disruptr.com.my/bridging-the-gap-how-sigma-school-is-rethinking-tech-education-to-meet-industry-demands",
  },
];

export type Story = {
  name: string;
  before: string;
  role: string;
  company: string;
  initials: string;
};

export const successStories: Story[] = [
  {
    name: "Wayne Clifford",
    before: "Fresh graduate",
    role: "Software Engineer, Test Automation",
    company: "Grab",
    initials: "WC",
  },
  {
    name: "Yee Qiang",
    before: "Student",
    role: "Mobile App Developer",
    company: "Siemens",
    initials: "YQ",
  },
  {
    name: "Amir Arif",
    before: "Medical Doctor",
    role: "Presale Architect",
    company: "Axrail",
    initials: "AA",
  },
  {
    name: "Wan Ahmad Ikhwan",
    before: "Sports Coach",
    role: "Software Developer",
    company: "MoneyMatch",
    initials: "WI",
  },
];
