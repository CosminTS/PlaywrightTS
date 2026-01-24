A Playwright + TypeScript automated testing framework for end-to-end (E2E) tests on the LambdaTest e-commerce playground site.

This project includes:

Tests organized with Page Object Model ("POM") in pomTests/

tests/ folder with spec files

pages/ directory containing page abstractions

Config and utilities for running Playwright tests

JSON reports output in jsonReports/

Test plans in Markdown format

🗂️ Table of Contents

📦 Project Structure

🚀 Getting Started

🎭 Running Tests

🔍 Running Specific Tests

🧠 Page Object Model

📄 Reports

📋 Test Plans

💡 Best Practices

🤝 Contributing

📦 Project Structure
.
├── .github/                # GitHub CI workflows and prompts
├── jsonReports/           # JSON test result outputs
├── pages/                 # Page Objects definitions
├── pomTests/              # POM‑based test cases
├── specs/                 # Additional specs and documentation
├── tests/                 # Standalone test specs
├── base/                  # Base fixtures and utilities
├── fixture/               # Custom fixtures
├── test-data/             # Test data files
├── uploadItems/           # Files for upload tests
├── playwright.config.ts   # Playwright config
├── tsconfig.json          # TypeScript config
├── package.json           # npm project config
├── check-latest-blog-article.spec.ts  # Test for checking latest blog article
├── blog-test-plan.md      # Test plan for blog functionality
└── README.md              # This document


This structure keeps tests, configs, and POM logic separated, helping scale automation.

🚀 Getting Started
Install Dependencies

Clone the repository:

git clone https://github.com/CosminTS/PlaywrightTS.git
cd PlaywrightTS


Install packages:

npm install


Install Playwright browsers:

npx playwright install

🎭 Running Tests

Run the full suite:

npx playwright test


Run tests in headed mode:

npx playwright test --headed


Run in debug mode (opens Playwright inspector):

npx playwright test --debug

🔍 Running Specific Tests

Run a specific test file:

npx playwright test tests/login.spec.ts


Run the blog article test:

npx playwright test check-latest-blog-article.spec.ts


Run tests by name pattern:

npx playwright test -g "login"


Run a test at a specific line (e.g., line 42):

npx playwright test tests/login.spec.ts:42

🧠 Page Object Model (POM)

This repository uses the Page Object Model pattern to keep selectors and page behavior in organized classes. Example:

// Example page class
export class LoginPage {
  constructor(private page: Page) {}
  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type=submit]');
  }
}


And then used in tests:

import { LoginPage } from '../pages/LoginPage';

test('user can login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.login('user', 'pass');
  await expect(page).toHaveURL('/dashboard');
});

📄 Reports

JSON reports are written to:

jsonReports/


You can open these results in your CI or convert them to HTML or other formats.

� Test Plans

Test plans are documented in Markdown files for planning and generating tests:

- blog-test-plan.md: Plan for blog-related tests, including checking the latest blog article.

These plans outline test scenarios, steps, and expected results to guide test development.

�💡 Best Practices

Use locators instead of page.click(selector) when possible

Use expect(page).toHaveURL() or page.waitForURL() for navigation assertions

Group related tests with test.describe

Organize selectors and page methods in POM classes

🤝 Contributing

Contributions are welcome!

Fork this repo

Add your tests / pages

Create a PR with description of changes
