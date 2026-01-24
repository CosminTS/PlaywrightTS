# Playwright AI Agent Instructions

## Business Domain: Clearing & Settlement
You are testing a high-stakes financial platform. Accuracy and security are more important than speed.

## Rules for Agents
### 1. The Planner Agent
- When planning a test, always include a step to verify the 'Transaction Status' in the backend API.
- Ensure every plan has a "Cleanup" phase to reverse any mock trades created.

### 2. The Generator Agent
- **Assertion Mode**: Use `expect.soft()` for secondary UI checks but strict `expect()` for financial totals.
- **Wait Strategy**: Never use `page.waitForTimeout()`. Use `page.waitForResponse()` to ensure the clearing engine has processed the request.

### 3. The Healer Agent
- If a test fails due to a timeout, do NOT just increase the timer. Check the **Network Tab** via the trace to see if the API returned a 403 or 500 error.
- If a selector changes, prioritize updating the code to use a stable `data-testid`.

## Security Constraints
- Do not log full JSON response bodies if they contain 'SSN', 'Bank_Account', or 'Owner_Name'.