const _0x599098=_0x5d30;(function(_0x5199a1,_0x41186f){const _0x1082fa=_0x5d30,_0x13c865=_0x5199a1();while(!![]){try{const _0x2a0f01=-parseInt(_0x1082fa(0x1f1))/0x1*(parseInt(_0x1082fa(0x202))/0x2)+parseInt(_0x1082fa(0x1dc))/0x3*(parseInt(_0x1082fa(0x1f9))/0x4)+parseInt(_0x1082fa(0x212))/0x5+parseInt(_0x1082fa(0x1f6))/0x6+-parseInt(_0x1082fa(0x1f5))/0x7*(parseInt(_0x1082fa(0x1eb))/0x8)+-parseInt(_0x1082fa(0x21f))/0x9*(parseInt(_0x1082fa(0x213))/0xa)+parseInt(_0x1082fa(0x20d))/0xb;if(_0x2a0f01===_0x41186f)break;else _0x13c865['push'](_0x13c865['shift']());}catch(_0x2ec5b6){_0x13c865['push'](_0x13c865['shift']());}}}(_0x4355,0x6147d));import _0x4e170f from'dotenv';_0x4e170f[_0x599098(0x1e1)]();import{makeWASocket,Browsers,jidDecode,makeInMemoryStore,makeCacheableSignalKeyStore,fetchLatestBaileysVersion,DisconnectReason,useMultiFileAuthState,getAggregateVotesInPollMessage}from'@whiskeysockets/baileys';import{Handler,Callupdate,GroupUpdate}from'./event/index.js';import{Boom}from'@hapi/boom';function _0x5d30(_0x14dc99,_0x8bfc2d){const _0x4355d8=_0x4355();return _0x5d30=function(_0x5d30d4,_0x1fd49c){_0x5d30d4=_0x5d30d4-0x1d1;let _0x779733=_0x4355d8[_0x5d30d4];return _0x779733;},_0x5d30(_0x14dc99,_0x8bfc2d);}import _0x39a33b from'express';import _0x47d97c from'pino';import _0x1a9fa3 from'fs';import _0x543062 from'node-cache';function _0x4355(){const _0x255c6c=['2vRNmXa','key','keys','sendMessage',',\x22time\x22:\x22','open','store','writeFileSync','red','loadMessage','messages','17743814lRnHze','bold','group-participants.update','public','self','481680yBLkMA','10SdeoKT','[♻️]\x20Server\x20Restarting.','text','listMessage','get','env','♻️\x20Connection\x20reestablished\x20after\x20restart.','SESSION_ID','silent','log','templateMessage','error','6157449MTpILj','blue','child','MacOS','connectionClosed','Hello\x20World','remoteJid','hex','win32','join','fatal','send','12GZhIJn','MODE','Linux','darwin','[😩]\x20Connection\x20closed,\x20reconnecting.','config','Windows','statusCode','floor',',\x20isLatest:\x20','#32CD32','authState','Hello\x20World!','connection.update','messages.upsert','5612216VfXrGi','trace','user','Error\x20during\x20auto\x20reaction:','[🚫️]\x20Something\x20Went\x20Wrong:\x20Failed\x20to\x20Make\x20Connection','121.0.6167.159','401119LiZoXA','platform','loggedOut','buttonsMessage','7DLvbXI','474156iUkILH','Server\x20is\x20running\x20on\x20port\x20','creds','396832rFgDNC','[⏳]\x20Connection\x20Timed\x20Out,\x20Trying\x20to\x20Reconnect.','split','message','AUTO_REACT','😃\x20Integration\x20Successful️\x20✅','[😭]\x20Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again.','using\x20WA\x20v','close'];_0x4355=function(){return _0x255c6c;};return _0x4355();}import _0x361d44 from'path';import _0x38f329 from'chalk';import{writeFile}from'fs/promises';import _0x411e98 from'moment-timezone';import _0x29a0f3 from'axios';import _0x4ebfe8 from'node-fetch';import*as _0x127982 from'os';import _0x33286c from'../config.cjs';import _0x23ce18 from'../lib/autoreact.cjs';const {emojis,doReact}=_0x23ce18,sessionName='session',app=_0x39a33b(),orange=_0x38f329[_0x599098(0x20e)][_0x599098(0x1d7)]('#FFA500'),lime=_0x38f329['bold'][_0x599098(0x1d7)](_0x599098(0x1e6));let useQR,isSessionPutted,initialConnection=!![];const PORT=process[_0x599098(0x218)]['PORT']||0xbb8,MAIN_LOGGER=_0x47d97c({'timestamp':()=>_0x599098(0x206)+new Date()['toJSON']()+'\x22'}),logger=MAIN_LOGGER[_0x599098(0x1d2)]({});logger['level']=_0x599098(0x1ec);const msgRetryCounterCache=new _0x543062(),store=makeInMemoryStore({'logger':_0x47d97c()[_0x599098(0x1d2)]({'level':_0x599098(0x21b),'stream':_0x599098(0x208)})});async function start(){const _0x3b8cd5=_0x599098;!_0x33286c[_0x3b8cd5(0x21a)]?(useQR=!![],isSessionPutted=![]):(useQR=![],isSessionPutted=!![]);let {state:_0x2b2695,saveCreds:_0x3d2cd9}=await useMultiFileAuthState(sessionName),{version:_0x4e9565,isLatest:_0x2073ac}=await fetchLatestBaileysVersion();console['log'](_0x38f329[_0x3b8cd5(0x20a)]('CODED\x20BY\x20GOUTAM\x20KUMAR\x20&\x20Ethix-Xsid')),console[_0x3b8cd5(0x21c)](_0x38f329['green'](_0x3b8cd5(0x200)+_0x4e9565[_0x3b8cd5(0x1d9)]('.')+_0x3b8cd5(0x1e5)+_0x2073ac));const _0x3117d4=_0x127982['platform']()===_0x3b8cd5(0x1d8)?_0x3b8cd5(0x1e2):_0x127982[_0x3b8cd5(0x1f2)]()===_0x3b8cd5(0x1df)?_0x3b8cd5(0x1d3):_0x3b8cd5(0x1de),_0x5d7894=makeWASocket({'version':_0x4e9565,'logger':_0x47d97c({'level':_0x3b8cd5(0x21b)}),'printQRInTerminal':useQR,'browser':[_0x3117d4,'chrome',_0x3b8cd5(0x1f0)],'patchMessageBeforeSending':_0xa096f7=>{const _0x4ed4b9=_0x3b8cd5,_0x358deb=!!(_0xa096f7[_0x4ed4b9(0x1f4)]||_0xa096f7[_0x4ed4b9(0x21d)]||_0xa096f7[_0x4ed4b9(0x216)]);return _0x358deb&&(_0xa096f7={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0xa096f7}}}),_0xa096f7;},'auth':{'creds':_0x2b2695[_0x3b8cd5(0x1f8)],'keys':makeCacheableSignalKeyStore(_0x2b2695[_0x3b8cd5(0x204)],_0x47d97c({'level':_0x3b8cd5(0x1da)})['child']({'level':_0x3b8cd5(0x1da)}))},'getMessage':async _0x34fc7c=>{const _0x203987=_0x3b8cd5;if(store){const _0x3517e1=await store[_0x203987(0x20b)](_0x34fc7c['remoteJid'],_0x34fc7c['id']);return _0x3517e1[_0x203987(0x1fc)]||undefined;}return{'conversation':_0x203987(0x1d5)};},'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'defaultQueryTimeoutMs':undefined,'msgRetryCounterCache':msgRetryCounterCache});store?.['bind'](_0x5d7894['ev']);if(!_0x5d7894[_0x3b8cd5(0x1e7)][_0x3b8cd5(0x1f8)]['registered']&&isSessionPutted){const _0x3c8547=_0x33286c[_0x3b8cd5(0x21a)][_0x3b8cd5(0x1fb)]('Ethix-MD&')[0x1],_0x44a6be='https://pastebin.com/raw/'+_0x3c8547,_0x31d631=await _0x4ebfe8(_0x44a6be),_0x7d0ab1=await _0x31d631[_0x3b8cd5(0x215)]();typeof _0x7d0ab1==='string'&&(_0x1a9fa3[_0x3b8cd5(0x209)]('./session/creds.json',_0x7d0ab1),console[_0x3b8cd5(0x21c)]('session\x20file\x20created'),await start());}async function _0x579118(_0x3dc0e9){const _0x5bddcb=_0x3b8cd5;if(store){const _0x5f3bf2=await store[_0x5bddcb(0x20b)](_0x3dc0e9[_0x5bddcb(0x1d6)],_0x3dc0e9['id']);return _0x5f3bf2?.[_0x5bddcb(0x1fc)];}return{'conversation':_0x5bddcb(0x1d5)};}_0x5d7894['ev']['on'](_0x3b8cd5(0x1ea),async _0x218865=>await Handler(_0x218865,_0x5d7894,logger)),_0x5d7894['ev']['on']('call',async _0x11b320=>await Callupdate(_0x11b320,_0x5d7894)),_0x5d7894['ev']['on'](_0x3b8cd5(0x20f),async _0x4ac7b8=>await GroupUpdate(_0x5d7894,_0x4ac7b8));if(_0x33286c[_0x3b8cd5(0x1dd)]===_0x3b8cd5(0x210))_0x5d7894[_0x3b8cd5(0x210)]=!![];else _0x33286c[_0x3b8cd5(0x1dd)]===_0x3b8cd5(0x211)&&(_0x5d7894[_0x3b8cd5(0x210)]=![]);_0x5d7894['ev']['on'](_0x3b8cd5(0x1e9),async _0x61596e=>{const _0x470a9c=_0x3b8cd5,{connection:_0x1100b4,lastDisconnect:_0x4d8e19}=_0x61596e;if(_0x1100b4===_0x470a9c(0x201)){let _0x205643=new Boom(_0x4d8e19?.[_0x470a9c(0x21e)])?.['output'][_0x470a9c(0x1e3)];if(_0x205643===DisconnectReason[_0x470a9c(0x1d4)])console['log'](_0x38f329[_0x470a9c(0x20a)](_0x470a9c(0x1e0))),start();else{if(_0x205643===DisconnectReason['connectionLost'])console['log'](_0x38f329[_0x470a9c(0x20a)]('[🤕]\x20Connection\x20Lost\x20from\x20Server,\x20reconnecting.')),start();else{if(_0x205643===DisconnectReason[_0x470a9c(0x1f3)])console['log'](_0x38f329[_0x470a9c(0x20a)](_0x470a9c(0x1ff))),process['exit']();else{if(_0x205643===DisconnectReason['restartRequired'])console['log'](_0x38f329[_0x470a9c(0x1d1)](_0x470a9c(0x214))),start();else _0x205643===DisconnectReason['timedOut']?(console[_0x470a9c(0x21c)](_0x38f329[_0x470a9c(0x20a)](_0x470a9c(0x1fa))),start()):console[_0x470a9c(0x21c)](_0x38f329['red'](_0x470a9c(0x1ef)));}}}}_0x1100b4===_0x470a9c(0x207)&&(initialConnection?(console[_0x470a9c(0x21c)](_0x38f329['green'](_0x470a9c(0x1fe))),_0x5d7894[_0x470a9c(0x205)](_0x5d7894[_0x470a9c(0x1ed)]['id'],{'text':_0x470a9c(0x1fe)}),initialConnection=![]):console[_0x470a9c(0x21c)](_0x38f329[_0x470a9c(0x1d1)](_0x470a9c(0x219))));}),_0x5d7894['ev']['on'](_0x3b8cd5(0x1ea),async _0x3d7fbe=>{const _0x1abb3e=_0x3b8cd5;try{const _0x5aa424=_0x3d7fbe[_0x1abb3e(0x20c)][0x0];if(!_0x5aa424[_0x1abb3e(0x203)]['fromMe']&&_0x33286c[_0x1abb3e(0x1fd)]){console[_0x1abb3e(0x21c)](_0x5aa424);if(_0x5aa424[_0x1abb3e(0x1fc)]){const _0x14184e=emojis[Math[_0x1abb3e(0x1e4)](Math['random']()*emojis['length'])];await doReact(_0x14184e,_0x5aa424,_0x5d7894);}}}catch(_0x4f3f69){console[_0x1abb3e(0x21e)](_0x1abb3e(0x1ee),_0x4f3f69);}});}start(),app[_0x599098(0x217)]('/',(_0x41382f,_0xa1cb4d)=>{const _0x50733f=_0x599098;_0xa1cb4d[_0x50733f(0x1db)](_0x50733f(0x1e8));}),app['listen'](PORT,()=>{const _0x31cc3e=_0x599098;console[_0x31cc3e(0x21c)](_0x31cc3e(0x1f7)+PORT);});