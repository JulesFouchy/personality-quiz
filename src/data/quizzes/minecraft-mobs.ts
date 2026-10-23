import type { Quiz } from '../../types';

export const minecraftMobs: Quiz = {
  id: 'minecraft-mobs',
  title: 'Quel mob Minecraft es-tu ?',
  emoji: '⛏️',
  description: 'Creeper explosif, enderman mystérieux ou poulpe luisant toujours content ? Découvre quel mob se cache en toi.',
  personalities: [
    {
      id: 'creeper',
      name: 'Creeper',
      emoji: '💥',
      description:
        'Discret·ète, un peu timide et vite stressé·e, tu gardes tout pour toi… jusqu’au moment où ça explose. Tu as un cœur immense, tu veux juste des câlins, mais tu as du mal à gérer tes émotions. Les gens se méfient de toi, à tort.',
    },
    {
      id: 'enderman',
      name: 'Enderman',
      emoji: '👁️',
      description:
        'Mystérieux·se et insaisissable, tu apparais et disparais quand ça te chante. Tu collectionnes des choses étranges et tu n’aimes pas qu’on te dévisage. Les gens ne te comprennent pas toujours, et c’est très bien comme ça.',
    },
    {
      id: 'villager',
      name: 'Villageois',
      emoji: '🧑‍🌾',
      description:
        'Négociateur·rice dans l’âme, tu connais tout le monde et tu as toujours un bon plan. Tu aimes ta routine, ton petit confort, et tu as toujours quelque chose à échanger. Hmm.',
    },
    {
      id: 'zombie',
      name: 'Zombie',
      emoji: '🧟',
      description:
        'Pas du matin, toujours affamé·e, tu avances lentement, à ton rythme. Tu suis le mouvement et tu es bien entouré·e. Certaines personnes appellent ça de la paresse, toi tu appelles ça économiser ton énergie.',
    },
    {
      id: 'skeleton',
      name: 'Squelette',
      emoji: '🏹',
      description:
        'Précis·e, piquant·e, tu vises toujours juste, avec un arc comme avec tes mots. Tu gardes tes distances et tu observes avant de tirer. Ton humour est sec, mais redoutable.',
    },
    {
      id: 'wolf',
      name: 'Loup',
      emoji: '🐺',
      description:
        'Loyal·e jusqu’au bout, tu vis pour ta meute. Doux·ce avec tes proches, tu deviens redoutable dès qu’on s’en prend à ta meute. Une fois qu’on a gagné ta confiance, c’est pour la vie.',
    },
    {
      id: 'iron-golem',
      name: 'Golem de fer',
      emoji: '🛡️',
      description:
        'Protecteur·rice, solide et fiable, tu veilles sur les personnes qui en ont besoin. Impressionnant·e de loin, tu offres des coquelicots de près. Ton sens de la justice est inébranlable.',
    },
    {
      id: 'bee',
      name: 'Abeille',
      emoji: '🐝',
      description:
        'Toujours occupé·e, organisé·e, tu travailles dur pour ton groupe. Tu es adorable… mais attention, tu piques si on t’embête.',
    },
    {
      id: 'bat',
      name: 'Chauve-souris',
      emoji: '🦇',
      description:
        'Tu ne sers à rien, et tu l’assumes pleinement. Tu passes tes journées la tête en bas, toujours dans la lune, tu volettes sans but, et personne ne sait vraiment pourquoi tu es là. Mais sans toi, les grottes seraient bien tristes.',
    },
    {
      id: 'phantom',
      name: 'Phantom',
      emoji: '👻',
      description:
        'Insistant·e et un peu envahissant·e, tu tournes autour des gens jusqu’à obtenir ce que tu veux. Tu ne lâches jamais un sujet, tu reviens toujours à la charge, et tu as le chic pour débarquer au pire moment. Agaçant·e ? Peut-être. Oublié·e ? Jamais.',
    },
    {
      id: 'glow-squid',
      name: 'Poulpe luisant',
      emoji: '🦑',
      description:
        'Rayonnant·e sans même essayer, toujours de bonne humeur, tu t’émerveilles d’un rien. Un peu naïf·ve, parfois à côté de la plaque, tu fais sourire tout le monde… même quand on n’est pas sûr·e que tu aies compris la blague.',
    },
    {
      id: 'piglin',
      name: 'Piglin',
      emoji: '🐷',
      description:
        'Tu aimes ce qui brille : le luxe, les belles choses, les apparences. Avec les gens qui partagent tes goûts, tu es d’une générosité folle. Avec les autres, tu le fais savoir, et pas toujours calmement.',
    },
  ],
  questions: [
    {
      id: 'monday-alarm',
      category: 'habits',
      text: 'Ton réveil sonne un lundi matin. Tu…',
      answers: [
        { id: 'up', text: 'Te lèves direct, tu as déjà mille choses prévues.', weights: { bee: 1, 'iron-golem': 0.5, villager: 0.5 } },
        { id: 'snooze', text: 'Snooze. Snooze. Snooze. Le matin, ce n’est pas pour toi.', weights: { zombie: 1, bat: 0.5 } },
        { id: 'singing', text: 'Te lèves en chantonnant, ravi·e de commencer une nouvelle semaine.', weights: { 'glow-squid': 1 } },
        { id: 'panic', text: 'Te réveilles en sursaut, persuadé·e d’être en retard.', weights: { creeper: 1 } },
        { id: 'normal', text: 'Te lèves, sans joie particulière. C’est lundi.', weights: { zombie: 0.6, 'iron-golem': 0.4 } },
      ],
    },
    {
      id: 'new-world',
      category: 'themed',
      text: 'Tu lances un nouveau monde Minecraft. Ta première action ?',
      answers: [
        { id: 'method', text: 'Couper du bois, faire des outils, survivre méthodiquement.', weights: { 'iron-golem': 0.7, bee: 0.6, villager: 0.4 } },
        { id: 'explore', text: 'Partir explorer droit devant, sans jamais te retourner.', weights: { enderman: 0.8, 'glow-squid': 0.5 } },
        { id: 'trade', text: 'Repérer qui a déjà des ressources et lui proposer un échange avantageux.', weights: { villager: 1 } },
        { id: 'showcase-house', text: 'Construire la plus belle maison du serveur.', weights: { piglin: 1, bee: 0.3 } },
        { id: 'nothing', text: 'Rien. Tu regardes le soleil se coucher et tu attends.', weights: { bat: 1 } },
      ],
    },
    {
      id: 'party',
      category: 'social',
      text: 'Tu arrives à une soirée où tu ne connais presque personne.',
      answers: [
        { id: 'friends', text: 'Tu repères tes potes et tu ne les lâches plus.', weights: { wolf: 1, creeper: 0.3 } },
        { id: 'everyone', text: 'Tu fais le tour de la pièce et tu parles à tout le monde.', weights: { villager: 1, zombie: 0.3 } },
        { id: 'corner', text: 'Tu t’installes dans un coin et tu observes.', weights: { enderman: 1, creeper: 0.6, skeleton: 0.4 } },
        { id: 'first-person', text: 'Tu restes avec la première personne qui te parle et tu suis le mouvement.', weights: { zombie: 0.8, wolf: 0.3 } },
        { id: 'join-in', text: 'Tu t’incrustes dans une conversation déjà lancée.', weights: { phantom: 0.8, villager: 0.4 } },
      ],
    },
    {
      id: 'anger',
      category: 'introspection',
      text: 'Quand tu es en colère, ça ressemble à quoi ?',
      answers: [
        { id: 'replay', text: 'Tu dis que ça va, et tu te refais la dispute dans ta tête pendant des jours.', weights: { creeper: 1, phantom: 0.3 } },
        { id: 'icy', text: 'Tu deviens très calme et très poli·e… et c’est encore pire.', weights: { skeleton: 1 } },
        { id: 'protective', text: 'Jamais pour toi-même. Mais si on s’en prend à tes proches, là ça devient sérieux.', weights: { wolf: 1, 'iron-golem': 0.8 } },
        { id: 'snap', text: 'Tu réagis au quart de tour, puis tu t’excuses dix minutes après.', weights: { bee: 1, creeper: 0.5 } },
        { id: 'disrespect', text: 'Quand on te manque de respect, tu le fais savoir. Tout de suite. Et fort.', weights: { piglin: 1 } },
        { id: 'again-and-again', text: 'Tu reviens sur le sujet encore et encore, jusqu’à ce qu’on te donne raison.', weights: { phantom: 1 } },
        { id: 'never', text: 'Franchement, tu ne te mets presque jamais en colère.', weights: { 'glow-squid': 0.8, zombie: 0.5, bat: 0.4 } },
      ],
    },
    {
      id: 'first-night',
      category: 'themed',
      text: 'La première nuit tombe et les monstres arrivent. Tu…',
      answers: [
        { id: 'cozy-shelter', text: 'Es déjà à l’abri dans une petite cabane, tu attends le matin.', weights: { villager: 1, bee: 0.5 } },
        { id: 'bed', text: 'Fabriques un lit et dors. Problème réglé.', weights: { zombie: 0.8, bat: 0.5 } },
        { id: 'night-walk', text: 'En profites pour partir explorer, la nuit c’est plus intéressant.', weights: { enderman: 1 } },
        { id: 'guard', text: 'Montes la garde pendant que les autres dorment.', weights: { 'iron-golem': 1, wolf: 0.4 } },
        { id: 'fight', text: 'Te bats contre tout ce qui approche.', weights: { wolf: 0.6, piglin: 0.5, 'iron-golem': 0.4 } },
        { id: 'stars', text: 'Restes dehors à regarder les étoiles, sans trop te rendre compte du danger.', weights: { 'glow-squid': 0.7, bat: 0.5 } },
      ],
    },
    {
      id: 'superpower-tradeoff',
      category: 'dilemma',
      text: 'Tu préfères…',
      answers: [
        { id: 'vanish', text: 'Pouvoir t’échapper de n’importe quelle conversation gênante, mais ne plus jamais savoir ce qu’on dit de toi après.', weights: { enderman: 1, creeper: 0.5 } },
        { id: 'responsible', text: 'Être la personne la plus fiable du monde, mais que tout le monde t’appelle à 3 h du matin pour ses problèmes.', weights: { 'iron-golem': 1, wolf: 0.7, bee: 0.5 } },
        { id: 'couch', text: 'Ne plus jamais avoir à travailler, mais ne plus jamais quitter ton canapé.', weights: { zombie: 1, bat: 0.6 } },
        { id: 'rich', text: 'Être riche, mais devoir négocier le prix d’absolument tout, même ton pain.', weights: { villager: 1 } },
      ],
    },
    {
      id: 'we-need-to-talk',
      category: 'stress',
      text: 'Tu reçois un message : « Il faut qu’on parle. » Rien d’autre. Tu…',
      answers: [
        { id: 'of-what', text: 'Réponds « Oui, de quoi ? » et attends tranquillement.', weights: { 'glow-squid': 0.6, zombie: 0.5, 'iron-golem': 0.4 } },
        { id: 'call-now', text: 'Appelles tout de suite pour savoir ce qui se passe.', weights: { wolf: 0.8, phantom: 0.6, 'iron-golem': 0.4 } },
        { id: 'reread', text: 'Relis toute la conversation pour chercher ce que tu as fait.', weights: { creeper: 1, bee: 0.3 } },
        { id: 'imagine-worst', text: 'Réponds « Oui ? » et te fais tous les films de la planète dans ta tête en attendant.', weights: { creeper: 0.6 } },
        { id: 'ask-around', text: 'Demandes discrètement à un·e ami·e commun·e si iel sait quelque chose.', weights: { villager: 0.8, phantom: 0.4 } },
        { id: 'joke', text: 'Réponds par une blague pour détendre l’atmosphère.', weights: { skeleton: 0.7, 'glow-squid': 0.4 } },
        { id: 'later', text: 'Laisses ça pour plus tard, on verra bien.', weights: { zombie: 0.8, bat: 0.6, enderman: 0.4 } },
      ],
    },
    {
      id: 'empty-sunday',
      category: 'habits',
      text: 'Un dimanche sans rien de prévu. Tu…',
      answers: [
        { id: 'project', text: 'Avances sur un projet qui te tient à cœur.', weights: { bee: 1 } },
        { id: 'friends', text: 'Vois tes ami·es.', weights: { wolf: 1, villager: 0.5, 'glow-squid': 0.4 } },
        { id: 'shopping', text: 'Vas faire un tour dans les magasins, et tu reviens forcément avec un petit quelque chose.', weights: { piglin: 1 } },
        { id: 'pajamas', text: 'Restes en pyjama toute la journée, et c’est parfait.', weights: { zombie: 1, bat: 0.4 } },
        { id: 'chores', text: 'Fais le ménage et les courses de la semaine.', weights: { 'iron-golem': 0.6, bee: 0.6, villager: 0.5 } },
      ],
    },
    {
      id: 'diamonds',
      category: 'themed',
      text: 'Tu tombes sur un énorme tas de diamants. Tu…',
      answers: [
        { id: 'gear', text: 'T’en sers tout de suite pour t’équiper, puis te remets au travail.', weights: { bee: 0.7, 'iron-golem': 0.5 } },
        { id: 'chest', text: 'Les ranges dans un coffre « pour plus tard ».', weights: { villager: 0.6, enderman: 0.5, creeper: 0.3 } },
        { id: 'share', text: 'Les partages avec toute ta bande.', weights: { wolf: 1 } },
        { id: 'hide', text: 'Les caches quelque part et n’en parles à personne.', weights: { enderman: 1, creeper: 0.3 } },
        { id: 'build', text: 'Construis quelque chose de grandiose avec, juste pour le plaisir des yeux.', weights: { piglin: 0.8, bee: 0.3 } },
        { id: 'happy-dance', text: 'Fais une danse de la joie devant ton écran.', weights: { 'glow-squid': 0.8 } },
      ],
    },
    {
      id: 'group-project',
      category: 'social',
      text: 'Dans un projet de groupe, tu es…',
      answers: [
        { id: 'worker', text: 'La personne qui fait tout le boulot pendant que les autres discutent.', weights: { bee: 1, 'iron-golem': 0.6 } },
        { id: 'matchmaker', text: 'La personne qui va voir tout le monde pour s’assurer que chaque personne ait une tâche qui lui plaît.', weights: { villager: 1 } },
        { id: 'follower', text: 'La personne qui fait ce qu’on lui dit, sans trop se poser de questions.', weights: { zombie: 1 } },
        { id: 'critic', text: 'La personne qui critique tout, mais qui a souvent raison.', weights: { skeleton: 1 } },
        { id: 'ghost', text: 'La personne qui disparaît, puis revient à la fin avec un truc bizarre mais génial.', weights: { enderman: 1 } },
        { id: 'late-reminders', text: 'La personne qui relance le groupe tous les soirs à 23 h.', weights: { phantom: 0.8, bee: 0.5 } },
      ],
    },
    {
      id: 'keep-one-thing',
      category: 'values',
      text: 'Tu ne peux garder qu’une seule chose de ta vie actuelle. Laquelle ?',
      answers: [
        { id: 'friends', text: 'Tes proches.', weights: { wolf: 1, bee: 0.5, villager: 0.3 } },
        { id: 'peace', text: 'Ta tranquillité.', weights: { bat: 0.8, zombie: 0.5 } },
        { id: 'treasures', text: 'Tes petits trésors : souvenirs, collections, objets que personne d’autre ne comprend.', weights: { enderman: 1 } },
        { id: 'routine', text: 'Ta routine. Sans elle, c’est le chaos.', weights: { villager: 1, bee: 0.5, 'iron-golem': 0.4 } },
      ],
    },
    {
      id: 'zombie-apocalypse',
      category: 'absurd-scenario',
      text: 'Une apocalypse zombie commence. Ton plan ?',
      answers: [
        { id: 'lead', text: 'Tu prends la tête de la résistance et tu protèges les survivant·es.', weights: { 'iron-golem': 1, wolf: 0.6 } },
        { id: 'loved-ones', text: 'Tu fonces retrouver tes proches, le reste attendra.', weights: { wolf: 1 } },
        { id: 'give-up', text: 'Autant devenir un zombie tout de suite, de toute façon c’est perdu d’avance.', weights: { zombie: 0.8, bat: 0.6 } },
        { id: 'watch', text: 'Tu observes de loin et tu attends le bon moment.', weights: { skeleton: 1, enderman: 0.4 } },
        { id: 'chaos', text: 'Tu paniques, tu cours partout… et ça marche étonnamment bien.', weights: { bat: 0.8, creeper: 0.5 } },
        { id: 'solo', text: 'Tu pars discrètement et tu te débrouilles seul·e.', weights: { enderman: 1 } },
        { id: 'morale', text: 'Tu remontes le moral du groupe, même quand c’est mal parti.', weights: { 'glow-squid': 0.8, wolf: 0.3 } },
      ],
    },
    {
      id: 'bedroom',
      category: 'habits',
      text: 'Ta chambre, c’est plutôt…',
      answers: [
        { id: 'organized-mess', text: 'Un joyeux bazar, mais tu sais exactement où est chaque chose.', weights: { enderman: 1 } },
        { id: 'tidy', text: 'Rangée, fonctionnelle, chaque chose à sa place.', weights: { 'iron-golem': 1, bee: 0.5, villager: 0.4 } },
        { id: 'battlefield', text: 'Un champ de bataille. Tu ne sais pas trop comment c’est arrivé.', weights: { bat: 1, zombie: 0.4 } },
        { id: 'decorated', text: 'Bien décorée, pleine de figurines, de posters et de jolis objets.', weights: { piglin: 1 } },
        { id: 'cozy', text: 'Cosy, avec tout à portée de main sans avoir à te lever.', weights: { villager: 0.6, zombie: 0.5 } },
        { id: 'minimal', text: 'Minimaliste : le strict nécessaire, rien qui dépasse.', weights: { skeleton: 0.8, 'iron-golem': 0.4 } },
      ],
    },
    {
      id: 'stared-at',
      category: 'social',
      text: 'Quelqu’un te dévisage dans le métro. Tu…',
      answers: [
        { id: 'look-away', text: 'Détournes le regard, un peu mal à l’aise.', weights: { creeper: 1 } },
        { id: 'stare-back', text: 'Soutiens son regard sans ciller.', weights: { enderman: 0.7, skeleton: 0.6 } },
        { id: 'smile', text: 'Lui souris.', weights: { villager: 0.8, 'glow-squid': 0.8 } },
        { id: 'check-face', text: 'Vérifies discrètement que tu n’as rien sur la figure.', weights: { piglin: 0.7, creeper: 0.5 } },
        { id: 'ask', text: 'Lui demandes s’il y a un problème.', weights: { piglin: 0.6, skeleton: 0.5, wolf: 0.3 } },
        { id: 'oblivious', text: 'Ne remarques rien du tout.', weights: { bat: 1 } },
      ],
    },
    {
      id: 'house-blown-up',
      category: 'themed',
      text: 'Un creeper vient de faire exploser ta maison. Tu…',
      answers: [
        { id: 'rebuild', text: 'Reconstruis tout, en mieux, dès ce soir.', weights: { bee: 1, 'iron-golem': 0.5 } },
        { id: 'walls', text: 'Construis des murs tout autour pour que ça n’arrive plus jamais.', weights: { 'iron-golem': 0.7, creeper: 0.4 } },
        { id: 'justice', text: 'Pars régler leur compte à tous les creepers du coin. Ça ne restera pas impuni.', weights: { 'iron-golem': 1, wolf: 0.4 } },
        { id: 'quit', text: 'Éteins le jeu. Ça suffit pour aujourd’hui.', weights: { creeper: 0.6, piglin: 0.5 } },
        { id: 'tell-everyone', text: 'En parles à tout le monde pendant des semaines.', weights: { phantom: 1 } },
        { id: 'pool', text: 'Trouves que le cratère ferait une super piscine.', weights: { 'glow-squid': 1 } },
      ],
    },
    {
      id: 'friends-say',
      category: 'introspection',
      text: 'Qu’est-ce que tes ami·es disent de toi quand tu n’es pas là ?',
      answers: [
        { id: 'reliable', text: 'Qu’on peut toujours compter sur toi.', weights: { 'iron-golem': 1, wolf: 0.6, bee: 0.4 } },
        { id: 'stories', text: 'Que tu as toujours une histoire à raconter.', weights: { villager: 0.6, phantom: 0.5, 'glow-squid': 0.4 } },
        { id: 'where', text: 'Qu’on ne sait jamais trop où tu es.', weights: { enderman: 0.7, bat: 0.6 } },
        { id: 'nitpick', text: 'Que tu as toujours un truc à redire.', weights: { skeleton: 0.8, piglin: 0.5 } },
        { id: 'for-life', text: 'Qu’une fois que tu as adopté quelqu’un, c’est pour toujours.', weights: { wolf: 1, 'iron-golem': 0.3 } },
        { id: 'good-mood', text: 'Que tu mets de la bonne humeur partout où tu passes.', weights: { 'glow-squid': 1 } },
        { id: 'sensitive', text: 'Que tu es bien plus sensible que tu n’en as l’air.', weights: { creeper: 1 } },
      ],
    },
    {
      id: 'childhood-game',
      category: 'nostalgia',
      text: 'Enfant, ton jeu préféré, c’était…',
      answers: [
        { id: 'hide', text: 'Cache-cache : le meilleur moment, c’était d’attendre caché·e sans bouger.', weights: { enderman: 0.8, creeper: 0.5 } },
        { id: 'rules', text: 'Organiser les jeux et décider des règles.', weights: { bee: 1, villager: 0.3 } },
        { id: 'board-games', text: 'Les jeux de société, surtout ceux où il faut réfléchir.', weights: { skeleton: 0.6, villager: 0.5 } },
        { id: 'running-screaming', text: 'Tous les jeux où on court partout en criant.', weights: { bee: 0.6, 'glow-squid': 0.5, wolf: 0.3 } },
        { id: 'team-ball', text: 'Les jeux de ballon.', weights: { wolf: 0.8, bee: 0.3 } },
        { id: 'imagination', text: 'Inventer des histoires et des mondes imaginaires, dans ton coin.', weights: { bat: 1, enderman: 0.4 } },
        { id: 'tag-along', text: 'Suivre les grand·es partout, même quand iels voulaient être tranquilles.', weights: { phantom: 1 } },
      ],
    },
    {
      id: 'favorite-food',
      category: 'funny',
      text: 'Ton repas idéal ?',
      answers: [
        { id: 'anything', text: 'Tout ce qui se mange, tant qu’il y en a beaucoup.', weights: { zombie: 1 } },
        { id: 'same-dish', text: 'Un plat simple, toujours le même, et c’est très bien comme ça.', weights: { villager: 1 } },
        { id: 'long-dinner', text: 'Un repas qui dure des heures avec plein de monde.', weights: { wolf: 0.6, villager: 0.5, 'glow-squid': 0.4 } },
        { id: 'fancy', text: 'Un truc raffiné. Et si ce n’est pas parfait, tu le laisses.', weights: { piglin: 1 } },
        { id: 'forget', text: 'Tu oublies souvent de manger, tu as d’autres choses en tête.', weights: { bat: 1, bee: 0.5 } },
      ],
    },
  ],
};
