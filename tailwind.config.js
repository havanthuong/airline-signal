/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        19: '19px',
        20: '20px',
        22: '22px',
        24: '24px',
        30: '30px',
        38: '38px',
        40: '40px',
        50: '50px',
        60: '60px',
        90: '90px',
      },
      colors: {
        yellow: {
          10: '#f8a33f'
        }
      }
    },
  },
  plugins: [],
}

