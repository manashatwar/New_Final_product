const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}', 
    './frontend/**/*.{ts,tsx}'
  ],
   prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'black': '#0a0908',
            'gunmetal': '#22333b',
            'white-smoke': '#f2f4f3',
            'beaver': '#a9927d',
            'walnut-brown': '#5e503f',
            'black': '#0a0908ff',
            'gunmetal': '#22333bff',
            'almond': '#eae0d5ff',
            'khaki': '#c6ac8fff',
            'walnut-brown': '#5e503fff',
            'agoricPink': '#E9406A',
        'black': '#0a0908',
        'gunmetal': '#22333b',
        'white-smoke': '#f2f4f3',
        'beaver': '#a9927d',
        'walnut-brown': '#5e503f',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          text: "hsl(var(--secondary-text))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
          backgroundImage: {
            'gradient-top': 'linear-gradient(0deg, #0a0908ff, #22333bff, #eae0d5ff, #c6ac8fff, #5e503fff)',
            'gradient-right': 'linear-gradient(90deg, #0a0908ff, #22333bff, #eae0d5ff, #c6ac8fff, #5e503fff)',
            'gradient-bottom': 'linear-gradient(180deg, #0a0908ff, #22333bff, #eae0d5ff, #c6ac8fff, #5e503fff)',
            'gradient-left': 'linear-gradient(270deg, #0a0908ff, #22333bff, #eae0d5ff, #c6ac8fff, #5e503fff)',
            'gradient-top-right': 'linear-gradient(45deg, #0a0908ff, #22333bff, #eae0d5ff, #c6ac8fff, #5e503fff)',
            'gradient-bottom-right': 'linear-gradient(135deg, #0a0908ff, #22333bff, #eae0d5ff, #c6ac8fff, #5e503fff)',
            'gradient-top-left': 'linear-gradient(225deg, #0a0908ff, #22333bff, #eae0d5ff, #c6ac8fff, #5e503fff)',
            'gradient-bottom-left': 'linear-gradient(315deg, #0a0908ff, #22333bff, #eae0d5ff, #c6ac8fff, #5e503fff)',
            'gradient-radial': 'radial-gradient(#0a0908ff, #22333bff, #eae0d5ff, #c6ac8fff, #5e503fff)',
          },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        26: "1.625rem",
        30: "1.875rem",
        39: "2.4375rem",
        48: "3rem",
        51: "3.1875rem",
        68: "4.25rem",
        110: "6.875rem",
      },
      lineHeight: {
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        32: "2rem",
        34: "2.125rem",
        42: "2.625rem",
        52: "3.25rem",
        62: "3.875rem",
        72: "4.5rem",
        116: "7.25rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),

    plugin(function addTextStyles({ addComponents, theme }) {
      addComponents({
        // Component Regular Text Styles
        ".body-sm": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.16"),
          lineHeight: theme("lineHeight.28"),
          fontWeight: theme("fontWeight.regular"),
        },
        ".body-md": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.18"),
          lineHeight: theme("lineHeight.28"),
          fontWeight: theme("fontWeight.regular"),
        },

        // Component Semibold Text Styles
        ".body-sm-semibold": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.16"),
          lineHeight: theme("lineHeight.28"),
          fontWeight: theme("fontWeight.semibold"),
        },
        ".body-md-semibold": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.18"),
          lineHeight: theme("lineHeight.28"),
          fontWeight: theme("fontWeight.semibold"),
        },

        // Label Text Styles
        ".label-sm": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.14"),
          lineHeight: theme("lineHeight.24"),
          color: theme("colors.secondary.text"),
        },

        // Title Text Styles
        ".title-md": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.48"),
          lineHeight: theme("lineHeight.48"),
          fontWeight: theme("fontWeight.bold"),
          letterSpacing: "-1.2%",
        },

        // Heading Text Styles
        ".heading-sm": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.24"),
          lineHeight: theme("lineHeight.32"),
          fontWeight: theme("fontWeight.semibold"),
          letterSpacing: "-0.6%",
        },
        ".heading-md": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.30"),
          lineHeight: theme("lineHeight.36"),
          fontWeight: theme("fontWeight.semibold"),
        },

        // Display Text Styles
        ".display": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: "32px",
          lineHeight: "52px",
          fontWeight: theme("fontWeight.bold"),
        },
      });
    }),
  ],
};
