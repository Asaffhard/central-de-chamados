# Central de Chamados Hardman & Chicout

Aplicação web desenvolvida para a disciplina de **Programação Web**, com o objetivo de registrar, acompanhar e gerenciar chamados utilizando HTML5, CSS3 e JavaScript.

---

## 1. Identificação

- **Nome do projeto:** Central de Chamados Hardman & Chicout
- **Integrantes:** Asaff Hardman e Vitória Helena Chicout
- **Disciplina:** Programação Web
- **Unidade:** Unidade I – AV1 Front-end Interativo
- **Turma:** 6º Período CCO – UNIT
- **Professor:** Victor Brayner

---

## 2. Descrição

A Central de Chamados é uma aplicação web criada para facilitar o registro e o acompanhamento de solicitações de suporte.

O sistema pode ser utilizado em empresas ou instituições que precisam organizar chamados relacionados a problemas de acesso a sistemas, internet, manutenção e suporte.

O usuário pode cadastrar um chamado informando título, descrição, categoria, prioridade e solicitante. Após o cadastro, os chamados são exibidos em uma tabela e podem ter seu status alterado entre:

- Aberto;
- Em andamento;
- Concluído.

A aplicação também possui um Dashboard que apresenta a quantidade total de chamados e a quantidade correspondente a cada status.

O objetivo principal é disponibilizar uma interface simples, intuitiva e dinâmica para acompanhar os chamados, sem a necessidade de recarregar a página a cada operação.

---

## 3. Funcionalidades

As funcionalidades implementadas no projeto são:

### Cadastro e gerenciamento

- Cadastro de novos chamados;
- Validação dos campos do formulário;
- Geração automática do número do chamado;
- Definição automática do status inicial como "Aberto";
- Exibição dos chamados em tabela;
- Exibição do número, título, categoria, prioridade, solicitante e status;
- Alteração do status diretamente pela interface;
- Visualização dos detalhes de um chamado.

### Pesquisa e filtros

- Busca de chamados pelo título;
- Filtro de chamados por status;
- Atualização dinâmica dos resultados apresentados na tabela.

### Dashboard

- Exibição da quantidade total de chamados;
- Contagem dos chamados abertos;
- Contagem dos chamados em andamento;
- Contagem dos chamados concluídos;
- Atualização automática dos indicadores conforme as alterações realizadas.

### Funcionamento da interface

- Manipulação do DOM utilizando JavaScript;
- Utilização de eventos para interação com o usuário;
- Atualização da lista após o cadastro;
- Atualização dos dados sem recarregar a página;
- Armazenamento temporário dos chamados em memória durante a execução da aplicação.

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

Utilizado para definir a aparência da aplicação, incluindo:

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
- Validação dos dados;
- Manipulação de arrays e objetos;
- Manipulação do DOM;
- Eventos;
- Atualização do Dashboard;
- Busca e filtros;
- Alteração de status;
- Visualização de detalhes.

O JavaScript foi dividido em módulos para organizar melhor as responsabilidades de cada arquivo e facilitar a manutenção do código.

### Git

Utilizado para controle de versão, organização do desenvolvimento e registro das alterações por meio de commits e branches.

### GitHub

Utilizado para hospedar o repositório público e permitir o desenvolvimento colaborativo entre os integrantes.

### Visual Studio Code e Live Server

O Visual Studio Code foi utilizado como ambiente de desenvolvimento.

A extensão Live Server permite executar a aplicação por meio de um servidor HTTP local, necessário para o carregamento adequado dos módulos JavaScript.

**Observação:** não foram utilizados frameworks JavaScript ou bibliotecas externas para a lógica principal da aplicação.

---

## 5. Estrutura do projeto

A estrutura documentada do projeto é:

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

Responsável pela estilização, identidade visual e organização dos elementos da interface.

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

Responsável pela busca de chamados por título e pelo filtro de status.

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

Entretanto, **é necessário executá-la por meio de um servidor HTTP local**, pois o projeto utiliza módulos JavaScript (ES Modules).

### 6.1. Clone ou baixe o repositório

Clone o repositório utilizando o Git:

```bash
git clone https://github.com/Asaffhard/central-de-chamados.git
```

