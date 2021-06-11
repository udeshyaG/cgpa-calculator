FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
# CMD ["npm", "run", "start"]
CMD ["sh", "start-script.sh"]