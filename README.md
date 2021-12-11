# BuscaCEP

## Descrição:

  O BuscaCEP é um aplicativo pensado primeiramente em desktops, com o intuito de facilitar no dia a dia de quem busca por endereços e CEPs. O aplicativo buscar trazer uma interface simples e amigavél ao usuário.
  
## Funcionalidades:
   * Buscar o CEP de determinada localização pelo endereço
   * Buscar o endereço por determinado CEP
  
## Tecnologias ultilizadas:
  Para desenvolver o BuscaCEP foram usadas as seguintes tecnologias:
  <br/>
  
  * Desenvolvimento
    * JavaScript ES6+
    * ReactJs
    * Web components
  * Manipulação de estados e funções globais
    * Context API
  * Testes
    * Cypress
  * Estilização
    * Styled Components
  * API's
    * Para buscar os estados que são fornecidos na página de buscar endereço:
     [Veja aqui](https://servicodados.ibge.gov.br/api/v1/localidades/estados).
    * Para buscar os municipios que são fornecidos na página de buscar endereço:
     [Veja aqui](https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/distritos).
    * Para buscar o endereço pelo CEP na pagina de buscar pelo CEP:
     [Veja aqui](https://viacep.com.br/ws/${sigla}/${nomeCidade}/${log}/json/).
     
 ## O projeto:
 1. Clone o repositório
  * `git clone git@github.com:yurigarrido/busca-cep.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd busca-cep`

2. Instale as dependências:
    * `npm install`
3. Abra o projeto no navegador:
    * `npm start`
    * é importante que o projeto estaja na porta 3000 para que os testes funcionem da maneira correta
4. Executando os testes:
    * `npm run cypress`
      * Após isso o cypress abrira com os segintes arquivos disponíveis para serem executados, basta clicar em um e o teste rodará.:
         * byCep - testa a página de buscar pelo CEP 
         * home - testa a página home
         * e2eSimmulation - faz testes como se fosse um usuário vendo a aplicação   

## Ilustração
### Aqui podemos ver a página de entrada da aplicação
<br />

![home](https://user-images.githubusercontent.com/81384601/145679276-76fd016b-181b-43ea-8d05-17aba9e5bedf.png)

<br />
<br />

### Aqui podemos ver a página de buscar pelo CEP
<br />

![buscarEndereco](https://user-images.githubusercontent.com/81384601/145679334-3de8ef85-5c55-4632-8251-d048578fb319.png)

<br />

### Aqui podemos ver um exemplo da pagina de buscar pelo CEP

![buscarEnderecoExemplo](https://user-images.githubusercontent.com/81384601/145679382-4b5e032f-f5bb-47a4-a114-42a3ea46f41c.png)

<br />
<br />

### Aqui podemos ver a página de buscar pelo endereço
<br />

![buscarCep](https://user-images.githubusercontent.com/81384601/145679421-ac2fa677-8501-40ed-aadb-3d1783e81df3.png)


<br />

### Aqui podemos ver um exemplo da pagina de buscar pelo endereço

![buscarCepExemplo](https://user-images.githubusercontent.com/81384601/145679430-502c5b79-040e-455b-a3b1-156a54b32782.png)
