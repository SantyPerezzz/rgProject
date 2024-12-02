class Item {
    constructor(id, name, description, itemType, value, effects = {}) {
        this.id = id;                    // Identificador único del objeto
        this.name = name;                // Nombre del objeto
        this.description = description;  // Breve descripción del objeto
        this.itemType = itemType;        // Tipo de objeto (Ej: "Weapon", "Potion", "Armor")
        this.value = value;              // Valor del objeto (puede ser oro, poder, etc.)
        this.effects = effects;          // Efectos adicionales (Ej: { hp: +10, mana: -5 })
    }

    // Método para aplicar el efecto del objeto a un personaje
    applyEffects(character) {
        for (const [stat, effect] of Object.entries(this.effects)) {
            if (character[stat] !== undefined) {
                character[stat] += effect;
            }
        }
    }

    // Método para mostrar detalles del objeto
    getDetails() {
        return `${this.name}: ${this.description} (Tipo: ${this.itemType}, Valor: ${this.value})`;
    }
}

module.exports = Item;
