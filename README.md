# Hello Three.js

Let's learn 3D rendering on the web

## Dev Logs
- Starting out with official [Three.js docs](https://threejs.org/docs/#manual/en/introduction/Creating-a-scene). I'm stuck creating a scence. Error in the dev tools said the `renderer` is not a valid Node element. Turns out I misspelled `WebGLRenderer` with `WebGL3DRenderTarget`. Debugging even on the simplest tutorial. Such a good start 🤦🏻‍♂️.

- Next part is drawing some lines. Why do Three.js need to do lines? There's bunch of cool 3D assets to render. Lines are so meh. But I view the examples for [`LineBasicMaterial`](https://threejs.org/docs/#api/en/materials/LineBasicMaterial), there's a lot of cool stuff I can do!

- Next the docs shows how to add text. Surprisingly I can use div and style it with CSS. Not so much 3D but okay... (There's other way to add 3D text such as `CSS2DRenderer`, `CSS3DRenderer` or `Texture`, but I'm just lazy). In the docs also said that I need to add `z-index` so that it's position is above all others, but I tried set it to 0 and even omit the properties entirely but the text still there lol. The text disappear if z-index it negative.

- Since the text is 2D, but the scene is 3D, I wonder what if I pan around the scene using `OrbitControls`. Will the text rotate too? Turns out that the text doesn't affected by the panning. Maybe I don't use `scene.add()` for the text, so the text is out of context from the scene.
