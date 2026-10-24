import type { Quiz } from '../../types';

export const lolChampions: Quiz = {
  id: 'lol-champions',
  title: 'Quel champion de LoL es-tu ?',
  emoji: '🎮',
  description: 'Yasuo, Lux, Teemo ou Nasus ? Découvre qui tu main dans la vraie vie.',
  personalities: [
    {
      id: 'teemo',
      name: 'Teemo',
      emoji: '🍄',
      description:
        'Toujours de bonne humeur, petit·e et mignon·ne, tu as l’air de la personne la plus inoffensive du monde. Grave erreur. Tu adores jouer des tours, et personne n’en trouve jamais le·la responsable. Tu agaces avec un talent rare, tu le sais, et ça t’amuse encore plus. Certaines personnes te trouvent adorable, d’autres te détestent sincèrement, et les deux ont raison.',
    },
    {
      id: 'yasuo',
      name: 'Yasuo',
      emoji: '🌪️',
      description:
        'Solitaire et fier·ère, tu préfères avancer seul·e que dépendre des autres, et tu es persuadé·e de pouvoir tout régler tout·e seul·e. Dix échecs d’affilée ne te feraient pas changer d’avis : tu fonces encore, certain·e que ton heure de gloire arrive à la prochaine tentative. Tu pars sans dire au revoir, et tu reviens quand on ne t’attend plus.',
    },
    {
      id: 'jinx',
      name: 'Jinx',
      emoji: '💣',
      description:
        'Impulsif·ve et imprévisible, tu as horreur de l’ennui, des règles et des gens qui te disent de te calmer. Tu mets le bazar partout où tu passes, tu donnes des petits noms à tes affaires, et tes idées les plus folles sont toujours tes préférées. Un premier succès, et plus rien ne t’arrête. Mais derrière tout ce bruit, une petite voix te répète que tu gâches tout ce que tu touches : tu doutes de toi bien plus que tu ne le laisses paraître.',
    },
    {
      id: 'braum',
      name: 'Braum',
      emoji: '🛡️',
      description:
        'Un cœur immense dans un corps de roc. Tu protèges tout le monde, toujours le sourire aux lèvres, quitte à encaisser les coups à la place de tes proches. Ta porte est toujours ouverte, ta cuisine aussi. Tu n’as pas besoin de briller : ton plaisir, c’est de voir les autres réussir grâce à toi. On se sent en sécurité avec toi, même les animaux, qui te suivent partout.',
    },
    {
      id: 'lux',
      name: 'Lux',
      emoji: '✨',
      description:
        'Optimiste et lumineux·se, tu crois au meilleur chez les autres, parfois un peu naïvement, et ton enthousiasme finit toujours par gagner les gens qui t’entourent. Mais tu caches aussi un talent, ou une passion, dont personne ne se doute.',
    },
    {
      id: 'ezreal',
      name: 'Ezreal',
      emoji: '🧭',
      description:
        'Aventurier·ère et insouciant·e, tu pars explorer sans plan, sans carte et souvent sans prévenir, persuadé·e que tu improviseras sur place. Et le pire, c’est que ça marche : tu tombes toujours sur le bon trésor, la bonne personne ou le bon raccourci, et tu repars avec une anecdote de plus. Tu es doué·e, tu le sais, et tu ne te prives pas de le rappeler, avec un sourire si charmeur qu’on te le pardonne. Et quand ça tourne mal, tu as toujours une porte de sortie.',
    },
    {
      id: 'nasus',
      name: 'Nasus',
      emoji: '📚',
      description:
        'Sage et patient·e, tu as soif de savoir et tu prends le temps de comprendre avant de parler. Ta bibliothèque déborde, tu retiens tout, et tu donnes des conseils que les gens regrettent toujours de ne pas avoir suivis. Tu avances lentement, mais sûrement, et rien ne te presse : les autres peuvent courir, tu sais que le temps joue pour toi.',
    },
    {
      id: 'jhin',
      name: 'Jhin',
      emoji: '🎭',
      description:
        'Perfectionniste et artiste dans l’âme, tu veux que chaque détail soit parfait, et tu préfères ne rien faire plutôt que mal faire. Tu as le sens du spectacle et du timing : tout est mis en scène, et tu attends le moment parfait, quitte à laisser passer toutes les autres occasions. Les gens admirent ce que tu crées… et s’inquiètent parfois un peu de l’intensité que tu y mets.',
    },
    {
      id: 'yuumi',
      name: 'Yuumi',
      emoji: '🐱',
      description:
        'Câlin·e et un peu paresseux·se, tu préfères que les autres s’occupent de tout, et tu as un vrai talent pour trouver la personne sur qui te reposer. Une fois choisie, tu ne la lâches plus : tu la suis partout, tu t’installes sur ses genoux, sur son canapé, dans sa vie, et tu fais semblant d’aider avec beaucoup de conviction, si discrètement qu’on se demande parfois si tu es vraiment là. Tu es adorable, tu le sais, et ça te sauve d’à peu près toutes les situations.',
    },
    {
      id: 'darius',
      name: 'Darius',
      emoji: '🪓',
      description:
        'Autoritaire et exigeant·e, tu prends les choses en main sans attendre qu’on te le demande, et tu ne tolères ni la faiblesse ni les excuses. Tu respectes les personnes qui ont mérité leur place, d’où qu’elles viennent, et tu n’as que du mépris pour celles qui l’ont eue par piston. Franc·he jusqu’à la brutalité, tu dis ce que tu penses, et on s’en souvient longtemps. On te suit parce que tu ne recules jamais, et une fois que tu tiens quelqu’un, tu ne le lâches plus. Certaines personnes te trouvent dur·e, tu préfères dire efficace.',
    },
    {
      id: 'cassiopeia',
      name: 'Cassiopeia',
      emoji: '🐍',
      description:
        'Ambitieux·se et rusé·e, tu sais exactement ce que tu veux et comment l’obtenir. Élégant·e, la répartie cinglante, tu manies le charme et les secrets des autres mieux que n’importe quelle arme, et tu contournes les règles avec un talent certain. Issu·e d’un monde où tout se négocie, tu as appris tôt que les relations valent plus que l’or, et tu sais toujours qui te doit un service. Ton venin agit à petit feu, et un seul de tes regards suffit à glacer une pièce.',
    },
    {
      id: 'lee-sin',
      name: 'Lee Sin',
      emoji: '🥋',
      description:
        'Discipliné·e, tu t’entraînes sans relâche pour devenir la meilleure version de toi-même, et tu ne comptes pas tes heures. Quand tu touches un Q, tu as du mal à résister, et les plays flashy sont ta spécialité. Un jour, ta fougue t’a fait commettre une grave erreur : depuis, tu l’assumes jusqu’au bout et tu fais tout pour la réparer.',
    },
    {
      id: 'miss-fortune',
      name: 'Miss Fortune',
      emoji: '🏴‍☠️',
      description:
        'Charismatique et sûr·e de toi, tu attires tous les regards et tu le sais : tu entres dans une pièce comme sur une scène, avec la démarche qui va avec. Tu as le sens de la fête, de la répartie et des affaires, et n’importe quelle soirée finit par devenir la tienne. Mais derrière le sourire, tu n’oublies rien. Chaque affront est noté, et tu prépares ta revanche.',
    },
  ],
  questions: [
    {
      id: 'exam-eve',
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
      text: 'Ton équipe perd 0-10 à la 15e minute, et quelqu’un propose de FF. Tu…',
      answers: [
        { id: 'vote-yes', text: 'Votes oui, soulagé·e.', weights: { yuumi: 1 } },
        { id: 'orders', text: 'Prends les choses en main et donnes des ordres à tout le monde.', weights: { darius: 1, 'miss-fortune': 0.3 } },
        { id: 'cheer', text: 'Encourages tout le monde : on peut encore la gagner !', weights: { lux: 1, braum: 0.6 } },
        { id: 'late-game', text: 'Rappelles à tout le monde que vous scalez mieux : tout se jouera en late game.', weights: { nasus: 1, lux: 0.3 } },
        { id: 'never-ff', text: 'Refuses : tu ne FF jamais, par principe.', weights: { 'lee-sin': 1, yasuo: 0.5 } },
        { id: 'blame', text: 'Fais remarquer que ton·ta jungler n’est jamais venu·e.', weights: { yasuo: 1 } },
        { id: 'chaos', text: 'Fais des blagues dans le chat pour détendre tout le monde.', weights: { teemo: 0.8, jinx: 0.5, lux: 0.4 } },
      ],
    },
    {
      id: 'karaoke',
      text: 'Soirée karaoké. Tu…',
      answers: [
        { id: 'mic', text: 'Prends le micro en premier et ne le lâches plus.', weights: { 'miss-fortune': 1, ezreal: 0.4 } },
        { id: 'ballad', text: 'Chantes une ballade avec tant d’émotion que tout le monde se tait.', weights: { jhin: 1 } },
        { id: 'encourage', text: 'Pousses tout le monde à monter sur scène.', weights: { lux: 1, braum: 0.5 } },
        { id: 'off-key', text: 'Chantes très faux, très fort, et tu t’en fiches complètement.', weights: { jinx: 1, teemo: 0.5 } },
        { id: 'watch', text: 'Regardes de loin. Jamais tu ne chanteras.', weights: { yasuo: 0.8 } },
      ],
    },
    {
      id: 'queue-jumper',
      text: 'Quelqu’un te passe devant dans une file d’attente. Tu…',
      answers: [
        { id: 'politely', text: 'Le lui fais remarquer, poliment mais fermement.', weights: { braum: 0.4 } },
        { id: 'cut-back', text: 'Te replaces devant sans un mot. Personne ne proteste.', weights: { darius: 0.8, cassiopeia: 0.4 } },
        { id: 'remember', text: 'Ne dis rien… mais tu ne l’oublieras pas.', weights: { 'miss-fortune': 1, cassiopeia: 0.4 } },
        { id: 'good-reason', text: 'Te dis qu’iel a sûrement une bonne raison.', weights: { lux: 1, braum: 0.3 } },
        { id: 'loud-joke', text: 'Lances une blague assez fort pour qu’iel l’entende.', weights: { teemo: 0.8, cassiopeia: 0.3 } },
        { id: 'sigh', text: 'Soupires bruyamment, mais ne dis rien.', weights: { yuumi: 0.5, yasuo: 0.4 } },
      ],
    },
    {
      id: 'dream-trip',
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
      text: 'Quelqu’un de ton équipe te flame dans le chat. Tu…',
      answers: [
        { id: 'irony', text: 'Réponds par un pavé plein d’ironie.', weights: { cassiopeia: 1 } },
        { id: 'mute', text: 'Coupes le chat : la fin de partie lui donnera tort.', weights: { nasus: 0.8, 'lee-sin': 0.6 } },
        { id: 'kind', text: 'Envoies un message gentil pour calmer le jeu.', weights: { braum: 1, lux: 0.5 } },
        { id: 'swear', text: 'Réponds avec un langage fleuri.', weights: { jinx: 0.8, darius: 0.6 } },
        { id: 'tilted', text: 'Ne réponds rien, mais ça te travaille toute la partie.', weights: { jinx: 0.8, yasuo: 0.6 } },
      ],
    },
    {
      id: 'flatmate',
      text: 'En colocation, tu es la personne…',
      answers: [
        { id: 'schedule', text: 'Qui respecte le planning de ménage à la lettre.', weights: { 'lee-sin': 0.8 } },
        { id: 'cook', text: 'Qui cuisine pour tout le monde.', weights: { braum: 1 } },
        { id: 'never-seen', text: 'Qu’on ne voit presque jamais.', weights: { yasuo: 0.7, ezreal: 0.4 } },
        { id: 'messy', text: 'Qui laisse traîner ses affaires partout.', weights: { jinx: 1, yuumi: 0.4 } },
        { id: 'squatter', text: 'Qui squatte le canapé et les lits des autres.', weights: { yuumi: 1 } },
      ],
    },
    {
      id: 'phone',
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
      text: 'Ton moment préféré dans une partie :',
      answers: [
        { id: 'save-ally', text: 'Sauver de justesse un·e coéquipier·ère que tout le monde croyait condamné·e.', weights: { braum: 1, lux: 0.3 } },
        { id: 'tilt-enemies', text: 'Faire rager l’équipe adverse sans qu’elle comprenne ce qui lui arrive.', weights: { teemo: 1, cassiopeia: 0.3 } },
        { id: 'perfect-play', text: 'Réussir une action parfaite, que tu reverras en boucle dans le replay.', weights: { jhin: 1, 'lee-sin': 0.8 } },
        { id: 'teamfight', text: 'Le gros combat d’équipe où tout part dans tous les sens.', weights: { jinx: 1 } },
        { id: 'comeback', text: 'Faire enfin la grosse action après une partie catastrophique, et prouver que tu avais raison de continuer à go in.', weights: { yasuo: 1 } },
        { id: 'escape', text: 'T’échapper d’un piège avec un rien de vie, sous le nez de tout le monde.', weights: { ezreal: 1 } },
        { id: 'quiet', text: 'Gagner une partie sans avoir eu grand-chose à faire.', weights: { yuumi: 1 } },
      ],
    },
    {
      id: 'in-ten-years',
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
      text: 'Dans un film, tu serais…',
      answers: [
        { id: 'optimist', text: 'Le personnage optimiste qui finit par réconcilier tout le monde.', weights: { lux: 1, braum: 0.4 } },
        { id: 'villain', text: 'Le·la méchant·e élégant·e qu’on adore détester.', weights: { cassiopeia: 1, jhin: 0.6 } },
        { id: 'mysterious', text: 'Le personnage mystérieux qui n’apparaît que deux fois.', weights: { yasuo: 0.8 } },
        { id: 'sidekick', text: 'L’acolyte qui fait rire toute la salle.', weights: { teemo: 1 } },
        { id: 'revenge', text: 'Le personnage qui a une revanche à prendre.', weights: { 'miss-fortune': 1 } },
        { id: 'mentor', text: 'Le·la mentor·e qui guide le personnage principal.', weights: { nasus: 1 } },
      ],
    },
    {
      id: 'friend-in-trouble',
      text: 'Ton ami·e a un gros problème. Tu…',
      answers: [
        { id: 'hug', text: 'Débarques chez ellui avec à manger et un gros câlin.', weights: { braum: 1 } },
        { id: 'hype-up', text: 'Lui remontes le moral en lui rappelant à quel point iel est génial·e.', weights: { 'miss-fortune': 0.6, lux: 0.5, braum: 0.3 } },
        { id: 'advice', text: 'Lui donnes un conseil, puis lui laisses le temps de réfléchir.', weights: { nasus: 0.8 } },
        { id: 'silent', text: 'Restes à ses côtés, sans rien dire.', weights: { yuumi: 0.7, yasuo: 0.5 } },
        { id: 'frank', text: 'Lui dis franchement ce que tu en penses, même si ça pique.', weights: { darius: 0.6 } },
      ],
    },
    {
      id: 'pentakill',
      text: 'Un pentakill t’attend, mais ton support est en danger à l’autre bout de la map. Tu…',
      answers: [
        { id: 'save', text: 'Fonces sauver ton support. Le pentakill attendra.', weights: { braum: 1, lux: 0.5 } },
        { id: 'take-it', text: 'Prends le pentakill. Le support comprendra.', weights: { yasuo: 0.8, darius: 0.4 } },
        { id: 'both', text: 'Prends le pentakill ET sauves le support. Facile.', weights: { ezreal: 1, 'lee-sin': 0.5, jinx: 0.4 } },
        { id: 'minimap', text: 'Quel support ? Tu ne regardes jamais la mini-map.', weights: { jinx: 0.6 } },
        { id: 'profit', text: 'Fais ce qui rapporte le plus, sans état d’âme.', weights: { cassiopeia: 1 } },
        { id: 'stylish', text: 'Prends le pentakill, mais seulement s’il est spectaculaire.', weights: { jhin: 1, 'miss-fortune': 0.4 } },
      ],
    },
    {
      id: 'secret',
      text: 'Un secret que tu caches :',
      answers: [
        { id: 'pretend-fine', text: 'Tu fais semblant que tout va bien plus souvent qu’on ne le croit.', weights: { jinx: 0.6 } },
        { id: 'secret-hobby', text: 'Tu as un hobby dont tu n’as jamais parlé à personne.', weights: { lux: 0.7, jhin: 0.4 } },
        { id: 'cheated', text: 'Tu as déjà triché à un jeu de société… et gagné.', weights: { cassiopeia: 0.6, teemo: 0.6 } },
        { id: 'self-doubt', text: 'Tu doutes énormément de toi.', weights: { jinx: 0.8 } },
        { id: 'grudge-list', text: 'Tu tiens une liste mentale des gens qui t’ont vexé·e.', weights: { 'miss-fortune': 0.8, cassiopeia: 0.5 } },
        { id: 'old-mistake', text: 'Tu t’en veux encore d’une erreur que tout le monde a oubliée.', weights: { 'lee-sin': 0.8 } },
      ],
    },
    {
      id: 'unknown-topic',
      text: 'On te demande ton avis sur un sujet que tu ne connais pas du tout. Tu…',
      answers: [
        { id: 'confident', text: 'Donnes ton avis quand même, avec aplomb.', weights: { ezreal: 0.8, darius: 0.5 } },
        { id: 'learn', text: 'Dis que tu n’en sais rien et demandes qu’on t’explique.', weights: { nasus: 1 } },
        { id: 'deflect', text: 'Retournes la question pour faire parler l’autre.', weights: { cassiopeia: 1 } },
        { id: 'joke', text: 'Inventes une réponse pour faire rire tout le monde.', weights: { teemo: 1, jinx: 0.4 } },
        { id: 'spotlight', text: 'Ramènes habilement la conversation sur toi.', weights: { 'miss-fortune': 1 } },
      ],
    },
    {
      id: 'rules',
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
      text: 'Le cadeau parfait pour toi :',
      answers: [
        { id: 'luxury', text: 'Un objet magnifique et hors de prix.', weights: { cassiopeia: 1, 'miss-fortune': 0.5 } },
        { id: 'blanket', text: 'Un plaid tout doux.', weights: { yuumi: 1 } },
        { id: 'useful', text: 'Un truc utile dont tu avais vraiment besoin.', weights: { nasus: 0.4 } },
        { id: 'handmade', text: 'Une œuvre unique, faite à la main.', weights: { jhin: 1 } },
        { id: 'time', text: 'Rien. Un moment passé ensemble suffit.', weights: { braum: 1 } },
      ],
    },
  ],
};
