import type { IconType } from "react-icons";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const credibility =
  import.meta.env.VITE_BASE_URL + "/images/icons/icons8-trust-48.png";
const honesty =
  import.meta.env.VITE_BASE_URL + "/images/icons/icons8-trust-50.png";
const equality =
  import.meta.env.VITE_BASE_URL + "/images/icons/icons8-balance-64 (3).png";
const authentic =
  import.meta.env.VITE_BASE_URL + "/images/icons/icons8-authentic-64.png";
const sincerity =
  import.meta.env.VITE_BASE_URL + "/images/icons/icons8-handshake-96.png";
const customer =
  import.meta.env.VITE_BASE_URL + "/images/icons/icons8-customer-64.png";
const empowerment =
  import.meta.env.VITE_BASE_URL + "/images/icons/icons8-confidence-64.png";
const leadership =
  import.meta.env.VITE_BASE_URL + "/images/icons/icons8-leadership-100.png";

export const socialIcons: Record<string, IconType> = {
  instagram: FaInstagram,
  twitter: FaXTwitter,
  facebook: FaFacebookF,
  youtube: FaYoutube,
};

export const siteConfig = {
  name: "Deal Forever",
  fullName: "Deal Forever Enterprises LLP",
  tagline: "Sustainable Direct Selling",
  phone: "+91 8075082088",
  tollFree: "1800-103-1025",
  email: "info@mydealforever.com",
  customerCareEmail: "customercare@dealfreever.com",
  whatsapp: "+91 9898922113",
  address:
    "Door No. 13/501, 2nd Floor, Metal Mart Building, Palayam Jn., Kallai Road, Kozhikode, Kerala - 673002",
  copyright:
    "Copyrights 2025 Deal Forever Enterprises LLP | All Rights Reserved",
  brands: ["Assura", "Athulya", "Orianna"],
  social: {
    instagram: "https://instagram.com/dealforever",
    twitter: "https://x.com/dealforever",
    facebook: "https://facebook.com/dealforever",
    youtube: "https://youtube.com/@dealforever",
  },
};

export const dealforeverPromises = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: "Ethical Practices",
    desc: "We promise ethical business practices, ensuring fairness and integrity in all transactions.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><circle cx="12" cy="8" r="6"/><path d="M9 12l2 2 4-4"/><path d="M6.5 16.5C4 17.5 2 19 2 21h20c0-2-2-3.5-4.5-4.5"/></svg>`,
    title: "Quality Products",
    desc: "We promise high-quality products that meet rigorous standards for effectiveness and safety.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
    title: "Fair Payouts",
    desc: "We promise fair and timely payouts of commissions and bonuses earned through your sales efforts.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: "Supportive Community",
    desc: "We promise a supportive community that fosters growth, mentorship and collaboration.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M2 20h20"/><path d="M6 20V10l6-6 6 6v10"/><path d="M10 20v-5h4v5"/></svg>`,
    title: "Personal Development",
    desc: "We promise to empower our distributors with tools and training for personal and professional growth.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.47 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    title: "Service Excellence",
    desc: "We promise exceptional customer service to support you and your customers throughout their journey.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
    title: "Exchange Policy",
    desc: "We promise a transparent and fair exchange policy, allowing customers to exchange products easily.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="28" height="28"><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/><path d="M9 9h.01"/><path d="M15 9h.01"/><path d="M9 13a4 4 0 0 0 6 0"/></svg>`,
    title: "Refund Policy",
    desc: "We promise a fair and transparent refund policy, ensuring customer satisfaction and peace of mind.",
  },
];

export const coreValues = [
  {
    icon: credibility,
    title: "Credibility",
    desc: "A company that earns trust by delivering high-quality products, services, and a reliable payment system.",
  },
  {
    icon: honesty,
    title: "Honesty",
    desc: "Our company is committed to fairness and ethical behaviour, ensuring trust and integrity in every aspect of our operations.",
  },
  {
    icon: equality,
    title: "Equality",
    desc: "A company that treats everyone fairly and equally, without any discrimination or favouritism",
  },
  {
    icon: authentic,
    title: "Integrity",
    desc: "A company that always sticks to its principles, morals, and standards, earning trust by doing the right thing and being dependable.",
  },
  {
    icon: sincerity,
    title: "Sincerity",
    desc: "A company that prioritizes honesty and authenticity, aiming to maintain consistency and truthfulness in every aspect of its operations.",
  },
  {
    icon: customer,
    title: "Customer Focus",
    desc: "We are committed to understanding and meeting the needs of our customers, delivering exceptional service and value.",
  },
  {
    icon: empowerment,
    title: "Empowerment",
    desc: "We empower our independent sales representatives to achieve their goals, providing them with the tools, training, and support they need",
  },
  {
    icon: leadership,
    title: "Leadership",
    desc: "We lead by example, demonstrating leadership in our industry through visionary thinking, strategic planning, and proactive initiatives.",
  },
];

