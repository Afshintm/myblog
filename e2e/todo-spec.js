// describe('angularjs homepage todo list', function() {
//   it('should add a todo', function() {
//     browser.get('https://angularjs.org');

//     element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//     element(by.css('[value="add"]')).click();

//     var todoList = element.all(by.repeater('todo in todoList.todos'));
//     expect(todoList.count()).toEqual(3);
//     expect(todoList.get(2).getText()).toEqual('write first protractor test');

//     // You wrote your first test, cross it off the list
//     todoList.get(2).element(by.css('input')).click();
//     var completedAmount = element.all(by.css('.done-true'));
//     expect(completedAmount.count()).toEqual(2);
//   });
// });

describe('Application Homepage', function() {
  it('should display the application name', function() {
    browser.get('http://localhost:9000');

    var todoList = element.all(by.repeater('thing in awesomeThings'));
    expect(todoList.count()).toEqual(4);
    //expect(todoList.get(2).getText()).toEqual('write first protractor test');


    // var appName = element(by.css('h3.text-muted')); //using the CSS selector

    // expect(appName.getText()).toEqual('mytodoApp');
  });

});