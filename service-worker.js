"use strict";var precacheConfig=[["/Star-Wars-App/index.html","507c4bda6e821c1e1ec0f6bab6eb1d26"],["/Star-Wars-App/static/css/main.9f48a991.css","d6b48e454d5a1de35ae6c6990c7c072a"],["/Star-Wars-App/static/js/main.95cd983e.js","8f101c38fd016013b893659c367dc653"],["/Star-Wars-App/static/media/Alderaan.3c138dee.png","3c138dee3381297709878164c6f16083"],["/Star-Wars-App/static/media/Bespin.32d3a36e.png","32d3a36ec7a6312c7c0ef45a1ad20da0"],["/Star-Wars-App/static/media/Cato Neimoidia.51fc631a.png","51fc631af1e05c807081527b9cd4c68d"],["/Star-Wars-App/static/media/Corellia.031dc661.png","031dc66150e42d883a79a37682252e52"],["/Star-Wars-App/static/media/Coruscant.770334c2.png","770334c2cc88b5f3c058e66f8c3807d8"],["/Star-Wars-App/static/media/Endor.4b90b85a.png","4b90b85af46d6530bc9ae3b43d03b3fb"],["/Star-Wars-App/static/media/Geonosis.722ba927.png","722ba92781281b096fff723515ed3ac3"],["/Star-Wars-App/static/media/Glee Anselm.3c1d13f9.png","3c1d13f9f9a167f7f7f7758d3e59a260"],["/Star-Wars-App/static/media/Iridonia.a9a099e4.png","a9a099e4c620bd5e47f6d65dee45b26f"],["/Star-Wars-App/static/media/Kalee.44d28c59.png","44d28c593061b2e1b10fe70a2fa3e19c"],["/Star-Wars-App/static/media/Kamino.e971bda8.png","e971bda82f2ebde37ebe4ce0bbb0037b"],["/Star-Wars-App/static/media/Kashyyyk.0636173e.png","0636173ed4fce6af42e77ca4d7f43990"],["/Star-Wars-App/static/media/Magnifier.d1e54b61.png","d1e54b61fd9640843b88100f7e1f65ae"],["/Star-Wars-App/static/media/MonCala.3bb0ef97.png","3bb0ef97c45b35fc4b844cc85b61240e"],["/Star-Wars-App/static/media/Naboo.4174da17.png","4174da17fb26d8d3074da8302242fde3"],["/Star-Wars-App/static/media/Nal Hutta.6d587cca.png","6d587ccaab3b6318a107acda08734c68"],["/Star-Wars-App/static/media/Ryloth.16472623.png","164726238a7ad6b0dd59935bc90fbb14"],["/Star-Wars-App/static/media/Starjedi.cc3019aa.ttf","cc3019aa6439ef893839b8a0d6d0391d"],["/Star-Wars-App/static/media/Tatooine.912b11a6.png","912b11a6b92e6c9cefd23f77350251e8"],["/Star-Wars-App/static/media/Umbara.e48d91ad.png","e48d91ad32675029970c56111095c653"],["/Star-Wars-App/static/media/death-star2.061ca02e.png","061ca02e4edff1e386ff8fa76ef444e6"],["/Star-Wars-App/static/media/desert.ba871b85.jpg","ba871b85fd037be326659e668af605ff"],["/Star-Wars-App/static/media/episode1.4f1dd7d3.jpg","4f1dd7d3defbd31ae7d8d3e813b882f9"],["/Star-Wars-App/static/media/episode3.24759629.jpg","2475962906e510c4d62f7dbc39f26c43"],["/Star-Wars-App/static/media/episode4.4b01fc64.jpg","4b01fc64f6331c9444b9bf901ddf90fb"],["/Star-Wars-App/static/media/episode5.30ca2b2e.jpg","30ca2b2eea0046db2e4824d23bc9718b"],["/Star-Wars-App/static/media/episode6.84ecfc55.jpg","84ecfc55510163b8bbfe1aa9285123bf"],["/Star-Wars-App/static/media/gasgiant.d9d33eb7.jpg","d9d33eb7ec33cf27bcd7a056a9e80d47"],["/Star-Wars-App/static/media/grasslands.e3153a8e.jpg","e3153a8e08b42d34ab05ef5d677ffb07"],["/Star-Wars-App/static/media/grassyhills.2eb97daf.jpg","2eb97daf5b02d0f6a44443f5b62c1b3f"],["/Star-Wars-App/static/media/islands.b2e686d5.jpg","b2e686d51bdda7f91d33313a122c579a"],["/Star-Wars-App/static/media/laser.e0b88900.png","e0b88900d008c08e8da77245d650b6b0"],["/Star-Wars-App/static/media/logo.58da0a6a.png","58da0a6a54ce6abdf69fd9292a4a172e"],["/Star-Wars-App/static/media/ocean.2a3a446e.jpg","2a3a446e2cbea5b672f1c0d85378816d"],["/Star-Wars-App/static/media/urban.d02d1606.jpg","d02d16065dc909fb9fbd3b270f79b673"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),c=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var c="/Star-Wars-App/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});