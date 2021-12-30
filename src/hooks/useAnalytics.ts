import React from 'react';
import ReactGA from 'react-ga';

export function useAnalytics() {
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID!);
    setInitialized(true);
  }, []);
  return { initialized };
}
