import type { Quiz } from '../../types';

export const sports: Quiz = {
  id: 'sports',
  title: 'Quel sport est fait pour toi ?',
  emoji: '🏅',
  hidden: true,
  description: 'Yoga, boxe, échecs ou pétanque ? Découvre le sport qui te ressemble vraiment, même si tu n’en fais jamais.',
  personalities: [
    {
      id: 'yoga',
      name: 'Yoga',
      emoji: '🧘',
      description:
        'Calme et à l’écoute, tu sens ce qui se passe en toi, et chez les autres, avant tout le monde. Tu cherches l’équilibre plutôt que la performance, et tu prends soin de ton corps comme de ta tête.',
    },
    {
      id: 'volleyball',
      name: 'Volley',
      emoji: '🏐',
      description:
        'Tu vis pour ton équipe. Plein·e d’énergie, tu tapes dans la main de tout le monde après chaque point, même perdu, et tu ne laisses personne de côté. Tu préfères faire la passe parfaite plutôt que smasher toi-même, et tu plonges en manchette sur les balles que tout le monde croyait perdues. Seul·e, tu t’ennuies : une victoire n’a de goût que partagée.',
    },
    {
      id: 'hiking',
      name: 'Randonnée',
      emoji: '🥾',
      description:
        'Tu aimes les grands espaces, explorer chaque recoin et prendre ton temps. Prévoyant·e, tu avances à ton rythme et tu t’arrêtes toujours pour admirer la vue. Pour toi, le chemin compte plus que l’arrivée.',
    },
    {
      id: 'chess',
      name: 'Échecs',
      emoji: '♟️',
      description:
        'Tu réfléchis avant d’agir, souvent plusieurs étapes à l’avance. Concentré·e, tu aimes comprendre comment les choses fonctionnent et trouver la solution à laquelle personne n’avait pensé.',
    },
    {
      id: 'video-games',
      name: 'Jeux vidéo',
      emoji: '🎮',
      description:
        'Tu apprends en essayant : tu rates, tu recommences, et tu finis par y arriver. Tu oublies souvent l’heure, et tu es bien plus à l’aise derrière un écran que face à une foule. L’effort physique, en revanche… tu préfères le laisser aux autres.',
    },
    {
      id: 'climbing',
      name: 'Escalade',
      emoji: '🧗',
      description:
        'Tu aimes les défis qui te font un peu peur, et sentir ton cœur battre. Tu as le trac, mais tu y vas quand même. Ta plus grande fierté : réussir ce que tu croyais impossible.',
    },
    {
      id: 'dance',
      name: 'Danse',
      emoji: '💃',
      description:
        'Dès que la musique démarre, tu as envie de bouger. Tu adores te dépenser pour le simple plaisir, sans compter et sans chercher à gagner. Spontané·e et expressif·ve, tu vis tout à fond, et ta bonne humeur est contagieuse.',
    },
    {
      id: 'petanque',
      name: 'Pétanque',
      emoji: '🎯',
      description:
        'Convivial·e et blagueur·se, tu connais tout le monde, tu chambres avec bonne humeur et tu ne te prends jamais la tête. Pour toi, le sport, c’est surtout l’apéro qui va avec. Le score ? On en reparlera.',
    },
    {
      id: 'boxing',
      name: 'Boxe',
      emoji: '🥊',
      description:
        'Franc·he et direct·e, tu dis les choses en face et tu ne recules pas devant un conflit. Quand la colère monte, tu la transformes en énergie au lieu de la ruminer. Et tu es dur·e au mal.',
    },
    {
      id: 'running',
      name: 'Course à pied',
      emoji: '🏃',
      description:
        'Discipliné·e, tu as ta routine et tu t’y tiens, même quand il pleut. Tu te fixes des objectifs chiffrés, tu notes tes progrès, et la seule personne que tu cherches à battre, c’est la personne que tu étais hier.',
    },
    {
      id: 'ping-pong',
      name: 'Ping-pong',
      emoji: '🏓',
      description:
        'Tu veux gagner, point. Tu t’entraînes plus que tout le monde, tu décortiques chaque défaite, et tu ne lâches rien jusqu’au dernier point. Perdre te reste en travers de la gorge pendant des jours.',
    },
  ],
  questions: [
    {
      id: 'cooking-for-friends',
      text: 'Tu invites des ami·es à dîner. Ça ressemble à quoi ?',
      answers: [
        { id: 'shared-dish', text: 'Un grand plat au milieu de la table, et tout le monde se sert.', weights: { petanque: 0.8, volleyball: 0.5 } },
        { id: 'planned-menu', text: 'Un menu prévu dans les moindres détails, testé la veille.', weights: { chess: 0.7, hiking: 0.6 } },
        { id: 'ask-tastes', text: 'Tu demandes d’abord ce que chaque personne aime ou ne mange pas.', weights: { yoga: 0.8, volleyball: 0.5 } },
        { id: 'new-recipe', text: 'Une recette jamais testée. Si c’est raté, tant pis.', weights: { 'video-games': 0.8, climbing: 0.5 } },
      ],
    },
    {
      id: 'new-sport',
      text: 'Tu essaies un sport pour la première fois. Tu…',
      answers: [
        { id: 'learn-on-the-go', text: 'Te lances sans attendre les explications, et apprends sur le tas.', weights: { 'video-games': 0.8, climbing: 0.4 } },
        { id: 'watch-others', text: 'Regardes d’abord comment font les autres.', weights: { chess: 0.7, climbing: 0.6, 'video-games': 0.4 } },
        { id: 'bring-group', text: 'Embarques tout ton groupe pour essayer ensemble.', weights: { volleyball: 1 } },
        { id: 'no-pressure', text: 'Y vas sans pression, tu n’es pas là pour être le·la meilleur·e.', weights: { yoga: 1, petanque: 0.5 } },
        { id: 'hardest', text: 'Vises tout de suite l’exercice le plus dur.', weights: { climbing: 0.8, boxing: 0.4 } },
        { id: 'first-match', text: 'Réclames un vrai match au bout de dix minutes.', weights: { 'ping-pong': 0.8 } },
      ],
    },
    {
      id: 'missed-train',
      text: 'Tu as raté ton train. Tu…',
      answers: [
        { id: 'other-way', text: 'Trouves un autre moyen d’arriver à l’heure.', weights: { chess: 0.8, hiking: 0.6 } },
        { id: 'next-one', text: 'Prends le suivant sans t’énerver.', weights: { yoga: 0.7, petanque: 0.5 } },
        { id: 'train-joke', text: 'Fais une blague sur les trains à la personne qui l’a raté avec toi.', weights: { petanque: 1 } },
        { id: 'shared-taxi', text: 'Proposes aux autres personnes qui l’ont raté de partager un taxi.', weights: { volleyball: 1 } },
        { id: 'tell-desk', text: 'Dis au guichet ce que tu en penses, sans mâcher tes mots.', weights: { boxing: 0.8 } },
        { id: 'wander', text: 'Profites de l’attente pour aller faire un tour dans le quartier.', weights: { hiking: 0.8 } },
        { id: 'schedule-panic', text: 'Recalcules toute ta journée, minute par minute.', weights: { running: 0.6, chess: 0.3 } },
      ],
    },
    {
      id: 'old-mistake',
      text: 'Une erreur que tu as faite il y a longtemps te revient en tête. Tu…',
      answers: [
        { id: 'still-annoyed', text: 'T’en veux encore : tu détestes avoir eu tort.', weights: { 'ping-pong': 0.8 } },
        { id: 'accept', text: 'L’acceptes : elle fait partie de ton histoire.', weights: { yoga: 1 } },
        { id: 'good-story', text: 'En ris : ça fait une bonne histoire à raconter.', weights: { petanque: 1 } },
        { id: 'move-on', text: 'Te dis que c’est fait, et passes à autre chose.', weights: { boxing: 0.5, yoga: 0.3 } },
        { id: 'promise', text: 'Te promets de ne jamais refaire la même erreur.', weights: { running: 0.7, climbing: 0.3 } },
      ],
    },
    {
      id: 'cellar-door',
      text: 'Tu trouves une porte mystérieuse dans ta cave. Tu…',
      answers: [
        { id: 'hesitate', text: 'Hésites longtemps, la main sur la poignée, puis ouvres quand même.', weights: { climbing: 1 } },
        { id: 'who-is-there', text: 'Ouvres d’un coup et lances « Qui est là ? ».', weights: { boxing: 1 } },
        { id: 'light', text: 'Vas chercher de quoi t’éclairer avant d’aller plus loin.', weights: { hiking: 0.7, chess: 0.5 } },
        { id: 'lock', text: 'Examines la serrure pour comprendre comment elle s’ouvre.', weights: { chess: 0.8, 'video-games': 0.4 } },
        { id: 'call-people', text: 'Appelles du monde pour venir voir avec toi.', weights: { volleyball: 0.6, petanque: 0.6 } },
        { id: 'later', text: 'Refermes. Ce sera pour un autre jour.', weights: { 'video-games': 0.6, petanque: 0.4 } },
      ],
    },
    {
      id: 'pouring-rain',
      text: 'Il pleut des cordes, et tu avais prévu de sortir. Tu…',
      answers: [
        { id: 'go-anyway', text: 'Y vas quand même, trempé·e mais content·e.', weights: { running: 0.8, boxing: 0.4, hiking: 0.4 } },
        { id: 'bag', text: 'Sors : tu as toujours ce qu’il faut dans ton sac.', weights: { hiking: 0.8, chess: 0.3 } },
        { id: 'couch', text: 'Annules sans regret, et restes au chaud sur le canapé.', weights: { 'video-games': 0.8, yoga: 0.4, petanque: 0.3 } },
        { id: 'invite', text: 'Transformes ça en soirée chez toi, avec qui veut venir.', weights: { petanque: 0.8, volleyball: 0.4 } },
        { id: 'loud-playlist', text: 'Mets ta playlist préférée à fond.', weights: { dance: 0.8 } },
      ],
    },
    {
      id: 'lottery',
      text: 'Tu gagnes au loto. Ta première dépense ?',
      answers: [
        { id: 'long-trip', text: 'Un long voyage, sans itinéraire ni date de retour.', weights: { hiking: 0.8, climbing: 0.3 } },
        { id: 'big-party', text: 'Une énorme fête pour ton équipe, ton club, ta bande.', weights: { volleyball: 0.8, petanque: 0.6 } },
        { id: 'no-more-effort', text: 'Quelqu’un pour porter tes courses et monter les escaliers à ta place.', weights: { 'video-games': 0.8 } },
        { id: 'coach', text: 'Un·e coach personnel·le.', weights: { 'ping-pong': 0.7 } },
        { id: 'loved-ones', text: 'De quoi mettre tes proches à l’abri.', weights: { volleyball: 0.6 } },
        { id: 'think-first', text: 'Rien tout de suite : tu prends le temps d’y réfléchir.', weights: { chess: 0.6, yoga: 0.5 } },
      ],
    },
    {
      id: 'good-competition',
      text: 'Pour toi, une compétition réussie, c’est…',
      answers: [
        { id: 'win', text: 'Gagner. Le reste, ce sont des excuses.', weights: { 'ping-pong': 1 } },
        { id: 'better-than-last', text: 'Avoir fait mieux que la dernière fois, même en finissant loin.', weights: { running: 1, climbing: 0.4 } },
        { id: 'together', text: 'Avoir gagné ensemble, même sans avoir brillé.', weights: { volleyball: 1, petanque: 0.3 } },
        { id: 'all-out', text: 'Avoir tout donné, jusqu’à ne plus tenir debout.', weights: { boxing: 0.7, volleyball: 0.6 } },
        { id: 'nervous', text: 'Y être allé·e alors que tu en avais l’estomac noué.', weights: { climbing: 1 } },
        { id: 'good-day', text: 'Avoir passé une bonne journée, quel que soit le résultat.', weights: { petanque: 0.8, yoga: 0.6 } },
        { id: 'again', text: 'Avoir envie de recommencer tout de suite.', weights: { dance: 0.8 } },
      ],
    },
    {
      id: 'cancelled-evening',
      text: 'Un·e ami·e annule votre soirée à la dernière minute. Tu…',
      answers: [
        { id: 'not-ok', text: 'Lui dis que ça ne se fait pas.', weights: { boxing: 1 } },
        { id: 'gather-others', text: 'Rassembles les autres : la soirée aura lieu quand même.', weights: { volleyball: 1 } },
        { id: 'call-someone', text: 'Appelles quelqu’un d’autre dans la minute.', weights: { petanque: 0.8, volleyball: 0.3 } },
        { id: 'relieved', text: 'Es secrètement soulagé·e de ne pas avoir à sortir.', weights: { 'video-games': 0.8 } },
        { id: 'check-in', text: 'Lui demandes si tout va bien de son côté.', weights: { yoga: 0.8, volleyball: 0.4 } },
        { id: 'go-out-anyway', text: 'Sors quand même, seul·e.', weights: { dance: 0.6 } },
      ],
    },
    {
      id: 'favorite-song',
      text: 'Ta chanson préférée passe dans un magasin. Tu…',
      answers: [
        { id: 'move', text: 'Te mets à bouger au milieu du rayon, sans même t’en rendre compte.', weights: { dance: 1 } },
        { id: 'sing-along', text: 'Chantes le refrain à voix haute, et embarques la personne à la caisse.', weights: { petanque: 0.8 } },
        { id: 'savor', text: 'Souris, et savoures le moment en silence.', weights: { yoga: 0.6 } },
        { id: 'hum-quietly', text: 'Fredonnes tout bas, pour que personne n’entende.', weights: { 'video-games': 0.7 } },
        { id: 'focused', text: 'Ne l’entends même pas : tu es concentré·e sur ce que tu cherches.', weights: { chess: 0.6 } },
      ],
    },
    {
      id: 'pet-body',
      text: 'Tu te réveilles dans la peau de ton animal de compagnie. Tu…',
      answers: [
        { id: 'enjoy', text: 'En profites : siestes, câlins et croquettes à volonté.', weights: { 'video-games': 0.6, petanque: 0.5 } },
        { id: 'explore', text: 'Sors explorer le quartier.', weights: { hiking: 0.8 } },
        { id: 'zoomies', text: 'Cours partout dans l’appartement.', weights: { dance: 1 } },
        { id: 'neighbor-cat', text: 'Vas enfin régler tes comptes avec le chat des voisin·es.', weights: { boxing: 1 } },
        { id: 'turn-back', text: 'Cherches comment retrouver ta forme humaine.', weights: { chess: 0.8 } },
      ],
    },
    {
      id: 'public-speech',
      text: 'Tu dois parler devant cent personnes dans cinq minutes. Tu…',
      answers: [
        { id: 'improvise', text: 'Te réjouis : tu vas pouvoir improviser.', weights: { dance: 0.8, petanque: 0.4 } },
        { id: 'rehearse', text: 'Repasses ton plan point par point.', weights: { chess: 0.8, running: 0.4 } },
        { id: 'chat-audience', text: 'Vas discuter avec le public avant de commencer.', weights: { petanque: 0.6, volleyball: 0.5 } },
        { id: 'shaking', text: 'Trembles, et y vas pourtant : tu t’en voudrais de reculer.', weights: { climbing: 0.8, boxing: 0.4 } },
        { id: 'panic', text: 'Paniques, et cherches quelqu’un pour te remplacer.', weights: { 'video-games': 0.7 } },
      ],
    },
    {
      id: 'pe-teacher',
      text: 'Au collège, ton·ta prof de sport disait de toi…',
      answers: [
        { id: 'observes-first', text: '« Observe longtemps avant de tenter quoi que ce soit. »', weights: { climbing: 0.8, chess: 0.5 } },
        { id: 'bird', text: '« S’arrête au milieu du cross pour regarder un oiseau. »', weights: { hiking: 1 } },
        { id: 'holidays', text: '« Le·la seul·e à s’entraîner pendant les vacances. »', weights: { running: 1 } },
        { id: 'excuse', text: '« Toujours une dispense, jamais la même excuse. »', weights: { 'video-games': 1 } },
        { id: 'contests', text: '« Conteste chaque décision de l’arbitre. »', weights: { boxing: 0.8, 'ping-pong': 0.6 } },
      ],
    },
    {
      id: 'minor-injury',
      text: 'Tu te fais un peu mal en plein match. Tu…',
      answers: [
        { id: 'get-treated', text: 'Sors te faire soigner : pas la peine d’aggraver ça.', weights: { yoga: 0.8, hiking: 0.3 } },
        { id: 'grit-teeth', text: 'Serres les dents et continues.', weights: { boxing: 0.7, volleyball: 0.6 } },
        { id: 'angry', text: 'T’énerves, et joues encore plus fort.', weights: { boxing: 0.8 } },
        { id: 'not-before-tie', text: 'Refuses de sortir avant d’avoir égalisé.', weights: { 'ping-pong': 0.8 } },
        { id: 'keep-smiling', text: 'Continues en souriant.', weights: { dance: 0.8 } },
      ],
    },
  ],
};
