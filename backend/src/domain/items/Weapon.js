const Item = require('./Item');

class Weapon extends Item {
    constructor(id, name, description, value, damage, ammoType = null) {
        super(id, name, description, "Weapon", value);
        this.damage = damage;        // Daño que inflige el arma
        this.ammoType = ammoType;    // Tipo de munición, si es un arma de fuego o similar
    }

    // Método para atacar a un personaje (aplicar daño)
    attack(target) {
        if (target.hp) {
            target.hp -= this.damage;
            console.log(`${this.name} inflige ${this.damage} de daño a ${target.name}.`);
        } else {
            console.log("El objetivo no tiene puntos de vida.");
        }
    }

    // Método para mostrar detalles del arma
    getDetails() {
        return `${this.name}: ${this.description} (Daño: ${this.damage}, Valor: ${this.value})`;
    }
}

module.exports = Weapon;
