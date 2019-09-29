export default {
  initialColorMode: `system`,
  useCustomProperties: true,
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
      },
      gray: {
        text: '#fff',
        background: 'hsl(270, 30%, 14%)',
        primary: 'hsl(180, 100%, 60%)',
        secondary: 'hsl(270, 100%, 60%)',
        accent: 'hsl(300, 100%, 60%)',
        muted: 'hsl(270, 50%, 8%)',
        gray: 'hsl(270, 50%, 70%)',
        lightgray: 'hsl(270, 50%, 30%)',
      },
      hack: {
        text: 'hsl(120, 100%, 75%)',
        background: 'hsl(120, 20%, 10%)',
        primary: 'hsl(120, 100%, 40%)',
        secondary: 'hsl(120, 50%, 40%)',
        accent: 'hsl(120, 100%, 90%)',
        muted: 'hsl(120, 20%, 7%)',
        gray: 'hsl(120, 20%, 40%)',
        lightgray: 'hsl(120, 20%, 20%)',
      },
      pink: {
        text: 'hsl(350, 80%, 10%)',
        background: 'hsl(350, 100%, 90%)',
        primary: 'hsl(350, 100%, 50%)',
        secondary: 'hsl(280, 100%, 50%)',
        accent: 'hsl(280, 100%, 20%)',
        muted: 'hsl(350, 100%, 88%)',
        gray: 'hsl(350, 40%, 50%)',
        lightgray: 'hsl(350, 60%, 80%)',
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
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    link: 700,
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
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: `body`,
      lineHeight: `body`,
      fontWeight: `body`,
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
      fontWeight: `link`,
      color: `primary`,
      transition: 'color 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
  },
  footNotes: {
    position: 'absolute',
    bottom: 0,
    color: 'accent',
    fontFamily: 'monospace',
    fontSize: 3,
    fontWeight: 'display',
    p: 2
  }
}