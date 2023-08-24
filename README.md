<h1 align="center">Movies List</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)

</div>

## 📝 Table of Contents

- [Sobre](#about)
- [Iniciando o projeto](#getting_started)
- [Usabilidade](#usage)

## 🧐 Sobre <a name = "about"></a>

Projeto Back-end de um site que tenha funcionalidades de cadastrar usuários e que possibilite adicionar notas sobre seus filmes favoritos, informando a sua nota ao filme e possíveis tags sobre ele.

## 🏁 Iniciando o projeto <a name = "getting_started"></a>

Essas instruções vão te guiar sobre como ter uma cópia funcional do projeto na sua máquina local para desenvolvimento e testes.

### Pre-requisitos

Inicialmente você vai precisar de alguns programas instalados para que consiga fazer uso:

- [VSCODE](https://code.visualstudio.com) - Editor de código;
- [Node + NPM](https://nodejs.org/en) - Recomendado a versão LTS; 
- [Insonmnia](https://insomnia.rest/download) - Para que consiga fazer requisições HTTP do tipo GET, POST, PUT e DELETE;
- [Beekeeper](https://www.beekeeperstudio.io) - Editor de arquivos SQL.


### Instalação

Um passo a passo de como realizar a instalação dos arquivos na sua máquina.

Primeiramente, faça o download ou uma cópia dos arquivos para seu computador.

Abra os arquivos com o VSCODE e abra o terminal do editor através do comando CTRL + ' ou por meio da barra de ferramentas.

Em seguida, no terminal, execute a seguinte linha de comando:

```
npm install
```
Esse comando irá instalar todas as dependências necessárias para que consiga realizar os testes.

Em seguida, execute uma das duas linhas de comando a seguir para iniciar o servidor local: 

```
npm start
npm run dev
```
*Importante atenção que caso execute a primeira linha de código, a cada mudança nos arquivos, você deverá fechar o servidor com Ctrl + C e executá-lo novamente ou ocorrerão erros.*

Por fim, execute a seguinte linha de código:

```
npm run migrate
```

Esse código irá executar as migrations presentes no código necessárias para criar as tabelas de notas e tags dentro do banco de dados que foi criado automaticamente.

## 🎈 Usando <a name="usage"></a>

Para iniciar o uso, abra o Insonmnia e o Beekeeper.
- No Insonmnia, inicie um novo arquivo de testes e clique o ícone + próximo ao input de filtro e selecione a opção: "HTTP Request":


- Mude o tipo de requisição de GET para POST e digite o seguinte endereço ao lado: "localhost:3333/users", para que iniciemos o cadastro de nosso usuário.

- Em seguida, vamos adicionar nosso arquivo em formato json, para que seja enviado ao nosso banco de dados:
```
{
	"name": "leonardo",
	"email": "leonardo@email.com",
	"password": "123"
}
```
 *Atenção para o formato do arquivo, em especial com as aspas nos locais adequados.* <br>
Com isso, seu usuário será cadastrado no banco de dados.

- Para analisarmos o conteúdo dentro do nosso banco de dados, abra o Beekeeper, selecione o tipo de conexão para "SQLite" e selecione o caminho onde seu arquivo .db está localizado e clique em conecte.


- A partir disso, abra a tabela "users" e verá seu usuário cadastrado.


## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

