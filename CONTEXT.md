# MICI Tracker Web — Contexte & Backlog

## Stack actuelle
- Site statique HTML/CSS/JS hébergé sur GitHub Pages
- Domaine : micitracker.com (DNS Cloudflare)
- Déploiement automatique à chaque push sur `main`

## Pages
- `/` — Page d'accueil
- `/privacy` — Politique de confidentialité (FR / ES / CA)

## Backlog

### Priorité haute
- [ ] Système i18n moderne (ex: Next.js + next-intl, ou Astro) pour remplacer le système FR/ES/CA manuel actuel
- [ ] Sidebar fixe persistante sur toutes les pages (inspirée TUI) : logo en haut, liens de navigation, sélecteur de langue en bas. Nécessite un layout partagé → à coupler avec la migration vers un framework (Astro/Next.js) pour éviter de dupliquer le HTML dans chaque page.

### À explorer
- [ ] Page CGU (Conditions Générales d'Utilisation)
- [ ] Page mentions légales
- [ ] Page de présentation — Nicolas MA, histoire du projet, pourquoi MICI Tracker
- [ ] Page partenaires — ACCU, AFA, associations MICI
- [ ] Version web de l'app (consultation des données depuis un navigateur) — projet à part entière
