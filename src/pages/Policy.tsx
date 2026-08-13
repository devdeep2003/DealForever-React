import PageBanner from '../components/PageBanner';
import { useParams } from 'react-router-dom';

type DisclaimerPoint = {
  title: string;
  text: string;
  bullet?: boolean;
};

type DisclaimerSection = {
  heading: string;
  points: DisclaimerPoint[];
};

const policies: Record<
  string,
  {
    title: string;
    content: (string | DisclaimerSection)[];
  }
> = {

//   buyback: {
//   title: 'Buy Back Policy',
//   content: [
//     {
//       heading: 'Eligibility',
//       points: [
//         {
//           title: '',
//           text: 'Applies to distributors resigning who wish to return Deal Forever products that are in good condition, useable, resalable, restock-able, unopened, unaltered, and have a remaining shelf life of at least 4 months.',
//           bullet: false,
//         },
//       ],
//     },

//     {
//       heading: 'Refund Scenarios:',
//       points: [
//         {
//           title: 'Within 30 Days of Purchase:',
//           text: 'Full refund provided, minus any bonuses paid and PV reversed.',
//           bullet: true,
//         },
//         {
//           title: 'After 30 Days of Purchase:',
//           text: 'Refund equals the distributor cost, minus total bonus paid out on the original purchase, minus GST, and minus a 10% service charge.',
//           bullet: true,
//         },
//       ],
//     },
//   ],
// },


//   cancellation: {
//   title: 'Cancellation Policy',
//   content: [
//     'You may cancel your order at any time before the item(s) have been shipped, To cancel your order, please follow these steps:',

//     {
//       heading: '',
//       points: [
//         {
//           title: '',
//           text: 'Log in to your account',
//           bullet: false,
//         },
//         {
//           title: '',
//           text: 'Select the order from My Orders.',
//           bullet: true,
//         },
//         {
//           title: '',
//           text: 'Click on Cancel Order for the items you want to cancel, individually.',
//           bullet: true,
//         },
//         {
//           title: '',
//           text: 'Tell us why you don’t want the product and confirm the cancellation.',
//           bullet: true,
//         },
//       ],
//     },

//     'After completing the cancellation process, we’ll send you a confirmation of your cancellation. Please note that orders cannot be cancelled once they have been shipped.',

//     {
//       heading: '',
//       points: [
//         {
//           title: 'Helpline Number:',
//           text: '19001051421',
//           bullet: true,
//         },
//         {
//           title: 'Email:',
//           text: 'info@mydealforever.com',
//           bullet: true,
//         },
//       ],
//     },

//     {
//       heading: 'Exception:',
//       points: [
//         {
//           title: '',
//           text: 'The return policy is NOT valid on electric items if opened.',
//           bullet: false,
//         },
//       ],
//     },
//   ],
// },



//   exchange: {
//   title: 'Product Return / Exchange Policy',
//   content: [
//     {
//       heading: 'Product Return / Exchange Policy',
//       points: [
//         {
//           title: 'Eligibility:',
//           text: 'Applicable for dissatisfaction, manufacturing, or packaging defects.',
//           bullet: false,
//         },
//         {
//           title: 'Timeline:',
//           text: 'Must be initiated within 30 days from the date of purchase.',
//           bullet: false,
//         },
//       ],
//     },

//     {
//       heading: 'Process:',
//       points: [
//         {
//           title: '',
//           text: 'Customers/distributors must contact the original seller (distributor or company) with a valid reason, the product, and the original order receipt copy/invoice.',
//           bullet: true,
//         },
//         {
//           title: '',
//           text: 'Distributors are obligated to provide a money refund or product replacement to the customer.',
//           bullet: true,
//         },
//         {
//           title: '',
//           text: 'Distributors can then return the items to the Company along with the original invoice.',
//           bullet: true,
//         },
//       ],
//     },

//     {
//       heading: 'Company Resolution:',
//       points: [
//         {
//           title: '',
//           text: 'The Company will either replace the products free of cost or issue a cash voucher (zero PV or BV) valid for 30 days for alternative product purchases.',
//           bullet: false,
//         },
//       ],
//     },

//     {
//       heading: 'Required Documents:',
//       points: [
//         {
//           title: '',
//           text: 'Product Return Form',
//           bullet: true,
//         },
//         {
//           title: '',
//           text: 'Reason for return',
//           bullet: true,
//         },
//         {
//           title: '',
//           text: 'Copy of Invoice',
//           bullet: true,
//         },
//         {
//           title: '',
//           text: 'Products to be returned',
//           bullet: true,
//         },
//       ],
//     },
//   ],
// },


'cancellation': {
  title: 'Cancellation & Refund Policy',
  content: [
    {
      heading: 'Product Return / Exchange Policy',
      points: [
        {
          title: 'Eligibility:',
          text: 'Applicable for dissatisfaction, manufacturing, or packaging defects.',
          bullet: false,
        },
        {
          title: 'Timeline:',
          text: 'Must be initiated within 30 days from the date of purchase.',
          bullet: false,
        },
      ],
    },

    {
      heading: 'Process:',
      points: [
        {
          title: '',
          text: 'Customers/distributors must contact the original seller (distributor or company) with a valid reason, the product, and the    original order receipt copy/invoice.',
          bullet: true,
        },
        {
          title: '',
          text: 'Distributors are obligated to provide a money refund or product replacement to the customer.',
          bullet: true,
        },
        {
          title: '',
          text: 'Distributors can then return the items to the Company along with the original invoice.',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Company Resolution:',
      points: [
        {
          title: '',
          text: 'The Company will either replace the products free of cost or issue a cash voucher (zero PV or BV) valid for 30 days for alternative product purchases.',
          bullet: false,
        },
      ],
    },

    {
      heading: 'Required Documents:',
      points: [
        {
          title: '',
          text: 'Product Return Form',
          bullet: true,
        },
        {
          title: '',
          text: 'Reason for return',
          bullet: true,
        },
        {
          title: '',
          text: 'Copy of Invoice',
          bullet: true,
        },
        {
          title: '',
          text: 'Products to be returned',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Buy Back Policy',
      points: [
        {
          title: 'Eligibility:',
          text: 'Applies to distributors resigning who wish to return Deal Forever products that are in good condition, useable, resalable, restock-able, unopened, unaltered, and have a remaining shelf life of at least 4 months.',
          bullet: false,
        },
      ],
    },

    {
      heading: 'Refund Scenarios:',
      points: [
        {
          title: 'Within 30 Days of Purchase:',
          text: 'Full refund provided, minus any bonuses paid and PV reversed.',
          bullet: true,
        },
        {
          title: 'After 30 Days of Purchase:',
          text: 'Refund equals the distributor cost, minus total bonus paid out on the original purchase, minus GST, and minus a 10% service charge.',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Order Cancellation',
      points: [
        {
          title: '',
          text: 'You may cancel your order at any time before the item(s) have been shipped, To cancel your order, please follow these steps:',
          bullet: false,
        },
        {
          title: '',
          text: 'Log in to your account',
          bullet: false,
        },
        {
          title: '',
          text: 'Select the order from My Orders.',
          bullet: true,
        },
        {
          title: '',
          text: 'Click on Cancel Order for the items you want to cancel, individually.',
          bullet: true,
        },
        {
          title: '',
          text: 'Tell us why you don’t want the product and confirm the cancellation.',
          bullet: true,
        },
        {
          title: '',
          text: 'After completing the cancellation process, we’ll send you a confirmation of your cancellation. Please note that orders cannot be cancelled once they have been shipped.',
          bullet: false,
        },
        {
          title: 'Helpline Number:',
          text: '19001051421',
          bullet: true,
        },
        {
          title: 'Email:',
          text: 'info@mydealforever.com',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Exception:',
      points: [
        {
          title: '',
          text: 'The return policy is NOT valid on electric items if opened.',
          bullet: false,
        },
      ],
    },
  ],
},

  privacy: {
  title: 'Privacy Policy',
  content: [
    'Welcome to www.mydealforever.com. In this privacy statement, the terms refer to both Deal Forever and the distributor unless the context provides otherwise.',

    'Deal Forever is committed to ensuring that your privacy is always protected. This privacy policy sets out how we use and protect any information that you give us when you use this website. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.',

    {
      heading: 'What Information We Collect and How We Use',
      points: [
        {
          title: '',
          text: 'The information we collect on our website falls under two general categories',
          bullet: false,
        },
        {
          title: '',
          text: 'Personally Identifiable Information',
          bullet: true,
        },
        {
          title: '',
          text: 'Aggregate Information',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Personally Identifiable Information',
      points: [
        {
          title: '',
          text: 'This refers to information that lets us know who you are or reveals specific details about you. (Note: Distributors can upload their KYC documents in jpeg, jpg, png, gif, or other formats via the Deal Forever Mobile Application.)',
          bullet: false,
        },
        {
          title: 'Visitors:',
          text: 'You can browse our website without sharing any Personally Identifiable Information. If you want to register as a distributor or place an order, you may voluntarily provide your details (name, address, email address, or telephone number) to be shared with a registered Deal Forever distributor for registration and order placement assistance. We may also maintain a record of your contact information to help us provide better services if you contact us again.',
          bullet: true,
        },
        {
          title: 'Ordering:',
          text: 'When placing an order, Personally Identifiable Information (such as name, contact details, order information, credit card, and other transaction details) is collected to process and deliver your order. Necessary order details may be shared with our shipping partners to complete delivery.',
          bullet: true,
        },
        {
          title: 'Credit Card Storage:',
          text: 'Credit card information collected for online shopping is used strictly to process payments and is not retained on our website. Information is securely transmitted to the bank, and we store only the reference number and amount paid information provided by the bank.',
          bullet: true,
        },
        {
          title: 'Surveys and Promotions:',
          text: 'You may voluntarily provide information to participate in occasional surveys, user polls, or questionnaires. This is used to improve our products and services and provide marketing/promotional material. If you wish to opt out, you can adjust your settings via a link in our email communications or email us at info@dealforever.com',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Aggregate Information',
      points: [
        {
          title: '',
          text: 'This refers to non-identifiable data, such as your browser and operating system type, IP address, URL of the referring website, and search terms entered on our site.',
          bullet: false,
        },
        {
          title: '',
          text: 'This data is aggregated by our web server to monitor site activities and evaluate performance, helping us improve features for a better user experience.',
          bullet: true,
        },
        {
          title: '',
          text: 'We may compile, publish, store, collect, promote, disclose, or use Aggregate Information. We generally do not correlate Personally Identifiable Information with Aggregate Information if we do, it is protected according to Personally Identifiable Information standards.',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Security',
      points: [
        {
          title: '',
          text: 'We are committed to ensuring your information is secure. To prevent unauthorized access or disclosure, we have implemented suitable physical, electronic, and managerial procedures to safeguard online data.',
          bullet: false,
        },
        {
          title: 'Account Responsibility:',
          text: 'It is your sole responsibility to safeguard your account password. If you suspect your password is compromised, contact Deal Forever immediately. Because your Distributor ID and password are specific to you, you assume full responsibility for all activities conducted on our site using them.',
          bullet: true,
        },
      ],
    },

    {
      heading: 'How We Use Cookies',
      points: [
        {
          title: '',
          text: 'A cookie is a small file placed on your computer\'s hard drive that helps analyze web traffic or lets you know when you visit a particular site.',
          bullet: false,
        },
        {
          title: 'Traffic Log Cookies:',
          text: 'Used to identify which pages are being used to analyze data and tailor our website to customer needs. Data is removed after statistical analysis.',
          bullet: true,
        },
        {
          title: 'Functionality:',
          text: 'Cookies enable cookie-based authentication for registered distributors and support personalized features like country/language codes and shopping/browsing functions (such as tracking your electronic shopping cart).',
          bullet: true,
        },
        {
          title: 'Control:',
          text: 'You can choose to accept or decline cookies. Most web browsers accept them automatically, but you can modify your browser settings to decline cookies if preferred (though this may limit full website functionality).',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Third-Party Links and Media',
      points: [
        {
          title: 'Third-Party Media:',
          text: 'We may use third-party media and research companies to place ads on external websites. Our site may also run third-party ads for specific Merchants and Service Partners.',
          bullet: true,
        },
        {
          title: 'External Links:',
          text: 'Our website may contain links to other sites of interest. Once you leave our site via these links, we have no control over those external websites and are not responsible for the protection and privacy of any information you provide there.',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Children’s Privacy Protection',
      points: [
        {
          title: '',
          text: 'Our website neither targets nor is intended for children under the age of 18. Personally Identifiable Information is never collected from children intentionally, and any such data discovered will be promptly deleted.',
          bullet: false,
        },
      ],
    },

    {
      heading: 'Changes to This Statement',
      points: [
        {
          title: '',
          text: 'Please check frequently for any updates or changes to this privacy policy before using our website or submitting Personally Identifiable Information. By using our site, you acknowledge acceptance of the Privacy Statement in effect at the time of use.',
          bullet: false,
        },
      ],
    },

    {
      heading: 'Controlling Your Personally Identifiable Information',
      points: [
        {
          title: '',
          text: 'We strive to ensure your information is current, accurate, and complete. You can restrict the collection or use of your information as follows',
          bullet: false,
        },
        {
          title: 'Direct Marketing Opt-Out:',
          text: 'Look for the clickable box on website forms to indicate that you do not want your information used for direct marketing purposes.',
          bullet: true,
        },
        {
          title: 'Changing Your Mind:',
          text: 'If you previously agreed to direct marketing use, you can change your mind at any time by writing or emailing us at info@mydealforever.com',
          bullet: true,
        },
        {
          title: 'Data Protection & Corrections:',
          text: 'We will not sell, distribute, or lease your Personally Identifiable Information to third parties unless we have your permission or are required by law to do so. If you believe any information we hold on you is incorrect or incomplete, please write or email us as soon as possible, and we will promptly correct it.',
          bullet: true,
        },
      ],
    },
  ],
},


//   refund: {
//     title: 'Refund Policy',
//     content: [
//       'Deal Forever Enterprises LLP provides refunds in accordance with the Direct Selling Guidelines and our commitment to customer satisfaction.',
//       'Refunds are applicable for: (a) Products returned within the buyback period, (b) Cancelled orders that have not been dispatched, (c) Defective or damaged products reported within 7 days of receipt.',
//       'Refund amounts will be calculated based on the original purchase price, minus applicable taxes and any restocking fees (up to 10% for buyback returns).',
//       'Refunds will be processed to the original payment method within 7-15 working days, depending on the payment method and bank processing times.',
//       'For cash-on-delivery orders, refunds will be processed via bank transfer to the account details provided by the customer.',
//       'To request a refund, contact customer support at 1800-103-1025 or customercare@dealfreever.com with your order ID and reason for the refund.',
//     ],
//   },


  shipping: {
  title: 'Shipping Policy',
  content: [
    'Deal Forever aims to provide the highest level of Distributor satisfaction. We make every effort to ensure that the post purchase experience is smooth, simple, and hassle free. We focus on timely and safe delivery and keep Distributors updated at every stage of the order, including  Order Processing, Dispatch, and Delivery.',

    {
      heading: 'What are the shipping charges?',
      points: [
        {
          title: '',
          text: 'First order with registration Free delivery for orders of 300 PV or more.',
          bullet: true,
        },
        {
          title: '',
          text: 'Individual and team orders above ₹5000 (DP) Free delivery.',
          bullet: true,
        },
        {
          title: '',
          text: 'All subsequent orders ₹100 courier charges across India.',
          bullet: true,
        },
        {
          title: '',
          text: 'Out of delivery  locations  Additional courier charges may apply for selected pin codes.',
          bullet: true,
        },
        {
          title: '',
          text: 'Courier charges are non refundable.',
          bullet: true,
        },
      ],
    },

    {
      heading: 'How long will it take to receive the order?',
      points: [
        {
          title: '',
          text: 'We try to deliver every order as quickly and safely as possible.',
          bullet: true,
        },
        {
          title: '',
          text: 'Orders are normally delivered within 2 to 5 working days from the date of order confirmation within India. Delivery may take longer due to government restrictions, instructions from government authorities, or other unforeseen circumstances.',
          bullet: true,
        },
      ],
    },

    {
      heading: 'What should you do if the package is damaged?',
      points: [
        {
          title: '',
          text: 'Distributors should carefully check the package at the time of delivery. If the package appears tampered with or damaged, the Distributor should refuse to accept the delivery.',
          bullet: true,
        },
        {
          title: '',
          text: 'The Distributor should immediately contact the respective Deal Forever Branch office or email (info@mydealforever.com) mentioning the order reference number.',
          bullet: true,
        },
      ],
    },

    'We will make every effort to arrange a replacement delivery as soon as possible.',
  ],
},


  terms: {
  title: 'Terms & Conditions',
  content: [
    {
      heading: 'Acceptance of Terms & Relationship',
      points: [
        {
          title: 'Agreement:',
          text: 'Welcome to our website. By continuing to browse and use this site, you agree to comply with and be bound by the following Terms and Conditions of Use, which—together with our Privacy Policy govern the relationship between Deal Forever and you concerning this website.',
          bullet: true,
        },
        {
          title: 'Modifications:',
          text: 'The information and terms provided on this website are for general purposes and personal use only. Please note that they may be modified, updated, or changed at any time without prior notice.',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Disclaimer of Warranties & Accuracy',
      points: [
        {
          title: 'No Guarantees:',
          text: 'We, along with any third parties, do not provide any warranty or guarantee regarding the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any specific purpose.',
          bullet: true,
        },
        {
          title: 'Inaccuracies and Errors:',
          text: 'You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly disclaim liability for any such inaccuracies or errors to the fullest extent permitted by law.',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Limitation of Liability & User Responsibility',
      points: [
        {
          title: 'Own Risk:',
          text: 'Your use of any information or materials on this website is solely at your own risk, and we shall not be held liable for any outcomes resulting from it.',
          bullet: true,
        },
        {
          title: 'Individual Needs:',
          text: 'It is entirely your responsibility to ensure that any products, services, or information available through this website meet your specific individual needs and requirements before making any decisions or purchases.',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Intellectual Property & Copyright Notice',
      points: [
        {
          title: 'Ownership:',
          text: 'This website contains materials that are either owned by or licensed to us. These materials encompass, but are not limited to, the design, layout, appearance, visuals, graphics, logos, and content.',
          bullet: true,
        },
        {
          title: 'Prohibition of Reproduction:',
          text: 'Any reproduction, copying, or redistribution of these materials is strictly forbidden unless done in accordance with the copyright notice and official permissions included in these Terms and Conditions.',
          bullet: true,
        },
      ],
    },

    {
      heading: 'Prohibited Use & Legal Consequences',
      points: [
        {
          title: 'Unlawful Activity:',
          text: 'Improper use, unauthorized access, or malicious manipulation of this website is strictly prohibited.',
          bullet: true,
        },
        {
          title: 'Legal Action:',
          text: 'Any misuse of this website may lead to a formal claim for damages and or may be considered a criminal offense punishable under applicable laws.',
          bullet: true,
        },
      ],
    },
  ],
},


//   'terms-of-use': {
//     title: 'Terms of Use',
//     content: [
//       'By accessing and using the Deal Forever website, you agree to comply with these terms of use.',
//       'The content on this website is provided for general information purposes only. While we strive to keep the information accurate and up-to-date, we make no warranties about the completeness or accuracy of the content.',
//       'You may not use this website for any unlawful purpose or in any way that could damage the reputation of Deal Forever Enterprises LLP.',
//       'The website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.',
//       'We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice.',
//       'Your use of this website is at your own risk. Deal Forever Enterprises LLP shall not be liable for any damages arising from the use of this website.',
//     ],
//   },


  disclaimer: {
  title: 'Disclaimer',
  content: [
    {
      heading: 'Nature of Business & No Investment',
      points: [
        {
          title: 'Product-Centric Operations:',
          text: 'Deal Forever operates strictly as a Direct Selling Company. Purchasing products is a straightforward consumer transaction with no associated investment activities, compulsory purchases, or financial commitments.',
        },
        {
          title: 'Exclusion of Schemes:',
          text: 'Deal Forever is not a Ponzi scheme, pyramid scheme, chit fund, or investment company. Our core mission is to distribute quality products and provide a genuine business opportunity centered exclusively on product sales.',
        },
      ],
    },

    {
      heading: 'Direct Seller Registration & Terms',
      points: [
        {
          title: 'Easy Access:',
          text: 'Becoming a Direct Seller requires only an understanding of our products, business plan, and policies.',
        },
        {
          title: 'Zero Fees:',
          text: 'There is no registration fee, no enrolment charge, and no hidden requirements.',
        },
        {
          title: 'Independent Status:',
          text: 'Becoming a Direct Seller does not constitute an agent, salaried job, or employment opportunity. All earnings are strictly sales based.',
        },
        {
          title: 'Distributorship Credentials:',
          text: 'Upon fulfilling terms and conditions Deal Forever provides a unique Independent Distributorship ID number and password free of charge.',
        },
      ],
    },

    {
      heading: 'Income Disclaimer & No Guarantees',
      points: [
        {
          title: 'No "Get Rich Quick" Claims:',
          text: 'Deal Forever does not promote or offer easy money or get-rich-quick schemes.',
        },
        {
          title: 'Sales-Based Earnings:',
          text: 'Buying a product does not guarantee any income. Earnings and eligibility for sales facilitation fees depend solely on the sales volume generated by you and your team, requiring considerable time, effort, and dedication.',
        },
        {
          title: 'Business Plan Modifications:',
          text: 'The company reserves the absolute right to change or modify the Business Plan at any point in time.',
        },
      ],
    },

    {
      heading: 'Health & Medical Disclaimer',
      points: [
        {
          title: 'Not Medical Advice:',
          text: 'Information presented in visuals, text, verbal content, official social media channels, or videos is not intended to replace professional medical advice, diagnosis, or treatment.',
        },
        {
          title: 'Consult Professionals:',
          text: 'Always consult a physician or qualified healthcare provider with any questions regarding a medical condition. Never ignore or postpone professional medical advice because of content found on our platform.',
        },
      ],
    },

    {
      heading: 'Intellectual Property & Authorized Channels',
      points: [
        {
          title: 'Copyright & Trademarks:',
          text: 'The website and its content including copyrights, trade names, trademarks, logos, design, layout, appearance, visuals, photographs, and product information are owned by Deal Forever or used under license.',
        },
        {
          title: 'Authorized Distribution:',
          text: 'Deal Forever maintains its official website mydealforever.com solely for marketing and product distribution. We do not authorize any other website, individual, or online marketplace to list or sell our products.',
        },
      ],
    },

    {
      heading: 'Termination Policy',
      points: [
        {
          title: 'Compliance:',
          text: 'Deal Forever reserves the right to terminate any Independent Distributor without prior notice if they are found deviating from or violating the Company’s Policies, Code of Conduct, or Terms and Conditions.',
        },
      ],
    },

    {
      heading: 'Limitation of Liability & General Information',
      points: [
        {
          title: 'Informational Purpose:',
          text: 'Website content is provided for general informational purposes only. Deal Forever disclaims responsibility for any false promises, representations, or unauthorized commitments made by individual Direct Sellers.',
        },
        {
          title: 'No Warranties:',
          text: 'We make no guarantees or warranties regarding the completeness, accuracy, or availability of the website or its content.',
        },
        {
          title: 'Liability Cap:',
          text: 'In no event shall Deal Forever be liable for any loss or damage (including indirect/consequential losses, loss of data, or loss of profits) arising from the use of the website or reliance on its materials.',
        },
      ],
    },
  ],
},
};




export default function Policy() {
  const { type } = useParams<{ type: string }>();
  const policy = policies[type || ''];

  if (!policy) {
    return (
      <div>
        <PageBanner title="Page Not Found" breadcrumbs={[{ label: '404' }]} />
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <p className="text-[#888]">The requested policy page could not be found.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
  <div>
    <PageBanner
      title={policy.title}
      breadcrumbs={[
        { label: 'Policies' },
        { label: policy.title }
      ]}
    />

    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">

        <div className="space-y-4">

          {policy.content.map((paragraph, i) => {

            if (typeof paragraph === 'string') {
              return (
                <p
                  key={i}
                  className="text-[#555] leading-relaxed text-sm"
                >
                  {paragraph}
                </p>
              );
            }

            return (
              <div key={i} className="mb-8">

                <h3 className="text-lg font-semibold text-[#222] mb-4">
                  {paragraph.heading}
                </h3>

                <div className="space-y-3">
  {paragraph.points.map((point, pointIndex) => {

    if (point.bullet === false) {
      return (
        <p
          key={pointIndex}
          className="text-[#555] leading-relaxed text-sm"
        >
          <strong className="text-[#333]">
            {point.title}
          </strong>
          {point.title && ' '}
          {point.text}
        </p>
      );
    }

    return (
      <div
        key={pointIndex}
        className="flex items-start text-[#555] leading-relaxed text-sm"
      >
        <span className="mr-3">•</span>

        <p>
          <strong className="text-[#333]">
            {point.title}
          </strong>
          {point.title && ' '}
          {point.text}
        </p>
      </div>
    );
  })}
</div>
              </div>
            );

          })}

        </div>

        <div className="mt-8 p-4 bg-[#faf8f5] rounded-xl text-sm text-[#888]">
          <p>Last updated: August 2026</p>
          <p>
            For questions about this policy, contact us at
            customercare@dealfreever.com
          </p>
        </div>

      </div>
    </section>
  </div>
);
};