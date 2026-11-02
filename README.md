# Mon portfolio

Je m'appelle Nicolas Vanbreusegem et je suis étudiant à la Web@cadémie d'Epitech. Ce portfolio est un projet réalisé pendant ma formation.

## Le but du projet

Le but est d'avoir un site simple et clair pour présenter mes projets et les technologies que j'ai apprises, proposer mon CV en téléchargement et permettre de me contacter par email.

## Le projet

Le site tient sur une seule page (SPA), avec un menu qui descend directement à chaque section :l

- **Accueil** : ma photo, mon nom, mon LinkedIn et mon CV
- **À propos** : qui je suis et ma formation
- **Projets** : mes 5 projets, avec leur lien GitHub et parfois un lien vers le site en ligne
- **Technos** : les langages et les outils que j'utilise
- **Contact** : un formulaire pour m'envoyer un email

Il n'y a ni backend ni base de données. Les emails du formulaire sont envoyés avec le service EmailJS.

## Les installations

**1. Installer Node.js**

Pour vérifier la version :

```bash
node -v
```

**2. Récupérer le projet**

```bash
git clone
```

**3. Installer React et les autres dépendances**

```bash
npm i
```

Cette seule commande installe tout ce dont le projet a besoin :

- **React** pour créer les composants du site
- **Vite** pour lancer le projet et le construire
- **Tailwind CSS** pour le style
- **EmailJS** pour le formulaire de contact
- **React Icons** pour les icônes
- **Vitest** et **Testing Library** pour les tests
- **ESLint** pour vérifier le code

Des avertissements peuvent s'afficher, mais ils n'empêchent pas le projet de fonctionner.

## Lancer le projet

```bash
npm run dev
```

Ensuite, va sur <http://localhost:5173/> dans ton navigateur. Pour arrêter le site, fais `Ctrl + C` dans le terminal.
