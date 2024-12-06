🎮 PlayStation Games Manager
Ce projet est une application web interactive qui présente une liste de jeux PlayStation avec la possibilité de les afficher en détail ou de modifier leurs informations via un formulaire intégré dans un modal.

📝 Fonctionnalités
1. Affichage des jeux :
- Une liste de jeux est affichée sous forme de cartes Bootstrap avec leurs images, titres et années de sortie.
2. Visualisation des détails d’un jeu :
- Chaque carte contient un bouton "View" qui ouvre un modal affichant l'image et les informations du jeu sélectionné.
3. Modification des informations :
- Un bouton "Edit" permet d'ouvrir un formulaire pré-rempli dans le modal, permettant de modifier le titre, l'année et l'URL de l'image d'un jeu.
- Les modifications sont immédiatement appliquées à l'interface.
4. Utilisation des technologies modernes :
- Bootstrap pour un design réactif.
- JavaScript pour les manipulations DOM et les interactions dynamiques.

📂 Structure des fichiers
├── index.html	Page principale contenant l'interface utilisateur
├── form.html	Formulaire utilisé pour modifier les jeux
├── script.js		Script JavaScript pour gérer la logique
└── README.md	Documentation du projet

🛠️ Technologies utilisées
- HTML5 : Structure et contenu de la page.
- CSS3 (Bootstrap) : Mise en page et design réactif.
- JavaScript (ES6) : Gestion des événements, manipulation du DOM, et logique applicative.
🚀 Comment démarrer le projet
1. Installation des dépendances
Assurez-vous d'avoir Node.js installé, puis exécutez la commande suivante pour installer serve :
npm install -g serve
2. Lancer un serveur local
Positionnez-vous dans le dossier du projet et exécutez :
serve .
Une URL, comme http://localhost:3000, sera affichée dans le terminal.
3. Accéder au projet
Ouvrez votre navigateur et visitez l'URL affichée (http://localhost:3000).

🖼️ Capture d'écran
Exemple d'interface :
Liste des jeux avec boutons View et Edit dans un design Bootstrap.

🧩 Développement et personnalisation
Ajouter un jeu :
Pour ajouter un nouveau jeu, modifiez le tableau gamesList dans script.js :
javascript
{
    title: "Nouveau jeu",
    year: 2025,
    imageUrl: "URL_de_l_image",
    id: 7, // Assurez-vous que l'ID est unique
}

 Modifier l'apparence :
Vous pouvez personnaliser les styles via Bootstrap ou en ajoutant des styles CSS personnalisés dans un fichier séparé ou directement dans une balise <style>.
🛑 Problèmes connus
1. Erreurs de fetch :
Assurez-vous que form.html est dans le même répertoire que index.html. Sinon, mettez à jour l'URL dans le script :
fetch("./chemin/vers/form.html")
 2. Rechargement des boutons :
 Après des modifications, les événements des boutons doivent être réappliqués. Cela est géré automatiquement par la fonction updateGames().

🎉 Crédits
- Développeurs : Daniela & Debora
- Technologies : Bootstrap, JavaScript
