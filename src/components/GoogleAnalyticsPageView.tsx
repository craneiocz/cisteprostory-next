'use client';

import * as CookieConsent from 'vanilla-cookieconsent';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const measurementId = 'G-R4PM30709Q';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __cisteprostoryGaLoaded?: boolean;
  }
}

function loadGoogleAnalytics(onReady: () => void) {
  if (window.__cisteprostoryGaLoaded) {
    onReady();
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function (...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag('config', measurementId, { send_page_view: false });

  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`,
  );
  if (existingScript) {
    window.__cisteprostoryGaLoaded = true;
    onReady();
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.onload = () => {
    window.__cisteprostoryGaLoaded = true;
    onReady();
  };
  document.head.appendChild(script);
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
      if (CookieConsent.acceptedCategory('analytics')) {
        loadGoogleAnalytics(handleGaReady);
      }
    };

    window.addEventListener('cc:onChange', handleConsentChange);
    window.addEventListener('cc:onConsent', handleConsentChange);
    const readinessTimer = window.setTimeout(() => {
      if (CookieConsent.acceptedCategory('analytics')) {
        loadGoogleAnalytics(handleGaReady);
      }
    }, 0);

    return () => {
      window.clearTimeout(readinessTimer);
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
