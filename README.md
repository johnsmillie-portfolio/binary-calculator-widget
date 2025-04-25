# Binary Calculator Widget
**Hakerrank Challenge for the 10 Days of JavaScript**

> Live: https://binary-calculator-widget.vercel.app/


## TODO
### Business Logic:
- make a BinaryNumber class
    - string representation
    - 2's complement boolean
    - bit count field
    - value as 2's complement field
    - value unsigned field
    - getters and setters
- make an operations class
    - uses BinaryNumber class as fields
    - clean up operations with fixed bit count
- evaluate when an operator button is pressed as "enter"
- controller buttonHelper should use the operations class for operations;
- toggle signed/unsigned

### Frontend:
- highlight the selected operator button
- display function
- toggle for signed/unsigned
- conversion section
- dark/light toggle

<hr><hr>


### About
This project uses JavaScript to bootstrap a widget that functions as a binary calculator. The main.js simply appends a new div containing the widget when the page loads.

### How It Behaves
The calculator mimics 32-bit signed integer arithmetic. <b>A leading 1 digit will be interpreted as a negative number using 2's complement;
results should also be interpretas 2's complement</b> (there is na fixed bit size). Integer divisiand integer overflow (undefined) behavior can be expected.
Conversion operations will be addat a later time.
      
