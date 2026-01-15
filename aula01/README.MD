Primeiros passos da aula01

Configurações básicas:
1- Criar uma pasta que vai guardar os arquivos do projeto (aula01)
2- Abrir pasta no terminal do vscode
3- Rodar os seguintes scripts/comando node
    - npm init (inicializa um projeto node me branco)
        - podemos adicionar a flag -y para aceitar todas as sugetões
            -- npm init -y
4- instalar os pacotes do projeto, na aula01 usamos apenas o express.
    - npm install express --save (salva o pacote geral)
5- editar o arquivo package.json
    - na chave "main" devemos utilizar o nome do arquivo principal da aplicação, que no caso pode ser> (app.js, index.js, main.js...)
    - na chave "type" devemos setar o valor para "module", caso não tenha a chave no arquivo package,json, devemos criar a nossa chave "main"
    - na chave "scripts" adicionamos a seguinte chave:
        - "start": "node app.js" (comando para inicializar a aplicação/arquivo principal}
6- criar arquivo principal na raiz do projeto (app.js, index.js, main.js...), no nosso caso usamos o arquivo app.js
7- editar o arquivo app com os códigos básicos do servidor express
8-  subir a aplicação executando o comando terminal
    - npm start
9 criar código e ser feliz