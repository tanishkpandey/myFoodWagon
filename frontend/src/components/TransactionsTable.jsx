import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Avatar,
  CardFooter,
  Button,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Dishes", "Account", "Quantity"];

const TABLE_ROWS = [];

function TransactionsTable({ cartItems }) {
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalAmount = calculateTotal(cartItems);
  return (
    <Card className="h-full max-w-[1200px] mx-auto">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="my-2 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              My Cart
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are items that you have added to cart.
            </Typography>
          </div>
        </div>
      </CardHeader>

      <CardBody className="overflow-scroll h-[450px] px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cartItems.map(({ image, foodname, price, quantity }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={foodname}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={image}
                        alt={foodname}
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {foodname}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {quantity}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className="flex items-center justify-end border-t border-blue-gray-50 p-4">
        <div className="flex gap-10 items-end">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal text-gray-500"
          >
            Total Amount:{" "}
            <span className="text-xl ml-1 text-green-500">
              Rs. {totalAmount}
            </span>
          </Typography>
          <Button
            size="sm"
            className="rounded-md bg-[#F17228]  hover:opacity-100"
          >
            Checkout
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default TransactionsTable;
