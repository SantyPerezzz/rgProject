class Character {
    constructor(id, name, userId, characterClass, species, background, alignment, level = 1, strength = 10, dexterity = 10, constitution = 10, intelligence = 10, wisdom = 10, charisma = 10, hp = 100, mana = 50) {
        this.id = id;                  // Identificador único del personaje
        this.name = name;              // Nombre del personaje
        this.userId = userId;          // ID del usuario que creó el personaje
        this.characterClass = characterClass; // Clase del personaje (Guerrero, Mago, etc.)
        this.species = species;        // Especie del personaje (Humano, Elfo, Enano, etc.)
        this.background = background;  // Trasfondo del personaje (por ejemplo, noble, huérfano, etc.)
        this.alignment = alignment;    // Orientación del personaje (Ley bueno, Caótico neutral, etc.)
        this.level = level;            // Nivel del personaje
        this.strength = strength;      // Fuerza
        this.dexterity = dexterity;    // Destreza
        this.constitution = constitution; // Constitución
        this.intelligence = intelligence; // Inteligencia
        this.wisdom = wisdom;          // Sabiduría
        this.charisma = charisma;      // Carisma
        this.hp = hp;                  // Puntos de vida
        this.mana = mana;              // Puntos de maná
        this.inventory = [];           // Inventario de objetos
    }

    // Método para aplicar efectos de los objetos (como armas o pociones)
    applyEffects(item) {
        item.applyEffects(this);
    }

    // Método para mostrar los atributos del personaje
    getAttributes() {
        return {
            strength: this.strength,
            dexterity: this.dexterity,
            constitution: this.constitution,
            intelligence: this.intelligence,
            wisdom: this.wisdom,
            charisma: this.charisma
        };
    }

    // Método para atacar a un objetivo
    attack(target, weapon) {
        if (weapon instanceof Weapon) {
            weapon.attack(target);
        } else {
            console.log(`${this.name} no tiene un arma válida.`);
        }
    }

    // Método para recibir daño
    receiveDamage(damage) {
        this.hp -= damage;
        if (this.hp < 0) {
            this.hp = 0;
        }
        console.log(`${this.name} ha recibido ${damage} de daño. HP restante: ${this.hp}`);
    }

    // Método para curarse con pociones
    heal(healthPoints) {
        this.hp += healthPoints;
        console.log(`${this.name} se ha curado ${healthPoints} puntos de vida. HP actual: ${this.hp}`);
    }

    // Método para usar un hechizo o habilidad
    castSpell(spell, target) {
        if (spell instanceof Spell) {
            spell.cast(this, target);
        } else {
            console.log(`${this.name} no tiene un hechizo válido.`);
        }
    }

    // Método para aumentar el nivel del personaje
    levelUp() {
        this.level += 1;
        console.log(`${this.name} ha subido de nivel! Nivel actual: ${this.level}`);
    }

    // Método para cambiar la clase del personaje
    changeClass(newClass) {
        this.characterClass = newClass;
        console.log(`${this.name} ha cambiado su clase a ${newClass}`);
    }

    // Método para cambiar la orientación del personaje
    changeAlignment(newAlignment) {
        this.alignment = newAlignment;
        console.log(`${this.name} ha cambiado su orientación a ${newAlignment}`);
    }

    // Mostrar información completa del personaje
    getFullCharacterInfo() {
        return {
            name: this.name,
            species: this.species,
            background: this.background,
            alignment: this.alignment,
            level: this.level,
            attributes: this.getAttributes()
        };
    }
}

module.exports = Character;
