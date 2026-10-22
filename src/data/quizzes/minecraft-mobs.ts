import type { Quiz } from '../../types';

export const minecraftMobs: Quiz = {
  id: 'minecraft-mobs',
  title: 'Quel mob Minecraft es-tu ?',
  emoji: '⛏️',
  description: 'Creeper explosif, enderman mystérieux ou vache zen ? Découvre quel mob se cache en toi.',
  personalities: [
    {
      id: 'creeper',
      name: 'Creeper',
      emoji: '💥',
      description:
        "Discret·ète, un peu timide, tu gardes tout pour toi… jusqu'au moment où ça explose. Tu as un cœur immense, tu veux juste des câlins, mais tu as du mal à gérer tes émotions. Les gens se méfient de toi, à tort.",
    },
    {
      id: 'enderman',
      name: 'Enderman',
      emoji: '👁️',
      description:
        "Mystérieux·se et insaisissable, tu apparais et disparais quand ça te chante. Tu collectionnes des choses étranges et tu n'aimes pas qu'on te dévisage. Les gens ne te comprennent pas toujours, et c'est très bien comme ça.",
    },
    {
      id: 'cow',
      name: 'Vache',
      emoji: '🐄',
      description:
        "Calme, généreux·se, sans prise de tête. Tu apprécies les plaisirs simples et tu fais du bien à tout le monde autour de toi. Le drame ? Connais pas.",
    },
    {
      id: 'villager',
      name: 'Villageois',
      emoji: '🧑‍🌾',
      description:
        "Négociateur·rice dans l'âme, tu connais tout le monde et tu as toujours un bon plan. Tu aimes ta routine, ton petit confort, et tu as toujours quelque chose à échanger. Hmm.",
    },
    {
      id: 'zombie',
      name: 'Zombie',
      emoji: '🧟',
      description:
        "Pas du matin, toujours affamé·e, tu avances lentement mais tu ne lâches jamais rien. Tu suis le mouvement et tu es bien entouré·e. Certaines personnes appellent ça de la paresse, toi tu appelles ça économiser ton énergie.",
    },
    {
      id: 'skeleton',
      name: 'Squelette',
      emoji: '🏹',
      description:
        "Précis·e, piquant·e, tu vises toujours juste, avec un arc comme avec tes mots. Tu gardes tes distances et tu observes avant de tirer. Ton humour est sec, mais redoutable.",
    },
    {
      id: 'wolf',
      name: 'Loup',
      emoji: '🐺',
      description:
        "Loyal·e jusqu'au bout, tu vis pour ta meute. Doux·ce avec tes proches, tu deviens redoutable dès qu'on s'en prend à eux. Une fois qu'on a gagné ta confiance, c'est pour la vie.",
    },
    {
      id: 'cat',
      name: 'Chat',
      emoji: '🐈',
      description:
        "Indépendant·e et un peu diva, tu fais exactement ce que tu veux, quand tu veux. Tu es affectueux·se… selon tes conditions. Et même les creepers ont peur de toi.",
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
        "Toujours occupé·e, organisé·e, tu travailles dur pour ton groupe. Tu es adorable, tu aimes les fleurs et les jolies choses… mais attention, tu piques si on t'embête.",
    },
    {
      id: 'bat',
      name: 'Chauve-souris',
      emoji: '🦇',
      description:
        "Tu ne sers à rien, et tu l'assumes pleinement. Tu passes tes journées la tête en bas, toujours dans la lune, tu volettes sans but, et personne ne sait vraiment pourquoi tu es là. Mais sans toi, les grottes seraient bien tristes.",
    },
  ],
  questions: [
    {
      id: 'monday-alarm',
      category: 'habits',
      text: 'Ton réveil sonne un lundi matin. Tu…',
      answers: [
        { id: 'up', text: "Te lèves direct, ta to-do list n'attend que toi.", weights: { bee: 1, 'iron-golem': 0.5, villager: 0.5 } },
        { id: 'snooze', text: 'Snooze. Snooze. Snooze. Tu es une créature de la nuit.', weights: { zombie: 1, bat: 0.5, cat: 0.3 } },
        { id: 'own-pace', text: "Restes au chaud et te lèves quand TU l'as décidé.", weights: { cat: 1, cow: 0.5 } },
        { id: 'panic', text: "Te réveilles en sursaut, persuadé·e d'être en retard.", weights: { creeper: 1 } },
        { id: 'normal', text: 'Te lèves, sans joie particulière. C’est lundi.', weights: { cow: 0.6, zombie: 0.5, 'iron-golem': 0.4 } },
      ],
    },
    {
      id: 'new-world',
      category: 'themed',
      text: 'Tu lances un nouveau monde Minecraft. Ta première action ?',
      answers: [
        { id: 'method', text: 'Couper du bois, faire des outils, survivre méthodiquement.', weights: { 'iron-golem': 0.7, bee: 0.6, villager: 0.4 } },
        { id: 'explore', text: 'Partir explorer droit devant, sans jamais te retourner.', weights: { enderman: 0.7, cat: 0.6 } },
        { id: 'trade', text: 'Trouver un village et faire du commerce.', weights: { villager: 1 } },
        { id: 'garden', text: 'Construire une jolie maison avec un jardin fleuri.', weights: { bee: 1, cow: 0.5 } },
        { id: 'team-up', text: 'Trouver d’autres joueur·euses et faire équipe.', weights: { wolf: 1, zombie: 0.4, bee: 0.4 } },
        { id: 'nothing', text: 'Rien. Tu regardes le soleil se coucher et tu attends.', weights: { bat: 1, cow: 0.3 } },
      ],
    },
    {
      id: 'party',
      category: 'social',
      text: 'Tu arrives à une soirée où tu ne connais presque personne.',
      answers: [
        { id: 'friends', text: 'Tu repères tes potes et tu ne les lâches plus.', weights: { wolf: 1, creeper: 0.3 } },
        { id: 'everyone', text: 'Tu fais le tour de la pièce et tu parles à tout le monde.', weights: { villager: 1, zombie: 0.3 } },
        { id: 'corner', text: "Tu t'installes dans un coin et tu observes. Personne ne te remarque.", weights: { enderman: 1, creeper: 0.6, skeleton: 0.4 } },
        { id: 'buffet', text: 'Tu fonces au buffet.', weights: { zombie: 1, cow: 0.7 } },
        { id: 'leave', text: "Tu repars au bout de 20 minutes sans prévenir personne.", weights: { cat: 1, enderman: 0.5 } },
      ],
    },
    {
      id: 'anger',
      category: 'introspection',
      text: 'Quand tu es en colère, ça ressemble à quoi ?',
      answers: [
        { id: 'bottle-up', text: 'Tu gardes tout pour toi pendant des semaines… puis tu exploses pour une histoire de chaussettes.', weights: { creeper: 1 } },
        { id: 'icy', text: 'Tu deviens très calme et très poli·e… et c’est encore pire.', weights: { skeleton: 1, enderman: 0.6, cat: 0.5 } },
        { id: 'protective', text: 'Pour toi, jamais. Mais si on s’en prend à tes proches, là ça devient sérieux.', weights: { wolf: 1, 'iron-golem': 0.8, bee: 0.4 } },
        { id: 'snap', text: 'Tu réagis au quart de tour, puis tu t’excuses dix minutes après.', weights: { bee: 1, creeper: 0.5, wolf: 0.3 } },
        { id: 'never', text: 'Franchement, tu ne te mets presque jamais en colère.', weights: { cow: 1, zombie: 0.5, bat: 0.4 } },
      ],
    },
    {
      id: 'first-night',
      category: 'themed',
      text: 'La première nuit tombe et les monstres arrivent. Tu…',
      answers: [
        { id: 'cozy-shelter', text: 'T’es déjà fait un petit abri confortable, tu attends le matin au chaud.', weights: { villager: 1, bee: 0.5 } },
        { id: 'hole', text: 'Creuses un trou, t’enfermes dedans et fixes le mur jusqu’au matin. Problème réglé.', weights: { zombie: 1, bat: 0.5 } },
        { id: 'night-walk', text: 'En profites pour partir seul·e explorer, la nuit c’est plus intéressant.', weights: { enderman: 1, cat: 0.4 } },
        { id: 'stick-together', text: 'Restes collé·e aux autres, on est plus fort·es ensemble.', weights: { wolf: 1, zombie: 0.4 } },
        { id: 'guard', text: 'Montes la garde pendant que les autres dorment.', weights: { 'iron-golem': 1, wolf: 0.4 } },
        { id: 'jumpy', text: 'Sursautes à chaque bruit, mais tu fais comme si de rien n’était.', weights: { creeper: 1 } },
      ],
    },
    {
      id: 'superpower-tradeoff',
      category: 'dilemma',
      text: 'Tu préfères…',
      answers: [
        { id: 'vanish', text: 'Pouvoir quitter n’importe quelle conversation gênante en un claquement de doigts, mais ne plus jamais savoir ce qu’on dit de toi après.', weights: { enderman: 1, creeper: 0.5, cat: 0.3 } },
        { id: 'responsible', text: 'Être la personne la plus fiable du monde, mais que tout le monde t’appelle à 3 h du matin pour ses problèmes.', weights: { 'iron-golem': 1, wolf: 0.7, bee: 0.5 } },
        { id: 'couch', text: 'Ne plus jamais avoir à travailler, mais ne plus jamais quitter ton canapé.', weights: { zombie: 1, cow: 0.7, bat: 0.6 } },
        { id: 'intimidating', text: 'Que tout le monde te trouve impressionnant·e, mais que personne n’ose t’adresser la parole.', weights: { skeleton: 1, enderman: 0.5, 'iron-golem': 0.3 } },
        { id: 'rich', text: 'Être riche, mais devoir négocier le prix d’absolument tout, même ton pain.', weights: { villager: 1 } },
      ],
    },
    {
      id: 'bad-day',
      category: 'stress',
      text: 'Ta journée part complètement de travers. Tu…',
      answers: [
        { id: 'list', text: 'Fais une liste et règles les problèmes un par un.', weights: { bee: 1, 'iron-golem': 0.7, villager: 0.4 } },
        { id: 'worry', text: 'Stresses en silence en espérant que personne ne remarque.', weights: { creeper: 1, bat: 0.3 } },
        { id: 'call', text: 'Appelles un·e ami·e pour tout lui raconter.', weights: { wolf: 1, bee: 0.3 } },
        { id: 'grumble', text: 'Râles très fort, mais avec beaucoup d’humour.', weights: { skeleton: 1, creeper: 0.3 } },
        { id: 'walk', text: 'Pars marcher seul·e pour te vider la tête.', weights: { enderman: 1, cat: 0.5 } },
        { id: 'bed', text: 'Retournes au lit. Demain sera un autre jour.', weights: { zombie: 1, cat: 0.6, bat: 0.6, cow: 0.4 } },
        { id: 'shrug', text: 'Fais avec. Ça arrive, ce n’est pas grave.', weights: { cow: 1, 'iron-golem': 0.4 } },
      ],
    },
    {
      id: 'free-afternoon',
      category: 'habits',
      text: 'Un après-midi entier de libre. Tu le passes…',
      answers: [
        { id: 'crowd', text: 'Au milieu du monde, là où ça bouge.', weights: { villager: 1, zombie: 0.5 } },
        { id: 'pack', text: 'Avec ta bande, peu importe où, tant que vous êtes ensemble.', weights: { wolf: 1, zombie: 0.3 } },
        { id: 'alone', text: 'Seul·e, dans un coin que personne d’autre ne connaît.', weights: { enderman: 1, skeleton: 0.4 } },
        { id: 'one-friend', text: 'Avec une seule personne de confiance, à parler de tout.', weights: { creeper: 1, wolf: 0.3 } },
        { id: 'project', text: 'À avancer sur un projet qui te tient à cœur.', weights: { bee: 1, 'iron-golem': 0.4 } },
        { id: 'couch', text: 'Sur le canapé. Tu ne bougeras pas.', weights: { cat: 0.8, zombie: 0.6, bat: 0.6, cow: 0.4 } },
      ],
    },
    {
      id: 'diamonds',
      category: 'themed',
      text: 'Tu tombes sur un énorme tas de diamants. Tu…',
      answers: [
        { id: 'share', text: 'Les partages avec toute ta bande.', weights: { wolf: 1, cow: 0.5 } },
        { id: 'armor', text: 'Fabriques des armures pour les personnes qui en ont besoin.', weights: { 'iron-golem': 1, cow: 0.4 } },
        { id: 'hide', text: 'Les caches quelque part et n’en parles à personne.', weights: { enderman: 1, creeper: 0.3 } },
        { id: 'show-off', text: 'Te fabriques une épée en diamant et la montres à tout le monde.', weights: { cat: 1, skeleton: 0.4 } },
        { id: 'few', text: 'En prends quelques-uns et laisses le reste. Pas besoin de plus.', weights: { cow: 1 } },
      ],
    },
    {
      id: 'group-project',
      category: 'social',
      text: 'Dans un projet de groupe, tu es…',
      answers: [
        { id: 'worker', text: 'La personne qui fait tout le boulot pendant que les autres discutent.', weights: { bee: 1, 'iron-golem': 0.6 } },
        { id: 'matchmaker', text: 'La personne qui discute avec chacun pour que tout le monde ait une tâche qui lui plaît.', weights: { villager: 1, cow: 0.3 } },
        { id: 'follower', text: 'La personne qui suit le groupe sans trop se poser de questions.', weights: { zombie: 1, cow: 0.5 } },
        { id: 'critic', text: 'La personne qui critique tout, mais qui a souvent raison.', weights: { skeleton: 1, cat: 0.4 } },
        { id: 'ghost', text: 'La personne qui disparaît, puis revient à la fin avec un truc bizarre mais génial.', weights: { enderman: 1, cat: 0.4, creeper: 0.3 } },
        { id: 'fair-share', text: 'La personne qui fait sa part, ni plus ni moins.', weights: { 'iron-golem': 0.6, cow: 0.5, zombie: 0.5 } },
      ],
    },
    {
      id: 'keep-one-thing',
      category: 'values',
      text: 'Tu ne peux garder qu’une seule chose de ta vie actuelle. Laquelle ?',
      answers: [
        { id: 'friends', text: 'Tes ami·es.', weights: { wolf: 1, bee: 0.5, villager: 0.3 } },
        { id: 'peace', text: 'Ta tranquillité.', weights: { cat: 0.8, cow: 0.8, bat: 0.5, enderman: 0.4 } },
        { id: 'treasures', text: 'Tes petits trésors : souvenirs, collections, objets que personne d’autre ne comprend.', weights: { enderman: 1 } },
        { id: 'routine', text: 'Ta routine. Sans elle, c’est le chaos.', weights: { villager: 1, bee: 0.5, 'iron-golem': 0.4 } },
        { id: 'bed', text: 'Ton lit.', weights: { zombie: 1, cat: 0.5, cow: 0.4, bat: 0.4 } },
        { id: 'humor', text: 'Ton sens de l’humour.', weights: { skeleton: 1 } },
      ],
    },
    {
      id: 'zombie-apocalypse',
      category: 'absurd-scenario',
      text: 'Une apocalypse zombie commence. Ton plan ?',
      answers: [
        { id: 'lead', text: 'Tu prends la tête de la résistance et tu protèges les survivant·es.', weights: { 'iron-golem': 1, wolf: 0.6 } },
        { id: 'crowd', text: 'Tu suis le plus gros groupe, c’est sûrement le plus sûr.', weights: { zombie: 1, cow: 0.4 } },
        { id: 'watch', text: 'Tu observes de loin et tu attends le bon moment.', weights: { skeleton: 1, enderman: 0.4 } },
        { id: 'chaos', text: 'Tu paniques, tu cours partout… et ça marche étonnamment bien.', weights: { creeper: 1 } },
        { id: 'solo', text: 'Tu pars discrètement et tu te débrouilles seul·e.', weights: { cat: 0.8, enderman: 0.8 } },
        { id: 'sleep', text: 'Tu te caches et tu dors jusqu’à ce que ça passe.', weights: { bat: 1, zombie: 0.3 } },
      ],
    },
    {
      id: 'bedroom',
      category: 'habits',
      text: 'Ta chambre, c’est plutôt…',
      answers: [
        { id: 'organized-mess', text: 'Un joyeux bazar, mais tu sais exactement où est chaque chose.', weights: { enderman: 1 } },
        { id: 'tidy', text: 'Rangée, fonctionnelle, solide.', weights: { 'iron-golem': 1, bee: 0.5, villager: 0.4 } },
        { id: 'battlefield', text: 'Un champ de bataille. Tu ne sais pas trop comment c’est arrivé.', weights: { zombie: 1, bat: 0.5 } },
        { id: 'nest', text: 'Un nid douillet avec des plaids partout.', weights: { cat: 1, cow: 0.6 } },
      ],
    },
    {
      id: 'stared-at',
      category: 'social',
      text: 'Quelqu’un te dévisage dans le métro. Tu…',
      answers: [
        { id: 'stare-back', text: 'Fixes en retour jusqu’à ce qu’iel détourne les yeux.', weights: { enderman: 1, skeleton: 0.6 } },
        { id: 'panic', text: 'Paniques intérieurement et fais semblant de lire tes messages.', weights: { creeper: 1 } },
        { id: 'smile', text: 'Lui souris. Iel veut peut-être devenir ton ami·e.', weights: { villager: 1, cow: 0.5 } },
        { id: 'oblivious', text: 'Ne remarques rien, tu es dans ton monde.', weights: { bat: 1, zombie: 0.5 } },
        { id: 'check', text: 'Vérifies discrètement que tout le monde autour de toi va bien.', weights: { 'iron-golem': 1, wolf: 0.4 } },
      ],
    },
    {
      id: 'house-blown-up',
      category: 'themed',
      text: 'Un creeper vient de faire exploser ta maison. Tu…',
      answers: [
        { id: 'rebuild', text: 'Reconstruis tout, en mieux, dès ce soir.', weights: { bee: 1, 'iron-golem': 0.5 } },
        { id: 'justice', text: 'Pars régler leur compte à tous les creepers du coin. Ça ne restera pas impuni.', weights: { 'iron-golem': 1, wolf: 0.4 } },
        { id: 'sarcasm', text: 'Lâches un commentaire sarcastique, puis tu te remets au travail.', weights: { skeleton: 1 } },
        { id: 'call-friends', text: 'Appelles ta bande pour qu’elle t’aide à reconstruire.', weights: { wolf: 1, villager: 0.4 } },
        { id: 'move-on', text: 'Pars t’installer ailleurs. Ce n’était qu’une maison.', weights: { cat: 1, enderman: 0.5 } },
      ],
    },
    {
      id: 'friends-say',
      category: 'introspection',
      text: 'Qu’est-ce que tes ami·es disent de toi quand tu n’es pas là ?',
      answers: [
        { id: 'reliable', text: "Qu'on peut toujours compter sur toi.", weights: { 'iron-golem': 1, wolf: 0.8 } },
        { id: 'unpredictable', text: 'Que tu es adorable, mais imprévisible.', weights: { creeper: 1, cat: 0.5 } },
        { id: 'mysterious', text: 'Que tu es un peu mystérieux·se.', weights: { enderman: 1 } },
        { id: 'never-stops', text: "Que tu ne t'arrêtes jamais.", weights: { bee: 1 } },
        { id: 'chill', text: 'Que tu es la personne la plus chill du groupe.', weights: { cow: 1, zombie: 0.4 } },
        { id: 'sharp-tongue', text: 'Que tu as la langue bien pendue.', weights: { skeleton: 1, villager: 0.4 } },
        { id: 'dreamer', text: 'Que tu es dans la lune la moitié du temps, mais qu’on t’aime bien.', weights: { bat: 1, cow: 0.3, zombie: 0.3 } },
      ],
    },
    {
      id: 'childhood-game',
      category: 'nostalgia',
      text: 'Enfant, ton jeu préféré, c’était…',
      answers: [
        { id: 'hide', text: 'Cache-cache. Personne ne te trouvait jamais.', weights: { enderman: 0.8, creeper: 0.6 } },
        { id: 'rules', text: 'Organiser les jeux et décider des règles.', weights: { villager: 1, bee: 0.4 } },
        { id: 'running', text: 'Tout jeu où on court partout jusqu’à épuisement.', weights: { bee: 1, wolf: 0.4 } },
        { id: 'board-games', text: 'Les jeux de société. Tu gagnais toujours (en trichant un peu).', weights: { skeleton: 1, villager: 0.6 } },
        { id: 'imagination', text: 'Inventer des histoires et des mondes imaginaires, dans ton coin.', weights: { bat: 1, enderman: 0.4 } },
      ],
    },
    {
      id: 'favorite-food',
      category: 'funny',
      text: 'Ton repas idéal ?',
      answers: [
        { id: 'anything', text: "Tout ce qui se mange, tant qu'il y en a beaucoup.", weights: { zombie: 1, cow: 0.3 } },
        { id: 'same-dish', text: 'Un plat simple, toujours le même, et c’est très bien comme ça.', weights: { cow: 1, villager: 0.5 } },
        { id: 'shared-snack', text: 'Un goûter sucré, partagé avec toute la bande.', weights: { wolf: 1, cow: 0.5 } },
        { id: 'fancy', text: 'Un truc raffiné. Et si ce n’est pas parfait, tu le laisses.', weights: { cat: 1 } },
        { id: 'forget', text: 'Tu oublies souvent de manger, tu as d’autres choses en tête.', weights: { bat: 1, bee: 0.5 } },
      ],
    },
  ],
};
