# Derive Image...
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Ensure a correct dependency list
COPY package*.json ./

# Install app dependencies
RUN npm install

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# PORT
EXPOSE 3000
CMD [ "npm", "start" ]