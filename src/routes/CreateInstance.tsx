import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Monitor, Code, BarChart, Box } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { InteractiveCard } from '../components/ui/InteractiveCard';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { useInstancesDemo } from '../hooks/useInstancesDemo';
import { IMAGE_PRESETS } from '../data/images';
import { calculateHourlyCost, calculateMonthlyCost } from '../data/pricing';
import type { Region, GpuType } from '../data/types';

const PRESET_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'general-purpose': Monitor,
  'dev-engineering': Code,
  'data-science-ml': BarChart,
  '3d-rendering-cad': Box,
  'windows-general': Monitor,
};

const REGIONS: { value: Region; label: string }[] = [
  { value: 'US_EAST_1', label: 'US East (N. Virginia)' },
  { value: 'US_EAST_2', label: 'US East (Ohio)' },
  { value: 'US_WEST_1', label: 'US West (N. California)' },
  { value: 'US_WEST_2', label: 'US West (Oregon)' },
  { value: 'EU_WEST_1', label: 'EU West (Ireland)' },
  { value: 'EU_WEST_2', label: 'EU West (London)' },
  { value: 'EU_CENTRAL_1', label: 'EU Central (Frankfurt)' },
  { value: 'ASIA_PACIFIC_1', label: 'Asia Pacific (Singapore)' },
  { value: 'ASIA_PACIFIC_2', label: 'Asia Pacific (Tokyo)' },
];

const GPU_OPTIONS: { value: GpuType; label: string; description: string; priceImpact: string }[] = [
  { value: 'NONE', label: 'None', description: 'No GPU (most workloads)', priceImpact: '$0.00/hr' },
  { value: 'T4', label: 'NVIDIA T4', description: 'Entry - ML inference, light training', priceImpact: '+$0.50/hr' },
  { value: 'A10', label: 'NVIDIA A10', description: 'Professional - Graphics, AI inference', priceImpact: '+$1.80/hr' },
  { value: 'V100', label: 'NVIDIA V100', description: 'Professional - Deep learning, HPC', priceImpact: '+$2.50/hr' },
  { value: 'RTX_4090', label: 'NVIDIA RTX 4090', description: 'Workstation - 3D rendering, game dev', priceImpact: '+$2.80/hr' },
  { value: 'RTX_A6000', label: 'NVIDIA RTX A6000', description: 'Workstation - Professional CAD', priceImpact: '+$3.20/hr' },
  { value: 'A100', label: 'NVIDIA A100', description: 'Enterprise - Large-scale AI training', priceImpact: '+$4.00/hr' },
  { value: 'H100', label: 'NVIDIA H100', description: 'Enterprise - Generative AI, LLMs', priceImpact: '+$8.00/hr' },
];

