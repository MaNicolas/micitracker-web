# MICI Tracker Web — Contexte & Backlog

## Stack actuelle
- **Framework** : Astro 6 (static output)
- **Hébergement** : GitHub Pages
- **Domaine** : micitracker.com (DNS Cloudflare)
- **Déploiement** : GitHub Actions automatique à chaque push sur `main`
- **i18n** : FR / EN / ES / CA via fichiers `src/i18n/{lang}.ts` + `data-i18n` + localStorage (côté client)
- **Layout** : sidebar fixe partagée sur toutes les pages (`src/layouts/Layout.astro`)
- **Node** : 22 (`.nvmrc`)

## Pages
- `/` — Page d'accueil avec hero, tagline, grille fonctionnalités, section Pourquoi, CTA, badge beta (`src/pages/index.astro`)
- `/app` — Showcase de l'app avec screenshots dans phone frames, sections alternées gauche/droite, calendrier solo, modal résumé du jour (`src/pages/app.astro`)
- `/about` — Page de présentation (stub) (`src/pages/about.astro`)
- `/privacy` — Politique de confidentialité (`src/pages/privacy.astro`)

## Assets
- **Screenshots** : 11 captures dans `/public/screenshots/` (calendar, day-modal, stool, food, stats, meds, correlations, langs, custom, notifs, consult)
- **Favicon** : icône MICI Tracker (`public/favicon.png`)

## Layout & Navigation
- Sidebar desktop fixe (240px) avec logo, navigation, sélecteur de langue
- Mobile : burger menu en drawer avec overlay, flèche retour sur pages secondaires
- Sélecteur de langue en bottom sheet sur mobile
- Footer global avec navigation et contact

## Ajouter une langue
1. Créer `src/i18n/xx.ts` (copier `fr.ts` et traduire)
2. L'importer dans `src/i18n/index.ts`
3. Ajouter l'option dans le `<select>` de `Layout.astro`

## Backlog

### À explorer (nécessite publication sur les stores)
- [ ] QR code sur la page d'accueil vers le Play Store / App Store — à faire une fois l'app publiée

### À explorer
- [ ] Page CGU (Conditions Générales d'Utilisation)
- [ ] Page mentions légales
- [ ] Compléter la page `/about` — Nicolas MA, histoire du projet, pourquoi MICI Tracker
- [ ] Page partenaires — ACCU, AFA, associations MICI
- [ ] Version web de l'app (consultation des données depuis un navigateur) — projet à part entière
