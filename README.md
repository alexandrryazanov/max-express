# Backend

Node express.js based backend for Max S.


## Install and start

### 0. Install NodeJS

### 1. Install Git
https://git-scm.com/download/win

### 2. Clone project 
After installing run it in your "projects" folder:


`git clone https://github.com/alexandrryazanov/max-express.git`

### 3. Open project in IDE (file -> open/open folder)

### 4. Install Docker 
https://www.docker.com/

Run it in cloned project folder to start local PostgreSQL database:

```sh
docker compose up
```

### 5. install all node modules 

run it in project folder
```sh
npm install
```

### 6. Initialise the database

create all tables (run it in project folder)

```sh
npx prisma migrate deploy
```

### 7. Start project in Dev mode (auto-restart after each saving)
(run it in project folder)
```sh
npm run dev
```
