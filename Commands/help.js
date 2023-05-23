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
    * @param { Array } Packages - Retorna Um Array Com As Packages
    **/
    async run(Client, Commands, Packages) {

        let cmds = []

        Commands.forEach((cmd) => {
            cmds.push([`Nome: ${chalk.green(cmd.name)}\nDescrição: ${chalk.yellow(cmd.description)}\nApelidos: ${chalk.blueBright(cmd.aliases.join(', '))}`])
        })
        Packages.forEach((pck) => {
            cmds.push([chalk.yellow(`Módulo: ${pck.name} v${pck.version}\nDescrição: ${pck.description}`)])
        })

        Client.tableString(cmds)
    }
}