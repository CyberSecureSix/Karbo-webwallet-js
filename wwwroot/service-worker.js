"use strict";
/*
 * Copyright (c) 2018, Gnock
 * Copyright (c) 2018, The Masari Project
 * Copyright (c) 2018, The Plenteum Project
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');
workbox.precaching.precacheAndRoute([
  {
    "url": "api.html",
    "revision": "d5aeaf2359dc6cee42135dc6748933f3"
  },
  {
    "url": "api.js",
    "revision": "52f3c4d3d53d133efde67aabc9bb6ace"
  },
  {
    "url": "assets/css/font-awesome.css",
    "revision": "4bb3dd721c4652feee0953261d329710"
  },
  {
    "url": "assets/css/font-awesome.min.css",
    "revision": "a0e784c4ca94c271b0338dfb02055be6"
  },
  {
    "url": "assets/css/main.css",
    "revision": "81d95f847d893764323c6334a849c40d"
  },
  {
    "url": "assets/img/binary-background.jpg",
    "revision": "9950b9f8a4133456595e5e9a2bc3f7e8"
  },
  {
    "url": "assets/img/favicon.ico",
    "revision": "12458b914baedde9297ba45becb69400"
  },
  {
    "url": "assets/img/icons/icon-128x128.png",
    "revision": "e34530a36ef9cf074197b80b1560bb27"
  },
  {
    "url": "assets/img/icons/icon-144x144.png",
    "revision": "0a89c4a38cc10726b614a30227162b5e"
  },
  {
    "url": "assets/img/icons/icon-152x152.png",
    "revision": "5f68b0bff496d8566c349d90f23f3d48"
  },
  {
    "url": "assets/img/icons/icon-192x192.png",
    "revision": "64adddf26f140413e7214a94d78797f9"
  },
  {
    "url": "assets/img/icons/icon-256x256.png",
    "revision": "7dd6ad2b73c9938593268a9c53e804b7"
  },
  {
    "url": "assets/img/icons/icon-402x402.png",
    "revision": "0827310a1f622a90348340e64f2f8d5b"
  },
  {
    "url": "assets/img/landing/75-usersthink-stock-image.jpg",
    "revision": "7a00bbf57aacc5303e846055b6dae1cb"
  },
  {
    "url": "assets/img/logo_white.png",
    "revision": "2824d8ede1a1df017e3ede454fd7f2a4"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "686c9eccc934e32076127f4671eba942"
  },
  {
    "url": "assets/img/logoQrCode.png",
    "revision": "998554cd3aa8de3de02cbbcf4962fdfd"
  },
  {
    "url": "assets/img/Plenteum_Vertical.png",
    "revision": "cc8bb367eafb7b2d7092a9f5e24e45a0"
  },
  {
    "url": "config.js",
    "revision": "b75e4873915676a2a896d76b51ebd36c"
  },
  {
    "url": "d/vue-i118n.js",
    "revision": "85fd5089c3278f8f544a3691fd38f49b"
  },
  {
    "url": "filters/Filters.js",
    "revision": "9d0f56ebc62074772f02322cd9627d41"
  },
  {
    "url": "index.html",
    "revision": "849e2a7691a5ebbe81e90b75fb6a1f5b"
  },
  {
    "url": "index.js",
    "revision": "6166c030db55448100e9d546a2cb2ac0"
  },
  {
    "url": "lib/base58.js",
    "revision": "cad61541b48010d7e792f394567995a7"
  },
  {
    "url": "lib/biginteger.js",
    "revision": "530a07476fdc1ca4e90f0696dde85709"
  },
  {
    "url": "lib/cn_utils_native.js",
    "revision": "6f382226c0962599661c49e5b5952d77"
  },
  {
    "url": "lib/cn_utils.js",
    "revision": "a7ed4f18b6258fa0df4fe65e54eb1532"
  },
  {
    "url": "lib/crypto.js",
    "revision": "94a47d1cad1e87e779eb29e21225f1e4"
  },
  {
    "url": "lib/decoder.min.js",
    "revision": "87eac23b87a1b14b80563b5fe775bc17"
  },
  {
    "url": "lib/FileSaver.min.js",
    "revision": "d2e0d52146931b50ded6b4a8cadb6f8f"
  },
  {
    "url": "lib/jquery-3.2.1.min.js",
    "revision": "473957cfb255a781b42cb2af51d54a3b"
  },
  {
    "url": "lib/jspdf.min.js",
    "revision": "bcc6f9c8d3b58438d8e8aa24314b41f9"
  },
  {
    "url": "lib/kjua-0.1.1.min.js",
    "revision": "f0ea94e8c4cbc705eaaf8b6cede15389"
  },
  {
    "url": "lib/mining/cn.js",
    "revision": "61bb278f05944f130d36441262aafe65"
  },
  {
    "url": "lib/mining/cn2.js",
    "revision": "bc3b8fa73d894d3ddffa1d2e7bb0bb0f"
  },
  {
    "url": "lib/mining/worker.js",
    "revision": "56f04bf3eb8d4d93752dca47f95adbd5"
  },
  {
    "url": "lib/mnemonic.js",
    "revision": "f81f584bb025513e9544900b0e9d0c31"
  },
  {
    "url": "lib/nacl-fast-cn.js",
    "revision": "5a4c4d33ad852ae5cce33dcc2c3d29a3"
  },
  {
    "url": "lib/nacl-fast.js",
    "revision": "7458a6b3018e57a4ab4ca81a6dd26dd2"
  },
  {
    "url": "lib/nacl-fast.min.js",
    "revision": "4e5450d2e030eed0c1b96cccd68ab8db"
  },
  {
    "url": "lib/nacl-util.min.js",
    "revision": "c7b843b9e9b5aad102c855c600c7edc8"
  },
  {
    "url": "lib/nacl.js",
    "revision": "43f0590d1bd0d155c37168eef6375e14"
  },
  {
    "url": "lib/nacl.min.js",
    "revision": "d8eaf281c8890a60ebe82840456edc33"
  },
  {
    "url": "lib/numbersLab/Context.js",
    "revision": "ebb2aae3a749741226613dd291cc2839"
  },
  {
    "url": "lib/numbersLab/DependencyInjector.js",
    "revision": "8a6c8d1278777297fdb87c901839ea6b"
  },
  {
    "url": "lib/numbersLab/DestructableView.js",
    "revision": "130f58a50d4641ce84928ccbacf1a965"
  },
  {
    "url": "lib/numbersLab/Logger.js",
    "revision": "de9da3f513d18d131cbe7fd783105cd5"
  },
  {
    "url": "lib/numbersLab/Observable.js",
    "revision": "d3bede42dfc41a78b4d50647bdb74646"
  },
  {
    "url": "lib/numbersLab/Router.js",
    "revision": "1af955cddf8e600fcf6f26d56dda354e"
  },
  {
    "url": "lib/numbersLab/VueAnnotate.js",
    "revision": "503a173798ba5bfb0598061b62864920"
  },
  {
    "url": "lib/require.js",
    "revision": "5b08692433e727db32f63db348f4837b"
  },
  {
    "url": "lib/sha3.js",
    "revision": "c38274b1eab5b932269f17bb9cc759b0"
  },
  {
    "url": "lib/sweetalert2.js",
    "revision": "59eb5df1a27b4ba7d10b4ce3e3749f30"
  },
  {
    "url": "lib/vue-i18n.js",
    "revision": "fe8f6691b4ed710c1cb85182ab223a3f"
  },
  {
    "url": "lib/vue.min.js",
    "revision": "3e7fd9458a2147045ce499aa4ccc27f6"
  },
  {
    "url": "localforage.js",
    "revision": "371744264096fd11aac649ce9442fb11"
  },
  {
    "url": "manifest.json",
    "revision": "70a5824be1067c32ef427806bb602c5b"
  },
  {
    "url": "model/AppState.js",
    "revision": "dfaf9343c1e093a5c5781c61ca6e9c0f"
  },
  {
    "url": "model/blockchain/BlockchainExplorer.js",
    "revision": "85fb12af40cfd70bfbec1669baa6f667"
  },
  {
    "url": "model/blockchain/BlockchainExplorerRpc2.js",
    "revision": "c67b656544002fbe886d33a1ead6739d"
  },
  {
    "url": "model/CnUtilNative.js",
    "revision": "e74e1aa1e5ef05a56e3d2979419ce013"
  },
  {
    "url": "model/CoinUri.js",
    "revision": "4f5aeddfc4aba3273d3b1724caf58d1a"
  },
  {
    "url": "model/Constants.js",
    "revision": "956955484242c2bbbbeb3f0976fb3617"
  },
  {
    "url": "model/CryptoUtils.js",
    "revision": "c2216faaa6e8aaa655092f01ae2e843e"
  },
  {
    "url": "model/KeysRepository.js",
    "revision": "5eebb7fbdcd6897c32d8fd5a76b4077a"
  },
  {
    "url": "model/MathUtil.js",
    "revision": "36d93451a5df233baa82f1821954b77d"
  },
  {
    "url": "model/Mnemonic.js",
    "revision": "2767f050c83a00c54418d29b0e897423"
  },
  {
    "url": "model/MnemonicLang.js",
    "revision": "33f9cc02526dc437fe62dc209b6fbcff"
  },
  {
    "url": "model/Nfc.js",
    "revision": "7e399a97da4ef764b528401d84951474"
  },
  {
    "url": "model/Password.js",
    "revision": "a352a16921a661aee4365176bd88cf62"
  },
  {
    "url": "model/QRReader.js",
    "revision": "2155bc491b160c8e66b4182f5e1a73b9"
  },
  {
    "url": "model/Storage.js",
    "revision": "1eb6e056c3d3d017682201fbf4b02206"
  },
  {
    "url": "model/Transaction.js",
    "revision": "e16a477d5b198ce8c4cdb23d602bb13f"
  },
  {
    "url": "model/TransactionsExplorer.js",
    "revision": "5a71de22f2fdc55925e61dabe6a0eb9a"
  },
  {
    "url": "model/Translations.js",
    "revision": "c4dcdca562968f193fe6b535bad47c89"
  },
  {
    "url": "model/Wallet.js",
    "revision": "23a0f475520a220b30745f41af95fde1"
  },
  {
    "url": "model/WalletRepository.js",
    "revision": "43978437eab84ae8dece82c3cbdda118"
  },
  {
    "url": "pages/account.html",
    "revision": "3b220b35733f2360a4fa4a8b4a8a3d22"
  },
  {
    "url": "pages/account.js",
    "revision": "b9a2dc56e7737a15e47e62dc675e46bc"
  },
  {
    "url": "pages/changeWalletPassword.html",
    "revision": "6961bb048cd0617399ee0d7b186bf3b1"
  },
  {
    "url": "pages/changeWalletPassword.js",
    "revision": "7e446c22055af0a52c7f9364108c9748"
  },
  {
    "url": "pages/createWallet.html",
    "revision": "b02c92037f45a38e36c23549504891f8"
  },
  {
    "url": "pages/createWallet.js",
    "revision": "7d1dd645f8194ca17ba19817940f717b"
  },
  {
    "url": "pages/disconnect.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "pages/disconnect.js",
    "revision": "4b124cf17f203ece98b4214bc20e986f"
  },
  {
    "url": "pages/donate.html",
    "revision": "73ad1deb2bd30139ac67f03eeb336cc1"
  },
  {
    "url": "pages/donate.js",
    "revision": "6e6efab0657e9be11ab8176b93602d6d"
  },
  {
    "url": "pages/export.html",
    "revision": "87c83bb6a127ddf158658bd8d4fb8038"
  },
  {
    "url": "pages/export.js",
    "revision": "6a76c420fa082611a33935a8e488ffe9"
  },
  {
    "url": "pages/import.html",
    "revision": "399e9714c496ee92076c8055f470d816"
  },
  {
    "url": "pages/import.js",
    "revision": "056ec5ee856246d76e8c22719258b9b3"
  },
  {
    "url": "pages/importFromFile.html",
    "revision": "e78206b3a5d2f17cbaf857126778545d"
  },
  {
    "url": "pages/importFromFile.js",
    "revision": "35e57db40c562d3a02922cb719011cab"
  },
  {
    "url": "pages/importFromKeys.html",
    "revision": "9eeaa15d98e7871992ca14d5e14dd0b1"
  },
  {
    "url": "pages/importFromKeys.js",
    "revision": "cc698306c5f525d705635bf0f6ebf51e"
  },
  {
    "url": "pages/importFromMnemonic.html",
    "revision": "9dd02c89b9dd07c3b0e69a18df1b8236"
  },
  {
    "url": "pages/importFromMnemonic.js",
    "revision": "7fc1978f7d4ff9e49b2ab3476e945d89"
  },
  {
    "url": "pages/importFromQr.html",
    "revision": "d066f402ce1243383d024820920704b0"
  },
  {
    "url": "pages/importFromQr.js",
    "revision": "5127964fa34723b566678a0a47293ac6"
  },
  {
    "url": "pages/index.html",
    "revision": "5371958a3cdb141b289048159188bcd9"
  },
  {
    "url": "pages/index.js",
    "revision": "fb88f1c946ce3759f3e9a7788d11f092"
  },
  {
    "url": "pages/mining.html",
    "revision": "36b62bc413f550c0d85e4087b0dd76b1"
  },
  {
    "url": "pages/mining.js",
    "revision": "7a018bf5fd2457f236faff3038c1bd15"
  },
  {
    "url": "pages/network.html",
    "revision": "745e7aa93cd047ef4a37ff142062958e"
  },
  {
    "url": "pages/network.js",
    "revision": "53cde221e039f8b745062894c864605a"
  },
  {
    "url": "pages/receive.html",
    "revision": "f2f69df6e47d5e4c20fd20cd053e3e44"
  },
  {
    "url": "pages/receive.js",
    "revision": "adace8043322916bbdb1dbdd7c3bb776"
  },
  {
    "url": "pages/send.html",
    "revision": "990a8eea5b6635e6be903007075c1a55"
  },
  {
    "url": "pages/send.js",
    "revision": "54d449e6749f04dd25a86f2c6a8bb081"
  },
  {
    "url": "pages/settings.html",
    "revision": "25e554d8d1d854700a70cc10d789bab6"
  },
  {
    "url": "pages/settings.js",
    "revision": "396280f688b48fc61505a7fbc938ca60"
  },
  {
    "url": "pages/support.html",
    "revision": "82b0e6318d19b9f4580f19f9045f5320"
  },
  {
    "url": "pages/support.js",
    "revision": "f8135fd2b9c7f8744750ae6520c0fabf"
  },
  {
    "url": "pages/termsOfUse.html",
    "revision": "23e7e746bdc2181caf52bdcc07a8cafc"
  },
  {
    "url": "pages/termsOfUse.js",
    "revision": "db3af3ca3c81ead32a62ac01c84a1608"
  },
  {
    "url": "providers/BlockchainExplorerProvider.js",
    "revision": "358abfbc46a49e7bd030bb70e0ab36a3"
  },
  {
    "url": "service-worker-raw.js",
    "revision": "b3ac92d25980d6383a00e46d7815a890"
  },
  {
    "url": "translations/de.json",
    "revision": "94c2913014fd2573f56a02e47fdedc56"
  },
  {
    "url": "translations/en.json",
    "revision": "4f407442ecbf74c56fbc61acb8fd1381"
  },
  {
    "url": "translations/fr.json",
    "revision": "91a016c99006f17c9fd83f4467700393"
  },
  {
    "url": "translations/hu.json",
    "revision": "5a0b06f672048c3446c6199ccbe13afc"
  },
  {
    "url": "translations/sr.json",
    "revision": "63433dd57583f2eb010a5681fbff2ece"
  },
  {
    "url": "utils/Url.js",
    "revision": "5cbb9018a9d0d765ba0fb55bbf802049"
  },
  {
    "url": "workers/TransferProcessing.js",
    "revision": "1a5c631d72c76fe415ff28bc89c5e912"
  },
  {
    "url": "workers/TransferProcessingEntrypoint.js",
    "revision": "ec2ef7dbfe74836cd5bd22eefe30ccf1"
  }
]);
self.addEventListener('message', function (event) {
    if (!event.data) {
        return;
    }
    switch (event.data) {
        case 'force-activate':
            self.skipWaiting();
            self.clients.claim();
            self.clients.matchAll().then(function (clients) {
                clients.forEach(function (client) { return client.postMessage('reload-window-update'); });
            });
            break;
        default:
            // NOOP
            break;
    }
});
