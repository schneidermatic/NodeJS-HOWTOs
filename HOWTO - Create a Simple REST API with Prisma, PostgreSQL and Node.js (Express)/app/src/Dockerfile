FROM node:22.9.0-bookworm

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD [ "npm", "start" ]