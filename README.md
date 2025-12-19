# deploy-hello-world

A simple Deno HTTP server that logs request information and returns environment variables.

## Description

This is a basic Deno server application that:
- Serves HTTP requests
- Logs request method, URL, and traceparent header
- Returns all environment variables as a JSON response

## Requirements

- [Deno](https://deno.land/) runtime

## Usage

Run the server with:

```bash
deno run --allow-net --allow-env main.js
```

The server will start and listen for HTTP requests on the default port 8000. When a request is received, it will:
1. Log the request details to the console
2. Return a JSON response containing all environment variables

## Example

```bash
# Start the server
deno run --allow-net --allow-env main.js

# In another terminal, make a request
curl http://localhost:8000
```

The server will log something like:
```
GET http://localhost:8000/ traceparent: unknown
```

And return a JSON response with all environment variables.

## Permissions

The application requires the following Deno permissions:
- `--allow-net`: To create an HTTP server
- `--allow-env`: To read environment variables
