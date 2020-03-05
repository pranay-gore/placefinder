# PlaceFinder

This is a project which help you to find places nearby your mentioned location. You can also search based on categories.


## Getting Started

To get you started you can simply clone the `placefinder` repository and install the dependencies:

### Prerequisites

You need git to clone the `placefinder` repository.
You must have Node.js and its package manager (npm) installed.

### Clone `PlaceFinder`

Clone the `PlaceFinder` repository using git:

```
git clone https://github.com/pranay-gore/placefinder.git
cd placefinder
```
### Install Dependencies

We have preconfigured `npm` to automatically copy the downloaded AngularJS files to `app/lib` so we
can simply do:

```
npm install
```

Behind the scenes this will also call `npm run copy-libs`, which copies the AngularJS files and
other front end dependencies. After that, you should find out that you have two new directories in
your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - contains the AngularJS framework files and other front end dependencies

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8010/index.html`]

