# AjarOnlinePropertyManagement

This assignment demonstrates REACT, REACT ROUTER and REDUX integration.There is a Login and Register page by which user can login into the app.Based on user role if admin it has access to admin section.There is a Post Ad button in header by which user can post their own property ad. User can view porperies and details without login. Every user has a account section in which user details list of porperies added by user are shown.

#### Run the application in development mode (assuming node.js is installed)
```
$ git clone https://github.com/hgsaaz/AjarOnlinePropertyManagement.git
$ cd ajardemo
$ npm install
$ npm start
```

#### How to Build and serve the bundled Application

```sh
$ npm run build
$ npm install -g serve
$ serve -s build
```

### React concepts used are:
- Stateful class components
- Stateless functional components
- Component Lifecycle hooks for adding and removing listeners
- React `state` and `props`
- DOM Events handling
- DOM Nodes `reference`
- JSX Patterns like `conditionals` & `lists`

### React Router v4:
- Routes 
- Redirects (AUTHENTICATION)
- Handling No MATCH (404)
- Use of `SWITCH` for rendering only first matched route.
- Use of `withRouter` to pass down router history for routing without Link.

### Redux Concepts displayed:
- `Reducers` for user handling

#### The code is hosted on github: https://github.com/hgsaaz/AjarOnlinePropertyManagement

#### The application is hosted using gitlab at: [AJAR ONLINE](https://hussaings.gitlab.io/property-listing/)

###### Note: Since gitlab does not support html5 routing, in order to refresh you will have to use the above url again else 404 page will be shown. Best way is to serve it from build folder as shown above.


