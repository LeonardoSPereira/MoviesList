<h1 align="center">RocketMovies Back-End</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Tecnologias](#built_using)
- [Iniciando o projeto](#getting_started)
- [Usabilidade](#usage)
- [Testes](#tests)

## 🧐 Sobre <a name = "about"></a>

Projeto Back-end com funcionalidades de cadastrar usuários e que possibilite adicionar notas sobre seus filmes favoritos, informando a sua nota ao filme e possíveis tags sobre ele.

## ⛏️ Tecnologias usadas <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)

## 🏁 Iniciando o projeto <a name = "getting_started"></a>

Essas instruções vão te guiar sobre como ter uma cópia funcional do projeto na sua máquina local para desenvolvimento e testes.

### Pre-requisitos

Inicialmente você vai precisar de alguns programas instalados para que consiga fazer uso:

- [Visual Studio Code](https://code.visualstudio.com) - Editor de código
- [Node.js + npm](https://nodejs.org/en) - Versão LTS recomendada
- [Insomnia](https://insomnia.rest/download) - Para realizar requisições HTTP
- [Beekeeper Studio](https://www.beekeeperstudio.io) - Sistema de gerenciamento de banco de dados


### Instalação

Um passo a passo de como realizar a instalação dos arquivos na sua máquina.

Primeiramente, faça o download, clone do repositório ou uma cópia dos arquivos para seu computador.

Abra os arquivos com o VSCODE e abra o terminal do editor através do comando CTRL + ' ou por meio da barra de ferramentas.

Em seguida, no terminal, execute a seguinte linha de comando:

```
npm install
```
Esse comando irá instalar todas as dependências necessárias para que consiga realizar os testes.

Em seguida, execute uma das duas linhas de comando a seguir para iniciar o servidor local: 

```
npm run dev
```

Por fim, execute a seguinte linha de código:

```
npm run migrate
```

Esse código irá executar as migrations presentes no código necessárias para criar as tabelas de notas e tags dentro do banco de dados que foi criado automaticamente.

## 🎈 Usando <a name="usage"></a>

### Criando Usuário
Para iniciar o uso, abra o Insonmnia e o Beekeeper.
- No Insonmnia, no botão de criar nova coleção, clique em importar e em seguida, faça a importação do arquivo de nome 
```
insomnia_rocketmovies.json
```
presente dentro da raiz do projeto para dentro do insomnia e você terá todas as requisições prontas para usar. 

Em seguida, acesse a pasta User e selecione a opção "create", altere os dados que quiser, como nome, email e a senha e clique em "Send". Com isso, o seu usuário deverá ser criado.

### Iniciando uma sessão
Após criar seu usuário, acesse a pasta Sessions e selecione a opção "create". Altere os dados conforme cadastro de seu usuário, comemail e senha e clique em "Send". Com isso, você terá criado uma sessão na aplicação.

*É necessário iniciar uma sessão na aplicação, pelo fato de ser necessário o usuário estar autenticado para realizar as demais requisições. Conforme seria em uma aplicação normal, onde para acessar as suas funcionalidades, você precisa estar logado.*

### Atualizando dados do usuário

A função de atualizar os dados do usuário também estão disponíveis. Para isso, selecione o arquivo de update e altere os dados conforme desejar.

Também é possível atualizar a imagem do seu usuário. Acesse o arquivo Avatar e selecione a foto que desejar.

### Criando notas

Para criar notas, selecione o arquivo create, dentro da pasta Notes.

Em seguida, envie os seguintes dados, sempre em formato de JSON, title (Título do filme), description (Descrição do filme), rating (Sua nota para o filme, sendo um número inteiro entre 1 e 5) e tags(Categoria do filme, em formato de array):
```
{
  "title": "Vingadores",
  "description": "Grupo de super-heróis que tentam salvar a Terra",
  "rating": 4,
  "tags": ["ação", "ficção científica"]
}

```
### Listando notas
Para listar suas notas, selecione o arquivo de Index, onde é necessário, na aba de query, fazer uma busca pelo título da nota cadastrada. Já na de Show, é necessário que informe o id da nota que deseja listar.

### Listando tags
- Para listar as tags cadastradas, basta selecionar o arquivo de Index, dentro da pasta de Tags e clicar em Send. Com isso, suas tags serão listadas.

### Deletando uma nota
- Para deletar uma determinada nota, selecione o arquivo de delete e passe, na url, o id da nota que deseja deletar.
```
http://localhost:3333/notes/1
```
*Importante: caso delete uma nota, as tags relacionadas a ela também serão excluidas.*


**Lembre-se sempre que é possível visualizar os dados e verificar os relativos id's do usuário, das notas e das tags presentes no seu banco de dados por meio do Beekeeper.**

## 🔧 Testes <a name = "tests"></a>

Foram criados três testes para essa aplicação utilizando o JEST.

Os testes incluem criação de usuário, criar usuários com um email que já existe e de atualização de usuário.

Para os testes, foi utilizada a técnica de utilização de um banco de dados em memória com o objetivo de evitar a utilização do banco de dados real.

Para iniciar os testes, no terminal, digite o seguinte comando:
```
npm run test
```

