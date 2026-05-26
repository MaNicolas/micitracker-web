# micitracker-web

Site web de [MICI Tracker](https://micitracker.com) — application mobile de suivi pour les patients atteints de Maladies Inflammatoires Chroniques de l'Intestin (MICI).

## Stack

- **Framework** : [Astro 6](https://astro.build) (static)
- **Hébergement** : GitHub Pages
- **Déploiement** : GitHub Actions (push sur `main` → deploy automatique)
- **i18n** : FR / EN / ES / CA

## Pages

- `/` — Page d'accueil
- `/privacy` — Politique de confidentialité

## Développement

```bash
nvm use        # Node 22
npm install
npm run dev    # http://localhost:4321
npm run build  # Build de production
```

## Ajouter une langue

1. Créer `src/i18n/xx.ts` (copier `fr.ts` et traduire)
2. L'importer dans `src/i18n/index.ts`
3. Ajouter l'option dans le `<select>` de `src/layouts/Layout.astro`
