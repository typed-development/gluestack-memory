import { AnimationResolver } from "@gluestack-style/animation-resolver";
import { MotionAnimationDriver } from "@gluestack-style/legend-motion-animation-driver";
import { createConfig, createComponents } from "@gluestack-style/react";
import * as componentsTheme from "./theme";
import { config as defaultConfig } from "@gluestack-ui/config";
import { colors } from "./colors";

export const gluestackUIConfig = createConfig({
  fonts: {
    heading: "HelveticaNowDisplay-Bold",
    body: "HelveticaNowDisplay-Regular",
    mono: "HelveticaNowDisplay-Regular",
  },
  aliases: {
    bg: "backgroundColor",
    bgColor: "backgroundColor",
    h: "height",
    w: "width",
    p: "padding",
    px: "paddingHorizontal",
    py: "paddingVertical",
    pt: "paddingTop",
    pb: "paddingBottom",
    pr: "paddingRight",
    pl: "paddingLeft",
    m: "margin",
    mx: "marginHorizontal",
    my: "marginVertical",
    mt: "marginTop",
    mb: "marginBottom",
    mr: "marginRight",
    ml: "marginLeft",
    rounded: "borderRadius",
  } as const,
  tokens: {
    ...defaultConfig.tokens,
    colors: colors,

    fonts: {
      heading: "HelveticaNowDisplay-Bold",
      body: "HelveticaNowDisplay-Regular",
      mono: "HelveticaNowDisplay-Regular",
    },
    fontSizes: {
      "2xs": 10,
      xs: 13,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 35,
      "4xl": 40,
      "5xl": 48,
      "6xl": 60,
      "7xl": 72,
      "8xl": 96,
      "9xl": 128,
    },
    fontWeights: {
      ...defaultConfig.tokens.fontWeights,
      bold: 600,
    },
    mediaQueries: {
      // '2xl': '@media screen and (min-width: 1536px)',
      ...defaultConfig.tokens.mediaQueries,
    } as const,
  } as const,
  globalStyle: {
    variants: {
      hardShadow: {
        "1": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: -2,
            height: 2,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        "2": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        "3": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        "4": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        // this 5th version is only for toast shadow
        // temporary
        "5": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.2,
          elevation: 10,
        },
      },
      softShadow: {
        "1": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 10,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: "$backgroundLight500",
            elevation: 5,
            shadowOpacity: 0.05,
          },
        },
        "2": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 20,
          elevation: 3,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: "$backgroundLight500",
            elevation: 10,
            shadowOpacity: 0.1,
          },
        },
        "3": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 30,
          shadowOpacity: 0.1,
          elevation: 4,
          _android: {
            shadowColor: "$backgroundLight500",
            elevation: 15,
            shadowOpacity: 0.15,
          },
        },
        "4": {
          shadowColor: "$backgroundLight900",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 40,
          shadowOpacity: 0.1,
          elevation: 10,
          _android: {
            shadowColor: "$backgroundLight500",
            elevation: 20,
            shadowOpacity: 0.2,
          },
        },
      },
    },
  },
  plugins: [new AnimationResolver(MotionAnimationDriver)],
});

type Config = typeof gluestackUIConfig; // Assuming `config` is defined elsewhere

type Components = typeof componentsConfig;

export const componentsConfig = createComponents(componentsTheme);

export type { UIConfig, UIComponents } from "@gluestack-ui/themed";

export interface IConfig {}
export interface IComponents {}

declare module "@gluestack-ui/themed" {
  interface UIConfig extends Omit<Config, keyof IConfig>, IConfig {}
  interface UIComponents
    extends Omit<Components, keyof IComponents>,
      IComponents {}
}

export const config = {
  ...gluestackUIConfig,
  components: componentsConfig,
};
