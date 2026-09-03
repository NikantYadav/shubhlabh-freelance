# Shubhlabh Express — Website

Marketing website for Shubhlabh Express, a Gurgaon based distribution / C&F partner. The site introduces the business, lists services and coverage areas, and lets prospective brands submit a distribution enquiry form.

## Pages

- **Home** — landing page / overview
- **About** — company background
- **Services** — distribution services offered
- **Coverage** — areas served
- **Distribute** — "Tell us your requirements" enquiry form for prospective partners
- **FAQ**
- **Legal** — privacy policy / terms

## Tech Stack

- **React** (Create React App) — single-page application, client-side routed with React Router
- **EmailJS** — the enquiry form on the Distribute page sends submissions directly to the client's email inbox, no backend server or database involved
- **Nginx** — serves the production build of the site
- **Docker** — the site is built and served from a container for deployment

## How it works

This is a static front-end site — there is no backend or database. All the page content is built into the React app at build time. The only "dynamic" piece is the enquiry form, which uses EmailJS to send form submissions as an email straight to the client, without needing a server.

## Deployment

The site is containerized with Docker:

1. `npm run build` produces an optimized static build of the React app
2. That build is served by an Nginx container

`deploy.sh` automates this on the server: it pulls the latest code, rebuilds the Docker image, and restarts the container.

## Configuration

The enquiry form requires a few EmailJS credentials (service ID, template ID, public key, and destination email) to be set in a `.env` file before building. See `.env.example` for the required keys. These are provided to the Docker build as build arguments since they get baked into the static site at build time
