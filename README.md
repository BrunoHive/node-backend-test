### Teste para vaga backend com Node.Js

#### Contexto

- Construir uma API REST capaz de realizar o `C.R.U.D.` seguindo os padrões atuais, manipulando os valores de entrada, processando e retornando os dados, mensagens e status coerentes.

---

#### Especificações da aplicação

- Utilize `JavaScript` ou `TypeScript`.
- Utilize as **ferramentas de sua preferência** para manipulação de requisições _http_, _banco de dados_ e outros.
- A aplicação deve ser construída utilizando o `design pattern` padrão do **MVC**.

---

##### RNF

##### **Obrigatório**

- A API deve seguir os princípios do desgin pattern `RESTful.`
- Manipulação de dados no padrão `JSON`.
- Os dados referentes à(s) entidade(s) devem ser persistidos em BD.
- Isole as operações feitas diretamente no banco de dados em repositórios.
- Retorno das requisições e status com semântica nas operações realizadas.
- Tratamento de erros e exceções.

##### **Bônus**

- Documentação da API, suas rotas e parâmetros.
- Documentação dos requisitos necessários para rodar a aplicação.

##### **Diferencial**

- Criação de suíte de testes unitários.
- Containerização da aplicação com Docker.
- Live demo da aplicação.

---

##### RF

- A entidade de Usuário deve possuir as seguintes informações:
  - id: string, (primário)(gerado automaticamente),
  - name: string,
  - lastname: string,
  - nickname: string, (único) - máx. 30 caracteres
  - address: string, // O endereço todo dentro da string
  - bio: string, (opcional) - máx. 100 caracteres // breve descrição sobre o usuário
  - createdAt: Date,
  - updatedAt: Date

- Métodos:
  - [] Cria um novo usuário recebendo os dados pelo corpo da requisição: retorna os dados do usuário criado com status correspondente.
    - Se nickname já existe, retornar status e mensagem de erro.
  - [] Listar todos os usuários cadastrados filtrados pelos campos `nome` e/ou `sobrenome`, filtrados por parâmetros de consulta: retorna um array de usuários.
  - [] Listar um usuário pelo nickname passado como parâmetro: retorna um único usuário com nome, sobrenome e nickname.
  - [] Alterar o sobrenome e o endereço do usuário recebido no corpo da requisição, baseado no id recebido como parâmetro de rota: retorna o usuário alterado com as novas informações.
  - [] Alterar o nickname de um usuário recebido no corpo da requisição, baseado no id recebido como parâmetro de rota: retorna o usuário alterado com as novas informações.
    - Se o nickname passado já existir, deve retornar status e mensagem de erro.
  - [] Deletar um usuário baseado no id recebido como parâmetro de rota: retorna o status de sucesso.

--Iniciar projeto
basta dar npm i para baixar as dependencies do projeto,
em seguida node index.js para rodar aplicaçao global,
a partir dela sera utilizado a porta 3000 do seu localhost,
caso desejar visualizar no banco utilizei o dbeaver e pode encontra,
as configuraçoes no arquivo .env

--Usando rotas API 

post - '/user' 
ira criar usuario

get - '/user'
ira trazer todos usuarios

put - '/user/:id'
ira atualizar usuario com base no id alterando apenas campos na requisiçao

delete - '/user/:id'
ira apagar registro do usuario com base em seu id



--Observaçoes finais:
os demais pontos como container e testes ainda estou em processo de estudo 
e nao me senti seguro em implementar,por esse motivo nao implementei 