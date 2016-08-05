# Sample Protractor login test

The following tests follow the requirements sent via secure email.

##  Install

Clone repository:

Create a folder and clone this respository with `git clone git@github.com:mardereyes/loginTest.git`

Install dependencies from the /loginTest/ folder :

`npm install`

Install protractor globally:

`sudo npm install -g protractor --save-dev`

Download webdriver binaries:

`npm webdriver-manager update`

Start up server (on a different terminal tab):

`webdriver-manager start`

##  Execute

1- On the `login/credentials_pageObject.js` file update the following fields with your own information:</br></br>
`username`: username to be used on login.</br>
`password`: password to be used on login (matching username).</br>
`recipient`: email recipient for email to be sent on "Should allow user to compose and send an email" scenario.</br>

2- From the `/login/` folder run:

`protractor config.js`

#### Notes

I replaced a console.log reporting for the jasmine-spec-reporter module, which prints the results at the end of the run. It looks more tidy.</br>
The spec setup on `config.js` has a wildcard in order to run all the tests. This can be updated to run a single spec only.</br>
I have not added the `credentials_pageObject.js` to the .gitignore file on purpose since it contains placeholder credentials.


