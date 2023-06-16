# Cumulocity IoT Web Development

## Installation and Setup

#### Prerequisites
First, make sure you have installed **Node.js**, version `14.X.X`, to have the *node package manager* or **npm**. You can install the Node v14.17.3 LTS via this [link](https://nodejs.org/en/blog/release/v14.17.3).

In addition, you will need to have an understanding of [Angular](https://angular.io/docs) and [TypeScript](https://www.typescriptlang.org/docs/). Furthermore it is recommend that you have a basic knowledge of [Cumulocity IoT and its data model](https://cumulocity.com/guides/concepts/domain-model/).

### Installation
Once Node.js has been installed, you will need to install the Cumulocity IoT CLI (Command Line Interface; a.k.a **C8Y**) `@c8y/cli`, to create, build and deploy Cumulocity IoT plugins and web applications.

You way install the CLI globally (with the `-g` argument). This way, you will be able to call C8Y from anywhere in your file system.
```powershell
npm install -g @c8y/cli
```
By default, this will install the latest official version. To stay up-to-date,  you will need to update the CLI tools regularly.

Alternatively, you can install C8Y on an on-demand basis using `npx`, which comes with npm, to run commands without needing the C8Y to be globally installed. In addition, you can select which version of the C8Y you wanted installed.

**NB**: If you choose to install C8Y using `npx`, you will need to preface every `c8y/cli` command with `npx`.

For example: creating an empty application.
`npx c8y/cli new`

#### Create an empty application
To create an empty web application, simply call C8Y's `new` function:
```bash
c8y/cli new
```
The terminal will prompt you to select a base version of C8y to scaffold from.
```bash
? Which base version do you want to scaffold from? (Use arrow keys)
> 1015.0.329 (latest)
  1017.250.0 (next)
  1017.0.99
  1016.0.181
  1014.0.330
  1013.0.405
  other
```
Select `(latest)` to use the latest LTS version of C8y or `(next)` to use the latest beta version currently in development.

Next, the terminal will prompt you to select a template from which to scaffold the application.
```bash
? Which base project do you want to scaffold from? (Use arrow keys)
> administration
  application
  cockpit
  devicemanagement
  hybrid
  package-blueprint
  tutorial
```
To create a simple application that can be added to Novanta's cumulocity server, select `application`. For more information on the different templates that are available, please consult the [official documentation](https://cumulocity.com/guides/web/development-tools/#the-new-command).

Once the C8Y project has been generated, you must enter the directory in your terminal and install the node dependencies:
```bash
npm install
```
or
```bash
npm i
```
If running the command causes a node dependency error, then you can install the packages with the additional argument `--legacy-peer-deps`. This will ensure that C8Y will only install compatable versions of the dependecy packages listed in `packages.json`.

#### Running a web application
Once the installation is complete, you can run the Cumulocity IoT web application on Novanta Cumulocity IoT instance by adding its URL as an argument:
```bash
c8ycli server -u http://novanta.us.cumulocity.com
```
The `-u` parameter specifics the Cumulocity IoT instance to which all API requests should be proxied to.

**NB**: You can also add a shortcut for the above command by going to `package.json > "scripts"` and  pasting the above command as the value for the `npm start` key. This way, you will be able to run the web application directly from the terminal using: `npm start`.

With the application running, you can now access it in the browser via the URL: `http://localhost:9000/apps/[name_of_application]`.

You will be greeted by a login screen.
![1679942577207](images\README\C8Y_login.png)

You will need your tenant ID which can be found by logging into Novanta's Cumulocity IoT server and clicking the display menu once you click on your name on the top-right corner of the screen. 

If successful, you will be greeted by a blank application page.
![1679943186079](images\README\C8Y_blank_page.png)

## Creating Components

Prior to creating your first component, create a root folder called `src`. This folder will store all of your source code for creating or expanding existing C8Y applications.

[Angular Modules](https://angular.io/guide/architecture-modules) are the basic building blocks of Angular applications:
>[They] are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.

Every new feature of the application should correspond to one module. Following the **Separation of Concerns** principle of software design, each module will contain separate files for angular components, service providers, models (i.e. business classes) and anything else required within the scope of that module.

### Process
In this example, we will create a module called `device-info`.
1. Create a folder for your module in the `src` directory.
2. 



