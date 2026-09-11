# Playwright Test Automation

Playwright test suite covering browser automation, API testing, fixtures, hooks,
page object models, data-driven tests, screenshots, traces, and Allure reporting.

## Prerequisites

- Node.js 18 or newer
- npm
- Internet access for the sample applications and API endpoints used by the tests

## Installation

```bash
npm install
npx playwright install
```

The Playwright configuration loads environment variables from `.env.prod` when
that file is present. Keep credentials and other secrets in a local environment
file and do not commit them to source control.

## Running Tests

Run the complete suite:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npm run test:headed
```

Run a specific test file or directory:

```bash
npx playwright test tests/API
npx playwright test tests/Web
npx playwright test tests/POM
```

Run in a selected browser project:

```bash
npx playwright test --project=chromium
```

Useful options:

```bash
npx playwright test --grep "login"
npx playwright test --debug
npx playwright test --ui
```

The configured Chromium project runs with the browser visible by default.
Screenshots are captured for tests, and videos and traces are collected on the
first retry.

## Project Structure

```text
pages/                 Page object model classes
tests/API/              API request and response tests
tests/Fixtures/         Fixture examples and custom fixtures
tests/POM/              Page object model tests
tests/Web/              Browser-based tests
tests/datadriven.spec.ts
tests/fixtures.spec.ts
tests/hooks.spec.ts
tests/screenshot.spec.ts
test-data/              JSON request payloads and test data
screenshots/            Test screenshots
playwright.config.ts    Playwright configuration
```

## Test Reports

The suite writes its Allure test data to `allure-results`.

Generate an Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
```

Open the generated report:

```bash
npx allure open allure-report
```

You can also open the Playwright HTML report after a test run:

```bash
npx playwright show-report
```

## API Base URL

API tests use the Restful Booker service configured as the Playwright base URL:

```text
https://restful-booker.herokuapp.com/
```

The service is external, so availability and response data may vary between
runs.
