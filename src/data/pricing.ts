import type { PricingConfig, Instance, GpuType } from './types';

/**
 * Pricing configuration for CloudDesk EDU
 * All prices are in USD per hour
 */
export const PRICING_CONFIG: PricingConfig = {
  // Base compute costs
  basePerCpuPerHour: 0.04, // $0.04 per vCPU per hour
  basePerRamGbPerHour: 0.01, // $0.01 per GB RAM per hour
  basePerStorageGbPerHour: 0.001, // $0.001 per GB storage per hour

  // GPU additional costs (per hour)
  gpuExtraPerHour: {
    NONE: 0.0,
    T4: 0.50,           // Entry-level ML/inference
    V100: 2.50,         // Professional deep learning
    A10: 1.80,          // Professional graphics/AI
    A100: 4.00,         // Enterprise AI training
    H100: 8.00,         // Next-gen enterprise AI
    RTX_4090: 2.80,     // Workstation rendering
    RTX_A6000: 3.20,    // Professional visualization
  },

  // Markup rate (1.0 = no markup, 1.1 = 10% markup)
  markupRate: 1.0,
};

/**
 * Calculate hourly cost for an instance
 */
export function calculateHourlyCost(instance: Instance): number {
  const cpuCost = instance.cpuCores * PRICING_CONFIG.basePerCpuPerHour;
  const ramCost = instance.ramGb * PRICING_CONFIG.basePerRamGbPerHour;
  const storageCost = instance.storageGb * PRICING_CONFIG.basePerStorageGbPerHour;
  const gpuCost = PRICING_CONFIG.gpuExtraPerHour[instance.gpu];

  const totalCost = (cpuCost + ramCost + storageCost + gpuCost) * PRICING_CONFIG.markupRate;

  return Math.round(totalCost * 100) / 100; // Round to 2 decimal places
}

/**
 * Calculate monthly cost estimate (based on 8 hours/day, 22 days/month)
 */
export function calculateMonthlyCost(instance: Instance): number {
  const hourlyCost = calculateHourlyCost(instance);
  const monthlyHours = 8 * 22; // 176 hours
  return Math.round(hourlyCost * monthlyHours * 100) / 100;
}

/**
 * Calculate cost for specific hours
 */
export function calculateCostForHours(instance: Instance, hours: number): number {
  const hourlyCost = calculateHourlyCost(instance);
  return Math.round(hourlyCost * hours * 100) / 100;
}

/**
 * Get GPU cost per hour
 */
export function getGpuCost(gpuType: GpuType): number {
  return PRICING_CONFIG.gpuExtraPerHour[gpuType];
}

/**
 * Format cost as currency string
 */
export function formatCost(cost: number): string {
  return `$${cost.toFixed(2)}`;
}

/**
 * Calculate cost breakdown for an instance
 */
export interface CostBreakdown {
  cpu: number;
  ram: number;
  storage: number;
  gpu: number;
  total: number;
}

export function calculateCostBreakdown(instance: Instance): CostBreakdown {
  const cpuCost = instance.cpuCores * PRICING_CONFIG.basePerCpuPerHour;
  const ramCost = instance.ramGb * PRICING_CONFIG.basePerRamGbPerHour;
  const storageCost = instance.storageGb * PRICING_CONFIG.basePerStorageGbPerHour;
  const gpuCost = PRICING_CONFIG.gpuExtraPerHour[instance.gpu];

  const subtotal = cpuCost + ramCost + storageCost + gpuCost;
  const total = subtotal * PRICING_CONFIG.markupRate;

  return {
    cpu: Math.round(cpuCost * 100) / 100,
    ram: Math.round(ramCost * 100) / 100,
    storage: Math.round(storageCost * 100) / 100,
    gpu: Math.round(gpuCost * 100) / 100,
    total: Math.round(total * 100) / 100,
  };
}
