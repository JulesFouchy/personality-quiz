import type { Quiz } from '../../types';

export const lolChampions: Quiz = {
  id: 'lol-champions',
  title: 'Quel champion de LoL es-tu ?',
  emoji: '🎮',
  hidden: true,
  description: 'Yasuo, Lux, Teemo ou Nasus ? Découvre qui tu main dans la vraie vie.',
  personalities: [
    {
      id: 'teemo',
      name: 'Teemo',
      emoji: '🍄',
      description:
        'Toujours de bonne humeur, petit·e mais futé·e, tu adores jouer des tours dont personne ne trouve jamais la·le responsable. Certaines personnes te trouvent adorable, d’autres insupportable. Les deux ont raison.',
    },
    {
      id: 'yasuo',
      name: 'Yasuo',
      emoji: '🌪️',
      description:
        'Solitaire et fier·ère, tu préfères avancer seul·e que dépendre des autres. Derrière ton air détaché, tu portes un passé lourd que tu ne montres à personne.',
    },
    {
      id: 'jinx',
      name: 'Jinx',
      emoji: '💣',
      description:
        'Impulsif·ve, imprévisible, tu as horreur de l’ennui et des règles. Tu mets le bazar partout où tu passes… et derrière tout ce bruit, tu doutes plus de toi que tu ne le laisses paraître.',
    },
    {
      id: 'braum',
      name: 'Braum',
      emoji: '🛡️',
      description:
        'Un cœur immense dans un corps de roc. Tu protèges tout le monde, tu remontes le moral des troupes, et ta porte est toujours ouverte. On se sent en sécurité avec toi.',
    },
    {
      id: 'lux',
      name: 'Lux',
      emoji: '✨',
      description:
        'Optimiste et lumineux·se, tu crois au meilleur chez les autres, parfois un peu naïvement, et tu inspires les gens qui t’entourent. Tu caches pourtant un talent dont peu de gens se doutent.',
    },
    {
      id: 'ezreal',
      name: 'Ezreal',
      emoji: '🧭',
      description:
        'Aventurier·ère et insouciant·e, tu pars explorer sans plan et tu t’en sors toujours avec panache. Ta curiosité et ta confiance en toi t’emmènent partout.',
    },
    {
      id: 'nasus',
      name: 'Nasus',
      emoji: '📚',
      description:
        'Sage et patient·e, tu as soif de savoir et tu prends le temps de comprendre. Tu avances lentement, mais sûrement : à la fin, c’est toi qui as raison.',
    },
    {
      id: 'jhin',
      name: 'Jhin',
      emoji: '🎭',
      description:
        'Perfectionniste et artiste dans l’âme, tu veux que chaque détail soit parfait. Tu as le sens du spectacle… et une intensité qui peut parfois faire un peu peur.',
    },
    {
      id: 'yuumi',
      name: 'Yuumi',
      emoji: '🐱',
      description:
        'Câlin·e et un peu paresseux·se, tu préfères que les autres s’occupent de tout. Tu es adorable, collant·e, et tu ne refuses jamais une sieste.',
    },
    {
      id: 'darius',
      name: 'Darius',
      emoji: '🪓',
      description:
        'Autoritaire et exigeant·e, tu prends les choses en main et tu ne tolères pas la faiblesse. On te suit parce que tu ne recules jamais. Certaines personnes te trouvent dur·e, tu préfères dire efficace.',
    },
    {
      id: 'cassiopeia',
      name: 'Cassiopeia',
      emoji: '🐍',
      description:
        'Ambitieux·se et rusé·e, tu sais exactement ce que tu veux et comment l’obtenir. Élégant·e, la répartie cinglante, tu contournes les règles avec un talent certain.',
    },
    {
      id: 'lee-sin',
      name: 'Lee Sin',
      emoji: '🥋',
      description:
        'Discipliné·e, tu t’entraînes sans relâche pour devenir la meilleure version de toi-même. Quand tu te trompes, tu l’assumes jusqu’au bout et tu fais tout pour réparer. Humble et dévoué·e, tu te sacrifierais pour les autres.',
    },
    {
      id: 'miss-fortune',
      name: 'Miss Fortune',
      emoji: '🏴‍☠️',
      description:
        'Charismatique et sûr·e de toi, tu attires tous les regards et tu le sais. Tu n’oublies jamais un affront : tu prépares ta revanche avec patience, et le sourire.',
    },
  ],
  questions: [
    {
      id: 'exam-eve',
      category: 'stress',
      text: 'La veille d’un gros examen, tu…',
      answers: [
        { id: 'weeks-ahead', text: 'Révises tranquillement : tu as commencé il y a trois semaines.', weights: { nasus: 1, 'lee-sin': 0.4 } },
        { id: 'last-night', text: 'Révises tout cette nuit. Ça passera, comme toujours.', weights: { ezreal: 1 } },
        { id: 'reread', text: 'Relis tes fiches en boucle. Tout doit être parfait.', weights: { jhin: 1 } },
        { id: 'panic', text: 'Paniques, persuadé·e de tout rater, même si tu connais tout.', weights: { jinx: 1 } },
        { id: 'reassure', text: 'Rassures tes ami·es qui stressent bien plus que toi.', weights: { braum: 1, lux: 0.4 } },
        { id: 'sleep', text: 'Dors. Ça ira.', weights: { yuumi: 1 } },
      ],
    },
    {
      id: 'losing-game',
      category: 'themed',
      text: 'Ton équipe perd 0-10 à la 15e minute. Tu…',
      answers: [
        { id: 'give-up', text: 'Arrêtes de forcer et attends que ça passe.', weights: { yuumi: 1 } },
        { id: 'orders', text: 'Prends les choses en main et donnes des ordres à tout le monde.', weights: { darius: 1, 'miss-fortune': 0.3 } },
        { id: 'cheer', text: 'Encourages tout le monde : on peut encore la gagner !', weights: { lux: 1, braum: 0.6 } },
        { id: 'late-game', text: 'Rappelles à tout le monde que vous scalez mieux : tout se jouera en late game.', weights: { nasus: 1, lux: 0.3 } },
        { id: 'own-it', text: 'Assumes tes erreurs dans le chat et promets de te rattraper.', weights: { 'lee-sin': 1 } },
        { id: 'solo', text: 'Pars farmer de ton côté. Tu vas les carry toi-même.', weights: { yasuo: 1 } },
        { id: 'chaos', text: 'Fais des blagues dans le chat pour détendre tout le monde.', weights: { teemo: 0.8, jinx: 0.5, lux: 0.4 } },
      ],
    },
    {
      id: 'karaoke',
      category: 'social',
      text: 'Soirée karaoké. Tu…',
      answers: [
        { id: 'mic', text: 'Prends le micro en premier et ne le lâches plus.', weights: { 'miss-fortune': 1, ezreal: 0.4 } },
        { id: 'ballad', text: 'Chantes une ballade avec tant d’émotion que tout le monde se tait.', weights: { jhin: 1 } },
        { id: 'encourage', text: 'Pousses tout le monde à monter sur scène.', weights: { lux: 1, braum: 0.5 } },
        { id: 'off-key', text: 'Chantes faux, très fort, et tu t’en fiches complètement.', weights: { jinx: 1, teemo: 0.5 } },
        { id: 'watch', text: 'Regardes de loin. Jamais tu ne chanteras.', weights: { yasuo: 0.8 } },
      ],
    },
    {
      id: 'queue-jumper',
      category: 'stress',
      text: 'Quelqu’un te passe devant dans une file d’attente. Tu…',
      answers: [
        { id: 'politely', text: 'Le lui fais remarquer, poliment mais fermement.', weights: { 'lee-sin': 0.5, braum: 0.4 } },
        { id: 'cut-back', text: 'Te replaces devant sans un mot. Personne ne proteste.', weights: { darius: 0.8, cassiopeia: 0.4 } },
        { id: 'remember', text: 'Ne dis rien… mais tu ne l’oublieras pas.', weights: { 'miss-fortune': 1, cassiopeia: 0.4 } },
        { id: 'good-reason', text: 'Te dis qu’iel a sûrement une bonne raison.', weights: { lux: 1, braum: 0.3 } },
        { id: 'loud-joke', text: 'Lances une blague assez fort pour qu’iel l’entende.', weights: { teemo: 0.8, cassiopeia: 0.3 } },
        { id: 'sigh', text: 'Soupires bruyamment, mais ne dis rien.', weights: { yuumi: 0.5, yasuo: 0.4 } },
      ],
    },
    {
      id: 'dream-trip',
      category: 'values',
      text: 'Ton voyage idéal ?',
      answers: [
        { id: 'unknown-language', text: 'Partir à l’aventure dans un pays dont tu ne parles pas la langue.', weights: { ezreal: 1 } },
        { id: 'city-trip', text: 'Une ville à visiter de fond en comble, musées compris.', weights: { nasus: 0.6, jhin: 0.6, lux: 0.3 } },
        { id: 'palace', text: 'Un hôtel chic, avec de belles soirées.', weights: { 'miss-fortune': 0.8, cassiopeia: 0.5 } },
        { id: 'alone', text: 'Partir seul·e, loin de tout le monde.', weights: { yasuo: 1 } },
        { id: 'beach', text: 'Une semaine sur un transat, sans rien faire.', weights: { yuumi: 1 } },
        { id: 'road-trip', text: 'Un road trip avec ta bande, à chanter à tue-tête dans la voiture.', weights: { braum: 1, lux: 0.5 } },
      ],
    },
    {
      id: 'flamed',
      category: 'themed',
      text: 'Quelqu’un de ton équipe te flame dans le chat. Tu…',
      answers: [
        { id: 'irony', text: 'Réponds par un pavé plein d’ironie.', weights: { cassiopeia: 1 } },
        { id: 'mute', text: 'Coupes le chat : la fin de partie lui donnera tort.', weights: { nasus: 0.8, 'lee-sin': 0.6 } },
        { id: 'kind', text: 'Envoies un message gentil pour calmer le jeu.', weights: { braum: 1, lux: 0.5 } },
        { id: 'flame-back', text: 'Flames encore plus fort.', weights: { darius: 0.8, jinx: 0.6 } },
        { id: 'tilted', text: 'Ne réponds rien, mais ça te travaille toute la partie.', weights: { jinx: 0.8, yasuo: 0.6 } },
      ],
    },
    {
      id: 'flatmate',
      category: 'social',
      text: 'En colocation, tu es…',
      answers: [
        { id: 'schedule', text: 'La personne qui respecte le planning de ménage à la lettre.', weights: { 'lee-sin': 0.8 } },
        { id: 'cook', text: 'La personne qui cuisine pour tout le monde.', weights: { braum: 1 } },
        { id: 'never-seen', text: 'La personne qu’on ne voit presque jamais.', weights: { yasuo: 0.7, ezreal: 0.4 } },
        { id: 'messy', text: 'La personne dont les affaires traînent partout.', weights: { jinx: 1, yuumi: 0.4 } },
        { id: 'squatter', text: 'La personne qui squatte le canapé et les lits des autres.', weights: { yuumi: 1 } },
      ],
    },
    {
      id: 'phone',
      category: 'habits',
      text: 'Ton téléphone, c’est…',
      answers: [
        { id: 'selfies', text: 'Des centaines de photos de toi.', weights: { 'miss-fortune': 1 } },
        { id: 'notifications', text: '3 % de batterie et 400 notifications non lues.', weights: { jinx: 0.5, yuumi: 0.5 } },
        { id: 'empty', text: 'Presque vide : tu ne parles pas à grand monde.', weights: { yasuo: 1 } },
        { id: 'articles', text: 'Des articles et des livres à n’en plus finir.', weights: { nasus: 1 } },
        { id: 'checking-in', text: 'Des conversations où tu prends des nouvelles de tout le monde.', weights: { braum: 1 } },
      ],
    },
    {
      id: 'favorite-moment',
      category: 'themed',
      text: 'Ton moment préféré dans une partie :',
      answers: [
        { id: 'thanked', text: 'Le moment où ton équipe te remercie de l’avoir sauvée.', weights: { braum: 1, lux: 0.3 } },
        { id: 'tilt-enemies', text: 'Faire rager l’équipe adverse sans qu’elle comprenne ce qui lui arrive.', weights: { teemo: 1, cassiopeia: 0.3 } },
        { id: 'perfect-play', text: 'Réussir une action parfaite, que tu reverras en boucle dans le replay.', weights: { jhin: 1, 'lee-sin': 0.6 } },
        { id: 'teamfight', text: 'Le gros combat d’équipe où tout part dans tous les sens.', weights: { jinx: 1 } },
        { id: 'solo-show', text: 'Partir en solo et faire le show.', weights: { yasuo: 0.8, ezreal: 0.8 } },
        { id: 'quiet', text: 'Les moments calmes, où tu peux souffler.', weights: { yuumi: 1 } },
      ],
    },
    {
      id: 'in-ten-years',
      category: 'values',
      text: 'Dans dix ans, tu te vois…',
      answers: [
        { id: 'backpack', text: 'Sac sur le dos, quelque part à l’autre bout du monde.', weights: { ezreal: 1 } },
        { id: 'big-house', text: 'Dans une grande maison, entouré·e de ta famille et de tes ami·es.', weights: { braum: 1 } },
        { id: 'top', text: 'Au sommet, avec tout le monde à tes pieds.', weights: { cassiopeia: 1, darius: 0.3 } },
        { id: 'expert', text: 'Expert·e reconnu·e dans ton domaine.', weights: { nasus: 1, jhin: 0.5 } },
        { id: 'better', text: 'Toujours en train de t’améliorer, un peu plus chaque jour.', weights: { 'lee-sin': 1 } },
      ],
    },
    {
      id: 'movie-role',
      category: 'funny',
      text: 'Dans un film, tu serais…',
      answers: [
        { id: 'optimist', text: 'Le personnage optimiste qui finit par réconcilier tout le monde.', weights: { lux: 1, braum: 0.4 } },
        { id: 'villain', text: 'La·le méchant·e élégant·e qu’on adore détester.', weights: { cassiopeia: 1, jhin: 0.6 } },
        { id: 'mysterious', text: 'Le personnage mystérieux qui n’apparaît que deux fois.', weights: { yasuo: 0.8 } },
        { id: 'sidekick', text: 'L’acolyte qui fait rire toute la salle.', weights: { teemo: 1 } },
        { id: 'revenge', text: 'Le personnage qui a une revanche à prendre.', weights: { 'miss-fortune': 1 } },
        { id: 'mentor', text: 'La·le mentor·e qui guide le personnage principal.', weights: { nasus: 1, 'lee-sin': 0.5 } },
      ],
    },
    {
      id: 'friend-in-trouble',
      category: 'values',
      text: 'Ton ami·e a un gros problème. Tu…',
      answers: [
        { id: 'hug', text: 'Débarques chez ellui avec à manger et un gros câlin.', weights: { braum: 1 } },
        { id: 'hype-up', text: 'Lui remontes le moral en lui rappelant à quel point iel est génial·e.', weights: { 'miss-fortune': 0.6, lux: 0.5, braum: 0.3 } },
        { id: 'advice', text: 'Lui donnes un conseil, puis lui laisses le temps de réfléchir.', weights: { nasus: 0.8, 'lee-sin': 0.7 } },
        { id: 'silent', text: 'Restes à ses côtés, sans rien dire.', weights: { yuumi: 0.7, yasuo: 0.5 } },
        { id: 'frank', text: 'Lui dis franchement ce que tu en penses, même si ça pique.', weights: { darius: 0.6 } },
      ],
    },
    {
      id: 'pentakill',
      category: 'themed',
      text: 'Un pentakill t’attend, mais ton support est en danger à l’autre bout de la map. Tu…',
      answers: [
        { id: 'save', text: 'Fonces sauver ton support. Le pentakill attendra.', weights: { braum: 1, 'lee-sin': 0.6, lux: 0.5 } },
        { id: 'take-it', text: 'Prends le pentakill. Le support comprendra.', weights: { yasuo: 0.8, darius: 0.4 } },
        { id: 'both', text: 'Prends le pentakill ET sauves le support. Facile.', weights: { ezreal: 1, jinx: 0.4 } },
        { id: 'minimap', text: 'Quel support ? Tu ne regardes jamais la mini-map.', weights: { jinx: 0.6 } },
        { id: 'profit', text: 'Fais ce qui rapporte le plus, sans état d’âme.', weights: { cassiopeia: 1 } },
        { id: 'stylish', text: 'Prends le pentakill, mais seulement s’il est spectaculaire.', weights: { jhin: 1, 'miss-fortune': 0.4 } },
      ],
    },
    {
      id: 'secret',
      category: 'introspection',
      text: 'Un secret que tu caches :',
      answers: [
        { id: 'pretend-fine', text: 'Tu fais semblant que tout va bien plus souvent qu’on ne le croit.', weights: { yasuo: 0.8, jinx: 0.6, lux: 0.3 } },
        { id: 'secret-hobby', text: 'Tu as un hobby dont tu n’as jamais parlé à personne.', weights: { lux: 0.7, jhin: 0.4 } },
        { id: 'cheated', text: 'Tu as déjà triché à un jeu de société… et gagné.', weights: { cassiopeia: 0.6, teemo: 0.6 } },
        { id: 'self-doubt', text: 'Tu doutes énormément de toi.', weights: { jinx: 0.8, yasuo: 0.3 } },
        { id: 'grudge-list', text: 'Tu tiens une liste mentale des gens qui t’ont vexé·e.', weights: { 'miss-fortune': 0.8, cassiopeia: 0.5 } },
        { id: 'old-mistake', text: 'Tu t’en veux encore d’une erreur que tout le monde a oubliée.', weights: { 'lee-sin': 0.8, yasuo: 0.4 } },
      ],
    },
    {
      id: 'unknown-topic',
      category: 'social',
      text: 'On te demande ton avis sur un sujet que tu ne connais pas du tout. Tu…',
      answers: [
        { id: 'confident', text: 'Donnes ton avis quand même, avec aplomb.', weights: { ezreal: 0.8, darius: 0.5 } },
        { id: 'learn', text: 'Dis que tu n’en sais rien et demandes qu’on t’explique.', weights: { nasus: 1, 'lee-sin': 0.5 } },
        { id: 'deflect', text: 'Retournes la question pour faire parler l’autre.', weights: { cassiopeia: 1 } },
        { id: 'joke', text: 'Inventes une réponse pour faire rire tout le monde.', weights: { teemo: 1, jinx: 0.4 } },
        { id: 'spotlight', text: 'Ramènes habilement la conversation sur toi.', weights: { 'miss-fortune': 1 } },
      ],
    },
    {
      id: 'rules',
      category: 'values',
      text: 'Les règles, pour toi…',
      answers: [
        { id: 'respect', text: 'Sont faites pour être respectées.', weights: { 'lee-sin': 0.7, darius: 0.3 } },
        { id: 'bend', text: 'Sont faites pour être contournées, avec intelligence.', weights: { cassiopeia: 1, teemo: 0.3 } },
        { id: 'mine', text: 'C’est toi qui les fixes.', weights: { darius: 1 } },
        { id: 'what-rules', text: 'Quelles règles ?', weights: { jinx: 1 } },
      ],
    },
    {
      id: 'summer-job',
      category: 'nostalgia',
      text: 'Ton premier job d’été, ça s’est passé comment ?',
      answers: [
        { id: 'never-late', text: 'Pas un jour de retard, pas une plainte.', weights: { 'lee-sin': 0.8 } },
        { id: 'trained-others', text: 'Au bout d’une semaine, c’est toi qui formais les nouvelles personnes.', weights: { darius: 0.7, nasus: 0.5, 'lee-sin': 0.4 } },
        { id: 'friends-for-life', text: 'Tu t’y es fait des ami·es pour la vie.', weights: { braum: 0.8, lux: 0.5, 'miss-fortune': 0.4 } },
        { id: 'least-possible', text: 'Tu avais trouvé toutes les combines pour en faire le moins possible.', weights: { yuumi: 0.7, cassiopeia: 0.5, teemo: 0.4 } },
        { id: 'bored', text: 'Tu t’es ennuyé·e à mourir et tu es parti·e avant la fin.', weights: { jinx: 0.7, ezreal: 0.5, yasuo: 0.4 } },
        { id: 'bonus', text: 'Tu as négocié une prime dès le premier mois.', weights: { cassiopeia: 0.8, 'miss-fortune': 0.4 } },
      ],
    },
    {
      id: 'perfect-gift',
      category: 'funny',
      text: 'Le cadeau parfait pour toi :',
      answers: [
        { id: 'luxury', text: 'Un objet magnifique et hors de prix.', weights: { cassiopeia: 1, 'miss-fortune': 0.5 } },
        { id: 'blanket', text: 'Un plaid tout doux.', weights: { yuumi: 1 } },
        { id: 'useful', text: 'Un truc utile dont tu avais vraiment besoin.', weights: { 'lee-sin': 0.5, nasus: 0.4 } },
        { id: 'handmade', text: 'Une œuvre unique, faite à la main.', weights: { jhin: 1 } },
        { id: 'time', text: 'Rien. Un moment passé ensemble suffit.', weights: { braum: 1 } },
      ],
    },
  ],
};
