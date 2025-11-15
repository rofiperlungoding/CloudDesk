import { Link } from 'react-router-dom';
import { MessageCircle, Users, Award, Search, Plus } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export function Community() {
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
          <div className="max-w-7xl mx-auto px-8 py-16">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="text-4xl font-semibold text-gray-900 mb-4">
                Community Forum
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with other CloudDesk users, share tips, and get help from the community.
              </p>
              
              {/* Search */}
              <div className="relative max-w-2xl mx-auto mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>

              <Button variant="primary" size="lg">
                <Plus className="w-5 h-5 mr-2" />
                Start New Discussion
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-1">2,847</div>
                <div className="text-sm text-gray-600">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-1">1,234</div>
                <div className="text-sm text-gray-600">Discussions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-1">5,678</div>
                <div className="text-sm text-gray-600">Replies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-1">342</div>
                <div className="text-sm text-gray-600">Online Now</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <nav className="space-y-2">
                  <a href="#general" className="flex items-center justify-between text-sm text-indigo-600 hover:text-indigo-700 py-2">
                    <span>General Discussion</span>
                    <Badge variant="neutral">234</Badge>
                  </a>
                  <a href="#getting-started" className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 py-2">
                    <span>Getting Started</span>
                    <Badge variant="neutral">156</Badge>
                  </a>
                  <a href="#technical" className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 py-2">
                    <span>Technical Support</span>
                    <Badge variant="neutral">89</Badge>
                  </a>
                  <a href="#feature-requests" className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 py-2">
                    <span>Feature Requests</span>
                    <Badge variant="neutral">67</Badge>
                  </a>
                  <a href="#classroom" className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 py-2">
                    <span>Classroom Mode</span>
                    <Badge variant="neutral">45</Badge>
                  </a>
                  <a href="#showcase" className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 py-2">
                    <span>Showcase</span>
                    <Badge variant="neutral">32</Badge>
                  </a>
                </nav>
              </Card>
            </div>

            {/* Discussions */}
            <div className="lg:col-span-3 space-y-4">
              {/* Pinned Discussion */}
              <Card className="p-6 border-indigo-200 bg-indigo-50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">CD</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="info">Pinned</Badge>
                      <Badge variant="success">Announcement</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Welcome to CloudDesk EDU Community!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Welcome to our community forum! This is a place to connect with other CloudDesk users, share tips and tricks, ask questions, and help each other succeed. Please read our community guidelines before posting.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        CloudDesk Team
                      </span>
                      <span>•</span>
                      <span>2 days ago</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        24 replies
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Regular Discussions */}
              <Card className="p-6 hover:border-indigo-200 transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-semibold">JD</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How to set up GPU acceleration for machine learning?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      I'm trying to set up a desktop for machine learning with GPU support. What's the best preset to use, and are there any specific configurations I should know about?
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>John Doe</span>
                      <span>•</span>
                      <span>3 hours ago</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        12 replies
                      </span>
                      <span>•</span>
                      <Badge variant="warning">Technical</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:border-indigo-200 transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-semibold">SM</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Best practices for managing classroom desktops
                    </h3>
                    <p className="text-gray-600 mb-4">
                      I'm setting up desktops for 30 students. What are some best practices for managing multiple desktops efficiently? Any tips on cost optimization?
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Sarah Miller</span>
                      <span>•</span>
                      <span>5 hours ago</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        8 replies
                      </span>
                      <span>•</span>
                      <Badge variant="info">Classroom</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:border-indigo-200 transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-semibold">MJ</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="success">Solved</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      File transfer between local machine and cloud desktop
                    </h3>
                    <p className="text-gray-600 mb-4">
                      What's the fastest way to transfer large files (10GB+) between my local machine and cloud desktop? I've been using the web interface but it's quite slow.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Mike Johnson</span>
                      <span>•</span>
                      <span>1 day ago</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        15 replies
                      </span>
                      <span>•</span>
                      <Badge variant="neutral">General</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:border-indigo-200 transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-semibold">EW</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Feature Request: Dark mode for web interface
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Would love to see a dark mode option for the web-based desktop interface. Working late at night and the bright interface is straining my eyes.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Emily Wilson</span>
                      <span>•</span>
                      <span>2 days ago</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        23 replies
                      </span>
                      <span>•</span>
                      <Badge variant="info">Feature Request</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Load More */}
              <div className="text-center pt-8">
                <Button variant="secondary">
                  Load More Discussions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-8 py-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Community Guidelines
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Be Respectful
                </h3>
                <p className="text-gray-600">
                  Treat all community members with respect. No harassment, hate speech, or personal attacks.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Stay On Topic
                </h3>
                <p className="text-gray-600">
                  Keep discussions relevant to CloudDesk EDU. Use appropriate categories for your posts.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Help Others
                </h3>
                <p className="text-gray-600">
                  Share your knowledge and help fellow users. Mark solutions when your question is answered.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
