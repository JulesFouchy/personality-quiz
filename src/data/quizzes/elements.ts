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
        "Sensible et profond·e, tu ressens tout et tu comprends les autres mieux qu'eux-mêmes. Tu t'adaptes à tout, mais n'oublie pas : l'eau finit toujours par creuser la pierre.",
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
      id: 'weekend',
      category: 'habits',
      text: 'Ton week-end idéal ?',
      answers: [
        { id: 'party', text: 'Faire la fête jusqu’au bout de la nuit.', weights: { fire: 1 } },
        { id: 'deep-talk', text: 'Une longue discussion avec un·e ami·e autour d’un café.', weights: { water: 1, earth: 0.3 } },
        { id: 'home', text: 'Jardiner, cuisiner, rester tranquille à la maison.', weights: { earth: 1 } },
        { id: 'whim', text: 'Partir sur un coup de tête, on verra bien où.', weights: { air: 1 } },
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
      text: 'Tu préfères…',
      answers: [
        { id: 'know-all', text: 'Tout savoir, mais ne rien pouvoir changer.', weights: { air: 1, water: 0.4 } },
        { id: 'change-all', text: 'Tout pouvoir changer, mais ne rien savoir.', weights: { fire: 1 } },
        { id: 'calm-life', text: 'Une vie calme et heureuse, sans surprise.', weights: { earth: 1, water: 0.3 } },
        { id: 'intense-life', text: 'Une vie courte mais intense.', weights: { lightning: 1, fire: 0.7 } },
      ],
    },
    {
      id: 'group-role',
      category: 'social',
      text: 'Dans ton groupe d’amis, tu es…',
      answers: [
        { id: 'hype', text: 'La personne qui met l’ambiance.', weights: { fire: 1 } },
        { id: 'confidant', text: 'La personne à qui on se confie.', weights: { water: 1 } },
        { id: 'organizer', text: 'La personne qui organise tout.', weights: { earth: 1 } },
        { id: 'ideas', text: 'La personne qui a toujours de nouvelles idées.', weights: { air: 1 } },
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
        { id: 'revenge', text: 'Te venges gentiment de tous ceux qui t’ont embêté·e.', weights: { fire: 1, lightning: 0.3 } },
        { id: 'wishes', text: 'Exauces un vœu pour chacun de tes proches.', weights: { water: 1, earth: 0.4 } },
        { id: 'fix-home', text: 'Répares tout ce qui est cassé chez toi.', weights: { earth: 1 } },
        { id: 'world-tour', text: 'Fais le tour du monde en une journée.', weights: { air: 1 } },
        { id: 'physics', text: 'Changes les lois de la physique, juste pour voir.', weights: { lightning: 1, air: 0.5 } },
      ],
    },
    {
      id: 'childhood-memory',
      category: 'nostalgia',
      text: 'Ton meilleur souvenir d’enfance ressemble à…',
      answers: [
        { id: 'treehouse', text: 'Des journées entières à construire des cabanes.', weights: { earth: 1 } },
        { id: 'best-friend', text: 'Des heures à parler avec ton ou ta meilleur·e ami·e.', weights: { water: 1 } },
        { id: 'travels', text: 'Des voyages, des nouvelles villes, des nouvelles têtes.', weights: { air: 1 } },
        { id: 'mischief', text: 'Les bêtises que tu faisais avec ta bande.', weights: { fire: 1, lightning: 0.4 } },
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
