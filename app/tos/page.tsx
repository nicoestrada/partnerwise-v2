import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write</> a simple Terms & Services for my website. Here is some context:
// - Website: https://partnerwise.io
// - Name: PartnerWise
// - Contact information: team@partnerwise.io
// - Description: An app to find brands to partner and collab with
// - Ownership: When purchasing a monthly or yearly subscription, they have full access to the platform for that duration. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://partnerwise.io/privacy-policy
// - Governing Law: USA
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`**Terms of Service for PartnerWise**

**Effective Date: April 19, 2024**

**1. Acceptance of Terms**
By accessing and using the PartnerWise website (https://partnerwise.io), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you are prohibited from using or accessing this site.

**2. Subscription Services**
PartnerWise offers monthly and yearly subscription options. Upon purchasing a subscription, you gain full access to the platform for the duration of the purchased period. Subscriptions may be canceled with a full refund within 7 days of purchase.

**3. User Data**
We collect personal information such as your name, email address, and payment information. This data is used to manage your account and provide you with requested services. For more details on data usage, please refer to our Privacy Policy (https://partnerwise.io/privacy-policy).

**4. Non-Personal Data**
We use cookies on our site to improve user experience, analyze site usage, and manage content. Cookies are small data files stored on your device. By using PartnerWise, you consent to the use of cookies.

**5. Intellectual Property**
All content on the PartnerWise site is the exclusive property of PartnerWise or its content suppliers and is protected by international copyright and intellectual property laws.

**6. Governing Law**
These Terms are governed by and construed in accordance with the laws of the United States. Any disputes arising out of or related to these Terms or the PartnerWise site shall be handled by the courts of the United States.

**7. Changes to Terms**
PartnerWise reserves the right to modify these Terms at any time. We will notify users of any changes by posting the new Terms on this site and updating them via email. Your continued use of the site after such changes constitutes your acceptance of the new Terms.

**8. Contact Us**
If you have any questions about these Terms, please contact us at team@partnerwise.io.

By using PartnerWise, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
