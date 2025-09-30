import type { Config } from 'tailwindcss'

const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        // Primary brand colors matching design
        massa: {
          blue: {
            50: '#eef4ff',
            100: '#d9e6ff',
            200: '#b3caff',
            300: '#8daeff',
            400: '#6692ff',
            500: '#3f76ff',
            600: '#0a52ff',
            700: '#0842cc',
            800: '#063199',
            900: '#042166',
          },
          gray: {
            25: '#fcfcfd',
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1f2937',
            900: '#0b1220',
          },
          accent: {
            freedom: '#0a52ff',
            teal: '#00e0b7', // teal background for FREEDOM badge
            pink: '#ff007a', // pink text for FREEDOM
            success: '#16a34a',
            warning: '#f59e0b',
            danger: '#ef4444',
          },
        },
      },
      borderRadius: {
        'badge': '8px',
      },
    },
  },
}

export default preset


