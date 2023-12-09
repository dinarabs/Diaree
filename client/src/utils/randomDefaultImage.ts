const defaultImagePaths = [
  '../src/assets/pic1.png',
  '../src/assets/pic2.png',
  '../src/assets/pic3.png',
];
const randomIndex = Math.floor(Math.random() * defaultImagePaths.length);
const defaultImage = defaultImagePaths[randomIndex];

export { defaultImage }