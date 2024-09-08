// Create a class constructor named Shape that takes in 'color'
class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}
// Set up Circle so it inherits the structure from Shape
class Circle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
// Set up Triangle so it inherits the structure from Shape
class Triangle extends Shape {
    render() {
        return `<rect x="50" y="50" width="150" height="150" fill="${this.color}" />`
    }
}

// Set up Square so it inherits the structure from Shape
