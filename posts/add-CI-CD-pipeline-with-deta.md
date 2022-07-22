---
title: "CI/CD Deployment using Deta and Github Actions."
excerpt: "Deploy to Deta on every push to your main branch."
coverImage: "https://images.unsplash.com/photo-1530292178889-67a8dc571e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
date: "2022-06-20T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

I recently decided to add CI/CD pipeline to my side project Nemo. On every push to master, I want to run tests and automatically deploy the project to Deta once all the tests are passed.

The decided to use Github Actions.

## Prerequisite

Before you star, here's how to Add Secrets in Gtihub [https://docs.github.com/en/actions/security-guides/encrypted-secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

Make sure you follow the above steps and add secrets in Github. We will be using `${{ secrets.DETA_PROJECT_ID }}` and `${{ secrets.DETA_PROJECT_KEY }}` to run our tests.

CI: Create a venv, install all the dependencies and run the tests. Here are my [Test files](https://github.com/harshitsinghai77/nemo-backend/blob/master/tests/test_deta.py)

### Continuous Integration

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [master]

jobs:
  continuous-integration:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Set up Python all python version
        uses: actions/setup-python@v2
        with:
          python-version: 3.10.5

      - name: Install Python Virtual ENV
        run: pip3 install virtualenv

      - name: Setup Virtual env
        uses: actions/cache@v2
        id: cache-venv
        with:
          path: venv
          key: ${{ runner.os }}-venv-${{ hashFiles('**/requirements*.txt') }}
          restore-keys: |
            ${{ runner.os }}-venv-

      - name: Activate and Install Depencies into Virtual env
        run: python -m venv venv && source venv/bin/activate && pip3 install -r requirements.txt && pip3 install pytest

      # Build the app and run tests
      - name: Build and Run Test
        env:
          DETA_PROJECT_ID: ${{ secrets.DETA_PROJECT_ID }}
          DETA_PROJECT_KEY: ${{ secrets.DETA_PROJECT_KEY }}
        run: source venv/bin/activate && pytest
```

### Get DETA_ACCESS_TOKEN

Make sure you have `DETA_ACCESS_TOKEN` in your Github Secrets. Here's how to get DETA_ACCESS_TOKEN: [https://docs.deta.sh/docs/cli/auth/](https://docs.deta.sh/docs/cli/auth/)

From the docs,

`The deta cli also authenticates with deta access tokens. You can create an access token under the Settings view at https://web.deta.sh/home/:your_username/ (also accessible by clicking the blue left caret < from the nav bar in a project's view). The access tokens are valid for a year.`

<img src="https://i.ibb.co/XLnFwxd/deta-access-token.png" />

### Continuous Integration

CD: Once the tests are passed, deploy changes to Deta.

```yaml
continuous-deployment:
  runs-on: ubuntu-latest
  needs: [continuous-integration]
  if: github.ref == 'refs/heads/master' && github.event_name == 'push'
  steps:
    - uses: actions/checkout@v2
    - uses: BogDAAAMN/deta-deploy-action@v1.0.1
      with:
        deta-access-token: ${{ secrets.DETA_ACCESS_TOKEN }}
        deta-name: "nemo"
```

Here's how the final `main.yaml` file will look like.

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [master]

jobs:
  continuous-integration:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Set up Python all python version
        uses: actions/setup-python@v2
        with:
          python-version: 3.10.5

      - name: Install Python Virtual ENV
        run: pip3 install virtualenv

      - name: Setup Virtual env
        uses: actions/cache@v2
        id: cache-venv
        with:
          path: venv
          key: ${{ runner.os }}-venv-${{ hashFiles('**/requirements*.txt') }}
          restore-keys: |
            ${{ runner.os }}-venv-
      - name: Activate and Install Depencies into Virtual env
        run: python -m venv venv && source venv/bin/activate && pip3 install -r requirements.txt && pip3 install pytest

      # Build the app and run tests
      - name: Build and Run Test
        env:
          DETA_PROJECT_ID: ${{ secrets.DETA_PROJECT_ID }}
          DETA_PROJECT_KEY: ${{ secrets.DETA_PROJECT_KEY }}
        run: source venv/bin/activate && pytest

  continuous-deployment:
    runs-on: ubuntu-latest
    needs: [continuous-integration]
    if: github.ref == 'refs/heads/master' && github.event_name == 'push'
    steps:
      - uses: actions/checkout@v2
      - uses: BogDAAAMN/deta-deploy-action@v1.0.1
        with:
          deta-access-token: ${{ secrets.DETA_ACCESS_TOKEN }}
          deta-name: "nemo"
```

Nemo Github Code using CI/CD to automatically deploy to Deta.

[https://github.com/harshitsinghai77/nemo-backend](https://github.com/harshitsinghai77/nemo-backend)

`main.yaml`
[https://github.com/harshitsinghai77/nemo-backend/blob/master/.github/workflows/main.yml](https://github.com/harshitsinghai77/nemo-backend/blob/master/.github/workflows/main.yml)

## Conclusion

We saw how to automatically deploy your code to Deta using CI/CD. That’s it for today, see you soon. :)
