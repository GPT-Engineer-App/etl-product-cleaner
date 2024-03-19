# etl-product-cleaner

ETL interface for Product Description cleaner. UI: Enter a sample item's description. Enter the number of rows. Select the format the data will be supplied in (json,sql,zip,tar,csv,.txt, other(description)). Checkboxes select all to apply: (clean spelling, text formatting, extract named entities). Post Processing: Select all to apply: (match/replace (match mode simple | regex), [match this][replace with]). Ready. View Sample Results (Structured JSON), (Cleaned Product Description). View Cost Estimate, Order Now. 

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/etl-product-cleaner.git
cd etl-product-cleaner
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
