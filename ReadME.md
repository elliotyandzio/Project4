# Scouting Application - Project Four

## Scouting Application Instructions
<ol>
	<li>Firstly, in order to use the application you must register for an account, or if you have done already you need to login using your details. I have created a guest account for anyone testing the application to use, the details are 'guest@guest.com' and the password is 'password'.</li><br />
	<li>Once you have logged in, you will be redirect to the teams page. Here you can create a new team or select a team which has the player you wish to write a report on.</li><br />
	<li>After select a team, you will be taken to a new page that allows you to either select a player who has already been entered into the database, create a new player or delete the whole team from the database.</li><br />
	<li>Once you have navigated to a player's report page you will be able to create a new report by selection the 'Add Report' button in the top right hand corner of the screen. Also shown here will be the reports already written about the player</li><br />
	<li>If you have selected to create a new report you will be taken to a new screen with a form to populate. The first collection of fields are basic text entry fields, however, once you select the player's position, a new set of form fields will appear below. These new fields are slider fields and allow the user to pick a rating for that attribute from one to five. The Expenses section contains two fields which make use of the Google Places API to autocomplete the addresses entered.</li><br />
	<li>Once the new report has been submitted, the user will be redirected back to the previous page, but a new tab will appear with the opposition name of the report that was just created. Clicking on the tabs, will open the relevant report. <b>Only the user who created the report can see the expenses section</b></li><br />
	<li>The user who created the report will also be able to delete it by clicking the 'Delete Report' button at the top right of the report.</li><br />
	<li>The final section of the application is the expenses tab, this can be found in the navbar at the top of the page. This section shows all the games the logged in user has submitted reports for and the distance travelled, expense cost and a map of the journey. <b> This section is still being worked on.</b></li>
</ol>

## Technologies Used
<ul>
	<li>React</li>
	<li>ExpressJS</li>
	<li>Node.js</li>
	<li>MongoDB</li>
	<li>Bulma</li>
	<li>JavaScript</li>
	<li>AJAX/JSON</li>
	<li>Github</li>
	<li>Google Maps and Places API</li>
	<li>ChartJS</li>
</ul>

## Approach Taken
<ol>
	<li>Once I had decided to use this idea as my project, it was essential to identify a minimum viable product in order to make sure the application was at a presentable stage after the week we had to create the project.</li><br />
	<li>I decided that the server side of the application was the most complicated part of the project, and as a result chose to work on this first. I had to design how the database tables would store the data, link to each other and then create a MongoDB to put this into practice. Once I had created the database I tested all the functionality by added test data into the database using Insomnia.</li><br />
	<li>After all the server side functionality was successfully working in insomnia, the next step was to begin creating the client side of the website.</li><br />
	<li>I decided to connect the login and register system first, to make sure that the user had to be logged in to access the main functionality of the site.</li><br />
	<li>Once the user was able to successfully register and login, I then had to implement the first step of the report writing process to the client side. This step was to show all the teams in the database and to give the user the ability to select the teams or add a new team. </li><br />
	<li>The next step was similiar expect that instead of displaying the teams to the user, we had to display the players that are linked to the teams. Once the players were shown to the user, the front end functionality of creating a new player for that team was implemented. </li><br />
	<li>The next step was to return the player's reports to the user. I decided to use tabs to seperate the reports. This means that the user will have a tab for each report under that player's name and the user will click the tab to display the relevent report.</li><br />
	<li>The final step in connecting the client side with the server side was to create the ability for the user to create a new report. There were certain fields that needed to be completed depending on the position selected for the player. Therefore, I created an argument that would only show the necessary fields to the user depending on the player position that they have selected.</li><br />
	<li>Connecting Google Places to autocomplete the location fields on the form was next. It was important to use Google Places not only to keep consistency on the data the user inputs, but also because it returns the latitude and longitude coordinates of the locations entered. This will be important for displaying the map on the report that is returned to the user</li><br />
	<li>The ability for the user to enter a new report was now completed. However, we have entered coordinates of the start and end location for each report but now the Google Map component needed to be created. This component takes the latitude and longitude data entered in the form and plots them as two markers on a map and calculated the most direct route taken to drive there. Once this had been completed we had to take the distance information provided by the Google Maps API and created functions that would return the distance in miles and then calucalte the cost of the expenses based on this data.</li><br />
	<li>The last tasks was to style the application and I used the Bulma CSS framework to do so.</li>
	</ol>
	
## Wins
<ul>
	<li>This project involved the most complicated database structure of all the projects I had created to date. Being able to link the tables in the structure that I needed, and to create functions that depending on the value of one field meant that the 'required' MongoDB field was active or not was one of the main wins of the project. </li><br />
	<li>Another success of the project was being able to achieve minimum viable product in the short amount of time we had. The project I had set myself was large and I was proud to be able to have a working application at the end of the week.</li><br />
	<li>Adding the Google Maps directions was another proud moment of this project. I had previously used the Google Maps API before but this was the first time I had used the maps in order to calculate the route and the distance of the journey.</li><br />
	<li>Implementing ChartJS made a huge difference to the project. Originally, the report returned a number from 1-5 to the user for each attribute about the player. ChartJS made the data easier for the user to read and gave the project a wow factor.</li>
	</ul>
	
## Blockers
<ul>
	<li>The main blockers that I encountered during the project were the tabs on the report page and the reloading of state after submitting a modal. 
	<br /><br />
	Making the tab only show the relevant report when clicked was a challenge. Using the ID of each report and comparing it to the ID of the tab that was clicked, I was able to overcome this difficulty.<br /><br />
	Updating the state when submitting the form within a modal was very complicated. The difficulty was that state was accessible within the modal so changing the 'is-open' class on the modal proved a tough challenge.</li><br />
	<li>Using ChartJS was at the beginning a difficult task. Having not used the API before I had to learn how it worked and then manipulate that to fit how I wanted to use it in my project. After researching the documentation, online examples and experimenting with the API I was able to use this API to display the data in the way I wanted.</li>
	</ul>
	