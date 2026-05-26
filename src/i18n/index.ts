import fr from './fr';
import en from './en';
import es from './es';
import ca from './ca';

export const languages = ['fr', 'en', 'es', 'ca'] as const;
export type Lang = typeof languages[number];

export const translations: Record<Lang, Record<string, string>> = { fr, en, es, ca };

export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? translations['fr'][key] ?? key;
}
