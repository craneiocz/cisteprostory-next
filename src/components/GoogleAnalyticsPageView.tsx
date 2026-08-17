'use client';

import * as CookieConsent from 'vanilla-cookieconsent';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const measurementId = 'G-R4PM30709Q';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const isGaReady = useRef(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    const sendPageView = () => {
      if (!isGaReady.current || !CookieConsent.acceptedCategory('analytics') || typeof window.gtag !== 'function') {
        return;
      }
      if (lastTrackedPath.current === pathname) return;

      lastTrackedPath.current = pathname;
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_location: window.location.href,
        send_to: measurementId,
      });
    };

    const handleGaReady = () => {
      isGaReady.current = true;
      sendPageView();
    };
    const handleConsentChange = () => {
      isGaReady.current = CookieConsent.acceptedCategory('analytics');
    };

    window.addEventListener('cisteprostory-ga4-ready', handleGaReady);
    window.addEventListener('cc:onChange', handleConsentChange);
    window.addEventListener('cc:onConsent', handleConsentChange);
    const readinessTimer = window.setTimeout(() => {
      if (CookieConsent.acceptedCategory('analytics') && typeof window.gtag === 'function') {
        isGaReady.current = true;
        sendPageView();
      }
    }, 0);

    return () => {
      window.clearTimeout(readinessTimer);
      window.removeEventListener('cisteprostory-ga4-ready', handleGaReady);
      window.removeEventListener('cc:onChange', handleConsentChange);
      window.removeEventListener('cc:onConsent', handleConsentChange);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isGaReady.current || !CookieConsent.acceptedCategory('analytics') || typeof window.gtag !== 'function') {
      return;
    }
    if (lastTrackedPath.current === pathname) return;

    lastTrackedPath.current = pathname;
    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_location: window.location.href,
      send_to: measurementId,
    });
  }, [pathname]);

  return null;
}
