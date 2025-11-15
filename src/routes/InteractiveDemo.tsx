import { Link } from 'react-router-dom';
import { Zap, Code, Database, Cpu } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { InteractiveCard } from '../components/ui/InteractiveCard';
import { Button } from '../components/ui/Button';

export function InteractiveDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/">
                <img src="/logo-clouddesk.png" alt="CloudDesk EDU" className="h-9 w-auto object-contain hover:opacity-80 transition-opacity" />
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Demo Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Interactive Card Demo
          </h1>
          <p className="text-xl text-gray-600">
            Hover over the cards below to see the spotlight effect following your mouse
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <InteractiveCard className="group">
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-indigo-300 transition-all cursor-pointer">
              <Zap className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Fast Performance
              </h3>
              <p className="text-gray-600 mb-4">
                Lightning-fast cloud desktops with instant provisioning and high-performance computing resources.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• SSD Storage</li>
                <li>• High-speed networking</li>
                <li>• Optimized for performance</li>
              </ul>
            </Card>
          </InteractiveCard>

          <InteractiveCard className="group">
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-indigo-300 transition-all cursor-pointer">
              <Code className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Developer Tools
              </h3>
              <p className="text-gray-600 mb-4">
                Pre-installed development tools and environments ready to use out of the box.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• VS Code, Git, Docker</li>
                <li>• Multiple language support</li>
                <li>• Custom configurations</li>
              </ul>
            </Card>
          </InteractiveCard>

          <InteractiveCard className="group">
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-indigo-300 transition-all cursor-pointer">
              <Database className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Data Science Ready
              </h3>
              <p className="text-gray-600 mb-4">
                Powerful configurations for data analysis, machine learning, and AI workloads.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Python, Jupyter, TensorFlow</li>
                <li>• GPU acceleration</li>
                <li>• Large datasets support</li>
              </ul>
            </Card>
          </InteractiveCard>

          <InteractiveCard className="group">
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-indigo-300 transition-all cursor-pointer">
              <Cpu className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Scalable Resources
              </h3>
              <p className="text-gray-600 mb-4">
                Scale your computing resources up or down based on your needs, pay only for what you use.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Flexible CPU & RAM</li>
                <li>• Auto-scaling options</li>
                <li>• Cost optimization</li>
              </ul>
            </Card>
          </InteractiveCard>
        </div>

        {/* Instructions */}
        <Card className="p-8 bg-indigo-50 border-indigo-200 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            How It Works
          </h3>
          <p className="text-gray-600 mb-4">
            The spotlight effect uses a radial gradient that follows your mouse position in real-time. 
            It creates an interactive and engaging user experience without being too distracting.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/create">
              <Button variant="primary">
                Try Creating Instance
              </Button>
            </Link>
            <Link to="/">
              <Button variant="secondary">
                Back to Home
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
