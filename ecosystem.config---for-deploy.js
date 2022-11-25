module.exports = {
  apps : [
    {
      name   : "my-sitecore-jss-app",
      // script : "./app.js"
      // "cwd": "./nested-app",
      "cwd": "/home/site/wwwroot/",
      "script": "npm",
      // "args" : "next:start",
      "args" : ["run", "deploy-to-azure"],
      "autorestart": false,
      "restart_delay": 1000,
      ///
      // error_file:'./error.log',
      // out_file:'./output.log',
      // "log_date_format" : "YYYY-MM-DD HH:mm Z",
      // "watch": true,
      // watch: ['.'],
      ///
      // "env": {
      //   "COMMON_VARIABLE": "true"
      // },
      // "env_production": {
      //   "NODE_ENV": "production"
      // },
    },
  ],
  // "deploy": {
  //   "production": {
  //     "user": "username",
  //     "host": [
  //       "123.x.x.x"
  //     ],
  //     "ref": "origin/master",
  //     "repo": "git@xxx.git",
  //     "path": "/opt/app/halo-xue-react-next",
  //     "pre-setup": "rm -rf /opt/app/halo-xue-react-next/source",
  //     "post-deploy": "npm install && npm run build && pm2 startOrRestart ecosystem.json --env production",
  //     "ssh_options": "StrictHostKeyChecking=no",
  //     "env": {
  //       "NODE_ENV": "production"
  //     }
  //   }
  // },
}
