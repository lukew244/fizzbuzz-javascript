describe('Fizzbuzz', function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('multiples of 15', function() {
    it('fizzbuzz when 15', function() {
      expect(fizzbuzz.play(15)).toEqual('fizzbuzz');
    });

    it('fizzbuzz when 30', function() {
      expect(fizzbuzz.play(30)).toEqual('fizzbuzz');
    });

  });

  describe('multiples of 3', function() {
    it('fizz when 3', function() {
      expect(fizzbuzz.play(3)).toEqual('fizz');
    });

    it('fizz when 6', function() {
      expect(fizzbuzz.play(6)).toEqual('fizz');
    });

  });

  describe('multiples of 5', function() {
    it('buzz when 5', function() {
      expect(fizzbuzz.play(5)).toEqual('buzz');
    });

    it('buzz when 10', function() {
      expect(fizzbuzz.play(10)).toEqual('buzz');
    });

  });

  describe('any other number', function() {
    it('returns 4 when 4', function() {
      expect(fizzbuzz.play(4)).toEqual(4);
    });

    it('returns 1 when 1', function() {
      expect(fizzbuzz.play(1)).toEqual(1);
    });

  });

});
