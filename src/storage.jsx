import wushang from "/src/assets/wuchang.jpg";
import cyberpunk from "/src/assets/cyberpunk.jpg";
import gtav from "/src/assets/gtav.jpg";
import battlefield from "/src/assets/battlefield.jpg";
import dmc5 from "/src/assets/dmc5.jpg";
import dota2 from "/src/assets/dota2.jpg";
import final7 from "/src/assets/final7.jpeg";
import hogwarts from "/src/assets/hogwarts.png";
import pathofexile from "/src/assets/pathofexile.jpg";
import wukong from "/src/assets/wukong.jpg";

export const games = [
  {
    id: crypto.randomUUID(),
    name: "WUCHANG: Fallen Feathers",
    description:
      "Step into the chaos of a myth-twisted Ming Dynasty as Bai Wuchang, a warrior cursed yet unbroken. Face madness, monsters, and the truth behind your forgotten past.",
    price: "2050",
    image: wushang,
  },
  {
    id: crypto.randomUUID(),
    name: "Cyberpunk 2077",
    description:
      "Step into a dystopian open world where power, style, and body mods rule the streets. Play as V, a mercenary outlaw chasing a chip that holds the key to immortality.",
    price: "1500",
    image: cyberpunk,
  },
  {
    id: crypto.randomUUID(),
    name: "Grand Theft Auto Five",
    description:
      "Dive into the ultimate open-world crime saga with Michael, Franklin, and Trevor. Heists. Chaos. Fast cars. Big money. What you do next... is entirely up to you.",
    price: "1250",
    image: gtav,
  },
  {
    id: crypto.randomUUID(),
    name: "Battlefield 6",
    description:
      "Step onto the battlefield of the near future with massive 128-player chaos, dynamic weather, and cutting-edge combat.",
    price: "1350",
    image: battlefield,
  },

  {
    id: crypto.randomUUID(),
    name: "Devil May Cry V",
    description:
      "Stylish combos. Demonic powers. Relentless action. Join Nero, Dante, and V as they fight to stop the demon invasion.",
    price: "1700",
    image: dmc5,
  },
  {
    id: crypto.randomUUID(),
    name: "Black Myth: Wukong",
    description:
      "Step into the legend of the Monkey King in a world shaped by myth, danger, and divine power. Master the staff. Face ancient beasts. Unravel your destiny.",
    price: "900",
    image: wukong,
  },
  {
    id: crypto.randomUUID(),
    name: "Dota 2",
    description:
      "Join the battle where strategy, skill, and split-second decisions define legends. Pick your hero. Control the lanes. Crush the ancient.",
    price: "700",
    image: dota2,
  },
  {
    id: crypto.randomUUID(),
    name: "Path of Exile",
    description:
      "Enter a darker, deadlier world where skill is everything and mercy is forgotten. Forge your build. Face your fate. Claim your legend.",
    price: "456",
    image: pathofexile,
  },
  {
    id: crypto.randomUUID(),
    name: "Hogwarts Legacy",
    description:
      "Step into the wizarding world like never before. Attend classes, learn powerful spells, tame magical beasts, and uncover ancient secrets.",
    price: "784",
    image: hogwarts,
  },
  {
    id: crypto.randomUUID(),
    name: "Final Fantasy VII",
    description:
      "Join Cloud Strife and an unforgettable cast in a battle to save the planet from the power-hungry Shinra and the vengeful Sephiroth.",
    price: "582",
    image: final7,
  },
];
