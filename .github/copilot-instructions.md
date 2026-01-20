# AI Agent Instructions for PlaywrightTS

## Project Overview
This is a **Playwright TypeScript testing framework** for end-to-end testing of web applications. The project tests e-commerce functionality against LambdaTest environments.

## Architecture & Key Concepts

### Test Structure
- **Single config file**: `playwright.config.ts` - Currently configured to run only `basicInteractions.test.ts`
- **Test files** in `tests/` directory:
  - `basicInteractions.test.ts` - Basic element interaction patterns (current focus)
  - `login.test.ts` - Login flow using manual browser/context management
  - `recorded.test.ts` - Playwright Codegen-generated test with semantic locators

### Configuration Pattern
- **Headless mode disabled**: Tests run visible for debugging (`headless: false`)
- **Failure artifacts**: Screenshots and videos retained on failure
- **No retries**: `retries: 0` - failures are immediate
- **Reporter chain**: dot (console), JSON (CI), HTML (human review)

## Development Workflows

### Running Tests
```bash
npm test
```
Runs tests defined in `playwright.config.ts` `testMatch` property. Modify this to run specific tests.

### Key Dev Patterns
1. **Locator strategies** - Mix of CSS selectors, XPath, and semantic locators:
   - CSS: `"input[name='email']"` (from login.test.ts)
   - XPath: `"//a[@data-toggle='dropdown']"` (from login.test.ts)
   - Semantic: `page.getByRole('button', { name: 'Login' })` (preferred, from recorded.test.ts)

2. **Browser management** - Two approaches used:
   - **Test fixture approach** (basicInteractions, recorded.test.ts): `test(({page}) => {...})` - simpler, recommended
   - **Manual approach** (login.test.ts): `chromium.launch()` → create context → create page - verbose but explicit

3. **Waits** - Use explicit waits sparingly: `page.waitForTimeout(5000)` in login.test.ts

## Project-Specific Conventions

### Test Targets
- Primary target: `https://ecommerce-playground.lambdatest.io/` (login, account flows)
- Secondary target: `https://www.lambdatest.com/selenium-playground/simple-form-demo` (basic interactions)

### Reporting
- **JSON reports**: `jsonReports/report.json` - machine-readable for CI integration
- **HTML reports**: `playwright-report/` - human-readable with full traces
- **Test results**: `test-results/` - error contexts and logs per test run

## CI/CD Context
GitHub Actions workflow (`.github/workflows/playwright.yml`) runs tests on push/PR to main/master:
- Ubuntu Linux environment
- Installs dependencies and browsers via `npx playwright install --with-deps`
- Uploads HTML report as artifact with 30-day retention

## Common Tasks & Patterns

### Adding a New Test
1. Create file in `tests/` directory (naming: `<feature>.test.ts`)
2. Use test fixture pattern: `test("test name", async ({page}) => {...})`
3. Use semantic locators via `getByRole()` when possible (most resilient)
4. Update `testMatch` in `playwright.config.ts` if test should run in suite

### Debugging
- Tests run headless=false - browser window visible
- Artifacts retained in `test-results/` directory
- Use `page.pause()` to debug interactively
- Console logs visible in terminal during test run

## Code Quality Notes
- No linting rules configured
- Tests are relatively simple - focus on clarity and semantic selectors
- Avoid manual browser lifecycle management (use test fixtures)
- No shared test utilities/helpers currently - consider `tests/fixtures/` if patterns repeat
