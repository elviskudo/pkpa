# Backend PKPA by Node JS

Requirement:
- nodejs lts version 14
- postgresql version 12
- mongodb version 5
- redis server

For Postman documentation can you access at : https://www.getpostman.com/collections/130cec671355dce5fe95

Step by step to run project:
1. clone this project
2. change directory to root project
3. create .env file in root project -> copy from .env.example
4. change the content of parameter to your local setting
5. copy server.js file to src folder -> ask to developer
5. run: npm install
6. run: npm run start-dev

Step by step to run project on WSL 2 :
- open powershell as administrator
- type: wsl --install -d Ubuntu-20.04
- install nodejs version 14 on ubuntu wsl
- install postgres :
	sudo apt update
	sudo apt install postgresql postgresql-contrib	
	sudo service postgresql start
	sudo service postgresql status
	sudo nano /etc/postgresql/12/main/pg_hba.conf -> change ipv4 to 0.0.0.0/0 
			            					      -> change ipv6 to ::0/0
	sudo nano /etc/postgresql/12/main/postgresql.conf -> uncomment and change listen_address to '*'
	sudo -u postgres psql
	ALTER USER postgres WITH PASSWORD 'new_password';
	connect database via dbeaver
- mongodb version 5
- redis server