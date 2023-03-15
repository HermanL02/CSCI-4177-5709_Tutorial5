# Tutorial#4


* *Date Created*: 02 03 2023
* *Last Modification Date*:  02 03 2023
* *Deployment URL*: <https://main--csci5709-tutorial-4.netlify.app/>
* *GitLab URL*: <https://git.cs.dal.ca/liang3/csci4177/-/tree/tutorial4>

## Author

* [Herman Liang](yq687754@dal.ca)

### Prerequisites

To have a local copy of this assingnment and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Web Frameworks: Next.js, React
JavaScript runtime environment: Node.js
Library: Material UI 
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

1. Install Node.js, which can be found at (https://nodejs.org/en/)

2. Enter the directory of this project, using "npm install" to install all dependencies

3. use "npm run dev" to develop the project 

## Deployment

Use "run run build" and "npm run start" to deploy the program

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Next.js](https://nextjs.org/) - The web framework used
* [Material UI](https://mui.com/) - The styling library used

* [Microsoft Publisher](https://www.microsoft.com/en-us/microsoft-365/publisher) - The tool used for task flow diagram
* [Mockitt](https://www.mockittapp.wondershare.com) - The tool used for Low-Fidelity Prototype

## Sources Used

General References: (The whole project is using below resources):

1. Material UI Docs: https://mui.com/material-ui/getting-started/overview/
2. NextJS Docs: https://nextjs.org/docs/getting-started
3. ReactJS Docs: https://reactjs.org/docs/getting-started.html

### next.config.js

*Lines 32*

```
module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

```

The code above was created by adapting the code in [NextJS Docs](https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors) as shown below: 

```
module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

```

- <!---How---> The code in [NextJS Docs](https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors) was implemented by Herman
- <!---Why---> [NextJS Docs](https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors)'s Code was used because it solves the failure of npm build.
- <!---How---> [NextJS Docs](https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors)'s Code was modified by Herman

### File Name

*Lines ## - ##*

```
Copy and paste your code on lines mentioned 

```

The code above was created by adapting the code in [NAME](link) as shown below: 

```
Copy and paste the snippet of code you are referencing

```

- <!---How---> The code in [NAME](link) was implemented by...
- <!---Why---> [NAME](link)'s Code was used because...
- <!---How---> [NAME](link)'s Code was modified by...

*Repeat as needed*

## Acknowledgments
