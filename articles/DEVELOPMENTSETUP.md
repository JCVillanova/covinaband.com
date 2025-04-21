# Development Setup
This website runs off a variety of systems, including [TypeScript](https://www.typescriptlang.org/), the [React](https://react.dev/) JavaScript library, [Material UI](https://mui.com/) components, and the [Yarn](https://yarnpkg.com/) package manager. Each one will need to be set up properly in order to properly develop and make changes. The following text will serve as a quick start guide to get your local system working with the repository.

## Git
Before doing anything else, make sure you have Git installed (you will need it to get the repository onto your local system).

You can check if you have Git by typing the following into a terminal:

```
$ git --version
```

This should return something along the lines of this (although your exact version may be different):

```
git version 2.43.0
```

In the case that you don't have Git, you can just enter this command on a Debian-based operating system:
```
$ sudo apt install git-all
```

For installing on other operating systems, see [Git's official guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Cloning the Repository
To clone to your local system, first navigate to the main page of the repository. Click on the green "Code" button and copy the URL that shows up. Then run this command in the terminal while in your desired directory:
```
$ git clone [your_url.goes/here]
```

This should create a new directory inside your current directory that holds a copy of the repository. You should only have to do this once; getting a more up to date version after the repository is already cloned only requires you to run `$ git pull` in the terminal.


## Yarn
You will need Node.js installed in order to install Yarn. For help on installing Node.js, see their [website](https://nodejs.org/en).

Yarn is a package manager that handles all of the website's dependencies, making the development process much smoother. To see if you have Yarn already, type this into your terminal:
```
$ yarn --version
```

This should return something like this (similarly to Git, the actual version number may vary):
```
1.22.22
```

Assuming you don't have Yarn, you can install it (on Debian-based systems) with this:
```
$ npm install --global yarn
```
If you don't have NPM, go download [Node.js](https://nodejs.org/en) (which comes bundled with NPM), then run the above command again.

Once Yarn is fully set up, run the command `$ yarn install` while in the root directory of the cloned repository. Yarn will then handle the installation of the remaining dependencies of the website (TypeScript, React, and Material UI).

You should then be able to run `$ yarn dev` while in the directory of your local repository, and Yarn will start a local development server that hosts the website, giving you a URL to access it through (for example, `localhost:3000`). Going to that URL on a browser should display the website if everything has been set up properly. The server set up by Yarn will also watch for any changes in the local codebase, meaning you can make changes and see the results in your browser in real time.