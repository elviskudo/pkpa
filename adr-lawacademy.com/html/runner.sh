cd /app
git pull origin master --force
rm -rf package-lock.json
npm install
npm run build
pm2 start
