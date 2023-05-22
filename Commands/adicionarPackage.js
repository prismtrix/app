const { exec } = require('child_process');

module.exports = {
  /**
  * @param { String } name Nome/Gatilho Do Comando
  */
  name: 'Package',
  /**
  * @param { String } description Descrição Do Comando
  */
  description: 'Atualize Os Pacotes Utilizados',
  /**
  * @param { Array[String] } aliases Gatilhos Adicionais Do Comando
  */
  aliases: ['Npm'],
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
    const q = await Client.confirm('Qual a Package Que Deseja Instalar? ')
    exec(`npm i ${q}`, (err, stdout, stderr) => {
      if (err) {
        Client.send('Ocorreu Um Erro Ao Instalar A Package')
      } else {
        Client.send(`Package Instalada Com Sucesso`);
      }
    });
  }
}