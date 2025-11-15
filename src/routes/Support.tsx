import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Phone, Clock, HelpCircle, Send } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';

export function Support() {
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
                <Link to="/docs" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
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
          <div className="max-w-4xl mx-auto px-8 py-16 text-center">
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">
              Contact Support
            </h1>
            <p className="text-xl text-gray-600">
              Our support team is here to help you succeed. Choose the best way to reach us.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email Support
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get help via email. We respond within 24 hours.
              </p>
              <Badge variant="success">24/7 Available</Badge>
              <div className="mt-6">
                <a href="mailto:support@clouddesk.edu" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  support@clouddesk.edu
                </a>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-indigo-200 bg-indigo-50">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Live Chat
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Chat with our support team in real-time.
              </p>
              <Badge variant="info">Mon-Fri, 9 AM - 6 PM EST</Badge>
              <div className="mt-6">
                <Button variant="primary" size="sm" className="w-full">
                  Start Chat
                </Button>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Phone Support
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Call us directly for urgent issues.
              </p>
              <Badge variant="warning">Enterprise Only</Badge>
              <div className="mt-6">
                <a href="tel:+1-800-CLOUDDESK" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  +1 (800) CLOUDDESK
                </a>
              </div>
            </Card>
          </div>

          {/* Support Hours */}
          <Card className="p-8 mb-16">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Support Hours
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Email Support</p>
                    <p className="text-gray-600">24/7 - Response within 24 hours</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Live Chat</p>
                    <p className="text-gray-600">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Phone Support</p>
                    <p className="text-gray-600">Enterprise customers only</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Community Forum</p>
                    <p className="text-gray-600">24/7 - Peer support</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <Card className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Name
                    </label>
                    <Input type="text" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Subject
                    </label>
                    <Input type="text" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Describe your issue or question..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent resize-none"
                    />
                  </div>
                  <Button variant="primary" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Before You Contact Us
              </h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Check the FAQ
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Many common questions are answered in our FAQ section.
                      </p>
                      <Link to="/docs/faq" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                        Browse FAQ →
                      </Link>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Search Documentation
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Find detailed guides and tutorials in our docs.
                      </p>
                      <Link to="/docs" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                        View Documentation →
                      </Link>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Ask the Community
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Get help from other CloudDesk users in our forum.
                      </p>
                      <Link to="/community" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                        Visit Forum →
                      </Link>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-amber-50 border-amber-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Enterprise Support
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Need dedicated support? Upgrade to Enterprise for priority support, phone access, and a dedicated account manager.
                  </p>
                  <Link to="/pricing" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                    View Enterprise Plans →
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-8 py-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Average Response Times
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-semibold text-emerald-600 mb-2">
                  &lt; 2 min
                </div>
                <p className="text-sm text-gray-600">Live Chat</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-semibold text-blue-600 mb-2">
                  &lt; 4 hrs
                </div>
                <p className="text-sm text-gray-600">Email (Business Hours)</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-semibold text-indigo-600 mb-2">
                  &lt; 24 hrs
                </div>
                <p className="text-sm text-gray-600">Email (After Hours)</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-semibold text-purple-600 mb-2">
                  Instant
                </div>
                <p className="text-sm text-gray-600">Phone (Enterprise)</p>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
