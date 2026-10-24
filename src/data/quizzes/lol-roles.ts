import type { Quiz } from '../../types';

export const lolRoles: Quiz = {
  id: 'lol-roles',
  title: 'Quel rôle de LoL est fait pour toi ?',
  emoji: '🗺️',
  hidden: true,
  description: 'Exilé·e en haut, fantôme de la jungle ou star capricieuse du bas ? Trouve enfin le rôle où ton équipe aura raison de te flame.',
  personalities: [
    {
      id: 'top',
      name: 'Top',
      emoji: '🏝️',
      description:
        'Indépendant·e et increvable, tu te débrouilles seul·e, et heureusement, car personne ne vient jamais te voir sur ton île, à part ton adversaire d’en face. Têtu·e comme pas deux, tu ne lâches jamais ta mission : après chaque retour à la base, tu repars droit vers la toplane. Comme tu ne veux rien devoir à personne, on finit par t’oublier dans tous les plans. Tu fais semblant que ça ne te touche pas… et de temps en temps, tu TP quand même pour un teamfight.',
    },
    {
      id: 'jungle',
      name: 'Jungle',
      emoji: '🌿',
      description:
        'Opportuniste de génie, tu es partout et nulle part, et tu surgis toujours là où il y a quelque chose à gagner. Stratège, tu lis la carte mieux que personne et tu sais toujours quel sera le prochain objectif. Ton plan, c’est le tien : tu suis ta route, et tu aides quand ça t’arrange, de préférence quand il ne reste plus qu’à ramasser la récompense. Tu sais tout avant tout le monde. En retour, on te reproche tout, mais tu t’en fiches.',
    },
    {
      id: 'mid',
      name: 'Mid',
      emoji: '🎯',
      description:
        'Perfectionniste et doué·e, tu vis pour la technique : plus c’est difficile, plus ça te plaît, et tu décortiques chacune de tes erreurs. Tu connais ton talent, tu adores te mesurer aux autres, et tu regardes les personnes moins douées d’un peu haut. Quand rien ne bouge, c’est toi qui prends l’initiative et qui fais toi-même basculer la partie.',
    },
    {
      id: 'adc',
      name: 'ADC',
      emoji: '🏹',
      description:
        'Tu veux tout, et tout de suite : l’or, les kills, la plus grosse assiette et la place au centre de la photo. Tu es la star de chaque partie, à condition que quelqu’un te protège et porte tes affaires : seul·e, tu ne tiens pas deux secondes, et tu le reproches ensuite à la personne qui n’était pas là. Inutile pendant vingt-cinq minutes, tu finis par porter toute l’équipe, et c’est toi qu’on applaudit.',
    },
    {
      id: 'support',
      name: 'Support',
      emoji: '❤️‍🩹',
      description:
        'Attentif·ve à tout, tu vois les problèmes arriver avant tout le monde, et tu as déjà prévu les pansements et le plan B. Généreux·se jusqu’à l’absurde, tu donnes ton temps, ton aide et ton dernier centime pour que les autres réussissent, quitte à finir plus pauvre que tout le monde. Tu travailles dans l’ombre, et on sous-estime souvent ce que tu apportes. Loyal·e à toute épreuve… mais il t’arrive d’abandonner ton ADC quand la botlane part en sucette.',
    },
  ],
  questions: [
    {
      id: 'champion-select',
      text: 'En sélection des champions, tu…',
      answers: [
        { id: 'same-champion', text: 'Prends toujours le même champion, quoi qu’il arrive.', weights: { top: 1 } },
        { id: 'own-pick', text: 'Joues ce qui te fait envie, peu importe la compo.', weights: { top: 0.8, jungle: 0.5 } },
        { id: 'technical', text: 'Tentes un champion très technique, même en partie classée.', weights: { mid: 1 } },
        { id: 'counter', text: 'Attends de voir ce qu’a pris l’équipe d’en face pour la contrer.', weights: { jungle: 0.8, mid: 0.5, top: 0.4 } },
        { id: 'fill', text: 'Prends ce qui manque à l’équipe, même si tu n’en as pas envie.', weights: { support: 1 } },
      ],
    },
    {
      id: 'restaurant-bill',
      text: 'Au restaurant entre ami·es, l’addition arrive. Tu…',
      answers: [
        { id: 'split', text: 'Proposes de partager en parts égales. Tu as pris entrée, plat et dessert.', weights: { adc: 1, jungle: 0.5 } },
        { id: 'own-share', text: 'Paies ta part au centime près.', weights: { top: 0.8 } },
        { id: 'pay-all', text: 'Paies pour tout le monde, même si ton compte est déjà dans le rouge.', weights: { support: 1 } },
        { id: 'forgot-card', text: 'Découvres que tu as « oublié » ta carte.', weights: { jungle: 1 } },
        { id: 'mental-math', text: 'Calcules la part de chaque personne de tête, plus vite que l’appli.', weights: { mid: 0.8 } },
      ],
    },
    {
      id: 'classroom-seat',
      text: 'Au collège, en classe, tu t’asseyais…',
      answers: [
        { id: 'back', text: 'Au fond, près de la fenêtre.', weights: { top: 1 } },
        { id: 'front', text: 'Au premier rang, la main toujours levée.', weights: { mid: 1, adc: 0.4 } },
        { id: 'homework', text: 'À côté de la personne qui avait fait ses devoirs.', weights: { jungle: 1, adc: 0.4 } },
        { id: 'best-friend', text: 'À côté de ton·ta meilleur·e ami·e.', weights: { support: 0.5 } },
      ],
    },
    {
      id: 'help-call',
      text: 'Un·e coéquipier·ère te supplie de venir l’aider. Tu…',
      answers: [
        { id: 'if-worth', text: 'Y vas, à condition que ça te rapporte.', weights: { jungle: 1, adc: 0.4 } },
        { id: 'grudge', text: 'Ne bouges pas : la dernière fois, personne n’est venu pour toi.', weights: { top: 1 } },
        { id: 'on-the-way', text: 'Étais déjà en route.', weights: { support: 1 } },
        { id: 'trust-me', text: 'Lui dis de tenir : tu sais ce que tu fais.', weights: { mid: 0.8, jungle: 0.5 } },
        { id: 'reverse', text: 'Lui demandes plutôt de venir t’aider, toi.', weights: { adc: 1 } },
        { id: 'too-late', text: 'Réponds que tu arrives, et arrives trop tard.', weights: { jungle: 0.6 } },
      ],
    },
    {
      id: 'best-of-day',
      text: 'Le soir, en repensant à ta journée, ce qui t’a fait le plus plaisir :',
      answers: [
        { id: 'made-smile', text: 'Avoir fait sourire quelqu’un.', weights: { support: 1 } },
        { id: 'unblocked', text: 'Avoir enfin réussi un truc sur lequel tu bloquais.', weights: { mid: 1, top: 0.5 } },
        { id: 'right-against-all', text: 'Avoir eu raison contre tout le monde.', weights: { top: 0.8, mid: 0.4 } },
        { id: 'got-it', text: 'Avoir obtenu exactement ce que tu voulais.', weights: { adc: 0.8, jungle: 0.5 } },
      ],
    },
    {
      id: 'buffet',
      text: 'Buffet à volonté. Tu…',
      answers: [
        { id: 'three-plates', text: 'Remplis trois assiettes avant même de t’asseoir.', weights: { adc: 1 } },
        { id: 'taste-others', text: 'Goûtes dans l’assiette des autres avant de choisir.', weights: { jungle: 0.8, adc: 0.3 } },
        { id: 'desserts-for-all', text: 'Rapportes des desserts pour toute la table.', weights: { support: 1 } },
        { id: 'spiciest', text: 'Prends le plat le plus épicé, et le finis sans boire une goutte d’eau.', weights: { mid: 0.8, top: 0.4 } },
        { id: 'one-dish', text: 'Ne manges que d’un seul plat, toute la soirée.', weights: { top: 1 } },
      ],
    },
    {
      id: 'replay',
      text: 'Tu regardes le replay d’une de tes parties. Tu…',
      answers: [
        { id: 'highlight', text: 'Repasses en boucle ton action la plus spectaculaire.', weights: { adc: 0.8, mid: 0.6 } },
        { id: 'mistakes', text: 'Notes chaque erreur, et te demandes comment faire mieux la prochaine fois.', weights: { mid: 1 } },
        { id: 'missed', text: 'Remarques surtout ce que les autres ont raté.', weights: { support: 1 } },
        { id: 'not-my-fault', text: 'Cherches la preuve que ce n’était pas ta faute.', weights: { adc: 0.8, jungle: 0.3 } },
      ],
    },
    {
      id: 'credit',
      text: 'Tu préfères être reconnu·e pour ce que tu n’as pas fait, ou ignoré·e pour tout ce que tu as fait ?',
      answers: [
        { id: 'recognized', text: 'Reconnu·e, sans hésiter.', weights: { adc: 1, mid: 0.6 } },
        { id: 'ignored', text: 'Ignoré·e : tu sais ce que tu vaux.', weights: { support: 1, top: 0.6, jungle: 0.5 } },
      ],
    },
    {
      id: 'deadline-crisis',
      text: 'La veille d’une échéance importante, un gros problème tombe sur ton équipe. Tu…',
      answers: [
        { id: 'lead', text: 'Prends les choses en main.', weights: { mid: 1 } },
        { id: 'own-way', text: 'Refuses le plan proposé, et fais à ta façon.', weights: { top: 1 } },
        { id: 'stay-late', text: 'Restes jusqu’à minuit pour aider tout le monde.', weights: { support: 1 } },
        { id: 'warned', text: 'Rappelles que tu avais prévenu tout le monde il y a une semaine.', weights: { support: 0.5, mid: 0.5 } },
        { id: 'present-solution', text: 'Laisses les autres chercher, puis présentes la solution trouvée.', weights: { jungle: 1, adc: 0.4 } },
        { id: 'indispensable', text: 'Fais remarquer que, sans toi, rien n’avancera.', weights: { adc: 0.8, mid: 0.4 } },
      ],
    },
    {
      id: 'moving-day',
      text: 'Un·e ami·e déménage. Tu…',
      answers: [
        { id: 'early', text: 'Arrives à 8 h, avec du scotch, des cartons en rab et des croissants.', weights: { support: 1 } },
        { id: 'pizza', text: 'Arrives quand il ne reste plus que la pizza.', weights: { jungle: 1, adc: 0.4 } },
        { id: 'stairs', text: 'Insistes pour monter le canapé par l’escalier, même si tout le monde dit que ça ne passera pas.', weights: { top: 1 } },
        { id: 'light-boxes', text: 'Prends les cartons les plus légers.', weights: { adc: 1 } },
        { id: 'truck', text: 'Trouves comment tout faire rentrer dans le camion du premier coup.', weights: { mid: 0.8 } },
      ],
    },
    {
      id: 'come-to-you',
      text: 'On vient surtout te voir pour…',
      answers: [
        { id: 'expertise', text: 'Des conseils techniques.', weights: { mid: 1 } },
        { id: 'hand', text: 'Un coup de main.', weights: { support: 1 } },
        { id: 'gossip', text: 'Les derniers potins.', weights: { jungle: 0.8 } },
        { id: 'rarely', text: 'Pas grand-chose : on vient rarement te voir, et ça ne te dérange pas.', weights: { top: 1 } },
      ],
    },
    {
      id: 'escape-game',
      text: 'En escape game, tu…',
      answers: [
        { id: 'split-puzzles', text: 'Répartis les énigmes entre tout le monde.', weights: { support: 1, jungle: 0.4 } },
        { id: 'clock', text: 'Surveilles le chrono, et décides quand demander un indice.', weights: { jungle: 1, support: 0.4 } },
        { id: 'hardest-puzzle', text: 'T’attaques à l’énigme la plus dure.', weights: { mid: 1 } },
        { id: 'stuck', text: 'Restes bloqué·e sur la même énigme, sans vouloir lâcher.', weights: { top: 1 } },
        { id: 'shout-answer', text: 'Cries la solution juste après que quelqu’un l’a trouvée.', weights: { adc: 0.8, jungle: 0.4 } },
      ],
    },
    {
      id: 'post-game-chat',
      text: 'Défaite. Dans le chat de fin de partie, tu…',
      answers: [
        { id: 'leave', text: 'Quittes sans rien écrire.', weights: { top: 0.8, support: 0.4 } },
        { id: 'blame-partner', text: 'Expliques que tu as fait ta part, et que c’est la personne à côté de toi qui a lâché.', weights: { adc: 1 } },
        { id: 'lecture', text: 'Expliques en détail ce que chaque personne aurait dû faire.', weights: { mid: 1 } },
        { id: 'cheer', text: 'Encourages ton équipe pour la prochaine.', weights: { support: 1 } },
        { id: 'one-v-one', text: 'Proposes un 1v1 à la personne d’en face.', weights: { mid: 0.8, top: 0.6 } },
        { id: 'report', text: 'Signales la moitié de ton équipe.', weights: { adc: 0.6 } },
      ],
    },
    {
      id: 'first-day',
      text: 'Premier jour dans un nouveau travail. Tu…',
      answers: [
        { id: 'tour', text: 'Fais le tour de tous les bureaux pour savoir qui fait quoi.', weights: { jungle: 0.8 } },
        { id: 'get-going', text: 'Te mets au travail, sans attendre qu’on t’explique.', weights: { top: 0.8 } },
        { id: 'other-newcomer', text: 'Aides l’autre nouvelle recrue à s’y retrouver.', weights: { support: 1 } },
        { id: 'show-skills', text: 'Montres dès le premier jour ce que tu sais faire.', weights: { mid: 0.8, adc: 0.5 } },
        { id: 'raise', text: 'Demandes déjà quand tu pourras être augmenté·e.', weights: { adc: 1, jungle: 0.3 } },
        { id: 'listen', text: 'Écoutes beaucoup, et parles peu.', weights: { support: 0.5 } },
      ],
    },
  ],
};
