# Central de Chamados Hardman & Chicout

Aplicação web desenvolvida para a disciplina de Programação Web, com o objetivo de registrar, acompanhar e gerenciar chamados utilizando HTML5, CSS3 e JavaScript.

---

## 1. Identificação

- **Nome do projeto:** Central de Chamados Hardman & Chicout
- **Integrantes:** Asaff Hardman e Vitória Helena Chicout
- **Disciplina:** Programação Web
- **Unidade:** Unidade I - AV1 Front-end Interativo
- **Turma:** 6° Período CCO - UNIT
- **Professor:** Victor Brayner

---

## 2. Descrição

A Central de Chamados é uma aplicação web criada para facilitar o registro e o acompanhamento de solicitações de suporte.

O sistema pode ser utilizado em empresas ou instituições que precisam organizar chamados relacionados a problemas de acesso a sistemas, internet, manutenção e suporte.

O usuário pode cadastrar um chamado informando título, descrição, categoria, prioridade e solicitante. Após o cadastro, os chamados são exibidos em uma tabela e podem ter seu status alterado entre:

- Aberto;
- Em andamento;
- Concluído.

A aplicação também possui um Dashboard para apresentar a quantidade total de chamados e a quantidade correspondente a cada status.

O objetivo principal é disponibilizar uma interface simples para acompanhar os chamados sem a necessidade de recarregar a página.

---

## 3. Funcionalidades

As funcionalidades implementadas no projeto são:

- Cadastro de novos chamados;
- Validação dos campos do formulário;
- Geração automática do número do chamado;
- Definição automática do status inicial como "Aberto";
- Exibição dos chamados em tabela;
- Exibição do número, título, categoria, prioridade, solicitante e status;
- Alteração do status diretamente pela interface;
- Busca de chamados pelo título;
- Filtro de chamados por status;
- Visualização dos detalhes de um chamado;
- Atualização automática da lista após o cadastro;
- Atualização automática do Dashboard;
- Contagem dos chamados abertos;
- Contagem dos chamados em andamento;
- Contagem dos chamados concluídos;
- Exibição da quantidade total de chamados;
- Atualização da interface utilizando manipulação do DOM;
- Armazenamento dos dados em memória durante a execução da aplicação.

---

## 4. Tecnologias utilizadas

O projeto utiliza as seguintes tecnologias:

### HTML5

Utilizado para criar a estrutura da página, incluindo:

- Cabeçalho;
- Dashboard;
- Área de busca;
- Filtro;
- Tabela de chamados;
- Formulário de cadastro;
- Rodapé.

### CSS3

Utilizado para definir a aparência da aplicação, como:

- Cores;
- Espaçamentos;
- Bordas;
- Sombras;
- Formulários;
- Botões;
- Tabela;
- Dashboard;
- Organização visual da página.

### JavaScript

Utilizado para implementar o funcionamento da aplicação, incluindo:

- Cadastro dos chamados;
- Validação;
- Manipulação de arrays e objetos;
- Manipulação do DOM;
- Eventos;
- Atualização do Dashboard;
- Busca;
- Filtro;
- Alteração de status;
- Visualização de detalhes.

O JavaScript foi dividido em módulos para organizar melhor cada responsabilidade da aplicação.

### Git

Utilizado para controle de versão e registro do desenvolvimento através de commits e branches.

### GitHub

Utilizado para hospedar o repositório público e permitir o desenvolvimento colaborativo entre os integrantes.

Não foram utilizados frameworks JavaScript ou bibliotecas externas para a lógica principal da aplicação.

---

## 5. Estrutura do projeto

A estrutura atual do projeto é:


central-de-chamados/
│
├── index.html
├── style.css
├── README.md
│
└── js/
    ├── app.js
    ├── chamados.js
    ├── dashboard.js
    ├── filtros.js
    └── validacao.js


### `index.html`

Responsável pela estrutura principal da página.

Contém:

- Dashboard;
- Busca e filtro;
- Tabela de chamados;
- Formulário de cadastro;
- Cabeçalho e rodapé.

### `style.css`

Responsável pela estilização e organização visual da aplicação.

### `js/app.js`

Arquivo principal do JavaScript.

É responsável por conectar as diferentes partes da aplicação, capturar eventos do formulário, busca, filtros, alteração de status e visualização de detalhes.

### `js/chamados.js`

Responsável pelo armazenamento dos chamados em memória, criação de novos chamados e exibição dos registros na tabela.

### `js/dashboard.js`

Responsável por calcular e atualizar:

- Total de chamados;
- Chamados abertos;
- Chamados em andamento;
- Chamados concluídos.

### `js/filtros.js`

Responsável pela busca por título e pelo filtro de status.

### `js/validacao.js`

Responsável por verificar os dados do formulário antes de permitir o cadastro do chamado.

Entre as validações utilizadas estão:

- Título com pelo menos 5 caracteres;
- Descrição com pelo menos 10 caracteres;
- Categoria selecionada;
- Prioridade selecionada;
- Nome do solicitante informado.

---

## 6. Como executar

A aplicação não necessita de banco de dados ou instalação de dependências.

### 1. Clone o repositório

