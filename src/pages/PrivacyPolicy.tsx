const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At FURNISH, we are committed to protecting your privacy and ensuring the security of 
              your personal information. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website or make a purchase from us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Payment information (credit card details, billing address)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  When you visit our website, we automatically collect certain information:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, referring website)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and customer service</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
              <li>Analyze usage trends and preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Service providers who assist with business operations</li>
              <li>Payment processors for transaction processing</li>
              <li>Shipping partners for order delivery</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the Internet is 100% secure, and we cannot guarantee 
              absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Access and review your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent where we rely on it</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, analyze 
              website traffic, and personalize content. You can control cookie settings through your 
              browser preferences. Note that disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children. If you believe we have collected information 
              from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date. We encourage 
              you to review this policy periodically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>Email: <a href="mailto:privacy@furnish.com" className="text-accent hover:underline">privacy@furnish.com</a></p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Design Street, New York, NY 10001</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
