import PageBanner from '../components/PageBanner';
import { useParams } from 'react-router-dom';

const policies: Record<string, { title: string; content: string[] }> = {
  buyback: {
    title: 'Buyback Policy',
    content: [
      'Deal Forever Enterprises LLP is committed to the satisfaction of all its distributors and customers. In accordance with the Direct Selling Guidelines issued by the Government of India, we have established a comprehensive buyback policy.',
      'Any distributor who wishes to terminate their association with Deal Forever may return unused and resalable products within 30 days of purchase. The buyback will be processed at the purchase price after deducting applicable taxes and a restocking fee of up to 10%.',
      'Products must be in their original packaging, unused, and in resalable condition. Damaged or used products will not be accepted for buyback.',
      'To initiate a buyback request, distributors must submit a written request along with the original purchase invoice to the branch office where the purchase was made.',
      'The refund will be processed within 15 working days from the date of receipt of the returned products, subject to verification of product condition.',
      'This policy applies only to products purchased directly from Deal Forever or its authorized branches. Products purchased from other distributors are not eligible for buyback under this policy.',
    ],
  },
  cancellation: {
    title: 'Cancellation Policy',
    content: [
      'Deal Forever Enterprises LLP allows cancellation of orders within 24 hours of placement, provided the order has not been dispatched.',
      'To cancel an order, distributors must contact customer support with their order ID. Cancellations can be made via phone (1800-103-1025), email (customercare@dealfreever.com), or WhatsApp.',
      'If the order has already been dispatched, the cancellation request will be treated as a return, and the return policy will apply.',
      'For subscription-based orders, cancellation can be done at any time before the next billing cycle. No cancellation fee will be charged.',
      'Refunds for cancelled orders will be processed within 7-10 working days to the original payment method.',
    ],
  },
  exchange: {
    title: 'Exchange Policy',
    content: [
      'Deal Forever Enterprises LLP offers an exchange policy for products that are damaged, defective, or incorrectly shipped. Exchanges must be requested within 7 days of receiving the product.',
      'To request an exchange, customers must provide photographic evidence of the damage or defect along with the order ID and product details.',
      'Products must be returned in their original packaging with all accessories and documentation. The exchange will be processed after verification of the returned product.',
      'Exchange requests can be made through customer support via phone (1800-103-1025), email (customercare@dealfreever.com), or by visiting any Deal Forever branch.',
      'The exchanged product will be shipped within 5-7 working days after receiving and verifying the returned product. No additional shipping charges will apply for exchanges due to product defects.',
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    content: [
      'Deal Forever Enterprises LLP respects the privacy of all its distributors, customers, and website visitors. This privacy policy outlines how we collect, use, and protect your personal information.',
      'Information We Collect: We collect personal information such as name, email address, phone number, and address when you register as a distributor, place an order, or contact us. We also collect usage data through cookies and analytics tools.',
      'How We Use Your Information: Your personal information is used to process orders, provide customer support, send important updates about your account, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.',
      'Data Security: We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of internet transmission is 100% secure.',
      'Cookies: Our website uses cookies to enhance your browsing experience and analyze site traffic. You can disable cookies through your browser settings, but some features may not function properly.',
      'Your Rights: You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at customercare@dealfreever.com.',
      'Changes to This Policy: We may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date.',
    ],
  },
  refund: {
    title: 'Refund Policy',
    content: [
      'Deal Forever Enterprises LLP provides refunds in accordance with the Direct Selling Guidelines and our commitment to customer satisfaction.',
      'Refunds are applicable for: (a) Products returned within the buyback period, (b) Cancelled orders that have not been dispatched, (c) Defective or damaged products reported within 7 days of receipt.',
      'Refund amounts will be calculated based on the original purchase price, minus applicable taxes and any restocking fees (up to 10% for buyback returns).',
      'Refunds will be processed to the original payment method within 7-15 working days, depending on the payment method and bank processing times.',
      'For cash-on-delivery orders, refunds will be processed via bank transfer to the account details provided by the customer.',
      'To request a refund, contact customer support at 1800-103-1025 or customercare@dealfreever.com with your order ID and reason for the refund.',
    ],
  },
  shipping: {
    title: 'Shipping & Pickup Policy',
    content: [
      'Deal Forever Enterprises LLP ships products across India through our authorized logistics partners. Shipping timelines vary based on the delivery location.',
      'Metro Cities: 3-5 working days. Tier 2 & 3 Cities: 5-7 working days. Rural Areas: 7-10 working days.',
      'Shipping charges are calculated based on the order value and delivery location. Orders above Rs. 1000 qualify for free shipping.',
      'Products can also be picked up directly from any Deal Forever branch office. To arrange a pickup, place your order online and select "Branch Pickup" as the delivery option.',
      'For branch pickup, orders will be ready within 2 working days. You will receive a notification when your order is ready for pickup.',
      'Deal Forever is not responsible for delays caused by natural disasters, strikes, or other circumstances beyond our control.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    content: [
      'By registering as a distributor with Deal Forever Enterprises LLP, you agree to abide by these terms and conditions.',
      'Eligibility: You must be at least 18 years of age and a resident of India to become a distributor. You must provide valid identification and address proof during registration.',
      'Distributor Code of Conduct: Distributors must conduct business ethically and in compliance with all applicable laws. Misrepresentation of products, income potential, or the company is strictly prohibited.',
      'Compensation Plan: Earnings under the compensation plan are based on actual sales of products and are not guaranteed. Income examples are for illustrative purposes only.',
      'Intellectual Property: All trademarks, logos, and content on the Deal Forever website and materials are the property of Deal Forever Enterprises LLP and may not be used without written permission.',
      'Termination: Deal Forever reserves the right to terminate a distributor\'s association for violation of these terms, unethical business practices, or any activity that harms the company\'s reputation.',
      'Dispute Resolution: Any disputes will be resolved through arbitration in Kozhikode, Kerala, in accordance with Indian arbitration laws.',
    ],
  },
  'terms-of-use': {
    title: 'Terms of Use',
    content: [
      'By accessing and using the Deal Forever website, you agree to comply with these terms of use.',
      'The content on this website is provided for general information purposes only. While we strive to keep the information accurate and up-to-date, we make no warranties about the completeness or accuracy of the content.',
      'You may not use this website for any unlawful purpose or in any way that could damage the reputation of Deal Forever Enterprises LLP.',
      'The website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.',
      'We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice.',
      'Your use of this website is at your own risk. Deal Forever Enterprises LLP shall not be liable for any damages arising from the use of this website.',
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    content: [
      'The information provided on the Deal Forever website is for general informational purposes only.',
      'Income claims and examples shown on this website are for illustrative purposes only. Actual earnings depend on individual effort, skill, and market conditions. There is no guarantee of income.',
      'Product information, including health benefits, is based on general knowledge and traditional use. Individual results may vary. Products are not intended to diagnose, treat, cure, or prevent any disease.',
      'Deal Forever Enterprises LLP makes no warranties, express or implied, regarding the completeness or accuracy of the information on this website.',
      'Any reliance you place on information from this website is at your own risk. We recommend consulting with qualified professionals for specific advice.',
      'Deal Forever is a registered direct selling company operating in compliance with the Direct Selling Guidelines issued by the Government of India.',
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
        breadcrumbs={[{ label: 'Policies' }, { label: policy.title }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-4">
            {policy.content.map((paragraph, i) => (
              <p key={i} className="text-[#555] leading-relaxed text-sm">{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 p-4 bg-[#faf8f5] rounded-xl text-sm text-[#888]">
            <p>Last updated: January 2025</p>
            <p>For questions about this policy, contact us at customercare@dealfreever.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
