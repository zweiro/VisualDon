# La programmation réactive

## Décrivez ce qu'est la programmation réactive ?

La programmation réactive est un paradigme de programmation qui vise à propager une valeur à tous les éléments qui en sont dépendants. Par exemple on peut imaginer l'élément <span> d'un site web qui afficherait la valeur d'un champ texte utilisateur. L'idée de la programmation réactive est que l'affichage suive l'état de la valeur.

## Comment l'utiliser en javascript?

Pour utiliser ce concept en javascript, il faut mettre en place un système d'évènement sur la valeur qu'on veut "monitorer". Lorsque l'événement est appelé, on appel une fonction de mise à jour des éléments dépendants. Par exemple une fonction update() qui viendrait mettre à jour l'affichage.

## Quelle est l'alternative?

Certains Frameworks frontends tels que Svelt, Vuejs ou encore React permette de facilement utiliser ce paradigme.