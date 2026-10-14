/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#101D32',
          dark: '#0B1422',
          surface: '#15243C',
          light: '#1D3252',
          hover: '#182A45',
          border: '#23395B',
          royal: '#1E3A8A',
        },
        rose: {
          DEFAULT: '#ECB7B5',
          light: '#F8E8E7',
          subtle: '#FAF0F0',
          dark: '#D49592',
          border: '#E8A5A3',
        },
        white: '#FFFFFF',
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        heading: ['"Poppins"', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(16, 29, 50, 0.05)',
        'elevated': '0 12px 36px -4px rgba(16, 29, 50, 0.08), 0 4px 12px -2px rgba(16, 29, 50, 0.04)',
        'blue': '0 8px 24px -4px rgba(16, 29, 50, 0.35)',
        'rose': '0 8px 24px -4px rgba(236, 183, 181, 0.4)',
        'dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
