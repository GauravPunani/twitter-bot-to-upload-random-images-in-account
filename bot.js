console.log("the file is working");
var Twit=require('twit');
var config=require('./config');
var T = new Twit(config);
var fs=require('fs');

var exec=require('child_process').exec;

//activate the status update function
twitIt();
//setting time interval for function calls
//setInterval(twitIt,1000*20);

//function to tweet status updates to the twitter
function twitIt() {
  var cmd ='processing-java --sketch="C:/Users/MY PC/Desktop/node2/rainbow" --run';
  exec(cmd,processing);
  function processing(data) {
    console.log("picking up the image");
    var filname='rainbow/output.png';
    var params={
      encoding:'base64'
    }
    var b64=fs.readFileSync(filname,params);
    console.log("uploading image to the twitter");
    T.post('media/upload',{media_data:b64},uploaded);
    function uploaded(err, data, response){
      //this is where i tweet
      if(err){console.log("error in uploading image");}
      else {
      console.log("image uploaded");
      }
      var id=data.media_id_string;
      var tweet={
        status:'#codingrainbow',
        media_ids:[id]
      }
      T.post('statuses/update',tweet,tweeted);
      function tweeted(err, data, response) {
       if(err)
       {
         console.log(err);
       }
       else {
         console.log("status updated");
       }
     }

    }

  }
}
