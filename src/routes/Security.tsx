import { Link } from 'react-router-dom';
import { Shield, Lock, Key, Eye, FileCheck, Server, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export function Security() {
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
        <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
          <div className="max-w-7xl mx-auto px-8 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl font-semibold mb-4">
                Security & Compliance
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Enterprise-grade security to protect your data and ensure compliance with industry standards.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Badge variant="success">SOC 2 Type II</Badge>
                <Badge variant="success">GDPR Compliant</Badge>
                <Badge variant="success">FERPA Compliant</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
            Security Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                End-to-End Encryption
              </h3>
              <p className="text-gray-600">
                All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Two-Factor Authentication
              </h3>
              <p className="text-gray-600">
                Secure your account with TOTP-based 2FA or hardware security keys (YubiKey, etc.).
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Access Control
              </h3>
              <p className="text-gray-600">
                Role-based access control (RBAC) and single sign-on (SSO) with SAML 2.0 and OAuth 2.0.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Isolated Environments
              </h3>
              <p className="text-gray-600">
                Each desktop runs in an isolated virtual environment with dedicated resources.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Automatic Backups
              </h3>
              <p className="text-gray-600">
                Daily automated backups with 30-day retention. Restore from any backup point.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Threat Detection
              </h3>
              <p className="text-gray-600">
                Real-time monitoring and automated threat detection to protect against attacks.
              </p>
            </Card>
          </div>

          {/* Compliance */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
              Compliance & Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      SOC 2 Type II Certified
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We undergo regular third-party audits to ensure our security controls meet the highest standards for data protection, availability, and confidentiality.
                    </p>
                    <Badge variant="success">Certified</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      GDPR Compliant
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Full compliance with the General Data Protection Regulation. We provide data processing agreements and ensure your right to data portability and deletion.
                    </p>
                    <Badge variant="success">Compliant</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      FERPA Compliant
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Compliant with the Family Educational Rights and Privacy Act for educational institutions handling student data.
                    </p>
                    <Badge variant="success">Compliant</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      COPPA Compliant
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Compliant with the Children's Online Privacy Protection Act for services used by children under 13.
                    </p>
                    <Badge variant="success">Compliant</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
              Data Protection
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Encryption Standards
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">Data at Rest</p>
                      <p className="text-sm text-gray-600">AES-256 encryption for all stored data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">Data in Transit</p>
                      <p className="text-sm text-gray-600">TLS 1.3 for all network communications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">Key Management</p>
                      <p className="text-sm text-gray-600">Hardware security modules (HSM) for key storage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">Backup Encryption</p>
                      <p className="text-sm text-gray-600">All backups are encrypted with separate keys</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Access & Privacy
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">Zero Access Policy</p>
                      <p className="text-sm text-gray-600">CloudDesk staff cannot access your data without permission</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">Audit Logs</p>
                      <p className="text-sm text-gray-600">Complete audit trail of all access and changes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">Data Residency</p>
                      <p className="text-sm text-gray-600">Choose where your data is stored geographically</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">Data Deletion</p>
                      <p className="text-sm text-gray-600">Secure data wiping when you delete resources</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Infrastructure Security */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
              Infrastructure Security
            </h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Network Security</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• DDoS protection</li>
                    <li>• Web application firewall (WAF)</li>
                    <li>• Network segmentation</li>
                    <li>• Intrusion detection systems</li>
                    <li>• VPN support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Physical Security</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Tier III+ data centers</li>
                    <li>• 24/7 security monitoring</li>
                    <li>• Biometric access controls</li>
                    <li>• Redundant power systems</li>
                    <li>• Climate-controlled facilities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Operational Security</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Regular security audits</li>
                    <li>• Penetration testing</li>
                    <li>• Vulnerability scanning</li>
                    <li>• Incident response plan</li>
                    <li>• Security training for staff</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Security Best Practices */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
              Security Best Practices for Users
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3">
                  ✓ Enable Two-Factor Authentication
                </h3>
                <p className="text-sm text-gray-600">
                  Add an extra layer of security to your account with 2FA.
                </p>
              </Card>
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3">
                  ✓ Use Strong Passwords
                </h3>
                <p className="text-sm text-gray-600">
                  Create unique, complex passwords for your CloudDesk account.
                </p>
              </Card>
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3">
                  ✓ Regular Backups
                </h3>
                <p className="text-sm text-gray-600">
                  Create manual snapshots before major changes or updates.
                </p>
              </Card>
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3">
                  ✓ Review Access Logs
                </h3>
                <p className="text-sm text-gray-600">
                  Regularly check your account activity for suspicious access.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-8 py-16 text-center">
            <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Questions About Security?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our security team is here to answer your questions and provide detailed information.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/support">
                <Button variant="primary" size="lg">
                  Contact Security Team
                </Button>
              </Link>
              <Link to="/docs">
                <Button variant="secondary" size="lg">
                  Read Documentation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
