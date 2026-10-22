import type { Quiz } from '../../types';

export const elements: Quiz = {
  id: 'elements',
  title: 'Quel élément es-tu ?',
  emoji: '🔥',
  description: 'Feu, eau, terre ou air… ou peut-être quelque chose de plus rare ?',
  personalities: [
    {
      id: 'fire',
      name: 'Feu',
      emoji: '🔥',
      description:
        "Passionné·e, intense, tu fonces sans réfléchir et tu entraînes tout le monde avec toi. Tu réchauffes les cœurs… et parfois tu brûles un peu au passage.",
    },
    {
      id: 'water',
      name: 'Eau',
      emoji: '🌊',
      description:
        "Sensible et profond·e, tu ressens tout et tu comprends les autres mieux que personne. Tu t'adaptes à tout, mais n'oublie pas : l'eau finit toujours par creuser la pierre.",
    },
    {
      id: 'earth',
      name: 'Terre',
      emoji: '🌱',
      description:
        'Stable, fiable, patient·e, tu es le roc sur lequel tout le monde s’appuie. Tu construis lentement, mais ce que tu construis dure.',
    },
    {
      id: 'air',
      name: 'Air',
      emoji: '🌬️',
      description:
        'Curieux·se et libre, tu as toujours la tête pleine d’idées et l’envie d’aller voir ailleurs. Impossible de te retenir, mais tu laisses un souffle frais partout où tu passes.',
    },
    {
      id: 'lightning',
      name: 'Foudre',
      emoji: '⚡',
      description:
        "Rare et imprévisible, tu frappes là où personne ne t'attend. Tes idées sont fulgurantes, ton énergie électrique. On ne te croise pas souvent, mais on ne t'oublie jamais.",
    },
  ],
  questions: [
    {
      id: 'rainy-day',
      category: 'habits',
      text: 'Il pleut toute la journée. Tu…',
      answers: [
        { id: 'go-out', text: 'Sors quand même. Ce n’est pas la pluie qui va t’arrêter.', weights: { fire: 1 } },
        { id: 'watch-rain', text: 'Regardes la pluie tomber, une musique douce dans les oreilles.', weights: { water: 1 } },
        { id: 'tidy-up', text: 'En profites pour ranger et bricoler.', weights: { earth: 1 } },
        { id: 'rabbit-hole', text: 'Te perds pendant des heures dans un sujet au hasard sur internet.', weights: { air: 1 } },
        { id: 'invent', text: 'Inventes un jeu complètement nouveau.', weights: { lightning: 1, air: 0.4 } },
      ],
    },
    {
      id: 'unexpected-problem',
      category: 'stress',
      text: 'Un problème imprévu te tombe dessus. Tu…',
      answers: [
        { id: 'rush', text: 'Fonces et règles ça tout de suite.', weights: { fire: 1 } },
        { id: 'wait', text: 'Laisses décanter, la solution viendra.', weights: { water: 1, air: 0.3 } },
        { id: 'plan', text: 'Fais un plan, étape par étape.', weights: { earth: 1 } },
        { id: 'crazy-idea', text: 'Trouves une idée complètement folle… qui marche.', weights: { lightning: 1, air: 0.7 } },
      ],
    },
    {
      id: 'best-quality',
      category: 'introspection',
      text: 'Ta plus grande qualité ?',
      answers: [
        { id: 'passion', text: 'La passion.', weights: { fire: 1 } },
        { id: 'empathy', text: "L'empathie.", weights: { water: 1 } },
        { id: 'reliability', text: 'La fiabilité.', weights: { earth: 1 } },
        { id: 'curiosity', text: 'La curiosité.', weights: { air: 1 } },
        { id: 'intuition', text: 'Des intuitions fulgurantes.', weights: { lightning: 1, water: 0.7 } },
      ],
    },
    {
      id: 'life-tradeoff',
      category: 'dilemma',
      text: 'Quelle vie choisirais-tu ?',
      answers: [
        { id: 'know-all', text: 'Tout savoir, mais ne rien pouvoir changer.', weights: { air: 1, water: 0.4 } },
        { id: 'change-all', text: 'Tout pouvoir changer, mais ne rien savoir.', weights: { fire: 1 } },
        { id: 'calm-life', text: 'Une vie calme et heureuse, sans surprise.', weights: { earth: 1, water: 0.3 } },
        { id: 'intense-life', text: 'Une vie courte mais intense.', weights: { lightning: 1, fire: 0.7 } },
      ],
    },
    {
      id: 'new-city',
      category: 'social',
      text: 'Tu emménages dans une ville où tu ne connais personne. Premier réflexe ?',
      answers: [
        { id: 'party', text: 'Organiser une soirée pour rencontrer du monde.', weights: { fire: 1 } },
        { id: 'call-home', text: 'Appeler tes proches pour tout leur raconter.', weights: { water: 1 } },
        { id: 'nest', text: 'Installer ton chez-toi avant tout le reste.', weights: { earth: 1 } },
        { id: 'explore', text: 'Partir explorer chaque rue.', weights: { air: 1 } },
        { id: 'crazy-project', text: 'Lancer un projet fou dont toute la ville parlera.', weights: { lightning: 1, fire: 0.4 } },
      ],
    },
    {
      id: 'music',
      category: 'aesthetic',
      text: 'La musique d’une soirée parfaite ?',
      answers: [
        { id: 'dance', text: 'Du gros son qui fait danser tout le monde.', weights: { fire: 1 } },
        { id: 'sad-song', text: 'Une chanson douce qui te fait pleurer un peu.', weights: { water: 1 } },
        { id: 'classics', text: 'Les mêmes classiques que tu écoutes depuis toujours.', weights: { earth: 1 } },
        { id: 'shuffle', text: 'Une playlist au hasard, pour découvrir des trucs.', weights: { air: 1 } },
        { id: 'weird-mix', text: 'Un mélange improbable que personne d’autre n’aime.', weights: { lightning: 1, air: 0.5 } },
      ],
    },
    {
      id: 'cant-stand',
      category: 'values',
      text: 'Ce que tu ne supportes pas :',
      answers: [
        { id: 'boredom', text: "L'ennui.", weights: { fire: 1, air: 0.3 } },
        { id: 'cruelty', text: 'La méchanceté.', weights: { water: 1 } },
        { id: 'mess', text: 'Le désordre.', weights: { earth: 1 } },
        { id: 'trapped', text: 'Être enfermé·e.', weights: { air: 1 } },
      ],
    },
    {
      id: 'wizard-day',
      category: 'absurd-scenario',
      text: 'Tu deviens magicien·ne pour une journée. Tu…',
      answers: [
        { id: 'revenge', text: 'Te venges gentiment de toutes les personnes qui t’ont embêté·e.', weights: { fire: 1, lightning: 0.3 } },
        { id: 'wishes', text: 'Exauces un vœu pour chacun de tes proches.', weights: { water: 1, earth: 0.4 } },
        { id: 'fix-home', text: 'Répares tout ce qui est cassé chez toi.', weights: { earth: 1 } },
        { id: 'world-tour', text: 'Fais le tour du monde en une journée.', weights: { air: 1 } },
        { id: 'physics', text: 'Changes les lois de la physique, juste pour voir.', weights: { lightning: 1, air: 0.5 } },
      ],
    },
    {
      id: 'holiday-photos',
      category: 'habits',
      text: 'Sur tes photos de vacances, on voit surtout…',
      answers: [
        { id: 'dancing', text: 'Toi, en train de danser.', weights: { fire: 1 } },
        { id: 'loved-ones', text: 'Les gens que tu aimes.', weights: { water: 1 } },
        { id: 'same-places', text: 'Des paysages calmes, souvent les mêmes endroits.', weights: { earth: 1 } },
        { id: 'new-places', text: 'Un endroit différent sur chaque photo.', weights: { air: 1 } },
        { id: 'weird', text: 'Des trucs bizarres que personne d’autre n’aurait photographiés.', weights: { lightning: 1, air: 0.4 } },
      ],
    },
    {
      id: 'driving',
      category: 'funny',
      text: 'Au volant, tu es plutôt…',
      answers: [
        { id: 'floor-it', text: 'Pied au plancher.', weights: { fire: 1 } },
        { id: 'zen', text: 'Prudent·e et zen.', weights: { earth: 0.5, water: 0.5 } },
        { id: 'lost', text: 'Perdu·e, mais tu découvres plein d’endroits.', weights: { air: 1 } },
        { id: 'unpredictable', text: 'Imprévisible, même pour toi.', weights: { lightning: 1, air: 0.7 } },
        { id: 'passenger', text: 'Passager·ère. C’est mieux pour tout le monde.', weights: { water: 0.5, earth: 0.4 } },
      ],
    },
  ],
};
