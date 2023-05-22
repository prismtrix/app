module.exports = {
    /**
    * @param { String } name Nome/Gatilho Do Comando
    */
    name: 'Atualizar',
    /**
    * @param { String } description Descrição Do Comando
    */
    description: 'Atualize Os Comandos',
    /**
    * @param { Array[String] } aliases Gatilhos Adicionais Do Comando
    */
    aliases: ['Atualizar Comandos'],
    /**
    * @param { Class } Client 
    * # O Client
    * Métodos:
    *   - Client.send(String);
    *   - Client.table(Array);
    *   - Client.title(String);
    *   - Client.confirm(String?)
    *   - Client.tableString(Array);
    *   - Client.clear();
    *   - Client.end(String?);
    *   - Client.updateCommands();
    **/
    async run(Client) {
        Client.updateCommands();
    }
}