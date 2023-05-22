const { table } = require('table')

module.exports = {
    /**
    * @param { String } name Nome/Gatilho Do Comando
    **/
    name: 'Ajuda',
    /**
    * @param { String } description Descrição Do Comando
    */
    description: 'Veja A Lista De Comandos',
    /**
    * @param { Array[String] } aliases Gatilhos Adicionais Do Comando
    */
    aliases: ['Cmds', 'Help'],
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
    * @param { Array } Commands - Retorna Um Array Com Os Comandos
    **/
    async run(Client, Commands) {

        let cmds = []

        Commands.forEach((cmd) => {
            cmds.push([`Nome: ${cmd.name}\nDescrição: ${cmd.description}\nApelidos: ${cmd.aliases.join(', ')}`])
        })

        Client.tableString(cmds)
    }
}