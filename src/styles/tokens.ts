/**
 * CloudDesk EDU Design Tokens
 * 
 * Programmatic access to design tokens for use in JavaScript/TypeScript.
 * These values mirror the Tailwind configuration.
 */

export const colors = {
  // Primary accent - teal for modern corporate feel
  primary: {
    50: '#CCFBF1',
    600: '#0F766E',
    700: '#115E59',
  },
  
  // Keep indigo for backwards compatibility, map to teal
  indigo: {
    50: '#CCFBF1',
    600: '#0F766E',
    700: '#115E59',
  },
  
  // Neutral grays
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Semantic colors
  emerald: {
    50: '#ECFDF5',
    500: '#10B981',
    700: '#047857',
  },
  
  amber: {
    50: '#FFFBEB',
    500: '#F59E0B',
    700: '#B45309',
  },
  
  red: {
    50: '#FEF2F2',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
  },
  
  blue: {
    50: '#EFF6FF',
    500: '#3B82F6',
    700: '#1D4ED8',
  },
} as const

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  base: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
} as const

export const borderRadius = {
  sm: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const

export const fontSize = {
  xs: '12px',
  sm: '13px',
  base: '14px',
  lg: '16px',
  xl: '18px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '36px',
  '5xl': '48px',
} as const

export const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
} as const

export const lineHeight = {
  tight: 1.2,
  snug: 1.3,
  normal: 1.4,
  relaxed: 1.5,
  loose: 1.6,
} as const

export const shadows = {
  sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
} as const

export const maxWidth = {
  content: '1280px',
  text: '720px',
  form: '560px',
} as const

export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1280px',
} as const

// Type exports for TypeScript
export type Color = keyof typeof colors
export type Spacing = keyof typeof spacing
export type BorderRadius = keyof typeof borderRadius
export type FontSize = keyof typeof fontSize
export type FontWeight = keyof typeof fontWeight
export type LineHeight = keyof typeof lineHeight
export type Shadow = keyof typeof shadows
export type MaxWidth = keyof typeof maxWidth
export type Breakpoint = keyof typeof breakpoints
