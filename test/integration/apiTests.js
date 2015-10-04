describe('API integration', function(){
  var server, setupStub, JSONresponse;

  beforeEach(function() {
    var response = { todos: [{ name: 'Eat lunch',  done: true},{  name: 'Go on a shopping spree on Amazon',  done: false},{  name: 'Finish testify sprint',  done: false},{  name: 'Enjoy time off',  done: true},{  name: 'Stop obsessing over greenfield project',  done: true}] };
    JSONresponse = JSON.stringify(response);
    server = sinon.fakeServer.create();
    setupStub = sinon.stub(todo, 'setup');
  });

  afterEach(function() {
    server.restore();
    setupStub.restore()
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
    server.respondWith('GET', 'http://localhost:3000/todos', [200, { 'Content-Type': 'application/json' }, JSONresponse] );
    todo.init();
    server.respond();
    var res = JSON.parse(JSONresponse);
    sinon.assert.calledWith(setupStub, res.todos);
  });
});