```bash
git clone https://github.com/Asaffhard/central-de-chamados.git
```

Também é possível utilizar a opção **Download ZIP** do GitHub.

### 2. Abra a pasta do projeto

Após baixar o projeto, abra a pasta:

central-de-chamados

### 3. Execute a aplicação

Como o projeto utiliza módulos JavaScript, é recomendado executá-lo através de um servidor local.

Caso utilize o Visual Studio Code, pode ser utilizada uma extensão como **Live Server**.

Após iniciar o servidor, abra a aplicação pelo endereço apresentado no navegador.

---

## 7. Histórico de desenvolvimento

O desenvolvimento foi dividido entre os dois integrantes e organizado utilizando Git e GitHub.

Inicialmente foi criado o repositório e desenvolvida a estrutura principal do HTML.

Em seguida, foi realizada a estilização da página utilizando CSS, incluindo o cabeçalho, Dashboard, formulários, tabela e rodapé.

Durante o desenvolvimento visual, o Dashboard passou por alterações para apresentar os dados de maneira mais clara e visual.

Após a estruturação da interface, foi desenvolvida a lógica JavaScript.

O JavaScript foi dividido em arquivos separados para organizar diferentes responsabilidades da aplicação.

Foram utilizadas branches de desenvolvimento antes da integração das alterações à branch principal.

Entre as branches utilizadas durante o projeto estão:

- `feature/estrutura-inicial`;
- `feature/background`;
- branches destinadas às funcionalidades JavaScript.

### Divisão das atividades

#### Asaff Hardman

Responsável principalmente por:

- Estrutura inicial do HTML;
- Desenvolvimento e ajustes do CSS;
- Organização visual da interface;
- Estrutura visual do Dashboard;
- Organização inicial do repositório;
- Criação e utilização de branches;
- Participação na documentação.

#### Vitória Helena Chicout

Responsável principalmente por:

- Implementação da lógica JavaScript;
- Cadastro de chamados;
- Renderização dos chamados;
- Validação do formulário;
- Busca;
- Filtro;
- Alteração de status;
- Atualização dinâmica do Dashboard;
- Organização do JavaScript em módulos.

Após o desenvolvimento das funcionalidades, as alterações foram integradas à branch `main`.

---

## 8. Decisões técnicas

### 8.1. Utilização de tabela para exibir os chamados

Foi escolhida uma tabela porque os chamados possuem várias informações que precisam ser comparadas e visualizadas de maneira organizada.

Cada linha representa um chamado, enquanto as colunas apresentam informações como número, título, categoria, prioridade, solicitante e status.

Essa estrutura facilita a leitura quando existem vários registros.

---

### 8.2. Validação realizada em JavaScript

A validação foi implementada em JavaScript em vez de depender somente dos recursos padrão do HTML.

Dessa forma, foi possível verificar regras específicas, como tamanho mínimo do título, descrição e nome do solicitante.

Também é possível apresentar mensagens específicas para cada erro.

---

### 8.3. Separação do JavaScript em módulos

Em vez de colocar toda a lógica dentro de um único arquivo, o JavaScript foi separado de acordo com as responsabilidades.

Por exemplo:

- `chamados.js` trabalha com os chamados;
- `dashboard.js` atualiza os números do Dashboard;
- `filtros.js` realiza a pesquisa e os filtros;
- `validacao.js` valida os dados;
- `app.js` conecta as funcionalidades à interface.

Essa decisão ajuda a organizar o código e facilita a identificação da função de cada arquivo.

---

### 8.4. Dados armazenados em memória

Os chamados são armazenados em um array JavaScript durante a utilização da página.

Não foi utilizado banco de dados porque o objetivo da atividade é trabalhar o desenvolvimento front-end.

Por isso, os dados não permanecem salvos quando a aplicação é fechada ou recarregada.

---

### 8.5. Atualização da interface sem recarregar a página

Quando um chamado é cadastrado ou tem seu status alterado, a lista e o Dashboard são atualizados através do JavaScript.

Isso permite que o usuário veja as alterações imediatamente, sem atualizar manualmente a página.

---

## 11. Uso de IA

Durante o desenvolvimento foi utilizada Inteligência Artificial como ferramenta de apoio.

| 07/10/2026 | ChatGPT - OpenAI | "Eu gostaria de fazer uma alteração nesse Dashboard para deixá-lo mais estilizado. Penso em fazer ele como se fosse um gráfico em forma de círculo. Ao mouse passar por cima, aparece a mensagem mostrando que parte representa, 'Em andamento' ou 'Concluído', e o círculo ao todo representa o total." | Planejamento e desenvolvimento da estrutura visual do Dashboard |

As sugestões fornecidas pela IA foram revisadas e adaptadas durante o desenvolvimento para manter o código compatível com os conhecimentos da equipe e com os requisitos da atividade.

Os integrantes permaneceram responsáveis por compreender, testar e modificar o código utilizado no projeto.

---

## Repositório

O código-fonte do projeto está disponível publicamente no GitHub:

https://github.com/Asaffhard/central-de-chamados

---

## Integrantes

**Asaff Hardman**  
**Vitória Helena Chicout**
