import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>

      <p style={styles.updated}>Last Updated: February 25, 2026</p>

      <section style={styles.section}>
        <h2 style={styles.heading}>1. Introduction</h2>
        <p>
          This website is a demo platform created for educational and
          experimental purposes. This Privacy Policy explains how information
          may be collected, used, and protected when you interact with the site.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>2. Information We Collect</h2>
        <p>
          We may collect basic information such as your name, email address,
          browser type, and usage data when you voluntarily provide it through
          forms or while browsing the site.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>3. How We Use Information</h2>
        <p>
          Any collected information may be used to:
        </p>
        <ul>
          <li>Improve website performance and usability</li>
          <li>Respond to user inquiries</li>
          <li>Analyze general traffic trends</li>
          <li>Enhance content and features</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>4. Cookies</h2>
        <p>
          This website may use cookies to enhance user experience. Cookies are
          small data files stored on your device to help analyze traffic and
          remember preferences.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>5. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information.
          However, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>6. Third-Party Links</h2>
        <p>
          The website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of external sites.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>7. Changes to This Policy</h2>
        <p>
          This Privacy Policy may be updated periodically. Any changes will be
          reflected on this page with an updated revision date.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          through the website's contact page.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "Fauna One, serif",
    lineHeight: "1.8",
    color: "#450920"
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "10px"
  },
  updated: {
    textAlign: "center",
    fontSize: "0.9rem",
    marginBottom: "40px"
  },
  section: {
    marginBottom: "30px"
  },
  heading: {
    fontSize: "1.4rem",
    marginBottom: "10px"
  }
};

export default PrivacyPolicy;