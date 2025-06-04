import React from "react";

const TermsOfUse = () => {
  return (
    <section className="min-h-screen bg-brand-50 dark:bg-brand-950/80 transition-colors duration-300 py-10 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-950 dark:text-white mb-6">
          Terms of Use
        </h1>

        <p className="mb-4 text-brand-700 dark:text-brand-300">
          Welcome to our website. By accessing or using this site, you agree to comply
          with these Terms of Use. Please read them carefully before proceeding.
        </p>

        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mt-8 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4 text-brand-700 dark:text-brand-300">
          By using this website, you agree to be bound by these terms and all applicable
          laws and regulations. If you do not agree, you must not access or use this
          site.
        </p>

        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mt-8 mb-4">
          2. Use License
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-brand-700 dark:text-brand-300">
          <li>
            You may temporarily download copies of the materials (information or software)
            on this site for personal, non-commercial transitory viewing only.
          </li>
          <li>
            You must not:
            <ul className="list-disc list-inside ml-6">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose;</li>
              <li>Attempt to reverse engineer any software on this site;</li>
              <li>Remove any copyright or proprietary notices from the materials;</li>
              <li>Transfer the materials to another person or “mirror” them.</li>
            </ul>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mt-8 mb-4">
          3. Disclaimer
        </h2>
        <p className="mb-4 text-brand-700 dark:text-brand-300">
          All materials on this website are provided “as is.” We make no warranties, express
          or implied, and disclaim all liability for inaccuracies or errors in the content.
        </p>

        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mt-8 mb-4">
          4. Limitations
        </h2>
        <p className="mb-4 text-brand-700 dark:text-brand-300">
          In no event shall we be liable for any damages arising out of the use or inability
          to use this site or the materials contained herein.
        </p>

        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mt-8 mb-4">
          5. Governing Law
        </h2>
        <p className="mb-4 text-brand-700 dark:text-brand-300">
          These terms are governed by and construed in accordance with the laws of India.
          Any dispute arising under these terms shall be subject to the exclusive
          jurisdiction of the courts in your city.
        </p>

        <h2 className="text-2xl font-semibold text-brand-900 dark:text-white mt-8 mb-4">
          6. Contact Information
        </h2>
        <p className="text-brand-700 dark:text-brand-300">
          If you have any questions concerning these Terms of Use, please contact us at{" "}
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

export default TermsOfUse;
