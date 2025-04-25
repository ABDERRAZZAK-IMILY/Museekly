# Documentation de Lyricfy

## Table des matières
1. [Introduction](#introduction)
2. [Technologies utilisées](#technologies-utilisées)
3. [Architecture de l'application](#architecture-de-lapplication)
4. [Installation](#installation)


## Introduction

Lyricfy est une application web moderne qui permet aux utilisateurs de rechercher des chansons, d'afficher leurs paroles et d'écouter des extraits audio. Conçue avec une esthétique inspirée de Spotify, l'application offre une interface intuitive et élégante pour explorer la musique et ses paroles.

L'application utilise l'API lyrics.ovh pour récupérer les informations sur les chansons et leurs paroles, et présente ces données dans une interface utilisateur réactive et conviviale.

## Technologies utilisées

Lyricfy est construit avec les technologies suivantes :

### Frontend
- **React** : Une bibliothèque JavaScript pour construire des interfaces utilisateur
- **Axios** : Client HTTP basé sur les promesses pour effectuer des requêtes API
- **Tailwind CSS** : Un framework CSS utilitaire pour la conception d'interfaces
- **React Hooks** : Pour la gestion d'état (useState, useEffect)

### API
- **lyrics.ovh** : API gratuite pour rechercher des chansons et récupérer leurs paroles

### Outils de développement
- **Node.js** : Environnement d'exécution JavaScript
- **npm/yarn** : Gestionnaires de paquets

## Architecture de l'application

L'application Lyricfy suit une architecture simple basée sur des composants React :

```
Lyricfy (Search Component)
├── Header avec barre de recherche
├── Tableau des résultats de recherche
└── Panneau latéral de paroles
```

Le composant principal gère l'état global de l'application, effectue les appels API et rend les différentes sections de l'interface utilisateur.

## Installation

### Prérequis
- Node.js (v14.0.0 ou supérieur)
- npm (v6.0.0 ou supérieur) ou yarn (v1.22.0 ou supérieur)

### Étapes d'installation

1. **Clonez le dépôt**
   ```bash
   git clone https://github.com/ABDERRAZZAK-IMILY/Museekly.git
   cd lyricfy
   ```

2. **Installez les dépendances**
   ```bash
   npm install

   ```

3. **Démarrez le serveur de développement**
   ```bash
   npm run dev

   ```

4. **Ouvrez l'application**
   L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Installation en production

Pour déployer l'application en production :

1. **Construisez l'application**
   ```bash
   npm run build
   # ou
   yarn build
   ```

2. **Déployez les fichiers générés**
   Le dossier `build` contient tous les fichiers statiques nécessaires au déploiement sur un serveur web ou un service d'hébergement comme Netlify, Vercel ou GitHub Pages.

## Guide d'utilisation

### Recherche de chansons

1. Entrez le nom d'un artiste, d'un album ou d'une chanson dans la barre de recherche en haut de la page.
2. Cliquez sur le bouton "Search" ou appuyez sur Entrée pour lancer la recherche.
3. Les résultats s'afficheront sous forme de tableau, avec les informations suivantes :
   - Numéro
   - Titre et pochette d'album
   - Artiste
   - Album
   - Actions (Paroles, Lecture)

### Affichage des paroles

1. Pour afficher les paroles d'une chanson, cliquez sur le bouton "Lyrics" à côté de la chanson souhaitée.
2. Un panneau latéral s'ouvrira sur la droite de l'écran, affichant les paroles de la chanson sélectionnée.
3. Pour fermer le panneau des paroles, cliquez sur le bouton X en haut à droite du panneau.

### Écoute des extraits

1. Pour écouter un extrait de chanson, cliquez sur le bouton "Play" à côté de la chanson souhaitée.
2. Un nouvel onglet s'ouvrira pour jouer l'extrait audio de la chanson.
