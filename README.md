From this video https://www.youtube.com/watch?v=LDB4uaJ87e0?t=2h21m52s
Tutorial Status: done

**To get started new**
1. make sure node is installed, since you need to run npm commands
1. clone repo to local folder where you want the project
1. open new terminal window
1. run 'npm install' to restore node-modules
1. run 'npm run apiserver' to start the mock api on port 8000 using json-server
1. open new terminal window
1. run 'npm run dev' to start the app on port 3000 using vite dev tools
1. open the localhost link show in the terminal output

**To mimick prod**
1. stop any dev server running from above
1. if you have a 'dist' folder, delete it 
1. run 'npm run build'
1. notice the new 'dist' folder that appears
1. open new terminal window
1. run 'npm run apiserver' to start the api on port 8000 using json-server
1. open new terminal window
1. run 'npm run prodpreview'
1. open the localhost link show in the terminal output

**Commands already ran for project setup - no need to repeat**

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
- cancel button on add & edit pages