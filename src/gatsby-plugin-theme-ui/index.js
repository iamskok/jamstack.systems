export default {
  useCustomProperties: true,
  initialColorMode: `system`,
  colors: {
    text: `hsl(10, 20%, 20%)`,
    background: `hsl(10, 10%, 98%)`,
    primary: `hsl(10, 80%, 50%)`,
    secondary: `hsl(10, 60%, 50%)`,
    highlight: `hsl(10, 40%, 90%)`,
    accent: `hsl(250, 60%, 30%)`,
    muted: `hsl(10, 20%, 94%)`,
    gray: `hsl(10, 20%, 50%)`,
    modes: {
      dark: {
        text: `#fff`,
        background: `#060606`,
        primary: `#3cf`,
        secondary: `#e0f`,
        muted: `#191919`,
        highlight: `#29112c`,
        gray: `#999`,
        accent: `#c0f`
      }
    }
  },
  fonts: {
    body: `system-ui, sans-serif`,
    heading: `inherit`,
    monospace: `Menlo, monospace`
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    72
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  textStyles: {
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`
    },
    display: {
      variant: `textStyles.heading`,
      fontSize: [
        5,
        6
      ],
      fontWeight: `display`,
      letterSpacing: `-0.03em`,
      mt: 3
    }
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: `body`,
      lineHeight: `body`,
      fontWeight: `body`
    },
    h1: {
      variant: `textStyles.display`
    },
    h2: {
      variant: `textStyles.heading`,
      fontSize: 5
    },
    h3: {
      variant: `textStyles.heading`,
      fontSize: 4
    },
    h4: {
      variant: `textStyles.heading`,
      fontSize: 3
    },
    h5: {
      variant: `textStyles.heading`,
      fontSize: 2
    },
    h6: {
      variant: `textStyles.heading`,
      fontSize: 1
    },
    a: {
      color: `primary`,
      '&:hover': {
        color: `secondary`
      }
    },
    pre: {
      fontFamily: `monospace`,
      fontSize: 1,
      p: 3,
      color: `text`,
      bg: `muted`,
      overflow: `auto`,
      code: {
        color: `inherit`
      }
    },
    code: {
      fontFamily: `monospace`,
      fontSize: 1
    },
    inlineCode: {
      fontFamily: `monospace`,
      color: `secondary`,
      bg: `muted`
    },
    table: {
      width: `100%`,
      my: 4,
      borderCollapse: `separate`,
      borderSpacing: 0,
      'th,td': {
        textAlign: `left`,
        py: `4px`,
        pr: `4px`,
        pl: 0,
        borderColor: `muted`,
        borderBottomStyle: `solid`
      }
    },
    th: {
      verticalAlign: `bottom`,
      borderBottomWidth: `2px`
    },
    td: {
      verticalAlign: `top`,
      borderBottomWidth: `1px`
    },
    hr: {
      border: 0,
      borderBottom: `1px solid`,
      borderColor: `muted`
    }
  }
}