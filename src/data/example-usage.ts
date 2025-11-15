/**
 * Example usage of the CloudDesk EDU data layer
 * This file demonstrates how to use the data and utilities
 */

import {
  INITIAL_INSTANCES,
  IMAGE_PRESETS,
  PRICING_CONFIG,
  buildUsage,
  calculateUsageSummary,
  generateDailyUsage,
  calculateHourlyCost,
  getPresetById,
  getInstanceById,
  REGION_NAMES,
  GPU_SPECS,
} from './index';

// Example 1: Get all instances
console.log('Total instances:', INITIAL_INSTANCES.length);

// Example 2: Get a specific instance
const instance = getInstanceById('inst-001');
if (instance) {
  console.log('Instance:', instance.name);
  console.log('Region:', REGION_NAMES[instance.region]);
  console.log('GPU:', GPU_SPECS[instance.gpu].name);
}

// Example 3: Calculate costs
const hourlyCost = calculateHourlyCost(INITIAL_INSTANCES[0]);
console.log('Hourly cost:', hourlyCost);

// Example 4: Get usage data
const usageData = buildUsage(INITIAL_INSTANCES, PRICING_CONFIG);
console.log('Usage rows:', usageData.length);

// Example 5: Calculate summary
const summary = calculateUsageSummary(usageData);
console.log('Total cost:', summary.totalCost);
console.log('Total hours:', summary.totalHours);

// Example 6: Get daily usage for charts
const dailyUsage = generateDailyUsage();
console.log('Daily data points:', dailyUsage.length);

// Example 7: Get preset information
const preset = getPresetById('data-science-ml');
if (preset) {
  console.log('Preset:', preset.name);
  console.log('Recommended CPU:', preset.recommendedCpu);
}

// Example 8: List all presets
console.log('Available presets:');
IMAGE_PRESETS.forEach((preset) => {
  console.log(`- ${preset.name}: ${preset.description}`);
});
