import {$, cd} from 'zx';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';
import {readFile, writeFile} from 'fs/promises';

const projectDir = join(dirname(fileURLToPath(import.meta.url)), '../');
cd(projectDir);

await $`rm -Rf dist/core`;
await $`yarn tsc --project packages/core/tsconfig.json`;

const projectPkgJson = JSON.parse(await readFile(join(projectDir, 'package.json'), 'utf8'));
const corePkgJson = JSON.parse(
  await readFile(join(projectDir, 'packages/core/package.json'), 'utf8')
);

corePkgJson.version = projectPkgJson.version;

await writeFile(join(projectDir, 'dist/core/package.json'), JSON.stringify(corePkgJson, null, 2));
