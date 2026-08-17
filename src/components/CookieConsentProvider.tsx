'use client';

import * as CookieConsent from 'vanilla-cookieconsent';
import { useEffect } from 'react';

const config: CookieConsent.CookieConsentConfig = {
  mode: 'opt-in',
  revision: 1,
  autoShow: true,
  autoClearCookies: true,
  manageScriptTags: true,
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom center',
      equalWeightButtons: true,
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          { name: /^_ga/ },
          { name: /^_gid/ },
        ],
      },
    },
  },
  language: {
    default: 'cs',
    translations: {
      cs: {
        consentModal: {
          label: 'Souhlas s cookies',
          title: 'Vaše soukromí',
          description:
            'Používáme nezbytné technologie pro fungování webu. Analytické cookies Google Analytics zapneme až po vašem souhlasu. Volbu můžete kdykoliv změnit v patičce webu.',
          acceptAllBtn: 'Povolit analytiku',
          acceptNecessaryBtn: 'Odmítnout analytiku',
          showPreferencesBtn: 'Nastavit cookies',
          footer: '<a href="/ochrana-udaju">Ochrana osobních údajů</a>',
        },
        preferencesModal: {
          title: 'Nastavení cookies',
          acceptAllBtn: 'Povolit analytiku',
          acceptNecessaryBtn: 'Odmítnout analytiku',
          savePreferencesBtn: 'Uložit nastavení',
          closeIconLabel: 'Zavřít nastavení cookies',
          sections: [
            {
              title: 'Nezbytné cookies',
              description: 'Potřebné pro základní fungování webu a zapamatování volby cookies.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytické cookies',
              description: 'Google Analytics 4 pomáhá měřit návštěvnost a používání jednotlivých částí webu.',
              linkedCategory: 'analytics',
              cookieTable: {
                caption: 'Analytické cookies Google Analytics 4',
                headers: {
                  name: 'Název',
                  provider: 'Poskytovatel',
                  purpose: 'Účel',
                },
                body: [
                  {
                    name: '_ga, _ga_*',
                    provider: 'Google Analytics 4',
                    purpose: 'Měření návštěvnosti a používání webu po udělení souhlasu.',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
};

export default function CookieConsentProvider() {
  useEffect(() => {
    void CookieConsent.run(config);
  }, []);

  return null;
}
