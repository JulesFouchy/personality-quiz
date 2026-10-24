import type { Quiz } from '../../types';

export const fileFormats: Quiz = {
  id: 'file-formats',
  title: 'Quel format de fichier es-tu ?',
  emoji: '💾',
  description: 'txt, mp3 ou gif ? Ta personnalité en trois lettres.',
  personalities: [
    {
      id: 'md',
      name: '.md',
      emoji: '📝',
      description:
        'Tu notes tout : idées, listes de courses, films à voir, projets pour dans cinq ans. Organisé·e, tu aimes que chaque chose ait sa place, et tu prépares tout à l’avance. Tes notes sont ta deuxième mémoire.',
    },
    {
      id: 'csv',
      name: '.csv',
      emoji: '📊',
      description:
        'Les chiffres te parlent. Tu compares tout avant de choisir, tu adores les classements et les statistiques, et tu suis de près tes dépenses, tes scores ou tes progrès. Pour toi, un bon tableau vaut mieux qu’un long discours.',
    },
    {
      id: 'qoi',
      name: '.qoi',
      emoji: '✨',
      description:
        'Nouvelle appli, nouveau gadget, nouvelle tendance : tu as déjà tout essayé avant que les autres en entendent parler. Curieux·se, tu t’ennuies vite de ce qui existe depuis trop longtemps. Comme toi, le QOI (« Quite OK Image ») a un temps d’avance : c’est un format d’image encore jeune, que peu de gens connaissent… pour l’instant.',
    },
    {
      id: 'mp3',
      name: '.mp3',
      emoji: '🎧',
      description:
        'Ta vie a une bande-son. Tu as une playlist pour chaque moment, tu chantes partout, et tu partages tes découvertes avec tout le monde. Spontané·e, tu suis ton humeur plus que tes plans.',
    },
    {
      id: 'flac',
      name: '.flac',
      emoji: '💿',
      description:
        'Tu ne fais pas les choses à moitié. Tu écoutes vraiment : chaque instrument, chaque détail que les autres ne remarquent même pas. Exigeant·e, tu as des goûts pointus, et tu préfères attendre la meilleure qualité plutôt que de te contenter d’à peu près.',
    },
    {
      id: 'epub',
      name: '.epub',
      emoji: '📖',
      description:
        'Tu dévores les livres, et tu vis mille vies sans quitter ton fauteuil. Rêveur·se et plein·e d’imagination, tu inventes aussi tes propres histoires. Tu aimes le calme et les moments à toi, loin du bruit.',
    },
    {
      id: 'gif',
      name: '.gif',
      emoji: '😂',
      description:
        'Tu as toujours la bonne image ou la bonne blague pour réagir. Expressif·ve, tu fais rire ton entourage, même (surtout) dans les pires moments, et tu ne te prends jamais trop au sérieux.',
    },
    {
      id: 'py',
      name: '.py',
      emoji: '🐍',
      description:
        'Tu aimes comprendre comment les choses marchent, quitte à les démonter. Plutôt que de répéter une tâche, tu inventes un moyen de la faire faire à ta place. Un problème ? Pour toi, c’est surtout un casse-tête à résoudre. Le Python, c’est le langage de programmation des gens comme toi.',
    },
    {
      id: 'jpg',
      name: '.jpg',
      emoji: '📸',
      description:
        'Tu veux garder une trace des bons moments : une photo, un ticket, un souvenir de chaque voyage. Attaché·e à tes proches, tu gardes tout ce qui te rappelle les gens que tu aimes. Les souvenirs, pour toi, c’est sacré.',
    },
    {
      id: 'mp4',
      name: '.mp4',
      emoji: '🎬',
      description:
        'Films, séries, vidéos : tu enchaînes les épisodes et tu connais les répliques par cœur. Tu adores les histoires, et tu sais les raconter comme personne. Tu as toujours une recommandation à faire.',
    },
    {
      id: 'svg',
      name: '.svg',
      emoji: '🎨',
      description:
        'Tu as l’œil : tu remarques tout de suite une belle couleur, une police mal choisie ou un cadre de travers. Tu dessines dans les marges, tu aimes créer, et tu veux que les choses soient belles, pas seulement pratiques.',
    },
    {
      id: 'sav',
      name: '.sav',
      emoji: '🎮',
      description:
        'Une partie de plus, et tu vas te coucher… promis. Persévérant·e, tu recommences jusqu’à réussir, et tu ne lâches pas un jeu avant de l’avoir fini à 100 %. Tu aimes les défis, et tu perds facilement la notion du temps. Le .sav, c’est le fichier de sauvegarde de tes parties.',
    },
    {
      id: 'txt',
      name: '.txt',
      emoji: '📄',
      description:
        'Simple et efficace. Tu n’as pas besoin de grand-chose : peu d’affaires, pas de fioritures, juste ce qui marche. Tu vas droit à l’essentiel, et tu gardes un objet tant qu’il fonctionne, même s’il n’est plus à la mode. Un peu de vide ne te fait pas peur, au contraire : ça te repose.',
    },
  ],
  questions: [
    {
      id: 'long-train',
      text: 'Tu as trois heures de train devant toi. Tu…',
      answers: [
        { id: 'playlist', text: 'Mets tes écouteurs et lances ta playlist du moment.', weights: { mp3: 1 } },
        { id: 'full-album', text: 'Écoutes un album en entier, dans l’ordre.', weights: { flac: 0.8, mp3: 0.3 } },
        { id: 'book', text: 'Ouvres un livre, et ne relèves la tête qu’à l’arrivée.', weights: { epub: 1 } },
        { id: 'movies', text: 'Regardes des films sur ton téléphone.', weights: { mp4: 1 } },
        { id: 'console', text: 'Sors ta console.', weights: { sav: 1 } },
        { id: 'side-project', text: 'Avances un projet perso sur ton ordi.', weights: { py: 0.7, svg: 0.5 } },
        { id: 'window', text: 'Regardes le paysage, et c’est tout.', weights: { txt: 0.8, epub: 0.3 } },
      ],
    },
    {
      id: 'family-computer',
      text: 'Petit·e, sur l’ordinateur familial, tu…',
      answers: [
        { id: 'games', text: 'Jouais à tous les jeux installés, même aux démos.', weights: { sav: 1 } },
        { id: 'stories', text: 'Écrivais des histoires dans le traitement de texte.', weights: { epub: 0.8, mp4: 0.4 } },
        { id: 'wallpaper', text: 'Changeais le fond d’écran et les couleurs des fenêtres.', weights: { svg: 0.8 } },
        { id: 'settings', text: 'Fouillais dans les réglages, jusqu’à tout dérégler.', weights: { py: 1, qoi: 0.3 } },
        { id: 'music', text: 'Téléchargeais de la musique, pas toujours légalement.', weights: { mp3: 0.8 } },
        { id: 'photo-edits', text: 'Faisais des montages photo ridicules de ta famille.', weights: { gif: 0.8, svg: 0.3 } },
      ],
    },
    {
      id: 'bad-day',
      text: 'Tu rentres après une journée pourrie. Tu…',
      answers: [
        { id: 'call', text: 'Appelles un·e proche pour tout lui raconter.', weights: { jpg: 0.7 } },
        { id: 'funny-story', text: 'En fais une histoire drôle pour tes ami·es.', weights: { gif: 0.8, mp4: 0.3 } },
        { id: 'loud-music', text: 'Mets la musique à fond et chantes par-dessus.', weights: { mp3: 0.8 } },
        { id: 'tidy', text: 'Ranges quelque chose.', weights: { md: 0.7, txt: 0.4 } },
        { id: 'write', text: 'Écris tout ce qui s’est passé.', weights: { md: 0.5, epub: 0.5 } },
        { id: 'draw', text: 'Dessines, sans but précis.', weights: { svg: 0.8 } },
      ],
    },
    {
      id: 'new-phone',
      text: 'Tu dois changer de téléphone. Tu…',
      answers: [
        { id: 'reviews', text: 'Lis tous les tests et compares leurs notes avant de trancher.', weights: { csv: 0.8, md: 0.3, flac: 0.3 } },
        { id: 'latest', text: 'Prends celui qui vient de sortir.', weights: { qoi: 1 } },
        { id: 'cheapest', text: 'Prends le moins cher qui fait le travail.', weights: { txt: 0.8 } },
        { id: 'prettiest', text: 'Choisis le plus beau, tant pis pour le reste.', weights: { svg: 0.8 } },
        { id: 'flaws', text: 'Repères le défaut de chaque modèle, et aucun ne te convient.', weights: { flac: 0.7 } },
        { id: 'old-messages', text: 'Vérifies d’abord que tu récupéreras tous tes anciens messages.', weights: { jpg: 0.8 } },
      ],
    },
    {
      id: 'party-music',
      text: 'En soirée, on te laisse choisir la musique. Tu…',
      answers: [
        { id: 'prepared', text: 'Lances la playlist que tu as préparée pour l’occasion.', weights: { md: 0.6, mp3: 0.5 } },
        { id: 'hits', text: 'Enchaînes les tubes que tout le monde chante.', weights: { mp3: 0.8, gif: 0.3 } },
        { id: 'soundtracks', text: 'Passes des musiques de films et de jeux vidéo.', weights: { mp4: 0.6, sav: 0.6 } },
        { id: 'obscure', text: 'Passes des artistes très peu connus.', weights: { flac: 0.7 } },
        { id: 'this-week', text: 'Passes les morceaux sortis cette semaine.', weights: { qoi: 0.8, mp3: 0.3 } },
        { id: 'silly', text: 'Glisses une chanson ridicule entre deux tubes.', weights: { gif: 0.8 } },
        { id: 'pass', text: 'Laisses quelqu’un d’autre s’en charger.', weights: { epub: 0.5 } },
      ],
    },
    {
      id: 'downloads-folder',
      text: 'Ton dossier « Téléchargements », c’est…',
      answers: [
        { id: 'empty', text: 'Vide : tu ranges chaque fichier dès qu’il arrive.', weights: { md: 0.8, txt: 0.5 } },
        { id: 'mess', text: 'Un joyeux bazar : tu verras bien le jour où tu chercheras quelque chose.', weights: { mp3: 0.5 } },
        { id: 'rules', text: 'Trié par des règles automatiques que tu as mises en place.', weights: { py: 0.8, md: 0.3 } },
        { id: 'screenshots', text: 'Surtout des captures d’écran de conversations drôles.', weights: { gif: 0.8 } },
        { id: 'inspiration', text: 'Des centaines d’images qui t’inspirent.', weights: { svg: 0.8 } },
        { id: 'installers', text: 'Plein d’applis testées une fois, puis oubliées.', weights: { qoi: 0.8 } },
      ],
    },
    {
      id: 'magician',
      text: 'Tu deviens magicien·ne pour une journée. Tu…',
      answers: [
        { id: 'library', text: 'Fais apparaître une bibliothèque sans fin.', weights: { epub: 1 } },
        { id: 'brooms', text: 'Ensorcelles des balais pour faire le ménage à ta place.', weights: { py: 0.8 } },
        { id: 'vanish', text: 'Fais disparaître la moitié de tes affaires.', weights: { txt: 1 } },
        { id: 'into-story', text: 'Entres dans ton film ou ton jeu préféré.', weights: { mp4: 0.7, sav: 0.7 } },
        { id: 'repaint', text: 'Repeins la ville aux couleurs de ton choix.', weights: { svg: 0.8 } },
        { id: 'pranks', text: 'Joues des tours à tout le monde.', weights: { gif: 0.8 } },
      ],
    },
    {
      id: 'big-project',
      text: 'Tu te lances dans un gros projet. Tu…',
      answers: [
        { id: 'plan', text: 'Écris un plan détaillé avant de commencer.', weights: { md: 1 } },
        { id: 'progress', text: 'Suis ton avancement en pourcentage.', weights: { csv: 1 } },
        { id: 'dive-in', text: 'Fonces, et tu verras bien en route.', weights: { mp3: 0.6 } },
        { id: 'redo', text: 'Refais chaque étape tant qu’elle n’est pas exactement comme tu veux.', weights: { flac: 0.7, svg: 0.4 } },
        { id: 'persist', text: 'Ne lâches rien, même après une série d’échecs.', weights: { sav: 0.7 } },
        { id: 'next-idea', text: 'Démarres à fond, puis passes à une autre idée.', weights: { qoi: 0.7, mp3: 0.3 } },
        { id: 'minimum', text: 'Fais le strict nécessaire.', weights: { txt: 0.8 } },
      ],
    },
    {
      id: 'first-visit',
      text: 'Tu entres chez quelqu’un pour la première fois. Tu remarques d’abord…',
      answers: [
        { id: 'books', text: 'Sa bibliothèque.', weights: { epub: 1 } },
        { id: 'decor', text: 'La déco, et si les couleurs vont ensemble.', weights: { svg: 0.8 } },
        { id: 'keepsakes', text: 'Les souvenirs posés un peu partout : cartes postales, billets de concert.', weights: { jpg: 0.8 } },
        { id: 'records', text: 'Ses disques.', weights: { flac: 0.6, mp3: 0.5 } },
        { id: 'tv', text: 'La taille de sa télé.', weights: { mp4: 0.6 } },
        { id: 'console', text: 'Sa console, et à quels jeux iel joue.', weights: { sav: 0.8 } },
        { id: 'clutter', text: 'Tous les objets qui traînent.', weights: { txt: 0.6, md: 0.5 } },
      ],
    },
    {
      id: 'favorite-sound',
      text: 'Choisis un son.',
      answers: [
        { id: 'page', text: 'Une page qu’on tourne.', weights: { epub: 0.8 } },
        { id: 'keyboard', text: 'Le cliquetis d’un clavier.', weights: { py: 0.7, sav: 0.4 } },
        { id: 'laughter', text: 'Des éclats de rire entre ami·es.', weights: { gif: 0.6, jpg: 0.5 } },
        { id: 'concert-crowd', text: 'La foule juste avant un concert.', weights: { mp3: 0.7 } },
        { id: 'silence', text: 'Le silence.', weights: { txt: 0.8, epub: 0.3 } },
      ],
    },
    {
      id: 'low-battery',
      text: 'Ton téléphone est à 10 %, et tu ne rentres pas avant ce soir. Tu…',
      answers: [
        { id: 'calculate', text: 'Calcules combien de temps il tiendra si tu fermes tout.', weights: { csv: 0.8, md: 0.3 } },
        { id: 'switch-off', text: 'L’éteins, et profites d’être injoignable.', weights: { txt: 1 } },
        { id: 'charger', text: 'Trouves une solution : une prise, un câble, n’importe quoi.', weights: { py: 0.7 } },
        { id: 'music', text: 'Le gardes pour la musique, le reste attendra.', weights: { mp3: 1 } },
        { id: 'loved-ones', text: 'Le gardes pour pouvoir joindre tes proches.', weights: { jpg: 0.8 } },
        { id: 'paper', text: 'Recopies l’adresse et les horaires sur un papier, au cas où.', weights: { md: 0.8 } },
      ],
    },
    {
      id: 'new-favorite',
      text: 'Tu découvres une série, un album ou un jeu qui te plaît vraiment. Tu…',
      answers: [
        { id: 'tell-everyone', text: 'En parles à tout le monde.', weights: { mp3: 0.7, mp4: 0.4 } },
        { id: 'ranking', text: 'Lui trouves tout de suite sa place dans ton classement perso.', weights: { csv: 0.8 } },
        { id: 'all-night', text: 'Y passes la nuit, d’une traite.', weights: { mp4: 0.6, sav: 0.5 } },
        { id: 'dig', text: 'Fouilles tout : les coulisses, les versions, les détails cachés.', weights: { flac: 0.7, sav: 0.5 } },
      ],
    },
    {
      id: 'wifi-name',
      text: 'Le nom de ton wifi, c’est…',
      answers: [
        { id: 'default', text: 'Celui d’origine, jamais changé.', weights: { txt: 0.8 } },
        { id: 'pun', text: 'Un jeu de mots.', weights: { gif: 0.8 } },
        { id: 'reference', text: 'Une référence à un film ou à un jeu.', weights: { mp4: 0.6, sav: 0.6 } },
      ],
    },
    {
      id: 'group-chat',
      text: 'Dans la conversation de groupe de tes ami·es, tu es la personne qui…',
      answers: [
        { id: 'jokes', text: 'Fait dériver chaque conversation vers une blague.', weights: { gif: 0.8 } },
        { id: 'voice', text: 'Envoie des messages vocaux de cinq minutes.', weights: { mp4: 0.6, gif: 0.3 } },
        { id: 'polls', text: 'Lance des sondages pour décider de tout.', weights: { md: 0.6, csv: 0.6 } },
        { id: 'photos', text: 'Partage les photos de la dernière soirée.', weights: { jpg: 1 } },
        { id: 'lurker', text: 'Lit tout, mais n’écrit presque jamais.', weights: { txt: 0.5, epub: 0.5 } },
        { id: 'links', text: 'Envoie le lien du truc dont tout le monde parlera demain.', weights: { qoi: 0.8, mp3: 0.4 } },
      ],
    },
    {
      id: 'open-tabs',
      text: 'Combien d’onglets as-tu ouverts en ce moment ?',
      answers: [
        { id: 'few', text: 'Deux ou trois, que tu fermes au fur et à mesure.', weights: { txt: 0.8, md: 0.4 } },
        { id: 'grouped', text: 'Une trentaine, bien rangés par groupes.', weights: { md: 0.8 } },
        { id: 'countless', text: 'Trop pour les compter.', weights: { qoi: 0.6, py: 0.4 } },
        { id: 'exact', text: '17. Tu sais toujours exactement combien.', weights: { csv: 0.8 } },
      ],
    },
    {
      id: 'holiday-photos',
      text: 'Sur tes photos de vacances, on voit surtout…',
      answers: [
        { id: 'loved-ones', text: 'Tes proches, au centre de chaque photo.', weights: { jpg: 1 } },
        { id: 'landscapes', text: 'Des paysages parfaitement cadrés.', weights: { svg: 0.8 } },
        { id: 'faces', text: 'Des grimaces, sur presque toutes les photos.', weights: { gif: 0.8 } },
        { id: 'signs', text: 'Les menus, les panneaux et les horaires.', weights: { md: 0.7 } },
        { id: 'few', text: 'Pas grand-chose.', weights: { txt: 0.6 } },
      ],
    },
  ],
};
