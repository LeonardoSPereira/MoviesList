<h1 align="center">RocketMovies Back-End</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)

</div>

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Tecnologias](#built_using)
- [Iniciando o projeto](#getting_started)
- [Usabilidade](#usage)

## 🧐 Sobre <a name = "about"></a>

Projeto Back-end de um site que tenha funcionalidades de cadastrar usuários e que possibilite adicionar notas sobre seus filmes favoritos, informando a sua nota ao filme e possíveis tags sobre ele.

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
- [Insomnia](https://insomnia.rest/download) - Para testar requisições HTTP
- [Beekeeper Studio](https://www.beekeeperstudio.io) - Editor de SQL


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

### Criando Usuário
Para iniciar o uso, abra o Insonmnia e o Beekeeper.
- No Insonmnia, inicie um novo arquivo de testes e clique o ícone + próximo ao input de filtro e selecione a opção: "HTTP Request":


- Mude o tipo de requisição de GET para POST e digite o seguinte endereço ao lado para que iniciemos o cadastro de nosso usuário.
```
http://localhost:3333/users
```

- Em seguida, vamos adicionar nosso arquivo em formato JSON, para que seja enviado ao nosso banco de dados:
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


- A partir disso, abra a tabela "users" e verá seu usuário cadastrado. A sua senha não aparecerá como cadastrado, visto que ela foi criptografada antes de ser enviada ao banco de dados.

### Atualizando dados do usuário

- A função de atualizar os dados do usuário também estão disponíveis. Para isso, mude o endereço da URL, adicionando o id do usuário cadastrado após o "users":
```
http://localhost:3333/users/1
```
Além disso, mude o tipo de requisição HTTP para PUT e envie os novos dados no mesmo formato JSON.

### Criando notas

- Para criar notas, altere os dados da URL para a seguinte, sempre passando o id do usuário que deseja que a nota seja cadastrada
```
http://localhost:3333/notes/1
```
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
- Para listar suas notas, basta alterar o método HTTP para GET e com a mesma URL enviar a requisição.

*Lembre sempre de enviar o id do usuário na URL.*

*No método GET não é necessário enviar nenhum tipo de dado, visto que ele somente lista as notas existentes.*

### Listando tags
- Para listar as tags cadastradas, altere a URL, mudando o /notes para /tags e sempre passando o id do usuário, para listar as tags relacionadas com determinado usuário.
```
http://localhost:3333/tags/1
```

### Deletando uma nota
- Para deletar uma determinada nota, insira a seguinte URL, passando o id da nota.
```
http://localhost:3333/notes/1
```
*Importante atenção que caso delete uma nota, as tags relacionadas a ela também serão excluidas.*


**Lembre-se sempre que é possível visualizar os dados e verificar os relativos id's do usuário, das notas e das tags presentes no seu banco de dados por meio do Beekeeper.**

