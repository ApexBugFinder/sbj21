FROM node:latest as build
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*","./"  ]

RUN npm install --production --silent && mv node_modules ../

COPY . .

RUN chown -R node /app
CMD ["npm", "start"]

# from nginx:latest
# COPY --from=build /app/dist/sbj /usr/share/nginx/html

# EXPOSE 80
