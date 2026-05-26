# MICI Tracker Web — Contexte & Backlog

## Stack actuelle
- **Framework** : Astro 6 (static output)
- **Hébergement** : GitHub Pages
- **Domaine** : micitracker.com (DNS Cloudflare)
- **Déploiement** : GitHub Actions automatique à chaque push sur `main`
- **i18n** : FR / ES / CA via `data-lang` + localStorage (côté client)
- **Layout** : sidebar fixe partagée sur toutes les pages (`src/layouts/Layout.astro`)
- **Node** : 22 (`.nvmrc`)

## Pages
- `/` — Page d'accueil (`src/pages/index.astro`)
- `/privacy` — Politique de confidentialité (`src/pages/privacy.astro`)

## Backlog

### Priorité haute
- [ ] Migrer l'i18n vers un système fichiers de traduction (ex: `src/i18n/fr.ts`, `es.ts`, `ca.ts`) pour séparer le contenu du markup

### À explorer
- [ ] Page CGU (Conditions Générales d'Utilisation)
- [ ] Page mentions légales
- [ ] Page de présentation — Nicolas MA, histoire du projet, pourquoi MICI Tracker
- [ ] Page partenaires — ACCU, AFA, associations MICI
- [ ] Version web de l'app (consultation des données depuis un navigateur) — projet à part entière
