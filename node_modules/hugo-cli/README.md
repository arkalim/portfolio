# hugo-cli

[![CI](https://github.com/nikku/hugo-cli/actions/workflows/CI.yml/badge.svg)](https://github.com/nikku/hugo-cli/actions/workflows/CI.yml)

A simple Node wrapper around [hugo, the static site generator](http://gohugo.io). It fetches the right hugo executable before piping all provided command line arguments to it.


## Usage

```bash
$ node_modules/.bin/hugo -h
INFO hugo not found. Attempting to fetch it...
INFO fetched hugo v0.104.3
INFO extracting archive...
INFO hugo available, let's go!

hugo is the main command, used to build your Hugo site.

Hugo is a Fast and Flexible Static Site Generator
built with love by spf13 and friends in Go.

Complete documentation is available at http://gohugo.io/.

Usage:
  hugo [flags]
  hugo [command]

...
```

### Download specific hugo version

If you want to download a specific hugo version, you can set `HUGO_VERSION` env before you run the command.

```bash
$ HUGO_VERSION=0.64.0 npx hugo-cli version
$ HUGO_VERSION=0.64.0/extended npx hugo-cli version
```


## Integrations

Add to your build scripts in `package.json` to build you site from NodeJS:

```json
  ...
  "scripts": {
    "build": "hugo"
  },
  "dependencies": {
    "hugo-cli": "*"
  },
  ...
```

Execute directly via [`npx`](https://www.npmjs.com/package/npx):

```bash
npx hugo-cli server
```


## License

MIT
