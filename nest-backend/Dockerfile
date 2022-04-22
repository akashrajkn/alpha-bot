FROM node:14.15.0 AS development

EXPOSE 3000

COPY package*.json ./
RUN npm install
COPY . . 
RUN npm run build

# TODO: NODE_ENV

CMD ["npm", "start"]