export const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "About Deal Forever", path: "/about" },
      { label: "Our Team", path: "/team" },
      { label: "What People Say", path: "/testimonials" },
      { label: "Business Opportunity", path: "/business-opportunity" },
      { label: "Success Stories", path: "/success-stories" },
      { label: "Contact Us", path: "/contact" },
    ],
  },
  {
    label: "Categories",
    path: "/categories",
    children: [
      { label: "Health & Wellness", path: "/categories?cat=health" },
      { label: "Personal Care", path: "/categories?cat=personal-care" },
      { label: "Home Care", path: "/categories?cat=home-care" },
      { label: "Digital Products", path: "/categories?cat=digital" },
    ],
  },
  {
    label: "Brand",
    path: "/brands",
    children: [
      { label: "Assura", path: "/brands?brand=assura" },
      { label: "Athulya", path: "/brands?brand=athulya" },
      { label: "Orianna", path: "/brands?brand=orianna" },
    ],
  },
  { label: "Offers", path: "/offers" },
  { label: "Branches", path: "/branches" },
  {
    label: "News & Media",
    path: "/news",
    children: [
      { label: "News", path: "/news" },
      { label: "Photo Gallery", path: "/gallery" },
      { label: "Video Gallery", path: "/video-gallery" },
    ],
  },
  {
    label: "Downloads",
    path: "/downloads",
    children: [
      { label: "Documents", path: "/downloads" },
      { label: "Compliance", path: "/compliance" },
    ],
  },
  { label: "Schedules", path: "/schedules" },
];

export const policyLinks = [
  { label: "Buyback Policy", path: "/policy/buyback" },
  { label: "Cancellation Policy", path: "/policy/cancellation" },
  // { label: "Disclaimer", path: "/policy/disclaimer" },
  { label: "Exchange Policy", path: "/policy/exchange" },
  // { label: "Privacy Policy", path: "/policy/privacy" },
  { label: "Refund Policy", path: "/policy/refund" },
  { label: "Shipping Policy", path: "/policy/shipping" },
  { label: "Terms & Conditions", path: "/policy/terms" },
  // { label: "Terms of Use", path: "/policy/terms-of-use" },
];

export const highlights = [
  {
    number: "01",
    title: "Daily Income",
    description:
      "Earn daily income through our sustainable direct selling model. Consistent rewards for consistent effort.",
  },
  {
    number: "02",
    title: "Weekly Income",
    description:
      "Weekly payouts ensure you receive your earnings regularly. Build your business with reliable income streams.",
  },
  {
    number: "03",
    title: "Monthly Income",
    description:
      "Monthly bonuses and incentives reward your dedication. Scale your earnings as you grow your network.",
  },
  {
    number: "04",
    title: "7 Types Universal Genology Income",
    description:
      "Multiple income streams through our comprehensive genology system. Maximize your earning potential.",
  },
];

export const specialBenefits = [
  { title: "Free Medical Insurance", icon: "shield-check" },
  { title: "Higher Educational Scholarship", icon: "graduation-cap" },
  { title: "Travel Rewards", icon: "plane" },
  { title: "Car Fund", icon: "car" },
  { title: "House Fund", icon: "home" },
  { title: "Leadership Bonus", icon: "award" },
  { title: "Recognition Programs", icon: "star" },
  { title: "Training & Development", icon: "book-open" },
];

export const marketingHighlights = [
  {
    title: "Simplified Dual Marketing Plan",
    description: "Easy to understand and execute business model",
    icon: `${import.meta.env.VITE_BASE_URL}/images/icons/icons8-documents-50.png`,
  },
  {
    title: "Accumulative BV",
    description: "Business Volume accumulates for better rewards",
    icon: `${import.meta.env.VITE_BASE_URL}/images/icons/icons8-money-50.png`,
  },
  {
    title: "Infinite Depth Calculation",
    description: "Earn from unlimited depth in your network",
    icon: `${import.meta.env.VITE_BASE_URL}/images/icons/icons8-depth-48.png`,
  },
  {
    title: "No Rank Demotion",
    description: "Once achieved, your rank stays permanent",
    icon: `${import.meta.env.VITE_BASE_URL}/images/icons/icons8-decrease-50.png`,
  },
  {
    title: "No Flesh Out",
    description: "Your hard work never goes to waste",
    icon: `${import.meta.env.VITE_BASE_URL}/images/icons/icons8-delete-trash-50.png`,
  },
  {
    title: "No Time Frame for Achievers",
    description: "Achieve at your own pace",
    icon: `${import.meta.env.VITE_BASE_URL}/images/icons/icons8-time-64.png`,
  },
  {
    title: "Limitless Achievements",
    description: "No ceiling on what you can earn",
    icon: `${import.meta.env.VITE_BASE_URL}/images/icons/icons8-infinity-64 (1).png `,
  },
  {
    title: "Equal Opportunities",
    description: "Everyone starts with the same opportunity",
    icon: `${import.meta.env.VITE_BASE_URL}/images/icons/icons8-balance-64 (1).png`,
  },
];

