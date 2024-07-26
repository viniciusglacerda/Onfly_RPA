# Desafios de Automação

## Desafio 1: Preenchimento Automático de Formulário

### Objetivo

Automatizar o preenchimento de um formulário HTML complexo com dados fictícios e realistas.

### Instruções de Uso

1. **Código**: O código para preencher o formulário pode ser encontrado no arquivo `preenchimentoFormulario.js`.
2. **Como Executar**:
   - Abra a página do formulário no seu navegador.
   - Abra o console do navegador (normalmente pressionando `F12` ou `Ctrl+Shift+I` e navegando para a aba "Console").
   - Cole o conteúdo do arquivo `preenchimentoFormulario.js` no console e execute-o.
   - Chame a função `await insertData(doc)` no console para preencher o formulário.

**Nota**: As funções de submit foram identificadas analisando o código fonte da página e o comportamento das funções. 

### Ferramentas Alternativas

Além de usar JavaScript puro, podemos utilizar alguns frameworks e ferramentas como [Selenium](https://www.selenium.dev/) e [Playwright](https://playwright.dev/) para automação de testes e preenchimento de formulários.

## Desafio 2: Manipulação do DOM

### Objetivo

Alterar o texto de todos os elementos `<p>` em uma página HTML.

### Instruções de Uso

1. **Código**: O código para manipular o DOM pode ser encontrado no arquivo `manipulacaoDOM.js`.
2. **Como Executar**:
   - Abra a página HTML desejada no seu navegador.
   - Abra o console do navegador (normalmente pressionando `F12` ou `Ctrl+Shift+I` e navegando para a aba "Console").
   - Cole o conteúdo do arquivo `manipulacaoDOM.js` no console e execute-o.
   - Chame a função `changeP()` no console para alterar o texto de todos os elementos `<p>` para "Texto alterado".