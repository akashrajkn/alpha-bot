# alpha-bot

### Req
```
node: v14.15.5
```

### Manual build

1. Spin up nest backend
  ```sh
  cd nest-backend
  npm install
  npm run start:dev
  ```
  Go to [localhost:3000](localhost:3000). It should show "Hello World!" message

2. Server vue frontend
  ```sh
  cd vue-frontend
  npm install
  npm run dev
  ```
  Go to [localhost:3001](localhost:3001).

### Using Docker (only for nest-backend at the moment)
1. Build the image
  ```sh
  docker build -t docker-nest-js:v1.0 .
  ```
2. Run the image
  ```sh
  docker run -it -p 3000:3000 docker-nest-js:v1.0
  ```

### Nginx  (only for vue-frontend at the moment)
1. Install:
  ```sh
  sudo apt install nginx curl
  ```
2. Copy `nginx/nginx.conf` to `/etc/nginx/sites-available/`
3. Create a sym link to `/etc/nginx/sites-enabled/`
4. Restart nginx service
  ```sh
  sudo systemctl restart nginx
  ```
