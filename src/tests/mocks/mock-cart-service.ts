export class MockCartService {
      getShippingPrices = () => {
        return [
        {
          "type": "Overnight",
          "price": 25.99
        },
        {
          "type": "2-Day",
          "price": 9.99
        },
        {
          "type": "Postal",
          "price": 2.99
        }
      ]};
}