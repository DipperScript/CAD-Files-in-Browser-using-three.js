# CAD Files in Browser using three.js

[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](https://github.com/username/repo)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/username/repo/actions)

A beautiful React and Three.js project to showcase CAD Files in browser.

## Project Description

This project is an interactive showcase of Three.js, a powerful JavaScript library for creating 3D graphics in the browser using java Script library react. It features a stunning visual display of 3D objects, materials, and lights, along with interactive animations and user controls. The project is built using the latest web technologies, including react-three/fiber, react-three/drei with Vite built tool.

<br/>
Here is a <a href="https://drive.google.com/file/d/1qYYN5Jm21FZCW-U7zRrw1xgmCrfzJw1_/view?usp=sharing">Google Drive<a/> Link of the demo website video.

<a href='https://drive.google.com/file/d/1qYYN5Jm21FZCW-U7zRrw1xgmCrfzJw1_/view?usp=sharing'>
<img src="public\threejs.png" alt="" title="Optional title">
<a/>

## Features

- Gorgeous 3D visuals: The project includes a collection of beautifully designed 3D objects, matlrerials, and lights that create stunning visual effects.
- Interactive animations: Users can interact with the 3D scene by rotating, zooming, and panning the camera, as well as triggering animations and transitions.
- Responsive design: The project is designed to be responsive and can adapt to different screen sizes and devices, providing an optimal viewing experience across desktop and mobile platforms.
- Well-documented code: The project includes detailed documentation that explains the code structure, usage, and cusomization options, making it easy for developers to understand and extend.

## Approchment Of the Problem

- For reading CAD files first we make react app using vite with the command `npm create vite@latest my-vue-app --template vue`. This will create a react app in our home directory.
- Then we install few three.js packages `npm i three @react-three/fiber @react-three/drei ` these will hepl us to show the 3D objects in browser.
- As we don't have any direct CAD file lodder in react so we convert all those CAD file(BREP, STLl, IGS, and STP) in GLTF or GLB formet using any kind of CAD Converter,e.g.CAD Exchanger Lab.
- Then convert that GLB file to a juvascript function using the command `npx gltfjsx filename.glb`.
- This will creat a .jsx file which is the main object of our 3D scene.
- Then from the .jsx file we export the function in our App.jsx
- Then creat a Canvas with a camera, inside this give some lights(like: ambientLight,directionalLight), inside this we call the object function.

- Now if we run it using the command `npm run dev`in the terminal we will see the object in Our browser.
## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/DipperScript/CAD-Files-in-Browser-using-three.js.git`
2. Navigate to the project directory: `cd repo`
3. Install dependencies: `npm install`
4. Start the local development server: `npm run dev`
5. Open your web browser and go to `http://localhost:5173` to see the project in action.



## Usage

The project comes with a set of predefined 3D scenes and animations that can be easily customized or extended. Users can interact with the scenes using mouse and touch controls, and trigger animations by clicking or tapping on objects.

## Credits

This project was created by [Arindam Ghosh](https://github.com/DipperScript) and inspired by the amazing work of the Three.js community.
## Contact

If you have any questions, feedback, or suggestions, please feel free to contact the project maintainer at [arindamg593@gmail.com](arindamg593@gmail.com) or open an issue on the project's GitHub repository.

Enjoy exploring the beautiful world of Three.js!
#
