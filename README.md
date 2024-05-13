From this video https://www.youtube.com/watch?v=LDB4uaJ87e0?t=2h21m52s
Tutorial Status: done

**To get it started**
1. clone repo to loca dev env
1. open new terminal window
1. run 'npm install'
1. run 'npm run apiserver' to start the api on port 8000 using json-server
1. open new terminal window
1. run 'npm run dev' to start the app on port 3000 using vite dev tools
1. open the localhost link show in the terminal output

**To mimich prod**
1. stop any dev server running
1. delete the 'dist' folder if you have one
1. run 'npm run build'
1. notice the new 'dist' folder that appears
1. open new terminal window
1. run 'npm run apiserver' to start the api on port 8000 using json-server
1. open new terminal window
1. run 'npm run preview'
1. open the localhost link show in the terminal output

**Pre-requisite**
Node (with NPM) installed

**Commands ran for project setup, already ran**

    npm create vite@latest jobsboard

    npm i -D json-server
    npm i react-dom
    npm i react-icons
    npm i react-router-dom
    npm i react-spinners
    npm i react-toastify

**For Tailwind**

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

added tailwind.config.js and all of its content

put these lines in index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;


**Things to consider adding**
- Validation on forms client-side and server-side
- Build actual API with backend validation logic
- Make URL to API configurable
- Protect add/edit/delete to logged in users and validate user can only delete/edit their own posts
- Option for admin to log in and have full control
- Option for job submitter to log in to allow only them (plus admins) to edit or delete their post
- Search + results page