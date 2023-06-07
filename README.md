## login-automated-test

The main goal is to verify the login of the web page: https://m.apuestas.codere.es/

# System Requirements

- Playwright requires Node.js version 14 or above. For more details head to: 
[Playwright System Requirements](https://playwright.dev/docs/troubleshooting#system-requirements)


# How to Install

- Open a terminal inside the project main folder and install the dependecies with your desire package manager, by default (npm):

    ```
    npm install
    ```
- Then install the playwright supported browsers
    ```
    npx playwright install
    ```
NOTE: If you have any error please head to [Playwright Installation Docs](https://playwright.dev/docs/intro#installation) 

# How to Run

- Inside the project main folder execute via terminal: 
    ```
    npx playwright test tests/login.spec.ts
    ```

The tests will execute using the default playwright config (headless mode, 2 browsers: chromium, firefox)

NOTE: the test can also be executed using the webkit browser. I decided to disable this by default because the website doesn't look to work properly with this browser and the tests may randomly fail sometimes.
To enable the webkit again just uncomment this lines inside the playwright.config.ts:
```
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
```

# Results

- Playwright by default will show the results inside the console and in addition to this a .json file will be generated in "results" folder (results folder will only be created once you run the project once).

- You can also save the in-line results inside a txt file by executing the Run with the >> param like below:

    ```
    npx playwright test >> results.txt
    ```

# Test Properties

- You're able to change the URL, success condition and failure condition of the tests, head to common/test-properties and simply change the values.

NOTE: Make sure the target url to be always google (can be any subdomain: .com, .es, etc...) main page, this tests are designed to work only with this site.

# Folder and Files Explanation

    ├── common                         # Common folder that include files with functions and properties that're or will be used along the tests
    |  ├──── test-common.functions.js  # Here's a class containing methods that can't be declared inside the tests context, each method here should be static.
    |  ├──── tests.properties.js       # Tests properties files, edit the values here if you wish to change any of the tests params            
    ├── node_modules                   # Well the good ol' node_modules will appear after the installation step
    ├── tests                          # Tests folders, here're the tests files
    |  ├──── search.tests.js           # Here's where the test is declared and defined
    ├── results                        # Output folder of the tests, normally will have a .json file inside with extensive tests results.
    └── playwright.config.js           # Playwright file for extended configuration

