#Сборка проекта

git clone https://github.com/mnstrsound/Yw2rjnJv.git app
или
git clone git@github.com:mnstrsound/Yw2rjnJv.git app

cd app

npm install

rm -r build

gulp build

gulp prepare

cd surprise

cordova platform add ios --save

cordova build