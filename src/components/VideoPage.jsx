import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { APP_ID, SERVER_SECRET} from './constant';

const VideoPage = () => {
    const {id}=useParams();
    // const roomID = getUrlParams().get('roomID') || randomID(5);
    const roomID =id;
    let myMeeting = async (element) => {
   // generate Kit Token
    // const appID = APP_ID ;
    const appID = 220266237 ;
    const serverSecret = "c0273a31dd2eeb734bdf1d3d513a5fcd";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), "Anshuman Patek");


   // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
           window.location.protocol + '//' + 
           window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
    }
  return (
    <div ref={myMeeting}> VideoPage{id}</div>
  )

}

export default VideoPage;