import type { Quiz } from '../../types';

export const frenchSongs: Quiz = {
  id: 'french-songs',
  title: 'Quelle chanson française es-tu ?',
  emoji: '🎤',
  released: '2026-10-24',
  description: 'Celle que tu massacres sous la douche n’est peut-être pas la bonne : trouve la chanson avec laquelle tu résonnes le plus.',
  personalities: [
    {
      id: 'no-regrets',
      name: 'Non, je ne regrette rien',
      emoji: '🌹',
      description:
        'Comme Édith Piaf, tu assumes tout : tes choix, tes erreurs, tes coups de tête. Quand quelque chose tourne mal, tu ne passes pas des nuits à refaire le film : tu tires un trait et tu repars de zéro. Tu as du caractère, tu tiens tête, et les « tu aurais dû » des autres glissent sur toi. Ce qui est fait est fait, et c’est ce qui te rend si libre.',
    },
    {
      id: 'the-south',
      name: 'Le Sud',
      emoji: '☀️',
      description:
        'Ton idéal, c’est la chanson de Nino Ferrer : une maison au soleil, des après-midi qui n’en finissent pas, et personne pour te presser. Tu prends ton temps, rien ne te stresse vraiment, et tu savoures les choses simples. Un brin nostalgique, tu as le chic pour transformer un souvenir en petit paradis, et tu sais que les beaux moments ne durent pas, alors tu les savoures d’autant plus. Quand tout va trop vite, tu fermes les yeux et tu pars là-bas, quelque part entre la Louisiane et l’Italie.',
    },
    {
      id: 'my-fight',
      name: 'Mon fils ma bataille',
      emoji: '🧑‍🍼',
      description:
        'Comme le père de la chanson de Daniel Balavoine, tu deviens une forteresse dès qu’on touche à une personne que tu aimes. Tu te bats pour tes proches avec une énergie que rien n’arrête, ni les règles, ni les administrations, ni les gens qui crient plus fort que toi. Tu ne lâches rien quand c’est important, et tu sais te mettre en colère pour les bonnes raisons. Derrière la combativité, un cœur immense : tout ce que tu fais, c’est pour les tiens, et tu es toujours là quand l’un·e d’elleux a besoin d’aide.',
    },
    {
      id: 'another-world',
      name: 'Un autre monde',
      emoji: '🌍',
      description:
        'Comme dans la chanson de Téléphone, tu rêves d’une vie différente, et tu as compris qu’il fallait commencer par toi. Tu te poses beaucoup de questions, tu pèses longtemps tes décisions, et tu traverses des périodes de doute dont tu ressors chaque fois un peu transformé·e. Idéaliste, tu imagines sans cesse comment les choses pourraient être autrement, et tu n’as pas peur de remettre ta propre vie en question. Tu fais le ménage chez toi avant de donner des leçons aux autres.',
    },
    {
      id: 'walk-alone',
      name: 'Je marche seul',
      emoji: '🚶',
      description:
        'Comme Jean-Jacques Goldman, tu aimes ta propre compagnie, et ce n’est pas de la tristesse : c’est ta façon de te recharger. Une balade sans but, un casque sur les oreilles, une ville où personne ne te connaît, et tu es heureux·se. Indépendant·e, tu n’as besoin de l’avis de personne pour décider où aller. Tu observes beaucoup, les gens, les rues, les détails, et tu as souvent tout remarqué bien avant les autres.',
    },
    {
      id: 'into-the-wind',
      name: 'J’t’emmène au vent',
      emoji: '🍃',
      description:
        'Comme dans la chanson de Louise Attaque, tu aimes avec légèreté, mais jamais à moitié. Pour les personnes que tu aimes, tu as toujours une idée pour les arracher au quotidien gris : une virée sans raison, un détour pour leur faire plaisir, une petite attention au bon moment. Sincère, tu fuis les déclarations en carton : chez toi, l’affection passe autant par les gestes que par les mots. Avec toi, même un mardi pluvieux a des airs d’escapade.',
    },
    {
      id: 'light-the-fire',
      name: 'Allumer le feu',
      emoji: '🔥',
      description:
        'Comme Johnny au Stade de France, tu ne fais rien à moitié. Il te faut du monde, du bruit, de la lumière, et si possible une scène. Tu adores être au centre de l’attention, tu mets l’ambiance partout où tu passes, et ta voix porte toujours un peu plus loin que celle des autres. Pour toi, une soirée réussie se termine sans voix et avec des souvenirs plein la tête… et tu prépares déjà la prochaine, en plus grand.',
    },
    {
      id: 'so-we-dance',
      name: 'Alors on danse',
      emoji: '🕺',
      description:
        'Comme dans la chanson de Stromae, ta tête ne s’arrête jamais : le travail, l’argent, les soucis, tu y penses tout le temps, et tu t’inquiètes vite. Ta solution ? Bouger. Sortir, courir, voir du monde, n’importe quoi plutôt que de tourner en rond dans ta tête. Tu sais bien que les soucis t’attendront sagement demain matin, mais ce soir, ils peuvent patienter : c’est l’heure de danser, et tu le fais à fond.',
    },
    {
      id: 'basic',
      name: 'Basique',
      emoji: '🧱',
      description:
        'Pourquoi faire compliqué ? Comme Orelsan, tu vas droit au but, en peu de mots, et tu dis tout haut les évidences que tout le monde préfère éviter. Les grands discours, le jargon et les gens qui brassent de l’air t’épuisent. Ton humour est pince-sans-rire, ta franchise désarmante, et tu as le don de résumer en une phrase ce que d’autres mettent une heure à expliquer. Et tu ne te places pas au-dessus du lot : tu sais très bien que toi aussi, parfois, tu es un peu basique.',
    },
    {
      id: 'champs-elysees',
      name: 'Les Champs-Élysées',
      emoji: '🗼',
      description:
        'Comme dans la chanson de Joe Dassin, tu dis bonjour à tout le monde, et tout le monde finit par te répondre. Ouvert·e et curieux·se des autres, tu engages la conversation avec des inconnu·es dans le train, au marché ou dans une file d’attente, et tu connais du monde partout. Tu adores les rencontres imprévues et les journées qui ne se passent pas comme prévu : avec toi, une simple balade peut finir en soirée mémorable avec des gens que tu ne connaissais pas le matin.',
    },
  ],
  questions: [
    {
      id: 'solo-concert',
      text: 'Ton artiste préféré·e passe en concert près de chez toi, mais personne ne peut t’accompagner. Tu…',
      answers: [
        { id: 'go-alone', text: 'Y vas seul·e, et c’est très bien comme ça.', weights: { 'walk-alone': 0.9 } },
        { id: 'impulse', text: 'Prends ta place sur un coup de tête, et tu verras bien.', weights: { 'no-regrets': 0.7, 'walk-alone': 0.2 } },
        { id: 'make-friends', text: 'Y vas, et tu sympathises avec tes voisin·es de fosse.', weights: { 'champs-elysees': 0.9 } },
        { id: 'insist', text: 'Insistes jusqu’à ce que quelqu’un finisse par dire oui.', weights: { 'light-the-fire': 0.5, 'my-fight': 0.4 } },
        { id: 'next-time', text: 'Laisses tomber : il y aura d’autres dates.', weights: { 'the-south': 0.7 } },
        { id: 'gift-ticket', text: 'Prends deux places et fais la surprise à un·e proche le soir même.', weights: { 'into-the-wind': 0.8 } },
      ],
    },
    {
      id: 'train-neighbor',
      text: 'Dans le train, la personne assise à côté de toi engage la conversation. Tu…',
      answers: [
        { id: 'swap-numbers', text: 'Discutes tout le trajet, comme avec un·e vieil·le ami·e.', weights: { 'champs-elysees': 1 } },
        { id: 'headphones', text: 'Réponds poliment, puis tu remets ton casque.', weights: { 'walk-alone': 0.9 } },
        { id: 'whole-car', text: 'Racontes tes meilleures anecdotes, et bientôt tout le wagon écoute.', weights: { 'light-the-fire': 0.9, 'champs-elysees': 0.3 } },
        { id: 'rather-sleep', text: 'Lui dis franchement que tu préférerais dormir.', weights: { basic: 0.8 } },
        { id: 'elsewhere', text: 'Fais la conversation, mais ton esprit est ailleurs.', weights: { 'so-we-dance': 0.5, 'another-world': 0.4 } },
      ],
    },
    {
      id: 'bad-haircut',
      text: 'Ta nouvelle coupe de cheveux est franchement ratée. Tu…',
      answers: [
        { id: 'own-it', text: 'Défends ton choix jusqu’au bout.', weights: { 'no-regrets': 1 } },
        { id: 'laugh-first', text: 'Te moques de toi-même avant que les autres ne le fassent.', weights: { basic: 0.6 } },
        { id: 'wait', text: 'Attends tranquillement que ça repousse.', weights: { 'the-south': 0.7 } },
        { id: 'go-out', text: 'Sors quand même ce soir, comme si de rien n’était.', weights: { 'so-we-dance': 0.6, 'no-regrets': 0.3 } },
        { id: 'reinvent', text: 'En profites pour te réinventer de la tête aux pieds.', weights: { 'another-world': 0.7 } },
      ],
    },
    {
      id: 'time-of-day',
      text: 'Choisis un moment de la journée.',
      answers: [
        { id: 'dawn', text: 'Tôt le matin, quand les rues sont encore vides.', weights: { 'walk-alone': 0.8, 'the-south': 0.2 } },
        { id: 'nap', text: 'L’heure de la sieste, quand rien ne presse.', weights: { 'the-south': 0.9 } },
        { id: 'busy-noon', text: 'Midi, quand les rues grouillent de monde.', weights: { 'champs-elysees': 0.7 } },
        { id: 'sunset', text: 'Le coucher du soleil.', weights: { 'the-south': 0.5, 'into-the-wind': 0.4 } },
        { id: 'late-party', text: 'La fin de soirée, quand la fête bat son plein.', weights: { 'light-the-fire': 0.9, 'so-we-dance': 0.5 } },
        { id: 'night-ideas', text: 'La nuit, quand les idées viennent toutes seules.', weights: { 'another-world': 0.6, 'so-we-dance': 0.3 } },
      ],
    },
    {
      id: 'mocked-relative',
      text: 'Quelqu’un se moque d’un·e de tes proches devant toi. Tu…',
      answers: [
        { id: 'step-in', text: 'Interviens tout de suite, et fermement.', weights: { 'my-fight': 1 } },
        { id: 'dry-remark', text: 'Lâches une remarque sèche qui coupe court à la discussion.', weights: { basic: 0.8, 'my-fight': 0.3 } },
        { id: 'comfort', text: 'Ne dis rien sur le moment, mais tu vas réconforter la personne visée juste après.', weights: { 'into-the-wind': 0.8, 'my-fight': 0.3 } },
        { id: 'turn-joke', text: 'Retournes la blague contre ellui, et les rires changent de camp.', weights: { 'light-the-fire': 0.7, basic: 0.3 } },
        { id: 'let-go', text: 'Laisses couler : ce n’est pas si grave.', weights: { 'the-south': 0.6 } },
      ],
    },
    {
      id: 'lost-in-town',
      text: 'Tu te perds dans une ville que tu ne connais pas. Tu…',
      answers: [
        { id: 'ask-stranger', text: 'Demandes ton chemin, et repars avec trois adresses à ne pas manquer.', weights: { 'champs-elysees': 0.9 } },
        { id: 'wander', text: 'Continues au hasard, ravi·e.', weights: { 'walk-alone': 0.9 } },
        { id: 'gps', text: 'Sors ton GPS, sans chercher plus loin.', weights: { basic: 0.5 } },
        { id: 'perfect-spot', text: 'Repères un coin où emmener tes proches la prochaine fois.', weights: { 'into-the-wind': 0.8 } },
        { id: 'terrace', text: 'T’installes en terrasse : tu chercheras ton chemin plus tard.', weights: { 'the-south': 0.9 } },
        { id: 'worry', text: 'T’inquiètes, et marches de plus en plus vite.', weights: { 'so-we-dance': 0.6 } },
      ],
    },
    {
      id: 'resolutions',
      text: 'Le 31 décembre, tes bonnes résolutions ?',
      answers: [
        { id: 'long-list', text: 'Une longue liste, pour changer ta vie de A à Z.', weights: { 'another-world': 0.8 } },
        { id: 'what-for', text: 'Des résolutions ? Pour quoi faire ?', weights: { 'no-regrets': 0.6, basic: 0.4 } },
        { id: 'every-day', text: 'Les résolutions, c’est tous les jours de l’année.', weights: { 'another-world': 0.5, 'no-regrets': 0.3 } },
        { id: 'biggest-party', text: 'Organiser la plus grosse soirée de l’année.', weights: { 'light-the-fire': 0.9 } },
        { id: 'see-loved-ones', text: 'Voir plus souvent les personnes qui comptent.', weights: { 'into-the-wind': 0.8, 'my-fight': 0.3 } },
        { id: 'let-go', text: 'Lâcher prise un peu.', weights: { 'so-we-dance': 0.6, 'another-world': 0.3 } },
        { id: 'me-time', text: 'Prendre plus de temps pour toi.', weights: { 'walk-alone': 0.8, 'the-south': 0.3 } },
      ],
    },
    {
      id: 'lyrics',
      text: 'Les paroles des chansons, pour toi…',
      answers: [
        { id: 'louder', text: 'Tu les connais par cœur, et tu les chantes plus fort que l’artiste.', weights: { 'light-the-fire': 0.9 } },
        { id: 'dissect', text: 'Tu décortiques chaque phrase pour comprendre ce qu’elle cache.', weights: { 'another-world': 0.6 } },
        { id: 'old-ones', text: 'Tu connais toutes celles d’il y a vingt ans, beaucoup moins les nouvelles.', weights: { 'the-south': 0.8 } },
        { id: 'rhythm', text: 'Tu écoutes surtout le rythme.', weights: { 'so-we-dance': 0.6, 'light-the-fire': 0.4 } },
        { id: 'someone', text: 'Chaque chanson d’amour te fait penser à quelqu’un.', weights: { 'into-the-wind': 0.7 } },
        { id: 'say-nothing', text: 'La plupart parlent pour ne rien dire.', weights: { basic: 0.8 } },
      ],
    },
    {
      id: 'stuck-paperwork',
      text: 'Le dossier d’un·e proche est bloqué par une administration depuis des mois. Tu…',
      answers: [
        { id: 'call-yourself', text: 'Appelles toi-même, et insistes jusqu’à obtenir une réponse.', weights: { 'my-fight': 1 } },
        { id: 'short-email', text: 'Lui conseilles un mail de trois lignes, clair et sec.', weights: { basic: 0.8 } },
        { id: 'change-scenery', text: 'L’emmènes se changer les idées en attendant.', weights: { 'into-the-wind': 0.7, 'so-we-dance': 0.3 } },
        { id: 'be-patient', text: 'Lui dis de prendre son mal en patience : ça finira par se débloquer.', weights: { 'the-south': 0.7 } },
        { id: 'worry-more', text: 'T’inquiètes presque plus que ellui.', weights: { 'so-we-dance': 0.6 } },
        { id: 'network', text: 'Fais marcher tes contacts : tu connais forcément quelqu’un.', weights: { 'champs-elysees': 0.6 } },
      ],
    },
    {
      id: 'show-love',
      text: 'Comment montres-tu à quelqu’un que tu l’aimes ?',
      answers: [
        { id: 'little-surprises', text: 'Par de petites surprises : son dessert préféré, un mot glissé dans son sac.', weights: { 'into-the-wind': 1 } },
        { id: 'be-there', text: 'En étant là quand ça va mal, sans qu’on ait à te le demander.', weights: { 'my-fight': 0.8, 'into-the-wind': 0.3 } },
        { id: 'say-it', text: 'En le lui disant, tout simplement.', weights: { basic: 0.7, 'into-the-wind': 0.3 } },
        { id: 'out-loud', text: 'En le clamant haut et fort, devant tout le monde.', weights: { 'light-the-fire': 0.8 } },
        { id: 'slow-day', text: 'En prenant le temps : une longue journée ensemble, sans programme.', weights: { 'the-south': 0.7, 'into-the-wind': 0.3 } },
      ],
    },
    {
      id: 'insomnia',
      text: 'Il est 2 h du matin, et tu n’arrives pas à dormir. Tu…',
      answers: [
        { id: 'tomorrow', text: 'Ressasses tout ce qui t’attend demain.', weights: { 'so-we-dance': 0.6, 'another-world': 0.3 } },
        { id: 'busy-hands', text: 'Te lèves et t’occupes les mains.', weights: { 'so-we-dance': 0.7 } },
        { id: 'quiet', text: 'Savoures le calme de la maison endormie.', weights: { 'walk-alone': 0.8 } },
        { id: 'scroll', text: 'Scrolles sur ton téléphone jusqu’à tomber sur de vieux souvenirs.', weights: { 'the-south': 0.7 } },
        { id: 'who-is-up', text: 'Envoies un message à ta bande : qui est encore debout ?', weights: { 'light-the-fire': 0.7, 'champs-elysees': 0.4 } },
        { id: 'help-someone', text: 'Cherches comment aider un·e proche qui en a besoin.', weights: { 'my-fight': 0.7, 'into-the-wind': 0.3 } },
        { id: 'never', text: 'Ça ne t’arrive presque jamais : tu dors sur tes deux oreilles.', weights: { 'no-regrets': 0.7, 'the-south': 0.3 } },
      ],
    },
    {
      id: 'risky-project',
      text: 'Tout le monde te déconseille un projet qui te tient à cœur. Tu…',
      answers: [
        { id: 'do-it', text: 'Le fais quand même.', weights: { 'no-regrets': 1, 'another-world': 0.4 } },
        { id: 'quietly', text: 'Le fais dans ton coin, sans en parler.', weights: { 'walk-alone': 0.8, 'no-regrets': 0.3 } },
        { id: 'bring-friend', text: 'Embarques ton·ta meilleur·e ami·e dans l’aventure.', weights: { 'into-the-wind': 0.6 } },
        { id: 'weigh', text: 'Pèses le pour et le contre, longuement.', weights: { 'another-world': 0.6 } },
        { id: 'shelve', text: 'Le mets de côté, sans te presser : ça viendra.', weights: { 'the-south': 0.6 } },
      ],
    },
  ],
};
