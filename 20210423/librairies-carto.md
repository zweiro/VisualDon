#Cartographie

##Pourquoi doit-on projeter des données cartographiques?
Car nous souhaitons représenter les données géographiques d'une sphère (la terre) sur une suface plane (la carte). Cette étape représente la projection.

##Qu'est ce qu'Open street map?
Open Street map est une plateforme de cartographie collaborative.

##Quelles fonctions D3 sont spécifiques à la cartographie?
`geoPath()` : Génère les formes géométrique sur les données cartograpiques.
`geoMercator()` : Dessine la projection sphérique de type mercator. 
`geoTransform()` : Dessine une projection géométrique arbitraire. 
`geoOrthographic()` : Dessine la projection sphérique de type orthographic.

##À quoi sert le format topojson? En quoi est-il différent du geojson?
C'est un format beaucoup moins volumineux car il contient un peu moins de données.

##À quoi sert turf? Décrivez ce que font trois fonctions de cette libraire
Turf est une librairie permettant d'effectuer rapidement des opérations sur des données géographiques.
`destination()` : Défini un point en fonction d'un point de départ, d'un angle et d'une distance
`length()` : Calcule la distance entre deux points
`along()` : Retourne un point à une distance spécifique le long d'un tracé