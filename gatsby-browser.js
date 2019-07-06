const React = require("react");
const Layout = require("./src/layouts").default;

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

export const shouldUpdateScroll = args => {
    return false;
};
