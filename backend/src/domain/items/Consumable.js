const Item = require('./Item');

class Consumable extends Item {
    constructor(id, name, description, value, effects) {
        super(id, name, description, "Consumable", value, effects);
    }

    // Método para usar el consumible
    use(character) {
        this.applyEffects(character);  // Aplica los efectos al personaje
        console.log(`${character.name} ha usado ${this.name}.`);
    }

    // Método para mostrar detalles del consumible
    getDetails() {
        return `${this.name}: ${this.description} (Valor: ${this.value})`;
    }
}

module.exports = Consumable;
