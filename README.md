# TS-Jest and import.meta.url

TS-Jest isn't compiling to ESM so `import.meta.url` is not available.

This repository contains the minimal steps to reproduce.

```sh
npm install
npm test
```

When I run the above (on `v17.9.0`) I get the following output.

```
> ts-jest-import-meta@1.0.0 test
> jest

 FAIL  ./esm.test.ts
  ● Test suite failed to run

    esm.test.ts:5:22 - error TS1343: The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'es2022', 'esnext', 'system', 'node12', or 'nodenext'.

    5         expect(() => import.meta.url).not.toThrow();
                           ~~~~~~~~~~~

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.874 s
Ran all test suites.
```

You can also find a `ts-jest.log` which was output when I ran it with the [debug flag](https://kulshekhar.github.io/ts-jest/docs/debugging/) on.
