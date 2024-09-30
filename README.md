Aqui está um modelo de `README.md` para o código fornecido:

```markdown
# Calculator App

This is a simple calculator application built using React. The calculator supports basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Clear input functionality

## Technologies Used

- **React**: Used to create interactive UI components and manage application state.
- **Styled-components**: For styling the components in the application.

## How to Run the Project

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/calculator-app.git
```

### 2. Navigate to the project directory

```bash
cd calculator-app
```

### 3. Install dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

```bash
npm install
```

### 4. Run the application

```bash
npm start
```

The app will run on `http://localhost:3000`.

## Component Structure

### 1. `App.js`

This is the main component where the logic for the calculator is handled. It contains state variables for:

- `currentNumber`: The current number displayed on the calculator.
- `firstNumber`: The first operand used in arithmetic operations.
- `operation`: The current arithmetic operation (`+`, `-`, `*`, `/`).

#### Key Functions

- `handleOnClear`: Resets the calculator to its initial state.
- `handleAddNumber`: Concatenates the clicked number to the `currentNumber`.
- `handleSumNumber`: Performs addition.
- `handleMinusNumber`: Performs subtraction.
- `handleMultNumber`: Performs multiplication.
- `handleDivNumber`: Performs division.
- `handleEquals`: Executes the selected arithmetic operation and updates the display.

### 2. Components

- **Input**: Displays the current value of the `currentNumber`.
- **Button**: Represents the calculator buttons used to input numbers and operations.
- **Container, Content, Row**: Styled components used for layout purposes.

## Usage

Once the application is running, you can use it as a simple calculator. Enter numbers and perform operations using the on-screen buttons. The app supports:

- **C**: Clears the current input.
- **+**, **-**, **\***, **/**: Perform basic arithmetic operations.
- **=**: Displays the result of the current operation.

## Future Improvements

- Add support for more advanced operations (e.g., square root, exponentiation).
- Improve error handling (e.g., division by zero).
- Add keyboard support for input.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Este `README.md` descreve as funcionalidades principais, estrutura de componentes, como rodar o projeto, e possíveis melhorias futuras. Você pode adaptá-lo conforme necessário.
