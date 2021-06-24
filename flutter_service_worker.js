'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b3b20e52b5616694c4af7650bb88e27b",
".git/config": "15f4f87de193594af9636796ed06410d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6de84769ff4ac13b873aa2b0c386c882",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d087222e8103f0c6be11291a6645c208",
".git/logs/refs/heads/master": "d087222e8103f0c6be11291a6645c208",
".git/logs/refs/remotes/origin/master": "136d478d8d6eca22430d1c0597d4062e",
".git/objects/1d/456f314a69ac16e87abdd4504e7cc06c3a6ab3": "c861fd9d75fc444e6000fec2bcc678d7",
".git/objects/1d/bf5f096595318b74287555bed7ddd54f0bb9a7": "a955949a738efa601e67537d47b566b2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/ffe66e9c405a0d1153fb9be21ed7aa28830bce": "12a219fc5a556caa02917e742b0ae1a3",
".git/objects/31/5adab615043c63d6f51f33c0c0e4ab348df8fc": "2e9141158eee519c3ba1132dc6a20d52",
".git/objects/33/7bfd05b2e1cf16c358a41770691b3f397b7a3f": "0c5a5ebb00f8be577f9525b797a460a1",
".git/objects/3a/072bae00eac46e9ad80428d299e4f8d8daf22c": "4244ae554acbda7de2260781260a0b96",
".git/objects/42/f93ab2c6469ccd45ae0fb04aab7db4732d69a2": "bcc6f280063b6b5fe2230c26e39a775d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/58/3948fe44d156730aeee80fa9393f1f37310f63": "eb31872ed453ce8f64f135722ead7cd1",
".git/objects/5a/147a625a0c9d5b70724a8fb9261aa6768f6d0a": "31e8c7a2d6ec2fc5cad2a22949752087",
".git/objects/5a/a2a6435b02f806105e8316e27708cd6cd7010d": "9e449c92be7d9dbba63784a9695a0430",
".git/objects/5c/abacf2cb22c831999909293357e303819b4e3a": "7ca5372211f138fecb43aaa779967d5b",
".git/objects/64/3fbed4bdffc836d383ed04ebdeb63f9c2adbe2": "6e251bc015f7de579ac60011c060a9fa",
".git/objects/6a/d7e3010b50bdd38a17ff84f584e972ba8f6c86": "a35e87689f1055d153af867ca2015d47",
".git/objects/71/da5cd9a7ae07c71cd1cf8dbfb4d08bdc01c1ba": "ea7834845a095a1206544f5548efbf01",
".git/objects/72/19d4a3778c0ebea013a182afde6a5b3490b146": "6c658829795add05d73e37c91f02c501",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/97b5471110006d213636aaed20152f7c7fb298": "969285b42a6f6c94d5d097f860e81fe5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/be6de350fc024171cd4eaa24a809a0a1bff212": "782447d016b21d464706f07146e240ac",
".git/objects/9f/9317026201548ed78f05f4d5a230c9aa347432": "2086dc34634c24017c2782749d8d92e6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/142414c0c782b43d67ca3bf3572bcbd99f1ee9": "651b4e5a49535635045f8e4910cb2359",
".git/objects/b2/d4355ff972a5fd0be02815a8432fb4810e7428": "4d87db858fefbb2f95fccc553f182951",
".git/objects/b3/963f3be8fe54c07b3ffad323d0b841f2d7830e": "949c457864ff1d7156203edf1f7aadb4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cf/cd0b8bc79d1c5432656778df03db4f64b7c25d": "229f8598908732d3be607b13f9d4718b",
".git/objects/d6/38dc5c80b513d89f279aaae4e7e1db26b380f5": "70a956554713de5598d9d71695bad1a9",
".git/objects/d6/b145abdfdd280cc2a47fd480fd86dffcb096ed": "39ad26b5271edf9568bd7bf962c81b3d",
".git/objects/e2/b32431f24ba9bf7231adc8ca111ea3c00eec5c": "0e500b59e2ae67895315f1b31c4f94a4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/0b1f119c805b608b7960e84a421ceba2579d42": "4feee3842b140f85eb8de2f359e804e1",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/3d2c9e04ff166c9f73acbea0f981719a275da3": "3ae3f3cf1fd7d420206af5af80fb5cce",
".git/objects/f8/c88217340eb1e3248d0c4b43838ced373c6129": "72a80d76d59281e06983c4cba118c06e",
".git/objects/f9/ad2213f2dfd21887ba294577ed2a1acc8ce952": "bd69df96e1bfff012436c41b9e9d1138",
".git/refs/heads/master": "98a8924b39d1be544b7d2d29cfb0e322",
".git/refs/remotes/origin/master": "98a8924b39d1be544b7d2d29cfb0e322",
"assets/AssetManifest.json": "74380a6f7bb448e7c0cd2995210432e3",
"assets/assets/images/car1.png": "58dc2dcb54dfd4ae2d1ffb5db18864e1",
"assets/assets/images/car10.png": "a05facfbb91361fe94c3c4a33411e6d7",
"assets/assets/images/car11.png": "016435d1e336485fc0e65c469e6118db",
"assets/assets/images/car12.png": "6bfc3379888ab4362a54d3cf4a826aa2",
"assets/assets/images/car2.png": "907438e7777409225749cc83a8b31c7b",
"assets/assets/images/car3.png": "5c3c2f8e8ebf369c8185e41e35e948aa",
"assets/assets/images/car4.png": "34957fa80cf09d5f66f2172f79b1f3a8",
"assets/assets/images/car5.png": "1f7dd99587b021bd05f68ce8350633f7",
"assets/assets/images/car6.png": "f260c1e8d7c2d72d184f7ef4fc2507aa",
"assets/assets/images/car7.png": "7f38ab9ade57b0f1773fc3fd672dce01",
"assets/assets/images/car8.png": "8fe935c8d3c859f3027a58e143a38020",
"assets/assets/images/car9.png": "136fa14ffd939f41f9d211960fe65225",
"assets/assets/images/ibologo.png": "d2ad43a37f7ab94e37afb983888b3d76",
"assets/assets/images/ikinciel.png": "4c2433f0c18b4817230db787422f670c",
"assets/assets/images/ikincielaraba.png": "a1eceba2d1be395e707139f96d997df3",
"assets/assets/images/jetta.png": "49381c5ba798537afbc0036afc1d4cd8",
"assets/assets/images/lavoiture.png": "af76bee664312d0025c8638c03090977",
"assets/assets/images/logo.png": "fe249849e265b8203782d7730902a7a1",
"assets/assets/images/ozturkcarLogo.png": "ded720fd419afb4632868b154e23863a",
"assets/assets/images/ozturkcarLogo2.png": "298b46728e89692a611ab0bcc3bc0055",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "24b6c7893c1cafad96f84f1d2321ec14",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "da952186a7037eadbb43b168e0e963ad",
"/": "da952186a7037eadbb43b168e0e963ad",
"main.dart.js": "388b8f793cb1b3999d562922f8a68514",
"manifest.json": "eba741108f0c2a2aeaabe8003b7f9df7",
"version.json": "2bb050f4b1ea3efa00e64d601efa5a35"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
