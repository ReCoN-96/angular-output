# OutputAngular

Go out with @Output
Pour t'entraîner, tu vas créer 2 components avec une hiérarchie parent/enfant. Le rôle du composant enfant sera d'afficher une liste de questions sous forme checkbox. A chaque réponse, le composant parent doit être notifié de la réponse.\ Le composant parent se nommera YodaComponent et fera office de juge. Il déterminera, en fonction du nombre de bonnes réponses, si tu es digne de la force ou non !\ Le composant enfant se nommera QuestionComponent et affichera une liste de questions cochables. Seul le nom de la question sera affiché. Chaque question doit être précédée d'une checkbox.\ Les réponses doivent être stockées dans un tableau et affichées dans YodaComponent. En plus d'afficher la question, tu indiqueras la bonne réponse ainsi que la moyenne sur 20 (chaque réponse possède un certain nombre de points).\

Si la moyenne est supérieure à 12, alors Yoda affichera le message suivant : "Okay young padawan now you feel the dev force !" sinon affichera "Go and never come back...".

Les questions de Maître Yoda : | ID | Question | Réponse | Point | |----|---------------------------------------------------------|---------|----------| | 1 | Aimes-tu les logiciels libres ? | Oui | 3 points | | 2 | La force a-t-elle créé Linux ? | Oui | 1 points | | 3 | Est-ce que le code, c'est la vie ? | Oui | 2 points | | 4 | PrÉfÈres-tu les GUI au CLI ? | Non | 3 points | | 5 | L'histoire de la force a-t-elle écrite par Git ? | Oui | 2 points | | 6 | La documentation est-elle le meilleur ami de la force ? | Oui | 2 points | | 7 | Penses-tu que tester c'est douter ? | Non | 1 points | | 8 | Javascript est-il le Java du web ? | Non | 1 points | | 9 | L'open source se situe dans les Alpes ? | Non | 4 points | | 10 | Angular est-il une pierre magique ? | Non | 1 points |

Modèle de données de la classe Question :\ Liste des propriétés :

id de type string
title de type string en visibilité public
answer de type boolean en visibilité public (true s'il s'agit d'une bonne réponse, sinon false)
score de type number en visibilité public
On doit retrouver toutes les propriétés dans le constructeur de ta classe
Modèle de données de la classe YodaComponent :\ Liste des propriétés :

answers un array de type Question en visibilité public
average de type number en visibilité public
questions un array de type Question en visibilité public
Liste des méthodes :

onGetAnswer de type void
calculateAverage de type number, avec 2 paramètres : nombre de points et le nombre total de points, et retourne la moyenne
Modèle de données de la classe QuestionComponent:\ Liste des propriétés : <!-- - `questions` de type `array` de type `Question` en visibilité `public` -->

id de type string
question de type string en visibilité public
getAnswer de type EventEmitter en visibilité public
Liste des méthodes :

sendAnswer de type void
Structure du répertoire src/app :

app
├── ...
├── common
│   └── point.model.ts
├── yoda
│   ├── yoda.component.css
│   ├── yoda.component.html
│   ├── yoda.component.spec.ts
│   └── yoda.component.ts
└── question
    ├── question.component.css
    ├── question.component.html
    ├── question.component.spec.ts
    └── question.component.ts
Les dossier common, yoda et question doivent être au même niveau.\ Certains répertoires (générés automatiquement par ng) ont volontairement été omis. Les fichiers *.spec.ts ne sont pas obligatoires.

Pour réaliser ce challenge, tu devras :

Créer une classe Question (question.model.ts) représentant le modèle de données d'une question.
Générer un composant <app-yoda> (YodaComponent) sera chargé d'afficher les questions
Générer un composant <app-question> (QuestionComponent) qui, il sera chargé d'afficher la liste des questions
Déclarer <app-question> en tant que composant enfant de <app-yoda> dans le HTML.
A chaque réponse, maître <app-yoda> sera notifié.
Critères de validation
La structure du projet est respectée.
Le modèle de données Yoda est respecté.
Les noms des composants, leurs propriétés et méthodes sont respectés.
Toutes les variables sont correctement typées.
Les questions sont transmises de <app-yoda> vers <app-question> en utilisant @Input.
Le composant <app-yoda> utilisera la directive *ngFor pour afficher autant de composants <app-question> qu'il y a de questions
Les réponses sont transmises de <app-question> vers <app-yoda> en utilisant @Output.
Chaque réponse doit être stockée dans le tableau answers.
<app-yoda> calcule la moyenne.
<app-yoda> affiche la moyenne.
<app-yoda> affiche le bon message en fonction de la moyenne.
