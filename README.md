# News API Application

## Configure

```
git clone https://github.com/heyMP/byu-news-api-workshop.git
cd byu-news-api-workshop
cp .env.example .env
```

Go to newsapi.org, login, and generate an access token.

Once you have your access token from newsapi.org you will need to add it to the .env file.

In .env, change:

```bash
NEWS_SERVICE_API_KEY=XXXXXXXXXXXXXXXXXX
```

To

```bash
NEWS_SERVICE_API_KEY=6dcbd2c8193224b098f93831aed773a7c
```

## Run

```
docker-compose up
```

Web Component Demo: http://news.traefik.me
GraphQL Endpoint: http://news.traefik.me:4000/graphql
