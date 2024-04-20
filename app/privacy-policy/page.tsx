import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`
Privacy Policy for PartnerWise

Effective Date: April 19, 2024

1. Introduction
Welcome to PartnerWise (https://partnerwise.io). We are committed to protecting the privacy and security of our users' information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our service.

2. Information Collection
We collect the following types of information:

Personal Data: This includes your name, email address, and payment information, which we collect to manage your account and process transactions.
Non-Personal Data: We collect non-personal information such as cookies that help us understand how our service is used and how we can improve it.
3. Use of Information
The information we collect is used to:

Provide and maintain our service;
Notify you about changes to our service;
Allow you to participate in interactive features of our service when you choose to do so;
Provide customer support;
Process transactions and manage your account, including providing you with invoices and/or order confirmations;
Detect, prevent, and address technical issues.
4. Disclosure of Information
We may disclose your personal information in the following situations:

To Service Providers: We may share your information with service providers who perform services on our behalf.
For Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).

5. Updates 
We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page, and we may notify you via email about significant changes.

6. Contact Information

If you have any questions, concerns, or requests related to this Privacy Policy, you can contact us at:

Email: team@partnerwise.io

For all other inquiries, please visit our Contact Us page on the Website.

By using PartnerWise, you consent to the terms of this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
