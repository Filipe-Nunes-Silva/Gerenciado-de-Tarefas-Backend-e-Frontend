# Gerenciamento de Tarefas Front-end + Back-end.
 Gerenciador de tarefas com back-end em node.js com banco de dados Mysql e front-end feito com template handlebars.

 ![Imagem do projeto funcionando](./img.gif)
 
## Iniciando o projeto:
Obs: Esse projeto é feito com back-end em Node.js e usa como banco de dados o Mysql, então para rodar esse projeto você precisa ter instalado as versões mais recentes do Node.js e do Mysql. Crie um banco de dados vazio no Mysql e preencha o arquivo .ENV como explicado abaixo!

**1 - Adicione a pasta node_modules com o comando:**
- npm install

**2 - Configure o arquivo .ENV:**

- PORT = porta que a aplicação vai rodar.
- DB = nome do banco de dados.
- US = usuario.
- PASSWORD = senha.
- HOTS = endereço de rede do banco de dado (caso seja no proprio computador coloque = localhost).
- TYPEDB = dialeto do banco de dados sql (caso o banco seja Mysql coloque = mysql).

Exemplo .env:
- PORT = 3000.
- DB = meubanco.
- US = root.
- PASSWORD = minhasenha.
- HOTS = localhost.
- TYPEDB = mysql.

**3 - Iniciando aplicação:**
- Use o comando 'npm start' para iniciar a aplicação!

(Ainda sem versão Mobile)
