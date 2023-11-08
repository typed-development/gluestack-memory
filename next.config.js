const path = require("path");

const { withExpo } = require("@expo/next-adapter");
const ourPackages = [
  "solito",
  "dripsy",
  "@dripsy/core",
  "moti",
  "app",
  "@vt/icons",
  "@vt/ui",
  "@expo/next-adapter",
  "react-native-super-grid",
  "react-native-confirmation-code-field",
  "expo-linking",
  "expo-constants",
  "expo-application",
  "expo-modules-core",
  "@expo/html-elements",
  "expo-device",
  "sentry-expo",
  "react-native-timeline-flatlist",
];
const theirPackages = [
  "expo",
  "native-base",
  "react-native",
  "react-native-svg",
  "react-native-web",
  "react-native-safe-area-context",
  "@react-aria/visually-hidden",
  "@react-native-aria/button",
  "@react-native-aria/checkbox",
  "@react-native-aria/combobox",
  "@react-native-aria/focus",
  "@react-native-aria/interactions",
  "@react-native-aria/listbox",
  "@react-native-aria/overlays",
  "@react-native-aria/radio",
  "@react-native-aria/slider",
  "@react-native-aria/tabs",
  "@react-native-aria/utils",
  "@react-stately/combobox",
  "@react-stately/radio",
  "@gluestack-ui",
  "@react-native-aria",
  "@gluestack-style",
  "@gluestack",
  "@expo",
  "@legendapp",
  "expo-",
  "expo-linear-gradient",
];
/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  reactStrictMode: false,
  transpilePackages: [...ourPackages, ...theirPackages],
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "visionarytechnologies.imgix.net",
        port: "",
      },
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ttf$/,
      loader: "url-loader",
    });
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    return config;
  },
});

module.exports = nextConfig;
