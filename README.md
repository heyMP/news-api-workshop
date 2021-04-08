# byu-news-api-workshop

```
git clone https://github.com/heyMP/byu-news-api-workshop.git
cd byu-news-api-workshop
cp .env.example .env
```

Go to newsapi.org and generate an access token.  Place that access token in the .env file.

Now start Docker Compose.

```
docker-compose up
```

Web Component Demo: http://news.traefik.me
GraphQL Endpoint: http://news.traefik.me:4000/graphql
