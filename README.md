# login-automated-test

The main goal is to verify the login of the web page: https://m.apuestas.codere.es/

## System Requirements

- Playwright requires Node.js version 14 or above. For more details head to: 
[Playwright System Requirements](https://playwright.dev/docs/troubleshooting#system-requirements)

## How to Install

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

VALID_USERNAME = 
VALID_PASSWORD = 
```

- Please take in consideration that the test is designed to run only inside the specified website using this cookie configuration. 

- You will have to provide the VALID_USERNAME and VALID_PASSWORD values with a working account

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

## Folder and Files Explanation

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

- First of all I decided to write the test using a combination of types, utils (common functions) and config files in order to create a more friendly, scalable and maintainable architecture for the tests

- For locating the elements inside the HTML I avoided the common (and most recommendable) locators such as .getByLabel(), .getByRole() and .getByText(), this's because I'm used to create tests for webpages
that uses many different languages using these methods causes to handle a lot of extra information about the elements, also the inner HTML of the elements are more likely to change in the future rather than the classes, ids or names
attributes

- I decided to implement the "content policy cookie" directly inside the browser to avoid writing extra steps that're not related to the test main purpose

- For securities concerns I'm not incluiding the created account username / password because this repository is public

- The index files inside the majority of the folders are used for [Barrel](https://basarat.gitbook.io/typescript/main-1/barrel) 

## Others Tests Scenarios:

There's a lot of different tests scenarios for a login page

No. // Functional Test Cases // Expected result: 

1.	Verify if a user will be able to login with a valid username and valid password.	Positive (This case)
2.	Verify if a user cannot login with a valid username and an invalid password.	Negative
3.	Verify the login page for both, when the field is blank and Submit button is clicked.	Negative
4.	Verify the ‘Forgot Password’ functionality.	Positive
5.	Verify the messages for invalid login.	Positive
6.	Verify the ‘Remember Me’ functionality.	Positive
7.	Verify if the data in password field is either visible as asterisk or bullet signs.	Positive
8.	Verify if a user is able to login with a new password only after he/she has changed the password.	Positive
9.	Verify if the login page allows to log in simultaneously with different credentials in a different browser.	Positive
10	Verify if the ‘Enter’ key of the keyboard is working correctly on the login page.	Positive
11. Verify if a user cannot enter the characters more than the specified range in each field (Username and Password).	Negative
12.	Verify if a user cannot enter the characters more than the specified range in each field (Username and Password).	Positive
13.	Verify the login page by pressing ‘Back button’ of the browser. It should not allow you to enter into the system once you log out.	Negative
14.	Verify the timeout functionality of the login session.	Positive
15.	Verify if a user should not be allowed to log in with different credentials from the same browser at the same time.	Negative
16.	Verify if a user should be able to login with the same credentials in different browsers at the same time.	Positive
17.	Verify the Login page against SQL injection attack.	Negative
18.	Verify the implementation of SSL certificate.	Positive


(To be honest there's the [source](https://www.softwaretestinghelp.com/login-page-test-cases/) of this info. I was about to get crazy thinking in 10000 tests cases smh)


PD: If you have any question or just want to contact me feel free to write to my email whenever you want. Thank you for your time :D <3 

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



