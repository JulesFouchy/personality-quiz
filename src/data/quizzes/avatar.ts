import type { Quiz } from '../../types';

export const avatar: Quiz = {
  id: 'avatar',
  title: 'Quel personnage d’Avatar es-tu ?',
  emoji: '🌀',
  description: 'Sauver le monde, régner par la peur ou faire la sieste sur un bison volant : chacun·e son style dans les quatre nations.',
  personalities: [
    {
      id: 'aang',
      name: 'Aang',
      emoji: '🌀',
      description:
        'Comme Aang, tu as gardé une âme d’enfant : le moindre trajet devient un jeu, tu te fais des ami·es partout où tu passes, et tu ne dis jamais non à une petite bêtise ou à un coin inconnu à explorer. Ta bonne humeur est contagieuse, et tu détestes les conflits : tu cherches toujours la solution où personne ne finit blessé, quitte à passer pour naïf·ve, et tu préfères désamorcer une moquerie en riant plutôt que de te disputer. Tu as pourtant le poids des responsabilités sur les épaules, et ce n’est pas toujours facile à assumer : quand une décision te fait peur, il t’arrive de la repousser jusqu’au dernier moment, tu rêves parfois d’une vie où personne ne compterait sur toi, et tu t’en veux longtemps quand les choses tournent mal. Ton rêve le plus cher ? Que tout le monde vive enfin en paix.',
    },
    {
      id: 'katara',
      name: 'Katara',
      emoji: '🌊',
      description:
        'Comme Katara, tu prends soin de tout le monde : c’est toi qui penses au repas, qui soignes les petits bobos et qui rassures les autres quand tout va mal. Sans toi, ta bande ne tiendrait pas une semaine, et tu t’inquiètes dès qu’un·e de tes proches tarde à donner des nouvelles. Tu as un sens aigu de la justice : face à une injustice, tu ne restes jamais les bras croisés, même quand c’est risqué, et tu gardes espoir quand tout le monde a déjà abandonné. Il t’arrive de surprotéger un peu trop ton entourage. Mais attention : quand on s’en prend aux personnes que tu aimes, ta douceur laisse place à une colère redoutable, et tu ne pardonnes pas de sitôt.',
    },
    {
      id: 'sokka',
      name: 'Sokka',
      emoji: '🪃',
      description:
        'Comme Sokka, tu n’as pas de pouvoir magique, alors tu compenses avec ta tête : une carte, une liste, et un plan de secours au cas où le premier rate. Tu es la personne qui organise, qui anticipe, et qui invente une solution avec trois bouts de ficelle quand tout le monde sèche. Ton humour, souvent à tes dépens, détend l’atmosphère, même si toutes tes blagues ne font pas mouche, et tu as toujours une vanne en réserve. Ton estomac occupe une bonne partie de tes pensées. Derrière les plaisanteries, tu doutes souvent de toi : entouré·e de gens plus doué·es, tu as peur de passer pour la personne inutile du groupe, alors tu travailles en cachette deux fois plus dur, et tu rêves surtout d’être enfin pris·e au sérieux.',
    },
    {
      id: 'toph',
      name: 'Toph',
      emoji: '🪨',
      description:
        'Comme Toph, tu dis ce que tu penses, sans filtre et sans enrobage, et tant pis si ça pique. Tu es indépendant·e jusqu’au bout des ongles : tu n’as besoin de personne, tu refuses qu’on te protège ou qu’on décide à ta place, et tu tiens à ton espace. Les règles qu’on ne t’explique pas, tu ne les suis pas. Les bonnes manières et les apparences ne t’intéressent pas du tout, et tu te fiches de ce qu’on pense de ta tenue. Dur·e à cuire, tu ne recules devant aucun défi, tu fonces tête baissée, et tu adores taquiner ton entourage à coups de vannes et de surnoms. Avec les personnes que tu prends sous ton aile, tu es exigeant·e, voire carrément brutal·e, mais c’est ta façon de montrer que tu crois en elles.',
    },
    {
      id: 'zuko',
      name: 'Zuko',
      emoji: '🔥',
      description:
        'Comme Zuko, tu es d’une obstination à toute épreuve : quand tu as un objectif en tête, tu t’acharnes sans relâche et rien ne t’arrête, même pas le bon sens. Tu t’emportes vite, et tu rumines beaucoup, seul·e dans ton coin. Tu es franchement maladroit·e en société : les répliques qui fusent, les conversations légères et les émotions qu’on n’arrive pas à cacher, ce n’est pas ton fort. Au fond, tu as surtout besoin que tes parents soient fier·ères de toi. Bourru·e en façade, tu as bon cœur : tu finis toujours par reconnaître tes erreurs et par t’excuser, même maladroitement, tu rêves de réparer celles du passé, et tu crois dur comme fer que tout le monde mérite une seconde chance.',
    },
    {
      id: 'iroh',
      name: 'Iroh',
      emoji: '🍵',
      description:
        'Comme Iroh, rien ne te presse : tu gardes ton calme quand tout s’effondre autour de toi, et tu sais savourer chaque petit plaisir, une tasse de thé, une partie de cartes, un rayon de soleil, un beau paysage ou un vêtement bien douillet. Tu ne fais jamais rien à la hâte, et tout va mieux avec un peu de musique. On vient te voir pour un conseil, et tu sais écouter avant de répondre, avec une sagesse pleine d’humour et des histoires pour chaque occasion. Une critique ? Tu la prends avec philosophie. Tu as connu la gloire et le pouvoir, et tu leur as tourné le dos : le prestige ne t’intéresse plus, seules comptent les personnes que tu aimes. Tu transmets volontiers tout ce que tu sais, tu préfères toujours la discussion à l’affrontement, et tu pardonnes facilement.',
    },
    {
      id: 'azula',
      name: 'Azula',
      emoji: '💙',
      description:
        'Comme Azula, tu vises la perfection en tout, et tu l’atteins souvent du premier coup : rien de ce que tu fais n’est laissé au hasard, jusqu’au moindre détail de ta tenue. Ambitieux·se, tu veux être la personne au sommet, et tu aimes que tout le monde suive tes ordres, à commencer par ton équipe. Le contrôle, c’est ton élément : tu prends naturellement le commandement, tu ne tolères ni les retards ni les faiblesses, et tu sais jouer un rôle ou bluffer les gens pour obtenir ce que tu veux. Ta repartie est cinglante, et tu ne rates jamais une occasion de rappeler tout ce que tu as réussi. Derrière cette assurance glaciale se cache pourtant une peur bleue : celle d’échouer, ne serait-ce qu’une fois.',
    },
    {
      id: 'bumi',
      name: 'Roi Bumi',
      emoji: '👑',
      description:
        'Comme le roi Bumi, tu es complètement excentrique, et tu l’assumes : tu ris quand personne d’autre ne rit, tes décisions ne suivent aucune logique apparente, et tu adores déstabiliser les gens avec une surprise ou une blague qu’iels n’ont pas vue venir. Ton cerveau ne fonctionne pas comme celui des autres : tu prends les problèmes à l’envers, par le bout auquel personne ne pense, et ça marche. Derrière ton grain de folie se cache une grande patience : tu sais attendre le bon moment pour agir. Tu restes de bonne humeur même au pire moment, et rien ne semble te faire peur. Ce que les autres pensent de toi ? Franchement, tu t’en moques.',
    },
    {
      id: 'appa',
      name: 'Appa',
      emoji: '🦬',
      description:
        'Comme Appa, tu es d’une loyauté à toute épreuve : on peut compter sur toi, toujours, et tu es là pour porter les autres quand iels n’en peuvent plus. Calme et paisible, tu n’as pas besoin de grands discours : un câlin, une présence, et tout le monde se sent mieux. Tu ne quitterais tes proches pour rien au monde, et tu ne souhaites qu’une chose : qu’iels aillent bien. Tu sais profiter de l’instant présent, et tu ne dis jamais non à une bonne sieste. Quand le danger approche, tu restes au plus près des personnes que tu aimes, et tu veilles sur elleux sans faire de bruit, nuit et jour s’il le faut.',
    },
  ],
  questions: [
    {
      id: 'bison-stops',
      text: 'En plein voyage, ton bison volant refuse d’avancer, au milieu de nulle part. Tu…',
      answers: [
        { id: 'check-on', text: 'Vérifies qu’il n’est pas blessé.', weights: { katara: 1 } },
        { id: 'play', text: 'Lui proposes une course pour le motiver.', weights: { aang: 1 } },
        { id: 'lure', text: 'Fabriques un appât avec ce que tu as sous la main.', weights: { sokka: 1 } },
        { id: 'order', text: 'Lui ordonnes de repartir, immédiatement.', weights: { azula: 1 } },
        { id: 'walk-on', text: 'Continues à pied, seul·e s’il le faut.', weights: { zuko: 0.8, toph: 0.8 } },
        { id: 'lie-down', text: 'Te couches à côté de lui, et attends qu’il change d’avis.', weights: { bumi: 0.8, appa: 0.3 } },
        { id: 'scenery', text: 'Profites de la pause pour admirer le paysage.', weights: { iroh: 1, aang: 0.3 } },
      ],
    },
    {
      id: 'useless-exercise',
      text: 'Ton·ta prof te donne un exercice qui te paraît complètement inutile. Tu…',
      answers: [
        { id: 'perfect', text: 'Le fais sans broncher, jusqu’à ce qu’il soit parfait.', weights: { azula: 1 } },
        { id: 'why', text: 'Refuses de le faire tant qu’on ne t’explique pas à quoi il sert.', weights: { toph: 1 } },
        { id: 'game', text: 'En fais un jeu.', weights: { aang: 1 } },
        { id: 'transform', text: 'Le transformes en tout autre chose, qui marche aussi.', weights: { bumi: 1, sokka: 0.3 } },
        { id: 'secret-training', text: 'T’entraînes en cachette, jusqu’à épater tout le monde.', weights: { sokka: 0.8, zuko: 0.6 } },
      ],
    },
    {
      id: 'late-friend',
      text: 'Ton ami·e a trente minutes de retard, sans prévenir. Tu…',
      answers: [
        { id: 'worry', text: 'T’inquiètes, et lui envoies message sur message.', weights: { katara: 1, appa: 0.3 } },
        { id: 'sunbathe', text: 'Profites du soleil, sans regarder l’heure.', weights: { iroh: 1, appa: 0.5 } },
        { id: 'snack', text: 'Grignotes tout ce que tu as dans ton sac.', weights: { sokka: 0.8 } },
        { id: 'hide', text: 'Te caches pour lui faire peur à son arrivée.', weights: { bumi: 0.8, aang: 0.6 } },
        { id: 'tease', text: 'L’accueilles avec une vanne bien sentie.', weights: { toph: 1, sokka: 0.3 } },
        { id: 'leave', text: 'N’attends pas plus de dix minutes.', weights: { azula: 1 } },
      ],
    },
    {
      id: 'dream-job',
      text: 'On te propose le poste de tes rêves, mais à l’autre bout du monde, loin de tes proches. Tu…',
      answers: [
        { id: 'accept', text: 'Acceptes sans hésiter.', weights: { azula: 1, toph: 0.3 } },
        { id: 'call-parents', text: 'Acceptes, et appelles tout de suite tes parents pour leur annoncer.', weights: { zuko: 1 } },
        { id: 'stay-close', text: 'Refuses : tu ne quittes pas les personnes que tu aimes.', weights: { appa: 1, katara: 0.6 } },
        { id: 'prestige', text: 'Refuses : le prestige, très peu pour toi.', weights: { iroh: 1, toph: 0.4 } },
        { id: 'hesitate', text: 'Hésites si longtemps que l’offre finit par expirer.', weights: { aang: 1 } },
      ],
    },
    {
      id: 'ruler',
      text: 'Tu deviens souverain·e d’une ville pour une journée. Ta première décision ?',
      answers: [
        { id: 'holiday', text: 'Décréter un jour férié surprise, sans dire pourquoi.', weights: { bumi: 1, aang: 0.4 } },
        { id: 'open-palace', text: 'Ouvrir les portes du palais à toutes les personnes dans le besoin.', weights: { katara: 1, aang: 0.3 } },
        { id: 'curfew', text: 'Imposer un couvre-feu et des contrôles à chaque coin de rue.', weights: { azula: 1 } },
        { id: 'problem-list', text: 'Dresser la liste de tous les problèmes à régler.', weights: { sokka: 1, azula: 0.3 } },
        { id: 'pardon', text: 'Gracier les prisonnier·es qui ont changé.', weights: { zuko: 1, iroh: 0.6 } },
        { id: 'abdicate', text: 'Rendre la couronne : ça ne t’intéresse pas.', weights: { iroh: 0.8, toph: 0.5, aang: 0.3 } },
      ],
    },
    {
      id: 'outfit-mockery',
      text: 'Quelqu’un se moque de ta tenue, devant tout le monde. Tu…',
      answers: [
        { id: 'comeback', text: 'Le·la remets à sa place d’une réplique cinglante.', weights: { azula: 1, toph: 0.4 } },
        { id: 'freeze', text: 'Perds tes moyens, et ne trouves rien à répondre.', weights: { zuko: 1 } },
        { id: 'laugh-along', text: 'Ris avec ellui, et passes à autre chose.', weights: { aang: 1 } },
        { id: 'pile-on', text: 'En rajoutes une couche, pour faire rire tout le monde.', weights: { sokka: 1 } },
        { id: 'shrug', text: 'Hausses les épaules : tu t’en fiches complètement.', weights: { toph: 1, bumi: 0.7 } },
        { id: 'ask-calmly', text: 'Lui demandes, très calmement, ce qui ne va pas avec ta tenue.', weights: { iroh: 0.8 } },
      ],
    },
    {
      id: 'camp',
      text: 'Ta bande campe en pleine nature pour la nuit. Ton rôle ?',
      answers: [
        { id: 'cook', text: 'Préparer le repas pour tout le monde.', weights: { katara: 1 } },
        { id: 'jokes', text: 'Mettre l’ambiance avec tes blagues.', weights: { sokka: 1, aang: 0.3 } },
        { id: 'watch', text: 'Monter la garde toute la nuit.', weights: { appa: 1 } },
        { id: 'own-corner', text: 'Te faire un petit coin à toi, à l’écart.', weights: { toph: 1, zuko: 0.4 } },
        { id: 'stories', text: 'Raconter des histoires.', weights: { iroh: 1 } },
      ],
    },
    {
      id: 'childhood-friend',
      text: 'Tu retrouves ton·ta meilleur·e ami·e d’enfance après des années. Tu…',
      answers: [
        { id: 'pranks', text: 'Reprends vos bêtises exactement là où vous les aviez laissées.', weights: { aang: 1 } },
        { id: 'pretend', text: 'Fais semblant de ne pas le·la reconnaître, pour voir sa tête.', weights: { bumi: 1 } },
        { id: 'talk', text: 'Passes la nuit à parler avec ellui.', weights: { iroh: 0.7, katara: 0.6 } },
        { id: 'why-no-news', text: 'Lui demandes cash pourquoi iel n’a jamais donné de nouvelles.', weights: { toph: 1, katara: 0.4 } },
        { id: 'apologize', text: 'T’excuses pour une vieille dispute.', weights: { zuko: 1, aang: 0.3 } },
        { id: 'achievements', text: 'Lui fais la liste de tout ce que tu as réussi depuis.', weights: { azula: 1, sokka: 0.3 } },
        { id: 'hug', text: 'Le·la serres longtemps dans tes bras, sans rien dire.', weights: { appa: 1, katara: 0.3 } },
      ],
    },
    {
      id: 'pajamas',
      text: 'Ton pyjama, c’est…',
      answers: [
        { id: 'old', text: 'Le même depuis dix ans, troué de partout.', weights: { toph: 1 } },
        { id: 'silk', text: 'Un ensemble en soie, impeccablement repassé.', weights: { azula: 1 } },
        { id: 'onesie', text: 'Une grenouillère à capuche, avec des oreilles.', weights: { aang: 0.8, bumi: 0.7 } },
        { id: 'robe', text: 'Un peignoir tout doux, avec les chaussons assortis.', weights: { iroh: 1 } },
      ],
    },
    {
      id: 'spirit-wish',
      text: 'Un esprit t’offre de réaliser un seul vœu, rien que pour toi. Tu demandes…',
      answers: [
        { id: 'fix-past', text: 'De réparer une erreur du passé.', weights: { zuko: 1, aang: 0.4 } },
        { id: 'obedience', text: 'Que tout le monde fasse enfin ce que tu dis.', weights: { azula: 1 } },
        { id: 'worth', text: 'Que les autres voient enfin ce que tu vaux.', weights: { sokka: 1, zuko: 0.3 } },
        { id: 'health', text: 'Que tes proches restent en bonne santé.', weights: { appa: 1, katara: 0.6 } },
        { id: 'lighter', text: 'Une vie plus légère, où personne ne compte sur toi.', weights: { aang: 1 } },
        { id: 'time', text: 'Du temps, tout simplement.', weights: { iroh: 0.8 } },
        { id: 'nothing', text: 'Rien : tu te débrouilles très bien tout·e seul·e.', weights: { toph: 1 } },
      ],
    },
    {
      id: 'storm',
      text: 'Une tempête éclate en pleine traversée en bateau. Tu…',
      answers: [
        { id: 'command', text: 'Prends le commandement, et distribues les tâches.', weights: { azula: 1, sokka: 0.4 } },
        { id: 'reassure', text: 'Rassures tout le monde.', weights: { katara: 1, iroh: 0.4 } },
        { id: 'cards', text: 'Sors un jeu de cartes en attendant que ça passe.', weights: { iroh: 1, bumi: 0.4 } },
        { id: 'repair', text: 'Répares la voile avec ta ceinture et deux bouts de corde.', weights: { sokka: 1 } },
        { id: 'ride-waves', text: 'Proposes de profiter des vagues pour aller plus vite.', weights: { bumi: 1, toph: 0.3 } },
        { id: 'stay-close', text: 'Restes près des autres, sans les lâcher des yeux.', weights: { appa: 1 } },
        { id: 'guilt', text: 'T’en veux de ne pas avoir vu venir le mauvais temps.', weights: { aang: 1 } },
      ],
    },
    {
      id: 'young-cousin',
      text: 'Ton·ta petit·e cousin·e veut te suivre partout. Tu…',
      answers: [
        { id: 'protect', text: 'L’emmènes, et veilles sur ellui comme sur la prunelle de tes yeux.', weights: { katara: 1, appa: 0.5 } },
        { id: 'teach', text: 'Lui apprends tout ce que tu sais.', weights: { iroh: 1, toph: 0.3 } },
        { id: 'keep-up', text: 'Acceptes, à condition qu’iel suive ton rythme sans se plaindre.', weights: { toph: 1, azula: 0.4 } },
        { id: 'mischief', text: 'L’emmènes faire les quatre cents coups.', weights: { aang: 1 } },
        { id: 'grumble', text: 'Râles, mais finis toujours par l’emmener.', weights: { zuko: 1 } },
        { id: 'not-good-enough', text: 'Lui fais comprendre qu’iel n’a pas le niveau.', weights: { azula: 1 } },
      ],
    },
    {
      id: 'infiltration',
      text: 'Ta bande doit s’infiltrer dans une forteresse bien gardée. Tu…',
      answers: [
        { id: 'exits', text: 'Repères toutes les sorties avant d’entrer.', weights: { sokka: 1, azula: 0.3 } },
        { id: 'charge', text: 'Fonces par l’entrée principale : on verra bien.', weights: { toph: 0.8, zuko: 0.6 } },
        { id: 'disguise', text: 'Te déguises en garde, et bluffes tout le monde.', weights: { azula: 1 } },
        { id: 'odd-way', text: 'Proposes de passer par le dernier endroit auquel les gardes penseraient.', weights: { bumi: 1 } },
        { id: 'negotiate', text: 'Proposes plutôt d’aller discuter avec les gardes.', weights: { aang: 0.8, iroh: 0.7 } },
      ],
    },
    {
      id: 'flat-pack',
      text: 'Tu montes un meuble en kit. Tu…',
      answers: [
        { id: 'first-try', text: 'Le montes parfaitement du premier coup.', weights: { azula: 1 } },
        { id: 'improve', text: 'Améliores le modèle au passage.', weights: { sokka: 1 } },
        { id: 'no-manual', text: 'Jettes la notice et te lances.', weights: { toph: 0.8, zuko: 0.3 } },
        { id: 'stubborn', text: 'T’acharnes trois heures sur la même étape plutôt que de demander de l’aide.', weights: { zuko: 1, toph: 0.4 } },
        { id: 'music', text: 'Mets de la musique, et avances tranquillement.', weights: { iroh: 1 } },
        { id: 'upside-down', text: 'Le montes à l’envers, et décides que c’est mieux comme ça.', weights: { bumi: 1 } },
        { id: 'later', text: 'Le laisses dans son carton : tu verras ça plus tard.', weights: { aang: 1 } },
      ],
    },
  ],
};
