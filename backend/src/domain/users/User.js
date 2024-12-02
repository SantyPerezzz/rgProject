class User {
    constructor(id, username, email, password) {
        this.id = id;                  // Identificador único
        this.username = username;      // Nombre de usuario
        this.email = email;            // Correo electrónico
        this.password = password;      // Contraseña
        this.characters = [];          // Lista de personajes asociados
        this.campaigns = [];           // Lista de campañas creadas
    }

    // Método para agregar un personaje
    addCharacter(character) {
        this.characters.push(character);
    }

    // Método para agregar una campaña
    addCampaign(campaign) {
        this.campaigns.push(campaign);
    }
}

module.exports = User;