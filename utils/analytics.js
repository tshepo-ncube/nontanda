// utils/analytics.js
import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-YE94Z3VF7X"); // Replace with your actual GA Measurement ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

import ReactGA from "react-ga";
function handleClick() {
  // Track a custom event
  ReactGA.event({
    category: "Button Click",
    action: "Clicked on Buy Now",
    label: "Product Page",
  });
  // Continue with your button's click handler
}