Também é possível baixar o projeto diretamente pelo GitHub:

1. Acesse o repositório;
2. Clique no botão **Code**;
3. Selecione **Download ZIP**;
4. Extraia os arquivos para uma pasta do computador.

### 6.2. Abra o projeto no Visual Studio Code

1. Abra o Visual Studio Code;
2. Acesse **File → Open Folder**;
3. Selecione a pasta `central-de-chamados`;
4. Verifique se o arquivo `index.html` está presente.

### 6.3. Instale a extensão Live Server

No Visual Studio Code:

1. Acesse a aba de extensões utilizando `Ctrl + Shift + X`;
2. Pesquise por **Live Server**;
3. Localize a extensão desenvolvida por Ritwick Dey;
4. Clique em **Install**.

### 6.4. Execute a aplicação

1. Abra o arquivo `index.html` no Visual Studio Code;
2. Clique com o botão direito sobre o arquivo;
3. Selecione **Open with Live Server**;
4. Aguarde a abertura automática da aplicação no navegador.

O endereço exibido será semelhante a:

`http://127.0.0.1:5500/index.html`

A porta poderá variar conforme a configuração do ambiente.

**IMPORTANTE:** não abra o arquivo `index.html` diretamente pelo explorador de arquivos do computador.

Endereços iniciados por `file://` podem provocar erros relacionados à política de segurança CORS e impedir o carregamento dos módulos JavaScript.

Isso pode ocasionar:

- Falha no cadastro de chamados;
- Dashboard sem atualização;
- Tabela de chamados sem funcionamento;
- Falhas na busca e nos filtros;
- Formulário recarregando a página indevidamente.

A utilização do Live Server evita essas restrições de carregamento dos módulos.

### 6.5. Teste as funcionalidades

Com a aplicação aberta pelo servidor local:

1. Preencha o formulário de cadastro;
2. Cadastre um novo chamado;
3. Verifique se ele aparece na tabela;
4. Observe a atualização do Dashboard;
5. Teste os filtros e a busca;
6. Altere o status de um chamado;
7. Verifique se os indicadores são atualizados.

**Observação:** na implementação descrita neste documento, os chamados são armazenados temporariamente em memória. Portanto, os registros são perdidos quando a página é recarregada.

---

## 7. Histórico de desenvolvimento

O desenvolvimento foi dividido entre os dois integrantes e organizado utilizando Git e GitHub.

Inicialmente, foi criado o repositório e desenvolvida a estrutura principal do HTML.

Em seguida, foi realizada a estilização da página utilizando CSS, incluindo o cabeçalho, Dashboard, formulários, tabela e rodapé.

Durante o desenvolvimento visual, o Dashboard passou por alterações para apresentar os dados de maneira mais clara e visual.

Após a estruturação da interface, foi desenvolvida a lógica JavaScript.

O JavaScript foi dividido em arquivos separados para organizar as diferentes responsabilidades da aplicação.

Foram utilizadas branches de desenvolvimento para separar as atividades e facilitar a integração das alterações.

Entre as branches utilizadas durante o projeto estão:

- `feature/estrutura-inicial`;
- `feature/background`;
- Branches destinadas às funcionalidades JavaScript;
- `readme.md`, destinada à documentação.

### 7.1. Divisão das atividades

#### Asaff Hardman

Responsável principalmente por:

- Estrutura inicial do HTML;
- Desenvolvimento e ajustes do CSS;
- Organização visual da interface;
- Estrutura visual do Dashboard;
- Organização inicial do repositório;
- Criação e utilização de branches;
- Participação na documentação;
- Testes de execução e identificação de problemas no ambiente local.

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

O desenvolvimento colaborativo permitiu que as tarefas fossem distribuídas entre os integrantes, favorecendo a organização do projeto e a utilização prática do controle de versão.

---

## 8. Decisões técnicas

### 8.1. Utilização de tabela para exibir os chamados

Foi escolhida uma tabela porque os chamados possuem várias informações que precisam ser comparadas e visualizadas de maneira organizada.

Cada linha representa um chamado, enquanto as colunas apresentam informações como número, título, categoria, prioridade, solicitante e status.

