# Dynamic Header

Simple web application made with React.js styled with TailwindCSS. Instead of clasical header I have created this one that looks like Apple's dynamic island on new iPhones. It expands when user hovers over it and displays additional information or controls. I have also added animations, shortcuts, styling and login form, that doesnt have the database implemented yet.

### Darkmode shortcut
**CTRL + CMD + T** - *MacOS*

**CTRL + B** - *Windows*
 
## Installation
*You can easily implement this into your project by coyping the component and then just styling the whole component with given options. Also you need to have TailwindCSS installed for it to work*
```bash
<div className="pt-4 sticky top-0 z-10 ">
    <DynamicIsland/>
</div>
```
*You can find the source code for **DynamicIsland** [ here](https://github.com/OndrejLosensky/dynamic-island-header/blob/main/src/components/dynamic_island/DynamicIsland.jsx)*

## Preview
### Light mode
<img width="800" style="float:left; margin-rigt: 10px" alt="Snímek obrazovky 2024-02-24 v 11 41 02" src="https://github.com/OndrejLosensky/dynamic-island-header/assets/127244546/65639728-da25-43f4-a644-e6a2b07c909e">
<img width="800" style="float:left; margin-rigt: 10px" alt="Snímek obrazovky 2024-02-24 v 11 41 16" src="src/assets/Snímek obrazovky 2024-02-28 182418.png">

### Dark mode
<img width="800" style="float:left; margin-rigt: 10px" alt="Snímek obrazovky 2024-02-24 v 11 45 57" src="https://github.com/OndrejLosensky/dynamic-island-header/assets/127244546/53c8cb0e-8a71-46e4-a92c-1402394900c2">
<img width="800" style="float:left; margin-rigt: 10px" alt="Snímek obrazovky 2024-02-24 v 11 46 11" src="src/assets/Snímek obrazovky 2024-02-28 182428.png">



## Features
* Dynamic island header
* Dark mode
* Keyboard shortcut to toggle **on/off** dark mode
* Scroll Progress bar (you can find source code for it [here](https://github.com/OndrejLosensky/dynamic-island-header/tree/main/src/components/scroll_progress))
* scroll down button
* login and register form (only styling)

## Bugs
* The header displays all hidden element when hovering away from browser (for example to menubar)
     <img width="500" alt="screenshot1" src="https://github.com/OndrejLosensky/dynamic-island-header/assets/127244546/3f356ac3-ba8a-4f72-86e6-3a6bf6fa0032">

## License

This project is licensed under the Apache license 2.0 [Link to LICENSE.md](https://github.com/OndrejLosensky/dynamic-island-header/blob/main/LICENSE)

## Authors

* Ondrej Losensky

## Languages & Tools Used
* Link to React: [https://reactjs.org/](https://reactjs.org/)
* Link to Tailwind CSS: [https://tailwindcss.com/](https://tailwindcss.com/)
* Link to Icons8.com [https://icons8.com/](https://icons8.com/)

## Project Creation Date

* Created on: 19.2.2024

## Version

1.1.2.
