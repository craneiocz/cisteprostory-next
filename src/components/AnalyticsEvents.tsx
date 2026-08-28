'use client';

import * as CookieConsent from 'vanilla-cookieconsent';
import { useEffect } from 'react';

type AnalyticsDetail = {
  name: string;
  label?: string;
};

function sendEvent(name: string, label?: string) {
  if (!CookieConsent.acceptedCategory('analytics') || typeof window.gtag !== 'function') return;

  window.gtag('event', name, {
    event_category: 'engagement',
    event_label: label,
    page_path: window.location.pathname,
  });
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const startedForms = new WeakSet<HTMLFormElement>();

    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null;
      const form = target?.closest<HTMLFormElement>('form[data-analytics-form]');
      if (!form || startedForms.has(form)) return;

      startedForms.add(form);
      sendEvent('form_start', form.dataset.analyticsForm);
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trackedElement = target?.closest<HTMLElement>('[data-analytics-event]');
      if (!trackedElement) return;

      sendEvent(trackedElement.dataset.analyticsEvent ?? 'interaction', trackedElement.dataset.analyticsLabel);
    };

    const handleCustomEvent = (event: Event) => {
      const detail = (event as CustomEvent<AnalyticsDetail>).detail;
      if (!detail?.name) return;

      sendEvent(detail.name, detail.label);
    };

    document.addEventListener('focusin', handleFocus);
    document.addEventListener('click', handleClick);
    window.addEventListener('cisteprostory:analytics', handleCustomEvent);

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('cisteprostory:analytics', handleCustomEvent);
    };
  }, []);

  return null;
}
