// import classes from the shapes.js folder
const {Circle, Triangle, Square} = require('./shapes.js');

// Test for Circle
describe('Circle', () => {
    test('testing circle with blue background', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="125" cy="175" r="120" fill="blue" />');
    })
});

// Test for Triangle
describe('Triangle', () => {
    test('testing triangle with green background', () => {
        const shape = new Triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    })
});

// Test for Square

