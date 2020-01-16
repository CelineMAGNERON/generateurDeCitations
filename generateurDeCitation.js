var citations = ["", "", "", "", ""];
var auteur = "";
var aleatoire = null;
var flux = [
    {
        "citation": "Il n'y a pas de Buddha, il n'y a pas de Loi ; pas de pratiques à cultiver, pas de fruits à éprouver. <br />Que voulez-vous donc chercher auprès d'autrui? Aveugles qui vous mettez une tête sur la tête. Qu'est-ce qu'il vous manque ? (...) Vous n'avez pas confiance et vous cherchez au-dehors.",
        "auteur": "Lin-Tsi"
    },
    {
        "citation": "- Un dernier mot Miss Quinn? <br />- Anticonstitutionnellement ! <br />- Pardon ? <br />- Plus long mot du dico. Quitte à en dire un dernier, autant qu'il soit long. ",
        "auteur": "Harley Quinn"
    },
    {
        "citation": "Fantasmes de rêves, fleurs de l'air : <br />Pourquoi se fatiguer à les saisir ?",
        "auteur": "Lin-Tsi"
    },
    {
        "citation": "Vous savez que vous ne savez rien. <br />Découvrez ce qu'est cette connaissance. Cela est la Libération.",
        "auteur": "Ramana Maharshi"
    },
     {
        "citation": "Aussi vite qu’on aille … aussi loin qu’on coure … on ne peut pas se distancer soi-même !",
        "auteur": "Barry Allen - Flash"
    }
    /*{
        "citation": "citation5",
        "auteur": "auteur5"
    }*/
];

$('document').ready(function () {


    function auteurAleatoire() {
        aleatoire = Math.floor(Math.random() * citations.length);
        $('.auteur').html(flux[aleatoire].auteur);
        $('.citation').html(flux[aleatoire].citation);
    }
    /*$('.auteur').html(auteur[aleatoire]);
    $('.citation').html(citations[aleatoire]);*/

    auteurAleatoire();

    // Action du bouton Générer//
    $('#generer').click(function () {
        auteurAleatoire();
        //$('.citation').html(citations[aleatoire]);
    })

    $('#twitter').click(function () {
        //action du bouton Twitter
        window.open('https://twitter.com/intent/tewwet?text=' + citations + " - " + auteur + '&via=ant')

    })

});
