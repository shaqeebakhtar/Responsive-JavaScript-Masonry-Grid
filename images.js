let images = [
  "https://dr.savee-cdn.com/things/5/e/68f35e1404e45961765299.gif",
  "https://dr.savee-cdn.com/things/6/2/b4d2783be1e64dd19c5e5f.webp",
  "https://dr.savee-cdn.com/things/5/9/e9f54bb588cb5d35c71b14.webp",
  "https://dr.savee-cdn.com/things/6/2/e20c3f6bc472abe0998d72.webp",
  "https://dr.savee-cdn.com/things/6/0/c99200a60b91840282a604.webp",
  "https://dr.savee-cdn.com/things/6/2/dd9cf41e04bdb6ec8bde0e.webp",
  "https://dr.savee-cdn.com/things/6/0/2baed28622ee16a246157b.webp",
  "https://dr.savee-cdn.com/things/6/2/bbb8bf605713bf5e1a27a4.webp",
  "https://dr.savee-cdn.com/things/6/1/dd4c091fefe68340cfaf14.webp",
  "https://dr.savee-cdn.com/things/6/2/712183132d9a2deb00ed30.webp",
  "https://dr.savee-cdn.com/things/6/0/9b6c1b00e645789cfc4618.webp",
  "https://dr.savee-cdn.com/things/6/2/e3e99aae03be64204bb5a7.webp",
  "https://dr.savee-cdn.com/things/6/1/490689fd18ac4abcab38f6.webp",
  "https://dr.savee-cdn.com/things/5/d/70de78af2b75677cb69a79.webp",
  "https://dr.savee-cdn.com/things/6/1/511e97963c973f7c334709.webp",
  "https://dr.savee-cdn.com/things/6/2/f4519871b8b3a80c9df4e1.webp",
  "https://dr.savee-cdn.com/things/6/0/a04f92908083e58a34cf6d.webp",
  "https://dr.savee-cdn.com/things/5/b/b4e998e131fa14bcaf1087.webp",
  "https://dr.savee-cdn.com/things/5/d/0460ac40ed0750467828b1.jpg",
  "https://dr.savee-cdn.com/things/5/e/cfc3a25590941c52d7cd69.webp",
  "https://dr.savee-cdn.com/things/6/2/e28fd5c9e93ee73b15c46f.webp",
  "https://dr.savee-cdn.com/things/6/2/a6e5ea85d0e651a56af2c3.webp",
  "https://dr.savee-cdn.com/things/5/f/dbc0ebef505139351586e5.webp",
  "https://dr.savee-cdn.com/things/6/2/e4487b751f653178eb29db.webp",
  "https://dr.savee-cdn.com/things/6/0/ae7709ff7a9c46c20f7f9b.webp",
  "https://dr.savee-cdn.com/things/5/9/a8568161d5680543829622.webp",
  "https://dr.savee-cdn.com/things/5/d/d6596997eb586d351b99b8.webp",
  "https://dr.savee-cdn.com/things/5/9/d7e30b22bd325d6c9e045f.webp",
  "https://dr.savee-cdn.com/things/5/b/f31343a7d14c492377b346.webp",
  "https://dr.savee-cdn.com/things/6/2/cad478a6b68e127a6724b0.webp",
  "https://dr.savee-cdn.com/things/6/1/380482f5a4e93faf49d095.webp",
  "https://dr.savee-cdn.com/things/6/2/4d68f28ba05038f4f1f6f6.webp",
  "https://dr.savee-cdn.com/things/6/1/c42ca69e1cd10ee3bcef38.webp",
  "https://dr.savee-cdn.com/things/6/2/de05d368054fd2baa6fb4d.webp",
  "https://dr.savee-cdn.com/things/6/2/e4383d7d327a28112988b1.webp",
];

let posts = [];

let imageIndex = 0;

for (let index = 1; index <= 165; index++) {
  let post = {
    id: index,
    postImage: images[imageIndex],
  };
  posts.push(post);
  imageIndex >= images.length - 1 ? (imageIndex = 0) : imageIndex++;
}
