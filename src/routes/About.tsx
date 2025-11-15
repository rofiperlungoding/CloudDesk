import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export function About() {
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

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-semibold text-gray-900 mb-6">
            Democratizing Access to Computing Power
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            CloudDesk EDU was founded with a simple mission: make powerful computing accessible to everyone, regardless of their hardware limitations or budget constraints.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower students, educators, and professionals worldwide with instant access to high-performance computing resources. We believe that financial constraints or outdated hardware should never be a barrier to learning, creating, or innovating.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where every student can run professional-grade software, every educator can provide consistent learning environments, and every professional can scale their computing power on demand—all through a simple browser.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              CloudDesk EDU was born from a real problem we experienced firsthand. As computer science students, we watched classmates struggle with outdated laptops that couldn't run the software required for coursework. Some couldn't afford expensive hardware upgrades, while others were international students who couldn't justify shipping heavy equipment across borders.
            </p>
            <p>
              We realized that in an era where powerful cloud infrastructure is readily available, there was no reason students should be limited by their local hardware. The technology existed—it just needed to be packaged in a way that was accessible, affordable, and easy to use.
            </p>
            <p>
              In 2024, we launched CloudDesk EDU with a focus on the education sector. Today, we serve thousands of students, hundreds of educational institutions, and a growing number of professionals who need flexible, on-demand computing power.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility First</h3>
              <p className="text-gray-600">
                We design for inclusivity, ensuring our platform is usable by everyone regardless of technical expertise or physical location.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                Clear pricing, honest communication, and no hidden fees. You always know exactly what you're paying for.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education Focus</h3>
              <p className="text-gray-600">
                Education is at our core. We offer special pricing for students and educators because we believe in investing in the future.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">CloudDesk by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-semibold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-semibold text-gray-900 mb-2">250+</div>
              <div className="text-gray-600">Educational Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-semibold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-semibold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Join Thousands of Users Worldwide
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your free trial today and experience the power of cloud computing.
          </p>
          <Link to="/dashboard">
            <Button variant="primary" size="lg">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
