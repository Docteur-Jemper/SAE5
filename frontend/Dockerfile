FROM node:18-alpine

# Creation d'un repertoire de travail 
WORKDIR /app

# Copie du package .json
COPY package*.json . 

# Installation des dependances 
RUN npm i

# Copie de l'ensemble de l'app
COPY . .

# Exposition du port 
EXPOSE 3000

# Lancement du serveur 
CMD ["npm","start"]
