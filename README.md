# Backend

Node express.js based backend for Max S.


## Install and start

### 0. Install NodeJS

### 1. Install Git
### 2. Clone projectAfter installing run it in "projects" folder:

`git clone https://github.com/alexandrryazanov/max-express.git`

### 3. Install Docker and run it in project folder to start local PostgreSQL database:

```sh
docker compose up
```

### 4. install all node modules (run it in project folder)
```sh
npm install
```

### 5. Initialise the database (create all tables):

```sh
npx prisma migrate deploy
```

### 6. Start project in Dev mode (with restart after each saving)
```sh
npm run dev
```
