'use client';

import * as CookieConsent from 'vanilla-cookieconsent';
import { useEffect } from 'react';

const config: CookieConsent.CookieConsentConfig = {
  mode: 'opt-in',
  revision: 2,
  autoShow: true,
  autoClearCookies: true,
  root: '#cookie-consent-root',
  manageScriptTags: false,
  guiOptions: {
    consentModal: {
      layout: 'box wide',
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
          title: 'Nastavení cookies na tomto webu',
          description:
            'Nezbytné cookies používáme pro fungování webu a uložení vašeho nastavení. Volitelné cookies pro měření návštěvnosti zapneme pouze po vašem souhlasu. Volbu můžete kdykoliv změnit v patičce webu.',
          acceptAllBtn: 'Povolit volitelné cookies',
          acceptNecessaryBtn: 'Používat jen nezbytné cookies',
          showPreferencesBtn: 'Upravit nastavení',
          footer: '<a href="/ochrana-udaju">Ochrana osobních údajů</a>',
        },
        preferencesModal: {
          title: 'Nastavení cookies',
          acceptAllBtn: 'Povolit volitelné cookies',
          acceptNecessaryBtn: 'Používat jen nezbytné cookies',
          savePreferencesBtn: 'Uložit nastavení',
          closeIconLabel: 'Zavřít nastavení cookies',
          sections: [
            {
              title: 'Nezbytné cookies',
              description: 'Potřebné pro základní fungování webu a zapamatování vaší volby.',
              linkedCategory: 'necessary',
              cookieTable: {
                caption: 'Nezbytné cookies používané tímto webem',
                headers: {
                  name: 'Název',
                  provider: 'Poskytovatel',
                  purpose: 'Účel',
                },
                body: [
                  {
                    name: 'cc_cookie',
                    provider: 'cisteprostory.eu',
                    purpose: 'Uložení vašeho nastavení cookies.',
                  },
                ],
              },
            },
            {
              title: 'Volitelné cookies',
              description: 'Používáme je pro měření návštěvnosti a používání jednotlivých částí webu. Aktivují se pouze po vašem souhlasu.',
              linkedCategory: 'analytics',
              cookieTable: {
                caption: 'Volitelné cookies pro měření návštěvnosti',
                headers: {
                  name: 'Název',
                  provider: 'Poskytovatel',
                  purpose: 'Účel',
                },
                body: [
                  {
                    name: '_ga, _ga_*',
                    provider: 'Google',
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
