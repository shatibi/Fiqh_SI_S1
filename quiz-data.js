
console.log("Chargement des questions...");


const quizData = [
  {
    "question": "Un étudiant en Fiqh affirme que la science de la 'Aqida est principalement déduite de la réponse du Prophète concernant al-Islâm dans le hadith de Jibrîl. Quelle est l'évaluation de cette affirmation selon le cours ?",
    "options": [
      "Elle est correcte, car al-Islâm englobe la croyance.",
      "Elle est incorrecte, car la 'Aqida dérive de la réponse concernant al-Îmân.",
      "Elle est partiellement correcte, car les trois réponses sont sources de toutes les sciences.",
      "Elle est incorrecte, car la 'Aqida n'est pas mentionnée dans ce hadith."
    ],
    "correctAnswer": 1,
    "explanation": "L'affirmation est incorrecte. Dans le hadith de Jibrîl, la réponse concernant al-Islâm (les piliers pratiques) est à l'origine du Fiqh. La réponse concernant al-Îmân (les piliers de la foi) est à l'origine de la 'Aqida."
  },
  {
    "question": "Dans le cadre de la divergence scientifique (ikhtilâf) entre les écoles, un avis émis par un savant malikite sur un cas nouveau est rejeté par un savant hanafite car il ne tient pas compte des 'agissements des gens de Médine'. Cette divergence s'explique principalement par :",
    "options": [
      "Une différence dans l'authenticité d'un hadith utilisé.",
      "Une divergence sur les fondements du droit (Usûl al-Fiqh).",
      "Un changement de contexte socio-économique.",
      "Une ignorance des preuves par l'un des savants."
    ],
    "correctAnswer": 1,
    "explanation": "La divergence porte ici sur un fondement du droit (Usûl). L'école malikite reconnaît le 'fait des gens de Médine' comme source de droit, contrairement aux autres écoles. C'est une divergence méthodologique, et non une ignorance des preuves."
  },
  {
    "question": "L'eau d'une source thermale a une odeur de soufre prononcée et une légère coloration due aux minéraux du sol. Son statut pour la purification (tahâra) est :",
    "options": [
      "Impure (najis), car ses caractéristiques sont altérées.",
      "Pure et purifiante (tahûr), car l'altération provient de son environnement naturel.",
      "Pure mais non purifiante (tâhir), car son odeur a changé.",
      "Makrûh à utiliser, car elle est mélangée à des éléments minéraux."
    ],
    "correctAnswer": 1,
    "explanation": "L'eau reste pure et purifiante si l'altération de ses caractéristiques (couleur, odeur, goût) est causée par son milieu naturel (comme des minéraux dans le sol). Ce n'est pas un mélange avec un élément extérieur."
  },
  {
    "question": "Un récipient en cuivre contenant de l'eau pure est tombé, et une infime quantité de sang (moins qu'un dirham baghlî) y est entrée sans en changer la couleur, l'odeur ou le goût. Cette eau est désormais :",
    "options": [
      "Impure (najis) et son utilisation est interdite.",
      "Pure et purifiante (tahûr), son utilisation est sans problème.",
      "Pure et purifiante (tahûr), mais il est makrûh de l'utiliser pour les ablutions si elle est en petite quantité et qu'une autre eau est disponible.",
      "Pure mais non purifiante (tâhir), elle ne peut servir qu'aux usages domestiques."
    ],
    "correctAnswer": 2,
    "explanation": "Si une eau est mélangée à une impureté mais que ses trois caractéristiques (couleur, odeur, goût) restent inchangées, elle reste pure et purifiante. Cependant, son utilisation pour la purification devient makrûh si elle est en petite quantité (moins de deux qulla) ET qu'une autre eau est disponible."
  },
  {
    "question": "Un boucher musulman, prenant soin de porter un tablier, se retrouve avec de petites taches de sang sur sa manche pendant son travail. Il prie avec ce vêtement. Quel est le statut de sa prière ?",
    "options": [
      "Invalide, car le sang est une impureté et il n'a pas purifié son vêtement.",
      "Valide, car il s'efforce de se préserver et le sang en petite quantité est excusé pour les gens de cette profession.",
      "Valide seulement si le sang provient d'un animal licite et sacrifié correctement.",
      "Invalide, car il aurait dû changer de vêtement ou asperger la zone."
    ],
    "correctAnswer": 1,
    "explanation": "Les impuretés sur les vêtements des personnes travaillant dans des milieux où il est difficile de s'en préserver (médecins, bouchers, éboueurs) sont excusées, à condition qu'ils fassent des efforts raisonnables pour éviter la souillure. Sa prière est donc valide."
  },
  {
    "question": "Après être allé aux toilettes, un homme s'aperçoit qu'une goutte d'urine a touché son pantalon, mais il ne parvient pas à localiser l'endroit précis de la tache, seulement la zone générale (le bas de la jambe). Que doit-il faire pour purifier son vêtement ?",
    "options": [
      "Laver tout le pantalon.",
      "Laver l'ensemble de la zone du bas de la jambe.",
      "Asperger d'eau l'endroit supposé de la tache.",
      "Asperger d'eau l'ensemble de la zone du bas de la jambe."
    ],
    "correctAnswer": 1,
    "explanation": "En cas de certitude d'avoir été touché par une impureté, si seule la zone touchée est déterminée (le bas de la jambe) sans pouvoir préciser l'endroit exact, il est obligatoire de laver l'ensemble de cette zone."
  },
  {
    "question": "Pendant la prière du vendredi (jumu'a), une personne sent une flatulence. Craignant de sortir du temps imparti si elle interrompt sa prière, elle décide de continuer. Quelle est la règle concernant sa prière ?",
    "options": [
      "Elle est valide, car la prière du jumu'a ne peut être rattrapée sous la même forme.",
      "Elle est invalide, car elle aurait dû s'arrêter et refaire ses ablutions.",
      "Elle est valide, mais elle doit refaire ses ablutions et les deux rak'as du jumu'a après la fin du temps.",
      "Elle est invalide, et elle doit rattraper la prière du dhuhr à la place."
    ],
    "correctAnswer": 0,
    "explanation": "Dans le cas d'une prière qui ne peut être rattrapée dans sa forme initiale (comme le jumu'a, la prière de l'Aïd ou la prière funéraire), si un annulatif des ablutions survient et que l'on craint la fin du temps imparti, on continue la prière et celle-ci est valide. C'est une exception."
  },
  {
    "question": "Une femme, après avoir uriné, se nettoie avec du papier toilette (istijmâr) puis, par précaution, se lave également à l'eau (istinjâ'). Quel est le statut juridique de son acte ?",
    "options": [
      "Elle a accompli une obligation (wâjib) et une sunna.",
      "Elle a accompli une obligation et un acte recommandé (mandûb).",
      "Elle a accompli deux actes recommandés (mandûb).",
      "Elle a gaspillé de l'eau, car l'istijmâr seul était suffisant."
    ],
    "correctAnswer": 1,
    "explanation": "Pour la femme, l'istinjâ' (lavage à l'eau) est obligatoire après avoir uriné. L'istijmâr (nettoyage au sec) est permis en dehors des cas où l'istinjâ' est obligatoire. Ici, elle a donc accompli l'obligation (istinjâ') et lié avec un acte permis/recommandé (istijmâr), ce qui est en soi une bonne pratique (mandûb de les lier)."
  },
  {
    "question": "Un homme, après être allé à la selle, constate qu'il n'y a eu aucune propagation autour de l'orifice. Il se contente d'un essuyage avec du papier (istijmâr). Quel est le statut de son acte ?",
    "options": [
      "Ses ablutions sont invalides car il n'a pas fait l'istinjâ'.",
      "Son acte est suffisant et ses ablutions sont valides.",
      "Son acte est suffisant mais makrûh.",
      "Il doit obligatoirement refaire l'istinjâ' avant de prier."
    ],
    "correctAnswer": 1,
    "explanation": "Pour l'homme, après être allé à la selle, l'istinjâ' (lavage à l'eau) n'est obligatoire qu'en cas de propagation. En l'absence de propagation, se contenter de l'istijmâr est permis. Ses ablutions ultérieures seront donc valides."
  },
  {
    "question": "Un homme, après un rêve érotique, se réveille sans trace d'éjaculation mais avec une sensation d'excitation. Il doute d'avoir éjaculé. Quel est le statut de ses ablutions ?",
    "options": [
      "Ses ablutions sont valides, car sans trace visible de maniy, il n'y a pas de janâba.",
      "Ses ablutions sont annulées, car le doute sur l'éjaculation pendant le sommeil équivaut à une certitude.",
      "Il doit inspecter son vêtement et son corps ; s'il ne trouve aucune trace humide, ses ablutions restent valides.",
      "Il doit refaire ses ablutions mineures (wudû') par précaution, mais pas ses grandes ablutions (ghusl)."
    ],
    "correctAnswer": 2,
    "explanation": "Pour établir l'état de janâba suite à un rêve, la présence du liquide séminal (maniy) est une condition. En cas de doute, on recherche les traces (humidité, odeur). Si on n'en trouve aucune, on considère que l'éjaculation n'a pas eu lieu et les ablutions mineures restent valides. Le ghusl n'est pas requis."
  },
  {
    "question": "Une personne, après avoir terminé ses ablutions (wudû'), doute : 'Ai-je bien lavé mon coude droit ?' Elle n'a aucun souvenir visuel précis, mais ses avant-bras sont encore humides. Que doit-elle faire ?",
    "options": [
      "Refaire toutes ses ablutions depuis le début.",
      "Relaver uniquement l'avant-bras droit, car le doute porte sur un membre spécifique.",
      "Continuer, car le doute après les ablutions n'a pas d'effet.",
      "Essuyer à nouveau la zone du coude avec une main mouillée."
    ],
    "correctAnswer": 1,
    "explanation": "Il s'agit d'un doute sur l'accomplissement d'une obligation (lavage du coude). Si le dernier membre lavé (probablement les pieds) n'a pas encore séché, on peut revenir au membre douteux et le laver, puis reprendre la suite (essuyage de la tête et lavage des pieds) si nécessaire. Ici, comme les avant-bras sont encore humides, il est probable que la continuité ne soit pas rompue. Il relave donc l'avant-bras droit et poursuit avec l'essuyage de la tête et le lavage des pieds."
  },
  {
    "question": "Un homme touche le sexe de son jeune fils avec le dos de sa main pour l'aider à s'habiller. Quel est l'impact sur ses ablutions ?",
    "options": [
      "Ses ablutions sont annulées, car toucher le sexe d'autrui annule toujours le wudû'.",
      "Ses ablutions ne sont pas annulées, car le toucher a été fait avec le dos de la main.",
      "Ses ablutions sont annulées seulement si l'enfant est pubère.",
      "Ses ablutions ne sont pas annulées, car il n'y avait aucune intention de plaisir."
    ],
    "correctAnswer": 1,
    "explanation": "L'annulation des ablutions par le toucher du sexe (pour l'homme) concerne spécifiquement le fait de toucher son *propre* sexe avec la paume ou le flanc de la main. Toucher le sexe d'autrui rentre dans la catégorie du 'contact physique' et suit ses règles (intention/sensation de plaisir). Ici, avec le dos de la main et sans intention, les ablutions restent valides."
  },
  {
    "question": "Une femme en état de menstrues légères (spotting) constate un écoulement sanguin uniquement lorsqu'elle va aux toilettes et s'essuie. Durant le reste de la journée, aucune trace n'apparaît sur sa protection. Selon les malikites, comment doit-elle considérer sa journée ?",
    "options": [
      "C'est un jour complet de menstrues, car le sang est présent dans l'utérus.",
      "Ce n'est pas un jour de menstrues, car le sang n'est pas écoulé de façon continue.",
      "C'est un jour de menstrues seulement si l'écoulement a lieu pendant le temps d'une prière.",
      "Elle doit compter comme menstrues uniquement les moments où elle voit le sang à l'extérieur."
    ],
    "correctAnswer": 0,
    "explanation": "Dans l'école malikite, si le sang est présent dans le vagin (même s'il ne s'écoule en dehors qu'à certains moments, comme à la selle ou à l'essuyage), la journée entière est considérée comme un jour de menstrues. La condition est la présence du sang, pas son écoulement permanent."
  },
  {
    "question": "Une femme ayant un cycle menstruel habituel de 7 jours voit ses saignements s'arrêter au 5ème jour, puis reprendre le 8ème jour pour durer encore 4 jours. Comment doit-elle qualifier les saignements du 8ème au 11ème jour ?",
    "options": [
      "Des menstrues, car l'intervalle de pureté a été inférieur à 15 jours.",
      "De la métrorragie (istihâda), car ses menstrues habituelles sont de 7 jours.",
      "Des menstrues, car la durée totale (5+4) n'excède pas 15 jours.",
      "Elle doit observer trois jours (istidhhâr) à partir du 8ème jour avant de statuer."
    ],
    "correctAnswer": 0,
    "explanation": "C'est le cas de la femme 'mulaffaqa' (à écoulement discontinu). Tant que l'intervalle de pureté entre deux écoulements est inférieur à 15 jours, on additionne les jours de saignement. Ici, l'intervalle entre le jour 6 et le jour 8 est de 2 jours (<15). Les saignements des jours 8 à 11 sont donc des menstrues. La durée totale de 9 jours (5+4) reste dans la limite de ses habitudes (7 jours) + 3 jours d'istidhhâr."
  },
  {
    "question": "Une femme atteinte de métrorragie dont les écoulements sont intermittents mais présents pendant moins de la moitié de chaque journée (entre dhuhr et subh suivant). Quelle est la règle pour ses ablutions ?",
    "options": [
      "Elle fait un seul wudû' pour toutes les prières de la journée.",
      "Il lui est obligatoire (wâjib) de refaire le wudû' avant chaque prière obligatoire.",
      "Il lui est seulement recommandé (mandûb) de refaire le wudû' avant chaque prière.",
      "Elle prie avec le tayammum pour plus de facilité."
    ],
    "correctAnswer": 1,
    "explanation": "Si les écoulements (de métrorragie ou d'incontinence) sont réguliers pendant *moins de la moitié* de la journée (définie entre dhuhr et le subh suivant), il lui est *obligatoire* (wâjib) de refaire ses ablutions mineures (wudû') avant chaque prière obligatoire."
  },
  {
    "question": "Une personne effectue le tayammum avec de la terre, prie le dhuhr, puis souhaite prier des sunnas rawâtib (surérogatoires rattachées) avant et après le dhuhr. Avec combien de tayammums peut-elle prier toutes ces prières ?",
    "options": [
      "Un seul tayammum suffit pour le dhuhr obligatoire et toutes ses sunnas.",
      "Elle doit faire un tayammum pour le dhuhr, et un autre pour les sunnas qui le précèdent.",
      "Elle doit faire un tayammum pour le dhuhr, et peut prier les sunnas faites *après* le dhuhr avec le même tayammum.",
      "Elle doit faire un tayammum séparé pour chaque prière, obligatoire ou surérogatoire."
    ],
    "correctAnswer": 2,
    "explanation": "Un tayammum ne permet qu'une *seule* prière obligatoire. On peut prier avec le même tayammum des prières surérogatoires faites *directement après* cette prière obligatoire. Les sunnas *avant* le dhuhr sont priées avant l'obligatoire, elles nécessiteraient donc un tayammum spécifique si on ne veut pas prier l'obligatoire en premier."
  },
  {
    "question": "Un malade, incapable de se laver à l'eau, fait le tayammum et prie le maghrib. Peu après, mais avant al-'ishâ', il trouve une petite quantité d'eau suffisante pour le wudû' mais pas pour le ghusl (s'il en avait besoin). Que doit-il faire ?",
    "options": [
      "Son tayammum est annulé, il doit refaire le wudû' avec l'eau et reprier le maghrib.",
      "Son tayammum n'est pas annulé, car il a déjà prié. Il garde l'eau pour al-'ishâ'.",
      "Il doit utiliser l'eau pour faire le wudû' et reprier le maghrib, car l'eau était disponible avant la prière suivante.",
      "Il peut choisir de conserver son tayammum pour al-'ishâ' ou d'utiliser l'eau, mais le maghrib prié reste valide."
    ],
    "correctAnswer": 3,
    "explanation": "Trouver de l'eau *avant* l'entrée en prière suivante (al-'ishâ') annule la permission du tayammum. Puisqu'il a trouvé de l'eau en quantité suffisante pour le wudû' avant al-'ishâ', il doit l'utiliser. La prière du maghrib qu'il a faite avec le tayammum alors que la cause (absence d'eau) a disparu *avant le temps suivant* est concernée par un avis : il est prudent de la refaire avec le wudû'. L'avis prépondérant dans ce cas est qu'il doit reprier le maghrib avec le wudû'."
  },
  {
    "question": "Selon l'école malikite, une personne résidente porte des khuff (chaussettes en cuir) depuis une semaine. Vendredi arrive, et il fait le ghusl recommandé pour le jumu'a sans retirer ses khuff, en essuyant simplement dessus. Son essuyage est-il toujours valable pour les prières suivantes ?",
    "options": [
      "Non, car le ghusl, même mandûb, a invalidé l'essuyage.",
      "Non, car la durée d'une semaine a dépassé la limite autorisée.",
      "Oui, car les malikites ne fixent pas de durée limite et le ghusl n'invalide pas l'essuyage s'il est seulement mandûb.",
      "Oui, mais uniquement pour les prières du vendredi."
    ],
    "correctAnswer": 0,
    "explanation": "L'un des annulateurs de l'essuyage sur les khuff est la survenue d'un événement qui impose le ghusl (janâba, fin des règles...), même si ce ghusl est fait de façon préventive ou recommandée (comme pour le jumu'a). Dès qu'on fait un ghusl, on doit retirer les khuff. Son essuyage précédent est donc invalidé."
  },
  {
    "question": "Un homme a une blessure au bras recouverte d'un pansement étanche. Pour ses ablutions, il passe sa main mouillée sur le pansement et lave le reste du bras. Plus tard, pendant sa prière, le pansement tombe, révélant une blessure propre mais non lavée. Quel est l'impact sur sa prière ?",
    "options": [
      "Sa prière est valide, car l'essuyage était permis au moment des ablutions.",
      "Sa prière devient invalide à l'instant où le pansement tombe.",
      "Sa prière était invalide dès le début, car il aurait dû laver la blessure si possible.",
      "Il doit rattraper la prière après l'avoir terminée."
    ],
    "correctAnswer": 1,
    "explanation": "Si le pansement (ou la bande) tombe *pendant* la prière, cela invalide la prière en cours, car la condition d'essuyage sur une blessure couverte n'est plus remplie. Il doit arrêter sa prière, remettre le pansement (ou traiter la blessure), refaire ses ablutions et reprendre sa prière depuis le début."
  },
  {
    "question": "Un savant malikite et un savant hanafite analysent le même hadith faible (da'îf) concernant un point de purification. Le malikite l'utilise pour étayer un avis, tandis que le hanafite le rejette. Cette divergence peut s'expliquer principalement par :",
    "options": [
      "Une différence dans la méthodologie d'authentification des chaînes de transmission (ilm al-rijâl).",
      "Un désaccord sur les fondements (usûl) concernant l'utilisation du hadith faible dans les règles pratiques (ahkâm).",
      "Le fait que le savant malikite n'était pas au courant de la faiblesse du hadith.",
      "Une divergence contextuelle due à la géographie des deux savants."
    ],
    "correctAnswer": 1,
    "explanation": "Les écoles divergent sur la valeur probante du hadith faible (da'îf) dans le domaine du fiqh (ahkâm). Certaines écoles, dans des conditions strictes (comme lorsqu'il s'agit d'actes vertueux - fadâ'il), peuvent s'en servir pour un avis recommandé, tandis que d'autres le rejettent catégoriquement pour établir une règle. C'est une divergence de fondements (usûl al-fiqh)."
  },
  {
    "question": "Une femme dont la période habituelle de menstrues est de 6 jours voit l'écoulement s'arrêter au 5ème jour. Elle fait le ghusl et prie. Le 7ème jour, un léger écoulement sanguin réapparaît pendant 2 heures, puis s'arrête à nouveau. Selon l'approche malikite, que doit-elle faire ?",
    "options": [
      "Considérer les 2 heures du 7ème jour comme des menstrues, refaire le ghusl et rattraper les prières du 7ème jour seulement.",
      "Considérer que ses menstrues sont terminées depuis le 5ème jour, et que l'écoulement du 7ème jour est de la métrorragie (istihâda). Elle prie normalement.",
      "Additionner les jours 1 à 5 et le jour 7 pour un total de 6 jours (son habitude), considérer le jour 7 comme menstrues, et refaire le ghusl après. Elle ne rattrape pas les prières des jours 5 et 6.",
      "Observer un délai de pureté de 15 jours après le 5ème jour avant de statuer sur l'écoulement du 7ème jour."
    ],
    "correctAnswer": 2,
    "explanation": "C'est un cas d'écoulement discontinu (mulaffaqa). L'intervalle de pureté entre le jour 6 et le jour 7 est inférieur à 15 jours. On additionne donc les jours de saignement (J1 à J5 + J7 = 6 jours), ce qui correspond exactement à sa durée habituelle. Le jour 7 est donc un jour de menstrues. Elle doit refaire le ghusl après la fin de cet écoulement. Elle ne rattrape pas les prières des jours où elle était en état de pureté supposée (J5 après le premier ghusl, J6 et une partie de J7), car elle agissait selon son effort de réflexion (ijtihâd) basé sur la cessation apparente du sang."
  },
  {
    "question": "Une personne utilise pour ses ablutions de l'eau provenant d'un puits. Plus tard, elle découvre qu'un animal mort se trouvait au fond de ce puits depuis une durée indéterminée, mais que l'eau n'a changé ni de goût, ni d'odeur, ni de couleur. Les ablutions déjà faites avec cette eau sont-elles valides ?",
    "options": [
      "Non, toutes ses prières depuis la contamination sont invalides et doivent être reprises.",
      "Oui, car l'eau reste pure et purifiante tant que ses caractéristiques ne sont pas altérées.",
      "Oui, mais il est makrûh de prier avec ces ablutions. Il doit les refaire si possible.",
      "Non, car l'eau d'un puits contenant une impureté devient toujours impure, indépendamment des caractéristiques."
    ],
    "correctAnswer": 1,
    "explanation": "La règle fondamentale est que si une impureté tombe dans une grande quantité d'eau (comme un puits) et n'en change pas les caractéristiques (couleur, odeur, goût), l'eau reste pure et purifiante (tahûr). Par conséquent, les ablutions et les prières faites avec cette eau sont valides. C'est l'avis majoritaire, y compris malikite."
  },
  {
    "question": "Un homme fait ses ablutions (wudû') en lavant ses pieds. Alors qu'il commence l'essuyage de sa tête, il se rend compte qu'il a oublié de passer entre les orteils de son pied droit. Le pied droit est encore humide. Quelle est la procédure correcte ?",
    "options": [
      "Il recommence toutes ses ablutions depuis le début.",
      "Il passe son doigt entre les orteils du pied droit, puis termine l'essuyage de sa tête. Ses ablutions sont complètes.",
      "Il relave complètement le pied droit (y compris passer entre les orteils), puis termine l'essuyage de sa tête.",
      "Il termine l'essuyage de sa tête, puis relave le pied droit. L'ordre est rompu, il doit tout recommencer."
    ],
    "correctAnswer": 2,
    "explanation": "Passer entre les orteils est une sunna (mandûb), pas une obligation. L'oubli d'une sunna n'invalide pas les ablutions. Il peut donc simplement passer son doigt entre les orteils maintenant, puis terminer l'essuyage de sa tête. Ses ablutions sont valides et complètes. S'il s'agissait d'une obligation (comme laver le talon), la procédure serait différente."
  },
  {
    "question": "Une personne en état de janâba fait le ghusl avec l'intention spécifique de 'lever l'état de janâba pour pouvoir prier'. Plus tard dans la journée, elle souhaite toucher le mushaf. Son ghusl lui permet-il de le faire sans refaire de wudû' ?",
    "options": [
      "Oui, car le ghusl obligatoire inclut et se substitue au wudû'.",
      "Non, car l'intention était limitée à la prière, pas au toucher du mushaf.",
      "Oui, car l'effet du ghusl est général, peu importe l'intention spécifique.",
      "Non, car pour toucher le mushaf, il faut une intention spécifique de purification mineure."
    ],
    "correctAnswer": 0,
    "explanation": "Un ghusl effectué pour une cause obligatoire (comme la janâba) suffit pour tous les actes nécessitant une purification, qu'il s'agisse de la prière, du tawâf ou du toucher du mushaf. Il remplace le wudû'. L'intention de 'lever la janâba' est suffisante, il n'est pas nécessaire de formuler une intention pour chaque acte permis par cette purification."
  },
  {
    "question": "Un voyageur, après avoir fait le tayammum pour le dhuhr, trouve de l'eau pendant le temps du 'asr. Il fait le wudû' avec cette eau et prie le 'asr. Concernant la prière du dhuhr qu'il a faite avec le tayammum :",
    "options": [
      "Elle reste valide, car il était excusé au moment de la prière.",
      "Elle devient invalide et doit être reprise avec le wudû'.",
      "Elle est valide, mais il est mustahabb de la refaire.",
      "Elle est valide seulement si le temps du dhuhr n'est pas encore écoulé."
    ],
    "correctAnswer": 0,
    "explanation": "La validité d'une prière est jugée à son moment d'accomplissement. Au moment de prier le dhuhr, il était dans une cause légale permettant le tayammum (absence d'eau). Sa prière est donc valide. Trouver de l'eau après coup n'invalide pas une prière déjà accomplie correctement. Il n'a pas à la refaire."
  },
  {
    "question": "Lors de l'essuyage sur des chaussettes épaisses en coton (comme autorisé par l'école hanbalite), quelle condition est la plus cruciale pour la validité de cet essuyage, selon les principes généraux évoqués ?",
    "options": [
      "Que la chaussette recouvre la cheville.",
      "Qu'elle ait été mise en état de wudû' complet.",
      "Qu'elle soit suffisamment épaisse pour que l'eau ne la traverse pas lors de l'essuyage.",
      "Qu'on soit en voyage."
    ],
    "correctAnswer": 1,
    "correctAnswerIndex": 1,
    "explanation": "La condition essentielle pour l'essuyage sur un couvre-pied (khuff ou son équivalent), sur laquelle il y a consensus ou grande importance dans les avis qui le permettent, est de l'avoir mis en état de pureté complète (c'est-à-dire après un wudû' valide où les pieds ont été lavés). C'est cette condition qui 'verrouille' l'état de pureté des pieds sous le couvre-pied. L'épaisseur est une condition pour l'assimiler au khuff en cuir, et le voyage est une condition de durée pour certaines écoles, mais pas pour la validité initiale de l'acte d'essuyage."
  },
  {
    "question": "Une personne souffrant d'incontinence urinaire (sahw) a des écoulements constants, jour et nuit, sans aucun moment sec. Quelle est la règle concernant ses ablutions pour les prières ?",
    "options": [
      "Elle fait un wudû' au début de chaque temps de prière et prie immédiatement, malgré les écoulements.",
      "Il ne lui est ni obligatoire ni recommandé de refaire le wudû' pour chaque prière. Un wudû' initial suffit.",
      "Elle doit faire le tayammum pour chaque prière, car l'eau est inefficace.",
      "Elle fait un wudû' pour la première prière, et cet état d'excuse (ma'dhûr) dure 24 heures."
    ],
    "correctAnswer": 1,
    "explanation": "Lorsque les écoulements sont continus et réguliers sur l'ensemble du jour et de la nuit (c'est-à-dire qu'il n'y a pas de période de 'répit' suffisante pour faire une prière), la personne est considérée comme excusée (ma'dhûr) de façon permanente pour cette cause. Dans ce cas, il ne lui est ni obligatoire (wâjib) ni recommandé (mandûb) de refaire ses ablutions pour chaque prière. Un seul wudû', fait avec l'intention d'ôter l'état d'impureté et de permettre la prière, suffit pour toutes les prières, même si l'écoulement reprend immédiatement après."
  },
  {
    "question": "Le Prophète (ﷺ) a dit : 'La purification est la moitié de la foi.' D'après l'explication d'al-Ghazâlî citée dans le cours, quel est le sens le plus profond de cette purification ?",
    "options": [
      "Le fait de garder son corps et ses vêtements toujours propres.",
      "Le lavage rituel qui prépare à la prière.",
      "La purification du cœur de ses vices et son embellissement par les vertus, ce qui constitue le chemin de la foi.",
      "L'accumulation des actes d'adoration pour compenser les péchés."
    ],
    "correctAnswer": 2,
    "explanation": "Al-Ghazâlî explique que la purification représente la moitié de la foi car le chemin de la foi est constitué de deux parties inséparables : 1) Se purifier de toute maladie du cœur (avarice, orgueil, etc.) et 2) Acquérir les vertus nobles (générosité, humilité, etc.). La purification rituelle physique n'est que le premier degré symbolique de ce long chemin vers l'excellence (al-ihsân)."
  },
  {
    "question": "Dans le cas d'une femme en période de lochies (nifâs), le saignement s'arrête au 35ème jour. Elle fait le ghusl et prie. Au 38ème jour, un saignement réapparaît pendant 12 heures. Comment doit-elle qualifier ce saignement ?",
    "options": [
      "C'est la reprise des lochies, car c'est dans la période de 40 jours.",
      "C'est de la métrorragie (istihâda), car les lochies ont une durée maximale de 40 jours et se sont arrêtées.",
      "Ce sont des menstrues (hayd), car un intervalle de pureté de 15 jours s'est écoulé depuis ses dernières règles.",
      "Elle doit observer trois jours (istidhhâr) avant de décider."
    ],
    "correctAnswer": 1,
    "explanation": "La durée maximale des lochies est de 40 jours. Si le sang s'arrête avant ou à cette date, et qu'un intervalle de pureté de 15 jours ou plus s'écoule, tout saignement ultérieur est considéré comme des menstrues. Ici, l'intervalle entre l'arrêt (J35) et la reprise (J38) n'est que de 2 jours, ce qui est inférieur à 15. Cependant, la règle spécifique aux lochies est que si le sang s'arrête avant 40 jours et que la femme se purifie (fait le ghusl), tout saignement qui réapparaît *avant* le 40ème jour est considéré comme la continuation des lochies. Si le saignement réapparaît *après* le 40ème jour, c'est alors des menstrues. Ici, c'est au 38ème jour, donc c'est la continuation des lochies. Elle doit refaire le ghusl après son arrêt définitif."
  },
  {
    "question": "Un homme a la paume de la main gauche coupée (amputée au niveau du poignet). Comment accomplit-il l'obligation de 'laver les mains jusqu'aux coudes' pendant son wudû' ?",
    "options": [
      "Il lave le moignon de son avant-bras gauche jusqu'au coude.",
      "Il passe simplement sa main droite mouillée sur le moignon de son avant-bras gauche.",
      "Il est exempté de laver le membre manquant. Il lave seulement son avant-bras droit normalement.",
      "Il fait le tayammum pour le membre manquant."
    ],
    "correctAnswer": 0,
    "explanation": "Pour les ablutions, on lave les parties du membre qui sont présentes. Si la main est amputée au niveau du poignet, on lave la partie de l'avant-bras qui reste, jusqu'au coude. On ne fait pas de tayammum pour un membre absent ; le tayammum est pour l'incapacité d'utiliser l'eau sur un membre présent."
  },
  {
    "question": "Une personne fait le wudû' dans un lieu où se trouve une impureté sèche sur le sol, mais elle ne la voit pas et ne marche pas dessus. La validité de son wudû' est :",
    "options": [
      "Invalide, car faire le wudû' dans un lieu impur est interdit.",
      "Valide, mais makrûh, car il aurait dû vérifier la pureté du lieu.",
      "Valide, car l'impureté sèche et non en contact avec elle ou l'eau n'affecte pas le wudû'.",
      "Invalide seulement si de l'eau a éclaboussé l'impureté et est retombée sur elle."
    ],
    "correctAnswer": 2,
    "explanation": "La pureté du lieu d'ablutions est une recommandation (mandûb), pas une condition (shart) de validité du wudû'. Tant que l'impureté n'entre pas en contact avec son corps, ses vêtements ou l'eau qu'elle utilise, son wudû' est valide. Le fait que le lieu soit impur en lui-même n'invalide pas l'acte, même si c'est déconseillé."
  },
  {
    "question": "Une femme fait le ghusl après ses menstrues. Pendant le ghusl, alors qu'elle se lave, un reste de sang coagulé sort de son vagin sans écoulement liquide. Quel est l'impact sur son ghusl ?",
    "options": [
      "Son ghusl est invalidé, elle doit recommencer depuis le début.",
      "Son ghusl est valide, mais elle doit simplement laver la zone souillée et continuer.",
      "Son ghusl est valide, car la sortie d'un coagulum solide n'est pas considérée comme un écoulement de sang annulant la pureté.",
      "Elle doit arrêter son ghusl, attendre un moment pour s'assurer que l'écoulement est terminé, puis recommencer."
    ],
    "correctAnswer": 2,
    "explanation": "Pour que le sang invalide la pureté, il faut qu'il s'écoule. La sortie d'un coagulum solide (comme un caillot) n'est pas considérée comme un écoulement (sayalân) et n'annule donc pas les ablutions ou le ghusl en cours. Elle peut simplement l'enlever et poursuivre son ghusl, qui reste valide."
  },
  {
    "question": "Une personne utilise un désinfectant en gel hydroalcoolique sur ses mains, puis fait le tayammum pour prier, car il n'a pas d'eau. Son tayammum est-il valide ?",
    "options": [
      "Oui, car le gel a nettoyé ses mains.",
      "Non, car le tayammum nécessite d'utiliser de la terre (sa'îd) pure, pas un produit chimique.",
      "Oui, car l'effet du gel est similaire à l'eau pour nettoyer.",
      "Non, car la présence du gel sur les mains constitue une barrière (hâjiz) empêchant le contact avec le sa'îd."
    ],
    "correctAnswer": 3,
    "explanation": "Pour que le tayammum soit valide, il faut que les mains soient en contact direct avec le sa'îd (terre, sable, pierre poussiéreuse...). Si une substance comme un gel, une crème grasse ou une peinture forme une barrière (hâjiz) empêchant la poussière de terre d'adhérer à la peau, le tayammum n'est pas valide. Il doit d'abord enlever cette barrière."
  },
  {
    "question": "Concernant l'école malikite, laquelle de ces affirmations sur les sources du droit est correcte ?",
    "options": [
      "Elle donne la priorité absolue au Coran, puis à la Sunna mutawâtira, puis au consensus (ijmâ'), puis à l'analogie (qiyâs).",
      "Elle considère l'intérêt général non cadré par un texte (al-maslaha al-mursala) comme une source indépendante et majeure.",
      "Elle est la seule à rejeter totalement l'usage de l'opinion personnelle raisonnée (istihsân).",
      "Elle rejette la coutume ('urf) comme source de droit, sauf à Médine."
    ],
    "correctAnswer": 1,
    "explanation": "L'école malikite est célèbre pour son recours à l'intérêt général non spécifié (al-maslaha al-mursala) comme source de droit lorsque les textes et le consensus sont silencieux. C'est l'une de ses spécificités méthodologiques. Les autres options sont incorrectes : toutes les écoles donnent la priorité au Coran et à la Sunna ; le malikisme utilise l'istihsân ; et il prend en compte la coutume ('urf) comme facteur modificateur des règles, pas seulement à Médine."
  },
  {
    "question": "Pendant le ramadan, une femme a ses menstrues à l'aube (fajr) après avoir pris son repas (suhûr) avec l'intention de jeûner. Que doit-elle faire ?",
    "options": [
      "Son jeûne du jour qui commence est invalidé. Elle doit le rattraper plus tard.",
      "Son jeûne reste valide, car l'intention était prise avant l'aube.",
      "Elle doit s'abstenir de manger et de boire la journée par respect pour le mois, mais son jeûne n'est pas compté.",
      "Elle peut continuer à jeûner, car les premières heures de menstrues n'invalident pas immédiatement le jeûne."
    ],
    "correctAnswer": 0,
    "explanation": "L'apparition des menstrues, même à l'instant juste après l'aube, invalide le jeûne de la journée entière. Elle ne doit donc pas jeûner ce jour-là (c'est même interdit - harâm), et elle devra le rattraper après le ramadan. L'intention prise avant l'aube est rendue nulle par l'événement invalidant."
  },
  {
    "question": "Un homme fait ses ablutions (wudû') en utilisant un savon liquide pour se laver les mains et le visage. L'eau du robinet est mélangée à ce savon, ce qui lui donne une odeur et une texture savonneuse. Quel est le statut de ces ablutions ?",
    "options": [
      "Elles sont valides, car le savon est un élément pur et l'eau a changé de caractéristique, devenant 'pure mais non purifiante' (tâhir). On ne peut pas faire le wudû' avec.",
      "Elles sont invalides, car on ne peut faire le wudû' qu'avec de l'eau pure (mutlaq).",
      "Elles sont valides, car le changement de caractéristique dû à un élément pur comme le savon n'empêche pas l'eau d'être purifiante selon certains avis marginaux.",
      "Elles sont valides seulement s'il n'avait pas d'autre eau disponible."
    ],
    "correctAnswer": 0,
    "explanation": "L'eau mélangée à un élément pur (savon, farine, etc.) au point que l'une de ses trois caractéristiques (couleur, odeur, goût) change devient 'eau pure mais non purifiante' (mâ' tâhir). Elle peut servir à boire ou laver des objets, mais pas à accomplir la purification rituelle (wudû' ou ghusl). Ses ablutions avec cette eau sont donc invalides. Il doit les refaire avec de l'eau pure (mutlaq)."
  },
  {
    "question": "Une personne atteinte de polyurie (besoin fréquent d'uriner) a un intervalle moyen de 20 minutes entre chaque envie. Elle fait le wudû' et prie immédiatement. Sa prière dure 10 minutes. Selon les principes de l'excuse ('udhr), quel est le statut le plus probable de sa prière ?",
    "options": [
      "La prière est invalide, car elle aurait dû refaire le wudû' juste avant de commencer, sachant que l'envie surviendrait pendant la prière.",
      "La prière est valide, car elle a fait le wudû' et a prié dans l'intervalle où elle était en état de pureté, même si cet intervalle est court.",
      "Elle doit faire le tayammum à la place du wudû', car l'eau est inefficace pour elle.",
      "Elle doit prier en position assise par convenance, mais la prière est valide."
    ],
    "correctAnswer": 1,
    "explanation": "Pour être considéré comme excusé (ma'dhûr), il faut généralement que l'écoulement soit continu ou presque continu, sans intervalle suffisant pour accomplir une prière complète. Ici, elle a un intervalle de 20 minutes, ce qui est suffisant pour faire un wudû' rapide (2 min) et une prière obligatoire (5-10 min). Elle n'est donc pas encore dans la catégorie des excusés permanents. Elle doit faire le wudû' et prier immédiatement. Si elle perd ses ablutions *pendant* la prière, celle-ci reste valide car elle a commencé en état de pureté et la perte était due à une excuse qui a surgi après le début. Sa prière de 10 minutes dans un intervalle de 20 minutes est donc valide."
  },
  {
    "question": "Lors de l'essuyage de la tête pendant le wudû', une femme dont les cheveux sont attachés en un chignon serré avec plusieurs élastiques :",
    "options": [
      "Doit absolument détacher ses cheveux pour essuyer le cuir chevelu.",
      "Peut essuyer par-dessus son chignon si elle passe sa main sur les racines des cheveux à l'avant.",
      "Doit essuyer uniquement les parties de ses cheveux qui sont accessibles sans détacher.",
      "Est exemptée de l'essuyage de la tête et passe directement aux oreilles."
    ],
    "correctAnswer": 0,
    "explanation": "L'obligation est d'essuyer l'ensemble de la tête. Si les cheveux sont attachés de façon à ce qu'une partie significative du cuir chevelu ne puisse être atteinte par l'essuyage (comme un chignon serré avec plusieurs tours d'élastique), il devient obligatoire de détacher les cheveux pour accomplir cette obligation correctement. Un simple passage sur la surface des cheveux attachés ne suffit pas."
  },
  {
    "question": "Un musulman se convertit à l'Islam. Il n'a jamais eu de rapport sexuel, ni d'éjaculation de sa vie. Lui est-il obligatoire de faire le ghusl lors de sa conversion ?",
    "options": [
      "Oui, le ghusl de la conversion est obligatoire pour tout nouveau musulman, sans condition.",
      "Non, le ghusl n'est obligatoire que s'il était en état de janâba avant sa conversion.",
      "Oui, mais un simple wudû' suffit s'il n'a pas d'eau en abondance.",
      "Non, car il n'est pas encore responsable (mukallaf) avant la prononciation de la shahâda."
    ],
    "correctAnswer": 1,
    "explanation": "Le ghusl de la conversion n'est obligatoire que si la personne était dans un état qui, en Islam, nécessite le ghusl (c'est-à-dire en état de janâba). Si elle n'a jamais eu de rapport sexuel ni d'éjaculation, elle n'est pas en état de janâba. Par conséquent, le ghusl n'est pas obligatoire pour elle, même si c'est une bonne pratique. Elle commence par la prononciation de la shahâda et fait le wudû' pour prier."
  },
  {
    "question": "Une personne utilise pour son wudû' de l'eau qui a été utilisée pour ôter une impureté (comme laver un vêtement souillé) mais qui est ensuite restée dans un seau. Cette eau est claire et ses caractéristiques n'ont pas changé. L'utilisation de cette eau pour le wudû' est :",
    "options": [
      "Valide, car l'eau est restée pure et purifiante.",
      "Invalide, car l'eau ayant servi à ôter une impureté devient 'eau usée' (musta'mal) et n'est plus purifiante.",
      "Makrûh, car c'est de l'eau 'détestable' (makrûh) selon les conditions (petite quantité, autre eau disponible).",
      "Valide seulement si elle n'a pas d'autre eau."
    ],
    "correctAnswer": 2,
    "explanation": "L'eau qui a été utilisée pour ôter une impureté (ou pour un wudû' ou ghusl précédent) est appelée 'eau usée' (mâ' musta'mal). Selon l'école malikite et d'autres, cette eau reste pure (tâhir) mais n'est plus purifiante (mutahhir). Il est donc makrûh de l'utiliser pour une nouvelle purification si on a une autre eau disponible et qu'elle est en petite quantité. Si ses caractéristiques avaient changé, elle serait devenue impure."
  },
  {
    "question": "Le 'doute' (ash-shakk) qui oblige à refaire le wudû' avant la prière est précisément défini comme :",
    "options": [
      "Toute sensation ou pensée qui traverse l'esprit sur la possible invalidité des ablutions.",
      "Un doute qui survient après avoir acquis la certitude d'avoir fait ses ablutions, portant sur la survenue possible d'un annulatif depuis.",
      "Un doute égal entre la probabilité d'être en état de pureté et d'être en état d'impureté.",
      "Un doute concernant l'accomplissement correct d'une des obligations du wudû', comme avoir bien lavé un coude."
    ],
    "correctAnswer": 1,
    "explanation": "Le doute qui annule les ablutions et oblige à les refaire est un doute spécifique : il faut avoir la certitude d'avoir été en état de pureté (par exemple, on se souvient clairement avoir fait le wudû'), puis un doute survient sur la survenue d'un événement annulateur (ex: 'Ai-je peut-être pété sans m'en rendre compte ?'). Ce n'est pas un doute vague, ni un doute sur la façon dont on a fait le wudû'. Si on n'a aucun souvenir d'avoir fait le wudû', on est considéré comme étant en état d'impureté, il n'y a pas de 'doute' au sens juridique."
  },
  {
    "question": "Une personne fait le wudû' et prie. Ensuite, elle touche son sexe avec la paume de sa main (ce qui annule le wudû' pour un homme). Elle refait immédiatement le wudû'. Doit-elle reprier la prière qu'elle vient d'accomplir ?",
    "options": [
      "Oui, car elle a perdu ses ablutions après la prière, ce qui invalide rétroactivement la prière.",
      "Non, la prière est valide car elle était en état de pureté au moment de son accomplissement.",
      "Oui, mais seulement si moins de 5 minutes se sont écoulées depuis la fin de la prière.",
      "Non, mais elle doit faire une prosternation de réparation (sajdat as-sahw)."
    ],
    "correctAnswer": 1,
    "explanation": "La validité d'une prière est jugée au moment de son accomplissement. Si les ablutions étaient valides pendant toute la durée de la prière, celle-ci est valide et acceptée. Perdre ses ablutions après la prière n'a aucun impact rétroactif. Elle n'a donc pas à reprier."
  },
  {
    "question": "Le statut de 'l'eau détestable pour la purification' (al-mâ' al-makrûh) s'applique à une eau qui est :",
    "options": [
      "Toujours pure mais dont l'utilisation est déconseillée dans des conditions spécifiques.",
      "Déjà devenue impure mais dont les caractéristiques sont inchangées.",
      "Mélangée à une grande quantité d'élément pur.",
      "Réservée uniquement pour la consommation et non pour le lavage."
    ],
    "correctAnswer": 0,
    "explanation": "L'eau makrûh (détestable à utiliser) est une sous-catégorie de l'eau pure et purifiante. C'est une eau qui, à l'origine, est tahûr, mais dont l'utilisation pour les ablutions est déconseillée (makrûh) sous certaines conditions (ex: eau très chaude au soleil, eau ayant servi à ôter une impureté sans changement de caractéristiques, etc.). Son utilisation reste techniquement valide mais moins méritoire."
  },
  {
    "question": "Dans le cas d'un doute entre deux prières (ex: entre al-maghrib et al-'ishâ' pour quelqu'un qui se réveille la nuit), la règle de base est de :",
    "options": [
      "Ne prier aucune des deux par précaution.",
      "Prier les deux pour s'assurer.",
      "Prier celle dont le temps est le plus probable, avec l'intention de rattraper l'autre si besoin.",
      "Faire des recherches pour déterminer l'heure avant de prier."
    ],
    "correctAnswer": 2,
    "explanation": "C'est une application du principe juridique 'al-yaqîn lâ yazûlu bi-sh-shakk' (la certitude n'est pas levée par le doute). Si on est sûr d'avoir une dette de prière mais qu'on doute entre deux, on prie celle dont on pense le plus probable qu'elle soit due, avec l'intention de s'acquitter de ce qu'on doit à Allah. On peut aussi prier les deux par précaution si on en a la capacité."
  },
  {
    "question": "Une personne fait le tayammum pour al-'asr, puis prie. Avant le coucher du soleil, elle trouve de l'eau. Doit-elle reprier al-'asr avec le wudû' ?",
    "options": [
      "Oui, obligatoirement, car l'eau est disponible avant la fin du temps de la prière.",
      "Non, la prière faite avec le tayammum est valide et suffisante.",
      "Oui, mais seulement si elle prie avant le coucher du soleil.",
      "Non, car le temps de trouver l'eau après la prière n'invalide pas celle-ci."
    ],
    "correctAnswer": 1,
    "explanation": "La prière faite avec le tayammum alors que la cause (absence d'eau) était réelle au moment de la prière est valide. Trouver de l'eau après coup, même pendant le même temps de prière, n'oblige pas à reprier. C'est différent si on trouve de l'eau *avant* d'avoir prié ; dans ce cas, on doit utiliser l'eau."
  },
  {
    "question": "Le principe 'al-mash 'alâ al-jawârib' (essuyage sur les chaussettes) est fondé, entre autres, sur :",
    "options": [
      "Un consensus (ijmâ') des compagnons sans divergence aucune.",
      "Un hadith spécifique et des pratiques de plusieurs compagnons montrant une divergence saine et son acceptation.",
      "Une analogie (qiyâs) avec l'essuyage sur les bandages.",
      "L'intérêt général (maslaha) des voyageurs et des militaires."
    ],
    "correctAnswer": 1,
    "explanation": "La permission d'essuyer sur les chaussettes (qu'elles soient en cuir - khuff - ou en tissu épais selon certains avis) est établie par des hadiths authentiques. De plus, la pratique de plusieurs grands compagnons (comme 'Umar, 'Ali, Ibn 'Abbâs) qui essuyaient sur leurs chaussettes en tissu est rapportée, montrant que c'était une pratique connue et acceptée à leur époque, malgré l'existence d'une divergence à ce sujet. C'est un exemple classique de divergence légitime (ikhtilâf maqbûl) dans les détails de la pratique."
  },
  {
    "question": "La purification 'tahârat al-khabath' (des impuretés matérielles) et 'tahârat al-hadath' (de l'état d'impureté) :",
    "options": [
      "Doivent toujours être faites dans cet ordre : d'abord al-khabath, puis al-hadath.",
      "Sont deux obligations indépendantes qui peuvent être faites dans n'importe quel ordre.",
      "Sont tellement liées que le ghusl les accomplit toujours toutes les deux simultanément.",
      "Nécessitent toujours l'utilisation d'eau, sans exception."
    ],
    "correctAnswer": 0,
    "explanation": "L'ordre logique et souvent recommandé est de purifier d'abord le corps de toute impureté matérielle (al-khabath), puis de procéder à la purification de l'état d'impureté (al-hadath) par le wudû' ou le ghusl. Par exemple, avant de faire le ghusl pour janâba, il est recommandé (mandûb) de laver d'abord les parties souillées par le sperme, puis de faire le ghusl complet. Cependant, si on fait le ghusl directement, il lave à la fois l'impureté et lève l'état, donc les deux sont accomplies."
  },
  {
    "question": "Une femme ayant des saignements continus de métrorragie depuis plus d'un mois, sans cycle discernable, est considérée comme :",
    "options": [
      "Comme une femme en menstrues permanentes, elle ne prie ni ne jeûne.",
      "Comme une femme excusée (ma'dhûra) qui prie et jeûne normalement avec un wudû' pour chaque prière.",
      "Comme une femme pure, elle suit les règles d'une femme non menstruée.",
      "Comme une femme en lochies, avec une durée maximale de 40 jours."
    ],
    "correctAnswer": 1,
    "explanation": "La femme atteinte de métrorragie (istihâda) n'est pas considérée comme en état de menstrues. Elle est 'excusée' (ma'dhûra). Elle doit prier, jeûner, etc. Concernant la purification, elle est régie par les règles de la personne excusée : elle fait un wudû' au début de chaque temps de prière (ou pour chaque prière selon la durée de ses écoulements) et prie, même si les saignements reprennent pendant la prière."
  },
  {
    "question": "Le concept de 'al-dirham al-baghli' est utilisé pour déterminer :",
    "options": [
      "La quantité d'eau minimale pour qu'un bassin soit considéré comme grand (plus de deux qulla).",
      "La quantité de sang excusable sur le corps ou les vêtements pendant la prière.",
      "La durée maximale de l'essuyage sur les khuff pour un résident.",
      "La taille minimale d'une tache d'impureté qui oblige au lavage d'un vêtement."
    ],
    "correctAnswer": 1,
    "explanation": "Al-dirham al-baghli fait référence à une petite mesure approximative (environ la surface du cercle formé en joignant le bout du pouce et de l'index). Elle est utilisée en droit malikite et d'autres pour définir la 'petite quantité' de sang, de pus ou de liquide de brûlure qui est excusée (ma'fûw 'anhu) et n'invalide pas la prière si elle est présente sur le corps ou les vêtements."
  },
  {
    "question": "L'école malikite, concernant l'essuyage sur les chaussettes en coton (jawârib) :",
    "options": [
      "L'autorise sans restriction, au même titre que le khuff.",
      "L'interdit catégoriquement, c'est l'avis de référence.",
      "L'autorise seulement pour le voyageur (musâfir).",
      "L'autorise si les chaussettes sont épaisses et mises en état de wudû'."
    ],
    "correctAnswer": 1,
    "explanation": "L'avis de référence (al-mashhûr) dans l'école malikite est qu'il n'est pas permis d'essuyer sur les chaussettes en tissu (cotton, laine, etc.), seulement sur les khuff en cuir. C'est une des positions distinctives de l'école. Cependant, le cours mentionne que d'autres grands savants et écoles (comme les hanbalites) le permettent sous conditions (épaisseur, mise en état de wudû')."
  },
  {
    "question": "Le hadith 'Les actes ne valent que par les intentions' est fondamental car il établit que :",
    "options": [
      "Seules les actions visibles comptent, l'intention est secondaire.",
      "L'intention est la condition qui distingue l'acte d'adoration ('ibâda) d'une simple habitude ou d'un acte mondain.",
      "On doit toujours verbaliser son intention avant chaque acte.",
      "L'intention peut compenser un acte mal fait ou incomplet."
    ],
    "correctAnswer": 1,
    "explanation": "Ce hadith est un pilier du droit islamique. Il signifie que la valeur et l'acceptation d'un acte devant Allah dépendent de l'intention (niyya) qui l'anime. Sans l'intention sincère de se rapprocher d'Allah, un acte qui a l'apparence d'une adoration (comme la prière, le jeûne) n'est qu'un mouvement physique sans récompense spirituelle. L'intention se formule dans le cœur, pas nécessairement à voix haute."
  },
  {
    "question": "Pour une personne qui a uriné mais doute d'avoir essuyé correctement, refaire l'essuyage est :",
    "options": [
      "Wâjib (obligatoire) par précaution.",
      "Mandûb (recommandé) mais pas obligatoire.",
      "Mubâh (autorisé) si on le souhaite.",
      "Inutile car le doute n'a pas d'effet."
    ],
    "correctAnswer": 1,
    "explanation": "En cas de doute sur l'accomplissement correct de l'essuyage après avoir uriné (surtout pour la femme où c'est obligatoire), il est mandûb (recommandé) de refaire l'essuyage par précaution, mais pas wâjib. L'obligation est remplie par l'acte initial, même s'il y a doute."
  },
  {
    "question": "Faire le ghusl dans l'océan (eau salée) est :",
    "options": [
      "Insuffisant car l'eau salée ne nettoie pas.",
      "Valide à condition de frotter le corps.",
      "Makrûh à cause du sel.",
      "Harâm car on ne peut pas contrôler la pureté de l'eau."
    ],
    "correctAnswer": 1,
    "explanation": "L'eau de mer est pure et purifiante. Faire le ghusl dans l'océan est donc valide, à condition de faire couler l'eau sur tout le corps et de frotter. Il faut aussi veiller à préserver sa pudeur (porter un vêtement léger si possible)."
  },
  {
    "question": "Porter des lentilles de couleur (cosmétiques) pendant le wudû' nécessite :",
    "options": [
      "De les retirer pour laver les yeux.",
      "De passer les mains mouillées sur les paupières fermées.",
      "Rien de spécial, comme les lentilles correctrices.",
      "De faire le tayammum pour les yeux."
    ],
    "correctAnswer": 2,
    "explanation": "Les lentilles de contact cosmétiques ont le même statut que les lentilles correctrices. Elles sont placées sur l'œil, qui n'est pas une surface à laver pendant le wudû'. On lave les paupières et la peau autour. Le wudû' est valide avec."
  },
  {
    "question": "Utiliser de l'eau gazéifiée (pétillante) pour les ablutions est :",
    "options": [
      "Mubâh car c'est de l'eau avec du gaz.",
      "Makrûh car altérée par le gaz.",
      "Harâm car cela ressemble à une boisson.",
      "Valide seulement si le gaz s'est évaporé."
    ],
    "correctAnswer": 1,
    "explanation": "L'eau gazéifiée a changé sa caractéristique (elle contient du dioxyde de carbone dissous qui la rend pétillante). Elle devient donc 'eau pure mais non purifiante' (tâhir) et ne peut être utilisée pour les ablutions. Si on la laisse dégazer jusqu'à ce qu'elle redevienne plate, elle redevient de l'eau pure."
  },
  {
    "question": "Faire le wudû' avec de l'eau qui a été dans un récipient en argent est :",
    "options": [
      "Mubâh car l'argent est pur.",
      "Makrûh car l'argent est un métal précieux.",
      "Harâm car l'argent ne doit pas être utilisé pour les récipients.",
      "Sunna car l'argent a des propriétés antiseptiques."
    ],
    "correctAnswer": 0,
    "explanation": "L'argent est un métal pur. Utiliser un récipient en argent pour l'eau et faire ses ablutions avec cette eau est mubâh (autorisé). Il n'y a pas d'interdiction concernant l'argent pour les récipients (contrairement à l'or qui est interdit pour les hommes)."
  },
  {
    "question": "Pour un homme, se raser la barbe complètement est :",
    "options": [
      "Mubâh (autorisé) sans problème.",
      "Makrûh (déconseillé) selon beaucoup de savants.",
      "Harâm (interdit) car c'est une imitation des femmes.",
      "Sunna (recommandé) pour plus de propreté."
    ],
    "correctAnswer": 1,
    "explanation": "Se raser complètement la barbe est considéré comme makrûh (déconseillé) voire harâm (interdit) selon de nombreux savants, car le Prophète (ﷺ) a ordonné de laisser pousser la barbe et de tailler la moustache. Cela fait partie de la fitra (disposition naturelle). Raser complètement est une imitation des mécréants ou des femmes."
  },
  {
    "question": "Faire le tayammum sur un mur recouvert de papier peint est :",
    "options": [
      "Valide si le papier est mince.",
      "Invalide car ce n'est pas de la terre.",
      "Makrûh mais valide.",
      "Valide seulement si on gratte le papier."
    ],
    "correctAnswer": 1,
    "explanation": "Le papier peint n'est pas considéré comme de la terre (sa'îd). Faire le tayammum dessus n'est pas valide. Il faut trouver une surface terrestre pure : mur en plâtre, en terre, en pierre non vernie, etc."
  },
  {
    "question": "Boire ou manger avec la main gauche sans raison est :",
    "options": [
      "Mubâh (autorisé) si on est gaucher.",
      "Makrûh (déconseillé) selon la sunna.",
      "Harâm (interdit) car c'est l'œuvre de Satan.",
      "Sunna (recommandé) pour équilibrer."
    ],
    "correctAnswer": 1,
    "explanation": "Il est makrûh (déconseillé) de manger ou boire avec la main gauche sans raison valable (comme une incapacité de la main droite), car le Prophète (ﷺ) a recommandé d'utiliser la main droite pour les bonnes actions. Pour les gauchers, certains savants permettent d'utiliser la main gauche."
  },
  {
    "question": "Prier avec des vêtements sur lesquels se trouve l'image d'un être animé (personne, animal) est :",
    "options": [
      "Mubâh (autorisé) si l'image est petite.",
      "Makrûh (déconseillé) mais la prière est valide.",
      "Harâm (interdit) et invalide la prière.",
      "Sunna (recommandé) d'éviter seulement."
    ],
    "correctAnswer": 1,
    "explanation": "Porter des vêtements avec des images d'êtres animés est généralement considéré comme makrûh (déconseillé) car cela peut distraire pendant la prière et contredit l'esprit de simplicité. Cependant, la prière reste valide. Il est préférable d'éviter, surtout si l'image est grande ou sur la poitrine."
  },
  {
    "question": "Faire le wudû' après avoir utilisé des gouttes pour les yeux est :",
    "options": [
      "Obligatoire car le médicament sort de l'œil.",
      "Non nécessaire, le wudû' reste valide.",
      "Recommandé par précaution.",
      "Nécessite de se laver seulement le visage."
    ],
    "correctAnswer": 1,
    "explanation": "L'utilisation de collyre (gouttes pour les yeux) n'annule pas les ablutions. Le liquide qui s'écoule éventuellement de l'œil après l'instillation n'est pas considéré comme une impureté ni comme un hadath. Le wudû' reste valide."
  },
  {
    "question": "Pour une femme, le saignement qui survient après un rapport sexuel (saignement post-coïtal) est :",
    "options": [
      "Considéré comme menstrues si c'est aux dates.",
      "Toujours de la métrorragie (istihâda).",
      "Considéré comme lochies si elle vient d'accoucher.",
      "Nécessite le ghusl mais n'est pas menstrues."
    ],
    "correctAnswer": 1,
    "explanation": "Un saignement qui survient immédiatement après un rapport sexuel (sans lien avec le cycle menstruel) est considéré comme de la métrorragie (istihâda), non comme des menstrues. La femme doit faire le ghusl pour la janâba, puis elle peut prier normalement après l'arrêt du saignement (ou en état d'excuse si cela continue)."
  },
  {
    "question": "Utiliser de l'eau qui a été congelée puis décongelée pour les ablutions est :",
    "options": [
      "Mubâh car c'est de l'eau.",
      "Makrûh car elle a changé d'état.",
      "Harâm car l'eau gelée n'est plus pure.",
      "Sunna en été car fraîche."
    ],
    "correctAnswer": 0,
    "explanation": "L'eau congelée (glace) puis décongelée redevient de l'eau liquide avec les mêmes propriétés. Elle est pure et purifiante. Son utilisation pour les ablutions est mubâh (autorisée)."
  },
  {
    "question": "Faire le tayammum alors qu'on a de l'eau mais qu'on craint le vol si on l'utilise (en voyage dangereux) est :",
    "options": [
      "Harâm car on a de l'eau.",
      "Permis (mubâh) car c'est une situation de nécessité.",
      "Wâjib d'utiliser l'eau malgré le risque.",
      "Makrûh de faire le tayammum."
    ],
    "correctAnswer": 1,
    "explanation": "Si utiliser l'eau expose à un danger (comme le vol, l'agression, ou la soif ultérieure en milieu désertique), on peut faire le tayammum. C'est considéré comme une situation de nécessité (darûra) qui lève l'obligation d'utiliser l'eau."
  },
  {
    "question": "Porter un bandeau (pour les cheveux) pendant le wudû' pour une femme :",
    "options": [
      "Oblige à le retirer pour essuyer la tête.",
      "Permet d'essuyer par-dessus le bandeau.",
      "Exempte de l'essuyage de la tête.",
      "Nécessite d'essuyer seulement le front."
    ],
    "correctAnswer": 0,
    "explanation": "Pour l'essuyage de la tête, il faut passer les mains mouillées sur le cuir chevelu ou les cheveux. Un bandeau qui couvre une partie du cuir chevelu doit être retiré ou soulevé pour pouvoir essuyer la tête correctement. On ne peut pas essuyer sur le bandeau comme on essuie sur un pansement."
  },
  {
    "question": "Utiliser de l'eau d'un étang où nagent des canards (oiseaux) pour les ablutions est :",
    "options": [
      "Mubâh car les oiseaux sont purs.",
      "Makrûh car l'eau est mélangée à leurs déjections.",
      "Harâm car les déjections sont impures.",
      "Valide seulement si l'eau est claire."
    ],
    "correctAnswer": 1,
    "explanation": "Les déjections des oiseaux (qui n'ont pas de sang qui coule, comme les canards) sont pures selon la majorité des savants. Donc l'eau d'un étang où nagent des canards reste pure et purifiante, même si elle contient leurs déjections, à condition que celles-ci ne changent pas les caractéristiques de l'eau de manière significative."
  },
  {
    "question": "Faire le ghusl après avoir été contaminé par une impureté (comme tomber dans des égouts) est :",
    "options": [
      "Wâjib (obligatoire) même sans janâba.",
      "Mandûb (recommandé) pour la propreté.",
      "Mubâh (autorisé) si on veut.",
      "Non nécessaire, un simple lavage suffit."
    ],
    "correctAnswer": 0,
    "explanation": "Si une personne est souillée par une impureté importante (comme tomber dans des égouts, être éclaboussée de sang, etc.), il lui est obligatoire (wâjib) de faire le ghusl pour se purifier, même si elle n'est pas en état de janâba. Ce ghusl est pour la purification de l'impureté matérielle (khabath), non du hadath."
  },
  {
    "question": "Prier avec des chaussures qui ont marché dans la rue (où il peut y avoir des impuretés) est :",
    "options": [
      "Invalide par précaution.",
      "Valide car on suppose la pureté.",
      "Makrûh mais valide.",
      "Valide seulement si on essuie les semelles."
    ],
    "correctAnswer": 1,
    "explanation": "On part du principe que les rues et les sols sont purs, sauf preuve du contraire. Donc prier avec des chaussures qui ont marché dans la rue est permis, à moins qu'on soit certain qu'elles ont marché sur une impureté. Dans le doute, on considère qu'elles sont pures."
  },
  {
    "question": "Utiliser du savon liquide antibactérien pour les ablutions :",
    "options": [
      "Est recommandé pour une meilleure purification.",
      "Rend l'eau non purifiante si elle devient savonneuse.",
      "Est obligatoire en période d'épidémie.",
      "N'a aucun impact, comme un savon normal."
    ],
    "correctAnswer": 1,
    "explanation": "Comme tout savon, s'il est utilisé en quantité telle que l'eau devient savonneuse (change de caractéristique), cette eau n'est plus 'eau pure' (mutlaq) mais 'eau mélangée' (mudhâf). Elle ne peut plus servir aux ablutions. Il faut bien rincer après usage du savon."
  },
  {
    "question": "Faire le wudû' avec de l'eau qui a été dans un récipient en or (pour une femme) est :",
    "options": [
      "Mubâh car l'or est permis aux femmes.",
      "Makrûh car l'or est un luxe.",
      "Harâm car l'or ne doit pas être utilisé pour les récipients.",
      "Sunna pour les femmes riches."
    ],
    "correctAnswer": 2,
    "explanation": "Utiliser des récipients en or ou en argent pour manger ou boire est harâm (interdit) pour les hommes et les femmes, selon un hadith authentique. Par conséquent, utiliser de l'eau qui a été dans un récipient en or pour les ablutions est problématique. Il vaut mieux éviter."
  },
  {
    "question": "Pour un homme, uriner en position assise est :",
    "options": [
      "Obligatoire (wâjib) selon certains savants.",
      "Recommandé (mandûb) car plus propre.",
      "Déconseillé (makrûh) car c'est une position de femme.",
      "Autorisé (mubâh) sans préférence."
    ],
    "correctAnswer": 1,
    "explanation": "Uriner en position assise est recommandé (mandûb) pour les hommes, car cela prévient mieux les éclaboussures d'urine. Le Prophète (ﷺ) le faisait souvent. Uriner debout est permis mais déconseillé (makrûh) sauf nécessité."
  },
  {
    "question": "Faire le tayammum sur du béton (ciment) non peint est :",
    "options": [
      "Valide car le ciment est de la terre cuite.",
      "Invalide car ce n'est pas de la terre naturelle.",
      "Makrûh mais valide.",
      "Valide seulement s'il y a de la poussière."
    ],
    "correctAnswer": 0,
    "explanation": "Le béton (ciment) est fait à base de terre (calcaire, argile) et est considéré comme une surface terrestre pure (sa'îd). Faire le tayammum sur un mur ou un sol en béton non peint est donc valide."
  },
  {
    "question": "Prier avec des vêtements empruntés dont on ignore s'ils sont purs ou impurs est :",
    "options": [
      "Invalide par précaution.",
      "Valide car on suit le principe de pureté.",
      "Makrûh mais valide.",
      "Valide seulement si on les lave d'abord."
    ],
    "correctAnswer": 1,
    "explanation": "Le principe de base (al-asl) concernant les vêtements et les objets est la pureté (at-tahâra). Si on emprunte des vêtements et qu'on n'a aucune indication qu'ils sont impurs, on les considère comme purs. La prière avec est valide."
  },
  {
    "question": "Utiliser de l'eau de Zamzam pour les ablutions est :",
    "options": [
      "Mubâh (autorisé) comme toute eau pure.",
      "Makrûh (déconseillé) car c'est une eau bénie à boire.",
      "Harâm (interdit) de la gaspiller pour les ablutions.",
      "Sunna (recommandé) pour obtenir des bénédictions."
    ],
    "correctAnswer": 0,
    "explanation": "L'eau de Zamzam est une eau pure et purifiante. Il est permis de l'utiliser pour les ablutions. Cependant, par respect pour cette eau bénie, certains savants recommandent de la réserver principalement à la boisson et aux invocations, surtout si on est en dehors de La Mecque et qu'on en a peu."
  },
  {
    "question": "Faire le wudû' après avoir donné son sang (don de sang) est :",
    "options": [
      "Obligatoire car le sang est sorti.",
      "Non nécessaire, le wudû' reste valide.",
      "Recommandé par précaution.",
      "Nécessite seulement de laver la zone de ponction."
    ],
    "correctAnswer": 1,
    "explanation": "Le don de sang (prélèvement veineux) n'annule pas les ablutions, car ce n'est pas un saignement spontané dû à une maladie ou blessure. C'est un prélèvement médical. Le wudû' reste valide après un don de sang."
  },
  {
    "question": "Pour une femme, utiliser un tampon hygiénique pendant les menstrues :",
    "options": [
      "Est harâm car cela retient le sang à l'intérieur.",
      "Est makrûh mais permis.",
      "Est mubâh (autorisé) si elle préfère.",
      "Est obligatoire pour plus de propreté."
    ],
    "correctAnswer": 2,
    "explanation": "L'utilisation de tampons hygiéniques est permise (mubâh) pour les femmes pendant leurs menstrues. Il n'y a pas d'interdiction religieuse à cela. Certains savants émettent des réserves si cela cause des difficultés pour vérifier l'arrêt du saignement, mais ce n'est pas une interdiction."
  },
  {
    "question": "Faire le ghusl avec de l'eau parfumée au musc (très cher) est :",
    "options": [
      "Recommandé (mandûb) car le musc est aimé.",
      "Déconseillé (makrûh) car gaspillage d'un parfum cher.",
      "Interdit (harâm) car le musc est trop luxueux.",
      "Autorisé (mubâh) sans problème."
    ],
    "correctAnswer": 1,
    "explanation": "Utiliser de l'eau parfumée avec du musc ou d'autres parfums chers pour le ghusl est généralement considéré comme makrûh (déconseillé) car c'est un gaspillage (isrâf) d'un bien précieux. Le ghusl peut se faire avec de l'eau simple."
  },
  {
    "question": "Prier avec une bague qui a une petite pierre incrustée sur laquelle on pose le front pendant la prosternation est :",
    "options": [
      "Invalide la prosternation.",
      "Valide, mais il vaut mieux l'enlever.",
      "Recommandé car la pierre est dure.",
      "Obligatoire d'avoir une bague plate."
    ],
    "correctAnswer": 1,
    "explanation": "Prosterner sur une petite pierre incrustée dans une bague (si elle est sur le doigt qui touche le sol) n'invalide pas la prière, car la surface de prosternation principale est le front. Cependant, il est préférable (mandûb) d'enlever les bagues avec des reliefs pour une prosternation plus stable et humble."
  },
  {
    "question": "Utiliser de l'eau qui a été dans un récipient touché par un chien est :",
    "options": [
      "Impure (najis) et ne peut être utilisée.",
      "Pure mais makrûh à utiliser.",
      "Pure et purifiante sans problème.",
      "Pure seulement si le récipient a été lavé 7 fois."
    ],
    "correctAnswer": 1,
    "explanation": "Selon l'école malikite, le chien et sa salive sont purs (contrairement à d'autres écoles). Donc l'eau dans un récipient touché ou lapé par un chien reste pure et purifiante selon eux. Selon les autres écoles, il faudrait laver le récipient 7 fois dont une avec de la terre."
  },
  {
    "question": "Faire le tayammum quand on a de l'eau mais qu'il fait si froid qu'elle est gelée est :",
    "options": [
      "Harâm car on peut la faire fondre.",
      "Permis (mubâh) car l'eau n'est pas utilisable sous forme solide.",
      "Wâjib d'attendre qu'elle dégèle.",
      "Makrûh de faire le tayammum."
    ],
    "correctAnswer": 1,
    "explanation": "Si l'eau est gelée (glace) et qu'on ne peut pas la faire fondre facilement (pas de feu, pas de chauffage), elle n'est pas 'utilisable' pour les ablutions. On peut alors faire le tayammum. C'est une situation d'incapacité d'utilisation."
  },
  {
    "question": "Pour un homme, se parfumer avec un parfum contenant de l'ambre gris (provenant de baleine) est :",
    "options": [
      "Mubâh car l'ambre gris est pur.",
      "Makrûh car d'origine animale marine.",
      "Harâm car la baleine n'est pas halal.",
      "Sunna car c'est un bon parfum."
    ],
    "correctAnswer": 0,
    "explanation": "L'ambre gris est une sécrétion intestinale de cachalot, qui est un animal marin. Les animaux marins sont généralement considérés comme purs et licites (sauf s'ils sont nocifs). L'ambre gris est donc pur et son utilisation dans les parfums est mubâh (autorisée)."
  },
  {
    "question": "Prier avec une montre connectée (smartwatch) au poignet est :",
    "options": [
      "Invalide la prière car c'est une distraction.",
      "Valide, mais il vaut mieux l'enlever.",
      "Recommandé pour voir l'heure de la prière.",
      "Obligatoire de l'éteindre pendant la prière."
    ],
    "correctAnswer": 1,
    "explanation": "Porter une montre connectée pendant la prière n'invalide pas celle-ci. Cependant, il est préférable (mandûb) d'enlever tout ce qui peut distraire (montres, téléphones, bijoux voyants) pour se concentrer pleinement sur la prière. Si elle émet des notifications, il vaut mieux la mettre en mode silencieux ou l'enlever."
  },
  {
    "question": "Faire le wudû' après s'être fait faire une prise de sang (analyse) est :",
    "options": [
      "Obligatoire car le sang est sorti.",
      "Non nécessaire, le wudû' reste valide.",
      "Recommandé par précaution.",
      "Nécessite seulement de laver la zone de ponction."
    ],
    "correctAnswer": 1,
    "explanation": "Une prise de sang médicale (avec une aiguille) n'annule pas les ablutions, car ce n'est pas un saignement spontané (hadath). C'est une extraction externe. Le wudû' reste valide. Il faut simplement nettoyer la zone si du sang a coulé (impureté)."
  },
  {
    "question": "Utiliser de l'eau d'un puits où un rat mort a été trouvé (et retiré) est :",
    "options": [
      "Impure et ne peut être utilisée.",
      "Pure si l'eau n'a pas changé de caractéristiques.",
      "Pure seulement après avoir vidé une grande quantité.",
      "Makrûh à utiliser même si pure."
    ],
    "correctAnswer": 1,
    "explanation": "Si un animal mort (rat) tombe dans un puits et en est retiré, l'eau reste pure si ses caractéristiques (couleur, odeur, goût) n'ont pas changé, car la quantité d'eau dans un puits est généralement grande (plus de deux qulla). Si les caractéristiques ont changé, elle devient impure."
  },
  {
    "question": "Faire le tayammum sur de la neige propre est :",
    "options": [
      "Valide car la neige est de l'eau solide.",
      "Invalide car il faut de la terre ou poussière.",
      "Makrûh mais valide.",
      "Valide seulement si on la fait fondre d'abord."
    ],
    "correctAnswer": 1,
    "explanation": "Le tayammum nécessite d'utiliser de la terre ou une surface terrestre poussiéreuse (sa'îd). La neige, même si elle vient du ciel, n'est pas considérée comme de la terre. Faire le tayammum directement sur de la neige n'est pas valide. Il faut trouver de la terre ou un mur."
  },
  {
    "question": "Pour une femme, se teindre les cheveux en rouge pendant les menstrues est :",
    "options": [
      "Harâm car embellissement en état d'impureté.",
      "Makrûh mais permis.",
      "Mubâh (autorisé) sans restriction.",
      "Sunna pour se sentir mieux."
    ],
    "correctAnswer": 2,
    "explanation": "Il est mubâh (autorisé) pour une femme en menstrues de se teindre les cheveux, de se coiffer, de s'embellir. Les menstrues n'interdisent pas les soins de beauté. Seules les activités d'adoration spécifiques sont restreintes."
  },
  {
    "question": "Prier avec des chaussettes trouées laissant apparaître moins d'un tiers du pied est :",
    "options": [
      "Invalide la prière car le pied n'est pas couvert.",
      "Valide, l'essuyage sur les chaussettes reste possible.",
      "Valide seulement si on ne fait pas l'essuyage.",
      "Makrûh mais valide."
    ],
    "correctAnswer": 1,
    "explanation": "Pour l'essuyage sur les khuff (ou chaussettes selon les avis qui le permettent), un petit trou (laissant apparaître moins d'un tiers du pied) n'invalide pas l'essuyage. On peut donc prier avec. Si le trou est plus grand (un tiers ou plus), l'essuyage n'est plus valide selon certains savants."
  },
  {
    "question": "Utiliser de l'eau d'un fleuve qui traverse une ville où des égouts s'y déversent est :",
    "options": [
      "Impure car contaminée.",
      "Pure si l'eau n'a pas changé de caractéristiques.",
      "Pure seulement en amont de la ville.",
      "Makrûh à utiliser même si pure."
    ],
    "correctAnswer": 1,
    "explanation": "Si l'eau d'un fleuve est en grande quantité (débit important) et que les égouts qui s'y déversent ne changent pas ses caractéristiques (couleur, odeur, goût) de manière perceptible, elle reste pure et purifiante selon le principe de la grande quantité qui 'absorbe' l'impureté. Sinon, elle devient impure."
  },
  {
    "question": "Faire le ghusl dans une baignoire où l'eau stagne (bain) est :",
    "options": [
      "Insuffisant car l'eau ne coule pas.",
      "Valide à condition de s'immerger et frotter.",
      "Makrûh car l'eau est stagnante.",
      "Harâm car cela ressemble aux bains romains."
    ],
    "correctAnswer": 1,
    "explanation": "Faire le ghusl dans une baignoire (bain) est valide, à condition de bien se frotter le corps et de s'assurer que l'eau atteint toutes les parties. Il n'est pas nécessaire que l'eau coule en continu (comme sous la douche). L'immersion complète dans l'eau propre est suffisante."
  },
  {
    "question": "Pour un homme, porter une alliance en platine est :",
    "options": [
      "Mubâh car le platine n'est pas de l'or.",
      "Makrûh car c'est un métal précieux comme l'or.",
      "Harâm car cela ressemble à l'or.",
      "Sunna si on ne peut pas porter d'argent."
    ],
    "correctAnswer": 0,
    "explanation": "Le platine est un métal précieux différent de l'or. L'interdiction pour les hommes concerne spécifiquement l'or. Porter du platine est donc mubâh (autorisé), selon la majorité des savants. Certains le déconseillent par précaution s'il ressemble trop à l'or."
  },
  {
    "question": "Faire le tayammum alors qu'on a de l'eau mais qu'on est en prison et qu'on n'a pas le droit de l'utiliser pour les ablutions est :",
    "options": [
      "Harâm car on a de l'eau.",
      "Permis (mubâh) car contraint.",
      "Wâjib de négocier avec les gardiens.",
      "Makrûh de faire le tayammum."
    ],
    "correctAnswer": 1,
    "explanation": "Si on a de l'eau mais qu'on est empêché de l'utiliser (par une contrainte extérieure comme une interdiction en prison, ou une menace), on peut faire le tayammum. C'est une situation de contrainte (ikrâh) qui lève l'obligation d'utiliser l'eau."
  },
  {
    "question": "L'utilisation de l'eau chaude chauffée au soleil (sans feu) pour les ablutions est considérée comme :",
    "options": [
      "Wâjib (obligatoire) lorsqu'il fait froid.",
      "Sunna (tradition prophétique) pour un meilleur nettoyage.",
      "Mandûb (recommandé) car elle est plus efficace.",
      "Makrûh (déconseillée) selon certains avis, sans être harâm."
    ],
    "correctAnswer": 3,
    "explanation": "Certains savants considèrent l'eau chauffée au soleil (sans utilisation de feu) comme makrûh pour les ablutions, surtout pour les personnes souffrant de certaines maladies (comme la lèpre), par précaution. Pour d'autres, c'est simplement mubâh. Ce n'est ni obligatoire ni spécifiquement recommandé par la Sunna."
  },
  {
    "question": "Faire ses ablutions dans un endroit où il y a une impureté sèche au sol, sans marcher dessus, est :",
    "options": [
      "Harâm (interdit) et invalide les ablutions.",
      "Wâjib (obligatoire) si on n'a pas d'autre endroit.",
      "Makrûh (déconseillé), mais les ablutions restent valides.",
      "Mubâh (autorisé) sans aucun inconvénient."
    ],
    "correctAnswer": 2,
    "explanation": "Il est makrûh de faire ses ablutions dans un lieu où se trouve une impureté, même sèche. Cependant, si l'impureté n'entre pas en contact avec l'eau ou le corps, les ablutions restent valides (sahîh). L'acte est simplement déconseillé."
  },
  {
    "question": "Pour une personne souffrant d'incontinence urinaire constante (pas d'intervalle sec), refaire le wudû' pour chaque prière est :",
    "options": [
      "Wâjib (obligatoire) avant chaque prière.",
      "Mandûb (recommandé) mais pas obligatoire.",
      "Mubâh (autorisé) si elle le souhaite.",
      "Makrûh (déconseillé) car c'est inutile."
    ],
    "correctAnswer": 1,
    "explanation": "Lorsque les écoulements sont continus (sans intervalle sec permettant une prière complète), la personne devient 'ma'dhûr' (excusée). Dans cet état, il n'est ni wâjib ni mandûb de refaire le wudû' pour chaque prière. Un seul wudû' fait avec l'intention de lever l'état d'impureté suffit pour toutes les prières."
  },
  {
    "question": "Toucher le mushaf (Coran en arabe) sans ablutions pour une personne en état de petite impureté est :",
    "options": [
      "Mubâh (autorisé) s'il s'agit d'une traduction.",
      "Makrûh (déconseillé) mais pas harâm.",
      "Harâm (interdit) selon le consensus.",
      "Wâjib (obligatoire) pour l'étudiant en sciences religieuses."
    ],
    "correctAnswer": 2,
    "explanation": "Toucher directement le mushaf (le livre contenant le Coran en arabe) sans être en état de pureté mineure (wudû') est considéré comme harâm (interdit) selon la majorité des savants, basé sur le verset 'Ne le touchent que les purifiés' (56:79). C'est une règle établie par consensus."
  },
  {
    "question": "Réciter le Coran par cœur en état de janâba (grande impureté) est :",
    "options": [
      "Wâjib (obligatoire) si on a peur d'oublier.",
      "Mandûb (recommandé) pour ne pas rompre l'habitude.",
      "Makrûh (déconseillé) mais pas harâm.",
      "Harâm (interdit) sauf quelques versets dans les invocations."
    ],
    "correctAnswer": 3,
    "explanation": "Il est harâm de réciter le Coran (même par cœur) en état de janâba selon la majorité des savants. Cependant, il est permis de réciter quelques versets courts dans le cadre d'invocations spécifiques (comme avant de dormir, les invocations du matin et du soir)."
  },
  {
    "question": "Pour une femme en période de menstrues, étudier le Tafsir (exégèse du Coran) à partir d'un livre qui contient des versets coraniques est :",
    "options": [
      "Harâm (interdit) car cela implique le Coran.",
      "Mubâh (autorisé) car ce n'est pas le mushaf lui-même.",
      "Wâjib (obligatoire) si c'est pour un examen.",
      "Makrûh (déconseillé) mais permis en cas de nécessité."
    ],
    "correctAnswer": 1,
    "explanation": "Étudier le Tafsir à partir d'un livre qui contient des versets coraniques mélangés à l'exégèse n'est pas considéré comme 'toucher le mushaf'. Tant qu'elle ne touche pas directement les pages d'un Coran complet (mushaf), c'est permis. L'interdiction concerne spécifiquement le toucher du mushaf."
  },
  {
    "question": "Laver chaque membre trois fois pendant le wudû' est :",
    "options": [
      "Wâjib (obligatoire) pour tous les membres.",
      "Sunna mu'akkada (tradition fortement recommandée).",
      "Mandûb (recommandé) mais peut devenir wâjib.",
      "Mubâh (autorisé) sans mérite particulier."
    ],
    "correctAnswer": 2,
    "explanation": "Laver chaque membre trois fois est mandûb (recommandé). Cependant, si un seul lavage ne suffit pas à nettoyer complètement le membre, le deuxième lavage devient wâjib. Si deux lavages ne suffisent pas, le troisième devient wâjib. Donc c'est mandûb qui peut passer au statut de wâjib selon la nécessité."
  },
  {
    "question": "Passer la main entre les doigts de pied pendant le wudû' est :",
    "options": [
      "Wâjib (obligatoire) pour les hommes et les femmes.",
      "Sunna (tradition prophétique) pour les hommes seulement.",
      "Mandûb (recommandé) pour tous.",
      "Makrûh (déconseillé) car cela gaspille l'eau."
    ],
    "correctAnswer": 2,
    "explanation": "Passer le petit doigt entre les orteils pendant le lavage des pieds est mandûb (recommandé), c'est une des mandûbât du wudû'. Ce n'est pas une obligation (wâjib)."
  },
  {
    "question": "Utiliser le siwâk (brosse à dents naturelle) pendant le wudû' est :",
    "options": [
      "Wâjib (obligatoire) à chaque wudû'.",
      "Sunna mu'akkada (fortement recommandée) spécifique au wudû'.",
      "Mandûb (recommandé) surtout lors du premier rinçage.",
      "Mubâh (autorisé) sans mérite particulier."
    ],
    "correctAnswer": 2,
    "explanation": "L'utilisation du siwâk est mandûb (recommandée) pendant le wudû', particulièrement lors du premier rinçage de la bouche (madmada). C'est une sunna du Prophète (ﷺ) mais pas une obligation."
  },
  {
    "question": "Se rincer la bouche (madmada) et aspirer l'eau par le nez (istinshâq) pendant le wudû' sont :",
    "options": [
      "Wâjib (obligatoire) tous les deux.",
      "Sunna (tradition prophétique) tous les deux.",
      "L'un est wâjib, l'autre sunna.",
      "Mandûb (recommandé) mais pas sunna."
    ],
    "correctAnswer": 1,
    "explanation": "Le rinçage de la bouche (madmada) et l'aspiration d'eau par le nez (istinshâq) font partie des sunan (traditions) du wudû', pas des obligations (wâjib). Ce sont des actes recommandés dont l'omission n'invalide pas les ablutions."
  },
  {
    "question": "Pour un homme, toucher son sexe avec le dos de la main annule-t-il le wudû' ?",
    "options": [
      "Oui, c'est wâjib de refaire le wudû'.",
      "Non, cela n'annule pas le wudû'.",
      "Cela annule le wudû' seulement si c'est fait avec plaisir.",
      "Cela rend le wudû' makrûh mais pas invalidé."
    ],
    "correctAnswer": 1,
    "explanation": "Selon l'école malikite et d'autres, pour qu'un homme annule son wudû' en touchant son sexe, il faut que ce soit avec la paume de la main ou le flanc des doigts. Toucher avec le dos de la main n'annule pas les ablutions."
  },
  {
    "question": "Douter d'avoir fait ses ablutions alors qu'on est certain d'avoir été en état d'impureté avant, oblige à :",
    "options": [
      "Considérer qu'on est en état de pureté (principe de base).",
      "Refaire les ablutions par précaution (wâjib).",
      "Prier quand même, le doute n'a pas d'effet.",
      "Faire le tayammum à la place."
    ],
    "correctAnswer": 1,
    "explanation": "Si on est certain d'avoir été en état d'impureté (hadath) et qu'on doute d'avoir fait les ablutions depuis, on est considéré comme toujours en état d'impureté. Le principe de base (al-asl) est la continuité de l'état précédent (l'impureté). Il est donc wâjib de refaire les ablutions."
  },
  {
    "question": "Douter d'avoir perdu ses ablutions alors qu'on est certain de les avoir faites, oblige à :",
    "options": [
      "Considérer qu'on est toujours en état de pureté.",
      "Refaire les ablutions par précaution.",
      "Faire une prosternation de doute après la prière.",
      "Attendre jusqu'à ce que le doute disparaisse."
    ],
    "correctAnswer": 0,
    "explanation": "Si on est certain d'avoir fait ses ablutions et qu'un doute survient sur leur possible annulation, on reste sur la certitude (la pureté). Le principe est 'al-yaqîn lâ yazûlu bi-sh-shakk' (la certitude n'est pas levée par le doute). On ne refait pas les ablutions."
  },
  {
    "question": "Pour une personne atteinte de flatulences chroniques (sans contrôle), faire le wudû' et prier immédiatement est :",
    "options": [
      "Inutile car les ablutions seront immédiatement annulées.",
      "Wâjib (obligatoire) avant chaque prière.",
      "Mandûb (recommandé) mais pas obligatoire.",
      "Suffisant même si les flatulences reprennent pendant la prière."
    ],
    "correctAnswer": 3,
    "explanation": "Pour la personne souffrant d'incontinence de gaz (dawsâr), si les flatulences sont continues sans intervalle suffisant pour une prière, elle est considérée comme excusée (ma'dhûr). Elle fait le wudû', prie immédiatement, et sa prière est valide même si les flatulences reprennent pendant celle-ci, car elle a commencé en état de pureté."
  },
  {
    "question": "Utiliser de l'eau en grande quantité pour les ablutions sans nécessité est :",
    "options": [
      "Mandûb (recommandé) car c'est signe de générosité.",
      "Makrûh (déconseillé) car c'est du gaspillage (isrâf).",
      "Mubâh (autorisé) si on en a les moyens.",
      "Wâjib (obligatoire) pour une purification parfaite."
    ],
    "correctAnswer": 1,
    "explanation": "Le gaspillage (isrâf) dans l'utilisation de l'eau, même pour les ablutions, est makrûh (déconseillé) et peut-être harâm si c'est excessif. Le Prophète (ﷺ) faisait ses ablutions avec une quantité modérée d'eau (environ un moudd, soit 750 ml)."
  },
  {
    "question": "Prier avec des vêtements sur lesquels se trouve une impureté qu'on ignore totalement rend la prière :",
    "options": [
      "Invalide immédiatement.",
      "Valide, car l'ignorance est une excuse.",
      "Makrûh mais valide.",
      "Valide seulement si l'impureté est petite."
    ],
    "correctAnswer": 1,
    "explanation": "L'ignorance d'une impureté sur le corps ou les vêtements est une excuse valable (ma'dhûr). Si on prie sans savoir qu'on porte une impureté, la prière est valide. Si on découvre l'impureté après la prière, elle reste valide mais il est mandûb de la refaire après purification."
  },
  {
    "question": "Pour une femme en période de menstrues, jeûner un jour de ramadan est :",
    "options": [
      "Makrûh (déconseillé) mais valide si elle le fait.",
      "Harâm (interdit) et son jeûne n'est pas valide.",
      "Mubâh (autorisé) si elle se sent capable.",
      "Wâjib (obligatoire) comme pour toute musulmane."
    ],
    "correctAnswer": 1,
    "explanation": "Il est harâm pour une femme en menstrues ou lochies de jeûner. Si elle jeûne malgré tout, son jeûne n'est pas valide (bâtil) et elle commet un péché. Elle devra rattraper ces jours après son cycle."
  },
  {
    "question": "Refaire le wudû' pour chaque prière obligatoire, même sans avoir perdu ses ablutions, est :",
    "options": [
      "Wâjib (obligatoire) selon certains savants.",
      "Sunna (tradition prophétique).",
      "Mandûb (recommandé) mais pas sunna.",
      "Makrûh (déconseillé) car c'est un gaspillage d'eau."
    ],
    "correctAnswer": 1,
    "explanation": "Refaire les ablutions pour chaque prière obligatoire (al-wudû' li-kulli salât) est une sunna du Prophète (ﷺ). Il renouvelait souvent ses ablutions avant chaque prière, même s'il était déjà en état de pureté."
  },
  {
    "question": "Utiliser de l'eau dont on doute qu'elle ait été mélangée à une impureté (sans changement de caractéristiques) pour les ablutions est :",
    "options": [
      "Harâm (interdit) par précaution.",
      "Mubâh (autorisé) car le doute ne change pas le statut.",
      "Makrûh (déconseillé) mais les ablutions sont valides.",
      "Wâjib (obligatoire) si on n'a pas d'autre eau."
    ],
    "correctAnswer": 2,
    "explanation": "Si on doute qu'une eau ait été mélangée à une impureté mais que ses caractéristiques sont inchangées, elle est considérée comme pure. Cependant, par précaution, son utilisation pour les ablutions peut être considérée comme makrûh, surtout si on a une autre eau disponible. Les ablutions restent valides."
  },
  {
    "question": "Pour une personne qui a uriné mais doute que l'urine se soit propagée au-delà de l'orifice, l'istinjâ' (lavage à l'eau) est :",
    "options": [
      "Wâjib (obligatoire) par précaution.",
      "Mandûb (recommandé) mais pas obligatoire.",
      "Mubâh (autorisé) si on le souhaite.",
      "Inutile car le doute n'a pas d'effet."
    ],
    "correctAnswer": 1,
    "explanation": "En cas de doute sur la propagation de l'urine, l'istinjâ' devient mandûb (recommandé) par précaution, mais pas wâjib. L'obligation (wâjib) ne s'applique qu'en cas de certitude de propagation (pour l'homme) ou toujours (pour la femme après avoir uriné)."
  },
  {
    "question": "Faire le ghusl du vendredi (jour du jumu'a) pour une personne déjà en état de pureté est :",
    "options": [
      "Wâjib (obligatoire) pour tous les musulmans.",
      "Sunna mu'akkada (fortement recommandée).",
      "Mandûb (recommandé) mais pas sunna.",
      "Mubâh (autorisé) sans mérite particulier."
    ],
    "correctAnswer": 1,
    "explanation": "Le ghusl du vendredi est une sunna mu'akkada (fortement recommandée, presque obligatoire) pour tout musulman pubère, homme ou femme, qu'il assiste à la prière du jumu'a ou non. C'est un acte sur lequel le Prophète (ﷺ) a insisté."
  },
  {
    "question": "Entrer à la mosquée en état de janâba (sans ablutions majeures) pour emprunter un livre est :",
    "options": [
      "Mubâh (autorisé) si c'est rapide.",
      "Makrûh (déconseillé) mais permis.",
      "Harâm (interdit) sauf en cas de nécessité absolue.",
      "Wâjib (obligatoire) si le livre est important."
    ],
    "correctAnswer": 2,
    "explanation": "Il est harâm pour une personne en état de janâba d'entrer dans une mosquée, même pour traverser ou emprunter quelque chose. La seule exception est en cas de nécessité absolue, et même dans ce cas, certains savants exigent qu'elle fasse au moins le tayammum si elle ne peut pas faire le ghusl."
  },
  {
    "question": "Faire le tayammum alors qu'on a de l'eau mais qu'on craint de manquer de temps pour prier une rak'a avant la fin du temps est :",
    "options": [
      "Harâm (interdit) car on a de l'eau.",
      "Wâjib (obligatoire) pour sauver la prière.",
      "Mandûb (recommandé) par précaution.",
      "Permis (mubâh) sans être obligatoire."
    ],
    "correctAnswer": 1,
    "explanation": "Si on a de l'eau mais qu'en faisant le wudû' on risquerait de ne pas pouvoir prier au moins une rak'a complète avant la fin du temps imparti, il devient wâjib (obligatoire) de faire le tayammum pour sauver la prière. C'est une des causes permises du tayammum."
  },
  {
    "question": "Utiliser du parfum contenant de l'alcool pour les hommes est :",
    "options": [
      "Mubâh (autorisé) car l'alcool s'évapore.",
      "Makrûh (déconseillé) mais pas harâm.",
      "Harâm (interdit) car c'est une impureté.",
      "Wâjib (obligatoire) pour sentir bon à la prière."
    ],
    "correctAnswer": 2,
    "explanation": "L'alcool (khamr) est considéré comme une impureté (najis) par la majorité des savants. Par conséquent, les parfums contenant de l'alcool sont harâm à utiliser car ils impliquent de porter une impureté sur soi. De plus, l'argent dépensé pour cela est considéré comme dépensé dans l'interdit."
  },
  {
    "question": "Pour une femme en période de menstrues, toucher un smartphone sur lequel est affiché un verset coranique est :",
    "options": [
      "Harâm (interdit) comme toucher le mushaf.",
      "Mubâh (autorisé) car ce n'est pas un mushaf matériel.",
      "Makrûh (déconseillé) par précaution.",
      "Wâjib (obligatoire) d'éviter si possible."
    ],
    "correctAnswer": 1,
    "explanation": "L'interdiction de toucher le Coran sans ablutions s'applique spécifiquement au mushaf (livre physique contenant le Coran écrit). Les écrans numériques (smartphones, tablettes, ordinateurs) ne sont pas considérés comme des mushafs. Il est donc mubâh (autorisé) de les toucher même en état d'impureté."
  },
  {
    "question": "Prier avec une petite tache de sang (moins qu'un dirham baghlî) sur le vêtement dont on ignore l'origine exacte rend la prière :",
    "options": [
      "Invalide car le sang est une impureté.",
      "Valide car c'est une petite quantité excusée.",
      "Makrûh mais valide.",
      "Valide seulement si le sang provient d'un animal licite."
    ],
    "correctAnswer": 1,
    "explanation": "Une petite quantité de sang (inférieure à la surface d'un dirham baghlî) est excusée (ma'fûw 'anhu) et n'invalide pas la prière, même si on sait qu'elle est là. Si on ignore son origine mais qu'elle est petite, la prière est valide. C'est une règle de facilitation."
  },
  {
    "question": "Faire le wudû' uniquement avec l'intention de se rafraîchir (sans intention de purification) :",
    "options": [
      "Invalide le wudû' car l'intention est obligatoire.",
      "Est valide car les actes sont selon les intentions.",
      "Est makrûh mais le wudû' est valide.",
      "Nécessite de refaire le wudû' avec la bonne intention."
    ],
    "correctAnswer": 0,
    "explanation": "L'intention (niyya) est une obligation (wâjib) du wudû'. Si on fait les gestes du wudû' sans l'intention de se purifier ou d'accomplir un acte d'adoration, ce n'est pas un wudû' valide. C'est simplement un lavage ordinaire."
  },
  {
    "question": "Pour un voyageur, essuyer sur les khuff pendant plus de trois jours est :",
    "options": [
      "Permis (mubâh) sans limite selon les malikites.",
      "Harâm (interdit) après trois jours.",
      "Makrûh (déconseillé) mais permis.",
      "Obligatoire (wâjib) de les retirer après trois jours."
    ],
    "correctAnswer": 2,
    "explanation": "Selon l'école malikite, il n'y a pas de durée limite fixée pour l'essuyage sur les khuff, ni pour le résident ni pour le voyageur. Selon les autres écoles (hanafite, shâfi'ite, hanbalite), le voyageur peut essuyer pendant trois jours et trois nuits. Après cela, il doit retirer les khuff et laver ses pieds."
  },
  {
    "question": "Manger de la viande d'un animal non sacrifié selon les rites islamiques (non halal) rend :",
    "options": [
      "Le corps impur nécessitant un ghusl.",
      "Les ablutions invalides jusqu'à ce qu'on se lave la bouche.",
      "Les prières invalides pendant 40 jours.",
      "Aucun impact sur la pureté rituelle, mais c'est harâm à consommer."
    ],
    "correctAnswer": 3,
    "explanation": "Manger de la viande non halal est harâm (interdit) et constitue un péché, mais cela n'affecte pas l'état de pureté rituelle (tahâra). Les ablutions restent valides, et on peut prier normalement après cet acte (bien qu'ayant commis un péché). Cependant, certains savants recommandent de se rincer la bouche si des particules restent."
  },
  {
    "question": "Se couper les ongles ou se raser les poils pubiens en état de janâba est :",
    "options": [
      "Harâm (interdit) avant le ghusl.",
      "Makrûh (déconseillé) mais permis.",
      "Mubâh (autorisé) sans problème.",
      "Wâjib (obligatoire) de faire le ghusl après."
    ],
    "correctAnswer": 2,
    "explanation": "Il est mubâh (autorisé) de se couper les ongles, de se raser ou de se couper les cheveux en état de janâba. Ces actes d'hygiène ne sont pas liés à l'état de pureté. Cependant, il est préférable (mandûb) de faire le ghusl d'abord par respect pour ces actes de propreté."
  },
  {
    "question": "Porter des lentilles de contact pendant le wudû' nécessite :",
    "options": [
      "De les retirer pour laver les yeux.",
      "De passer les mains mouillées sur les paupières fermées.",
      "Rien de spécial, le wudû' est valide avec.",
      "De faire le tayammum si on ne peut pas les retirer."
    ],
    "correctAnswer": 2,
    "explanation": "Le lavage du visage pendant le wudû' comprend la zone des yeux, mais il suffit de laver la surface externe des paupières et la peau autour des yeux. Les lentilles de contact, étant à l'intérieur de l'œil, ne font pas partie de la surface à laver. Le wudû' est donc valide avec les lentilles."
  },
  {
    "question": "Pour une femme, le saignement qui survient pendant la grossesse est considéré comme :",
    "options": [
      "Menstrues (hayd) si c'est aux dates habituelles.",
      "Métrorragie (istihâda) dans tous les cas.",
      "Lochies (nifâs) car lié à la grossesse.",
      "Impur mais n'ayant pas le statut de menstrues."
    ],
    "correctAnswer": 1,
    "explanation": "Selon la majorité des savants, la femme enceinte n'a pas de menstrues véritables. Tout saignement pendant la grossesse est considéré comme de la métrorragie (istihâda). Elle doit donc prier, jeûner, et avoir des rapports conjugaux normalement (après s'être purifiée du sang)."
  },
  {
    "question": "Faire le ghusl dans un hamam (bain public) où des gens nus se lavent est :",
    "options": [
      "Mubâh (autorisé) si on garde son pagne.",
      "Makrûh (déconseillé) à cause de la nudité.",
      "Harâm (interdit) car lieu de péché.",
      "Wâjib (obligatoire) d'éviter si possible."
    ],
    "correctAnswer": 1,
    "explanation": "Il est makrûh (déconseillé) de se laver dans des bains publics (hammam) où la pudeur n'est pas préservée, à cause de la nudité et du regard sur les 'awra. Cependant, si on y est contraint et qu'on préserve sa propre pudeur (en portant un pagne), c'est permis. L'idéal est d'éviter ces lieux."
  },
  {
    "question": "Utiliser de l'eau parfumée (eau de rose) pour les ablutions est :",
    "options": [
      "Wâjib (obligatoire) si on en a.",
      "Sunna (tradition prophétique).",
      "Mandûb (recommandé) pour sentir bon.",
      "Makrûh (déconseillé) car ce n'est plus de l'eau pure."
    ],
    "correctAnswer": 3,
    "explanation": "Si de l'essence ou du parfum est ajouté à l'eau au point d'en changer les caractéristiques (odeur, couleur), elle devient 'eau pure mais non purifiante' (tâhir). Elle ne peut plus être utilisée pour les ablutions. Si l'ajout est minime et ne change pas les caractéristiques, elle reste pure et purifiante."
  },
  {
    "question": "Pour une personne souffrant d'une blessure avec un drain médical (tube laissant s'écouler du pus), essuyer autour de la blessure pendant le wudû' est :",
    "options": [
      "Suffisant, on n'a pas à toucher le drain.",
      "Insuffisant, il faut laver la blessure si possible.",
      "Interdit, il faut faire le tayammum pour ce membre.",
      "Obligatoire de changer le pansement à chaque wudû'."
    ],
    "correctAnswer": 0,
    "explanation": "Pour les blessures avec drain ou pansement médical, on essuie sur le pansement sans chercher à faire pénétrer l'eau. On lave normalement le reste du membre. C'est une dérogation (rukhsa) due à la difficulté ou au préjudice médical."
  },
  {
    "question": "Rêver qu'on a des rapports sexuels mais sans éjaculation au réveil :",
    "options": [
      "Nécessite le ghusl (janâba).",
      "Nécessite seulement le wudû'.",
      "N'a aucun impact sur la pureté.",
      "Rend makrûh de prier sans wudû'."
    ],
    "correctAnswer": 1,
    "explanation": "Le rêve érotique en lui-même n'impose pas le ghusl. Seule l'éjaculation (sortie du maniy) impose le ghusl. Si on se réveille après un rêve érotique mais sans trace d'éjaculation, on reste en état de pureté. Cependant, si on ressent de l'excitation, il est recommandé (mandûb) de faire le wudû'."
  },
  {
    "question": "Porter des gants en cuir pendant le wudû' :",
    "options": [
      "Oblige à les retirer pour laver les mains.",
      "Permet d'essuyer dessus comme sur les khuff.",
      "Nécessite de laver par-dessus les gants.",
      "Est interdit car cela empêche l'eau d'atteindre la peau."
    ],
    "correctAnswer": 0,
    "explanation": "Pour le wudû', l'eau doit atteindre directement la peau des membres lavés. Porter des gants empêcherait cela. Il est donc obligatoire (wâjib) de les retirer pour laver les mains et les avant-bras. Les gants ne sont pas assimilables aux khuff pour l'essuyage."
  },
  {
    "question": "Boire ou manger pendant qu'on est en état de janâba est :",
    "options": [
      "Harâm (interdit) avant le ghusl.",
      "Makrûh (déconseillé) mais permis.",
      "Mubâh (autorisé) sans problème.",
      "Sunna de faire le wudû' d'abord."
    ],
    "correctAnswer": 3,
    "explanation": "Il est permis (mubâh) de manger, boire ou dormir en état de janâba. Cependant, il est fortement recommandé (sunna mu'akkada) de faire au moins le wudû' avant de manger, boire, dormir ou avoir un nouveau rapport. Ce n'est pas une obligation mais une sunna très recommandée."
  },
  {
    "question": "Se teindre les cheveux avec du henné en état de janâba :",
    "options": [
      "Est harâm car cela embellit en état d'impureté.",
      "Est makrûh mais permis.",
      "Est mubâh sans restriction.",
      "Nécessite de faire le ghusl après séchage."
    ],
    "correctAnswer": 2,
    "explanation": "Se teindre les cheveux, les couper, ou tout autre acte de toilette est mubâh (autorisé) en état de janâba. Ces actes ne sont pas des actes d'adoration qui nécessitent la pureté. Le henné n'est pas une impureté."
  },
  {
    "question": "Pour une femme, le saignement qui dure exactement 15 jours est considéré comme :",
    "options": [
      "Menstrues (hayd) car c'est la durée maximale.",
      "Métrorragie (istihâda) car au-delà de l'habituel.",
      "Douteux, nécessite 3 jours d'observation.",
      "Lochies (nifâs) si elle a accouché récemment."
    ],
    "correctAnswer": 0,
    "explanation": "La durée maximale des menstrues est de 15 jours. Un saignement qui dure exactement 15 jours est donc considéré comme des menstrues complètes. S'il dépasse ne serait-ce qu'un instant les 15 jours, le saignement excédentaire est considéré comme métrorragie."
  },
  {
    "question": "Utiliser de la neige fondue pour les ablutions est :",
    "options": [
      "Harâm car trop froid.",
      "Mubâh car c'est de l'eau à l'état solide.",
      "Makrûh si elle provient d'un lieu impur.",
      "Wâjib si on n'a pas d'autre eau."
    ],
    "correctAnswer": 1,
    "explanation": "La neige et la glace sont de l'eau à l'état solide. Une fois fondue, elles ont le même statut que l'eau. On peut donc les utiliser pour les ablutions. Si la neige provient d'un lieu contaminé, il faut vérifier qu'elle soit pure (sans impuretés visibles)."
  },
  {
    "question": "Faire ses ablutions avec de l'eau en bouteille qu'on a achetée à un non-musulman est :",
    "options": [
      "Makrûh par précaution.",
      "Harâm car achetée à un mécréant.",
      "Mubâh car l'eau est pure par nature.",
      "Wâjib de vérifier qu'elle n'a pas été altérée."
    ],
    "correctAnswer": 2,
    "explanation": "L'eau est pure par nature (tahûr), quelle que soit sa source ou qui la vend. Acheter de l'eau à un non-musulman ne change pas son statut. On peut l'utiliser pour les ablutions sans problème, à condition qu'elle n'ait pas été mélangée à des impuretés."
  },
  {
    "question": "Pour un homme, uriner debout est :",
    "options": [
      "Harâm (interdit) selon tous les savants.",
      "Makrûh (déconseillé) mais permis.",
      "Mubâh (autorisé) sans inconvénient.",
      "Sunna (recommandé) dans certains cas."
    ],
    "correctAnswer": 1,
    "explanation": "Uriner debout est généralement considéré comme makrûh (déconseillé) car cela peut entraîner des éclaboussures et une moins bonne purification. Cependant, c'est permis (mubâh) dans certains cas (comme dans des toilettes publiques sales, ou pour des raisons médicales). Le Prophète (ﷺ) l'a fait occasionnellement."
  },
  {
    "question": "Faire le wudû' dans une salle de bain contenant des toilettes (WC) est :",
    "options": [
      "Harâm car lieu d'impureté.",
      "Makrûh mais permis si nécessaire.",
      "Mubâh sans problème.",
      "Wâjib de fermer le couvercle des toilettes."
    ],
    "correctAnswer": 1,
    "explanation": "Il est makrûh (déconseillé) de faire ses ablutions dans une pièce contenant des toilettes (lieu où on satisfait ses besoins), par respect et pour éviter les éclaboussures potentielles. Cependant, c'est permis si on n'a pas d'autre endroit, en prenant soin de ne pas orienter son visage vers la toilette pendant les ablutions."
  },
  {
    "question": "Porter une alliance en or pour un homme pendant le wudû' :",
    "options": [
      "Oblige à la retirer pour que l'eau passe dessous.",
      "Permet de la garder, même si l'eau ne passe pas.",
      "Rend le wudû' invalide si on ne la retire pas.",
      "Est harâm de la porter, donc le wudû' est invalide."
    ],
    "correctAnswer": 3,
    "explanation": "Porter de l'or est harâm pour les hommes. Si un homme porte une bague en or, il commet un péché. Concernant le wudû', même si l'eau ne passe pas sous la bague, le wudû' reste valide selon l'école malikite (car retirer les bagues n'est pas obligatoire). Cependant, le fait de porter l'or est un problème séparé."
  },
  {
    "question": "Se laver les mains jusqu'aux poignets au début du wudû' est :",
    "options": [
      "Wâjib (obligatoire) avant de toucher l'eau.",
      "Sunna (tradition prophétique).",
      "Mandûb (recommandé) mais pas sunna.",
      "Mubâh (autorisé) sans mérite particulier."
    ],
    "correctAnswer": 1,
    "explanation": "Laver les mains jusqu'aux poignets au tout début du wudû' (avant de les mettre dans le récipient) est une sunna, pas une obligation. C'est la première des huit sunan du wudû'. Son omission n'invalide pas les ablutions."
  },
  {
    "question": "Pour une femme, le saignement qui survient pendant l'allaitement et qui dure moins de 40 jours après l'accouchement est considéré comme :",
    "options": [
      "Menstrues si c'est rouge vif.",
      "Lochies (nifâs) quelle que soit la couleur.",
      "Métrorragie (istihâda) car lié à l'allaitement.",
      "Impur mais sans statut particulier."
    ],
    "correctAnswer": 1,
    "explanation": "Tout saignement survenant dans les 40 jours suivant l'accouchement est considéré comme des lochies (nifâs), même s'il est intermittent ou de couleur différente. Après 40 jours, si le saignement continue, c'est de la métrorragie."
  },
  {
    "question": "Utiliser du savon pour se laver le visage pendant le wudû' :",
    "options": [
      "Est obligatoire pour bien nettoyer.",
      "Est sunna pour une meilleure purification.",
      "Est mandûb mais peut rendre l'eau non purifiante.",
      "Est makrûh car altère la nature de l'eau."
    ],
    "correctAnswer": 2,
    "explanation": "Utiliser du savon pendant le wudû' est permis, mais il faut faire attention : si le savon est utilisé en quantité telle qu'il change les caractéristiques de l'eau sur le visage (rend l'eau savonneuse), cette eau n'est plus 'eau pure' (mutlaq) mais 'eau mélangée' (mudhâf). Il vaut mieux rincer abondamment après."
  },
  {
    "question": "Faire le tayammum sur un mur peint à la chaux est :",
    "options": [
      "Valide car la chaux est une terre.",
      "Invalide car ce n'est pas de la terre naturelle.",
      "Makrûh mais valide.",
      "Valide seulement si la peinture est mince."
    ],
    "correctAnswer": 0,
    "explanation": "Le tayammum peut se faire sur toute surface terrestre pure (sa'îd), y compris les murs en terre, en pierre, ou recouverts de peinture à base de terre (comme la chaux). Ce qui importe est que la matière de base soit de la terre. Un mur en béton ou recouvert de peinture synthétique pose plus de question."
  },
  {
    "question": "Douter entre deux statuts d'eau (est-elle pure ou impure?) alors qu'on doit faire le wudû' :",
    "options": [
      "On utilise l'eau par précaution.",
      "On considère qu'elle est pure (principe de base).",
      "On fait le tayammum pour éviter le doute.",
      "On cherche une autre eau sans doute."
    ],
    "correctAnswer": 1,
    "explanation": "Le principe de base concernant l'eau (et toute chose) est la pureté (at-tahâra al-asliyya). En cas de doute sur le statut d'une eau (sans preuve d'impureté), on la considère comme pure et purifiante. On peut l'utiliser pour les ablutions."
  },
  {
    "question": "Pour une femme, porter du vernis à ongles pendant le wudû' :",
    "options": [
      "Oblige à le retirer pour laver les ongles.",
      "Permet de laver par-dessus, le wudû' est valide.",
      "Rend le wudû' invalide pour les mains.",
      "Nécessite de faire le tayammum pour les mains."
    ],
    "correctAnswer": 0,
    "explanation": "Le vernis à ongles forme une barrière imperméable (hâjiz) qui empêche l'eau d'atteindre l'ongle, qui fait partie du membre à laver (les mains). Pour que le wudû' soit valide, l'eau doit atteindre toute la surface de la peau et des ongles. Il est donc obligatoire (wâjib) de retirer le vernis, ou au moins de s'assurer que l'eau atteint l'ongle (ce qui n'est pas le cas avec du vernis classique)."
  },
  {
    "question": "Faire le ghusl sous la douche en laissant couler l'eau continuellement est :",
    "options": [
      "La façon idéale (sunna) du ghusl.",
      "Permis (mubâh) mais gaspilleur.",
      "Obligatoire (wâjib) pour couvrir tout le corps.",
      "Insuffisant car il faut immerger le corps."
    ],
    "correctAnswer": 1,
    "explanation": "Faire le ghusl sous la douche est permis (mubâh) et valide, à condition de bien faire couler l'eau sur tout le corps et de frotter. Cependant, il est préférable (mandûb) de ne pas gaspiller l'eau. La façon sunna décrite est d'utiliser une quantité modérée d'eau (environ 3 à 5 litres) en la versant avec un récipient."
  },
  {
    "question": "Prier avec des chaussettes qui ont touché une impureté sèche dont on ignore la nature exacte est :",
    "options": [
      "Invalide par précaution.",
      "Valide car le doute n'a pas d'effet.",
      "Makrûh mais valide.",
      "Valide seulement si on essuie dessus après."
    ],
    "correctAnswer": 1,
    "explanation": "Le principe de base concernant les vêtements et les objets est la pureté (at-tahâra). Si on ignore totalement la nature d'une tache (si c'est une impureté ou non), et qu'il n'y a pas d'indice qu'il s'agisse d'une impureté, on considère que c'est pur. La prière est donc valide."
  },
  {
    "question": "Boire de l'alcool par erreur (en pensant que c'est du jus) rend :",
    "options": [
      "Le corps impur nécessitant un ghusl.",
      "Les ablutions invalides jusqu'à ce qu'on se rince la bouche.",
      "Les prières invalides pendant un certain temps.",
      "Aucun impact sur la pureté rituelle, mais il faut cesser immédiatement."
    ],
    "correctAnswer": 3,
    "explanation": "Boire de l'alcool par erreur (sans le savoir et sans le vouloir) n'est pas un péché. Cela n'affecte pas non plus l'état de pureté rituelle. Cependant, si on s'en rend compte, on doit cesser immédiatement de boire, se rincer la bouche, et les ablutions restent valides."
  },
  {
    "question": "Faire le wudû' alors qu'il reste de la nourriture entre les dents :",
    "options": [
      "Invalide le wudû' si la nourriture est importante.",
      "Rend le wudû' makrûh mais valide.",
      "N'a aucun impact, le wudû' est valide.",
      "Nécessite de se curer les dents avant le madmada."
    ],
    "correctAnswer": 2,
    "explanation": "La présence de restes de nourriture entre les dents n'affecte pas la validité du wudû'. Cependant, pour la prière, il est recommandé (mandûb) de se curer les dents avant de prier par respect et propreté. Le rinçage de la bouche (madmada) pendant le wudû' aide à nettoyer mais n'est pas obligatoire."
  },
  {
    "question": "Pour une femme, le saignement qui survient après la ménopause (âge avancé) est :",
    "options": [
      "Toujours des menstrues si elle en avait avant.",
      "Toujours de la métrorragie.",
      "Considéré selon sa couleur et son abondance.",
      "Nécessite l'avis d'un médecin pour déterminer."
    ],
    "correctAnswer": 1,
    "explanation": "Après la ménopause (généralement vers 50 ans, lorsqu'une femme n'a plus eu de règles pendant un an), tout saignement vaginal est considéré comme de la métrorragie (istihâda), non comme des menstrues. Elle doit donc prier, jeûner, et avoir des rapports normalement (après s'être purifiée du sang)."
  },
  {
    "question": "Utiliser de l'eau de mer pour les ablutions est :",
    "options": [
      "Harâm car salée et impure.",
      "Makrûh car difficile à supporter.",
      "Mubâh car c'est de l'eau pure et purifiante.",
      "Wâjib si on n'a pas d'eau douce."
    ],
    "correctAnswer": 2,
    "explanation": "L'eau de mer est pure et purifiante (tahûr) selon le hadith du Prophète (ﷺ). Son goût salé et son odeur particulière sont ses caractéristiques naturelles, elles ne la rendent pas impure. On peut donc l'utiliser pour les ablutions et le ghusl."
  },
  {
    "question": "Faire le wudû' alors qu'on porte un pansement étanche sur une petite blessure au doigt :",
    "options": [
      "Oblige à retirer le pansement à chaque fois.",
      "Permet d'essuyer sur le pansement.",
      "Nécessite de laver tout autour seulement.",
      "Rend le wudû' incomplet pour cette main."
    ],
    "correctAnswer": 1,
    "explanation": "Pour une petite blessure recouverte d'un pansement, on passe la main mouillée sur le pansement (al-mash 'alâ al-jabîra). C'est une dérogation permise pour éviter de retirer le pansement à chaque ablution. On lave normalement le reste du membre."
  },
  {
    "question": "Prier dans un cimetière (sur les tombes) est :",
    "options": [
      "Mubâh si on ne prie pas vers une tombe.",
      "Makrûh pour les prières surérogatoires seulement.",
      "Harâm pour toutes les prières.",
      "Wâjib d'éviter sauf pour la prière funéraire."
    ],
    "correctAnswer": 2,
    "explanation": "Il est harâm de prier (les prières obligatoires ou surérogatoires) sur les tombes ou dans les cimetières, selon le hadith du Prophète (ﷺ). Cela s'applique également à s'y asseindre pour prier. La prière funéraire (janâza) est une exception, car elle se fait justement au cimetière."
  },
  {
    "question": "Faire le wudû' avec de l'eau qui a été utilisée pour laver un mort est :",
    "options": [
      "Harâm car l'eau a touché un mort.",
      "Makrûh mais les ablutions sont valides.",
      "Mubâh car l'eau reste pure.",
      "Wâjib de la changer si possible."
    ],
    "correctAnswer": 1,
    "explanation": "L'eau utilisée pour laver un mort musulman reste pure. Cependant, son utilisation pour les ablutions est considérée comme makrûh (déconseillée) par de nombreux savants, par respect et par précaution. Si on a une autre eau disponible, il est préférable de l'utiliser."
  },
  {
    "question": "Pour un homme, avoir les cheveux longs attachés en queue de cheval pendant le wudû' :",
    "options": [
      "Oblige à détacher les cheveux pour essuyer la tête.",
      "Permet d'essuyer par-dessus les cheveux attachés.",
      "Exempte de l'essuyage de la tête.",
      "Nécessite d'essuyer seulement le devant de la tête."
    ],
    "correctAnswer": 0,
    "explanation": "Pour l'essuyage de la tête, il faut passer les mains mouillées sur le cuir chevelu. Si les cheveux sont attachés de manière à empêcher l'accès au cuir chevelu sur une partie importante (comme une queue de cheval serrée à l'arrière), il faut les détacher pour pouvoir essuyer toute la tête. Pour les femmes, les règles sont plus souples concernant les cheveux attachés."
  },
  {
    "question": "Utiliser de l'eau distillée (sans minéraux) pour les ablutions est :",
    "options": [
      "Harâm car ce n'est pas de l'eau naturelle.",
      "Mubâh car c'est de l'eau pure.",
      "Makrûh car elle n'a pas de goût.",
      "Insuffisant car elle ne nettoie pas bien."
    ],
    "correctAnswer": 1,
    "explanation": "L'eau distillée est de l'eau qui a été purifiée par évaporation et condensation. Chimiquement, c'est de l'H2O pure. Elle est donc pure (tâhir) et purifiante (mutahhir) et peut être utilisée pour les ablutions."
  },
  {
    "question": "Faire le tayammum alors qu'on a un peu d'eau mais pas assez pour tout le wudû' :",
    "options": [
      "Est harâm car on a de l'eau.",
      "Est wâjib d'utiliser l'eau pour ce qu'on peut.",
      "Permet de faire le tayammum complet.",
      "Oblige à faire le wudû' partiel puis tayammum pour le reste."
    ],
    "correctAnswer": 2,
    "explanation": "Si on a une quantité d'eau insuffisante pour accomplir un wudû' complet (laver tous les membres), on peut faire le tayammum. On n'est pas obligé d'utiliser le peu d'eau pour laver quelques membres puis faire le tayammum pour les autres. Le tayammum remplace complètement le wudû' dans ce cas."
  },
  {
    "question": "Porter des vêtements serrés qui épousent les formes du corps pour la prière est :",
    "options": [
      "Mubâh pour les hommes et les femmes.",
      "Makrûh pour les hommes, harâm pour les femmes.",
      "Harâm pour les deux car cela révèle les formes.",
      "Wâjib d'avoir des vêtements amples."
    ],
    "correctAnswer": 2,
    "explanation": "Porter des vêtements trop serrés qui révèlent les formes du corps (surtout les parties intimes) est problématique pour la prière. Pour les hommes, cela peut être makrûh ou harâm selon le degré de révélation. Pour les femmes, c'est généralement considéré comme inapproprié car cela contredit le principe de couverture de la 'awra. L'idéal est de porter des vêtements amples."
  },
  {
    "question": "Faire le ghusl dans une piscine publique (où les gens nagent) est :",
    "options": [
      "Valide si l'eau est propre.",
      "Invalide car l'eau est mélangée à des impuretés.",
      "Makrûh à cause de la mixité.",
      "Harâm car lieu de loisir."
    ],
    "correctAnswer": 1,
    "explanation": "Si l'eau de la piscine est en grande quantité (plus de deux qulla) et que les impuretés potentielles (sueur, salive, etc.) n'en changent pas les caractéristiques (couleur, odeur, goût), elle reste pure et purifiante. Cependant, pour des raisons d'hygiène et de pudeur, il est préférable d'éviter."
  },
  {
    "question": "Pour une femme, se maquiller (fond de teint) pendant les menstrues est :",
    "options": [
      "Harâm car embellissement en état d'impureté.",
      "Makrûh mais permis.",
      "Mubâh sans restriction.",
      "Sunna pour se sentir bien."
    ],
    "correctAnswer": 2,
    "explanation": "Il est mubâh (autorisé) pour une femme en menstrues de se maquiller, de se parfumer, de porter des beaux vêtements, etc. Les menstrues n'interdisent pas l'embellissement. Seules certaines activités spécifiques sont interdites (prière, jeûne, rapport sexuel, toucher le mushaf, circumambulation)."
  },
  {
    "question": "Utiliser de l'eau qui a cuit des pâtes (eau de cuisson) pour les ablutions est :",
    "options": [
      "Mubâh car c'est de l'eau.",
      "Makrûh car elle a changé de caractéristiques.",
      "Harâm car mélangée à de la nourriture.",
      "Valide seulement si filtrée."
    ],
    "correctAnswer": 1,
    "explanation": "L'eau qui a servi à cuire des pâtes ou d'autres aliments a changé ses caractéristiques (elle est devenue trouble, contient de l'amidon, etc.). Elle devient donc 'eau pure mais non purifiante' (tâhir) et ne peut plus être utilisée pour les ablutions. C'est makrûh de l'utiliser si on a une autre eau."
  },
  {
    "question": "Faire le wudû' avec de l'eau chauffée par un système solaire (panneaux) est :",
    "options": [
      "Makrûh selon certains anciens savants.",
      "Mubâh sans problème.",
      "Harâm si chauffée directement au soleil.",
      "Sunna en hiver."
    ],
    "correctAnswer": 1,
    "explanation": "L'eau chauffée par des panneaux solaires (circuit fermé) n'est pas considérée comme 'eau chauffée au soleil' au sens juridique discuté par les anciens savants. C'est simplement de l'eau chaude, son utilisation est mubâh (autorisée). La réserve concernant l'eau chauffée directement au soleil dans un récipient ne s'applique pas ici."
  },
  {
    "question": "Prier avec une montre en cuir provenant d'un animal non sacrifié selon l'Islam est :",
    "options": [
      "Invalide la prière car le cuir est impur.",
      "Valide car le cuir est purifié par le tannage.",
      "Makrûh mais la prière est valide.",
      "Harâm de la porter pendant la prière."
    ],
    "correctAnswer": 1,
    "explanation": "Le cuir d'un animal mort (charogne) devient pur (tâhir) après tannage, selon la majorité des savants (sauf le porc). Donc une montre en cuir provenant d'une vache non abattue islamiquement mais tannée est pure. La prière avec est valide."
  },
  {
    "question": "Faire le tayammum sur un tapis synthétique (moquette) est :",
    "options": [
      "Valide si le tapis est poussiéreux.",
      "Invalide car ce n'est pas de la terre.",
      "Makrûh mais valide.",
      "Valide seulement si on enlève le tapis."
    ],
    "correctAnswer": 1,
    "explanation": "Le tayammum doit se faire sur de la terre ou une surface terrestre pure (sa'îd). Un tapis synthétique n'est pas considéré comme de la terre, même s'il a de la poussière dessus. Il faut tapoter sur le sol en dessous ou sur un mur en terre/plâtre."
  },
  {
    "question": "Une personne utilise un désinfectant en spray sur ses mains avant de faire le tayammum. Le tayammum est-il valide ?",
    "options": [
      "Oui, car les mains sont propres.",
      "Non, car le produit crée une barrière entre la main et la terre.",
      "Oui, seulement si le spray est à base d'alcool.",
      "Non, mais on peut essuyer sur le spray."
    ],
    "correctAnswer": 1,
    "explanation": "Si le spray laisse un film ou une substance empêchant la poussière de terre d'adhérer, le tayammum n'est pas valide. Il faut que les mains soient en contact direct avec le sa'îd."
  },
  {
    "question": "Une femme en état de menstrues peut-elle lire le Coran sur son téléphone sans le toucher directement (avec des gants) ?",
    "options": [
      "Oui, sans problème.",
      "Non, car le Coran reste le Coran.",
      "Oui, mais seulement si elle ne prononce pas les mots.",
      "Non, sauf en cas de nécessité d'apprentissage."
    ],
    "correctAnswer": 0,
    "explanation": "L'interdiction concerne le toucher du mushaf physique. Lire sur un écran numérique ne nécessite pas de pureté."
  },
  {
    "question": "Un homme porte une bague en argent. Pendant le wudû', doit-il la bouger pour que l'eau passe en dessous ?",
    "options": [
      "Oui, obligatoirement.",
      "Non, ce n'est pas nécessaire.",
      "Seulement si la bague est serrée.",
      "Il doit la retirer complètement."
    ],
    "correctAnswer": 1,
    "explanation": "Pour les bagues non serrées (où l'eau peut circuler naturellement), il n'est pas obligatoire de les bouger. Si elle est serrée au point que l'eau ne passe pas, il faut la bouger."
  },
  {
    "question": "Une personne fait le wudû' avec de l'eau puis utilise une lotion hydratante immédiatement après. Son wudû' est-il toujours valable ?",
    "options": [
      "Oui, la lotion n'affecte pas le wudû'.",
      "Non, car elle crée une barrière.",
      "Seulement si la lotion est à base d'eau.",
      "Oui, mais elle doit refaire le wudû' pour la prière suivante."
    ],
    "correctAnswer": 0,
    "explanation": "L'application d'une lotion après le wudû' n'annule pas les ablutions, car elle ne fait pas partie des annulatifs."
  },
  {
    "question": "Peut-on faire le tayammum sur un mur recouvert de plâtre ?",
    "options": [
      "Oui, car le plâtre est une terre cuite.",
      "Non, car ce n'est pas de la terre naturelle.",
      "Oui, seulement s'il y a de la poussière.",
      "Non, il faut un mur en terre crue."
    ],
    "correctAnswer": 0,
    "explanation": "Le plâtre est considéré comme une surface terrestre pure (sa'îd) car il provient de la terre."
  },
  {
    "question": "Une personne a une plaie suintante au bras. Comment faire pour les ablutions ?",
    "options": [
      "Elle lave normalement, même si cela fait mal.",
      "Elle essuie autour de la plaie avec un chiffon humide.",
      "Elle saute ce membre et fait le tayammum pour lui.",
      "Elle lave le reste du corps et essuie sur un pansement."
    ],
    "correctAnswer": 3,
    "explanation": "Pour une plaie ouverte, on place un pansement propre et on essuie dessus avec une main mouillée. On lave normalement le reste du membre."
  },
  {
    "question": "Un voyageur fait le tayammum pour le maghrib. Après la prière, il trouve de l'eau. Doit-il refaire le maghrib avec de l'eau ?",
    "options": [
      "Oui, obligatoirement.",
      "Non, car la prière était valide au moment où il l'a faite.",
      "Oui, mais seulement s'il reste du temps pour le maghrib.",
      "Non, mais il doit faire le wudû' pour la prochaine prière."
    ],
    "correctAnswer": 1,
    "explanation": "S'il trouve de l'eau avant la fin du temps de la prière, il doit refaire la prière avec le wudû'."
  },
  {
    "question": "Une femme a des saignements irréguliers pendant 20 jours. Comment détermine-t-elle ses menstrues ?",
    "options": [
      "Elle considère ses 6-7 jours habituels comme menstrues.",
      "Elle considère les 15 premiers jours comme menstrues.",
      "Elle attend un cycle régulier pour déterminer.",
      "Elle consulte un médecin."
    ],
    "correctAnswer": 0,
    "explanation": "Elle suit sa durée habituelle. Le reste est considéré comme istihâda."
  },
  {
    "question": "Peut-on faire le wudû' avec de l'eau qui a été utilisée pour cuisiner (ex : bouillon) ?",
    "options": [
      "Oui, si elle est filtrée.",
      "Non, car elle a changé de nature.",
      "Oui, seulement si elle est refroidie.",
      "Non, sauf en cas de nécessité."
    ],
    "correctAnswer": 1,
    "explanation": "L'eau qui a changé de caractéristiques (couleur, odeur, goût) à cause d'un élément pur devient 'eau mélangée' (mudhâf) et ne peut être utilisée pour les ablutions."
  },
  {
    "question": "Une personne prie avec un pansement sur une blessure. Pendant la prière, le pansement tombe. Que fait-elle ?",
    "options": [
      "Elle continue sa prière.",
      "Elle arrête, remet le pansement, et reprend.",
      "Elle termine la prière puis refait ses ablutions.",
      "Elle arrête et refait toute la prière."
    ],
    "correctAnswer": 3,
    "explanation": "Si le pansement tombe pendant la prière, elle doit arrêter, remettre le pansement, refaire ses ablutions (ou au moins l'essuyage), et reprendre la prière depuis le début."
  },
  {
    "question": "Une femme en période de lochies voit son saignement s'arrêter au 30e jour, puis reprendre au 35e jour pendant 3 jours. Comment agit-elle ?",
    "options": [
      "Elle considère les jours 35-37 comme lochies.",
      "Elle considère ces jours comme menstrues.",
      "Elle attend 15 jours de pureté pour décider.",
      "Elle consulte un savant."
    ],
    "correctAnswer": 0,
    "explanation": "Si le sang revient avant 40 jours après l'accouchement, c'est toujours considéré comme des lochies."
  },
  {
    "question": "Une personne a des flatulences constantes. Peut-elle prier ?",
    "options": [
      "Non, elle est exemptée de prière.",
      "Oui, elle fait un wudû' et prie immédiatement.",
      "Elle prie seulement les prières obligatoires.",
      "Elle fait le tayammum à la place."
    ],
    "correctAnswer": 1,
    "explanation": "Elle fait le wudû', prie immédiatement, et même si des flatulences surviennent pendant la prière, celle-ci reste valide."
  },
  {
    "question": "Un homme touche une femme non-mahram avec la main. Son wudû' est-il annulé ?",
    "options": [
      "Oui, toujours.",
      "Non, jamais.",
      "Seulement s'il y a plaisir.",
      "Seulement si la peau est touchée directement."
    ],
    "correctAnswer": 2,
    "explanation": "Le toucher d'une femme non-mahram n'annule le wudû' que s'il est accompagné de plaisir charnel, selon la majorité des savants."
  },
  {
    "question": "Peut-on faire le masah sur des chaussettes en nylon fin ?",
    "options": [
      "Oui, si elles couvrent la cheville.",
      "Non, elles doivent être épaisses.",
      "Oui, seulement en voyage.",
      "Non, seulement sur le cuir."
    ],
    "correctAnswer": 1,
    "explanation": "Selon l'école hanbalite, les chaussettes doivent être assez épaisses pour qu'on puisse marcher avec sans qu'elles se déchirent."
  },
  {
    "question": "Une personne utilise de l'eau en bouteille gazéifiée pour le wudû'. Est-ce valide ?",
    "options": [
      "Oui, c'est de l'eau.",
      "Non, car elle a changé de caractéristique.",
      "Oui, si on la laisse dégazer.",
      "Non, sauf en cas de nécessité."
    ],
    "correctAnswer": 1,
    "explanation": "L'eau gazéifiée n'est plus de l'eau pure (mutlaq) mais de l'eau mélangée à du CO2, donc non valable pour les ablutions."
  },
  {
    "question": "Une femme a un cycle menstruel de 10 jours. Est-ce normal ?",
    "options": [
      "Non, c'est de l'istihâda.",
      "Oui, si c'est son habitude.",
      "Non, la limite est de 7 jours.",
      "Oui, mais elle doit consulter."
    ],
    "correctAnswer": 1,
    "explanation": "La durée des menstrues varie selon les femmes. Si c'est son habitude constante, c'est accepté."
  },
  {
    "question": "Peut-on faire le ghusl dans l'eau de mer si on a des plaies ouvertes ?",
    "options": [
      "Oui, sans problème.",
      "Non, car le sel irrite.",
      "Oui, mais c'est makrûh.",
      "Non, sauf en cas de nécessité."
    ],
    "correctAnswer": 0,
    "explanation": "L'eau de mer est pure et purifiante, même avec des plaies. Cependant, si cela cause de la douleur, on peut éviter."
  },
  {
    "question": "Une personne oublie de se rincer la bouche pendant le wudû'. Doit-elle recommencer ?",
    "options": [
      "Oui, c'est une obligation.",
      "Non, c'est une sunna.",
      "Oui, si elle a mangé avant.",
      "Non, mais elle doit le faire après."
    ],
    "correctAnswer": 1,
    "explanation": "Le rinçage de la bouche (madmada) est une sunna, pas une obligation. Son omission n'invalide pas le wudû'."
  },
  {
    "question": "Un enfant de 10 ans qui n'a pas encore atteint la puberté doit-il faire le ghusl après une éjaculation nocturne ?",
    "options": [
      "Oui, s'il comprend.",
      "Non, car il n'est pas mukallaf.",
      "Oui, pour prendre l'habitude.",
      "Non, mais il doit faire le wudû'."
    ],
    "correctAnswer": 1,
    "explanation": "Avant la puberté, l'enfant n'est pas soumis aux obligations religieuses. Cependant, on peut l'éduquer à le faire."
  },
  {
    "question": "Peut-on faire le tayammum sur un miroir ?",
    "options": [
      "Oui, s'il est poussiéreux.",
      "Non, car ce n'est pas de la terre.",
      "Oui, si on n'a pas d'autre surface.",
      "Non, sauf en cas d'urgence."
    ],
    "correctAnswer": 1,
    "explanation": "Le miroir n'est pas une surface terrestre (sa'îd). Le tayammum n'est pas valide dessus."
  },
  {
    "question": "Une femme en période de menstrues peut-elle jeûner des jours surérogatoires (comme le lundi et jeudi) ?",
    "options": [
      "Oui, si elle se sent capable.",
      "Non, c'est interdit.",
      "Oui, mais elle doit les rattraper.",
      "Non, sauf si c'est un vœu."
    ],
    "correctAnswer": 1,
    "explanation": "Il est interdit à la femme en menstrues de jeûner, que ce soit obligatoire ou surérogatoire."
  },
  {
    "question": "Une personne utilise un savon antibactérien pour le wudû'. L'eau devient savonneuse. Le wudû' est-il valide ?",
    "options": [
      "Oui, le savon est pur.",
      "Non, l'eau n'est plus mutlaq.",
      "Oui, si on rince bien.",
      "Non, sauf en cas de maladie."
    ],
    "correctAnswer": 1,
    "explanation": "Si l'eau change de caractéristique à cause du savon, elle devient 'eau mélangée' et ne peut être utilisée pour les ablutions."
  },
  {
    "question": "Une personne fait le wudû' puis applique du parfum alcoolisé sur ses vêtements. Son wudû' est-il annulé ?",
    "options": [
      "Oui, car l'alcool est impur.",
      "Non, le wudû' n'est pas affecté.",
      "Oui, seulement si le parfum touche la peau.",
      "Non, mais la prière est makrûh."
    ],
    "correctAnswer": 3,
    "explanation": "Le parfum alcoolisé est considéré comme impur par beaucoup de savants. Porter une impureté pendant la prière est makrûh, mais n'annule pas le wudû'."
  },
  {
    "question": "Une femme a des saignements en dehors de ses cycles habituels, mais elle n'est pas sûre si c'est des menstrues ou de l'istihâda. Que fait-elle ?",
    "options": [
      "Elle considère que c'est des menstrues.",
      "Elle considère que c'est de l'istihâda.",
      "Elle attend 3 jours pour décider.",
      "Elle consulte un gynécologue."
    ],
    "correctAnswer": 1,
    "explanation": "En cas de doute, on se réfère à l'habitude. Si cela correspond à ses menstrues habituelles, c'est hayd. Sinon, c'est istihâda."
  },
  {
    "question": "Peut-on faire le masah sur un bandage médical (pour une entorse) ?",
    "options": [
      "Oui, c'est permis.",
      "Non, seulement sur les chaussettes.",
      "Oui, seulement si le bandage est étanche.",
      "Non, il faut laver le membre."
    ],
    "correctAnswer": 0,
    "explanation": "On peut essuyer sur tout pansement ou bandage nécessaire, à condition qu'il couvre une blessure ou un besoin médical."
  },
  {
    "question": "Une personne a uriné mais n'a pas d'eau pour l'istinjâ'. Que fait-elle ?",
    "options": [
      "Elle utilise du papier seulement.",
      "Elle fait le tayammum sur la zone.",
      "Elle attend d'avoir de l'eau.",
      "Elle prie sans purification."
    ],
    "correctAnswer": 0,
    "explanation": "L'istijmâr (nettoyage avec du papier, des pierres, etc.) est suffisant en l'absence d'eau."
  },
  {
    "question": "Un homme porte un pantalon en cuir provenant d'un animal non halal. Peut-il prier avec ?",
    "options": [
      "Oui, le cuir est purifié par le tannage.",
      "Non, le cuir est impur.",
      "Oui, seulement s'il est fabriqué en pays musulman.",
      "Non, sauf en cas de nécessité."
    ],
    "correctAnswer": 0,
    "explanation": "Le cuir d'un animal mort (non abattu islamiquement) devient pur après tannage, selon la majorité des savants."
  },
  {
    "question": "Une personne fait le wudû' avec de l'eau puis se mouche et un peu de sang sort. Doit-elle refaire le wudû' ?",
    "options": [
      "Oui, car le sang est impur.",
      "Non, si c'est peu et ne coule pas.",
      "Oui, seulement si le sang est abondant.",
      "Non, mais elle doit laver le nez."
    ],
    "correctAnswer": 1,
    "explanation": "Un saignement de nez n'annule pas le wudû' s'il est mineur et s'arrête rapidement."
  },
  {
    "question": "Une femme a des pertes blanches (leucorrhée) en dehors des menstrues. Annulent-elles le wudû' ?",
    "options": [
      "Oui, toujours.",
      "Non, jamais.",
      "Seulement si elles sont abondantes.",
      "Seulement si elles sont colorées."
    ],
    "correctAnswer": 1,
    "explanation": "Les pertes blanches (qadha) n'annulent pas le wudû', car elles sont considérées comme pures."
  },
  {
    "question": "Une personne prie avec des chaussettes qu'elle a essuyées il y a 2 jours (en étant résidente). Sa prière est-elle valide ?",
    "options": [
      "Oui, selon les malikites.",
      "Non, la durée est dépassée.",
      "Oui, si elle est en voyage.",
      "Non, sauf si elle refait l'essuyage."
    ],
    "correctAnswer": 0,
    "explanation": "Selon l'école malikite, il n'y a pas de durée limite pour l'essuyage sur les khuff."
  },
  {
    "question": "Une personne utilise de l'eau qui a été exposée au soleil pendant des jours dans un récipient. Est-ce makrûh ?",
    "options": [
      "Oui, selon certains avis.",
      "Non, c'est mubâh.",
      "Oui, seulement si l'eau est chaude.",
      "Non, sauf pour les malades."
    ],
    "correctAnswer": 0,
    "explanation": "Certains savants considèrent l'eau chauffée au soleil comme makrûh pour les ablutions, par précaution."
  },
  {
    "question": "Un musulman se convertit. Doit-il faire le ghusl immédiatement ?",
    "options": [
      "Oui, obligatoirement.",
      "Non, seulement s'il était en état de janâba.",
      "Oui, mais un wudû' suffit.",
      "Non, mais c'est recommandé."
    ],
    "correctAnswer": 1,
    "explanation": "Le ghusl de conversion n'est obligatoire que s'il était en état de janâba avant sa conversion."
  },
  {
    "question": "Une personne fait le wudû' puis met du vernis à ongles. Doit-elle retirer le vernis pour les ablutions suivantes ?",
    "options": [
      "Oui, obligatoirement.",
      "Non, elle peut essuyer dessus.",
      "Oui, seulement si le vernis est épais.",
      "Non, car ce n'est pas une barrière."
    ],
    "correctAnswer": 0,
    "explanation": "Le vernis à ongles empêche l'eau d'atteindre l'ongle, donc il doit être retiré pour le wudû'."
  },
  {
    "question": "Une femme enceinte a des saignements pendant sa grossesse. Comment agit-elle ?",
    "options": [
      "Elle les considère comme menstrues.",
      "Elle les considère comme istihâda.",
      "Elle attend l'accouchement pour décider.",
      "Elle consulte un médecin."
    ],
    "correctAnswer": 1,
    "explanation": "Selon la majorité des savants, la femme enceinte n'a pas de menstrues véritables. Tout saignement est istihâda."
  },
  {
    "question": "Une personne utilise de l'eau de puits qui a un goût ferreux dû aux minéraux. Peut-elle l'utiliser pour le wudû' ?",
    "options": [
      "Oui, c'est sa caractéristique naturelle.",
      "Non, car l'eau a changé de goût.",
      "Oui, mais c'est makrûh.",
      "Non, sauf en cas de nécessité."
    ],
    "correctAnswer": 0,
    "explanation": "Si le changement de goût est dû à des minéraux naturels dans le sol, l'eau reste pure et purifiante."
  },
  {
    "question": "Un homme a une barbe longue. Doit-il laver l'intérieur de la barbe pendant le wudû' ?",
    "options": [
      "Oui, la peau doit être atteinte.",
      "Non, il suffit de passer les mains dessus.",
      "Oui, seulement si la barbe est clairsemée.",
      "Non, la barbe est exemptée."
    ],
    "correctAnswer": 1,
    "explanation": "Pour une barbe épaisse, il suffit de passer les mains mouillées sur la surface. Pour une barbe clairsemée, il faut laver la peau en dessous."
  },
  {
    "question": "Une personne fait le tayammum pour le dhuhr, puis prie. Elle trouve de l'eau avant le 'asr. Doit-elle refaire le dhuhr ?",
    "options": [
      "Oui, obligatoirement.",
      "Non, la prière était valide.",
      "Oui, si elle a le temps.",
      "Non, mais elle doit faire le wudû' pour le 'asr."
    ],
    "correctAnswer": 1,
    "explanation": "La prière faite avec le tayammum est valide si l'eau n'était pas disponible au moment de la prière."
  },
  {
    "question": "Une personne fait le wudû' avec de l'eau filtrée par osmose inverse (qui retire tous les minéraux). Cette eau est-elle valable pour les ablutions ?",
    "options": [
      "Non, car elle n'est plus 'naturelle'.",
      "Oui, car c'est toujours de l'H2O pure.",
      "Seulement si des minéraux sont réajoutés.",
      "Non, car le processus est artificiel."
    ],
    "correctAnswer": 1,
    "explanation": "L'eau purifiée par osmose inverse reste de l'eau pure (tahûr) et purifiante (mutahhir). Le processus de filtration ne change pas sa nature fondamentale. Elle est valable pour les ablutions."
  },
  {
    "question": "Un musulman voyage en avion et le temps du dhuhr arrive alors qu'il est au-dessus de l'océan. Il n'a pas d'eau et l'avion n'en fournit pas assez pour les ablutions. Que doit-il faire ?",
    "options": [
      "Attendre d'atterrir pour prier.",
      "Faire le tayammum avec les sièges en tissu.",
      "Faire le tayammum avec la poussière des sièges s'il y en a.",
      "Faire le tayammum sur les parois de l'avion si elles sont poussiéreuses."
    ],
    "correctAnswer": 2,
    "explanation": "Dans un avion, on peut faire le tayammum sur les surfaces pures disponibles (sièges, parois) si elles ont de la poussière. Sinon, on peut tapoter une surface pour faire apparaître de la poussière. Les tissus des sièges ne sont pas du sa'îd (terre)."
  }
];