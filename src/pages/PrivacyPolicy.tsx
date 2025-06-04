import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-brand-50 dark:bg-brand-950/80 transition-colors duration-300 py-10 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-950 dark:text-white mb-6">
          Privacy Policy
        </h1>

        <p className="mb-4 text-brand-700 dark:text-brand-300">
          Your privacy is important to us. This Privacy Policy explains how we collect,
          use, disclose, and protect your information when you visit our website.
          Please read this policy carefully.
        </p>

        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mt-8 mb-4">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2 text-brand-700 dark:text-brand-300">
          <li>
            <strong>Personal Data:</strong> Name, email address, phone number (only if
            you voluntarily provide it when contacting us).
          </li>
          <li>
            <strong>Usage Data:</strong> IP address, browser type, pages visited, time
            spent on pages, and other analytics collected via cookies or similar
            technologies.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-brand-700 dark:text-brand-300">
          <li>To respond to your inquiries or support requests.</li>
          <li>To improve and personalize our website’s content and functionality.</li>
          <li>To send you updates or newsletters (only if you opt in).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mt-8 mb-4">
          3. Cookies & Tracking
        </h2>
        <p className="mb-4 text-brand-700 dark:text-brand-300">
          We use cookies and similar tracking technologies to collect usage data and
          improve your experience. You can disable cookies in your browser settings if
          you prefer.
        </p>

        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mt-8 mb-4">
          4. Third-Party Services
        </h2>
        <p className="mb-4 text-brand-700 dark:text-brand-300">
          We may use third-party analytics (e.g., Google Analytics) or hosting services,
          which have their own privacy practices. We recommend that you review their
          policies separately.
        </p>

        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mt-8 mb-4">
          5. Security
        </h2>
        <p className="mb-4 text-brand-700 dark:text-brand-300">
          We implement reasonable security measures to protect your data. However, no
          method of transmission over the Internet is 100% secure. Use this site at your
          own risk.
        </p>

        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mt-8 mb-4">
          6. Contact Us
        </h2>
        <p className="text-brand-700 dark:text-brand-300">
          If you have questions about this Privacy Policy, you can email us at{" "}
          <a
            href="mailto:gunisettykrishnasaijyoteesh@gmail.com"
            className="text-brand-600 dark:text-brand-400 underline"
          >
            gunisettykrishnasaijyoteesh@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
