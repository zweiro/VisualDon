# Manipulation du DOM

## Manipulations

1. J'ai sélectionné l'élément parent dans l'inspecteur du navigateur, puis demandé à le stocker comme variable globale.
2. J'ai ensuite fait en sorte d'isoler tous les éléments que l'on souhaite avec la fonction `querySelector()` et des sélecteurs css.
3. Pour ce qui est des étoiles, il a fallu récupérer le data-attribut rating
4. Une fois le tableau affiché dans la console, il est possible de le copier avec un clic droit et de le coller dans un fichier json.

```javascript
var cl = (el, tag) => Array.from(el.querySelectorAll(tag))

cl(temp1, 'div.thumbnail')
  .map(el => {
    let product = el.querySelector("a.title").textContent
    let price = el.querySelector("h4.price").textContent
    let rating = el.querySelector("div.ratings > p:not(.pull-right)").dataset.rating

    return {
        produit: product,
        prix: price,
        etoiles: rating
    }
  })
```