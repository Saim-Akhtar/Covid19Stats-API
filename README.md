# Covid19Stats-API

An API wrapper around [Rapid API for Corona Updates](https://rapidapi.com/astsiatsko/api/coronavirus-monitor)

## Setup

Create a .env file and add your API_KEY

```
npm install
npm start
```

## EndPoints

 Start with a localhost http://127.0.0.1:8000

- Get stats of all countrines in the world
> /

- Get total world ratio
> /total_ratio

- Get A country's updated stats
> /:country

- Get A country's history stats
> /:country/history