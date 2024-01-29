# Problem: 💧 Water Jug Challenge 💧



Overview 👇

Welcome to the Water Jug Challenge! In this task, you'll create an application to solve the classic Water Jug Riddle. The challenge involves using two jugs with different capacities (X gallons and Y gallons) to measure exactly Z gallons of water. Your application should have a user interface (UI) that displays the state changes of each jug (Empty, Full, or Partially Full) as it progresses towards the solution.

Candidate: Lynneth Pereira 👩🏻‍💻


Pre-conditions 🔖

Have node.js installed to be able to use the npm package manager.


Instructions 📑

1 - Open the IDE
2 - Open the project folder location
3 - Open the terminal
4 - Locate in the root of the project by cd name_project
5 - Run "npm install" to make sure we have everything we need to use our App
6 - Run "npm run dev" to provide us with the path and the port where the App will be executed.
7 - Vite will indicate us the path that we must use to visualize our React project, in this case, it is http://localhost:5173/
8 - We give Ctrl + Click on the link or copy and paste it in the URL bar of the browser.
9 - In this way we can visualize our App running in the browser



Algorithmic Approach 🧮

For the solution of this problem, related to the measurement of a certain quantity of water in jugs of different capacities, provided by the user by means of a form, several procedures were carried out, which are mentioned below:

1 - First, the data provided by the user is evaluated and validated, to ensure that the user has not sent empty fields, otherwise the message 'Please complete all fields' is displayed. 
2 - Since only positive integer numbers must be accepted, the Math.sign() method is used to verify if the numbers entered comply with this requirement, otherwise, the message 'You can only enter positive numbers' is displayed.
3 - In addition, decimal numbers are prevented from being sent by the Math.trunc method, in combination with the in event.target.value event. This way, even if the user enters a decimal part, it will not be taken into account.
4 - Subsequently, several cases are evaluated to know if it is possible to solve the problem or not.
5 - For the first case, it is compared if the value to be measured is greater than the capacity of the jars, since it would not be possible to measure it and the problem would not be solved.
6 - Subsequently, it is verified if any of the measures of the jars is equal to the quantity to be measured, since if so, only one of the jars should be filled only once.
7 - In case it is possible to solve the problem with the data supplied by the user, the capacities of the jugs are checked, after which, they are filled, emptied and the water is transferred from one to the other as many times as necessary, until the objective is achieved.
8 - As each of the actions are performed, they are stored in an array. Once the objective is achieved, the array is traversed and the step by step is rendered to the interface so that the user can visualize it.
