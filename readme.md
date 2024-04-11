# Application de gestion de tâches Complète (Backend)

Ceci est le dépôt backend pour l'Application de gestion de tâches Complète (un nom à modifier), une application web de gestion complète des tâches. Ce projet semble banal au premier abord, mais il offrira une expérience complète grâce aux fonctionnalités suivantes :

1. Possibilité de créer, modifier et supprimer une tâche.
2. Ajouter des sous-tâches.
3. Programmer les tâches.
4. Programmer des alertes.
5. Utiliser des modèles prédéfinis de tâche (ex: Pomodoro).
6. Possibilité pour l'utilisateur de créer ses propres modèles de tâche.
7. Programmer les tâches.

## Installation

1. Clonez ce dépôt.
2. Exécutez `npm install` pour installer les dépendances.
3. Configurez les variables d'environnement dans un fichier `.env`.
   - La variable `MONGODB_CONNEXION_STRING` pour la chaîne de connexion à la base de données MongoDB.
   - La variable `JWT_SECRET` pour le secret Json Web Token.
   - La variable `PORT` pour le port sur lequel le serveur sera lancé.

## Utilisation

1. Exécutez `npm run dev` pour démarrer le serveur de développement.
2. Le serveur fonctionnera à l'adresse `http://localhost:3002` ou à l'adresse spécifiée dans la variable `PORT` de votre fichier `.env`.
3. La documentation est disponible sur ce [lien](https://complet-fullstack-todoapp-backend-1h8zmo6wc.vercel.app).

## Contributions

Les contributions sont les bienvenues ! Veuillez soumettre une demande de pull pour toute amélioration que vous souhaitez apporter.

## Technologies Utilisées

- TypeScript
- Mongoose

## Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).

## Contact

Pour toute question ou commentaire, veuillez contacter [alberkwebproglearning@gmail.com].
