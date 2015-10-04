/* globals casper, document */
casper.test.begin('App is setup correctly', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
  });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('Adds and removes todo items', 4, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    this.fill('form.todo-form', {
      'todo': "Eat a banana"
    }, true);
  });

  casper.then(function() {
    test.assertExists('li.todo-item', 'should have added a new todo item');
    test.assertElementCount('li', 1, 'should have a total of 1 li');
  });

  casper.then(function() {
    this.fill('form.todo-form', {
      'todo': 'Eat a second banana'
    }, true);
  });

  casper.then(function() {
    test.assertElementCount('li.todo-item', 2, 'should have a total of 2 li');
  });

  casper.then(function() {
    this.click('li:last-child button.todo-remove');
  });

  casper.then(function() {
    test.assertElementCount('li.todo-item', 1, 'should have a total of 1 li after removing item');
  });

  casper.run(function() {
    test.done();
  })
});

casper.test.begin('Adds and removes multiple todo items', 2, function suite(test) {

  casper.start('http://localhost:3000/', function() {
    var items = ['Do laundry', 'Buy more bananas', 'Finish sprint in time for Hardly Strictly'];


    for (var i = 0; i < items.length; i++) {
      this.fill('form.todo-form', {
        'todo': items[i]
      }, true);
    };

    console.log(items);
  });

  casper.then(function() {
    test.assertElementCount('li.todo-item', 3, 'should have 3 lis after adding 3 lis');
  });

  casper.then(function() {
    this.click('button.todo-remove');
    this.click('button.todo-remove');
    this.click('button.todo-remove');
  });

  casper.then(function() {
    test.assertElementCount('li.todo-item', 0, 'should have 0 lis after removing all 3 lis');
  })

  casper.run(function() {
    test.done();
  })
});

casper.test.begin('Marks todo items as done', 2, function suite(test) {
  casper.start('http://localhost:3000', function() {
    this.fill('form.todo-form', {
      'todo': "Mark this as done"
    }, true);
    this.fill('form.todo-form', {
      'todo': "Mark this second one as done"
    }, true);

  });

  casper.then(function() {
    this.click('button.todo-done');
  });

  casper.then(function() {
    test.assertExists('li.todo-item--done', "should have a todo item with a class of `todo-item--done`");
    test.assertElementCount('li.todo-item--done', 1, "should have only one done item");
  });

  casper.run(function() {
    test.done();
  })

});


casper.test.begin('Ensures that user cannot add empty todo items', 1, function suite(test) {
  casper.start('http://localhost:3000', function() {
    this.fill('form.todo-form', {
      'todo': ''
    }, true);
  });

  casper.then(function() {
    test.assertDoesntExist('li.todo-item', "should not add an empty todo item");
  });

  casper.run(function() {
    test.done();
  })
})