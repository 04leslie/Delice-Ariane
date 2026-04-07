/** @type {import('tailwindcss').Config} */
// Tailwind CSS configuration file
// Tells Tailwind how to scan your project and what customizations to apply

export default {
  // content: array of paths that Tailwind scans to find utility class usage
  // Only CSS utilities that appear in these files will be generated (removes unused CSS)
  content: [
    "./index.html",           // Scan the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}",  // Scan all JS/TS/JSX/TSX files in the src directory
  ],
  // theme: customize Tailwind's default design tokens (colors, spacing, fonts, etc.)
  theme: {
    // extend: add or override default theme values without removing defaults
    extend: {},  // Currently empty - add custom theme customizations here if needed
  },
  // plugins: array of Tailwind plugins to extend functionality
  plugins: [],  // Currently empty - no additional plugins installed
}
