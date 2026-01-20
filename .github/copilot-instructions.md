# AI Agent Instructions for PlaywrightTS

## Project Overview
This is a **Playwright TypeScript testing framework** for end-to-end testing of web applications. The project tests e-commerce functionality against LambdaTest environments.

## Architecture & Key Concepts

### Test Structure
- **Single config file**: `playwright.config.ts` - Currently configured to run only `pomTests/addToCart.test.ts`
- **Test files** in `tests/` directory: Basic interaction tests using test fixtures (e.g., `basicInteractions.test.ts`, `login.test.ts`, `recorded.test.ts`)
- **POM-based tests** in `pomTests/` directory: Uses Page Object Model classes from `pages/` (e.g., `addToCart.test.ts`)
- **Page Object Model** in `pages/` directory: Classes like `HomePage`, `LoginPage` encapsulating page interactions

### Configuration Pattern
- **Headless mode disabled**: Tests run visible for debugging (`headless: false`)
- **Failure artifacts**: Screenshots and videos retained on failure
- **No retries**: `retries: 0` - failures are immediate
- **Reporter chain**: dot (console), JSON (`jsonReports/report.json`), HTML (`playwright-report/`)
- **Base URL**: `https://ecommerce-playground.lambdatest.io/index.php?` for e-commerce tests

## Development Workflows

### Running Tests
```bash
npm test
```
Runs tests defined in `playwright.config.ts` `testMatch` property. Modify this to run specific tests.

### Key Dev Patterns
1. **Locator strategies** - Mix of CSS selectors, XPath, and semantic locators:
   - CSS: `"input[name='email']"` (from `login.test.ts`)
   - XPath: `"//a[@data-toggle='dropdown']"` (from `login.test.ts`)
   - Semantic: `page.getByRole('button', { name: 'Login' })` (preferred, from `recorded.test.ts`)

2. **Browser management** - Two approaches used:
   - **Test fixture approach** (recommended): `test(({page}) => {...})` - simpler, used in `tests/` and `pomTests/`
   - **Manual approach** (verbose): `chromium.launch()` → create context → create page - used in `login.test.ts`

3. **Page Object Model**: Classes in `pages/` with constructor taking `Page`, methods for actions (e.g., `LoginPage.enterEmail()`, `SpecialHotPage.addFirstProductToTheCart()`)

4. **Waits** - Explicit waits sparingly: `page.waitForTimeout(5000)` in `login.test.ts`; prefer auto-waits

## Project-Specific Conventions

### Test Targets
- Primary target: `https://ecommerce-playground.lambdatest.io/` (login, account flows, specials)
- Secondary target: `https://www.lambdatest.com/selenium-playground/` (basic interactions like forms, dropdowns)

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
1. Create file in `tests/` (basic) or `pomTests/` (POM-based)
2. Use test fixture pattern: `test("test name", async ({page}) => {...})`
3. Use semantic locators via `getByRole()` when possible (most resilient)
4. Update `testMatch` in `playwright.config.ts` if test should run in suite

### Debugging
- Tests run headless=false - browser window visible
- Artifacts retained in `test-results/` directory
- Use `page.pause()` to debug interactively
- Console logs visible in terminal during test run

## Code Quality Notes
- TypeScript with ESNext modules (`"type": "module"` in `package.json`)
- No linting rules configured
- Tests are relatively simple - focus on clarity and semantic selectors
- Avoid manual browser lifecycle management (use test fixtures)
- POM classes export default, instantiated with `new ClassName(page)`
