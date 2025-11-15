import { Link } from 'react-router-dom';
import { HelpCircle, Search } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Accordion, AccordionItem } from '../components/ui/Accordion';

export function FAQAccordion() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/">
                <img src="/logo-clouddesk.png" alt="CloudDesk EDU" className="w-12 h-12 object-contain hover:opacity-80 transition-opacity" />
              </Link>
              
              <div className="hidden md:flex items-center gap-6">
                <Link to="/product" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Product
                </Link>
                <Link to="/use-cases" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Use Cases
                </Link>
                <Link to="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
                <Link to="/docs" className="text-sm font-medium text-indigo-600 transition-colors">
                  Documentation
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-8 py-16">
            <Link to="/docs" className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 mb-6">
              ← Back to Documentation
            </Link>
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to commonly asked questions about CloudDesk EDU.
            </p>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="max-w-4xl mx-auto px-8 py-16">
          {/* Getting Started */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="info">Getting Started</Badge>
              <h2 className="text-2xl font-semibold text-gray-900">
                Getting Started
              </h2>
            </div>
            
            <Accordion>
              <AccordionItem title="How do I create my first desktop?" defaultOpen>
                <p className="mb-4">
                  Creating your first desktop is easy! After signing up, click "Create Desktop" from your dashboard. Choose a preset that matches your needs (Development, Data Science, etc.), customize the resources if needed, and click "Create". Your desktop will be ready in 2-3 minutes.
                </p>
                <Link to="/docs/getting-started" className="text-sm text-indigo-600 hover:text-indigo-700">
                  Read full guide →
                </Link>
              </AccordionItem>

              <AccordionItem title="Do I need to install any software?">
                <p>
                  No! You can access your desktop directly from your web browser. No downloads or installations required. If you prefer, you can also use RDP (Remote Desktop Protocol) or VNC clients for a native desktop experience.
                </p>
              </AccordionItem>

              <AccordionItem title="What's included in the free trial?">
                <p>
                  The free trial includes $25 in credits, which is enough to run a development desktop for about 50 hours. No credit card required to start. You can create multiple desktops and test all features during the trial period.
                </p>
              </AccordionItem>

              <AccordionItem title="How long does it take to provision a desktop?">
                <p>
                  Most desktops are ready in 2-3 minutes. GPU-enabled desktops may take 5-7 minutes. You'll receive a notification when your desktop is ready to use.
                </p>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Billing & Pricing */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="success">Billing & Pricing</Badge>
              <h2 className="text-2xl font-semibold text-gray-900">
                Billing & Pricing
              </h2>
            </div>
            
            <Accordion>
              <AccordionItem title="How does billing work?">
                <p>
                  You're only charged for the time your desktops are running. Billing is calculated per second and billed monthly. Stop your desktops when not in use to save costs. You can view your current usage and estimated costs in real-time from the dashboard.
                </p>
              </AccordionItem>

              <AccordionItem title="Can I change my plan?">
                <p>
                  Yes! You can upgrade or downgrade your resources at any time. Changes take effect immediately. You can also scale individual desktops up or down based on your current needs.
                </p>
              </AccordionItem>

              <AccordionItem title="What payment methods do you accept?">
                <p>
                  We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for enterprise customers. Educational institutions can also request purchase orders.
                </p>
              </AccordionItem>

              <AccordionItem title="Do you offer educational discounts?">
                <p>
                  Yes! Students and educators with valid .edu email addresses receive 50% off all plans. Contact us with your educational email to verify and activate the discount.
                </p>
              </AccordionItem>

              <AccordionItem title="What happens if I exceed my budget?">
                <p>
                  You can set spending limits and receive alerts when you approach them. We'll notify you at 50%, 75%, and 90% of your budget. You can choose to automatically stop desktops or continue with overage charges.
                </p>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Technical */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="warning">Technical</Badge>
              <h2 className="text-2xl font-semibold text-gray-900">
                Technical Questions
              </h2>
            </div>
            
            <Accordion>
              <AccordionItem title="What operating systems are available?">
                <p>
                  We offer Ubuntu 20.04/22.04 LTS, Windows 10/11 Pro, and custom images. All desktops come with common development tools pre-installed. You can also create custom images with your own software stack.
                </p>
              </AccordionItem>

              <AccordionItem title="Can I install my own software?">
                <p>
                  Absolutely! You have full administrator/root access to your desktop. Install any software you need, just like on a local machine. Your installations persist across sessions.
                </p>
              </AccordionItem>

              <AccordionItem title="How do I transfer files to my desktop?">
                <p>
                  You can transfer files via the web interface (drag and drop), use cloud storage services (Google Drive, Dropbox), or use SFTP/SCP. Files are stored persistently on your desktop's storage.
                </p>
              </AccordionItem>

              <AccordionItem title="What happens to my data if I delete a desktop?">
                <p>
                  When you delete a desktop, all data is permanently removed after 7 days. We recommend creating a snapshot before deletion if you want to preserve your data. Snapshots can be used to restore or create new desktops later.
                </p>
              </AccordionItem>

              <AccordionItem title="Can I use GPU-accelerated desktops?">
                <p>
                  Yes! We offer NVIDIA T4 (Basic GPU) and A100 (Advanced GPU) options. GPU desktops are perfect for machine learning, 3D rendering, and video editing. GPU access is available on Professional and Enterprise plans.
                </p>
              </AccordionItem>

              <AccordionItem title="What network ports are available?">
                <p>
                  All standard ports are available. You can run web servers, databases, and other services. For security, incoming connections require port forwarding configuration. Outgoing connections are unrestricted.
                </p>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Security & Privacy */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="danger">Security & Privacy</Badge>
              <h2 className="text-2xl font-semibold text-gray-900">
                Security & Privacy
              </h2>
            </div>
            
            <Accordion>
              <AccordionItem title="Is my data secure?">
                <p>
                  Yes. All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3. We're SOC 2 Type II certified and GDPR compliant. Your desktops are isolated in secure virtual environments.
                </p>
              </AccordionItem>

              <AccordionItem title="Who can access my desktop?">
                <p>
                  Only you. CloudDesk staff cannot access your desktop or data without your explicit permission. We may access system logs for troubleshooting if you request support, but never your personal files or applications.
                </p>
              </AccordionItem>

              <AccordionItem title="Are backups automatic?">
                <p>
                  Yes. We automatically backup your desktops daily. You can restore from any backup point within the last 30 days. You can also create manual snapshots at any time for important milestones.
                </p>
              </AccordionItem>

              <AccordionItem title="How do you handle data privacy?">
                <p>
                  We're GDPR, FERPA, and COPPA compliant. Your data is never shared with third parties. You can export or delete all your data at any time. We provide data processing agreements for institutional customers.
                </p>
              </AccordionItem>

              <AccordionItem title="Can I enable two-factor authentication?">
                <p>
                  Yes! We support TOTP-based 2FA (Google Authenticator, Authy) and hardware security keys (YubiKey, etc.). We strongly recommend enabling 2FA for all accounts.
                </p>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Performance */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="neutral">Performance</Badge>
              <h2 className="text-2xl font-semibold text-gray-900">
                Performance & Reliability
              </h2>
            </div>
            
            <Accordion>
              <AccordionItem title="What's the uptime guarantee?">
                <p>
                  We guarantee 99.9% uptime for all paid plans. If we fall below this threshold, you'll receive service credits. Our infrastructure is distributed across multiple availability zones for maximum reliability.
                </p>
              </AccordionItem>

              <AccordionItem title="How fast is the connection?">
                <p>
                  Connection speed depends on your internet connection and selected region. We recommend choosing a region closest to you for the best performance. Our servers have 10 Gbps network connections and low-latency routing.
                </p>
              </AccordionItem>

              <AccordionItem title="Can I upgrade my desktop resources without downtime?">
                <p>
                  Most upgrades (CPU, RAM, storage) require a brief restart of your desktop, typically taking 1-2 minutes. We recommend saving your work before upgrading. You can schedule upgrades during off-peak hours.
                </p>
              </AccordionItem>

              <AccordionItem title="What happens during maintenance?">
                <p>
                  Scheduled maintenance is announced at least 7 days in advance and typically occurs during low-usage hours. Your desktops remain accessible during most maintenance windows. Critical security updates may require brief restarts.
                </p>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Classroom Mode */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="info">Classroom Mode</Badge>
              <h2 className="text-2xl font-semibold text-gray-900">
                Classroom Mode
              </h2>
            </div>
            
            <Accordion>
              <AccordionItem title="What is Classroom Mode?">
                <p>
                  Classroom Mode allows instructors to manage multiple student desktops from a single dashboard. You can monitor student progress, share screens, provide assistance, and control access to resources in real-time.
                </p>
              </AccordionItem>

              <AccordionItem title="How many students can I have in a classroom?">
                <p>
                  Professional plans support up to 50 students per classroom. Enterprise plans support unlimited students. You can create multiple classrooms and organize students into different groups or sections.
                </p>
              </AccordionItem>

              <AccordionItem title="Can students access their desktops outside of class?">
                <p>
                  Yes! Students can access their desktops 24/7 unless you set specific access hours. You can configure access schedules, auto-shutdown times, and resource limits per student or per classroom.
                </p>
              </AccordionItem>

              <AccordionItem title="How do I distribute assignments to students?">
                <p>
                  You can create a template desktop with pre-installed software and files, then clone it to all students. Updates to the template can be pushed to student desktops. Students can submit work through shared folders or integrated LMS systems.
                </p>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Integration */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="success">Integration</Badge>
              <h2 className="text-2xl font-semibold text-gray-900">
                Integration & API
              </h2>
            </div>
            
            <Accordion>
              <AccordionItem title="Does CloudDesk integrate with my LMS?">
                <div>
                  <p className="mb-4">
                    Yes! We have native integrations with Canvas, Moodle, Blackboard, and Google Classroom. Students can launch their desktops directly from your LMS, and grades can be synced automatically.
                  </p>
                  <Link to="/docs" className="text-sm text-indigo-600 hover:text-indigo-700">
                    View integration guides →
                  </Link>
                </div>
              </AccordionItem>

              <AccordionItem title="Can I use SSO (Single Sign-On)?">
                <p>
                  Yes! Enterprise plans include SAML 2.0 and OAuth 2.0 support for SSO integration with providers like Okta, Azure AD, Google Workspace, and more. Students and staff can use their existing credentials.
                </p>
              </AccordionItem>

              <AccordionItem title="Is there an API for automation?">
                <div>
                  <p className="mb-4">
                    Yes! Our RESTful API allows you to automate desktop provisioning, management, and monitoring. Perfect for integrating with your existing systems or building custom workflows.
                  </p>
                  <Link to="/docs/api" className="text-sm text-indigo-600 hover:text-indigo-700">
                    View API documentation →
                  </Link>
                </div>
              </AccordionItem>

              <AccordionItem title="Can I connect to external databases or services?">
                <p>
                  Yes! Your desktops have full internet access and can connect to external services, databases, and APIs. You can also set up VPN connections or private networking for secure access to on-premise resources.
                </p>
              </AccordionItem>
            </Accordion>
          </div>

          {/* What's Next */}
          <div className="mb-12">
            <Card className="p-12 bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                What's Next?
              </h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Explore Features
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn about snapshots, backups, and team collaboration.
                  </p>
                  <Link to="/docs" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Read Documentation →
                  </Link>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Join Community
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get help from other CloudDesk users and share tips.
                  </p>
                  <Link to="/community" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Visit Forum →
                  </Link>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Need Help?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our support team is here to help you succeed.
                  </p>
                  <Link to="/support" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Contact Support →
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Support */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Still Have Questions?
              </h2>
            </div>
            
            <Card className="p-8 bg-indigo-50 border-indigo-200">
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/support">
                  <Button variant="primary">
                    Contact Support
                  </Button>
                </Link>
                <Link to="/docs">
                  <Button variant="secondary">
                    Browse Documentation
                  </Button>
                </Link>
                <Link to="/docs/api">
                  <Button variant="ghost">
                    API Reference
                  </Button>
                </Link>
              </div>
              <div className="mt-8 pt-8 border-t border-indigo-200">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Support Hours:</strong>
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Email Support: 24/7 (response within 24 hours)</li>
                  <li>• Live Chat: Monday-Friday, 9 AM - 6 PM EST</li>
                  <li>• Phone Support: Enterprise customers only</li>
                  <li>• Community Forum: 24/7 peer support</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
