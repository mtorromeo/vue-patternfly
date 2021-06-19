import "@patternfly/patternfly/patternfly.css";
import "@vue-patternfly/core/dist/core.umd.css";
import dedent from "ts-dedent";
import { paramCase } from "param-case";
import { extractArgTypes } from "@storybook/addon-docs/dist/esm/frameworks/vue3/extractArgTypes";

const templateSourceCode = (src, args, argTypes) => {
  const replaceArgs = {};
  for (const [k, t] of Object.entries(argTypes)) {
    const val = args[k];
    if (
      k !== "extra" &&
      !k.includes("_") &&
      typeof val !== "undefined" &&
      val !== t.defaultValue
    ) {
      replaceArgs[k] = val;
    }
  }

  const propToSource = (key, val) => {
    const type = typeof val;
    switch (type) {
      case "boolean":
        return val ? key : "";
      case "string":
        return `${key}="${val}"`;
      default:
        return `:${key}="${val}"`;
    }
  };

  return src.replace(
    ' v-bind="args"',
    Object.keys(replaceArgs)
      .filter((k) => replaceArgs[k] !== "")
      .map((k) => " " + propToSource(paramCase(k), replaceArgs[k]))
      .join("")
  );
};

export const parameters = {
  viewMode: "docs",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    state: "open",

    transformSource(src, ctx) {
      const match = /\b("')?template\1\s*:\s*`([^`]+)`/.exec(src);
      if (match) {
        return templateSourceCode(dedent(match[2]), ctx.args, ctx.argTypes);
      }
      return src;
    },

    extractArgTypes(component) {
      let args = extractArgTypes(component);
      if (args !== null) {
        return args;
      }

      const props = component.props;
      if (!props) {
        return {};
      }

      args = {};
      for (let [k, prop] of Object.entries(props)) {
        const arg = {
          name: k,
          type: {
            name: "string",
            required: false,
          },
          table: {
            category: "props",
            type: {},
          },
        };
        if (typeof prop === "function") {
          prop = { type: prop };
        }
        if (typeof prop.type !== "undefined") {
          let propType = null;
          if (Array.isArray(prop.type)) {
            propType = prop.type.map((t) => t.name.toLowerCase()).join(" | ");
          } else {
            propType = prop.type.name.toLowerCase();
          }
          arg.type.name = arg.table.type.summary = propType;
        }
        if (typeof prop.required !== "undefined") {
          arg.type.required = prop.required;
        }
        if (typeof prop.default !== "undefined") {
          arg.defaultValue = prop.default;
          arg.table.defaultValue = { summary: JSON.stringify(prop.default) };
        }
        args[k] = arg;
      }
      return args;
    },
  },
};

// REMOVE IN STORYBOOK 6.3
window.addEventListener("load", () => {
  showCodeSamples();

  let loc = window.location.href;
  window.setInterval(() => {
    let newLoc = window.location.href;

    if (newLoc !== loc) {
      loc = newLoc;
      showCodeSamples();
    }
  }, 500);
});

function showCodeSamples() {
  try {
    [...document.querySelectorAll(".docs-story button")]
      .filter((el) => el.textContent === "Show code")
      .forEach((btn) => btn.click());
  } catch (e) {
    console.warn(e);
  }
}
// END REMOVE IN STORYBOOK 6.3
