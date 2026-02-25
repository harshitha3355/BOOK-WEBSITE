import React from "react";

const TermsAndConditions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Terms and Conditions</h1>

      <p style={styles.updated}>Last Updated: February 25, 2026</p>

      <section style={styles.section}>
        <h2 style={styles.heading}>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you agree to comply with and be
          bound by these Terms and Conditions. If you do not agree with any part
          of these terms, please discontinue use of the website.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>2. Use of Website</h2>
        <p>
          This website is intended for informational and educational purposes
          only. You agree not to misuse the platform, attempt unauthorized access,
          or engage in activities that may disrupt the website’s functionality.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>3. Intellectual Property</h2>
        <p>
          All content, including text, graphics, logos, and design elements, is
          the property of the website owner unless otherwise stated. Unauthorized
          reproduction or distribution is prohibited.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>4. Limitation of Liability</h2>
        <p>
          The website owner shall not be held liable for any direct, indirect,
          incidental, or consequential damages arising from the use or inability
          to use the website.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>5. External Links</h2>
        <p>
          This website may contain links to third-party websites. We are not
          responsible for the content, policies, or practices of external sites.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>6. Modifications</h2>
        <p>
          We reserve the right to update or modify these Terms and Conditions at
          any time without prior notice. Continued use of the website constitutes
          acceptance of any changes.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>7. Governing Law</h2>
        <p>
          These terms shall be governed and interpreted in accordance with
          applicable laws, without regard to conflict of law principles.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>8. Contact Information</h2>
        <p>
          If you have any questions regarding these Terms and Conditions, please
          contact us through the website’s contact page.
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

export default TermsAndConditions;