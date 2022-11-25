module.exports = {
  apps : [{
    name   : "my-sitecore-jss-app",
    // script : "./app.js"
    // "cwd": "./nested-app",
    "cwd": "/home/site/wwwroot/",
    "script": "npm",
    // "args" : "next:start",
    "args" : ["run", "deploy-to-azure"],
    "autorestart": false,
  }]
}
