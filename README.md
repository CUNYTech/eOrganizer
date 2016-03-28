### Project forked from: https://github.com/jpotts18/mean-stack-relational

## Prerequisites
[![Build Status](https://travis-ci.org/CUNYTech/eOrganizer.svg?branch=master)](https://travis-ci.org/CUNYTech/eOrganizer)
- Node.js - Download and Install Node.js. You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm
- MySQL - Download and Install MySQL - Make sure it's running on the default port (3306).

### Tool Prerequisites
- NPM - Node.js package manager, should be installed when you install node.js.

- Bower - Web package manager, installing Bower is simple when you have npm:
``` npm install -g bower ```

# Getting Started

1. Clone the repository
1. Make sure you create the MySQL Database named ```mean_relational```
1. Go into the repository
1. Install dependencies with NPM ```npm install```. This will copy development.json5, and production.json5 from respective sample files in the config/env folder and run the grunt copy task to copy frontend lib files to their destination.
1. Plug in your private and public keys for working with FB and Twitter into ```/config/env/development.json5``` and/or ```/config/env/development.json5```.
1. Wire up the database connection found in ```/config/env/development.json5``` and/or ```/config/env/production.json5```.
1. Run in production mode with: ```pm2 start pm2-ecosystem.json --env production``` (Run ```sudo npm install -g pm2``` if it's not installed.), or
1. Run in development mode with grunt: ```grunt```
1. Make something awesome!

Thats all! Now go and open up your browser at [http://localhost:3000](http://localhost:3000)

### NPM Modules Used
- [Passport](http://passportjs.org/) - Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more. 
- [Express](http://expressjs.com/) - Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.
- [Sequelize](http://sequelizejs.com/) - The Sequelize library provides easy access to MySQL, MariaDB, SQLite or PostgreSQL databases by mapping database entries to objects and vice versa. To put it in a nutshell, it's an ORM (Object-Relational-Mapper). The library is written entirely in JavaScript and can be used in the Node.JS environment. 

### Javascript Tools Used
- [Grunt](http://gruntjs.com/) - In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it, a Grunt can do most of that mundane work for you—and your team—with basically zero effort.

  1. It [watches](https://github.com/jpotts18/mean-stack-relational/blob/master/gruntfile.js#L5) your filesystem and when it detects a change it will livereload your changes. 

  2. It runs [jshint](https://github.com/jpotts18/mean-stack-relational/blob/master/gruntfile.js#L32) which looks through your javascript files and ensures coding standards.

  3. It runs [nodemon](https://github.com/jpotts18/mean-stack-relational/blob/master/gruntfile.js#L35) which watches changes in specific folders and recompiles the app when necessary. No running ```node app.js``` every 2 minutes. 

  4. It can also run tests like mocha and karma for you.

- [Bower](http://bower.io/) - Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat.

### Front-End Tools Used
- [Angular.js](http://angularjs.org) - AngularJS is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications. Its goal is to augment browser-based applications with model–view–controller (MVC) capability, in an effort to make both development and testing easier.
- [Twitter Bootstrap](http://getbootstrap.com/) - Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.
- [UI Bootstrap](http://angular-ui.github.io/bootstrap/) - Bootstrap components written in pure AngularJS by the AngularUI Team

### Project forked from: https://github.com/jpotts18/mean-stack-relational