# Build Stage - Build React Image
FROM node:19.2-alpine as build
WORKDIR /app
COPY . .
# Remove existent node-modules dependencies and re-install them from package-lock.json
RUN npm install --legacy-peer-deps
# Build React project
RUN npm run build

# Deploy Stage - Configure and deploy with Nginx
FROM nginx:stable-alpine as deploy
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]