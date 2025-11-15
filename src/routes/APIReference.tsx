import { Link } from 'react-router-dom';
import { Code, Key, Lock, Zap } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export function APIReference() {
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
          <div className="max-w-7xl mx-auto px-8 py-16">
            <Link to="/docs" className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 mb-6">
              ← Back to Documentation
            </Link>
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">
              API Reference
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Integrate CloudDesk EDU into your applications with our RESTful API. Automate desktop provisioning, management, and monitoring.
            </p>
          </div>
        </section>

        {/* Quick Start */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Key className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Authentication
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Use API keys to authenticate your requests
              </p>
              <a href="#authentication" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                Learn more →
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Zap className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Rate Limits
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                1000 requests per hour for standard plans
              </p>
              <a href="#rate-limits" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                Learn more →
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Lock className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Security
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                All API requests use HTTPS encryption
              </p>
              <Link to="/security" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                Learn more →
              </Link>
            </Card>
          </div>

          {/* API Endpoints */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">Endpoints</h3>
                <nav className="space-y-2">
                  <a href="#authentication" className="block text-sm text-gray-600 hover:text-gray-900">
                    Authentication
                  </a>
                  <a href="#instances" className="block text-sm text-indigo-600 hover:text-indigo-700">
                    Instances
                  </a>
                  <a href="#presets" className="block text-sm text-gray-600 hover:text-gray-900">
                    Presets
                  </a>
                  <a href="#snapshots" className="block text-sm text-gray-600 hover:text-gray-900">
                    Snapshots
                  </a>
                  <a href="#usage" className="block text-sm text-gray-600 hover:text-gray-900">
                    Usage & Billing
                  </a>
                  <a href="#rate-limits" className="block text-sm text-gray-600 hover:text-gray-900">
                    Rate Limits
                  </a>
                </nav>
              </Card>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Authentication */}
              <div id="authentication">
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Authentication
                  </h2>
                <p className="text-gray-600 mb-6">
                  Authenticate your API requests using an API key. Include your API key in the Authorization header.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 mb-4">
                  <code className="text-sm text-emerald-400">
                    curl https://api.clouddesk.edu/v1/instances \<br/>
                    &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                  </code>
                </div>
                  <p className="text-sm text-gray-600">
                    Get your API key from the <Link to="/dashboard" className="text-indigo-600 hover:text-indigo-700">Dashboard → Settings → API Keys</Link>
                  </p>
                </Card>
              </div>

              {/* Instances */}
              <div id="instances">
                <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Instances
                </h2>

                {/* List Instances */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="success">GET</Badge>
                    <code className="text-sm font-mono text-gray-900">/v1/instances</code>
                  </div>
                  <p className="text-gray-600 mb-4">
                    List all instances in your account.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <code className="text-sm text-emerald-400">
                      curl https://api.clouddesk.edu/v1/instances \<br/>
                      &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                    </code>
                  </div>
                </div>

                {/* Create Instance */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="info">POST</Badge>
                    <code className="text-sm font-mono text-gray-900">/v1/instances</code>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Create a new instance.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-6 mb-4">
                    <code className="text-sm text-emerald-400">
                      curl -X POST https://api.clouddesk.edu/v1/instances \<br/>
                      &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br/>
                      &nbsp;&nbsp;-H "Content-Type: application/json" \<br/>
                      &nbsp;&nbsp;-d '&#123;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;"name": "My Desktop",<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;"preset": "development",<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;"region": "us-east"<br/>
                      &nbsp;&nbsp;&#125;'
                    </code>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Parameters:</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><code className="text-indigo-600">name</code> (string, required) - Instance name</li>
                      <li><code className="text-indigo-600">preset</code> (string, required) - Preset ID</li>
                      <li><code className="text-indigo-600">region</code> (string, required) - Region code</li>
                      <li><code className="text-indigo-600">cpu</code> (number, optional) - CPU cores</li>
                      <li><code className="text-indigo-600">ram</code> (number, optional) - RAM in GB</li>
                    </ul>
                  </div>
                </div>

                {/* Get Instance */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="success">GET</Badge>
                    <code className="text-sm font-mono text-gray-900">/v1/instances/:id</code>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Get details of a specific instance.
                  </p>
                </div>

                {/* Start Instance */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="info">POST</Badge>
                    <code className="text-sm font-mono text-gray-900">/v1/instances/:id/start</code>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Start a stopped instance.
                  </p>
                </div>

                {/* Stop Instance */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="info">POST</Badge>
                    <code className="text-sm font-mono text-gray-900">/v1/instances/:id/stop</code>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Stop a running instance.
                  </p>
                </div>

                {/* Delete Instance */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="error">DELETE</Badge>
                    <code className="text-sm font-mono text-gray-900">/v1/instances/:id</code>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Delete an instance permanently.
                  </p>
                </div>
                </Card>
              </div>

              {/* Presets */}
              <div id="presets">
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Presets
                  </h2>

                  {/* List Presets */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="success">GET</Badge>
                      <code className="text-sm font-mono text-gray-900">/v1/presets</code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      List all available presets with their configurations.
                    </p>
                    <div className="bg-gray-900 rounded-lg p-6">
                      <code className="text-sm text-emerald-400">
                        curl https://api.clouddesk.edu/v1/presets \<br/>
                        &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                      </code>
                    </div>
                  </div>

                  {/* Get Preset */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="success">GET</Badge>
                      <code className="text-sm font-mono text-gray-900">/v1/presets/:id</code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Get details of a specific preset including software packages and pricing.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Snapshots */}
              <div id="snapshots">
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Snapshots
                  </h2>

                  {/* List Snapshots */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="success">GET</Badge>
                      <code className="text-sm font-mono text-gray-900">/v1/snapshots</code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      List all snapshots in your account.
                    </p>
                  </div>

                  {/* Create Snapshot */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="info">POST</Badge>
                      <code className="text-sm font-mono text-gray-900">/v1/instances/:id/snapshots</code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Create a snapshot of an instance.
                    </p>
                    <div className="bg-gray-900 rounded-lg p-6 mb-4">
                      <code className="text-sm text-emerald-400">
                        curl -X POST https://api.clouddesk.edu/v1/instances/inst_abc123/snapshots \<br/>
                        &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br/>
                        &nbsp;&nbsp;-H "Content-Type: application/json" \<br/>
                        &nbsp;&nbsp;-d '&#123;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;"name": "Before Update",<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;"description": "Snapshot before system update"<br/>
                        &nbsp;&nbsp;&#125;'
                      </code>
                    </div>
                  </div>

                  {/* Restore Snapshot */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="info">POST</Badge>
                      <code className="text-sm font-mono text-gray-900">/v1/snapshots/:id/restore</code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Restore an instance from a snapshot.
                    </p>
                  </div>

                  {/* Delete Snapshot */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="error">DELETE</Badge>
                      <code className="text-sm font-mono text-gray-900">/v1/snapshots/:id</code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Delete a snapshot permanently.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Usage */}
              <div id="usage">
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Usage & Billing
                  </h2>

                  {/* Get Usage */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="success">GET</Badge>
                      <code className="text-sm font-mono text-gray-900">/v1/usage</code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Get usage statistics for the current billing period.
                    </p>
                    <div className="bg-gray-900 rounded-lg p-6 mb-4">
                      <code className="text-sm text-emerald-400">
                        curl https://api.clouddesk.edu/v1/usage?start=2025-01-01&end=2025-01-31 \<br/>
                        &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                      </code>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Query Parameters:</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><code className="text-indigo-600">start</code> (string, optional) - Start date (YYYY-MM-DD)</li>
                        <li><code className="text-indigo-600">end</code> (string, optional) - End date (YYYY-MM-DD)</li>
                        <li><code className="text-indigo-600">instance_id</code> (string, optional) - Filter by instance</li>
                      </ul>
                    </div>
                  </div>

                  {/* Get Invoice */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="success">GET</Badge>
                      <code className="text-sm font-mono text-gray-900">/v1/invoices/:id</code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Get details of a specific invoice.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Response Format */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Response Format
                </h2>
                <p className="text-gray-600 mb-6">
                  All API responses are returned in JSON format.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <code className="text-sm text-emerald-400">
                    &#123;<br/>
                    &nbsp;&nbsp;"id": "inst_abc123",<br/>
                    &nbsp;&nbsp;"name": "My Desktop",<br/>
                    &nbsp;&nbsp;"status": "running",<br/>
                    &nbsp;&nbsp;"preset": "development",<br/>
                    &nbsp;&nbsp;"region": "us-east",<br/>
                    &nbsp;&nbsp;"cpu": 4,<br/>
                    &nbsp;&nbsp;"ram": 8,<br/>
                    &nbsp;&nbsp;"storage": 50,<br/>
                    &nbsp;&nbsp;"created_at": "2025-01-15T10:30:00Z"<br/>
                    &#125;
                  </code>
                </div>
              </Card>

              {/* Rate Limits */}
              <div id="rate-limits">
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Rate Limits
                  </h2>
                  <p className="text-gray-600 mb-6">
                    API rate limits vary by plan to ensure fair usage and system stability.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Starter Plan</p>
                        <p className="text-sm text-gray-600">500 requests per hour</p>
                      </div>
                      <Badge variant="neutral">500/hr</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Professional Plan</p>
                        <p className="text-sm text-gray-600">2,000 requests per hour</p>
                      </div>
                      <Badge variant="info">2,000/hr</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Enterprise Plan</p>
                        <p className="text-sm text-gray-600">10,000 requests per hour</p>
                      </div>
                      <Badge variant="success">10,000/hr</Badge>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-900">
                      <strong>Rate Limit Headers:</strong> Each response includes <code className="text-amber-700">X-RateLimit-Limit</code>, <code className="text-amber-700">X-RateLimit-Remaining</code>, and <code className="text-amber-700">X-RateLimit-Reset</code> headers to help you track your usage.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Error Handling */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Error Handling
                </h2>
                <p className="text-gray-600 mb-6">
                  The API uses standard HTTP status codes to indicate success or failure.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <Badge variant="success">200</Badge>
                    <div>
                      <p className="font-medium text-gray-900">OK</p>
                      <p className="text-sm text-gray-600">Request succeeded</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Badge variant="success">201</Badge>
                    <div>
                      <p className="font-medium text-gray-900">Created</p>
                      <p className="text-sm text-gray-600">Resource created successfully</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Badge variant="warning">400</Badge>
                    <div>
                      <p className="font-medium text-gray-900">Bad Request</p>
                      <p className="text-sm text-gray-600">Invalid parameters or malformed request</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Badge variant="error">401</Badge>
                    <div>
                      <p className="font-medium text-gray-900">Unauthorized</p>
                      <p className="text-sm text-gray-600">Invalid or missing API key</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Badge variant="error">403</Badge>
                    <div>
                      <p className="font-medium text-gray-900">Forbidden</p>
                      <p className="text-sm text-gray-600">Valid API key but insufficient permissions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Badge variant="error">404</Badge>
                    <div>
                      <p className="font-medium text-gray-900">Not Found</p>
                      <p className="text-sm text-gray-600">Resource doesn't exist</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Badge variant="error">429</Badge>
                    <div>
                      <p className="font-medium text-gray-900">Too Many Requests</p>
                      <p className="text-sm text-gray-600">Rate limit exceeded</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Badge variant="error">500</Badge>
                    <div>
                      <p className="font-medium text-gray-900">Internal Server Error</p>
                      <p className="text-sm text-gray-600">Something went wrong on our end</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-sm text-gray-400 mb-2">Error Response Format:</p>
                  <code className="text-sm text-emerald-400">
                    &#123;<br/>
                    &nbsp;&nbsp;"error": &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;"code": "invalid_request",<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;"message": "Missing required parameter: name",<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;"param": "name"<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &#125;
                  </code>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <Card className="p-12 bg-indigo-50 border-indigo-200 text-center">
            <Code className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get your API key and start integrating CloudDesk EDU into your applications.
            </p>
            <Link to="/dashboard">
              <Button variant="primary" size="lg">
                Get API Key
              </Button>
            </Link>
          </Card>
        </section>
      </div>
    </div>
  );
}
