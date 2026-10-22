import type { Quiz } from '../../types';

export const lolChampions: Quiz = {
  id: 'lol-champions',
  title: 'Quel champion de LoL es-tu ?',
  emoji: '🎮',
  hidden: true,
  description: 'Yasuo, Lux, Teemo ou Nasus ? Découvre quel champion de League of Legends te ressemble vraiment.',
  personalities: [
    {
      id: 'teemo',
      name: 'Teemo',
      emoji: '🍄',
      description:
        "Toujours de bonne humeur, petit·e mais malin·e, tu adores jouer des tours dont personne ne trouve jamais le responsable. Certaines personnes te trouvent adorable, d'autres insupportable. Les deux ont raison.",
    },
    {
      id: 'yasuo',
      name: 'Yasuo',
      emoji: '🌪️',
      description:
        'Solitaire et fier·e, tu préfères avancer seul·e que dépendre des autres. Derrière ton air détaché, tu portes un passé lourd que tu ne montres à personne.',
    },
    {
      id: 'jinx',
      name: 'Jinx',
      emoji: '💣',
      description:
        "Impulsif·ve, imprévisible, tu as horreur de l'ennui et des règles. Tu mets le bazar partout où tu passes… et derrière tout ce bruit, tu doutes plus de toi que tu ne le laisses paraître.",
    },
    {
      id: 'braum',
      name: 'Braum',
      emoji: '🛡️',
      description:
        "Un cœur immense dans un corps de roc. Tu protèges tout le monde, tu remontes le moral des troupes, et ta porte est toujours ouverte. On se sent en sécurité avec toi.",
    },
    {
      id: 'lux',
      name: 'Lux',
      emoji: '✨',
      description:
        "Optimiste et lumineux·se, tu crois au meilleur chez les autres et tu inspires les gens qui t'entourent. Tu caches pourtant un talent dont peu de gens se doutent.",
    },
    {
      id: 'garen',
      name: 'Garen',
      emoji: '⚔️',
      description:
        "Loyal·e, honnête, droit·e dans tes bottes : tu respectes les règles et tu tiens toujours parole. Tu dis ce que tu penses, sans détour, et on sait toujours où on en est avec toi.",
    },
    {
      id: 'ezreal',
      name: 'Ezreal',
      emoji: '🧭',
      description:
        "Aventurier·ère et un peu frimeur·se, tu pars explorer sans plan et tu t'en sors toujours avec panache. Ta curiosité et ta confiance en toi t'emmènent partout.",
    },
    {
      id: 'nasus',
      name: 'Nasus',
      emoji: '📚',
      description:
        "Sage et patient·e, tu as soif de savoir et tu prends le temps de comprendre. Tu montes en puissance lentement, mais sûrement : à la fin, c'est toi qui as raison.",
    },
    {
      id: 'jhin',
      name: 'Jhin',
      emoji: '🎭',
      description:
        "Perfectionniste et artiste dans l'âme, tu veux que chaque détail soit parfait. Tu as le sens du spectacle… et une intensité qui peut parfois faire un peu peur.",
    },
    {
      id: 'bard',
      name: 'Bard',
      emoji: '🔔',
      description:
        'Mystérieux·se et doux·ce, tu vis dans ton propre monde, souvent dans la lune. Tu parles peu, mais tu es là quand il le faut. Personne ne te ressemble.',
    },
    {
      id: 'yuumi',
      name: 'Yuumi',
      emoji: '🐱',
      description:
        "Câlin·e et un peu paresseux·se, tu préfères te laisser porter par les autres. Tu es adorable, collant·e, et tu ne refuses jamais une sieste.",
    },
    {
      id: 'darius',
      name: 'Darius',
      emoji: '🪓',
      description:
        "Autoritaire et direct·e, tu prends les choses en main et tu ne tolères pas la faiblesse. On te suit parce que tu ne recules jamais. Certaines personnes te trouvent dur·e, tu préfères dire efficace.",
    },
    {
      id: 'cassiopeia',
      name: 'Cassiopeia',
      emoji: '🐍',
      description:
        "Ambitieux·se et rusé·e, tu sais exactement ce que tu veux et comment l'obtenir. Élégant·e, la répartie cinglante, tu contournes les règles avec un talent certain.",
    },
    {
      id: 'lee-sin',
      name: 'Lee Sin',
      emoji: '🥋',
      description:
        "Discipliné·e et calme, tu travailles sans relâche à devenir une meilleure version de toi-même. Humble, tu gardes ton sang-froid en toute circonstance et tu te sacrifierais pour les autres.",
    },
    {
      id: 'miss-fortune',
      name: 'Miss Fortune',
      emoji: '🏴‍☠️',
      description:
        "Charismatique et sûr·e de toi, tu attires tous les regards et tu le sais. Tu n'oublies jamais un affront : tu prépares ta revanche avec patience, et le sourire.",
    },
  ],
  questions: [
    {
      id: 'exam-eve',
      category: 'stress',
      text: 'La veille d’un gros examen, tu…',
      answers: [
        { id: 'weeks-ahead', text: 'Révises tranquillement : tu as commencé il y a trois semaines.', weights: { nasus: 1, garen: 0.5, 'lee-sin': 0.5 } },
        { id: 'last-night', text: 'Révises tout cette nuit. Ça passera, comme toujours.', weights: { ezreal: 1, yasuo: 0.5 } },
        { id: 'got-subjects', text: 'As déjà trouvé un moyen de connaître les sujets.', weights: { cassiopeia: 1, teemo: 0.4 } },
        { id: 'reread', text: 'Relis tes fiches en boucle. Tout doit être parfait.', weights: { jhin: 1, jinx: 0.4 } },
        { id: 'early-night', text: 'Fais du sport, puis te couches tôt.', weights: { 'lee-sin': 1, darius: 0.4 } },
        { id: 'reassure', text: 'Rassures tes ami·es qui stressent bien plus que toi.', weights: { braum: 1, lux: 0.5 } },
        { id: 'sleep', text: 'Dors. Ça ira.', weights: { yuumi: 1, bard: 0.5 } },
      ],
    },
    {
      id: 'losing-game',
      category: 'themed',
      text: 'Ton équipe perd 0-10 à la 15e minute. Tu…',
      answers: [
        { id: 'ff', text: 'Tapes « ff » et passes le reste de la partie sur ton téléphone.', weights: { yuumi: 1 } },
        { id: 'orders', text: 'Prends les choses en main et donnes des ordres à tout le monde.', weights: { darius: 1, 'miss-fortune': 0.6, garen: 0.4 } },
        { id: 'cheer', text: 'Encourages tout le monde : on peut encore la gagner !', weights: { lux: 1, garen: 0.5 } },
        { id: 'patience', text: 'Expliques calmement que la partie se joue en fin de game. Patience.', weights: { nasus: 1, 'lee-sin': 0.6 } },
        { id: 'solo', text: 'Pars farmer de ton côté. Tu les porteras toi-même.', weights: { yasuo: 1, ezreal: 0.4 } },
        { id: 'chaos', text: 'Fais n’importe quoi. Au moins, on s’amuse.', weights: { jinx: 1, teemo: 0.5 } },
        { id: 'analyze', text: 'Analyses froidement qui a fait quelle erreur.', weights: { cassiopeia: 0.7, jhin: 0.7 } },
      ],
    },
    {
      id: 'karaoke',
      category: 'social',
      text: 'Soirée karaoké. Tu…',
      answers: [
        { id: 'mic', text: 'Prends le micro en premier et ne le lâches plus.', weights: { 'miss-fortune': 1, ezreal: 0.6 } },
        { id: 'ballad', text: 'Chantes une ballade avec tant d’émotion que tout le monde se tait.', weights: { jhin: 1, yasuo: 0.4 } },
        { id: 'encourage', text: 'Pousses tout le monde à monter sur scène.', weights: { lux: 1, braum: 0.5 } },
        { id: 'off-key', text: 'Chantes faux, très fort, et tu t’en fiches complètement.', weights: { jinx: 1, braum: 0.4 } },
        { id: 'watch', text: 'Regardes de loin. Jamais tu ne chanteras.', weights: { yasuo: 0.8, bard: 0.5 } },
        { id: 'pick-songs', text: 'Choisis les pires chansons pour les autres, et les regardes souffrir.', weights: { teemo: 1, cassiopeia: 0.5 } },
        { id: 'nap', text: 'T’endors dans un coin du canapé.', weights: { yuumi: 1 } },
      ],
    },
    {
      id: 'queue-jumper',
      category: 'stress',
      text: 'Quelqu’un te passe devant dans une file d’attente. Tu…',
      answers: [
        { id: 'politely', text: 'Le lui fais remarquer, poliment mais fermement.', weights: { garen: 1, 'lee-sin': 0.4 } },
        { id: 'order', text: 'Lui ordonnes de retourner à sa place. Ça marche.', weights: { darius: 1 } },
        { id: 'remember', text: 'Ne dis rien… mais tu ne l’oublieras pas.', weights: { 'miss-fortune': 1, cassiopeia: 0.4 } },
        { id: 'good-reason', text: 'Te dis qu’iel a sûrement une bonne raison.', weights: { lux: 1, braum: 0.5 } },
        { id: 'outsmart', text: 'Engages la conversation, et finis par repasser devant.', weights: { cassiopeia: 1, ezreal: 0.4 } },
        { id: 'oblivious', text: 'Ne remarques rien du tout.', weights: { bard: 1, yuumi: 0.5 } },
        { id: 'post-it', text: 'Lui colles discrètement un post-it ridicule dans le dos.', weights: { teemo: 1, jinx: 0.6 } },
      ],
    },
    {
      id: 'dream-trip',
      category: 'values',
      text: 'Ton voyage idéal ?',
      answers: [
        { id: 'ruins', text: 'Explorer des ruines oubliées, sans itinéraire.', weights: { ezreal: 1, bard: 0.5 } },
        { id: 'monastery', text: 'Une retraite silencieuse dans un monastère en montagne.', weights: { 'lee-sin': 1, nasus: 0.4 } },
        { id: 'cruise', text: 'Une croisière de luxe, avec plein de gens à impressionner.', weights: { 'miss-fortune': 1, cassiopeia: 0.6 } },
        { id: 'road', text: 'Marcher seul·e sur les routes, sans savoir où tu dormiras.', weights: { yasuo: 1, bard: 0.6 } },
        { id: 'museums', text: 'Visiter tous les musées et toutes les bibliothèques d’une ville.', weights: { nasus: 1, jhin: 0.5 } },
        { id: 'follow', text: 'Suivre quelqu’un qui a tout organisé. C’est le plus simple.', weights: { yuumi: 1 } },
        { id: 'road-trip', text: 'Un road trip au soleil avec ta bande, à chanter à tue-tête dans la voiture.', weights: { lux: 1, braum: 0.5 } },
      ],
    },
    {
      id: 'flamed',
      category: 'themed',
      text: 'Quelqu’un de ton équipe te flame dans le chat. Tu…',
      answers: [
        { id: 'irony', text: 'Réponds par un pavé plein d’ironie.', weights: { cassiopeia: 0.6, 'miss-fortune': 0.6 } },
        { id: 'mute', text: 'Coupes le chat et restes concentré·e sur ta partie.', weights: { 'lee-sin': 1, nasus: 0.6, yasuo: 0.3 } },
        { id: 'kind', text: 'Envoies un message gentil. Iel passe sûrement une mauvaise journée.', weights: { braum: 1, lux: 0.5 } },
        { id: 'flame-back', text: 'Flames encore plus fort.', weights: { darius: 0.8, jinx: 0.6 } },
        { id: 'laugh', text: 'Ne réponds rien et ris en silence pendant qu’iel s’enfonce tout·e seul·e.', weights: { teemo: 1, jinx: 0.4 } },
        { id: 'never-read', text: 'Ne lis pas le chat. Tu ne lis jamais le chat.', weights: { bard: 0.7, yuumi: 0.6, yasuo: 0.4 } },
      ],
    },
    {
      id: 'flatmate',
      category: 'social',
      text: 'En colocation, tu es…',
      answers: [
        { id: 'house-rules', text: 'La personne qui fixe les règles de la maison.', weights: { darius: 1, garen: 0.5 } },
        { id: 'chores', text: 'La personne qui fait le ménage sans qu’on le lui demande.', weights: { garen: 1, braum: 0.5 } },
        { id: 'cook', text: 'La personne qui cuisine pour tout le monde.', weights: { braum: 1, lux: 0.4 } },
        { id: 'ghost', text: 'La personne qu’on ne croise jamais. Personne ne sait où elle est.', weights: { bard: 0.8, yasuo: 0.7 } },
        { id: 'workshop', text: 'La personne qui a transformé le salon en atelier.', weights: { jhin: 1, jinx: 0.5 } },
        { id: 'squatter', text: 'La personne qui squatte le canapé et le lit des autres.', weights: { yuumi: 1 } },
        { id: 'parties', text: 'La personne qui organise les soirées.', weights: { 'miss-fortune': 0.8, ezreal: 0.6 } },
      ],
    },
    {
      id: 'phone',
      category: 'habits',
      text: 'Ton téléphone, c’est…',
      answers: [
        { id: 'selfies', text: 'Des centaines de photos de toi.', weights: { 'miss-fortune': 1, ezreal: 0.5 } },
        { id: 'notifications', text: '3 % de batterie et 400 notifications non lues.', weights: { bard: 0.7, yuumi: 0.6, jinx: 0.4 } },
        { id: 'sorted', text: 'Des applis rangées par couleur, au pixel près.', weights: { jhin: 1 } },
        { id: 'training', text: 'Un suivi d’entraînement rempli tous les jours.', weights: { 'lee-sin': 1, darius: 0.3 } },
        { id: 'articles', text: 'Des articles et des livres à n’en plus finir.', weights: { nasus: 1 } },
        { id: 'checking-in', text: 'Des conversations où tu prends des nouvelles de tout le monde.', weights: { braum: 1, lux: 0.5 } },
        { id: 'plans', text: 'Des notes pleines de plans que personne ne doit voir.', weights: { cassiopeia: 1, teemo: 0.4 } },
      ],
    },
    {
      id: 'favorite-moment',
      category: 'themed',
      text: 'Ton moment préféré dans une partie :',
      answers: [
        { id: 'tank', text: 'Encaisser les coups à la place de ton équipe.', weights: { braum: 1, garen: 0.5 } },
        { id: 'traps', text: 'Préparer un piège et regarder l’ennemi tomber dedans.', weights: { teemo: 1, cassiopeia: 0.3 } },
        { id: 'perfect-play', text: 'Réussir une action parfaite, que tu rejoueras dans le replay.', weights: { jhin: 1, 'lee-sin': 0.6 } },
        { id: 'teamfight', text: 'Le gros combat d’équipe où tout part dans tous les sens.', weights: { jinx: 1, 'miss-fortune': 0.5 } },
        { id: 'late-game', text: 'Monter en puissance tranquillement pour dominer la fin de partie.', weights: { nasus: 1 } },
        { id: 'solo-show', text: 'Partir en solo et faire le show.', weights: { yasuo: 0.8, ezreal: 0.8 } },
        { id: 'carried', text: 'Te faire porter par quelqu’un de fort.', weights: { yuumi: 1 } },
      ],
    },
    {
      id: 'in-ten-years',
      category: 'values',
      text: 'Dans dix ans, tu te vois…',
      answers: [
        { id: 'top', text: 'Au sommet, avec tout le monde à tes pieds.', weights: { cassiopeia: 1, darius: 0.6 } },
        { id: 'backpack', text: 'Sac sur le dos, quelque part à l’autre bout du monde.', weights: { ezreal: 1, yasuo: 0.5, bard: 0.4 } },
        { id: 'big-house', text: 'Dans une grande maison, entouré·e de ta famille et de tes ami·es.', weights: { braum: 1, lux: 0.4 } },
        { id: 'expert', text: 'Expert·e reconnu·e dans ton domaine.', weights: { nasus: 1, jhin: 0.5 } },
        { id: 'no-idea', text: 'Aucune idée, et c’est très bien comme ça.', weights: { bard: 0.6, jinx: 0.6, yuumi: 0.5 } },
        { id: 'famous', text: 'Célèbre. Évidemment.', weights: { 'miss-fortune': 1, ezreal: 0.5 } },
        { id: 'better', text: 'Toujours en train de t’améliorer, un peu plus chaque jour.', weights: { 'lee-sin': 1, garen: 0.4 } },
      ],
    },
    {
      id: 'movie-role',
      category: 'funny',
      text: 'Dans un film, tu serais…',
      answers: [
        { id: 'hero', text: 'Le héros ou l’héroïne qui sauve tout le monde.', weights: { braum: 0.8, garen: 0.8 } },
        { id: 'villain', text: 'Le ou la méchant·e élégant·e qu’on adore détester.', weights: { cassiopeia: 1, jhin: 0.6 } },
        { id: 'mysterious', text: 'Le personnage mystérieux qui n’apparaît que deux fois.', weights: { bard: 1, yasuo: 0.5 } },
        { id: 'sidekick', text: 'Le ou la sidekick qui fait rire toute la salle.', weights: { teemo: 1, yuumi: 0.4 } },
        { id: 'star', text: 'La star dont le nom est sur l’affiche.', weights: { 'miss-fortune': 1, ezreal: 0.6 } },
        { id: 'mentor', text: 'Le mentor sage qui guide le personnage principal.', weights: { nasus: 0.8, 'lee-sin': 0.8 } },
        { id: 'wildcard', text: 'Le personnage incontrôlable qui chamboule toute l’histoire.', weights: { jinx: 1 } },
      ],
    },
    {
      id: 'friend-in-trouble',
      category: 'values',
      text: 'Ton ami·e a un gros problème. Tu…',
      answers: [
        { id: 'hug', text: 'Débarques chez lui ou chez elle avec à manger et un gros câlin.', weights: { braum: 1 } },
        { id: 'revenge', text: 'L’aides à se venger.', weights: { 'miss-fortune': 1, darius: 0.5, jinx: 0.3 } },
        { id: 'advice', text: 'Lui donnes un conseil sage, puis lui laisses le temps de réfléchir.', weights: { nasus: 0.8, 'lee-sin': 0.7, bard: 0.4 } },
        { id: 'distract', text: 'Lui changes les idées avec un plan complètement absurde.', weights: { teemo: 0.7, jinx: 0.6, ezreal: 0.5 } },
        { id: 'silent', text: 'Restes à ses côtés, sans rien dire.', weights: { bard: 0.8, yuumi: 0.6, yasuo: 0.3 } },
        { id: 'fix-it', text: 'Règles le problème toi-même, peu importe comment.', weights: { darius: 0.8, cassiopeia: 0.5 } },
      ],
    },
    {
      id: 'pentakill',
      category: 'themed',
      text: 'Un pentakill t’attend, mais ton support est en danger à l’autre bout de la map. Tu…',
      answers: [
        { id: 'save', text: 'Fonces sauver ton support. Le pentakill attendra.', weights: { braum: 1, garen: 0.6, lux: 0.5 } },
        { id: 'take-it', text: 'Prends le pentakill. Le support comprendra.', weights: { yasuo: 0.8, 'miss-fortune': 0.6, darius: 0.5 } },
        { id: 'both', text: 'Prends le pentakill ET sauves le support. Évidemment.', weights: { ezreal: 1, jinx: 0.4 } },
        { id: 'stylish', text: 'Prends le pentakill, mais seulement s’il est spectaculaire.', weights: { jhin: 1, 'miss-fortune': 0.4 } },
        { id: 'minimap', text: 'Quel support ? Tu ne regardes jamais la mini-map.', weights: { jinx: 0.6, teemo: 0.5 } },
        { id: 'calculate', text: 'Calcules froidement l’option la plus rentable.', weights: { cassiopeia: 0.7, nasus: 0.5 } },
      ],
    },
    {
      id: 'secret',
      category: 'introspection',
      text: 'Un secret que tu caches :',
      answers: [
        { id: 'sensitive', text: 'Sous ton air détaché, tu es très sensible.', weights: { yasuo: 1, garen: 0.4 } },
        { id: 'hidden-talent', text: 'Tu as un talent dont personne ne se doute.', weights: { lux: 1, bard: 0.4 } },
        { id: 'self-doubt', text: 'Tu doutes énormément de toi.', weights: { jinx: 0.8, lux: 0.4 } },
        { id: 'master-plan', text: 'Tu as un plan secret pour arriver au sommet.', weights: { cassiopeia: 1, 'miss-fortune': 0.7 } },
        { id: 'none', text: 'Aucun. Tu dis toujours tout ce que tu penses.', weights: { garen: 0.8, darius: 0.7, braum: 0.4 } },
        { id: 'admirers', text: 'Tu as des tas d’admirateur·ices secret·es. Évidemment.', weights: { ezreal: 0.7, 'miss-fortune': 0.6 } },
      ],
    },
    {
      id: 'heated-debate',
      category: 'social',
      text: 'Un débat dégénère autour de toi. Tu…',
      answers: [
        { id: 'principle', text: 'Défends ta position jusqu’au bout, par principe.', weights: { garen: 1, darius: 0.6 } },
        { id: 'turn-around', text: 'Retournes habilement les arguments adverses.', weights: { cassiopeia: 1, 'miss-fortune': 0.5 } },
        { id: 'sources', text: 'Cites trois livres pour prouver que tu as raison.', weights: { nasus: 1, jhin: 0.3 } },
        { id: 'reconcile', text: 'Essaies de réconcilier tout le monde.', weights: { braum: 1, lux: 0.5 } },
        { id: 'joke', text: 'Lâches une blague pour détendre l’atmosphère.', weights: { teemo: 0.8, ezreal: 0.6 } },
        { id: 'walk-away', text: 'Quittes la discussion. Ça n’en vaut pas la peine.', weights: { 'lee-sin': 0.6, yasuo: 0.6, bard: 0.5 } },
        { id: 'fuel', text: 'Jettes de l’huile sur le feu. C’est plus drôle.', weights: { jinx: 1 } },
      ],
    },
    {
      id: 'rules',
      category: 'values',
      text: 'Les règles, pour toi…',
      answers: [
        { id: 'respect', text: 'Sont faites pour être respectées.', weights: { garen: 1, 'lee-sin': 0.4 } },
        { id: 'bend', text: 'Sont faites pour être contournées, avec intelligence.', weights: { cassiopeia: 1, 'miss-fortune': 0.6, teemo: 0.3 } },
        { id: 'mine', text: 'C’est toi qui les fixes.', weights: { darius: 1 } },
        { id: 'what-rules', text: 'Quelles règles ?', weights: { jinx: 1, yasuo: 0.5 } },
        { id: 'protect-weak', text: 'Ont du sens tant qu’elles protègent les plus faibles.', weights: { braum: 1, garen: 0.4 } },
      ],
    },
    {
      id: 'summer-job',
      category: 'nostalgia',
      text: 'Ton premier job d’été ?',
      answers: [
        { id: 'camp', text: 'Animateur·rice en colonie, et les enfants t’adoraient.', weights: { braum: 1, teemo: 0.4 } },
        { id: 'guide', text: 'Guide touristique.', weights: { ezreal: 1, 'miss-fortune': 0.4 } },
        { id: 'library', text: 'À la bibliothèque.', weights: { nasus: 1, bard: 0.4 } },
        { id: 'sales', text: 'Vendeur·se, et tu as battu tous les records.', weights: { cassiopeia: 0.8, 'miss-fortune': 0.7 } },
        { id: 'team-lead', text: 'Chef·fe d’équipe au bout d’une semaine.', weights: { darius: 1, garen: 0.4 } },
        { id: 'coach', text: 'Coach sportif·ve.', weights: { 'lee-sin': 1, darius: 0.4 } },
        { id: 'none', text: 'Aucun. Tu as dormi tout l’été.', weights: { yuumi: 1 } },
      ],
    },
    {
      id: 'perfect-gift',
      category: 'funny',
      text: 'Le cadeau parfait pour toi :',
      answers: [
        { id: 'rare-book', text: 'Un livre rare.', weights: { nasus: 0.8, jhin: 0.3 } },
        { id: 'luxury', text: 'Un objet magnifique et hors de prix.', weights: { cassiopeia: 1, 'miss-fortune': 0.5 } },
        { id: 'ticket', text: 'Un billet pour une destination surprise.', weights: { ezreal: 1, bard: 0.4 } },
        { id: 'blanket', text: 'Un plaid tout doux.', weights: { yuumi: 1 } },
        { id: 'noisy', text: 'Un truc qui fait du bruit et qui va énerver les voisins.', weights: { jinx: 1, teemo: 0.6 } },
        { id: 'time', text: 'Rien. Un moment passé ensemble suffit.', weights: { braum: 1, 'lee-sin': 0.4 } },
      ],
    },
  ],
};