export default function CreateInstance() {
  const navigate = useNavigate();
  const { createInstance } = useInstancesDemo();

  // Form state
  const [selectedPresetId, setSelectedPresetId] = useState<string>('dev-engineering');
  const [instanceName, setInstanceName] = useState('');
  const [region, setRegion] = useState<Region>('US_EAST_1');
  const [cpuCores, setCpuCores] = useState(4);
  const [ramGb, setRamGb] = useState(8);
  const [storageGb, setStorageGb] = useState(50);
  const [gpu, setGpu] = useState<GpuType>('NONE');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle preset selection
  const handlePresetSelect = (presetId: string) => {
    const preset = IMAGE_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;

    setSelectedPresetId(presetId);
    
    // Pre-fill form with preset recommendations if fields are at default values
    if (cpuCores === 4 || cpuCores === 2) {
      setCpuCores(preset.recommendedCpu);
    }
    if (ramGb === 8 || ramGb === 4) {
      setRamGb(preset.recommendedRamGb);
    }
    if (storageGb === 50 || storageGb === 30) {
      setStorageGb(preset.recommendedStorageGb);
    }
    if (gpu === 'NONE' && preset.supportsGpu) {
      setGpu('T4');
    }
  };

  // Calculate costs
  const { hourlyCost, monthlyCost } = useMemo(() => {
    const mockInstance = {
      id: 'temp',
      name: 'temp',
      imageId: selectedPresetId,
      status: 'STOPPED' as const,
      cpuCores,
      ramGb,
      storageGb,
      gpu,
      region,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return {
      hourlyCost: calculateHourlyCost(mockInstance),
      monthlyCost: calculateMonthlyCost(mockInstance),
    };
  }, [selectedPresetId, cpuCores, ramGb, storageGb, gpu, region]);

  // Validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!instanceName.trim()) {
      newErrors.instanceName = 'Instance name is required';
    } else if (instanceName.length < 3) {
      newErrors.instanceName = 'Instance name must be at least 3 characters';
    } else if (instanceName.length > 50) {
      newErrors.instanceName = 'Instance name must be less than 50 characters';
    }

    if (cpuCores < 1 || cpuCores > 16) {
      newErrors.cpuCores = 'CPU cores must be between 1 and 16';
    }

    if (ramGb < 2 || ramGb > 64) {
      newErrors.ramGb = 'RAM must be between 2 and 64 GB';
    }

    if (storageGb < 20 || storageGb > 500) {
      newErrors.storageGb = 'Storage must be between 20 and 500 GB';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      createInstance({
        name: instanceName.trim(),
        imageId: selectedPresetId,
        cpuCores,
        ramGb,
        storageGb,
        gpu,
        region,
      });

      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to create instance:', error);
      setErrors({ submit: 'Failed to create instance. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="mb-3 text-sm text-gray-500">
          <Link to="/dashboard" className="hover:text-gray-900">
            Dashboard
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Create Desktop</span>
        </div>
        <h1 className="mb-2 text-2xl font-semibold text-gray-900">Create Desktop</h1>
        <p className="max-w-2xl text-sm text-gray-500">
          Choose a preset optimized for your workflow, then customize resources to match your needs.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Preset Selection */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Choose a Preset</h2>
            <p className="mb-6 text-sm text-gray-500">
              Select a configuration optimized for your workflow. You can adjust resources after selecting.
            </p>
            <div className="space-y-4">
              {IMAGE_PRESETS.map((preset) => {
                const Icon = PRESET_ICONS[preset.id] || Monitor;
                const isSelected = selectedPresetId === preset.id;

                return (
                  <InteractiveCard
                    key={preset.id}
                    className="group"
                  >
                    <Card
                      className={`cursor-pointer p-5 transition-all bg-white ${
                        isSelected
                          ? 'border-2 border-indigo-600 shadow-md'
                          : 'border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                      onClick={() => handlePresetSelect(preset.id)}
                    >
                      <div className="flex items-start justify-between">
                        <Icon className="h-8 w-8 text-indigo-600" />
                        {isSelected && (
                          <CheckCircle className="h-6 w-6 text-indigo-600" />
                        )}
                      </div>
                      <div className="mt-4">
                        <h3 className="mb-2 text-base font-semibold text-gray-900">
                          {preset.name}
                        </h3>
                        <p className="mb-4 text-sm leading-relaxed text-gray-600">
                          {preset.description}
                        </p>
                        <div className="space-y-1 text-sm text-gray-500">
                          <p>{preset.recommendedCpu} vCPU</p>
                          <p>{preset.recommendedRamGb} GB RAM</p>
                          <p>{preset.recommendedStorageGb} GB Storage</p>
                          <p>{preset.supportsGpu ? 'GPU Supported' : 'No GPU'}</p>
                        </div>
                      </div>
                    </Card>
                  </InteractiveCard>
                );
              })}
            </div>
          </div>

          {/* Configuration Form */}
          <div className="lg:col-span-3">
            <Card className="p-8">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">Configuration</h2>
              <div className="space-y-6">
                {/* Instance Name */}
                <div>
                  <label htmlFor="instanceName" className="mb-2 block text-sm font-medium text-gray-900">
                    Instance Name *
                  </label>
                  <Input
                    id="instanceName"
                    type="text"
                    placeholder="e.g., My Ubuntu Desktop"
                    value={instanceName}
                    onChange={(e) => setInstanceName(e.target.value)}
                    className={errors.instanceName ? 'border-red-500' : ''}
                  />
                  {errors.instanceName && (
                    <p className="mt-1 text-sm text-red-600">{errors.instanceName}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    Choose a descriptive name to identify this desktop.
                  </p>
                </div>

                {/* Region */}
                <div>
                  <label htmlFor="region" className="mb-2 block text-sm font-medium text-gray-900">
                    Region *
                  </label>
                  <Select
                    id="region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value as Region)}
                  >
                    {REGIONS.map((r) => (
                      <option key={r.value} value={r.value}>
                        {r.label}
                      </option>
                    ))}
                  </Select>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose the region closest to you for best performance.
                  </p>
                </div>

                {/* CPU Cores */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="cpuCores" className="text-sm font-medium text-gray-900">
                      CPU Cores *
                    </label>
                    <span className="text-sm font-semibold text-indigo-600">
                      {cpuCores} vCPU
                    </span>
                  </div>
                  <input
                    id="cpuCores"
                    type="range"
                    min="1"
                    max="16"
                    step="1"
                    value={cpuCores}
                    onChange={(e) => setCpuCores(parseInt(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-indigo-600"
                  />
                  <div className="mt-2 flex justify-between text-xs text-gray-400">
                    <span>1</span>
                    <span>4</span>
                    <span>8</span>
                    <span>16</span>
                  </div>
                  {errors.cpuCores && (
                    <p className="mt-1 text-sm text-red-600">{errors.cpuCores}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    More CPU cores improve performance for multi-threaded applications.
                  </p>
                </div>

                {/* RAM */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="ramGb" className="text-sm font-medium text-gray-900">
                      RAM (Memory) *
                    </label>
                    <span className="text-sm font-semibold text-indigo-600">
                      {ramGb} GB
                    </span>
                  </div>
                  <input
                    id="ramGb"
                    type="range"
                    min="2"
                    max="64"
                    step="2"
                    value={ramGb}
                    onChange={(e) => setRamGb(parseInt(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-indigo-600"
                  />
                  <div className="mt-2 flex justify-between text-xs text-gray-400">
                    <span>2</span>
                    <span>16</span>
                    <span>32</span>
                    <span>64</span>
                  </div>
                  {errors.ramGb && (
                    <p className="mt-1 text-sm text-red-600">{errors.ramGb}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    More RAM allows running more applications simultaneously.
                  </p>
                </div>

                {/* Storage */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="storageGb" className="text-sm font-medium text-gray-900">
                      Storage *
                    </label>
                    <span className="text-sm font-semibold text-indigo-600">
                      {storageGb} GB
                    </span>
                  </div>
                  <input
                    id="storageGb"
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={storageGb}
                    onChange={(e) => setStorageGb(parseInt(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-indigo-600"
                  />
                  <div className="mt-2 flex justify-between text-xs text-gray-400">
                    <span>20</span>
                    <span>100</span>
                    <span>200</span>
                    <span>500</span>
                  </div>
                  {errors.storageGb && (
                    <p className="mt-1 text-sm text-red-600">{errors.storageGb}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    Storage can be expanded later if needed.
                  </p>
                </div>

                {/* GPU */}
                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-900">
                    GPU (Graphics Processing Unit)
                  </label>
                  <div className="space-y-3">
                    {GPU_OPTIONS.map((option) => (
                      <label
                        key={option.value}
                        className={`flex cursor-pointer items-start rounded-lg border-2 p-4 transition-all ${
                          gpu === option.value
                            ? 'border-indigo-600 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="gpu"
                          value={option.value}
                          checked={gpu === option.value}
                          onChange={(e) => setGpu(e.target.value as GpuType)}
                          className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-600"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-900">
                              {option.label}
                            </span>
                            <span className="text-sm font-medium text-gray-900">
                              {option.priceImpact}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600">
                            {option.description}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    GPU is required for machine learning, 3D rendering, and graphics-intensive applications.
                  </p>
                </div>
              </div>
            </Card>

            {/* Cost Estimator */}
            <Card className="mt-6 border-indigo-200 bg-indigo-50 p-6">
              <h3 className="mb-4 text-base font-semibold text-gray-900">Cost Estimate</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-600">Estimated hourly cost</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">
                  ${hourlyCost.toFixed(2)}/hour
                </p>
              </div>
              <div className="border-t border-indigo-200 pt-4">
                <p className="text-sm text-gray-600">Estimated monthly cost</p>
                <p className="mt-1 text-xs text-gray-500">
                  (based on 8 hours/day, 22 days/month)
                </p>
                <p className="mt-2 text-2xl font-semibold text-gray-900">
                  ${monthlyCost.toFixed(2)}/month
                </p>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Actual costs may vary based on usage. You'll only be charged for running instances.
              </p>
            </Card>

            {/* Form Actions */}
            <div className="mt-8 flex justify-end gap-3">
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate('/dashboard')}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating...' : 'Create Desktop'}
              </Button>
            </div>

            {errors.submit && (
              <p className="mt-4 text-sm text-red-600">{errors.submit}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
