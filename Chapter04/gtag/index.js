// src/gtag/index.js
const GA_TRACKING_ID = 'GA_TRACKING_ID';
const gtag = function gtagMock(...args) {
  // eslint-disable-next-line no-console
  console.log('gtag:', ...args);
};

class GtagAnalytics {
  static sendEvent(action) {
    gtag('event', action);
  }

  static sendPageView(pagePath) {
    gtag('config', GA_TRACKING_ID, { page_path: pagePath });
  }
}

export default GtagAnalytics;
