import { cp, mkdir, rename, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const client = new URL('../dist/client/', import.meta.url);
const server = new URL('../dist/server/', import.meta.url);
const staging = new URL('../.astro-static/', import.meta.url);

await rm(staging, { force: true, recursive: true });
await rename(dist, staging);
await mkdir(client, { recursive: true });
await cp(staging, client, { recursive: true });
await rm(staging, { force: true, recursive: true });
await mkdir(server, { recursive: true });

await writeFile(
  join(server.pathname, 'index.js'),
  `export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
`,
);

await mkdir(new URL('../dist/.openai/', import.meta.url), { recursive: true });
await cp(
  new URL('../.openai/hosting.json', import.meta.url),
  new URL('../dist/.openai/hosting.json', import.meta.url),
);

