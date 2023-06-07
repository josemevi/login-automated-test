# login-automated-test

The main goal is to verify the login of the web page: https://m.apuestas.codere.es/

## System Requirements

- Playwright requires Node.js version 14 or above. For more details head to: 
[Playwright System Requirements](https://playwright.dev/docs/troubleshooting#system-requirements)

#3 How to Install

- Open a terminal inside the project main folder and install the dependecies with your desire package manager, by default (npm):

    ```
    
    npm install
    
    ```
    
- Then install the playwright supported browsers

    ```
    
    npx playwright install
    
    ```
NOTE: If you have any error please head to [Playwright Installation Docs](https://playwright.dev/docs/intro#installation) 

## Setting up Test Properties (.env)

- You will have to create a .env file at the main folder of the project in order to make the test work. I'll provide below all the variables and values that you need to put inside the file:

```

MAIN_URL = https://m.apuestas.codere.es/
COOKIE_CONSENT_NAME = codere_cookie
COOKIE_CONSENT_VALUE = accepted
COOKIE_DOMAIN = m.apuestas.codere.es

VALID_USERNAME = josemevi
VALID_PASSWORD = David0606!

```

- Please take in consideration that the test is designed to run only inside the specified website using this cookie configuration. 

- You can change the VALID_USERNAME and VALID_PASSWORD values for any other working account

## How to Run

- Inside the project main folder execute via terminal: 

    ```
    
    npx playwright test tests/login.spec.ts
    
    ```

- The tests will execute using the default playwright config (headless mode, 2 browsers: chromium, firefox)

NOTE: the test can also be executed using the webkit browser. I decided to disable this by default because the website doesn't look to work properly with this browser and the tests may randomly fail sometimes.
To enable the webkit again just uncomment this lines inside the playwright.config.ts:

```

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    
```

## Results

- Playwright by default will create the test results inside the folder "test-results" (test-results folder will only be created when you executed the test once).

To display the default HTML report write in the console after exiting the test process:

    ```
    
    npx playwright show-report
    
    ```
    
- playwright normally will show you a message in the console with this command. If the test fails in any step the report will show automatically 

# Folder and Files Explanation

    ├── config                         # Config folder containing .ts relared to the .env reading and mapping
    |  ├──── EnvConfig.ts              # File to map (type with .env data) and export the objects that will be used by the tests.
    |  ├──── index.ts                  # Barrel to handle the export            
    ├── node_modules                   # Well the good ol' node_modules will appear after the installation step
    ├── playwright-report              # Template generated and used by playwright to create the reports
    ├── test-results                   # Will appear after running the test once, will store the generated report temporarily until the process is exited
    ├── tests                          # Tests folder with the tests files
    |  ├──── login.spec.ts             # The only test inside the project. Here we join the config and untils to make the tests
    ├── types                          # Inside we declare the base type for creating the objects (const) that're used inside the project
    |  ├──── env.type.ts               # type for map configuration related variables
    |  ├──── index.ts                  # Barrel to handle the export  
    |  ├──── userCredentials.type.ts   # type for map user related variables 
    └── utils                          # folder cointaining common and reusable methods
    |  ├──── index.ts                  # Barrel to handle the export 
    |  ├──── setCookies.ts             # Creating and mapping the cookie array (in a single file because can be reused in the future for other tests)
    └── .env                           # Enviromental variables containing the data required for the tests
    └── .gitignore                     # specifies intentionally untracked files that Git should ignore
    └── package-lock.json              # The explanation is a long and tiring one just use the first google result 
    └── package.json                   # contains descriptive and functional metadata about a project
    └── playwright.config.ts           # Playwright file for extended configuration
    └── README.md                      # This file lmao

# About the decisions, approach and more tests cases: 
