/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d0b10',
        panel: '#1a1620',
        'panel-2': '#211c28',
        'grid-faint': 'rgba(196,168,130,0.07)',
        'grid-strong': 'rgba(196,168,130,0.18)',
        cyan: '#5fb3ab',
        'cyan-dim': '#3d7f78',
        orange: '#e8823c',
        paper: '#f0e6d2',
        muted: '#b8a894'
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        hand: ['Caveat', 'cursive']
      },
      keyframes: {
        fadeDown: {
          from: { opacity: 0, transform: 'translateY(-12px)' },
          to: { opacity: 1, transform: 'none' }
        },
        riseIn: {
          from: { opacity: 0, transform: 'translateY(18px)' },
          to: { opacity: 1, transform: 'none' }
        },
        sceneFadeIn: {
          to: { opacity: 1 }
        }
      },
      animation: {
        fadeDown: 'fadeDown 0.8s ease-out 0.1s forwards',
        riseIn: 'riseIn 0.9s ease-out 0.5s forwards',
        riseInLate: 'riseIn 1.1s ease-out 0.7s forwards',
        sceneFadeIn: 'sceneFadeIn 2s ease-out 0.2s forwards'
      }
    }
  },
  plugins: []
}
