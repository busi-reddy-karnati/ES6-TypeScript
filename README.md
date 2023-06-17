# ES-2015 for React

in tsconfig.json: "outDir": "scripts/", specifies the output directory for all the js code generated

Each ts script gets converted to a js script on compilation
(Ctrl+Shift+B) Windows command for compilation

.vscode/tasks.json specifies all the options for commands and instructions to run

We need to install a server that supplies with output continuously
$npm install -g lite-server
$lite-server
lite-server also gives access to outside world. It gives a ip/url for external use

For Using a file, change this in index.html <script type="text/javascript" src="scripts/1greet.js">
This changes the new file that needs to be picked
