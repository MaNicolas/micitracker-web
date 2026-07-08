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
- `/professionals` — Page dédiée aux professionnels de santé : rapports PDF, scores cliniques, Bristol (`src/pages/professionals.astro`)
- `/about` — Page de présentation : mon histoire, la mission, contact (`src/pages/about.astro`)
- `/privacy` — Politique de confidentialité (`src/pages/privacy.astro`)

## Assets
- **Screenshots** : 11 captures app dans `/public/screenshots/` (calendar, day-modal, stool, food, stats, meds, correlations, langs, custom, notifs, consult) + 5 captures PDF (pdf-resume, pdf-meds, pdf-mici-control, pdf-hbi, pdf-pro2)
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
- [x] ~~Compléter la page `/about` — Nicolas MA, histoire du projet, pourquoi MICI Tracker~~
- [ ] Page partenaires — ACCU, AFA, associations MICI

### Améliorations rapport PDF (app mobile)
- [ ] Répartition Bristol — histogramme ou camembert des types 1-7 sur la période
- [ ] Tendance hebdomadaire — nombre moyen de selles/semaine, % de jours avec sang
- [ ] Évolution du poids — courbe sur la période (nécessite tracking du poids dans l'app)
- [ ] Symptômes nocturnes — nombre de nuits avec réveil lié à la maladie
- [ ] Frise chronologique des traitements — superposée au graphique d'évolution
- [ ] Résultats biologiques (calprotectine, CRP) — sur la même timeline que les symptômes
