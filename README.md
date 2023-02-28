# hourly-calendar
A calendar application that stores events hourly.


## Description

This is a daily planner that provides a color-coordinated representation of the user's current day to easily identify which scheduled events have passed, are currently occuring, or have yet to occur. 

To schedule events in the day, input text into the color-coordinated text boxes, then click the save icon adjacent to the text box. This ensures that the text does not dissapear upon refreshing the page. The text input should be stored to localStorage. The saved text will be displayed in its respective color relative to the current time displayed in the header, above the scheduled events. Events that have passed are displayed as orange text boxes, current events display as yellow text boxes, and future events display as green text boxes.

Some of the main components implemented for the success of the app were Web API concepts like event listeners, time intervals, and storing local storage objects; the use of Bootstrap components to style the app directly from the index.html; jQuery in the script.js to simplify the manipulation of the DOM,; googlefonts to customize the fonts in style.css; FontAwesome in the script.js to access a collection of icons and symbols and select one for the save button; and moment.js JavaScript library to format the live date and time displayed in the header of the app. 

## Installation

N/A

## Usage

The assessment will commence with a landing page that presents the user instructions and a "Start Quiz" button. To initiate the quiz click the "Start Quiz" button. 

![plot](./code-quiz-landing-page.png)

The user will have 100 seconds to answer 5 multiple questions that can be answered by clicking any of the multiple choice options. Feedback concerning the accuracy of the answer will be immedietly provided after a selection has been made. Any incorrect answers will result in a 10 second penalization. 

![plot](./quiz-live-question-example.png)

The quiz will end after the time has reached 0 or all questions have been answered, whichever occurs first. The final score is the remaining time that resulted after answering all of the questions. The more accurate and faster the user responds to the timed assessment, the higher the score. The final score will be printed to the page and the opportunity to store the score will be provided by inputing the initials of the user in the text box followed by clicking the "Submit" button.

![plot](./complete-quiz-page.png)

The user will then be redirected to the "High Scores" page where the user's most recent quiz result will be ranked amongst a list of other previous high scores listed from highest (1) to lowest (ie: 5). To clear all the previous high scores click the "Clear Highscores" button. To be redirected to the landing page and restart the quiz click the "Re-Start" button. 

![plot](./quiz-highscores.png)


To access the Github Repository visit:
https://github.com/CarolinaRaIs/hourly-calendar 

To access the deployed site visit:
https://carolinarais.github.io/hourly-calendar/

## Credits

N/A

## License

Please refer to the LICENSE in the repo (MIT License).