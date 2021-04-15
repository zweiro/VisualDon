# Transitions



## Comment fonctionnent les transitions en D3 ?

Pour effectuer une animation avec D3 il faut dans un premier temps réaliser les éléments à animer puis leur appliquer la fonction `transition()` pour la lancer. `duration(duree)` permet ensuite de lui appliquer une durée. Il ne reste plus qu'à définir les attributs qui vont changer durant la transition.

## Et avec svelte?

Avec Svelte il faut utiliser la librairie `tweened` pour affecter une durée et un type de transition pour chaque valeur réactive de notre canvas. 