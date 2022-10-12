// Default themes from https://components.ai/

const theme = {
    description: "",
    borderWidths: [0, "1px", "2px", "4px", "8px"],
    lineHeights: { solid: 1, heading: 1.25, body: 1.5 },
    letterSpacings: { tracked: "0.1em", negative: "-0.05em", large: "0.25em" },
    fontSizes: [
      "0.75rem",
      "0.875rem",
      "1rem",
      "1.125rem",
      "1.25rem",
      "1.5rem",
      "2rem",
      "3rem",
      "4rem",
      "6rem",
      "8rem",
    ],
    fonts: {
      heading:
        "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif",
      body: "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif",
      mono: '"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace',
    },
    colors: {
      tint: [
        "hsla(0, 0%, 100%, .035)",
        "hsla(0, 0%, 100%, 0.1)",
        "hsla(0, 0%, 100%, 0.19)",
        "hsla(0, 0%, 100%, .28)",
        "hsla(0, 0%, 100%, 0.36)",
        "hsla(0, 0%, 100%, 0.45)",
        "hsla(0, 0%, 100%, .55)",
        "hsla(0, 0%, 100%, 0.64)",
        "hsla(0, 0%, 100%, .73)",
        "hsla(0, 0%, 100%, .815)",
        "hsla(0, 0%, 100%, .895)",
        "hsla(0, 0%, 100%, .94)",
      ],
      shade: [
        "hsla(0, 0%, 0%, 0.94)",
        "hsla(0, 0%, 0%, .895)",
        "hsla(0, 0%, 0%, .815)",
        "hsla(0, 0%, 0%, .73)",
        "hsla(0, 0%, 0%, .64)",
        "hsla(0, 0%, 0%, .55)",
        "hsla(0, 0%, 0%, 0.45)",
        "hsla(0, 0%, 0%, 0.36)",
        "hsla(0, 0%, 0%, .28)",
        "hsla(0, 0%, 0%, .19)",
        "hsla(0, 0%, 0%, 0.1)",
        "hsla(0, 0%, 0%, 0.035)",
      ],
      gray: [
        "#000000",
        "#171717",
        "#2f2f2f",
        "#464646",
        "#5e5e5e",
        "#757575",
        "#8c8c8c",
        "#a3a3a3",
        "#bababa",
        "#d1d1d1",
        "#e8e8e8",
        "#ffffff",
      ],
      "slate-gray": [
        "#09090b",
        "#1d1d22",
        "#313138",
        "#45444f",
        "#595866",
        "#6d6c7d",
        "#838292",
        "#9a9aa7",
        "#b2b1bb",
        "#c9c9d0",
        "#e1e0e4",
        "#f8f8f9",
      ],
      blue: [
        "#030b18",
        "#071e3f",
        "#0c3166",
        "#10448d",
        "#1556b4",
        "#1969db",
        "#317fed",
        "#5797f0",
        "#7daef4",
        "#a3c6f7",
        "#c9ddfa",
        "#eff5fe",
      ],
      indigo: [
        "#080614",
        "#19143f",
        "#2a216a",
        "#3a2e95",
        "#4b3bc0",
        "#5c49eb",
        "#725fff",
        "#8c7cff",
        "#a69aff",
        "#c0b7ff",
        "#dad5ff",
        "#f4f3ff",
      ],
      violet: [
        "#110517",
        "#2e0d3e",
        "#4b1465",
        "#681c8c",
        "#8424b3",
        "#a12cda",
        "#b543ec",
        "#c366f0",
        "#d089f3",
        "#deabf7",
        "#eccefa",
        "#f9f0fe",
      ],
      magenta: [
        "#13040f",
        "#350a2c",
        "#581148",
        "#7b1765",
        "#9e1e82",
        "#c1249e",
        "#d43cb2",
        "#dc61c1",
        "#e485cf",
        "#eca9dd",
        "#f4ceec",
        "#fcf2fa",
      ],
      red: [
        "#120205",
        "#39050f",
        "#5f0819",
        "#860b24",
        "#ac0e2e",
        "#d31138",
        "#e7284e",
        "#ec506f",
        "#f07790",
        "#f49fb0",
        "#f9c7d1",
        "#fdeef1",
      ],
      "red-orange": [
        "#190b05",
        "#3d1307",
        "#601b0a",
        "#84240c",
        "#a72c0e",
        "#cb3411",
        "#ee3c13",
        "#fe562f",
        "#fe7d5e",
        "#ffa48e",
        "#ffccbe",
        "#fff3ee",
      ],
      orange: [
        "#150d04",
        "#2e1c08",
        "#472a0c",
        "#603910",
        "#794714",
        "#a65d13",
        "#d37413",
        "#ff8a14",
        "#ffa54a",
        "#ffc081",
        "#ffdab7",
        "#fff5ed",
      ],
      gold: [
        "#140e05",
        "#2c1f0a",
        "#432f0e",
        "#5b4013",
        "#725118",
        "#946818",
        "#d4950d",
        "#eeb028",
        "#f2c259",
        "#f7d38a",
        "#fbe5bc",
        "#fff5e9",
      ],
      yellow: [
        "#111006",
        "#252405",
        "#3a3804",
        "#4e4d03",
        "#636101",
        "#777500",
        "#ccc500",
        "#fcf433",
        "#fdf67a",
        "#fdf89b",
        "#fef9bb",
        "#fefadb",
      ],
      green: [
        "#091108",
        "#0f2611",
        "#153c1a",
        "#1b5122",
        "#21662b",
        "#25833a",
        "#26b056",
        "#35d272",
        "#63dd90",
        "#90e8ae",
        "#bdf3cc",
        "#eafeea",
      ],
      teal: [
        "#07100c",
        "#0c231a",
        "#113628",
        "#164936",
        "#1b5b45",
        "#177f63",
        "#12a282",
        "#2abb9b",
        "#5acab1",
        "#8bdac7",
        "#bbe9dc",
        "#ecf8f2",
      ],
      cyan: [
        "#0a1211",
        "#0e2021",
        "#132e30",
        "#173d40",
        "#1c4b4f",
        "#20595f",
        "#246b73",
        "#24919c",
        "#24b7c5",
        "#2cd7e6",
        "#50dfeb",
        "#75e7f0",
        "#99eff5",
        "#bef7fa",
        "#e2ffff",
      ],
      modes: {},
    },
    boxShadows: {
      0: "0px 1px 1px 0px hsla(0, 0%, 0%, 0.035), 0px 2px 2px 0px rgba(0, 0, 0, 0.125), 0px 4px 4px 0px rgba(0, 0, 0, 0.125), 0px 8px 8px 0px rgba(0, 0, 0, 0.125), 0px 16px 16px 0px rgba(0, 0, 0, 0.125)",
      1: "0px 1px 1px 0px rgba(0, 0, 0, 0.15), 0px 2px 2px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.15), 0px 8px 8px 0px rgba(0, 0, 0, 0.15)",
      2: "0px 1px 1px 0px rgba(0, 0, 0, 0.11), 0px 2px 2px 0px rgba(0, 0, 0, 0.11), 0px 4px 4px 0px rgba(0, 0, 0, 0.11), 0px 8px 8px 0px rgba(0, 0, 0, 0.11), 0px 16px 16px 0px rgba(0, 0, 0, 0.11), 0px 32px 32px 0px rgba(0, 0, 0, 0.11)",
      3: "0px 1px 1px 0px rgba(0, 0, 0, 0.25), 0px 2px 2px 0px rgba(0, 0, 0, 0.20), 0px 4px 4px 0px rgba(0, 0, 0, 0.15), 0px 8px 8px 0px rgba(0, 0, 0, 0.10), 0px 16px 16px 0px rgba(0, 0, 0, 0.05)",
      4: "0px 1px 1px 0px rgba(0, 0, 0, 0.25), 0px 2px 2px 0px rgba(0, 0, 0, 0.2), 0px 4px 4px 0px rgba(0, 0, 0, 0.15), 0px 8px 8px 0px rgba(0, 0, 0, 0.1), 0px 16px 16px 0px rgba(0, 0, 0, 0.05)",
      5: "0px 19px 38px 0px rgba(0, 0, 0, 0.08), 0px 2px 2px 0px rgba(0, 0, 0, 0.12), 0px 4px 4px 0px rgba(0, 0, 0, 0.16), 0px 8px 8px 0px rgba(0, 0, 0, 0.2)",
      border: "inset 0px 0px 0px 1px currentColor",
      "border-light-overlay": "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.13)",
      "border-dark-overlay": "inset 0px 1px 0px 1px rgba(0, 0, 0, 0.13)",
    },
    easingFunctions: {
      0: "linear",
      1: "cubic-bezier(0.828, 0.39, 0.236, 1.167)",
      2: "ease",
    },
    breakpoints: [],
    space: [0, "4px", "8px", "16px", "32px", "64px", "128px", "256px", "512px"],
    borderRadius: [0, "4px", "6px", "8px", "16px", "32px", "9999px"],
    borderStyles: ["none", "solid"],
    name: "System",
    durations: ["250ms", "375ms", "500ms"],
    textShadows: {},
    gradients: {},
    text: {},
  }

  