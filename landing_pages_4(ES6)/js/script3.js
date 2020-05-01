'use strict'

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    
    divCreated() {
        let divC = document.createElement('div');
        divC.className = 'opt';
        divC.textContent = 'Hello';
        document.body.prepend(divC)
        divC.style.cssText = `height: ${this.height}; width: ${this.width}; 
        background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`
    }
}

const area = new Options('200px', '400px', 'red', '70pt', 'center');

area.divCreated();
