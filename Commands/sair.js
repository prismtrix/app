module.exports = {
    /**
    * @param { String } name Nome/Gatilho Do Comando
    **/
    name: 'Sair',
    /**
    * @param { String } description Descrição Do Comando
    */
    description: 'Encerre Este Programa',
    /**
    * @param { Array[String] } aliases Gatilhos Adicionais Do Comando
    */
    aliases: ['Fechar', 'Close', 'End'],
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
        Client.end(chalk.red('Finalizando'));
    }
}