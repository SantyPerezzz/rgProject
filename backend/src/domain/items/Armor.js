const Item = require('./Item');

class Armor extends Item {
    constructor(id, name, description, value, protection) {
        super(id, name, description, "Armor", value);
        this.protection = protection;  // Cantidad de protección contra el daño
    }

    // Método para equipar la armadura a un personaje
    equip(character) {
        if (!character.armor) {
            character.armor = this;
            console.log(`${character.name} ha equipado ${this.name}.`);
        } else {
            console.log(`${character.name} ya tiene una armadura equipada.`);
        }
    }

    // Método para mostrar detalles de la armadura
    getDetails() {
        return `${this.name}: ${this.description} (Protección: ${this.protection}, Valor: ${this.value})`;
    }
}

module.exports = Armor;
