import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function GettingStarted() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/">
                <img src="/logo-clouddesk.png" alt="CloudDesk EDU" className="h-9 w-auto object-contain hover:opacity-80 transition-opacity" />
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
              Getting Started
            </h1>
            <p className="text-xl text-gray-600">
              Create your first cloud desktop in under 5 minutes. No credit card required.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="max-w-4xl mx-auto px-8 py-16">
          <div className="space-y-12">
            {/* Step 1 */}
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Create Your Account
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Sign up for a free CloudDesk EDU account. You'll get $25 in credits to try out the platform.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                    <p className="text-sm font-medium text-gray-900 mb-2">What you'll need:</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        Valid email address
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        Password (minimum 8 characters)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        No credit card required for trial
                      </li>
                    </ul>
                  </div>
                  <Link to="/dashboard">
                    <Button variant="primary">
                      Create Account <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Choose a Preset
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Select from our pre-configured presets optimized for different workflows.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">General Purpose</h3>
                      <p className="text-sm text-gray-600 mb-3">For everyday tasks and light development</p>
                      <p className="text-xs text-gray-500">2 vCPU • 4 GB RAM • 30 GB Storage</p>
                    </div>
                    <div className="border border-indigo-200 bg-indigo-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
                      <p className="text-sm text-gray-600 mb-3">For software development</p>
                      <p className="text-xs text-gray-500">4 vCPU • 8 GB RAM • 50 GB Storage</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Data Science</h3>
                      <p className="text-sm text-gray-600 mb-3">For ML and data analysis</p>
                      <p className="text-xs text-gray-500">8 vCPU • 16 GB RAM • 100 GB Storage</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">3D Rendering</h3>
                      <p className="text-sm text-gray-600 mb-3">For graphics-intensive work</p>
                      <p className="text-xs text-gray-500">8 vCPU • 32 GB RAM • 200 GB Storage</p>
                    </div>
                  </div>
                  <Link to="/create">
                    <Button variant="secondary">
                      View All Presets <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Customize Resources
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Adjust CPU, RAM, storage, and GPU to match your needs. You can change these later.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">CPU Cores</span>
                          <span className="text-sm text-indigo-600">4 vCPU</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-indigo-600 rounded-full" style={{width: '25%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">RAM</span>
                          <span className="text-sm text-indigo-600">8 GB</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-indigo-600 rounded-full" style={{width: '12.5%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">Storage</span>
                          <span className="text-sm text-indigo-600">50 GB</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-indigo-600 rounded-full" style={{width: '10%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-5 h-5 bg-amber-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-600 text-xs font-semibold">!</span>
                    </div>
                    <p>
                      <strong>Tip:</strong> Start with the recommended settings. You can scale up or down anytime.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Deploy & Connect
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Your desktop will be ready in 2-3 minutes. Connect via browser, RDP, or VNC.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-emerald-900 mb-2">
                          Your desktop is ready!
                        </h3>
                        <p className="text-sm text-emerald-800 mb-4">
                          Click "Connect" to access your cloud desktop. We recommend using the browser-based connection for the best experience.
                        </p>
                        <Button variant="primary">
                          Connect Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Connection Methods:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-1">Browser</h4>
                        <p className="text-sm text-gray-600">No software needed</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-1">RDP</h4>
                        <p className="text-sm text-gray-600">Windows Remote Desktop</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-1">VNC</h4>
                        <p className="text-sm text-gray-600">VNC Viewer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="p-8 mt-12 bg-indigo-50 border-indigo-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What's Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Explore Features</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Learn about snapshots, backups, and team collaboration.
                </p>
                <Link to="/docs" className="text-sm text-indigo-600 hover:text-indigo-700">
                  Read Documentation →
                </Link>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Join Community</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Get help from other CloudDesk users and share tips.
                </p>
                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">
                  Visit Forum →
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Our support team is here to help you succeed.
                </p>
                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">
                  Contact Support →
                </a>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
