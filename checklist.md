For my own reference

x Start by reading through the Casper testing tutorial to learn Casper syntax and testing template (Don't skip this step)
x Look at test/e2e/todoFunctionality.js. There is one test already written for you.
Run grunt teste2e in terminal. You're already passing your first Casper test!
x Write a test that adds and removes todo items
x Write a test that adds and removes multiple todo items
x Write a test that marks todo items as done
x Write a test that ensures the user cannot add empty todo items


x Install Sinon as a dev dependency.
x Update the karma.conf.js file to use Sinon as a framework (HINT: you will need to mimic the setup that is already in place for Mocha and Chai)
x Research what Sinon before and after blocks do and figure out how we'll use them in this section
x Use Sinon to create a fake server to ensure we don't send real API requests
x Use Sinon to create a stub that will ensure todo.setup doesn't create a new todo.App
x In the after block, make sure you restore anything you've modified
x Create a sample JSON response that matches the way our server will respond and confirm your stub is called with that response
x Run grunt testClient in the terminal, which runs the testClient task that's defined in Gruntfile.js. Make sure all your tests pass.




We've created useful helper functions in the client/scripts/todo/todo.util.js file. These functions take inputs and return a result, without mutating anything other than what's passed in - perfect for unit tests!

x Write at least one test for each util method
x Write a test that uses the should assertion method
x Write a test that uses the expect assertion method
x Write a test that uses the assert assertion method
x Write a test that uses the .to method
x Write a test that uses the .not method
x Write a test that uses the .equal method
x Write a test that uses the .have method
x Write a test that uses the .length method
x Write a test that uses the .property method
x Write a test that uses the .typeOf method
Run grunt testClient in the terminal, which runs the testClient task that's defined in Gruntfile.js. Make sure all your tests pass.