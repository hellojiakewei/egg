#!/bin/bash
# description: Starts and stops the App.
APP_HOME=`pwd`
cd $APP_HOME
cd $APP_HOME/vue/doushenExam
npm run build:prod
rm -rf $APP_HOME/public
mv $APP_HOME/vue/doushenExam/dist $APP_HOME/public
git clone https://github.com/hellojiakewei/jenkinsfile.git


