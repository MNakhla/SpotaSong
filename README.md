steps for running webApp:

1-create config.json file in ./SpotaSong

2-fill in the config file with needed data as the config example file.

3- use docker terminal to run the app using "docker-compose up" command, the app will run at docker-virtual-machine-ip:4200

4-dependency declaration tool is npm & dependency isolation tool is docker. 

To run the app without docker:

npm install

npm install -g cordova ionic

npm install -g @angular/cli@7.3.9

5-config:./SpotaSong/config.json

6- build,run,release: BackingServices are spotify API & firebase google database

7-To build&run command: docker-compose up --build (first time to build&run)
docker-compose up (to run already built app)

DockerFiles:
-Dockerfile
-docker-compose.yaml
 


