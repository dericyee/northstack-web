/**
 * Shared social-proof data for Northstack.
 *
 * Northstack is built by Deric Yee and the team behind Sigmaschool — one of
 * Southeast Asia's leading coding bootcamps. The track record below is real
 * Sigmaschool proof, used here to establish that the people building your
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

export type Partner = {
  name: string;
  logo: string;
};

/** Hiring partners that recruit Sigmaschool graduates — real logos. */
export const hiringPartners: Partner[] = [
  { name: "Grab", logo: "/partners/grab-malaysia.jpg" },
  { name: "OCBC Bank", logo: "/partners/ocbc-bank.png" },
  { name: "ZUS Coffee", logo: "/partners/zus-coffee.png" },
  { name: "CoinGecko", logo: "/partners/coingecko.png" },
  { name: "CARRO", logo: "/partners/carro.png" },
  { name: "MoneyMatch", logo: "/partners/moneymatch-sdn-bhd.jpg" },
  { name: "Setel", logo: "/partners/setel-ventures-sdn-bhd.png" },
  { name: "Hiredly", logo: "/partners/hiredly.jpg" },
  { name: "BookMyShow", logo: "/partners/bookmyshow.png" },
  { name: "Bjak", logo: "/partners/bjak-sdn-bhd.jpg" },
  { name: "ServiceRocket", logo: "/partners/servicerocket.jpg" },
  { name: "SpeedHome", logo: "/partners/speedhome.jpg" },
  { name: "MHUB", logo: "/partners/mhub.jpg" },
  { name: "SUPA", logo: "/partners/supa.png" },
  { name: "Beyondsoft", logo: "/partners/beyondsoft-malaysia.png" },
  { name: "YTL-SEA Digital Bank", logo: "/partners/ytl-sea-digital-bank.png" },
];

export type Press = {
  name: string;
  title: string;
  link: string;
  logo: string;
  preview: string;
};

export const pressFeatures: Press[] = [
  {
    name: "Vulcan Post",
    title:
      "This M'sian bootcamp promises students a full-fledged tech job in 3 months, or your money back",
    link: "https://vulcanpost.com/881129/sigma-school-malaysia-coding-bootcamp-academy/",
    logo: "/press/vulcan-post-logo.png",
    preview: "/press/vulcan-post-preview.jpg",
  },
  {
    name: "The Edge Malaysia",
    title: "Edutech: Coding computers and decoding talents",
    link: "https://theedgemalaysia.com/node/652412",
    logo: "/press/the-edge-logo.png",
    preview: "/press/the-edge-preview.png",
  },
  {
    name: "BFM 89.9",
    title: "Open For Business: Get A Job, Or Your Money Back",
    link: "https://www.bfm.my/podcast/enterprise/open-for-business/get-a-job-or-your-money-back",
    logo: "/press/bfm-podcast-logo.jpg",
    preview: "/press/bfm-podcast-preview.jpg",
  },
  {
    name: "Study International",
    title:
      "“You don't need a degree to succeed in tech,” says coding boot camp founder",
    link: "https://studyinternational.com/news/land-a-tech-job-with-no-experience",
    logo: "/press/study-international-logo.jpg",
    preview: "/press/study-international-preview.jpg",
  },
  {
    name: "Astro Awani",
    title: "Notepad with Ibrahim Sani: Transform Life, With Tech",
    link: "https://www.astroawani.com/video/notepad-ibrahim-sani-x7ko7m/notepad-ibrahim-sani-transform-life-tech-x8ovuiv",
    logo: "/press/astro-awani-logo.png",
    preview: "/press/astro-awani-preview.png",
  },
  {
    name: "Disruptr",
    title:
      "Bridging The Gap: How Sigmaschool Is Rethinking Tech Education To Meet Industry Demands",
    link: "https://www.disruptr.com.my/bridging-the-gap-how-sigma-school-is-rethinking-tech-education-to-meet-industry-demands",
    logo: "/press/disruptr-logo.png",
    preview: "/press/disruptr-preview.png",
  },
];

export type Member = {
  name: string;
  role: string;
  image: string;
};

/** The Sigmaschool team — the people behind Northstack. */
export const team: Member[] = [
  { name: "Deric Yee", role: "Founder", image: "/team/deric-yee.png" },
  {
    name: "Amiel Leong",
    role: "Admissions Lead",
    image: "/team/amiel-leong.jpg",
  },
  {
    name: "Kan Mun Juen",
    role: "Programme Manager & Instructor",
    image: "/team/kan-mun-juen.jpeg",
  },
  {
    name: "Adam Filchoir",
    role: "Software Engineer & Instructor",
    image: "/team/adam-filchoir.png",
  },
  {
    name: "Safa Yousif Abdalla Abakar",
    role: "Software Engineer & Instructor",
    image: "/team/safa-yousif-abdalla-abakar.jpg",
  },
  {
    name: "Khansa Tsabitah Ariyani",
    role: "Product & UI/UX Designer",
    image: "/team/khansa-tsabitah-ariyani.jpg",
  },
  {
    name: "Khant Lin Tun",
    role: "Software Engineer & TA",
    image: "/team/khant-lin-tun.png",
  },
  {
    name: "Cassie Linh Ngan Huynh",
    role: "Growth Marketeer",
    image: "/team/cassie-linh-ngan-huynh.jpeg",
  },
  {
    name: "Eunice Chen Yun Yin",
    role: "Software Engineer & TA",
    image: "/team/eunice-chen-yun-yin.jpg",
  },
  {
    name: "Suwanki",
    role: "Software Engineer & TA",
    image: "/team/suwanki.png",
  },
  {
    name: "Muhammad Danish",
    role: "Software Engineer",
    image: "/team/muhammad-danish-bin-mohammad-rashidin.jpeg",
  },
  { name: "Daffi", role: "Video Editor", image: "/team/daffi.jpeg" },
];
