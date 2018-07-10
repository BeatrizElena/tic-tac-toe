#Tic Tac Toe Game for Two Players


####Project One from General Assembly's Web Development Immersive Class - Providence

######Overview

This game is an individual project that has as its main requirements:

1. Engage in project scoping activities that include wireframing and user stories.
2. Be a SPA application that demonstrates our ability to manipulate the DOM.
3. Use AJAX to communicate with an API for actions such as user authentication, starting a new game, saving a game state, and returning an array of all games user played.
4. Demonstrate knowledge of version control by maintaining a git workflow that includes making branches separate from the master branch and committing and pushing. As a result of the branching strategy, demonstrate the ability to merge branches when added functionalities are tested and working.
5. Write the game logic using JavaScript and jQuery.
6. Style using scss and bootstrap.
7. Maintain separation of concerns both by separating game logic into separate JavaScript files and styles into separate scss files.
8. Write clear documentation.
9. Deploy to Github pages.



######Technologies Used

- JavaScript
- jQuery
- HTML5
- SCSS
- Bootstrap



######Reflections on the Process

_Planning Stage_

In addition to creating a [wireframe](./tic-tac-toe-wireframe.pdf) and writing [user stories](./user-stories-jun21.png), I spent time reviewing lessons which included the [boggle challenge](https://git.generalassemb.ly/ga-wdi-boston/js-boggle-challenge) and [Authorization Tokens](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-token-auth). I also took lots of notes on the requirements and created a draft schedule of what I would work on each day. And finally, for inspiration, I took a quick look around the web to get a sense of how others presented a tic tac toe game to the user.

_Working Process_

The project started with a template that, once npm install was ran, allowed our project to have access to tests, linters, and a grunt server. My initial steps were to authenticate the user. After creating a game board using grids, I then started to work on the switchPlayer function which allows for players of "X"s and "O"s to take turns and it also checks for winning patterns. Once a winner is determined, the game board becomes unclickable.

After the functionality above was tested, I updated the  switchPlayer function to check if user is signed-in. If not, user is prompted to sign in. If user is already signed-in, she is allowed to play.

Tic-tac-toe is a complex project in terms of understanding how to interact with the DOM, how to communicate with an API that has less than ideal documentation, how to integrate HTML and SASS/SCSS, and how to see the connection between the different files that keep the code modular.

As a developer in training, it was an opportunity to experiment with different ways of working, both alone and in study groups. It was also a good way of practicing the concept of MVP - I may have started with grand ideas about all the features I wanted the game to have, but soon learned to focus on the minimal requirements.

And finally, it was an exercise in finding ways to take care of self, so the frustrations of broken code, git stumbles, and rabbit holes were managed so they didn't interfere with being able to submit by the deadline.

_Unsolved Problems / Future Additions_

1. Styling the page to be visually appealing and easier to navigate.
2. Working on smoother transitions between visible and hidden elements.
3. Fixing some instability on messages showing winner or tie. 
