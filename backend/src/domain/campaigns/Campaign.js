class Campaign {
    constructor(id, name, description, userId) {
        this.id = id;                   // Identificador único
        this.name = name;               // Nombre de la campaña
        this.description = description; // Descripción de la campaña
        this.userId = userId;           // ID del usuario que creó la campaña
        this.participants = [];         // Lista de personajes participantes
    }

    // Método para agregar un personaje participante
    addParticipant(character) {
        this.participants.push(character);
    }

    // Método para quitar un participante
    removeParticipant(characterId) {
        this.participants = this.participants.filter(
            (character) => character.id !== characterId
        );
    }
}

module.exports = Campaign;