var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
      expect(todo.setup).to.be.a('function');
      expect(todo.init).to.be.a('function');
    });
  });
});

describe('the todo.util methods', function() {

  describe('todo.util.trimTodoName()', function() {

    var withSpaces = "    Do I have lots of leading and trailing spaces?    ";
    var trimmed = todo.util.trimTodoName(withSpaces);

    it('should be a function', function() {
      expect(todo.util.trimTodoName).to.be.a('function');
    });

    it('should remove unnecessary trailing or leading white spaces', function() {
      expect(trimmed).to.equal("Do I have lots of leading and trailing spaces?");
    });

    it('should return a string', function() {
      trimmed.should.be.a('string');
    });

    it('should return a string with a length property (?)', function() {
      trimmed.should.have.property('length');
    });

    it('should return a string with a shorter length than the input', function() {
      expect(withSpaces).to.have.length(54)
      expect(trimmed).to.have.length(46);
      expect(withSpaces.length).to.above(trimmed.length);
    });

  });

  describe('todo.util.isValidTodoName()', function() {
    var invalidTodo = "x";
    var validTodo = "Buy some bacon.";

    it('should return a boolean', function() {
      var answer = todo.util.isValidTodoName(validTodo); 
      answer.should.be.a('boolean');
    });

    it('should *NOT* return true for a todo with length of <2', function() {
      var badTodo = todo.util.isValidTodoName(invalidTodo);
      badTodo.should.not.be.true();
    })    

  });

  describe('todo.util.getUniqueId()', function() {

    it('should return a number', function() {
      assert.typeOf(todo.util.getUniqueId(), 'number');
    });

    it('should return increment up the lastId by 1 every time it\'s called', function() {
      todo.util.getUniqueId();
      todo.util.getUniqueId();
      var third = todo.util.getUniqueId();
      assert(third === 4, 'third\'s uniqueId is 4');
    })


  })

});
