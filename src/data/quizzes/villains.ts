import type { Quiz } from '../../types';

export const villains: Quiz = {
  id: 'villains',
  title: 'Quel·le méchant·e serais-tu ?',
  emoji: '😈',
  hidden: true,
  description: 'Tout le monde a un côté obscur. Reste à savoir si le tien vole la lune, gâche la fête des voisin·es ou se prend pour un dieu.',
  personalities: [
    {
      id: 'joker',
      name: 'Le Joker',
      emoji: '🃏',
      description:
        'Comme le Joker, tu ne veux ni argent ni pouvoir : tu veux voir ce qui se passe quand tout déraille. Imprévisible, tu improvises tout, tu changes d’humeur d’une minute à l’autre, et aucun plan ne te survit plus de cinq minutes. Ton humour est noir, souvent déplacé, et tu ris aux moments où personne d’autre n’ose. Les règles te paraissent une vaste blague, tu raffoles des mauvais tours, et tu adores pousser les gens à bout pour voir qui craque en premier. Le plus inquiétant ? Tu as l’air de beaucoup t’amuser.',
    },
    {
      id: 'darth-vader',
      name: 'Dark Vador',
      emoji: '🖤',
      description:
        'Comme Dark Vador, il te suffit d’entrer dans une pièce pour que le silence se fasse. Tu parles peu, mais chaque mot compte, et ton calme glacial impressionne plus que n’importe quel cri… jusqu’au jour où ta colère éclate. Tu crois à l’ordre, à la discipline et à la hiérarchie : tu obéis à tes supérieur·es et tu exiges la même chose de tes troupes. L’incompétence te met hors de toi, et les excuses ne t’intéressent pas : seuls les résultats comptent. Sous l’armure, il reste peut-être un peu de lumière, mais personne n’a encore osé vérifier.',
    },
    {
      id: 'gru',
      name: 'Gru',
      emoji: '🌙',
      description:
        'Comme Gru, tu ne rêves pas petit : tant qu’à faire un mauvais coup, autant voler la lune. Tu as toujours un projet démesuré en tête, un garage plein d’inventions farfelues et de gadgets bricolés, et une envie féroce d’épater la galerie, à commencer par ta mère, qui n’a jamais été impressionnée. Tu ne supportes pas qu’un·e rival·e fasse plus fort que toi, et quand un plan échoue, tu en lances aussitôt un plus grand. Tu te voudrais terrifiant·e, mais ça ne marche pas vraiment. Sous tes airs bougons, tu es une vraie guimauve : les personnes qui travaillent pour toi t’adorent, et il suffit d’un câlin d’enfant pour que tu fondes complètement.',
    },
    {
      id: 'grinch',
      name: 'Le Grinch',
      emoji: '🎄',
      description:
        'Comme le Grinch, tu n’as qu’une ambition : qu’on te laisse tranquille. Les fêtes, la musique trop forte et les voisin·es trop joyeux·ses t’insupportent, et tu ne te prives pas de le faire savoir, en soupirant, en grognant, ou en sabotant discrètement leur bonne humeur. Tu vis très bien seul·e dans ton coin, avec ton chien pour toute compagnie et un sens du sarcasme bien aiguisé. Au fond, ta mauvaise humeur cache surtout une vieille solitude… mais tu n’es pas près de l’avouer.',
    },
    {
      id: 'heisenberg',
      name: 'Heisenberg',
      emoji: '🧪',
      description:
        'Comme Walter White, alias Heisenberg, tu as longtemps été sous-estimé·e, et tu ne l’as jamais digéré. Maintenant qu’on découvre enfin de quoi tu es capable, tu veux que tout le monde le sache, et que ton nom soit sur toutes les lèvres. Perfectionniste jusqu’à l’obsession, tu ne te contentes jamais de « pas mal » : ton travail doit être le meilleur, point. Ta fierté est immense, et ta rancune envers les personnes qui t’ont pris·e de haut aussi. Tu aimes avoir le contrôle, tu ne supportes pas qu’on empiète sur ton territoire, et tu as beau répéter que tu fais tout ça pour ta famille… au fond, tu le fais surtout pour toi.',
    },
    {
      id: 'light-yagami',
      name: 'Light Yagami',
      emoji: '📓',
      description:
        'Comme Light Yagami, tu as ta propre idée de la justice, et tu es prêt·e à tout pour l’appliquer. Certain·e de savoir mieux que tout le monde qui mérite quoi, tu juges vite et tu punis sans état d’âme… à moins que la justice ne soit qu’un prétexte pour te sentir au-dessus des autres. Aux yeux du monde, tu es irréprochable : poli·e, brillant·e, premier·ère de la classe, la personne la moins suspecte qui soit. En coulisses, tu calcules chacun de tes coups, tu gardes toujours un plan d’avance, et rien ne t’excite plus qu’un duel d’intelligence avec quelqu’un qui pourrait presque te battre.',
    },
    {
      id: 'silco',
      name: 'Silco',
      emoji: '👁️',
      description:
        'Comme Silco, tu es parti·e de rien, et tu as bâti ton petit empire toi-même, pierre après pierre, avec une patience que rien n’ébranle. Tu gardes toujours ton sang-froid et tu n’élèves jamais la voix : tu proposes des marchés, et tout le monde finit par te devoir quelque chose. Tu as une vision pour ton quartier, pour tes proches, pour les personnes qu’on a toujours méprisées, et tu es prêt·e à tout pour la réaliser. Une trahison, tu ne l’oublies jamais. Mais pour la personne que tu as prise sous ton aile, tu brûlerais le monde entier : c’est ta seule faiblesse, et c’est aussi ce qui te rend presque attachant·e.',
    },
    {
      id: 'loki',
      name: 'Loki',
      emoji: '🐍',
      description:
        'Comme Loki, tu mens comme tu respires, et avec tant de charme qu’on a presque envie de te croire. Tu dis à chacun·e ce qu’iel veut entendre, tu changes de camp quand ça t’arrange, et tu t’en sors toujours au dernier moment, même quand tout le monde te croyait fini·e. Théâtral·e et sarcastique, tu adores les grandes entrées et les belles phrases. Derrière le spectacle, une vieille blessure : tu as toujours eu l’impression de passer en second, et tout ce que tu veux, au fond, c’est qu’on te choisisse, toi.',
    },
  ],
  questions: [
    {
      id: 'last-slice',
      text: 'Il reste une seule part de gâteau, et tout le monde la regarde. Tu…',
      answers: [
        { id: 'take-it', text: 'La prends. Personne n’ose protester.', weights: { 'darth-vader': 1 } },
        { id: 'favorite', text: 'La donnes à ta personne préférée, sous le nez de tout le monde.', weights: { silco: 0.8, gru: 0.6 } },
        { id: 'reserved', text: 'Fais croire qu’elle est réservée, puis la manges en douce.', weights: { loki: 1, 'light-yagami': 0.3 } },
        { id: 'finger', text: 'Passes un doigt dans la crème, pour que plus personne n’en veuille.', weights: { grinch: 0.7, joker: 0.6 } },
        { id: 'my-cake', text: 'La réclames : c’est toi qui as fait le gâteau.', weights: { heisenberg: 0.7 } },
      ],
    },
    {
      id: 'lair',
      text: 'Ton repaire idéal ?',
      answers: [
        { id: 'no-neighbors', text: 'Un endroit tranquille, sans voisin·es.', weights: { grinch: 1 } },
        { id: 'basement', text: 'Un sous-sol parfaitement rangé.', weights: { heisenberg: 0.8, 'darth-vader': 0.5 } },
        { id: 'hangar', text: 'Un hangar rempli de machines à moitié démontées.', weights: { gru: 1 } },
        { id: 'war-room', text: 'Une pièce sombre, aux murs couverts de plans, de photos et de fils rouges.', weights: { 'light-yagami': 1, silco: 0.4, gru: 0.3 } },
        { id: 'grand-entrance', text: 'Un endroit qui fait son effet dès qu’on passe la porte.', weights: { loki: 0.8, gru: 0.5 } },
        { id: 'always-moving', text: 'N’importe où, tant que ça change souvent.', weights: { joker: 0.8 } },
      ],
    },
    {
      id: 'waiting-room',
      text: 'Tu attends depuis une heure dans une salle d’attente. Tu…',
      answers: [
        { id: 'charm', text: 'Fais du charme à l’accueil jusqu’à passer en premier.', weights: { loki: 1 } },
        { id: 'phone-call', text: 'Passes un coup de fil, et on t’appelle dans la minute.', weights: { silco: 1 } },
        { id: 'sigh', text: 'Soupires assez fort pour que toute la salle t’entende.', weights: { grinch: 1 } },
        { id: 'swap-tickets', text: 'Mélanges discrètement les tickets d’attente.', weights: { joker: 1 } },
        { id: 'complain', text: 'Vas exiger des explications à l’accueil.', weights: { 'darth-vader': 0.6, heisenberg: 0.4 } },
      ],
    },
    {
      id: 'childhood',
      text: 'Petit·e, tu étais l’enfant qui…',
      answers: [
        { id: 'others-toys', text: 'Démontait les jouets des autres pour en fabriquer de nouveaux.', weights: { gru: 1 } },
        { id: 'snitch', text: 'Était toujours cité·e en exemple, et dénonçait les autres en douce.', weights: { 'light-yagami': 1, 'darth-vader': 0.3 } },
        { id: 'silent-corrections', text: 'Passait inaperçu·e, mais relevait en silence chaque erreur de l’enseignant·e.', weights: { heisenberg: 1 } },
        { id: 'attention', text: 'Faisait des bêtises pour qu’on s’intéresse enfin à ellui.', weights: { loki: 0.8, joker: 0.4 } },
        { id: 'class-clown', text: 'Faisait rire toute la classe, surtout pendant les contrôles.', weights: { joker: 1 } },
        { id: 'sulked', text: 'Boudait à tous les anniversaires.', weights: { grinch: 1 } },
        { id: 'snack-racket', text: 'Rackettait les goûters de la cour de récré, avec sa petite bande.', weights: { silco: 0.8, 'darth-vader': 0.3 } },
      ],
    },
    {
      id: 'one-power',
      text: 'Pour tes mauvais coups, tu as droit à un seul pouvoir, mais chacun a son prix. Tu choisis…',
      answers: [
        { id: 'forever-invisible', text: 'L’invisibilité, mais pour toujours : plus personne ne te verra jamais.', weights: { grinch: 1 } },
        { id: 'mind-control', text: 'Contrôler l’esprit des gens, mais sans jamais savoir si quelqu’un t’aime vraiment.', weights: { 'darth-vader': 0.8, heisenberg: 0.3 } },
        { id: 'hear-everything', text: 'Lire dans les pensées, y compris tout ce qu’on pense de toi.', weights: { 'light-yagami': 1, silco: 0.3 } },
        { id: 'rewind-loop', text: 'Remonter le temps dès que quelque chose n’est pas parfait, quitte à revivre la même journée pendant des années.', weights: { heisenberg: 1, 'light-yagami': 0.3 } },
        { id: 'random-teleport', text: 'Te téléporter, mais jamais là où tu l’avais prévu.', weights: { joker: 1 } },
        { id: 'loud-flight', text: 'Voler, mais dans un vacarme de réacteur.', weights: { gru: 0.8, loki: 0.3 } },
      ],
    },
    {
      id: 'henchmen',
      text: 'Tu as des sbires. Avec elleux, tu es…',
      answers: [
        { id: 'attentive', text: 'Adorable : tu les couvres de petites attentions.', weights: { gru: 1, silco: 0.3 } },
        { id: 'demanding', text: 'Exigeant·e : tu ne tolères aucune approximation.', weights: { 'darth-vader': 0.8, heisenberg: 0.8 } },
        { id: 'generous', text: 'Généreux·se, tant qu’iels restent loyaux·ales.', weights: { silco: 1, gru: 0.3 } },
        { id: 'secretive', text: 'Discret·ète : iels ne connaissent jamais tout le plan.', weights: { 'light-yagami': 1, loki: 0.4 } },
        { id: 'moody', text: 'Lunatique : un jour ravi·e, le lendemain furieux·se.', weights: { joker: 1, 'darth-vader': 0.3 } },
        { id: 'alone', text: 'Seul·e : tu n’as besoin de personne.', weights: { grinch: 0.8, heisenberg: 0.4 } },
      ],
    },
    {
      id: 'wallet',
      text: 'Tu trouves un portefeuille plein de billets dans la rue. Tu…',
      answers: [
        { id: 'keep-cash', text: 'Gardes les billets, et rapportes le portefeuille avec un grand sourire.', weights: { loki: 0.8, 'light-yagami': 0.4 } },
        { id: 'whose', text: 'Regardes à qui il appartient. Ça pourra toujours servir.', weights: { silco: 0.8, 'light-yagami': 0.5 } },
        { id: 'hand-out', text: 'Distribues les billets aux passant·es.', weights: { joker: 0.8, gru: 0.3 } },
        { id: 'invest', text: 'Investis tout dans ton prochain projet.', weights: { gru: 0.8 } },
        { id: 'leave-it', text: 'Le laisses par terre : ce n’est pas ton problème.', weights: { grinch: 0.6 } },
      ],
    },
    {
      id: 'proven-wrong',
      text: 'Tu as tort, et tout le monde le sait. Tu…',
      answers: [
        { id: 'forty-pages', text: 'Reviens trois jours plus tard avec quarante pages de sources trafiquées.', weights: { heisenberg: 0.8, 'light-yagami': 0.4, loki: 0.4 } },
        { id: 'was-a-test', text: 'Expliques calmement que tu testais les autres.', weights: { 'light-yagami': 1, loki: 0.4 } },
        { id: 'said-the-opposite', text: 'Soutiens que tu as toujours dit le contraire.', weights: { loki: 1 } },
        { id: 'medal', text: 'Lâches un « Bravo, tu veux une médaille ? »', weights: { grinch: 1, loki: 0.3 } },
        { id: 'spill-glass', text: 'Renverses ton verre pour changer de sujet.', weights: { joker: 0.8 } },
        { id: 'admit-and-ignore', text: 'Le reconnais, puis ignores pour toujours la personne qui avait raison.', weights: { silco: 0.7, heisenberg: 0.5 } },
        { id: 'one-look', text: 'Mets fin à la discussion d’un seul regard.', weights: { 'darth-vader': 1 } },
      ],
    },
    {
      id: 'driving',
      text: 'Au volant, tu es la personne qui…',
      answers: [
        { id: 'by-the-book', text: 'Respecte le code à la lettre, et en exige autant des autres.', weights: { 'darth-vader': 0.8, 'light-yagami': 0.3 } },
        { id: 'own-code', text: 'Suit son propre code de la route, bien plus logique que l’officiel.', weights: { 'light-yagami': 1 } },
        { id: 'lane-changes', text: 'Change de file sans clignotant.', weights: { joker: 1 } },
        { id: 'revving', text: 'Fait vrombir le moteur dès que quelqu’un regarde.', weights: { gru: 0.7, loki: 0.3 } },
        { id: 'insults', text: 'Râle et insulte tout le monde, vitres fermées.', weights: { grinch: 0.8, 'darth-vader': 0.4 } },
      ],
    },
    {
      id: 'enemy-drink',
      text: 'Ton·ta pire ennemi·e t’invite à boire un verre. Tu…',
      answers: [
        { id: 'charming', text: 'Y vas, et tu es charmant·e du début à la fin.', weights: { loki: 0.8, 'light-yagami': 0.5 } },
        { id: 'team-up', text: 'Y vas, et lui proposes de faire équipe.', weights: { silco: 0.8, loki: 0.3 } },
        { id: 'read-them', text: 'Y vas pour la·le cerner, sans rien laisser paraître.', weights: { 'light-yagami': 1 } },
        { id: 'brag', text: 'Y vas, et passes la soirée à te vanter.', weights: { gru: 0.8, heisenberg: 0.6 } },
        { id: 'expensive', text: 'Commandes la bouteille la plus chère, et la laisses payer.', weights: { joker: 0.6 } },
        { id: 'refuse', text: 'Refuses. Tu ne bois pas avec n’importe qui.', weights: { 'darth-vader': 0.6, grinch: 0.4 } },
      ],
    },
    {
      id: 'entrance-music',
      text: 'Choisis ta musique d’entrée.',
      answers: [
        { id: 'menacing', text: 'Une musique grave et menaçante.', weights: { 'darth-vader': 0.8, silco: 0.3 } },
        { id: 'footsteps', text: 'Juste le bruit de tes pas.', weights: { 'darth-vader': 0.6, silco: 0.5 } },
        { id: 'kitsch-hit', text: 'Un tube kitsch et joyeux, totalement à contretemps.', weights: { joker: 1, gru: 0.3 } },
        { id: 'epic', text: 'Quelque chose d’épique, avec des chœurs et des violons.', weights: { loki: 1, gru: 0.6 } },
        { id: 'none', text: 'Aucune, merci.', weights: { grinch: 0.8 } },
      ],
    },
    {
      id: 'unwanted-party',
      text: 'On t’invite à une soirée où tu n’as aucune envie d’aller. Tu…',
      answers: [
        { id: 'no', text: 'Réponds « Non. », et c’est tout.', weights: { 'darth-vader': 0.7, grinch: 0.6 } },
        { id: 'excuse', text: 'Inventes une excuse si détaillée que personne n’ose douter.', weights: { loki: 1, 'light-yagami': 0.4 } },
        { id: 'ignore', text: 'Ne réponds pas.', weights: { grinch: 0.8 } },
        { id: 'contacts', text: 'Y vas quand même, et repars avec trois contacts utiles.', weights: { silco: 0.8 } },
      ],
    },
    {
      id: 'plan-fails',
      text: 'Ton plan échoue à cause d’un détail idiot. Tu…',
      answers: [
        { id: 'backup', text: 'Gardes ton calme : tu as une solution de rechange.', weights: { 'light-yagami': 0.8, silco: 0.6 } },
        { id: 'who-failed', text: 'Cherches qui a fait l’erreur.', weights: { 'darth-vader': 0.8, heisenberg: 0.5 } },
        { id: 'delighted', text: 'Trouves ça réjouissant : ça devient intéressant.', weights: { joker: 0.8 } },
        { id: 'blame', text: 'Fais porter le chapeau à quelqu’un d’autre.', weights: { loki: 1 } },
        { id: 'from-scratch', text: 'Reprends tout depuis le début, sans rien laisser au hasard.', weights: { heisenberg: 1, 'light-yagami': 0.3 } },
        { id: 'next-plan', text: 'Te lances dans un nouveau plan, sans attendre.', weights: { gru: 0.8, joker: 0.3 } },
      ],
    },
    {
      id: 'captured',
      text: 'Tes ennemi·es te capturent enfin. Tu…',
      answers: [
        { id: 'calm', text: 'Restes parfaitement calme : tu as déjà une idée.', weights: { 'light-yagami': 0.7, silco: 0.5 } },
        { id: 'escape', text: 'T’évades dans la nuit.', weights: { loki: 0.8, joker: 0.3 } },
        { id: 'jokes', text: 'Plaisantes avec tes geôlier·ères.', weights: { joker: 1, loki: 0.4 } },
        { id: 'bribe', text: 'Essaies de les acheter.', weights: { silco: 0.7, loki: 0.3 } },
        { id: 'silent', text: 'Ne dis pas un mot, quoi qu’iels fassent.', weights: { 'darth-vader': 0.8, silco: 0.4 } },
        { id: 'come-back', text: 'Jures que tu reviendras, plus fort·e que jamais.', weights: { gru: 0.7, heisenberg: 0.4 } },
      ],
    },
  ],
};
