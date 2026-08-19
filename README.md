# 🎂 Cadastro de Pessoas

Aplicação web desenvolvida para praticar conceitos fundamentais de **HTML, JavaScript, manipulação do DOM, formulários e armazenamento de dados no navegador**.

O projeto foi criado como resolução de um desafio do **7 Days of Code** e permite cadastrar pessoas com nome e data de nascimento, mantendo as informações salvas mesmo após atualizar ou fechar a página.

## 🌐 Projeto no ar

👉 [Acessar aplicação](https://joaosilvateixeira33.github.io/cadastro-aniversario/)

## 📸 Sobre o projeto

O **Cadastro de Pessoas** é uma aplicação simples de gerenciamento de registros.

O usuário pode informar:

* Nome da pessoa
* Data de nascimento

Após o cadastro, os dados são exibidos automaticamente em uma tabela.

Além do cadastro, a aplicação permite **editar e excluir registros**, funcionando como um pequeno sistema CRUD diretamente no navegador.

## ✨ Funcionalidades

* ✅ Cadastro de pessoas
* ✅ Cadastro da data de nascimento
* ✅ Validação dos campos do formulário
* ✅ Validação do nome informado
* ✅ Exibição dos registros em uma tabela
* ✅ Edição de pessoas cadastradas
* ✅ Exclusão de registros
* ✅ Alteração automática do botão durante uma edição
* ✅ Formatação da data para o padrão brasileiro `dd/mm/aaaa`
* ✅ Persistência dos dados utilizando `localStorage`
* ✅ Mensagem quando não existem pessoas cadastradas
* ✅ Layout responsivo
* ✅ Interface desenvolvida utilizando Bootstrap

## 🧠 Conceitos praticados

Durante o desenvolvimento deste projeto foram praticados conceitos importantes de JavaScript, como:

* Manipulação do DOM
* `querySelector`
* Eventos com `addEventListener`
* Evento `submit`
* `event.preventDefault()`
* Arrays
* Objetos
* Funções
* Template strings
* Estruturas condicionais
* `forEach`
* Manipulação de elementos HTML com JavaScript
* Criação dinâmica de elementos
* `localStorage`
* `JSON.stringify()`
* `JSON.parse()`
* Manipulação de datas
* Formulários
* CRUD no Front-end

## 💾 Persistência dos dados

Os registros são armazenados utilizando a **Web Storage API**, através do `localStorage`.

Os dados são convertidos para JSON antes de serem armazenados:

```javascript
localStorage.setItem('persons', JSON.stringify(persons))
```

Quando a aplicação precisa recuperar as informações:

```javascript
const persons = JSON.parse(localStorage.getItem('persons')) || []
```

Dessa forma, os registros continuam disponíveis mesmo depois que a página é atualizada.

> Os dados ficam armazenados somente no navegador utilizado pelo usuário. O projeto não possui banco de dados ou backend.

## ✏️ Edição de registros

Ao clicar no botão **Editar**, os dados da pessoa selecionada são enviados novamente para o formulário.

O botão:

```text
Cadastrar
```

passa a apresentar:

```text
Salvar Edição
```

Depois que a alteração é salva, o formulário retorna automaticamente ao estado inicial.

## 🗑️ Exclusão de registros

Cada pessoa cadastrada possui um botão **Excluir**.

Ao excluir um registro:

1. O item é removido do array.
2. O `localStorage` é atualizado.
3. A tabela é renderizada novamente.

Isso mantém a interface sincronizada com os dados armazenados.

## 📅 Formatação das datas

O campo HTML `date` utiliza datas no formato:

```text
aaaa-mm-dd
```

Para melhorar a visualização, a aplicação converte a data para o formato brasileiro:

```text
dd/mm/aaaa
```

Exemplo:

```text
1998-05-20
```

é exibido como:

```text
20/05/1998
```

A aplicação também realiza o processo inverso ao carregar uma pessoa para edição.

## 🛠️ Tecnologias utilizadas

### HTML5

Responsável pela estrutura e pelos campos do formulário.

### JavaScript

Responsável por toda a lógica da aplicação, incluindo:

* Cadastro
* Edição
* Exclusão
* Renderização da tabela
* Manipulação do DOM
* Persistência dos dados
* Formatação das datas

### Bootstrap 5

Utilizado para construção da interface, responsividade, tabela, formulário, botões, cards e espaçamentos.

### LocalStorage

Utilizado para armazenar os registros diretamente no navegador.

## 📂 Estrutura do projeto

```text
cadastro-aniversario/
│
├── scripts/
│   └── main.js
│
├── styles/
│   └── style.css
│
├── index.html
├── LICENSE
└── README.md
```

### `index.html`

Contém a estrutura principal da aplicação:

* Cabeçalho
* Formulário
* Campo de nome
* Campo de data de nascimento
* Botão de cadastro
* Tabela de registros

### `scripts/main.js`

Contém toda a lógica JavaScript da aplicação:

* Cadastro
* Edição
* Exclusão
* LocalStorage
* Formatação das datas
* Renderização da tabela
* Manipulação do formulário

### `styles/style.css`

Arquivo reservado para estilos personalizados da aplicação.

## 🚀 Como executar o projeto

Você pode acessar diretamente a versão publicada:

👉 [Cadastro de Pessoas](https://joaosilvateixeira33.github.io/cadastro-aniversario/)

Ou executar localmente.

### 1. Clone o repositório

```bash
git clone https://github.com/joaosilvateixeira33/cadastro-aniversario.git
```

### 2. Entre na pasta do projeto

```bash
cd cadastro-aniversario
```

### 3. Abra o projeto

Abra o arquivo:

```text
index.html
```

diretamente no navegador.

Também é possível utilizar a extensão **Live Server** do Visual Studio Code.

## 🔗 Repositório

Código-fonte disponível em:

👉 [github.com/joaosilvateixeira33/cadastro-aniversario](https://github.com/joaosilvateixeira33/cadastro-aniversario)

## 🎯 Objetivo do projeto

O principal objetivo deste projeto foi colocar em prática conhecimentos fundamentais de JavaScript através da construção de uma aplicação real.

Durante o desenvolvimento foram aplicados conceitos essenciais para aplicações Front-end, principalmente:

```text
Formulário
   ↓
JavaScript
   ↓
Manipulação do DOM
   ↓
Array de objetos
   ↓
LocalStorage
   ↓
Renderização da tabela
```

O projeto representa a prática de operações fundamentais de um sistema de gerenciamento:

```text
CREATE → Cadastrar pessoa

READ → Exibir pessoas

UPDATE → Editar pessoa

DELETE → Excluir pessoa
```

## 👨‍💻 Autor

Desenvolvido por **João Marcos Silva Teixeira**.

GitHub:

👉 [@joaosilvateixeira33](https://github.com/joaosilvateixeira33)

## 📄 Licença

Este projeto está sob a licença **MIT**.

---

⭐ Se você gostou do projeto, considere deixar uma estrela no repositório!
