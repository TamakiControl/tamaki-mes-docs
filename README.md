# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

This project is managed using yarn instead of npm. To setup the project first run:

```
$ yarn install
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

If you want to run the docsearch crawler, this command will work if the .env files contains the correct information
```
docker pull typesense/docsearch-scraper:latest
docker run -it --env-file=./.env -e "CONFIG=$(cat typesense-config.json | jq -r tostring)" typesense/docsearch-scraper
```

### Memory Error For docsearch-scraper (Errno 442)

If you run the DocSearch scraper and see an error like:
```
typesense.exceptions.ObjectUnprocessable: [Errno 422] Rejecting write: running out of resource type: OUT_OF_MEMORY
```
This happens when your Typesense cluster does not have enough memory to handle the indexing workload.

To fix it, increase the memory allocation in Typesense Cloud.
After increasing the memory, the scraper should complete without errors.