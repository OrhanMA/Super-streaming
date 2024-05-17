# Super Streaming

Ce projet consiste à créer un petit site permettant de rechercher des films présents dans le base de données de [The Movie Database (TMDB)](https://www.themoviedb.org/)

## Stack technique

### Next.js

Dans sa version 14.2.3, j'utilise les features de ce meta-framework pour optimiser mon application notamment:

- Les server actions
- Routes dynamiques
- Les composants built-in comme Image...
- Caching
  <br>
  ...

J'ai aussi utilisé [Typescript](https://www.typescriptlang.org/), pour un code avec moins de bugs dès le développement.

### Pour les interfaces utilisateurs

#### [Tailwind](https://tailwindcss.com/)

Permet de créer un style cohérent, responsive et rapidement grâce à ses classes utilitaires.

#### [Shadcn/ui](https://ui.shadcn.com/)

Une librairie de composant open-source construite avec [React](https://react.dev/) et [Tailwind](https://tailwindcss.com/) et basée sur [Radix/ui](https://www.radix-ui.com/) pour obtenir des composants non stylisée mais responsives et [accessibles](https://www.radix-ui.com/primitives/docs/overview/accessibility).

### Cypress

J'ai utilisé [Cypress](https://www.cypress.io/) pour réaliser des test End-to-End et unitaires sur mes composants React. Cela m'a permis de surveiller l'évolution de mon code à l'ajout de nouvelles features.

## Installation

Ouvrer votre terminal et utilisez les commandes suivantes

```bash
git clone git@github.com:OrhanMA/Super-streaming.git
cd Super-streaming
pnpm install
```

<br/>

Pour bien que l'application soit fonctionnelle vous aurez besoin d'une clé API TMDB: https://developer.themoviedb.org/docs/getting-started

<br/>

Créez un fichier .env.local avec votre clé API renseignée:

```bash
mv .env.example .env.local
MOVIE_DB_API_KEY=<your-api-key>
```

<br/>

Lancer votre serveur local:

```
npm run dev
```

Pour la version build (optimisée pour la production)

```
npm run build && npm run start
```
