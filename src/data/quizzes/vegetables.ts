import type { Quiz } from '../../types';

export const vegetables: Quiz = {
  id: 'vegetables',
  title: 'Quel légume es-tu ?',
  emoji: '🥕',
  hidden: true,
  description: 'Petit pois, piment ou pomme de terre ? Découvre en quel légume tu pourrais te réincarner.',
  personalities: [
    {
      id: 'pea',
      name: 'Petit pois',
      emoji: '🫛',
      description:
        'Tu aimes tes habitudes, le calme et les journées sans surprise. Discret·e et fiable, tu ne fais jamais de vagues : certaines personnes te trouvent un peu ennuyeux·se, mais c’est toujours sur toi qu’on compte.',
    },
    {
      id: 'carrot',
      name: 'Carotte',
      emoji: '🥕',
      description:
        'Intellectuel·le jusqu’au bout des ongles, tu dévores les livres et tu as un avis éclairé sur tout. Un brin snob, toujours tiré·e à quatre épingles, tu adores expliquer ce que tu sais, même quand personne ne t’a rien demandé, et tu aimes avoir raison.',
    },
    {
      id: 'potato',
      name: 'Pomme de terre',
      emoji: '🥔',
      description:
        'Bon·ne vivant·e, tu aimes les bons petits plats, ton canapé et les longues soirées à la maison. Facile à vivre, tu ne te prends jamais la tête… et tu ne dis jamais non à une bonne raclette.',
    },
    {
      id: 'chili',
      name: 'Piment',
      emoji: '🌶️',
      description:
        'Grande gueule au sang chaud, tu dis tout haut ce que les autres pensent tout bas, et tu t’emportes au quart de tour. Tu vis tout intensément : avec toi, ça pique parfois, mais ça ne manque jamais d’ambiance.',
    },
    {
      id: 'tomato',
      name: 'Tomate',
      emoji: '🍅',
      description:
        'Curieux·se de tout, tu remets en question même ce que tout le monde tient pour acquis. Avec toi, aucune discussion ne reste simple : tu lances des débats sans fin, tu changes de camp juste pour voir, et à 2 h du matin, tu te demandes encore si un hot-dog est un sandwich. Et comme tu es ouvert·e d’esprit, il suffit de bons arguments pour te faire changer d’avis.',
    },
    {
      id: 'bell-pepper',
      name: 'Poivron',
      emoji: '🫑',
      description:
        'Solaire et pétillant·e, tu vois toujours le bon côté des choses. Tu adores sortir, rencontrer du monde et mettre de la couleur dans ta vie comme dans celle des autres. Ta bonne humeur est contagieuse.',
    },
    {
      id: 'leek',
      name: 'Poireau',
      emoji: '🎋',
      description:
        'Un peu à part, tu vis dans ton monde, avec tes idées farfelues, tes manies étranges, tes goûts inattendus et un humour que tout le monde ne comprend pas. Rentrer dans le moule ? Très peu pour toi.',
    },
    {
      id: 'onion',
      name: 'Oignon',
      emoji: '🧅',
      description:
        'Sensible et timide, tu ressens tout très fort, mais tu gardes souvent tes émotions pour toi. Tu t’interroges sans cesse sur toi-même, et derrière chacune de tes couches s’en cache une autre.',
    },
    {
      id: 'broccoli',
      name: 'Brocoli',
      emoji: '🥦',
      description:
        'Discipliné·e, tu prends soin de toi : sport, sommeil, assiette équilibrée, rien n’est laissé au hasard. Tu as de la volonté à revendre, et tu ne peux pas t’empêcher de pousser tes proches à faire pareil.',
    },
    {
      id: 'brussels-sprout',
      name: 'Chou de Bruxelles',
      emoji: '🥬',
      description:
        'Au premier abord, tu es grognon·ne, sarcastique et pas très facile d’accès, et beaucoup de gens te jugent trop vite. Les personnes qui te laissent une chance découvrent un cœur tendre et une loyauté à toute épreuve.',
    },
  ],
  questions: [
    {
      id: 'shopping-cart',
      text: 'Au supermarché, ton chariot ressemble à quoi ?',
      answers: [
        { id: 'same-list', text: 'Exactement la même liste que la semaine dernière.', weights: { pea: 1 } },
        { id: 'treats', text: 'Pas mal de gourmandises qui n’étaient pas sur la liste.', weights: { potato: 0.8 } },
        { id: 'unknown-products', text: 'Des produits que personne n’achète jamais.', weights: { leek: 0.9, tomato: 0.4 } },
        { id: 'no-treats', text: 'Des fruits, des légumes, et zéro écart.', weights: { broccoli: 1 } },
      ],
    },
    {
      id: 'bad-joke',
      text: 'Quelqu’un raconte une blague pas drôle. Tu…',
      answers: [
        { id: 'polite-laugh', text: 'Ris poliment.', weights: { pea: 0.8, potato: 0.4, onion: 0.4 } },
        { id: 'laugh-anyway', text: 'Éclates de rire quand même.', weights: { 'bell-pepper': 1, potato: 0.4 } },
        { id: 'explain', text: 'Expliques pourquoi elle ne fonctionne pas.', weights: { carrot: 0.9 } },
        { id: 'eye-roll', text: 'Lèves les yeux au ciel.', weights: { 'brussels-sprout': 0.8, chili: 0.3 } },
        { id: 'say-it', text: 'Dis franchement qu’elle est nulle.', weights: { chili: 1 } },
        { id: 'only-one', text: 'Es la seule personne à la trouver vraiment drôle.', weights: { leek: 1 } },
        { id: 'why-funny', text: 'Te demandes à voix haute ce qui rend une blague drôle.', weights: { tomato: 0.8 } },
      ],
    },
    {
      id: 'vegetable-garden',
      text: 'Tu as un petit potager. Il ressemble à quoi ?',
      answers: [
        { id: 'straight-rows', text: 'Des rangs bien droits, et un arrosage à heure fixe.', weights: { broccoli: 0.8, pea: 0.5 } },
        { id: 'latin-names', text: 'Tu connais chaque plante par son nom latin.', weights: { carrot: 1 } },
        { id: 'boots', text: 'Des légumes qui poussent dans de vieilles bottes et une théière.', weights: { leek: 1 } },
        { id: 'table', text: 'Surtout une table et des chaises, pour l’apéro au soleil.', weights: { potato: 0.9 } },
        { id: 'experiments', text: 'Un terrain d’expériences : greffes, croisements, engrais maison.', weights: { tomato: 0.9 } },
        { id: 'fence', text: 'Une excuse pour discuter avec les voisin·es par-dessus la clôture.', weights: { 'bell-pepper': 0.8 } },
      ],
    },
    {
      id: 'noisy-neighbor',
      text: 'Dimanche, 8 h : ton·ta voisin·e commence des travaux. Tu…',
      answers: [
        { id: 'knock', text: 'Vas frapper chez ellui en pyjama, très remonté·e.', weights: { chili: 1 } },
        { id: 'note', text: 'Glisses sous sa porte un petit mot plein d’ironie.', weights: { 'brussels-sprout': 1 } },
        { id: 'earplugs', text: 'Mets des bouchons d’oreille et attends que ça passe.', weights: { pea: 0.9 } },
        { id: 'already-up', text: 'Étais déjà debout depuis longtemps.', weights: { broccoli: 0.8, pea: 0.3 } },
        { id: 'help', text: 'Vas voir ce qu’iel construit, et finis par lui donner un coup de main.', weights: { 'bell-pepper': 0.7 } },
        { id: 'law', text: 'Vérifies ce que dit la loi sur le bruit le dimanche.', weights: { carrot: 1 } },
      ],
    },
    {
      id: 'life-tradeoff',
      text: 'Tu préfères…',
      answers: [
        { id: 'no-surprises', text: 'Une vie sans aucune surprise, ni bonne ni mauvaise.', weights: { pea: 1 } },
        { id: 'twists', text: 'Une vie pleine de rebondissements, même les mauvais.', weights: { chili: 0.8 } },
        { id: 'liked-by-all', text: 'Être apprécié·e de tout le monde, sans que personne ne te connaisse vraiment.', weights: { 'bell-pepper': 0.6 } },
        { id: 'open-questions', text: 'Chercher toute ta vie des réponses, sans jamais être sûr·e d’en trouver.', weights: { tomato: 0.9 } },
        { id: 'few-friends', text: 'Avoir seulement quelques ami·es, mais qui te connaissent par cœur.', weights: { onion: 0.7, 'brussels-sprout': 0.6 } },
      ],
    },
    {
      id: 'wardrobe',
      text: 'Ta garde-robe, c’est plutôt…',
      answers: [
        { id: 'basics', text: 'Des basiques qui vont avec tout, sans te poser de questions.', weights: { pea: 1 } },
        { id: 'elegant', text: 'Des tenues élégantes, toujours soignées.', weights: { carrot: 0.7 } },
        { id: 'festive', text: 'Ce que tu as de plus festif, même un mardi.', weights: { 'bell-pepper': 0.9 } },
        { id: 'thrifted', text: 'Des pièces chinées dont on te demande souvent d’où elles sortent.', weights: { leek: 1 } },
        { id: 'sportswear', text: 'Des vêtements de sport, même en dehors du sport.', weights: { broccoli: 0.9 } },
        { id: 'comfy', text: 'Tout ce qui est doux et confortable.', weights: { potato: 0.8 } },
      ],
    },
    {
      id: 'family-debate',
      text: 'Au repas de famille, la conversation tourne au débat. Tu…',
      answers: [
        { id: 'raise-voice', text: 'Hausses le ton, et ne lâches rien.', weights: { chili: 1 } },
        { id: 'other-side', text: 'Prends le camp que personne ne défend.', weights: { tomato: 0.9, leek: 0.3 } },
        { id: 'sources', text: 'Sors tes sources et tes chiffres.', weights: { carrot: 0.9, tomato: 0.3 } },
        { id: 'shrink', text: 'Te fais tout·e petit·e en attendant que ça passe.', weights: { onion: 0.8, pea: 0.4 } },
        { id: 'dessert', text: 'Proposes de passer au dessert.', weights: { potato: 0.8, pea: 0.4 } },
        { id: 'joke', text: 'Détends l’atmosphère avec une blague.', weights: { 'bell-pepper': 0.8, potato: 0.3 } },
        { id: 'cold-remark', text: 'Lâches une petite phrase qui jette un froid.', weights: { 'brussels-sprout': 0.8, chili: 0.3 } },
      ],
    },
    {
      id: 'blamed-mistake',
      text: 'Ton·ta responsable te reproche une erreur qui n’est pas la tienne. Tu…',
      answers: [
        { id: 'snap', text: 'Réponds sèchement, sans réfléchir.', weights: { chili: 1 } },
        { id: 'comeback', text: 'Lâches une réplique bien sentie, l’air de rien.', weights: { 'brussels-sprout': 0.9 } },
        { id: 'days', text: 'Y repenses pendant des jours.', weights: { onion: 1 } },
        { id: 'prove', text: 'Prouves, point par point, que ce n’était pas toi.', weights: { carrot: 0.8 } },
        { id: 'maybe-me', text: 'Te demandes si tu n’y es pas un peu pour quelque chose, quand même.', weights: { tomato: 0.8, onion: 0.3 } },
        { id: 'say-nothing', text: 'Ne dis rien sur le moment.', weights: { pea: 0.8, onion: 0.3 } },
        { id: 'smile', text: 'Le prends avec le sourire.', weights: { 'bell-pepper': 0.7, potato: 0.4 } },
      ],
    },
    {
      id: 'vegetable-election',
      text: 'Tu es candidat·e à l’élection du légume de l’année. Ta campagne ?',
      answers: [
        { id: 'program', text: 'Un programme détaillé de quarante pages.', weights: { carrot: 0.9 } },
        { id: 'barbecue', text: 'Un grand barbecue ouvert à tout le monde.', weights: { potato: 0.7, 'bell-pepper': 0.5 } },
        { id: 'rethink-everything', text: 'Un programme qui remet tout à plat, sans aucun tabou.', weights: { tomato: 0.9 } },
        { id: 'slogan', text: 'Un slogan que personne ne comprend.', weights: { leek: 1 } },
        { id: 'attacks', text: 'Des attaques franches contre les autres candidat·es.', weights: { chili: 0.8, 'brussels-sprout': 0.3 } },
        { id: 'order-promise', text: 'La promesse de remettre tout le potager en ordre.', weights: { broccoli: 0.9 } },
        { id: 'withdraw', text: 'Aucune : tu doutes, et finis par te retirer.', weights: { onion: 0.8 } },
      ],
    },
    {
      id: 'sad-movie',
      text: 'Un film triste passe à la télé. Tu…',
      answers: [
        { id: 'shaken', text: 'Es bouleversé·e pour le reste de la soirée.', weights: { onion: 1 } },
        { id: 'pretend', text: 'Fais semblant de trouver ça niais, mais regardes jusqu’au bout.', weights: { 'brussels-sprout': 1 } },
        { id: 'comedy', text: 'Changes de chaîne pour une comédie.', weights: { 'bell-pepper': 0.8 } },
        { id: 'talk-back', text: 'Commentes à voix haute et t’énerves contre les personnages.', weights: { chili: 0.8 } },
        { id: 'discuss-ending', text: 'Refais la fin avec tout le monde après le générique.', weights: { tomato: 0.7 } },
        { id: 'blanket', text: 'Le regardes sous un plaid, avec de quoi grignoter.', weights: { potato: 0.8 } },
      ],
    },
    {
      id: 'school-canteen',
      text: 'À la cantine, quand tu étais petit·e, tu…',
      answers: [
        { id: 'seconds', text: 'Demandais toujours du rab.', weights: { potato: 1 } },
        { id: 'usual-seat', text: 'Mangeais sagement, à ta place habituelle.', weights: { pea: 1 } },
        { id: 'fries-yogurt', text: 'Trempais tes frites dans ton yaourt.', weights: { leek: 1 } },
        { id: 'anecdote', text: 'Avais toujours une anecdote sur ce qu’il y avait dans l’assiette.', weights: { carrot: 0.9 } },
        { id: 'picky', text: 'Critiquais tout ce qu’on te servait.', weights: { 'brussels-sprout': 0.7, chili: 0.3 } },
        { id: 'food-fight', text: 'Lançais les batailles de nourriture.', weights: { chili: 0.8, 'bell-pepper': 0.4 } },
      ],
    },
    {
      id: 'cant-stand',
      text: 'Ce que tu ne supportes pas ?',
      answers: [
        { id: 'confident-nonsense', text: 'Les gens qui affirment n’importe quoi avec assurance.', weights: { carrot: 1, tomato: 0.4 } },
        { id: 'last-minute', text: 'Les changements de programme de dernière minute.', weights: { pea: 1 } },
        { id: 'cruelty', text: 'La méchanceté gratuite.', weights: { onion: 1 } },
        { id: 'hypocrisy', text: 'L’hypocrisie.', weights: { chili: 0.8, 'brussels-sprout': 0.6 } },
        { id: 'conformity', text: 'Qu’on te demande de faire comme tout le monde.', weights: { leek: 1 } },
        { id: 'never-change-mind', text: 'Les gens qui ne changent jamais d’avis.', weights: { tomato: 0.9 } },
        { id: 'no-effort', text: 'Les gens qui ne font aucun effort.', weights: { broccoli: 1 } },
      ],
    },
    {
      id: 'friend-birthday',
      text: 'Pour l’anniversaire d’un·e ami·e, tu…',
      answers: [
        { id: 'big-meal', text: 'Cuisines un énorme repas.', weights: { potato: 1 } },
        { id: 'surprise-party', text: 'Organises une fête surprise.', weights: { 'bell-pepper': 0.8, chili: 0.4 } },
        { id: 'letter', text: 'Écris une lettre très personnelle.', weights: { onion: 1 } },
        { id: 'never-forget', text: 'N’oublies jamais : la date est notée depuis janvier.', weights: { pea: 0.8, broccoli: 0.4 } },
        { id: 'odd-gift', text: 'Trouves un cadeau auquel personne n’aurait pensé, et qui tombe pile juste.', weights: { leek: 0.8 } },
        { id: 'remember-late', text: 'T’en souviens au dernier moment.', weights: { leek: 0.5 } },
      ],
    },
  ],
};
