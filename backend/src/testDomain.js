// Importar las clases
const Item = require('./domain/items/Item');
const Weapon = require('./domain/items/Weapon');
const Armor = require('./domain/items/Armor');
const Consumable = require('./domain/items/Consumable');

// Crear un personaje ficticio
const character = {
    id: 1,
    name: "Aragorn",
    hp: 50,
    mana: 30,
    armor: null,
};

// Crear algunos objetos
const sword = new Weapon(1, "Espada de Fuego", "Una espada ardiente que inflige gran daño.", 100, 20);
const shield = new Armor(2, "Escudo de Hierro", "Un escudo resistente que reduce el daño.", 75, 10);
const healthPotion = new Consumable(3, "Poción de Vida", "Restaura 20 puntos de vida.", 50, { hp: +20 });

// Realizar acciones con los objetos
sword.attack(character);  // Atacar con el arma
shield.equip(character);  // Equipar la armadura
healthPotion.use(character);  // Usar el consumible

// Mostrar los detalles de los objetos y el estado final del personaje
console.log(sword.getDetails());
console.log(shield.getDetails());
console.log(healthPotion.getDetails());
console.log("Estado final del personaje:", character);
