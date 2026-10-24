import type { Quiz } from '../../types';

export const zodiac: Quiz = {
  id: 'zodiac',
  title: 'Quel est ton (véritable) signe astrologique ?',
  emoji: '🔮',
  released: '2026-10-24T13:13',
  description: 'Oublie ta date de naissance : ici, c’est ta personnalité qui décide.',
  personalities: [
    {
      id: 'aries',
      name: 'Bélier',
      emoji: '♈',
      description:
        'Tu fonces d’abord et tu réfléchis après. Tu adores gagner, tu détestes perdre, et quand tu t’énerves ça part au quart de tour… mais ça retombe aussi vite.',
    },
    {
      id: 'taurus',
      name: 'Taureau',
      emoji: '♉',
      description:
        'Un bon repas, un lit douillet, ton canapé : tu sais profiter des plaisirs simples. Calme et constant·e, tu avances à ton rythme, et une fois que tu as décidé quelque chose, personne ne te fera changer d’avis.',
    },
    {
      id: 'gemini',
      name: 'Gémeaux',
      emoji: '♊',
      description:
        'Curieux·se de tout, tu passes d’un sujet à l’autre à toute vitesse et tu pourrais parler pendant des heures. Ta pire ennemie, c’est la routine : tu changes d’avis comme de chemise, mais on ne s’ennuie jamais avec toi.',
    },
    {
      id: 'cancer',
      name: 'Cancer',
      emoji: '♋',
      description:
        'Tes proches passent avant tout, et gare à qui leur fait du mal. Sensible, tu te vexes vite et tu le caches mal. Rien ne vaut pour toi une soirée à la maison et les souvenirs qu’on se raconte depuis toujours.',
    },
    {
      id: 'leo',
      name: 'Lion',
      emoji: '♌',
      description:
        'Quand tu entres dans une pièce, ça se remarque. Tu aimes briller, être admiré·e, et tu as la fierté qui va avec. Mais tu es aussi la personne la plus généreuse du groupe : avec toi, tout le monde profite de la fête.',
    },
    {
      id: 'virgo',
      name: 'Vierge',
      emoji: '♍',
      description:
        'Rien ne t’échappe : le petit détail qui cloche, la faute d’orthographe, l’objet pas rangé. Organisé·e et perfectionniste, tu aides les autres de la façon la plus concrète qui soit : en réglant leurs problèmes.',
    },
    {
      id: 'libra',
      name: 'Balance',
      emoji: '♎',
      description:
        'Tu détestes les conflits, et c’est souvent toi qui réconcilies tout le monde. Tu aimes les belles choses et la compagnie des autres… mais choisir entre deux options peut te prendre une éternité.',
    },
    {
      id: 'scorpio',
      name: 'Scorpion',
      emoji: '♏',
      description:
        'Avec toi, c’est tout ou rien : quand tu aimes, c’est à fond, et quand on te trahit, tu n’oublies jamais. Tu gardes tes secrets, tu observes beaucoup, et peu de gens savent vraiment ce qui se passe dans ta tête.',
    },
    {
      id: 'sagittarius',
      name: 'Sagittaire',
      emoji: '♐',
      description:
        'Un sac à dos, une destination au hasard, et c’est parti. Tu as besoin de liberté, tu vois toujours le bon côté des choses, et tu dis ce que tu penses, même quand ce n’est pas le moment.',
    },
    {
      id: 'capricorn',
      name: 'Capricorne',
      emoji: '♑',
      description:
        'Tu sais où tu vas et tu t’en donnes les moyens. Ambitieux·se et discipliné·e, tu prends les choses au sérieux et tu gardes tes émotions pour toi. On te trouve parfois trop sérieux·se, mais c’est toi qui arrives là où tu l’avais prévu.',
    },
    {
      id: 'aquarius',
      name: 'Verseau',
      emoji: '♒',
      description:
        'Tu n’as jamais suivi la mode et tu n’as pas l’intention de commencer. Tu rêves d’un monde plus juste et tu te bats pour tes idées, sans attendre l’approbation de personne.',
    },
    {
      id: 'pisces',
      name: 'Poissons',
      emoji: '♓',
      description:
        'La tête dans les nuages, tu t’évades dans tes rêves dès que la réalité devient trop lourde. Tu ressens les émotions des autres comme si c’étaient les tiennes, et face à un conflit, ton premier réflexe est de disparaître.',
    },
  ],
  questions: [
    {
      id: 'bad-horoscope',
      text: 'Ton horoscope du jour annonce une journée difficile. Tu…',
      answers: [
        { id: 'go-anyway', text: 'Fonces quand même : tu as des choses à faire.', weights: { aries: 0.8, capricorn: 0.4 } },
        { id: 'careful', text: 'Fais un peu plus attention que d’habitude, au cas où.', weights: { virgo: 0.7 } },
        { id: 'on-your-mind', text: 'Ça te trotte dans la tête toute la journée.', weights: { pisces: 0.6, cancer: 0.5 } },
        { id: 'debate', text: 'Le lis à voix haute et lances un débat sur l’astrologie.', weights: { gemini: 1, leo: 0.3 } },
        { id: 'forget', text: 'L’oublies dans la minute.', weights: { taurus: 0.6, capricorn: 0.5 } },
      ],
    },
    {
      id: 'friends-weekend',
      text: 'Tu pars en week-end avec des ami·es, mais rien n’est encore décidé. Tu…',
      answers: [
        { id: 'spreadsheet', text: 'As déjà fait un tableau avec les dates, le budget et les options.', weights: { virgo: 1, capricorn: 0.5 } },
        { id: 'unknown-spot', text: 'Proposes un coin que personne ne connaît encore.', weights: { sagittarius: 0.8, gemini: 0.5 } },
        { id: 'usual-house', text: 'Proposes la maison habituelle : on sait que c’est bien.', weights: { cancer: 0.8, taurus: 0.6 } },
        { id: 'good-food', text: 'Laisses les autres décider, tant qu’il y a de bons repas.', weights: { taurus: 0.8, pisces: 0.4 } },
        { id: 'anything', text: 'Dis que tout te va. Vraiment, tout te va.', weights: { pisces: 0.7, libra: 0.5 } },
        { id: 'everyone-heard', text: 'Fais en sorte que chaque personne ait son mot à dire.', weights: { libra: 0.8, leo: 0.3 } },
      ],
    },
    {
      id: 'flaw',
      text: 'Le défaut que tu as du mal à admettre ?',
      answers: [
        { id: 'procrastinate', text: 'Tu remets tout au lendemain.', weights: { taurus: 0.7, pisces: 0.6 } },
        { id: 'touchy', text: 'Tu prends mal la moindre remarque.', weights: { cancer: 0.8, leo: 0.5 } },
        { id: 'last-word', text: 'Tu as besoin d’avoir le dernier mot.', weights: { aries: 0.6, taurus: 0.6, leo: 0.4 } },
        { id: 'cant-say-no', text: 'Tu n’arrives pas à dire non.', weights: { pisces: 0.8, libra: 0.6 } },
        { id: 'demanding', text: 'Tu en demandes trop, à toi comme aux autres.', weights: { virgo: 0.8, capricorn: 0.7 } },
        { id: 'restless', text: 'Tu ne tiens pas en place.', weights: { gemini: 0.8, sagittarius: 0.6 } },
        { id: 'grudge', text: 'Tu ne pardonnes pas facilement.', weights: { scorpio: 1, cancer: 0.4 } },
      ],
    },
    {
      id: 'computer-crash',
      text: 'Ton ordinateur plante et tu perds deux heures de travail. Tu…',
      answers: [
        { id: 'bang-table', text: 'Tapes sur la table, puis t’y remets cinq minutes plus tard.', weights: { aries: 0.8 } },
        { id: 'restart-now', text: 'T’y remets aussitôt, sans un mot, même si ça doit prendre la nuit.', weights: { capricorn: 1 } },
        { id: 'break', text: 'Fais une pause : ça attendra bien demain.', weights: { taurus: 0.8, pisces: 0.5 } },
        { id: 'autosave', text: 'Actives la sauvegarde automatique avant de t’y remettre.', weights: { virgo: 0.8, capricorn: 0.4 } },
        { id: 'call', text: 'Appelles quelqu’un pour tout lui raconter.', weights: { gemini: 0.6, cancer: 0.5 } },
      ],
    },
    {
      id: 'smell',
      text: 'Choisis une odeur.',
      answers: [
        { id: 'bread', text: 'Du pain chaud qui sort du four.', weights: { taurus: 1, cancer: 0.3 } },
        { id: 'sunscreen', text: 'La crème solaire des étés de ton enfance.', weights: { cancer: 1 } },
        { id: 'spices', text: 'Les épices d’un marché, dans un pays que tu découvres.', weights: { sagittarius: 0.8, gemini: 0.4 } },
        { id: 'laundry', text: 'Le linge propre qui sort de la machine.', weights: { virgo: 0.8, taurus: 0.3 } },
        { id: 'perfume', text: 'Un grand parfum, un peu trop cher.', weights: { leo: 0.7, libra: 0.6 } },
        { id: 'loved-one', text: 'Le cou de la personne que tu aimes.', weights: { scorpio: 0.8, cancer: 0.4 } },
        { id: 'coffee', text: 'Le café du matin, avant une grosse journée.', weights: { capricorn: 0.7 } },
        { id: 'gasoline', text: 'L’essence à la station-service. Et tu assumes.', weights: { aquarius: 0.8 } },
      ],
    },
    {
      id: 'asked-sign',
      text: 'Quelqu’un te demande ton signe astrologique. Tu…',
      answers: [
        { id: 'just-say', text: 'Le dis, sans en faire toute une histoire.', weights: { capricorn: 0.6, taurus: 0.5 } },
        { id: 'fishing', text: 'Le dis, et attends qu’on te dise que ça te va bien.', weights: { leo: 0.8 } },
        { id: 'why', text: 'Réponds par une question : « Pourquoi tu veux savoir ? »', weights: { scorpio: 1 } },
        { id: 'ask-back', text: 'Lui demandes le sien, puis son ascendant, puis toute sa vie.', weights: { gemini: 1 } },
        { id: 'forgot', text: 'Dois réfléchir : tu ne t’en souviens jamais.', weights: { pisces: 0.6 } },
        { id: 'no-cliche', text: 'Réponds, en précisant que tu ne corresponds à aucun cliché.', weights: { aquarius: 0.7 } },
      ],
    },
    {
      id: 'calendar',
      text: 'Ton agenda, c’est…',
      answers: [
        { id: 'planned', text: 'Rempli des mois à l’avance, avec tes objectifs de l’année en première page.', weights: { capricorn: 1, virgo: 0.5 } },
        { id: 'none', text: 'Quel agenda ? Tu décides le matin même.', weights: { sagittarius: 0.7, aries: 0.5, gemini: 0.3 } },
        { id: 'social', text: 'Plein à craquer : un café avec l’un·e, un apéro avec l’autre.', weights: { libra: 0.8, gemini: 0.6, leo: 0.3 } },
        { id: 'free-time', text: 'Plein de cases vides, exprès.', weights: { taurus: 0.8 } },
        { id: 'reminders', text: 'Des rappels partout, sinon tu oublies tout.', weights: { pisces: 0.7 } },
      ],
    },
    {
      id: 'failed-creation',
      text: 'Ton·ta meilleur·e ami·e te montre une création dont iel est très fier·ère, et c’est raté. Tu…',
      answers: [
        { id: 'honest-fixes', text: 'Lui dis franchement ce qui ne va pas, et comment l’améliorer.', weights: { sagittarius: 0.7, virgo: 0.7 } },
        { id: 'gentle', text: 'Commences par ce qui est réussi, puis glisses une ou deux pistes.', weights: { libra: 0.8, virgo: 0.3, cancer: 0.3 } },
        { id: 'white-lie', text: 'Lui dis que c’est génial : pas question de lui faire de la peine.', weights: { cancer: 0.8, pisces: 0.6 } },
        { id: 'interesting', text: 'Dis « intéressant » et changes vite de sujet.', weights: { pisces: 0.5, gemini: 0.4 } },
        { id: 'together', text: 'Lui proposes de le refaire ensemble.', weights: { leo: 0.6, cancer: 0.4 } },
      ],
    },
    {
      id: 'alien-visit',
      text: 'Un·e extraterrestre te demande de lui présenter l’humanité. Tu l’emmènes où ?',
      answers: [
        { id: 'terrace', text: 'Sur une terrasse au soleil, autour d’un bon repas.', weights: { taurus: 1 } },
        { id: 'home', text: 'Chez toi, avec les gens que tu aimes.', weights: { cancer: 1, libra: 0.4 } },
        { id: 'museum', text: 'Dans un musée : iel doit voir ce qu’on a fait de plus beau.', weights: { libra: 0.8 } },
        { id: 'protest', text: 'À une manifestation : c’est là qu’on voit ce qui compte pour les gens.', weights: { aquarius: 0.8 } },
        { id: 'concert', text: 'À un concert, au milieu de la foule.', weights: { leo: 0.7, gemini: 0.3 } },
        { id: 'questions', text: 'Nulle part : tu as d’abord trop de questions à lui poser sur sa planète.', weights: { gemini: 1 } },
      ],
    },
    {
      id: 'wrong-dish',
      text: 'Au restaurant, on t’apporte un plat que tu n’as pas commandé. Tu…',
      answers: [
        { id: 'eat-anyway', text: 'Le manges quand même : tu n’oses pas déranger.', weights: { pisces: 1, libra: 0.4 } },
        { id: 'taste', text: 'Le goûtes : tu ne connaissais pas, c’est l’occasion.', weights: { gemini: 0.7, sagittarius: 0.5 } },
        { id: 'right-table', text: 'Signales l’erreur, en indiquant à quelle table ce plat devait aller.', weights: { virgo: 1 } },
        { id: 'insist', text: 'Le renvoies, même s’il a l’air bon.', weights: { taurus: 1 } },
      ],
    },
    {
      id: 'secret-told',
      text: 'Tu découvres qu’un·e ami·e a raconté un de tes secrets. Tu…',
      answers: [
        { id: 'confront', text: 'Vas lui dire ta façon de penser, devant tout le monde.', weights: { aries: 1, sagittarius: 0.4 } },
        { id: 'cut-ties', text: 'Coupes les ponts.', weights: { scorpio: 1, taurus: 0.3 } },
        { id: 'talk-privately', text: 'Lui demandes des explications en privé, pour entendre sa version.', weights: { libra: 1 } },
        { id: 'avoid', text: 'Évites cette personne pendant des semaines plutôt que d’en parler.', weights: { pisces: 1, libra: 0.4 } },
        { id: 'hurt', text: 'Fais comme si de rien n’était, mais tout le monde voit bien que ça t’a touché·e.', weights: { cancer: 1, pisces: 0.4 } },
        { id: 'move-on', text: 'Te dis que ce n’était pas si grave, et passes à autre chose.', weights: { sagittarius: 0.6, taurus: 0.3 } },
      ],
    },
    {
      id: 'childhood-dream',
      text: 'Petit·e, tu voulais faire quoi plus tard ?',
      answers: [
        { id: 'star', text: 'Star de la chanson ou du cinéma.', weights: { leo: 1 } },
        { id: 'explorer', text: 'Explorateur·rice.', weights: { sagittarius: 0.8, gemini: 0.4 } },
        { id: 'boss', text: 'Président·e, ou chef·fe d’entreprise.', weights: { capricorn: 1, leo: 0.3 } },
        { id: 'carer', text: 'Vétérinaire ou infirmier·ère, pour soigner.', weights: { pisces: 0.8, virgo: 0.5 } },
        { id: 'inventor', text: 'Inventeur·rice, avec une nouvelle invention chaque semaine.', weights: { gemini: 0.8, aquarius: 0.3 } },
        { id: 'athlete', text: 'Sportif·ve de haut niveau, pour gagner des médailles.', weights: { aries: 0.8, capricorn: 0.4, leo: 0.3 } },
      ],
    },
    {
      id: 'proudest',
      text: 'Ce qui te rend le·la plus fier·ère ?',
      answers: [
        { id: 'goal', text: 'Avoir atteint un objectif que tu t’étais fixé depuis des années.', weights: { capricorn: 1 } },
        { id: 'old-friendship', text: 'Une amitié qui dure depuis l’école.', weights: { cancer: 0.8, taurus: 0.5 } },
        { id: 'stood-up', text: 'Avoir défendu tes idées, même seul·e contre tout le monde.', weights: { aquarius: 1 } },
        { id: 'helped', text: 'Les personnes que tu as aidées à régler un vrai problème.', weights: { virgo: 1, cancer: 0.3 } },
        { id: 'applause', text: 'Un moment où tout le monde t’a applaudi·e.', weights: { leo: 0.8, aries: 0.4 } },
      ],
    },
    {
      id: 'public-compliment',
      text: 'Quelqu’un te fait un compliment devant tout le monde. Tu…',
      answers: [
        { id: 'savor', text: 'Savoures. Tu en reprendrais bien un deuxième.', weights: { leo: 1 } },
        { id: 'thank', text: 'Remercies sobrement, et passes à autre chose.', weights: { capricorn: 0.8, taurus: 0.4 } },
        { id: 'blush', text: 'Rougis et ne sais plus où te mettre.', weights: { pisces: 0.6, cancer: 0.4 } },
        { id: 'unmoved', text: 'Remercies, mais au fond ça ne change rien pour toi.', weights: { aquarius: 0.7, capricorn: 0.3 } },
        { id: 'suspicious', text: 'Te demandes ce que cette personne attend de toi.', weights: { scorpio: 0.6 } },
        { id: 'share', text: 'Le renvoies à quelqu’un d’autre, pour que personne ne se sente oublié·e.', weights: { leo: 0.5, libra: 0.4 } },
      ],
    },
    {
      id: 'asking-advice',
      text: 'Quand tu doutes, tu demandes conseil à qui ?',
      answers: [
        { id: 'family', text: 'À ta famille, toujours.', weights: { cancer: 1 } },
        { id: 'best-friend', text: 'À ton·ta meilleur·e ami·e.', weights: { cancer: 0.5, gemini: 0.4 } },
        { id: 'everyone', text: 'À tout le monde. Puis tu fais la moyenne des avis.', weights: { libra: 1, gemini: 0.4 } },
        { id: 'intuition', text: 'À ton intuition.', weights: { pisces: 0.8, scorpio: 0.3 } },
        { id: 'no-one', text: 'À personne : tu te débrouilles seul·e.', weights: { capricorn: 0.7, aquarius: 0.5, scorpio: 0.5 } },
        { id: 'go-ahead', text: 'Tu ne doutes pas longtemps : tu te lances.', weights: { aries: 1, sagittarius: 0.3 } },
      ],
    },
    {
      id: 'board-games',
      text: 'Soirée jeux de société. Tu es la personne qui…',
      answers: [
        { id: 'rematch', text: 'Demande une revanche dès que la partie est finie.', weights: { aries: 1 } },
        { id: 'show', text: 'Fait le show à chaque tour.', weights: { leo: 1, gemini: 0.4 } },
        { id: 'bluff', text: 'Bluffe sans que personne ne devine jamais.', weights: { scorpio: 1 } },
        { id: 'strategy', text: 'A une stratégie dès le premier tour et s’y tient jusqu’au bout.', weights: { capricorn: 1, virgo: 0.4 } },
        { id: 'rules', text: 'Explique les règles, et vérifie qu’on les respecte.', weights: { virgo: 0.8 } },
        { id: 'for-fun', text: 'Joue pour l’ambiance : gagner ou perdre, peu importe.', weights: { taurus: 0.6, pisces: 0.4 } },
      ],
    },
    {
      id: 'change-world',
      text: 'Si tu pouvais changer une seule chose dans le monde ?',
      answers: [
        { id: 'equality', text: 'Fini les injustices : tout le monde à égalité.', weights: { aquarius: 1, libra: 0.3 } },
        { id: 'more-magic', text: 'Un peu plus de magie dans la vie de tous les jours.', weights: { pisces: 1 } },
        { id: 'freedom', text: 'Que tout le monde puisse partir où iel veut, quand iel veut.', weights: { sagittarius: 1 } },
        { id: 'long-weekends', text: 'Des week-ends de trois jours, pour tout le monde.', weights: { taurus: 1 } },
      ],
    },
  ],
};