export const products = [
  {
    id: 1,
    name: "Invigo Health Drops Panch Tulsi Ark",
    brand: "Assura",
    category: "Health & Wellness",
    bv: 50,
    price: 599,
    netContent: "30 ml",
    image:
      "https://images.pexels.com/photos/4040752/pexels-photo-4040752.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "A powerful health supplement made from five types of Tulsi extracts for overall wellness and immunity.",
  },
  {
    id: 2,
    name: "Herbal Face Wash",
    brand: "Athulya",
    category: "Personal Care",
    bv: 35,
    price: 349,
    netContent: "100 ml",
    image:
      "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Gentle herbal face wash enriched with natural ingredients for clean, radiant skin.",
  },
  {
    id: 3,
    name: "Premium Protein Powder",
    brand: "Assura",
    category: "Health & Wellness",
    bv: 80,
    price: 1299,
    netContent: "500 g",
    image:
      "https://images.pexels.com/photos/4040753/pexels-photo-4040753.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "High-quality protein supplement for fitness enthusiasts and health-conscious individuals.",
  },
  {
    id: 4,
    name: "Organic Hair Oil",
    brand: "Orianna",
    category: "Personal Care",
    bv: 40,
    price: 449,
    netContent: "200 ml",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Nourishing hair oil made from organic herbs for strong, lustrous hair.",
  },
  {
    id: 5,
    name: "Floor Cleaner Concentrate",
    brand: "Athulya",
    category: "Home Care",
    bv: 25,
    price: 199,
    netContent: "1 L",
    image:
      "https://images.pexels.com/photos/4040754/pexels-photo-4040754.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Powerful floor cleaner concentrate with natural disinfectants for a sparkling clean home.",
  },
  {
    id: 6,
    name: "Digital Learning Package",
    brand: "Assura",
    category: "Digital Products",
    bv: 100,
    price: 2499,
    netContent: "1 License",
    image:
      "https://images.pexels.com/photos/4041393/pexels-photo-4041393.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Comprehensive digital learning package with courses on business, marketing, and personal development.",
  },
  {
    id: 7,
    name: "Immunity Booster Capsules",
    brand: "Orianna",
    category: "Health & Wellness",
    bv: 60,
    price: 799,
    netContent: "60 Capsules",
    image:
      "https://images.pexels.com/photos/4040755/pexels-photo-4040755.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Natural immunity booster capsules formulated with Ayurvedic herbs and modern science.",
  },
  {
    id: 8,
    name: "Aloe Vera Skin Gel",
    brand: "Athulya",
    category: "Personal Care",
    bv: 30,
    price: 299,
    netContent: "150 g",
    image:
      "https://images.pexels.com/photos/4041394/pexels-photo-4041394.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Pure aloe vera gel for skin hydration, soothing, and natural healing.",
  },
  {
    id: 9,
    name: "Kitchen Cleaner Spray",
    brand: "Orianna",
    category: "Home Care",
    bv: 20,
    price: 179,
    netContent: "500 ml",
    image:
      "https://images.pexels.com/photos/4040756/pexels-photo-4040756.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Effective kitchen cleaner spray that cuts through grease and grime naturally.",
  },
  {
    id: 10,
    name: "Wellness Combo Pack",
    brand: "Assura",
    category: "Health & Wellness",
    bv: 120,
    price: 1999,
    netContent: "3 Items",
    image:
      "https://images.pexels.com/photos/4041395/pexels-photo-4041395.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Complete wellness combo with health drops, protein powder, and immunity capsules.",
  },
  {
    id: 11,
    name: "Anti-Aging Cream",
    brand: "Orianna",
    category: "Personal Care",
    bv: 55,
    price: 899,
    netContent: "50 g",
    image:
      "https://images.pexels.com/photos/4040757/pexels-photo-4040757.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Advanced anti-aging cream with natural retinol alternatives for youthful skin.",
  },
  {
    id: 12,
    name: "Laundry Detergent Liquid",
    brand: "Athulya",
    category: "Home Care",
    bv: 30,
    price: 249,
    netContent: "1 L",
    image:
      "https://images.pexels.com/photos/4041396/pexels-photo-4041396.jpeg?auto=compress&cs=tinysrgb&w=400",
    description:
      "Eco-friendly liquid detergent that's gentle on clothes and tough on stains.",
  },
];

