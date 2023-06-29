import * as amplitude from '@amplitude/analytics-browser';

export default function trackEvent(event: string, props: Record<string, any>) {
  amplitude.track(event, props);
}