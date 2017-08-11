# twitter-bots
<h1>Description:-</h1>
<p>it is a twitter bot which upload image with statues to the your twitter account</p>  

<h1>REQUIRMENTS:-</h1>
<ul>
<li>node.js ,which you can download from https://nodejs.org</li>
<li>twit package from NPM(ndoe package manager) site https://www.npmjs.com/package/twit</li>
<li>PROCESSING-JAVA for creating images which you can download from https://processing.org or you can use your favourite software or languages like python,ruby etc.</li>
<li>Twitter ac for twitter api</li>
</ul>
<h1>INSTALLING PROCEDURE</h1>
    
    <h2>NODE.JS</h2>
        <p >Go to the https://nodejs.org and donwlaod the appropriate node package for your system.</p>
        <p>Install node.js</p>
        <p>After installing node.js open CMD(Command Prompt) in Administrator Mode(Recommanded) and put these commands</p>
        <p>=>To check wether node is installed or not, enter command</p>
         <code>Command:-node</code>
         <p>and it will display you some basic commands if it has installed properly</p>
         <p>Now to start a new project type in cmd</p>
         <code>type:npm init</code>
         <p>And it will create your json file for your project,you will need to enter some details for your project</p>
    
    <h2>TWIT PACKAGE</h2>
        <p>Now to install twit package in your project first of all go to the project folder in your command prompt and type</p>
        <code>npm install twit</code>
        <p>And it will install twit package in to your project</p>
        
    <h2>PROCESSING-JAVA</h2>
        <p>First of all download processing-java for your operating system from https://processing.org/download</p>
        <p>After download unzip the package into your hardisk</p>
        <p>As one of the advantage of processing-java is that it's sketches can be execute from the command line</p>
        <p>in order to work it with in command line you need to setup the path or install it to the system</p>
        <h4>For LINUX Users:-</h4>
          <p>there is a option under tools section in processing-java application to install or intialize it for command line</p>
        <h4>For WINDOW users:-</h4>
          <p>you need to setup the processing-java path in your path variable under advance system setting option</p>
          <p>if you don't know how to do it you can check it for on google that how to set path variable</p>
         <p>Now to check wether processing-java has been initalized for command line, go to the command line and type</p>
	 <code>processing-java</code>
         <p>It will show you some command if has been set up properly</p>
         <p>To run a sketch from the command line, first of all create a sketch in to the applicaton then</p>
         <h4>FOR WINDOW USERS:-</h4>
         <code>processing-java --sketch="YOUR-PROJECT-PATH/FILENAME" --run</code>
         <h4>FOR LINUS USERS:-</h4>
         <code>processing-java --sketch=`pwd`/FILENAME --run</code>
         <p>and it will run/open the file from command line</p>
         
         
    <h2>TWITTER API</h2>
          <p>In order to get twitter API, you must have an account with twitter</p>
          <p>After creating Ac with twitter, make sure you have entered your phone no in twitter ac because it is necessary for api </p>                  connection
          <p>After that go to the twitter devloper site which is https://dev.twitter.com</p>
          <p>open the MANAGE YOUR APPS link</p>
          <p>then create a new app with twitter and go to the key & access token link for your key & access token and all that</p>
          <p>you will need to fill these up in your config.js file to make connection with twitter</p>
          
      
     NEXT STEPS:-
     
      After setting up node.js, twit package, and processing-java into your project folder
      check wether package.json file exist into your project folder,if not
      Type:npm init
      check wether node_modules folder is therr in your project,if not
      Type:npm install twit
      After that download the bot.js file from this project and put it into the project
      Then create a file with name config.js in your project folder
      with code 
      
	<code>  
	  CODE:-
     module.exports=
      {
      consumer_key:         '...',
      consumer_secret:      '...',
      ccess_token:         '...',
      access_token_secret:  '...',
      timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
      }</code>
      fill up your consumer key,  consumer secret, access token and acess token secret which you get while creaing twitter app 
      Then Save the file.
      
      Now as everthing is set up
      go to the command line and type command
      Type:node bot.js
      and hope so everything will go fine
      Otherwise you may get appropriate errors
      
      
      
