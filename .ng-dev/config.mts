import {GithubConfig, ReleaseConfig} from '@angular/dev-infra-private/ng-dev';
import {spawnSync} from 'child_process';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

export const projectDir = join(dirname(fileURLToPath(import.meta.url)), '../');
export const github: GithubConfig = {
  mainBranchName: 'main',
  name: 'dev-infra-test-release',
  owner: 'angular',
  private: true,
};

const corePkgName = 'dev-infra-test-release-core';

export const release: ReleaseConfig = {
  representativeNpmPackage: corePkgName,
  npmPackages: [{name: corePkgName}],
  buildPackages: async () => {
    // Build the core package by loading the script.
    await import('../scripts/build-core.mjs');

    return [
      {
        name: corePkgName,
        outputPath: join(projectDir, 'dist/core'),
      },
    ];
  },
};
