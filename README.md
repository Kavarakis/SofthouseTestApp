# Softhouse Test App
##  *GitHub Viewer - AngularJS*
<br />

### Project Setup:
1. Clone repository
2. bower install
3. npm install
4. npm start

<br />

**Task:**

- Reads a collection of data from any rest api source. It can be Facebook, Twitter, github, Office365 or anything you like. 
- Present that data on the application front-end (in html form), 
- Make some changes in the collection via web page
- Save the changes into json 
- Write json in a file on disk. 
- Authentication with rest api source
<br />

**Description:**

Application enables authentication with GitHub API (api.github.com). After successfull login, you can view your repositories and edit basic attributes (name, description and stars count). Saving table of repositories will convert these values to json which will result in stored json in a file which is called <I>"jsonFile.json"</I>. <br/>
**Note:** Every new action of saving will rewrite existing json file.
