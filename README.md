# RestfulComments
 Overview: RESTful operations such as GET, POST, PATCH, and DELETE are used for typical commenting functions
 - [Prerequisites](#prerequisites) | [How to run](#to-run-and-use) | [Sample output](#sample-output) | [How to create a similar project](#to-setup-a-similar-project)
 
### Prerequisites:
 - NodeJS (including npm)
 - Terminal knowledge: 
   - Helpful references for beginners:
     - https://mally.stanford.edu/~sr/computing/basic-unix.html
     - man [command-name]
 - Dependencies: ejs, express, method-override, uuid
 - Also helpful: nodemon (to automatically refresh NodeJS server)
 
### To run and use: 
 - Navigate to RestfulComments directory in terminal (ex: GitBash or MYSYS2)
 - Open a webpage and start at this url: http://localhost:3000/comments
 - Run either "node index.js" for basic server or "nodemon index.js" for automatic refresh server
 - Use buttons and links on webpage to navigate as usual
 
 # Sample output:
 ![Comments Homepage](https://github.com/marissakremers/RestfulComments/blob/main/public/github-pictures/comments-homepage.jpg "Comments Homepage")
 ![Comments Edit Page](https://github.com/marissakremers/RestfulComments/blob/main/public/github-pictures/comments-edit.jpg "Comments Edit Page")
 ![Comments Details Page](https://github.com/marissakremers/RestfulComments/blob/main/public/github-pictures/comments-detail-page.jpg "Comments Details Page")
 
### To setup a similar project: 
 - Download NodeJS ("node -v" to check if already installed)
 - Navigate into desired project directory in 
 - Run "npm init -y" for defaults or just "npm init" to customize package.json file for project
 - Download all dependencies with npm ("npm install" or "npm i [individual-dependency]" for each dependency)
 - Check out Express's "Getting Started" examples
