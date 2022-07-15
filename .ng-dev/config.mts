import {GithubConfig, ReleaseConfig} from '@angular/dev-infra-private/ng-dev';

export const github: GithubConfig = {
  mainBranchName: 'main',
  name: 'dev-infra-test-release',
  owner: 'angular',
  private: true,
};

export const release: ReleaseConfig = {
  representativeNpmPackage: 'private-dev-infra-test',
  npmPackages: [{name: 'private-dev-infra-test'}],
  buildPackages: async () => {
    return [];
  },
};