Essa estrutura facilita a leitura e o acompanhamento quando existem vários registros.

### 8.2. Validação realizada em JavaScript

A validação foi implementada em JavaScript, sem depender somente dos recursos padrão do HTML.

Dessa forma, foi possível verificar regras específicas, como tamanho mínimo do título e da descrição, além do preenchimento dos campos obrigatórios.

Também é possível apresentar mensagens específicas para cada erro identificado.

### 8.3. Separação do JavaScript em módulos

Em vez de colocar toda a lógica em um único arquivo, o JavaScript foi dividido de acordo com as responsabilidades.

Por exemplo:

- `chamados.js` gerencia os chamados;
- `dashboard.js` atualiza os indicadores;
- `filtros.js` realiza a pesquisa e os filtros;
- `validacao.js` valida os dados;
- `app.js` conecta as funcionalidades à interface.

Essa decisão ajuda a organizar o código, facilita a manutenção e permite identificar com mais clareza a finalidade de cada arquivo.

### 8.4. Dados armazenados em memória

Os chamados são armazenados em um array JavaScript durante a utilização da página.

Não foi utilizado banco de dados porque o objetivo da atividade é trabalhar o desenvolvimento front-end.

Na implementação descrita, os dados não permanecem salvos quando a aplicação é fechada ou recarregada.

### 8.5. Atualização da interface sem recarregar a página

Quando um chamado é cadastrado ou tem seu status alterado, a lista e o Dashboard são atualizados por meio de JavaScript.

Isso permite que o usuário visualize as alterações imediatamente, sem precisar atualizar manualmente a página.

### 8.6. Utilização de servidor HTTP local

A aplicação utiliza módulos JavaScript com instruções `import` e `export`.

Por esse motivo, optou-se pela execução por meio do Live Server durante o desenvolvimento e os testes.

O servidor local permite que o navegador carregue adequadamente os arquivos JavaScript, evitando as restrições associadas à abertura direta pelo protocolo `file://`.

---

## 9. Uso de Inteligência Artificial

Durante o desenvolvimento, foi utilizada Inteligência Artificial como ferramenta de apoio em atividades específicas.

O uso da ferramenta foi documentado para garantir transparência quanto à sua participação no projeto.

### 9.1. Registro de utilização

| Data | Ferramenta | Prompt utilizado | Finalidade |
|---|---|---|---|
| 07/10/2026 | ChatGPT – OpenAI | "Eu gostaria de fazer uma alteração nesse Dashboard para deixá-lo mais estilizado. Penso em fazer ele como se fosse um gráfico em forma de círculo. Ao mouse passar por cima, aparece a mensagem mostrando que parte representa, 'Em andamento' ou 'Concluído', e o círculo ao todo representa o total." | Planejamento e desenvolvimento da estrutura visual do Dashboard. |

### 9.2. Participação da IA

A Inteligência Artificial foi utilizada como ferramenta auxiliar para propor melhorias na apresentação visual do Dashboard.

O objetivo foi explorar uma alternativa de visualização que permitisse acompanhar os chamados de forma mais intuitiva, utilizando uma representação circular dos indicadores.

As sugestões fornecidas pela IA foram revisadas e adaptadas durante o desenvolvimento, buscando manter o código compatível com os conhecimentos da equipe e os requisitos da atividade.

### 9.3. Responsabilidade dos integrantes

A utilização da Inteligência Artificial não substituiu a participação dos integrantes no desenvolvimento.

A equipe permaneceu responsável por:

- Avaliar as sugestões recebidas;
- Compreender o funcionamento do código;
- Realizar adaptações;
- Executar testes;
- Corrigir problemas identificados;
- Verificar o atendimento aos requisitos da atividade.

---

## 10. Repositório

O código-fonte do projeto está disponível publicamente no GitHub:

https://github.com/Asaffhard/central-de-chamados

O repositório contém os arquivos da aplicação, o histórico de commits, as branches utilizadas e a documentação do projeto.

---

## 11. Integrantes

**Asaff Hardman**

**Vitória Helena Chicout**

Ciência da Computação – 6º Período

Centro Universitário Tiradentes – UNIT

Disciplina: Programação Web

Professor: Victor Brayner

2026
