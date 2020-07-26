# mnml-styles
Generation of mnml-styles.css files through the use of Deno

## Requirements
- [Deno](https://deno.land/#installation)

## Installation
- Make `mnml-styl` a binary executable

```bash
deno install --unstable --allow-read --allow-write --allow-net -n mnml-styles ./mod.ts
```

- Add Deno's `bin` path to your shell's `$PATH` so we can reference `mnml-styles` with ease

```bash
echo 'export PATH="$HOME/.deno/bin:$PATH"' >> ~/.yourshellrc
```

## Usage
`cd` into the directory with your `mnml-styles.config.ts` and run `mnml-styles`