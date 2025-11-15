import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useInstancesDemo } from '../hooks/useInstancesDemo';
import { buildUsage } from '../data/usage';
import { IMAGE_PRESETS } from '../data/images';
import { REGION_NAMES, GPU_SPECS } from '../data/types';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { 
  ArrowLeft, 
  ExternalLink, 
  Play, 
  Pause, 
  Trash2, 
  Save,
  Cpu,
  MemoryStick,
  HardDrive,
  Zap,
  Globe,
  Monitor,
  Calendar,
  X
} from 'lucide-react';

export default function InstanceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { instances, updateStatus, deleteInstance } = useInstancesDemo();
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [isActionLoading, setIsActionLoading] = useState(false);

  const instance = instances.find(inst => inst.id === id);

  // Show toast helper
  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  // Handle start/stop
  const handleToggleStatus = async () => {
    if (!instance) return;
    setIsActionLoading(true);
    
    const newStatus = instance.status === 'RUNNING' ? 'STOPPED' : 'RUNNING';
    await updateStatus(instance.id, newStatus);
    
    setIsActionLoading(false);
    showToast(newStatus === 'RUNNING' ? 'Desktop started successfully' : 'Desktop stopped');
  };

  // Handle delete
  const handleDelete = async () => {
    if (!instance) return;
    setIsActionLoading(true);
    
    await deleteInstance(instance.id);
    setShowDeleteModal(false);
    showToast('Desktop deleted successfully');
    
    setTimeout(() => navigate('/dashboard'), 500);
  };

  // Handle backup
  const handleBackup = () => {
    showToast('Backup created (demo)');
  };

  // Not found state
  if (!instance) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-8">
        <Card className="p-16 text-center">
          <Monitor className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Desktop not found</h2>
          <p className="text-gray-600 mb-6">
            This desktop may have been deleted or you don't have access.
          </p>
          <Link to="/dashboard">
            <Button>Back to Dashboard</Button>
          </Link>
        </Card>
      </div>
    );
  }

  // Get preset info
  const preset = IMAGE_PRESETS.find(p => p.id === instance.imageId);
  
  // Get usage data
  const usage = buildUsage(instances).find(u => u.instanceId === instance.id);
  const hoursUsed = usage?.hours || 0;
  const estimatedCost = usage?.estimatedCost || 0;

  // Format created date
  const createdDate = new Date(instance.createdAt);
  const daysAgo = Math.floor((Date.now() - createdDate.getTime()) / (1000 * 60 * 60 * 24));
  const createdText = daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo} days ago`;

  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      {/* Toast */}
      {toast && (
        <div className="fixed top-20 right-8 z-50 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg animate-fade-in">
          {toast}
        </div>
      )}

      {/* Page Header */}
      <div className="mb-8">
        {/* Back button */}
        <Link 
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Header card */}
        <Card className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            {/* Left: Title and metadata */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-2xl font-semibold text-gray-900">{instance.name}</h1>
                <Badge variant={instance.status === 'RUNNING' ? 'success' : instance.status === 'STOPPED' ? 'neutral' : 'info'}>
                  {instance.status === 'RUNNING' ? 'Running' : instance.status === 'STOPPED' ? 'Stopped' : 'Provisioning'}
                </Badge>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  <span>{preset?.name || 'Custom'}</span>
                </div>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>{REGION_NAMES[instance.region]}</span>
                </div>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Created {createdText}</span>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-wrap gap-3">
              {instance.status === 'RUNNING' && (
                <Button onClick={() => setShowConnectModal(true)}>
                  <ExternalLink className="w-4 h-4" />
                  Connect
                </Button>
              )}
              
              {(instance.status === 'RUNNING' || instance.status === 'STOPPED') && (
                <Button 
                  variant="secondary" 
                  onClick={handleToggleStatus}
                  disabled={isActionLoading}
                >
                  {instance.status === 'RUNNING' ? (
                    <>
                      <Pause className="w-4 h-4" />
                      {isActionLoading ? 'Stopping...' : 'Stop'}
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      {isActionLoading ? 'Starting...' : 'Start'}
                    </>
                  )}
                </Button>
              )}

              <Button variant="secondary" onClick={handleBackup}>
                <Save className="w-4 h-4" />
                Backup
              </Button>

              <Button 
                variant="destructive" 
                onClick={() => setShowDeleteModal(true)}
                disabled={isActionLoading}
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Configuration */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Configuration</h2>
            
            <dl className="space-y-6">
              {/* CPU */}
              <div className="flex items-start gap-4">
                <Cpu className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <dt className="text-sm font-medium text-gray-500 mb-1">CPU Cores</dt>
                  <dd className="text-base font-medium text-gray-900">{instance.cpuCores} vCPU</dd>
                </div>
              </div>

              {/* RAM */}
              <div className="flex items-start gap-4">
                <MemoryStick className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <dt className="text-sm font-medium text-gray-500 mb-1">Memory (RAM)</dt>
                  <dd className="text-base font-medium text-gray-900">{instance.ramGb} GB</dd>
                </div>
              </div>

              {/* Storage */}
              <div className="flex items-start gap-4">
                <HardDrive className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <dt className="text-sm font-medium text-gray-500 mb-1">Storage</dt>
                  <dd className="text-base font-medium text-gray-900">{instance.storageGb} GB SSD</dd>
                  {/* Optional: Storage usage bar */}
                  <div className="mt-2">
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-600 rounded-full" 
                        style={{ width: '56%' }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {Math.floor(instance.storageGb * 0.56)} GB used (56%)
                    </p>
                  </div>
                </div>
              </div>

              {/* GPU */}
              <div className="flex items-start gap-4">
                <Zap className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <dt className="text-sm font-medium text-gray-500 mb-1">Graphics (GPU)</dt>
                  <dd className="text-base font-medium text-gray-900">
                    {GPU_SPECS[instance.gpu].name}
                  </dd>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6" />

              {/* Region */}
              <div className="flex items-start gap-4">
                <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <dt className="text-sm font-medium text-gray-500 mb-1">Region</dt>
                  <dd className="text-base font-medium text-gray-900">{REGION_NAMES[instance.region]}</dd>
                </div>
              </div>

              {/* Operating System */}
              <div className="flex items-start gap-4">
                <Monitor className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <dt className="text-sm font-medium text-gray-500 mb-1">Operating System</dt>
                  <dd className="text-base font-medium text-gray-900">{preset?.name || 'Custom Image'}</dd>
                </div>
              </div>

              {/* Preset Template */}
              {preset && (
                <div className="flex items-start gap-4">
                  <Monitor className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div className="flex-1">
                    <dt className="text-sm font-medium text-gray-500 mb-1">Preset Template</dt>
                    <dd>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {preset.description}
                      </span>
                    </dd>
                  </div>
                </div>
              )}
            </dl>
          </Card>
        </div>

        {/* Right: Usage & Cost */}
        <div>
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Usage & Cost</h2>
            
            <div className="space-y-6">
              {/* Hours Used */}
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Hours Used (This Month)</p>
                <p className="text-2xl font-semibold text-gray-900">{hoursUsed.toFixed(1)} hours</p>
                <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
              </div>

              <div className="border-t border-gray-200" />

              {/* Estimated Cost */}
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Estimated Cost (This Month)</p>
                <p className="text-3xl font-semibold text-gray-900">${estimatedCost.toFixed(2)}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Based on ${(estimatedCost / hoursUsed || 0).toFixed(2)}/hour
                </p>
              </div>

              {/* Simple sparkline placeholder */}
              <div className="pt-4">
                <p className="text-xs font-medium text-gray-500 mb-2">Usage trend (last 7 days)</p>
                <div className="h-16 flex items-end gap-1">
                  {[40, 65, 45, 80, 60, 90, 70].map((height, i) => (
                    <div 
                      key={i}
                      className="flex-1 bg-indigo-600 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {instance.status === 'STOPPED' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
                  <p className="text-sm text-blue-900">
                    Instance is stopped. No charges are accruing.
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Connect Modal */}
      {showConnectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-lg w-full p-8 relative">
            <button
              onClick={() => setShowConnectModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Connect to {instance.name}
            </h3>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-900">
                <strong>Demo Mode:</strong> This is a demonstration. In a real product, this would open a remote desktop session using RDP, VNC, or a browser-based client.
              </p>
            </div>

            <div className="space-y-3">
              <Button className="w-full" onClick={() => setShowConnectModal(false)}>
                <ExternalLink className="w-4 h-4" />
                Open in Browser (Demo)
              </Button>
              <Button variant="secondary" className="w-full" onClick={() => setShowConnectModal(false)}>
                Download RDP File (Demo)
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-900 mb-2">Demo Credentials</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Username:</span>
                  <span className="text-gray-900 font-mono">clouddesk</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Password:</span>
                  <span className="text-gray-900 font-mono">••••••••</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Delete Desktop?
                </h3>
                <p className="text-sm text-gray-600">
                  This will permanently delete <strong>{instance.name}</strong> and all associated data. This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
              <p className="text-sm text-amber-900">
                Make sure you have backed up any important data before deleting.
              </p>
            </div>

            <div className="flex gap-3">
              <Button 
                variant="secondary" 
                className="flex-1"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                className="flex-1"
                onClick={handleDelete}
                disabled={isActionLoading}
              >
                {isActionLoading ? 'Deleting...' : 'Delete Desktop'}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
