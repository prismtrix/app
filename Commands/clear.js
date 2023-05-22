module.exports = {
    /**
    * @param { String } name Nome/Gatilho Do Comando
    **/
    name: 'Clear',
    /**
    * @param { String } description Descrição Do Comando
    */
    description: 'Limpar O Terminal',
    /**
    * @param { Array[String] } aliases Gatilhos Adicionais Do Comando
    */
    aliases: ['Limpar'],
    async run() {
        console.clear();
    }
}