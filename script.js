const cards = [
  // Common cards
  //1
  {
    id: 1,
    name: "Valeur Ajoutée",
    category: "1-star",
    stars: 1,
    rarity: "commun",
    description: "➡️ Augmente le nombre de points gagné par tous les joueurs lors de la prochaine question.",
    image: "images/card3.png",
    effects: {
      1: "Ajoute <b>1</b> point",
      2: "Ajoute <b>3</b> points",
      3: "Ajoute <b>5</b> points"
    }
  },
  //2
  {
    id: 2,
    name: "Minus",
    category: "1-star",
    stars: 1,
    rarity: "commun",
    description: "➡️ Diminue le nombre de points gagné par tous les joueurs lors de la prochaine question.",
    image: "images/card1.png",
    effects: {
      1: "Enlève <b>1</b> point",
      2: "Enlève <b>3</b> points",
      3: "Enlève <b>5</b> points"
    }
  },
  //3
  {
    id: 2,
    name: "Temps Bonus",
    category: "1-star",
    stars: 1,
    rarity: "commun",
    description: "➡️ Donne du temps supplémentaire pour répondre à la prochaine question.",
    image: "images/card2.png",
    effects: {
      1: "Ajoute <b>3</b> secondes",
      2: "Ajoute <b>10</b> secondes",
      3: "Ajoute <b>20</b> secondes"
    }
  },
  //4
  { 
    id: 4,
    name: "Temps Bonus",
    category: "1-star",
    stars: 1,
    rarity: "commun",
    description: "➡️ Retire du temps pour répondre à la prochaine question.",
    image: "images/card4.png",
    effects: {
      1: "Enlève <b>3</b> secondes",
      2: "Enlève <b>10</b> secondes",
      3: "Enlève <b>25</b> secondes"
    }
  },
  // Uncommon cards
  //1
  { 
    id: 5,
    name: "Temps Bonus",
    category: "2-star",
    stars: 2,
    rarity: "peu_commun",
    description: "➡️ Permet de voler des cartes à un joueur aléatoire décidé par une roue.",
    image: "images/card5.png",
    effects: {
      1: "Enlève <b>3</b> secondes",
      2: "Enlève <b>10</b> secondes",
      3: "Enlève <b>25</b> secondes"
    }
  },
  //2
  { 
    id: 6,
    name: "Dé points gratuits",
    category: "2-star",
    stars: 2,
    rarity: "peu_commun",
    description: "➡️ Donne la possibilité de lancer un certain nombre de dés et de récupérer le nombre de points obtenus.",
    image: "images/card6.png",
    effects: {
      1: "Nombre de dés : <b>1</b>",
      2: "Nombre de dés : <b>3</b>",
      3: "Nombre de dés : <b>5</b>"
    }
  },
  //3
  { 
    id: 7,
    name: "Poubelle",
    category: "2-star",
    stars: 2,
    rarity: "peu_commun",
    description: "➡️ Oblige un joueur de votre choix à défausser un certain nombre de cartes de sa main actuel.",
    image: "images/card7.png",
    effects: {
      1: "Défausse <b>1</b> cartes",
      2: "Défausse <b>3</b> cartes",
      3: "Défausse <b>5</b> cartes"
    }
  },
  //4
  { 
    id: 8,
    name: "Une en moins !",
    category: "2-star",
    stars: 2,
    rarity: "peu_commun",
    description: "➡️ Empêche le joueur de votre choix de choisir une réponse aléatoire avant l'affichage de la question, diminuant ces chances.",
    image: "images/card8.png",
    effects: {
      1: "Pas d'effet ❌",
      2: "Pas d'effet ❌",
      3: "Pas d'effet ❌"
    }
  },
  // Rare cards
  //1
  { 
    id: 9,
    name: "Grosse Poubelle",
    category: "3-star",
    stars: 3,
    rarity: "rare",
    description: "➡️ Oblige tous les joueurs sauf vous à supprimer une carte aléatoire de leur main.",
    image: "images/card9.png",
    effects: {
      1: "Pas d'effet ❌",
      2: "Pas d'effet ❌",
      3: "Pas d'effet ❌"
    }
  },
  //2
  { 
    id: 10,
    name: "Inversion",
    category: "3-star",
    stars: 3,
    rarity: "rare",
    description: "➡️ Remplace le nombre de points en jeu lors de la prochaine question par son opposé <i>(ex: passage de 10 points à -10 points)</i>.",
    image: "images/card10.png",
    effects: {
      1: "Pas d'effet ❌",
      2: "Pas d'effet ❌",
      3: "Pas d'effet ❌"
    }
  },
  //3
  { 
    id: 11,
    name: "Multiplication",
    category: "3-star",
    stars: 3,
    rarity: "rare",
    description: "➡️ Multiplie la valeur de la prochaine question.",
    image: "images/card11.png",
    effects: {
      1: "<i>Multiplie par <b>2</b></i>",
      2: "<i>Pas d'effet ❌</i>",
      3: "<i>Multiplie par <b>5</b></i>"
    }
  },
  //4
  { 
    id: 12,
    name: "Poubelle de Luxe",
    category: "3-star",
    stars: 3,
    rarity: "rare",
    description: "➡️ Oblige le joueur de votre choix de défausser sa carte la plus rare (Bouclier🛡️< 1★ < 2★ < 3★ < 4★ < 5★ < 6★).",
    image: "images/card12.png",
    effects: {
      1: "Pas d'effet ❌",
      2: "Pas d'effet ❌",
      3: "Pas d'effet ❌"
    }
  },
  // Epic cards
  //1
  { 
    id: 13,
    name: "Annulation",
    category: "4-star",
    stars: 4,
    rarity: "epique",
    description: "➡️ Annule l'effet de cartes jouées ce tour.",
    image: "images/card13.png",
    effects: {
      1: "Annule l'effet d'<b>1</b> carte",
      2: "Annule l'effet de <b>4</b> cartes",
      3: "Annule l'effet de <b>7</b> cartes"
    }
  },
  //2
  { 
    id: 14,
    name: "Donne moi ça",
    category: "4-star",
    stars: 4,
    rarity: "epique",
    description: "➡️ Permet de voler la carte la plus rare du joueur de votre choix, si ce joueur en possède plusieurs, il choisit laquelle vous donner (Bouclier🛡️< 1★ < 2★ < 3★ < 4★ < 5★ < 6★).",
    image: "images/card14.png",
    effects: {
      1: "Pas d'effet ❌",
      2: "Pas d'effet ❌",
      3: "Pas d'effet ❌"
    }
  },
  //3
  { 
    id: 15,
    name: "Échange",
    category: "4-star",
    stars: 4,
    rarity: "epique",
    description: "➡️ Permet d'échanger le score de deux joueurs de votre choix (pas vous).",
    image: "images/card15.png",
    effects: {
      1: "Pas d'effet ❌",
      2: "Pas d'effet ❌",
      3: "Pas d'effet ❌"
    }
  },
  //4
  { 
    id: 16,
    name: "Sens Interdit",
    category: "4-star",
    stars: 4,
    rarity: "epique",
    description: "➡️ Empêche un ou plusieurs joueur(s) de répondre à la prochaine question, leur enlevant toute chance de gagner des points.",
    image: "images/card16.png",
    effects: {
      1: "Empêche <b>1</b> joueur",
      2: "Empêche <b>3</b> joueurs",
      3: "Pas d'effet ❌"
    }
  },
  // Legendary cards
  //1
  { 
    id: 17,
    name: "Sens Interdit",
    category: "5-star",
    stars: 5,
    rarity: "legendaire",
    description: "➡️ Redistribue de manière égale tous les points possédés par tous les joueurs entre eux.",
    image: "images/card17.png",
    effects: {
      1: "Pas d'effet ❌",
      2: "Pas d'effet ❌",
      3: "Pas d'effet ❌"
    }
  },
  //2
  { 
    id: 18,
    name: "Skip",
    category: "5-star",
    stars: 5,
    rarity: "legendaire",
    description: "➡️ Permet de passer la question suivante en ignorant toutes les cartes ayant un impact sur sa valeur et en passant directement au prochain tour.",
    image: "images/card18.png",
    effects: {
      1: "Pas d'effet ❌",
      2: "Pas d'effet ❌",
      3: "Pas d'effet ❌"
    }
  },
  //3
  { 
    id: 19,
    name: "Un pour tous, tous pour un",
    category: "5-star",
    stars: 5,
    rarity: "legendaire",
    description: "➡️ Redistribue de manière égale toutes les cartes possédées par tous les joueurs entre eux.",
    image: "images/card19.png",
    effects: {
      1: "Pas d'effet ❌",
      2: "Pas d'effet ❌",
      3: "Pas d'effet ❌"
    }
  },
  // Shield cards
  //1
  { 
    id: 20,
    name: "Bouclier : Deck",
    category: "shield",
    stars: 0,
    rarity: "bouclier",
    description: "➡️ Empêche toutes modifications de votre deck et son contenu lors de ce tour par les cartes jouées par vous et les autres joueurs.",
    image: "images/card21.png",
    effects: {
      1: "Pas d'effet ❌",
      2: "Pas d'effet ❌",
      3: "Pas d'effet ❌"
    }
  },
  //2
  { 
    id: 21,
    name: "Bouclier : Question",
    category: "shield",
    stars: 0,
    rarity: "bouclier",
    description: "➡️ Empêche toutes modifications de la valeur de la prochaine question, qu'elle soit positive ou négative (sauf le passage de la question avec la carte SKIP).",
    image: "images/card22.png",
    effects: {
      1: "Pas d'effet ❌",
      2: "Pas d'effet ❌",
      3: "Pas d'effet ❌"
    }
  },
  //3
  { 
    id: 22,
    name: "Bouclier : Score",
    category: "shield",
    stars: 0,
    rarity: "bouclier",
    description: "➡️ Empêche la modification de votre score par d'autres cartes que ce soit positivement ou négativement. Ne protège pas contre les changements de valeur de la question.",
    image: "images/card23.png",
    effects: {
      1: "Pas d'effet ❌",
      2: "Pas d'effet ❌",
      3: "Pas d'effet ❌"
    }
  },

];

function renderCards(cardList) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  cardList.forEach(card => {
    container.innerHTML += `
      <div class="card ${card.rarity}">
        <img src="${card.image}" alt="${card.name}">
        <div class="card-content">
          <h3>${card.name}</h3>
          <div class="meta">
            ${card.category === "shield" ? "🛡️" : "⭐ - " + card.stars + " Étoile(s)"} • ${card.rarity === "peu_commun" ? "PEU COMMUN" : card.rarity.toUpperCase()}
          </div>
          <div class="description">${card.description}</div>
          <div class="effects">
            <p><strong> 1️⃣: </strong><i>${card.effects[1]}</i></p>
            <p><strong> 2️⃣: </strong><i>${card.effects[2]}</i></p>
            <p><strong> 3️⃣: </strong><i>${card.effects[3]}</i></p>
          </div>
        </div>
      </div>
    `;
  });
}

function filterCategory(category) {
  if (category === "all") {
    renderCards(cards);
  } else {
    renderCards(cards.filter(card => card.category === category));
  }
}

renderCards(cards);