export const branches = [
  {
    id: 1,
    name: "Kozhikode Main Office",
    state: "Kerala",
    district: "Kozhikode",
    category: "Head Office",
    address: "Metal Mart Building, Palayam Jn., Kallai Road",
    phone: "+91 8075082088",
  },
  {
    id: 2,
    name: "Kochi Branch",
    state: "Kerala",
    district: "Ernakulam",
    category: "Branch Office",
    address: "MG Road, Ernakulam",
    phone: "+91 8075082089",
  },
  {
    id: 3,
    name: "Thiruvananthapuram Branch",
    state: "Kerala",
    district: "Thiruvananthapuram",
    category: "Branch Office",
    address: "Statue Junction, TVM",
    phone: "+91 8075082090",
  },
  {
    id: 4,
    name: "Thrissur Branch",
    state: "Kerala",
    district: "Thrissur",
    category: "Branch Office",
    address: "Swaraj Round, Thrissur",
    phone: "+91 8075082091",
  },
  {
    id: 5,
    name: "Kannur Branch",
    state: "Kerala",
    district: "Kannur",
    category: "Branch Office",
    address: "Thavakkara, Kannur",
    phone: "+91 8075082092",
  },
  {
    id: 6,
    name: "Bangalore Branch",
    state: "Karnataka",
    district: "Bangalore Urban",
    category: "Branch Office",
    address: "Koramangala, Bangalore",
    phone: "+91 8075082093",
  },
  {
    id: 7,
    name: "Chennai Branch",
    state: "Tamil Nadu",
    district: "Chennai",
    category: "Branch Office",
    address: "Anna Nagar, Chennai",
    phone: "+91 8075082094",
  },
  {
    id: 8,
    name: "Mumbai Branch",
    state: "Maharashtra",
    district: "Mumbai",
    category: "Branch Office",
    address: "Andheri West, Mumbai",
    phone: "+91 8075082095",
  },
];

