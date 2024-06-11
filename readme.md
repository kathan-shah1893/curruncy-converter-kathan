# currency-converter-kathan

`currency-converter-kathan` is a simple and efficient Node.js module for converting currencies. It allows you to easily convert an amount from one currency to another using the latest exchange rates.

## Installation

To install the module, use npm:

```bash
npm install currency-converter-kathan
```

## Usage

To use the `currency-converter-kathan` module, import it into your project and call the `frequency` function. The `frequency` function takes three parameters: the source currency code, the target currency code, and the amount to be converted. It returns a promise that resolves to the converted amount.

### Example

```javascript
import { frequency } from "currency-converter-kathan";

// Convert 10 USD to INR
frequency("USD", "INR", 10).then((res) => {
  console.log(res);
}).catch((err) => {
  console.error(err);
});
```

## API

### `frequency(fromCurrency, toCurrency, amount)`

- `fromCurrency` (string): The currency code you want to convert from (e.g., "USD").
- `toCurrency` (string): The currency code you want to convert to (e.g., "INR").
- `amount` (number): The amount of the source currency you want to convert.

Returns a promise that resolves to the converted amount.

## Contributing

If you have any ideas, suggestions, or issues, feel free to open an issue or submit a pull request.

---

Happy coding!