# LojaFR

* Node version
    16.18.0

* npm version
    8.19.0

* react-native version
    9.2.1

* Dependencias
  - Node
  - npm
  - npx
  - android studio (emulador)
  - adb

* Configuração
  Para iniciar o projeto, devemos instalar o node, após isso para iniciar o projeto, basta ter uma versão do android studio instalada, caso use o android studio configure um emulador pelo ADM Manager
  Caso optar por um dispositivo movel android, libere o modo desenvolvedorr (debbug mode) e conecte o cabo USB no computador antes de iniciar o projeto.
  Após isso execute os comandos abaixo
```
  # Iniciar o metro
  npx react-native start

  # Compilar e iniciar o app
  npx react-native run-android
```
Isso ira subir o aplicativo no emulador ou no dispositivo movel.

* Inicialização do ngrok
Com o webserver em rails rodando, é necessáio subir o projeto local.
Como o app em react native so consegue se comunicar com a API por meio de requisições https em vez de http, precisamos instalar o ngrok na maquina
Apos instala-lo e configura-lo com o token de inicialização, com o web server rodando basta executar o comando abaixo:
```
ngrok http 3000
```

Isso ira abrir um tunnel de conexão http e irá disponibilizar o endpoint da aplicação para consumo
OBS: o endpoint disponibilizado deve ser colocado no projeto para que ele funcione

Exemplo de resposta do ngrok:
```
Web Interface  http://localhost:4040
Forwarding     https://fbad-2804-431-c7d8-120c-e0dd-539a-2df9-922e.sa.ngrok.io -> http://localhost:3000    
```

Copie o conteudo do Forwarding para os arquivos:
src\Products.js:17
src\Products.js:29
src\NewProduct.js:33

* ...

