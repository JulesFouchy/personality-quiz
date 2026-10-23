import type { Quiz } from '../../types';

export const cables: Quiz = {
  id: 'cables',
  title: 'Quel câble es-tu ?',
  emoji: '🔌',
  hidden: true,
  description: 'Fiable comme un câble Ethernet, débrouillard·e comme un USB-C, ou emmêlé·e comme de vieux écouteurs ? Réveille le câble qui sommeille en toi.',
  personalities: [
    {
      id: 'ethernet',
      name: 'Câble Ethernet',
      emoji: '🌐',
      description:
        'Geek dans l’âme, tu es incollable sur les ordinateurs, et tu ne dis jamais non à une partie en ligne. Tes ami·es habitent parfois à l’autre bout du monde, mais tu leur parles tous les jours. Fiable, tu ne lâches jamais personne.',
    },
    {
      id: 'usb-c',
      name: 'Câble USB-C',
      emoji: '🔌',
      description:
        'Tu as toujours une solution : un pansement, un plan B, le bon outil au bon moment. Tu t’adaptes à toutes les situations sans faire d’histoires, et tu détestes compliquer ce qui peut être simple.',
    },
    {
      id: 'power-strip',
      name: 'Multiprise',
      emoji: '🤝',
      description:
        'Tu connais tout le monde, et tu présentes tout le monde à tout le monde. Tu ne sais pas dire non : un service ici, un coup de main là… jusqu’au jour où tu satures, à force d’en prendre trop.',
    },
    {
      id: 'jack',
      name: 'Câble jack',
      emoji: '🎸',
      description:
        'Tu joues de la musique, ou tu en rêves. Sensible, tu ressens tout très fort, et tu l’exprimes mieux en créant qu’en parlant.',
    },
    {
      id: 'dmx',
      name: 'Câble DMX',
      emoji: '🎛️',
      description:
        'Le DMX, c’est le câble qui pilote les lumières des concerts et des soirées. Comme lui, tu mets l’ambiance : tu organises les fêtes, tu es la première personne sur la piste, et rien ne te plaît plus qu’un grand moment partagé avec une foule.',
    },
    {
      id: 'hdmi',
      name: 'Câble HDMI',
      emoji: '📺',
      description:
        'Ta soirée idéale : un bon film, un canapé moelleux, et tes proches à côté de toi. Casanier·ère, tu aimes le confort et le calme, et ta porte est toujours ouverte pour une soirée tranquille.',
    },
    {
      id: 'jumper-cables',
      name: 'Câbles de démarrage',
      emoji: '🚗',
      description:
        'On ne te voit pas tous les jours, mais quand ça va mal, c’est toi qu’on appelle. Tu gardes ton calme quand tout le monde panique, et tu redonnes du courage aux personnes qui en manquent.',
    },
    {
      id: 'scart',
      name: 'Câble péritel',
      emoji: '📼',
      description:
        'C’était mieux avant, et tu le dis. Tu gardes tes vieux objets, tu tiens à tes habitudes et à tes traditions, et ce n’est pas une nouveauté à la mode qui te fera changer d’avis. Un peu encombrant·e, peut-être, mais solide.',
    },
    {
      id: 'bare-wire',
      name: 'Fil dénudé',
      emoji: '⚡',
      description:
        'Tu réagis au quart de tour. Franc·he, tu dis ce que tu penses sans détour, quitte à secouer un peu les gens, et tu agis souvent avant de réfléchir.',
    },
    {
      id: 'tangled-earphones',
      name: 'Écouteurs emmêlés',
      emoji: '🧶',
      description:
        'Tête en l’air, tu oublies, tu perds, tu mélanges, et tes plans partent dans tous les sens. Pas de panique : tu te laisses porter, et tout finit toujours par s’arranger… plus ou moins.',
    },
    {
      id: 'lightning',
      name: 'Câble Lightning',
      emoji: '🍏',
      description:
        'Tu as des goûts précis, et tu ne te contentes pas de n’importe quoi. Élégant·e, tu aimes les belles choses, quitte à les payer plus cher, et tu choisis tes ami·es avec autant de soin que tes affaires.',
    },
  ],
  questions: [
    {
      id: 'saturday-night',
      text: 'Samedi soir, c’est toi qui choisis le programme. Tu proposes…',
      answers: [
        { id: 'video-games', text: 'Une soirée jeux vidéo, chacun·e chez soi, en vocal.', weights: { ethernet: 1 } },
        { id: 'quiet-evening', text: 'Une soirée tranquille chez toi, en petit comité.', weights: { hdmi: 1 } },
        { id: 'dancing', text: 'D’aller danser jusqu’à la fermeture.', weights: { dmx: 1 } },
        { id: 'restaurant', text: 'Le petit restaurant que tu as repéré depuis des semaines.', weights: { lightning: 0.8 } },
        { id: 'mixed-groups', text: 'Une soirée où tu mélanges tes différents groupes d’ami·es.', weights: { 'power-strip': 1, dmx: 0.4 } },
        { id: 'usual-bar', text: 'Le bar habituel.', weights: { scart: 1 } },
        { id: 'no-plan', text: 'Rien de précis : on verra bien une fois dehors.', weights: { 'tangled-earphones': 0.8, 'usb-c': 0.3 } },
      ],
    },
    {
      id: 'blackout',
      text: 'Panne de courant dans tout le quartier, un soir d’hiver. Tu…',
      answers: [
        { id: 'flashlight', text: 'Trouves la lampe de poche du premier coup.', weights: { 'usb-c': 1 } },
        { id: 'neighbors', text: 'Fais le tour des voisin·es pour vérifier que personne n’a besoin d’aide.', weights: { 'jumper-cables': 1, 'power-strip': 0.4 } },
        { id: 'warn-friends', text: 'Préviens tes ami·es en ligne que tu vas disparaître un moment.', weights: { ethernet: 1 } },
        { id: 'candles', text: 'Allumes des bougies et profites du calme.', weights: { hdmi: 0.7 } },
        { id: 'instrument', text: 'Prends un instrument et joues dans le noir.', weights: { jack: 1 } },
        { id: 'old-radio', text: 'Ressors la radio à piles du grenier.', weights: { scart: 1 } },
        { id: 'early-night', text: 'Vas te coucher plus tôt, ça reviendra bien demain.', weights: { 'tangled-earphones': 0.5 } },
      ],
    },
    {
      id: 'bag',
      text: 'Qu’est-ce qu’on trouve dans ton sac ?',
      answers: [
        { id: 'everything', text: 'De quoi faire face à tout : ciseaux, mouchoirs, scotch, une barre de céréales.', weights: { 'usb-c': 1 } },
        { id: 'essentials', text: 'L’essentiel : clés, téléphone, portefeuille.', weights: { 'usb-c': 0.6, lightning: 0.3 } },
        { id: 'feelings-notebook', text: 'Un carnet que personne n’a le droit de lire.', weights: { jack: 0.8 } },
        { id: 'old-ticket', text: 'Un ticket de cinéma d’il y a dix ans, gardé on ne sait pas trop pourquoi.', weights: { scart: 0.8 } },
        { id: 'others-stuff', text: 'Les clés d’un·e ami·e, le livre d’un·e autre, un colis pour ton·ta voisin·e…', weights: { 'power-strip': 1 } },
        { id: 'nice-wallet', text: 'Un très beau portefeuille, et pas grand-chose d’autre.', weights: { lightning: 1 } },
        { id: 'no-idea', text: 'Aucune idée, et tu n’es pas sûr·e de savoir où il est.', weights: { 'tangled-earphones': 1 } },
      ],
    },
    {
      id: 'recharge',
      text: 'Qu’est-ce qui te recharge vraiment ?',
      answers: [
        { id: 'evening-home', text: 'Une soirée chez toi, sans rien de prévu.', weights: { hdmi: 1 } },
        { id: 'big-night', text: 'Une grosse soirée avec plein de monde.', weights: { dmx: 0.8, 'power-strip': 0.5 } },
        { id: 'make-something', text: 'Écrire, jouer ou dessiner quelque chose.', weights: { jack: 0.8 } },
        { id: 'gaming-session', text: 'Une longue session de jeu avec ta bande.', weights: { ethernet: 1 } },
        { id: 'helped-someone', text: 'Avoir aidé quelqu’un à se relever.', weights: { 'jumper-cables': 0.8 } },
        { id: 'rituals', text: 'Tes petits rituels, toujours les mêmes.', weights: { scart: 0.8 } },
        { id: 'never-tired', text: 'Pas grand-chose : tu ne t’épuises pas vraiment.', weights: { 'tangled-earphones': 0.5, 'usb-c': 0.4 } },
      ],
    },
    {
      id: 'locked-store',
      text: 'Tu te retrouves enfermé·e toute une nuit dans un grand magasin. Tu…',
      answers: [
        { id: 'loud-music', text: 'Montes le son des enceintes à fond.', weights: { dmx: 1 } },
        { id: 'cozy-corner', text: 'Te fais un petit coin douillet au rayon literie.', weights: { hdmi: 1 } },
        { id: 'consoles', text: 'Files au rayon jeux vidéo essayer toutes les consoles.', weights: { ethernet: 1 } },
        { id: 'emergency-exit', text: 'Cherches une sortie de secours.', weights: { 'usb-c': 0.8 } },
        { id: 'trigger-alarm', text: 'Déclenches l’alarme exprès pour qu’on vienne t’ouvrir.', weights: { 'bare-wire': 0.8 } },
        { id: 'video-call', text: 'Lances un appel vidéo avec dix personnes pour raconter ça en direct.', weights: { 'power-strip': 0.8, dmx: 0.3 } },
        { id: 'luxury-aisle', text: 'Vas au rayon luxe essayer ce qui te fait envie.', weights: { lightning: 0.8 } },
      ],
    },
    {
      id: 'broken-washer',
      text: 'Ta machine à laver tombe en panne. Tu…',
      answers: [
        { id: 'fix-it', text: 'La démontes toi-même, un tutoriel à la main.', weights: { 'usb-c': 1 } },
        { id: 'hit-it', text: 'Donnes un grand coup dessus. Parfois, ça marche.', weights: { 'bare-wire': 0.8 } },
        { id: 'upgrade', text: 'En profites pour t’offrir un bien plus beau modèle.', weights: { lightning: 0.8 } },
        { id: 'repair-shop', text: 'La fais réparer, comme toutes les fois d’avant.', weights: { scart: 0.8 } },
        { id: 'friends-place', text: 'Y vois une bonne excuse pour passer chez des ami·es.', weights: { 'power-strip': 0.6 } },
        { id: 'hand-wash', text: 'Laves à la main en attendant, sans t’en faire.', weights: { 'tangled-earphones': 0.6, 'usb-c': 0.4 } },
      ],
    },
    {
      id: 'mood',
      text: 'Choisis une ambiance.',
      answers: [
        { id: 'dim-light', text: 'Lumière tamisée et pluie contre la fenêtre.', weights: { hdmi: 1 } },
        { id: 'singing-crowd', text: 'Une foule qui chante à tue-tête, les bras en l’air.', weights: { dmx: 1, 'power-strip': 0.3 } },
        { id: 'velvet', text: 'Un salon feutré, du velours et de la vaisselle fine.', weights: { lightning: 1 } },
        { id: 'workshop', text: 'Une pièce lumineuse, avec de la peinture et des carnets partout.', weights: { jack: 0.8 } },
        { id: 'country-house', text: 'Une maison de campagne où rien n’a changé depuis ton enfance.', weights: { scart: 1 } },
        { id: 'night-screen', text: 'Une pièce sombre, un écran, et le casque sur les oreilles à 3 h du matin.', weights: { ethernet: 1 } },
      ],
    },
    {
      id: 'caterer-cancels',
      text: 'Le matin du mariage de ton·ta cousin·e, le service traiteur annule. Tu…',
      answers: [
        { id: 'take-charge', text: 'Prends les choses en main, calmement, et répartis les tâches.', weights: { 'jumper-cables': 1, 'usb-c': 0.4 } },
        { id: 'pizzas', text: 'Commandes des pizzas pour quatre-vingts personnes en une heure.', weights: { 'usb-c': 1 } },
        { id: 'someone', text: 'Connais quelqu’un qui connaît quelqu’un qui fait traiteur.', weights: { 'power-strip': 1 } },
        { id: 'call-caterer', text: 'Appelles le service traiteur pour dire ce que tu en penses.', weights: { 'bare-wire': 1 } },
        { id: 'barbecue', text: 'Proposes de transformer ça en grand barbecue.', weights: { dmx: 0.7, 'usb-c': 0.4 } },
        { id: 'help-out', text: 'Aides là où on te le demande.', weights: { 'power-strip': 0.6, 'usb-c': 0.3 } },
        { id: 'late', text: 'Ne vois le message qu’en arrivant… en retard.', weights: { 'tangled-earphones': 1 } },
      ],
    },
    {
      id: 'old-box',
      text: 'Chez tes parents, tu retrouves un carton de tes vieilles affaires. Tu…',
      answers: [
        { id: 'keep-all', text: 'Repars avec tout. Hors de question de jeter quoi que ce soit.', weights: { scart: 1 } },
        { id: 'valuable-only', text: 'Ne gardes que ce qui a vraiment de la valeur.', weights: { lightning: 0.7, 'usb-c': 0.3 } },
        { id: 'old-computer', text: 'Ressors ton vieil ordinateur pour voir s’il démarre encore.', weights: { ethernet: 1, scart: 0.4 } },
        { id: 'send-photos', text: 'Envoies des photos à tes ami·es d’enfance, même aux personnes perdues de vue.', weights: { 'power-strip': 0.7 } },
        { id: 'moved', text: 'Passes l’après-midi assis·e par terre à tout relire, ému·e.', weights: { jack: 1 } },
        { id: 'throw-out', text: 'Jettes tout d’un coup, sans même ouvrir le carton.', weights: { 'bare-wire': 0.7, 'usb-c': 0.3 } },
      ],
    },
    {
      id: 'borrowed',
      text: 'Quelqu’un te prête quelque chose. Tu…',
      answers: [
        { id: 'on-time', text: 'Le rends à la date prévue, en parfait état.', weights: { ethernet: 0.8 } },
        { id: 'bit-late', text: 'Le rends, avec un peu de retard.', weights: { 'tangled-earphones': 0.5 } },
        { id: 'forgotten', text: 'Oublies que tu l’as : on te le réclame trois mois plus tard.', weights: { 'tangled-earphones': 1 } },
        { id: 'repaired', text: 'Le rends réparé, alors qu’il ne l’était pas avant.', weights: { 'usb-c': 1 } },
        { id: 'lent-on', text: 'L’as déjà prêté à quelqu’un d’autre entre-temps.', weights: { 'power-strip': 0.8 } },
      ],
    },
    {
      id: 'concert',
      text: 'Tu vas à un concert. Où es-tu ?',
      answers: [
        { id: 'front-row', text: 'Au premier rang, à sauter du début à la fin.', weights: { dmx: 1 } },
        { id: 'watch-hands', text: 'Assez près pour voir les doigts de la·le guitariste.', weights: { jack: 1 } },
        { id: 'new-friends', text: 'Au milieu, en train de sympathiser avec tes voisin·es.', weights: { 'power-strip': 0.8, dmx: 0.3 } },
        { id: 'at-the-back', text: 'Au fond, tranquille.', weights: { hdmi: 0.6 } },
        { id: 'vip', text: 'En loge.', weights: { lightning: 0.8 } },
        { id: 'wrong-date', text: 'Devant la salle fermée : le concert, c’était hier.', weights: { 'tangled-earphones': 1 } },
      ],
    },
    {
      id: 'hurt-someone',
      text: 'Tu as blessé quelqu’un sans le vouloir. Tu…',
      answers: [
        { id: 'apologize', text: 'T’excuses tout de suite, sans tourner autour du pot.', weights: { 'bare-wire': 0.6, 'jumper-cables': 0.3 } },
        { id: 'ruminate', text: 'Y repenses pendant des jours.', weights: { jack: 1 } },
        { id: 'make-up', text: 'Cherches comment te rattraper.', weights: { 'usb-c': 0.8 } },
        { id: 'unaware', text: 'Ne t’en rends compte que si on te le dit.', weights: { 'tangled-earphones': 0.6, 'bare-wire': 0.5 } },
        { id: 'were-right', text: 'As du mal à t’excuser : au fond, tu avais raison.', weights: { scart: 0.7, 'bare-wire': 0.4 } },
      ],
    },
    {
      id: 'profile-picture',
      text: 'Ta photo de profil, c’est…',
      answers: [
        { id: 'game-character', text: 'Un personnage de jeu vidéo.', weights: { ethernet: 1 } },
        { id: 'studio-shot', text: 'Une photo de studio, lumière parfaite.', weights: { lightning: 1 } },
        { id: 'childhood', text: 'Une photo de toi enfant.', weights: { scart: 0.7 } },
        { id: 'laughing', text: 'Toi en soirée, en train de rire aux éclats.', weights: { dmx: 0.7 } },
        { id: 'group', text: 'Toi entouré·e de dix ami·es.', weights: { 'power-strip': 0.8 } },
        { id: 'blurry', text: 'Une photo floue, prise par erreur, que tu n’as jamais changée.', weights: { 'tangled-earphones': 0.8 } },
      ],
    },
    {
      id: 'friend-moves-away',
      text: 'Ton·ta meilleur·e ami·e part vivre dans un autre pays. Tu…',
      answers: [
        { id: 'stay-in-touch', text: 'Restes en contact par messages, comme si de rien n’était.', weights: { ethernet: 1 } },
        { id: 'cry', text: 'Pleures pendant tout le trajet du retour.', weights: { jack: 0.8 } },
        { id: 'farewell-party', text: 'Organises une énorme fête de départ.', weights: { dmx: 0.8, 'power-strip': 0.5 } },
        { id: 'reassure', text: 'Lui dis qu’iel va s’en sortir, et que tu restes là au besoin.', weights: { 'jumper-cables': 0.7 } },
        { id: 'boxes', text: 'L’aides à faire ses cartons et à tout organiser.', weights: { 'usb-c': 0.8, 'power-strip': 0.4 } },
        { id: 'bad-idea', text: 'Lui dis que c’est une mauvaise idée.', weights: { 'bare-wire': 0.8, scart: 0.5 } },
        { id: 'someday', text: 'Te dis que tu iras la·le voir un jour, sans date précise.', weights: { 'tangled-earphones': 0.7 } },
      ],
    },
    {
      id: 'matters-most',
      text: 'Ce qui compte le plus pour toi ?',
      answers: [
        { id: 'be-there', text: 'Être là pour les autres quand il le faut.', weights: { 'jumper-cables': 0.8, ethernet: 0.5 } },
        { id: 'speak-freely', text: 'Être libre de dire ce que tu penses.', weights: { 'bare-wire': 1 } },
        { id: 'well-made', text: 'Ce qui est beau et bien fait.', weights: { lightning: 1 } },
        { id: 'create', text: 'Créer quelque chose qui te ressemble.', weights: { jack: 1 } },
        { id: 'intense-moments', text: 'Vivre des moments intenses, à plusieurs.', weights: { dmx: 1, 'power-strip': 0.4 } },
        { id: 'own-place', text: 'Avoir un endroit où te poser.', weights: { hdmi: 1 } },
        { id: 'pass-on', text: 'Transmettre ce qu’on t’a transmis.', weights: { scart: 1 } },
      ],
    },
  ],
};
