# M413 - TD1 : Réponses aux Questions

## Question 1
- la fonction onLoad() déclenchera l'appel de ma fonction
- grace à getElementById()
- j'ai utilisé l'id du h1

## Question 2
- grâce à la fonction document.getElementsByTagName("h2")[0].innerHTML = 'h2 modif'

## Question 3
- grâce à la fonction document.getElementsByTagName("h2").length

## Question 4
- grâce à la fonction getElementsByClassName("firstOrLast")[0].innerHTML
- avec ça ((document.getElementsByClassName("firstOrLast").length-1)%2 == 0)

## Question 5
- innerHTML permet de récupérer ou de définir le HTML intérieur d'un élément du DOM.

- innerText permet de récupérer ou de définir le texte brut d'un élément du DOM, sans les balises HTML.

- textContent permet de récupérer ou de définir le contenu textuel d'un élément du DOM, y compris les textes des éléments enfants, sans les balises HTML.

## Question 6
- document.querySelector('meta[name]').getAttribute("content")
- var authors = document.querySelectorAll('meta[name="author"]');
  var secondAuthor = authors[document.querySelectorAll('meta[name="author"]').length-1].content;
  console.log(secondAuthor);

## Question 7
- en faisant le calcul suivant :
  const now = Date.now();
  const vacances = Date.parse('19 Jul 2023 00:00:00 GMT');
  const dif = vacances - now;
  const waiting = dif/1000/60/60/24;
- document.getElementById('vacances').textContent=`Il reste ${waiting | 0} jours avant le 19 juillet 2023 `

## Question 8
- j'ai utilisé les 2 mais setTimeout me parait mieux

## Question 9
- j'ai utilisé un EventListener sur l'input de tous les éléments d'ID "color"
- Je l'ai fait changer grâce à la fonction setAttribute() sur la class de l'élément. (à noter que le fait de rajouter un chiffre à la suite d'une chaine de caractère fait qu'il n'est pas considéré comme un chiffre, mais comme une chaine de caractère)

## Question 10
- 

