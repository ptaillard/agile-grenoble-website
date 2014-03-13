agile-grenoble-website
======================

Site web de la conférence Agile Grenoble

## Setting up the development environment




Clone the repository:

    git clone git@github.com:ptaillard/agile-grenoble-website.git

Install [NodeJS](http://nodejs.org/)
    
Install Grunt-cli and bower

    execute "Node.js command prompt" already installed with nodeJS
    npm install grunt-cli -g
    npm install bower -g
    
Install project dependencies

    cd agile-grenoble-website/
    npm install

Use Grunt javascript task manager:

    cd agile-grenoble-website/
    grunt watch

Now we can develop! Sources must be created and updated in src/* directory. These files will be automatically deploy by grunt in the app directory.

Bower a package manager for the web:

    how to search/install/update/uninstall library (example jquery)
    bower search jquery
    bower install jquery --save-dev  (--save-dev option useful to save dependencies)
    bower 
