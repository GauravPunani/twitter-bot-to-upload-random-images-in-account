# twitter-bots
Description:-
it is a twitter bot which upload image with statues to the your twitter account  

REQUIRMENTS:-
1)node.js ,which you can download from https://nodejs.org
2)twit package from NPM(ndoe package manager) site https://www.npmjs.com/package/twit
3)PROCESSING-JAVA for creating images which you can download from https://processing.org or you can use your favourite software or languages like python,ruby etc.
4)Twitter ac for twitter api

INSTALLING PROCEDURE
    =>NODE.JS
        Go to the https://nodejs.org and donwlaod the appropriate node package for your system.
        Install node.js
        After installing node.js open CMD(Command Prompt) in Administrator Mode(Recommanded) and put these commands
        =>To check wether node is installed or not, enter command
         Command:-node
         and it will display you some basic commands if it has installed properly
         Now to start a new project type in cmd
         type:npm init
         and it will create your json file for your project,you will need to enter some details for your project
       
       
     =>TWIT PACKAGE
        Now to install twit package in your project first of all go to the project folder in your command prompt
        Type:npm install twit
        and it will install twit package in to your project
        
     =>PROCESSING-JAVA
        First of all download processing-java for your operating system from https://processing.org/download
        After download unzip the package into your hardisk
        As one of the advantage of processing-java is that it's sketches can be execute from the command line
        in order to work it with in command line you need to setup the path or install it to the system
        For LINUX Users:-
          there is a option under tools section in processing-java application to install or intialize it for command line
        For WINDOW users:-
          you need to setup the processing-java path in your path variable under advance system setting option
          if you don't know how to do it you can check it for on google that how to set path variable
         Now to check wether processing-java has been initalized for command line, go to the command line and
         Type:processing-java
         It will show you some command if has been set up properly
         To run a sketch from the command line, first of all create a sketch in to the applicaton then
         FOR WINDOW USERS:-
         Type:processing-java --sketch="YOUR-PROJECT-PATH/FILENAME" --run
         FOR LINUS USERS:-
         Type:processing-java --sketch=`pwd`/FILENAME --run
         and it will run/open the file from command line
         
         
       =>TWITTER API
          In order to get twitter API, you must have an account with twitter
          After creating Ac with twitter, make sure you have entered your phone no in twitter ac because it is necessary for api                   connection
          After that go to the twitter devloper site which is https://dev.twitter.com
          open the MANAGE YOUR APPS link
          then create a new app with twitter and go to the key & access token link for your key & access token and all that
          you will need to fill these up in your config.js file to make connection with twitter
          
      
     NEXT STEPS:-
     
      After setting up node.js, twit package, and processing-java into your project folder
      check wether package.json file exist into your project folder,if not
      Type:npm init
      check wether node_modules folder is therr in your project,if not
      Type:npm install twit
      After that download the bot.js file from this project and put it into the project
      Then create a file with name config.js in your project folder
      with code 
      
      CODE:-
      module.exports={
    consumer_key:         '...',
   consumer_secret:      '...',
    access_token:         '...',
    access_token_secret:  '...',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    }
      
      fill up your consumer key,  consumer secret, access token and acess token secret which you get while creaing twitter app 
      Then Save the file.
      
      Now as everthing is set up
      go to the command line and type command
      Type:node bot.js
      and hope so everything will go fine
      Otherwise you may get appropriate errors
      
      
      
