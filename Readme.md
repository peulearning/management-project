# Gerenciador de Projetos e Tarefas 💻

Uma aplicação web de gerenciamento de projetos e tarefas que permite aos usuários visualizar, adicionar, editar e excluir projetos e suas respectivas tarefas. Cada projeto pode conter uma ou mais tarefas associadas.

## Tecnologias Utilizadas

- **Java Server Faces (JSF)** com **RichFaces** para a camada de apresentação.
- **Spring Framework** para a camada de negócio e injeção de dependência.
- **Hibernate** para mapeamento objeto-relacional (ORM) e acesso ao banco de dados.
- **HQL (Hibernate Query Language)** para consultas ao banco de dados.

## Requisitos Funcionais 📚

1. **Cadastro de Projetos**:
    - Permitir aos usuários adicionar novos projetos, incluindo os campos de título, descrição e data de início.

2. **Listagem de Projetos**:
    - Exibir uma lista de todos os projetos cadastrados, com opções para visualizar, editar e excluir cada um.

3. **Cadastro de Tarefas**:
    - Permitir aos usuários adicionar novas tarefas para um projeto existente, incluindo os campos de título, descrição, prioridade (Muito Alta, Alta, Baixa e Muito Baixa) e estimativa em horas.
    - Exibir uma lista de todas as tarefas associadas a um projeto, com opções para visualizar, editar e excluir cada uma.

## Requisitos Técnicos 🛠️

1. **Padrão MVC**:
    - Utilize o padrão de projeto MVC (Model-View-Controller) para estruturar a aplicação.

2. **RichFaces**:
    - Utilize RichFaces para aprimorar a interface do usuário com componentes ricos.

3. **Injeção de Dependências**:
    - Configure o Spring para realizar a injeção de dependências nos beans gerenciados pelo JSF.

4. **Mapeamento com Hibernate**:
    - Utilize o Hibernate para mapear as entidades Projeto e Tarefa para o banco de dados, estabelecendo o relacionamento entre elas.

5. **Consultas HQL**:
    - Implemente consultas HQL para as operações de adição, edição, remoção e listagem de projetos e tarefas.

## Como Executar o Projeto ✅

### Pré-requisitos 🪄

- Certifique-se de ter o JDK instalado.
- Tenha um servidor de banco de dados configurado (ex: MySQL, PostgreSQL).

### Configuração ⚙️

1. Clone o repositório:
   ```bash
   git clone https://github.com/peulearning/management-project.git
   cd management-project
   ``` 
Configure o arquivo application.properties com as credenciais do banco de dados.
Executar
Compile e execute a aplicação utilizando um servidor de aplicação compatível com JSF (ex: Apache Tomcat).
Contribuição
Sinta-se à vontade para contribuir! Abra uma issue ou envie um pull request para melhorias ou correções.

### Licença 📃
Este projeto é licenciado sob a Licença MIT.