export const newsItems = [
  {
    id: 1,
    title: "Deal Forever Expands to Karnataka",
    date: "2025-03-15",
    from : "Admin",
    excerpt:
      "Deal Forever Enterprises announces its expansion into Karnataka with new branch offices in Bangalore.",
    description:
      "Deal Forever Enterprises is proud to announce its much-anticipated expansion into the vibrant state of Karnataka, marking a significant milestone in the company's national growth journey. New branch offices have been established across key locations in Bangalore, enabling us to serve our growing distributor base with greater efficiency and support. This expansion brings with it exciting new opportunities for entrepreneurs and health-conscious individuals across Karnataka who are looking to build a meaningful and financially rewarding business. Our dedicated regional team is fully equipped to provide training, product support, and business guidance to every new and existing distributor in the region. The Karnataka expansion reflects Deal Forever's unwavering commitment to reaching every corner of India with our premium wellness products and a business opportunity that truly transforms lives. We warmly welcome the Karnataka family into the Deal Forever network.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "New Product Launch: Wellness Combo Pack",
    date: "2025-02-28",
    from : "Admin",
    excerpt:
      "Introducing our comprehensive wellness combo pack designed for holistic health and vitality.",
    description:
      "Deal Forever is thrilled to introduce its most anticipated product yet — the all-new Wellness Combo Pack, a carefully curated collection of premium health products designed to support holistic well-being from the inside out. This comprehensive pack brings together our best-selling nutritional supplements, immunity boosters, and personal care essentials into one powerful, value-packed bundle. Developed by leading health experts and formulated with the finest natural ingredients, the Wellness Combo Pack addresses the everyday health needs of the entire family. Whether you are looking to boost your energy, strengthen your immunity, or simply maintain a balanced and healthy lifestyle, this pack has everything you need. It also represents an outstanding business opportunity for our distributors, offering exceptional value to customers and strong earning potential. Experience the future of wellness with Deal Forever's most complete health solution to date.",
    image:
      "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Annual Distributor Meet 2025",
    date: "2025-01-20",
    from : "Admin",
    excerpt:
      "Over 5000 distributors gathered at the annual meet to celebrate achievements and set new goals.",
    description:
      "The Deal Forever Annual Distributor Meet 2025 was nothing short of spectacular, bringing together over 5000 passionate and driven distributors from every corner of the country under one magnificent roof. The event was a powerful celebration of the incredible achievements accomplished over the past year, filled with heartfelt recognition ceremonies, inspiring success stories, and electrifying motivational sessions delivered by our top leaders and industry experts. Distributors had the opportunity to connect, collaborate, and learn from one another in an atmosphere charged with enthusiasm and purpose. New business goals were set, fresh strategies were unveiled, and the collective vision for 2025 was declared with resounding confidence. The annual meet also served as a reminder of the unbreakable bond that holds the Deal Forever family together. Every distributor left feeling deeply inspired, recharged, and more committed than ever to achieving their dreams.",
    image:
      "https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Deal Forever Receives Industry Recognition",
    date: "2024-12-10",
    from : "Admin",
    excerpt:
      "Recognized as one of the fastest-growing direct selling companies in India.",
    description:
      "Deal Forever Enterprises has been officially recognized as one of the fastest-growing direct selling companies in India — a prestigious honor that reflects the collective hard work, dedication, and passion of every single member of our extraordinary network. This recognition was awarded at a nationally acclaimed industry forum, acknowledging Deal Forever's remarkable growth trajectory, innovative product portfolio, strong ethical business practices, and the life-changing impact it has made on thousands of distributor families across the country. It is a proud moment not just for our leadership team, but for every distributor who has believed in this vision and worked tirelessly to build it. This achievement fuels our determination to reach even greater heights in the years ahead. We dedicate this recognition to our entire Deal Forever family — you are the true force behind this success.",
    image:
      "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "Senior Distributor",
    location: "Kozhikode",
    text: "Deal Forever has transformed my life. The business model is transparent and the products are genuinely good. I've built a sustainable income that supports my family. When I first joined, I was looking for a reliable opportunity that could provide long-term growth and stability. The company's guidance, supportive community, and consistent product demand helped me develop valuable business skills and confidence. Over the years, I have expanded my network, achieved personal milestones, and created an additional source of income that has improved my family's financial security. I appreciate the trust, transparency, and opportunities that Deal Forever continues to provide.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 2,
    name: "Priya Menon",
    designation: "Gold Distributor",
    location: "Kochi",
    text: "What I love about Deal Forever is the emphasis on quality products and ethical business practices. The training programs have helped me grow both professionally and personally. Every workshop and learning session has given me practical knowledge that I can apply directly to my business activities. The leadership team is approachable, encouraging, and always willing to support distributors in achieving their goals. Beyond financial growth, I have developed communication, networking, and leadership skills that have positively influenced my personal life as well. The positive culture and commitment to excellence make this journey rewarding and inspiring every day.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 3,
    name: "Anil Sharma",
    designation: "Platinum Distributor",
    location: "Bangalore",
    text: "The compensation plan is one of the best in the industry. Weekly payouts and no rank demotion give me the confidence to build my business without fear. Unlike many opportunities I explored in the past, Deal Forever provides a stable and motivating environment where hard work is consistently recognized and rewarded. The transparent earnings structure allows me to plan my goals effectively while focusing on team development and customer satisfaction. Regular incentives, recognition programs, and supportive leadership have encouraged me to stay committed. This business has become an important part of my professional journey and long-term financial planning.",
    image:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 4,
    name: "Sunita Nair",
    designation: "Diamond Distributor",
    location: "Thiruvananthapuram",
    text: "From a homemaker to a successful entrepreneur - Deal Forever made it possible. The support system and mentorship are exceptional. Starting with little experience in business, I was initially uncertain about my ability to succeed. However, the structured training, encouragement from mentors, and collaborative community gave me the confidence to take meaningful steps forward. As my network grew, so did my knowledge, income, and self-belief. Today, I enjoy financial independence and the opportunity to inspire others who wish to pursue similar goals. The journey has been life-changing, and I remain grateful for the guidance and opportunities provided throughout the process.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export const faqItems = [
  {
    question: "What is Deal Forever?",
    answer:
      "Deal Forever is a direct selling company that offers high-quality products across health & wellness, personal care, and home care categories. We provide a sustainable business opportunity for individuals to earn income through our dual marketing plan.",
  },
  {
    question: "How do I become a distributor?",
    answer:
      "You can become a distributor by signing up through our website or contacting an existing distributor. You'll need a sponsor ID to register. Once registered, you can start building your business and earning income.",
  },
  {
    question: "What is the compensation plan?",
    answer:
      "Our compensation plan includes daily income, weekly income, monthly income, and 7 types of universal genology income. We offer a simplified dual marketing plan with accumulative BV, infinite depth calculation, and no rank demotion.",
  },
  {
    question: "Are the products genuine?",
    answer:
      "Yes, all Deal Forever products are genuine and undergo strict quality control. We source the best ingredients and follow industry-standard manufacturing processes. Our products come with a satisfaction guarantee.",
  },
  {
    question: "Is there a buyback policy?",
    answer:
      "Yes, Deal Forever has a comprehensive buyback policy. If you're not satisfied with a product, you can return it within the specified period as per our buyback and refund policy.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team through our toll-free number 1800-103-1025, email at customercare@dealfreever.com, or WhatsApp at +91 9898922113.",
  },
  {
    question: "What are the special benefits?",
    answer:
      "Deal Forever offers special benefits including free medical insurance, higher educational scholarships, travel rewards, car fund, house fund, leadership bonuses, recognition programs, and training & development opportunities.",
  },
  {
    question: "Is there a time frame to achieve ranks?",
    answer:
      "No, there is no time frame for achievers at Deal Forever. You can achieve ranks at your own pace. Once achieved, there is no rank demotion, ensuring your hard work is always recognized.",
  },
];

export const scheduleItems = [
  {
    id: 1,
    title: "Weekly Business Meeting",
    date: "Every Monday",
    time: "7:00 PM - 9:00 PM",
    location: "Kozhikode Main Office",
    type: "Meeting",
    faculty: "Dr. John Mathew",
    lat: 11.2588,
    lng: 75.7804,
  },
  {
    id: 2,
    title: "Product Training Session",
    date: "Every Wednesday",
    time: "6:00 PM - 8:00 PM",
    location: "Online (Zoom)",
    type: "Training",
    faculty: "Dr. Derick Philip",
    lat: 11.2588,
    lng: 75.7804,
  },
  {
    id: 3,
    title: "Leadership Development Program",
    date: "First Saturday of every month",
    time: "10:00 AM - 4:00 PM",
    location: "Kochi Branch",
    type: "Training",
    faculty: "Dr. Darren Thomas",
    lat: 11.2588,
    lng: 75.7804,
  },
  {
    id: 4,
    title: "Annual Distributor Meet 2025",
    date: "December 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Kozhikode Convention Center",
    type: "Event",
    faculty: "Dr. John Mathew",
    lat: 11.2588,
    lng: 75.7804,
  },
  {
    id: 5,
    title: "New Distributor Orientation",
    date: "Every 1st & 3rd Saturday",
    time: "3:00 PM - 5:00 PM",
    location: "All Branch Offices",
    type: "Orientation",
    faculty: "Dr. Derick Philip",
    lat: 11.2588,
    lng: 75.7804,
  },
];

export const downloadItems = [
  { id: 1, title: "Product Catalog 2025", type: "PDF", size: "5.2 MB" },
  { id: 2, title: "Compensation Plan", type: "PDF", size: "2.1 MB" },
  { id: 3, title: "Distributor Code of Conduct", type: "PDF", size: "1.5 MB" },
  { id: 4, title: "Business Manual", type: "PDF", size: "8.3 MB" },
  { id: 5, title: "GST Registration Certificate", type: "PDF", size: "0.8 MB" },
  {
    id: 6,
    title: "Company Registration Certificate",
    type: "PDF",
    size: "1.2 MB",
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Team Meeting",
    title: "Strategic Team Meeting",
    description: "Our visionary leaders come together in a focused and high-energy strategic meeting to align on quarterly goals, review network performance, and craft powerful action plans. These meetings are the backbone of our organization, ensuring every decision is purposeful and every leader is empowered with clarity. From business expansion strategies to distributor support systems, every topic is discussed with depth and dedication. It is in these rooms that the future of Deal Forever is shaped, one bold idea at a time.",
    subImages: [
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Product Launch",
    title: "Grand Product Launch Event",
    description: "A truly landmark moment in the Deal Forever journey as we unveiled our newest and most exciting range of products to a packed and enthusiastic audience of distributors, leaders, and partners from across the country. The atmosphere was electric, filled with anticipation, pride, and excitement. Each product was presented with passion, highlighting its unique benefits and the incredible opportunity it brings to every distributor. Events like these remind us why we do what we do — to bring quality, health, and prosperity to every home.",
    subImages: [
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Annual Meet",
    title: "Deal Forever Annual Convention",
    description: "Thousands of passionate distributors and top-ranking leaders gathered under one magnificent roof for our flagship annual convention — a grand celebration of growth, unity, and a shared vision for an extraordinary future. The convention featured inspiring keynote sessions, live success stories, recognition ceremonies, and powerful training workshops. It was a moment for the entire Deal Forever family to reconnect, recharge, and recommit to their dreams. The energy, the laughter, the tears of joy — every moment was a testament to the incredible community we have built together.",
    subImages: [
      "https://images.pexels.com/photos/3183175/pexels-photo-3183175.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Award Ceremony",
    title: "Excellence & Achievement Award Night",
    description: "A glittering and emotionally charged evening dedicated entirely to honoring the champions of our network — those extraordinary individuals who went above and beyond every expectation. From rising stars making their mark to seasoned leaders who have built empires through sheer dedication, every award represented a story of sacrifice, resilience, and triumph. The night was filled with applause, pride, and inspiration as each achiever took the stage to celebrate their hard-earned success. At Deal Forever, we believe in recognizing greatness — because every milestone deserves to be celebrated with the honour it truly deserves.",
    subImages: [
      "https://images.pexels.com/photos/3183140/pexels-photo-3183140.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3183143/pexels-photo-3183143.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Training Session",
    title: "Elite Business Training Program",
    description: "An intensive, transformative, and deeply practical training program designed to equip our distributors with the most effective tools, cutting-edge skills, and in-depth product knowledge needed to build a thriving business. Led by experienced mentors and top-performing leaders, the sessions covered everything from prospecting and presentation techniques to leadership development and digital marketing strategies. Participants left feeling motivated, confident, and armed with a clear roadmap for success. At Deal Forever, we invest in our people — because when our distributors grow, the entire network rises to greater heights together.",
    subImages: [
      "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Team Building",
    title: "Power of Unity — Team Building Retreat",
    description: "A refreshing, energizing, and deeply meaningful retreat that brought our network closer than ever before, fostering genuine trust, seamless teamwork, and the collaborative spirit that truly defines the Deal Forever family. Through engaging activities, open conversations, and shared experiences, team members strengthened their bonds and discovered new levels of synergy. The retreat reminded everyone that behind every successful business is a community of people who genuinely care for one another. When we lift each other up, there is no limit to how high we can go — and that is the Deal Forever way.",
    subImages: [
      "https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184348/pexels-photo-3184348.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Conference",
    title: "National Leadership Conference",
    description: "A high-impact and intellectually stimulating national conference where seasoned industry experts, accomplished business leaders, and the brightest rising stars of our network came together to exchange transformative ideas, spark deep inspiration, and collectively shape the future of direct selling in India. Panel discussions, breakout sessions, and keynote addresses filled the day with wisdom and energy. Every attendee walked away with renewed purpose, expanded perspective, and powerful connections. This conference is a reminder that leadership is not a title — it is a commitment to constant growth, service, and the courage to lead by example.",
    subImages: [
      "https://images.pexels.com/photos/3184409/pexels-photo-3184409.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Celebration",
    title: "Milestone Celebration Gala",
    description: "A joyful, vibrant, and truly unforgettable gala evening where the entire Deal Forever family came together to celebrate incredible milestones, honor remarkable achievements, and reflect on the beautiful journey we have shared. The night was filled with laughter, music, heartfelt speeches, and moments that will be cherished for years to come. Every milestone we celebrate is a reminder of the collective effort, belief, and passion that fuels this extraordinary network. As we look back with gratitude and pride, we also look ahead with excitement and unwavering confidence in the even brighter journey that lies before us.",
    subImages: [
      "https://images.pexels.com/photos/3184422/pexels-photo-3184422.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3183175/pexels-photo-3183175.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
];

export const videoItems = [
  { id: 1, title: "Deal Forever - How to Book Hotel Rooms", youtubeId: "jGetqo_SC9U", category: "Hotel Booking" },
  { id: 2, title: "Deal Forever - How to Buy our Products", youtubeId: "7jUDDWEcINo", category: "E-Commerce" },
  { id: 3, title: "Deal Forever - How to Avail our Lessons", youtubeId: "i1BqRYMFS08", category: "E-Learning" },
  { id: 4, title: "Deal Forever - Get Latest Updates", youtubeId: "yH7eDWTH5iM", category: "Updates" },
];

export const offers = [
  {
    id: 1,
    title: "March Special Offer",
    description: "Get 20% off on all Health & Wellness products",
    fullDescription:
      "This March, Deal Forever is delighted to offer an exclusive 20% discount across our entire Health & Wellness range. Whether you are looking to boost your immunity, improve your energy levels, or simply invest in a healthier lifestyle, this is the perfect opportunity to stock up on your favourite products at unbeatable prices. Don't miss this limited-time offer — your health journey just got a whole lot more affordable.",
    image:
      "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600",
    subImages: [
      "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    validTill: "March 31, 2025",
  },
  {
    id: 2,
    title: "New Distributor Welcome Pack",
    description: "Special starter kit worth Rs. 5000 for just Rs. 2999",
    fullDescription:
      "Kickstart your Deal Forever journey with our exclusive New Distributor Welcome Pack, loaded with premium products worth Rs. 5000 — available to you for just Rs. 2999. This specially curated starter kit includes our best-selling wellness and personal care essentials, giving you everything you need to begin your business and experience our products firsthand. A smarter start leads to a stronger business — and this pack is your first step.",
    image:
      "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=600",
    subImages: [
      "https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/6567608/pexels-photo-6567608.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    validTill: "April 15, 2025",
  },
  {
    id: 3,
    title: "Summer Combo Deals",
    description: "Buy any 2 personal care products and get 1 free",
    fullDescription:
      "Beat the summer heat with Deal Forever's irresistible Summer Combo Deal! Purchase any two personal care products from our premium range and receive a third one absolutely free. This offer is our way of helping you refresh your self-care routine without stretching your budget. From skincare to hygiene essentials, our personal care line has everything you need to look and feel your best all season long.",
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600",
    subImages: [
      "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    validTill: "May 31, 2025",
  },
  {
    id: 4,
    title: "Loyalty Rewards Month",
    description: "Double BV on all repeat purchases this month",
    fullDescription:
      "We believe in rewarding loyalty, and this month we are doing exactly that — with Double Business Volume on every repeat purchase you make. This is a golden opportunity for dedicated distributors to accelerate their rank advancement and maximize their earnings. The more you purchase, the faster you grow. Take full advantage of this month-long reward and let your consistent efforts translate into extraordinary results for your Deal Forever business.",
    image:
      "https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=600",
    subImages: [
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    validTill: "June 30, 2025",
  },
  {
    id: 5,
    title: "Loyalty Rewards Week",
    description: "Double BV on all repeat purchases this week",
    fullDescription:
      "Make this week count with our special Loyalty Rewards Week promotion! Enjoy Double Business Volume on all your repeat purchases for seven power-packed days. Whether you are restocking your personal favourites or building inventory for your customers, every purchase this week brings you twice the BV and twice the progress. This is a short but incredibly impactful window — act fast, purchase smart, and watch your business volumes soar.",
    image:
      "https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=600",
    subImages: [
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    validTill: "April 30, 2025",
  },
  {
    id: 6,
    title: "Loyalty Sale",
    description: "Double sale on all purchases these 2 days",
    fullDescription:
      "Two days. Double the rewards. Our exclusive Loyalty Sale gives you an incredible opportunity to earn double on every single purchase made within this limited 48-hour window. This flash event is designed for our most driven distributors who know how to seize the moment and turn it into maximum business growth. Mark your calendar, prepare your orders, and make these two days the most productive of your Deal Forever journey so far.",
    image:
      "https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=600",
    subImages: [
      "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
    validTill: "February 28, 2025",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "John Mathew",
    designation: "Founder & Chairman",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 2,
    name: "Sarah Thomas",
    designation: "Managing Director",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 3,
    name: "David Kurian",
    designation: "Director of Operations",
    image:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 4,
    name: "Meera Philip",
    designation: "Head of Product Development",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

export const brands = [
  {
    id: 1,
    name: "Brand 1",
    logo: `${import.meta.env.VITE_BASE_URL}/images/resource/client1-1.png`,
  },
  {
    id: 2,
    name: "Brand 2",
    logo: `${import.meta.env.VITE_BASE_URL}/images/resource/client1-2.png`,
  },
  {
    id: 3,
    name: "Brand 3",
    logo: `${import.meta.env.VITE_BASE_URL}/images/resource/client1-3.png`,
  },
  {
    id: 4,
    name: "Brand 4",
    logo: `${import.meta.env.VITE_BASE_URL}/images/resource/client1-4.png`,
  },
  {
    id: 5,
    name: "Brand 5",
    logo: `${import.meta.env.VITE_BASE_URL}/images/resource/client1-5.png`,
  },
  {
    id: 6,
    name: "Brand 6",
    logo: `${import.meta.env.VITE_BASE_URL}/images/resource/client1-1.png`,
  },
  {
    id: 7,
    name: "Brand 7",
    logo: `${import.meta.env.VITE_BASE_URL}/images/resource/client1-2.png`,
  },
  {
    id: 8,
    name: "Brand 8",
    logo: `${import.meta.env.VITE_BASE_URL}/images/resource/client1-3.png`,
  },
  {
    id: 9,
    name: "Brand 9",
    logo: `${import.meta.env.VITE_BASE_URL}/images/resource/client1-4.png`,
  },
  {
    id: 10,
    name: "Brand 10",
    logo: `${import.meta.env.VITE_BASE_URL}/images/resource/client1-5.png`,
  },
];
