/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"Inter"', 'sans-serif'],
        display: ['"Inter"', 'sans-serif'],
      },
      colors: {
        bg:   '#F5F6F2',
        card: '#FFFFFF',
        ink: {
          DEFAULT: '#18261E',   // rich deep forest — headlines
          mid:     '#2D4035',   // slightly lighter — subheadings
          muted:   '#526359',   // body text — readable, not harsh
          faint:   '#8A9E94',   // placeholders, captions
          whisper: '#B8C8BF',   // dividers, decorative
        },
        sage: {
          DEFAULT: '#5F8F78',
          dark:    '#3F6F59',
          deeper:  '#2B5242',
          light:   '#EAF2EC',
          mist:    '#F0F6F2',
          border:  '#C8DAD1',
          glow:    'rgba(95,143,120,0.15)',
        },
      },
      boxShadow: {
        card:        '0 1px 3px rgba(24,38,30,0.04), 0 4px 20px rgba(24,38,30,0.05)',
        'card-hover':'0 4px 12px rgba(24,38,30,0.06), 0 16px 40px rgba(24,38,30,0.08)',
        btn:         '0 2px 12px rgba(63,111,89,0.28), 0 1px 3px rgba(63,111,89,0.15)',
        'btn-hover':  '0 6px 24px rgba(63,111,89,0.36), 0 2px 6px rgba(63,111,89,0.20)',
        avatar:      '0 8px 48px rgba(95,143,120,0.22), 0 2px 12px rgba(24,38,30,0.08)',
        glow:        '0 0 60px rgba(95,143,120,0.12)',
      },
      animation: {
        'drift':       'drift 18s ease-in-out infinite',
        'drift-slow':  'drift 26s ease-in-out infinite reverse',
        'shimmer':     'shimmer 3s ease-in-out infinite',
        'pulse-soft':  'pulseSoft 4s ease-in-out infinite',
        'draw-line':   'drawLine 1.2s ease-out forwards',
        'rise':        'rise 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)'   },
          '33%':     { transform: 'translate(18px,-14px) scale(1.04)' },
          '66%':     { transform: 'translate(-12px,10px) scale(0.97)' },
        },
        shimmer: {
          '0%,100%': { opacity: '0.4' },
          '50%':     { opacity: '0.9' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '0.6', transform: 'scale(1)'    },
          '50%':     { opacity: '1',   transform: 'scale(1.06)' },
        },
        drawLine: {
          from: { width: '0' },
          to:   { width: '100%' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
