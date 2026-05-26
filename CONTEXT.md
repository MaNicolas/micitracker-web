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
- `/` — Page d'accueil (`src/pages/index.astro`)
- `/privacy` — Politique de confidentialité (`src/pages/privacy.astro`)

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
- [ ] Page de présentation — Nicolas MA, histoire du projet, pourquoi MICI Tracker
- [ ] Page partenaires — ACCU, AFA, associations MICI
- [ ] Version web de l'app (consultation des données depuis un navigateur) — projet à part entière
