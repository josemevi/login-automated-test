# login-automated-test

The main goal is to verify the login of the web page: https://m.apuestas.codere.es/ using playwright 

## System Requirements

- Playwright requires Node.js version 14 or above. For more details head to: 
[Playwright System Requirements](https://playwright.dev/docs/troubleshooting#system-requirements)

## Installation

To install the project dependencies, follow these steps:

1. Open a terminal in the main folder of the project.

2. Install the dependencies using your preferred package manager. By default, npm is used:

    ```
    npm install
    ```
    
3. Install the playwright supported browsers:

    ```
    npx playwright install
    ```
    
NOTE: If you encounter any errors during installation, please refer to tho [Playwright Installation Docs](https://playwright.dev/docs/intro#installation) 

## Setting up Test Properties (.env)

- To make the test work, you need to create a .env file in the main folder of the project. Add the following variables and their corresponding values to the file:

```
MAIN_URL = https://m.apuestas.codere.es/
COOKIE_CONSENT_NAME = codere_cookie
COOKIE_CONSENT_VALUE = accepted
COOKIE_DOMAIN = m.apuestas.codere.es

VALID_USERNAME = 
VALID_PASSWORD = 
```

- You need to provide valid values for `VALID_USERNAME` and `VALID_PASSWORD` with a working account.
-  Please note that the test is designed to run only on the specified website using the provided cookie configuration.

## Running the Test

- To run the tests, execute the following command in the terminal from the project's main folder: 

    ```
    npx playwright test tests/login.spec.ts
    ```

- The tests will execute using the default playwright configuration in headless mode and on two browsers: Chromium and Firefox.

NOTE: The test can also be executed using the WebKit browser. By default, it is disabled because the website may not function properly with this browser, leading to potential test failures. To enable WebKit, uncomment the following lines in `playwright.config.ts`:

```
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
```

## Test Results

- By default, Playwright will create the test results inside the "test-results" folder. This folder will be created after running the tests for the first time.

To display the default HTML report, enter the following command in the console after the test process is completed:

    npx playwright show-report
 
- Playwright will show a message in the console with this command. If any test fails, the report will be displayed automatically.

## Folder and File Structure

The repository structure is as follows:

    ├── config                         
    |  ├──── EnvConfig.ts              
    |  ├──── index.ts                  
    ├── node_modules                   
    ├── playwright-report              
    ├── test-results                   
    ├── tests                          
    |  ├──── login.spec.ts             
    ├── types                          
    |  ├──── env.type.ts               
    |  ├──── index.ts                  
    |  ├──── userCredentials.type.ts   
    └── utils                          
    |  ├──── index.ts                  
    |  ├──── setCookies.ts             
    └── .env                           
    └── .gitignore                     
    └── package-lock.json              
    └── package.json                   
    └── playwright.config.ts           
    └── README.md                      
    
- `config`: Contains TypeScript files related to reading and mapping the .env file.
- `node_modules`: Folder created after the installation of project dependencies.
- `playwright-report`: Template generated and used by Playwright to create reports.
- `test-results`: Folder that stores the generated test reports temporarily.
- `tests`: Folder containing the test files. Currently, only login.spec.ts exists.
- `types`: Contains TypeScript files that declare base types for creating objects used in the project.
- `utils`: Folder containing common and reusable methods.
- `.env`: Environmental variables file containing the required data for the tests.
- `.gitignore`: Specifies intentionally untracked files that Git should ignore.
- `package-lock.json`: Contains detailed information about project dependencies.
- `package.json`: Contains descriptive and functional metadata about the project.
- `playwright.config.ts`: Playwright configuration file for extended configuration.
- `README.md`: The file you are currently reading.

# Additional Information

## Test Approach and Decisions

- The tests in this repository are written using a combination of types, utility functions, and configuration files to create a more friendly, scalable, and maintainable architecture.

- To locate elements within the HTML, commonly used locators such as `.getByLabel()`, `.getByRole()`, and `.getByText()` were avoided. This decision was made because the tests may need to handle different languages in the future, and using these methods would involve dealing with extra information about the elements. Instead, relying on classes, IDs, or names attributes is more reliable since the inner HTML of elements is more likely to change than these attributes.

- The "content policy cookie" is implemented directly within the browser to avoid writing extra steps unrelated to the main purpose of the test.

- The repository does not include the created account's username/password due to security concerns, as it is a public repository.

- The index files within most folders are used for Barrel exports.

## Additional Test Scenarios:

There are various test scenarios for a login page. Here are some examples:

- Verify if a user can log in with a valid username and password (positive test case).
- Verify if a user cannot log in with a valid username and an invalid password (negative test case).
- Verify the login page behavior when the fields are blank and the Submit button is clicked (negative test case).
- Verify the functionality of the "Forgot Password" feature (positive test case).
- Verify the display of error messages for invalid login attempts (positive test case).
- Verify the functionality of the "Remember Me" feature (positive test case).
- Verify if the data in the password field is displayed as asterisks or bullet signs (positive test case).
- Verify if a user can log in with a new password only after changing the password (positive test case).
- Verify if the login page allows simultaneous login with different credentials in different browsers (positive test case).
- Verify if pressing the "Enter" key on the keyboard works correctly on the login page (positive test case).
- Verify if a user cannot enter more characters than the specified range in each field (negative test case).
- Verify if a user cannot enter more characters than the specified range in each field (positive test case).
- Verify the behavior of the login page when the "Back" button of the browser is pressed. It should not allow re-entering the system after logging out (negative test case).
- Verify the timeout functionality of the login session (positive test case).
- Verify if a user is not allowed to log in with different credentials from the same browser at the same time (negative test case).
- Verify if a user can log in with the same credentials in different browsers at the same time (positive test case).
- Verify the login page against SQL injection attacks (negative test case).
- Verify the implementation of an SSL certificate (positive test case).


Please note that the list above is not exhaustive, and additional test scenarios can be added based on specific requirements and considerations.

If you have any questions or need further assistance, feel free to contact me via email. Thank you for your time! :D <3

⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠉⣀⣤⣤⣤⣶⣶⣶⣶⣿⣿⣶⣶⣶⣤⣤⣀⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⠙⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⣈⠉⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠄⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠟⠋⢁⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠄⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡟⠀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠿⠿⠿⣿⣿⣿⣿⣿⣧⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡄⠀⠉⡉⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⢿⣿⣿⡃⢀⣠⣤⣤⣀⣿⣿⣿⣿⣿⣧⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣶⣄⡈⠀⣸⣿⣿⣿⣿⡿⠋⢀⣀⣀⣀⣸⣿⣿⣿⡁⠀⠀⠀⠠⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠘⣿⣿⣿⣿⠿⠿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠁⢠⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⠀⣤⣾⣿⣿⣿⣿⣿⣿⣇⢸⣿⣿⣿⣿⣉⣥⣤⣤⣀⡀⠀⠀⠈⠁⣠⡄⠈⠿⣿
⣿⣿⣿⣿⣿⣿⠀⣼⣿⠿⠿⣿⣿⣿⣿⣿⡇⠈⣿⣿⣿⣿⣿⣿⣿⣿⠀⠻⢿⣿⣿⣿⣿⣿⠿⠃⣸⣿⣿⣿⣿⡛⠛⠻⠿⣿⡇⠀⢀⣿⣿⣿⣷⣤⠀⢸
⣿⣿⣿⣿⣿⠇⠀⣠⣤⣶⣶⣾⣿⣿⣿⣿⣧⡀⠙⠻⠿⠿⠿⠟⠋⣡⣶⣦⣤⡀⠉⣉⣉⣀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣶⣦⡈⠁⣠⣾⣿⣿⣿⣿⣿⠀⢺
⣿⣿⣿⠋⣠⡄⢸⣿⣿⠟⢋⣩⣿⣿⣿⣿⣿⣿⣶⣶⣤⣤⣤⣄⠘⢿⣿⣿⡿⠋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣴⣿⣿⣿⣿⣿⣿⡿⠀⣰
⣿⣿⣷⣾⣿⡇⠸⠋⣡⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣈⣁⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⣠⣾⣿⣿⣿⣿⣿⣿⣿⠁⣼⣿
⣿⣿⣿⣿⣿⡟⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢁⣼⣿⣿⣿⣿⣿⣿⣿⣿⠃⢠⣿⣿
⣿⣿⣿⣿⡟⢀⣶⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣣⣾⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⣾⣿⣿
⣿⣿⣿⣿⣧⣿⣿⡇⠀⣄⡈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⣼⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡟⠀⣼⣿⣿⣷⣬⣭⡙⣏⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⣼⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡟⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣼⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡟⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⢠⣾⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡿⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡿⠃⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⣿⣿⣿⣿⣿⣿⣿⣿
⣿⠟⠁⣠⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⣿⣿⣿⣿⣿⣿⣿⣿
⣷⡀⠸⢿⣿⣿⣿⡿⠟⠋⠉⢀⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣷⣄⡈⠉⠉⠀⣀⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣀⣿⣿⣿⣿⣿⣿⣿⣿



