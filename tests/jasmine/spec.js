describe("Next color != previuos", function () {
  it("Color black", function () {
  	cl.bla(' black color');
  	cl.log(' white color');
  	console.log(' basic method');
  });
  it("Color red", function () {
  	cl.red(' red color');
  	cl.log(' white color');
  	console.log(' basic method');
  });
  it("Color green", function () {
  	cl.gre(' green color');
  	cl.log(' white color');
  	console.log(' basic method');
  });
  it("Color yellow", function () {
  	cl.yel('Yellow  color');
  	cl.log(' white color');
  	console.log(' basic method');
  });
  it("Color blue", function () {
  	cl.blu(' Blue color');
  	cl.log(' white color');
  	console.log(' basic method');
  });
  it("Color magenta", function () {
  	cl.mag(' magenta color');
  	cl.log(' white color');
  	console.log(' basic method');
  });
  it("Color cyan", function () {
  	cl.cya(' Cyan  color');
  	cl.log(' white color');
  	console.log(' basic method');
  });
  it("Color white", function () {
  	cl.whi(' White color');
  	console.log(' basic method');
  });
  it("Log mehtod ", function () {
  	cl.log(' white color');
  	console.log(' basic method');
  });
  it("Console.dir() ", function () {
  	cl.dir();
  	cl.log(' white color');
  	console.log(' basic method console.log(dir)');
  });
  it("Methods ", function () {

  });
});


/*
	Общее API
*/
// describe определение набора тестов, наборы могут быть вложенными
// it определение теста внутри любого набора тестов
// expect определяет ожидания, которые проверяются в тесте
// xdescribe отключение набора тестов
// xit отключение теста внутри любого набора тестов
/*
	Методы для expect()
*/
// .toBe() - сравнение с использованием ===
// .not.toBe() - отрицание !=
// .toEqual() - сравнение переменных и объектов (включая содержимое)
// .toBeDefined() - значение должно быть определено
// .toBeUndefined() - значение должно быть не определено
// .toBeNull() - значение должно быть null
// .toBeTruthy() - значение должно быть верно
// .toBeFalsy() - значение должно быть не верно
// .toBeLessThan() - значение должно быть меньше чем
// .toBeGreaterThan() - значение должно быть больше чем
// .toBeCloseTo() - значение должно быть близко к числу
// .toMatch() - значение должно соответствовать регулярному выражению
// .toContain() - значение должно содержать
// .toThrow() - должно быть вызвано исключение
