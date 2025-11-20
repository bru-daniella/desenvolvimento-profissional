# Estudo de Caso com Rotas e Consumo de API - Prática 09

Este estudo de caso é um projeto realizado para demonstrar a aplicação de alguns conceitos e arquiteturas vistas na aula de `Desenvolvimento Web`

## 🛠️ Tecnologias

Este projeto possui duas partes, uma web e uma mobile e está estruturado em:
- Web
    - React
    - Vite
    - Axios
    - Bootstrap 5
- Mobile
    - React Native
    - Expo
    - Expo Router e React Navigation
    - Axios

A API consumida foi fornecida externamente e não faz parte do projeto em si.

## 🛣️ Rotas
### Web
As rotas da aplicação Web seguem o definido no arquivo `routes.ts` existente na raiz da aplicação, e são as seguintes:

* `projects`: A Index, que exibe a lista de todos os produtos
* `projects/ID_DO_PRODUTO`: A aba de detalhes do produto

### Mobile
As rotas da aplicação Mobile são estruturas através dos arquivos e pastas criadas dentro da pasta app, como determinado pelo `Expo Router`, e são as seguintes:

* `/`: A Index, que exibe a lista de todos os produtos
* `projects/ID_DO_PRODUTO`: A aba de detalhes do produto

## ⚙️ Como Executar

```
ATENÇÃO: A execução é realizada de formas distintas e em portas distintas para cada um dos módulos da aplicação
```
### Clone o repositório:

```bash
git clone 
cd estudo-de-caso
```

### Para acessar o módulo Web:

#### Acesse a pasta da aplicação Web:

```bash
cd web
```

#### Instale as dependências via npm:

```bash
npm i
```

#### Execute:

```bash
npm start
```

```
A aplicação estará disponível na porta 5173, tal qual http://localhost:5173
```

### Para acessar o módulo Mobile:

#### Acesse a pasta da aplicação Mobile:

```bash
cd mobile
```

#### Instale as dependências via npm:

```bash
npm i
```

#### Execute:

```bash
npm start
```

```
A aplicação estará disponível na porta 8081, tal qual http://localhost:8081
```

OBS: Para acessar a aplicação mobile em um dispositivo Android ou iOS, é necessário baixar o aplicativo Expo Go e escanear o QR Code exibido após a execução do `npm start`

# Referências:

* https://reactnative.dev/docs/stylesheet
* https://docs.expo.dev/router/basics/navigation/
* https://reactnavigation.org/docs/getting-started
* https://axios-http.com/docs/intro
* https://docs.expo.dev/
* https://reactnavigation.org/docs/navigating/
* https://reactnative.dev/docs/components-and-apis
* https://reactnative.dev/docs/view
* https://reactnative.dev/docs/flatlist
* https://stackoverflow.com/questions/44357336/setting-up-a-table-layout-in-react-native
* https://reactnative.dev/docs/environment-setup
* https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=physical
* https://reactrouter.com/start/framework/installation
* https://reactrouter.com/start/framework/routing
* https://stackoverflow.com/questions/79713654/how-to-redirect-in-react-router-7-in-framework-mode-to-another-route
* https://stackoverflow.com/questions/75054449/how-to-get-a-url-parameters-in-react-router-v6
* https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router
* https://axios-http.com/docs/example
* https://www.devmedia.com.br/consumindo-uma-api-com-react-js-e-axios/42900
* https://react-bootstrap.github.io/docs/getting-started/introduction/
* https://vite.dev/guide/https://react-bootstrap.github.io/docs/getting-started/introduction/
* https://react.dev/
* https://react-bootstrap.github.io/

