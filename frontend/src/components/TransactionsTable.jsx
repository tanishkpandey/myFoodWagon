import axios from "axios";
import toast from "react-hot-toast";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Avatar,
  CardFooter,
  Button,
} from "@material-tailwind/react";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../context/UserContext";
// import React, { useContext } from "react";

const TransactionsTable = ({ cartItems }) => {
  // const { user } = useContext(useUser);
  // const navigate = useNavigate();

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalAmount = calculateTotal(cartItems);

  const createOrder = async () => {
    if (!user) {
      toast.error("No user logged in.");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    const formattedItems = cartItems.map((item) => ({
      foodName: item.foodname,
      quantity: item.quantity,
      price: item.price,
    }));

    const orderData = {
      user: user._id,
      items: formattedItems,
      totalAmount: totalAmount,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders/create",
        orderData
      );

      if (response.status === 201) {
        toast.success("Order created successfully!");
        navigate("/order-history");
      } else {
        throw new Error("Unexpected response from the server.");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Error creating order. Please try again later.");
    }
  };

  return (
    <Card className="h-full max-w-[1200px] mx-auto">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h5" color="blue-gray">
          My Cart
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          These are items that you have added to the cart.
        </Typography>
      </CardHeader>

      <CardBody className="overflow-scroll h-[450px] px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            {["Dishes", "Account", "Quantity"].map((head) => (
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
          </thead>
          <tbody>
            {cartItems.map((item, index) => {
              const isLast = index === cartItems.length - 1;
              const rowClass = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={item.foodname}>
                  <td className={rowClass}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={item.image}
                        alt={item.foodname}
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {item.foodname}
                      </Typography>
                    </div>
                  </td>
                  <td className={rowClass}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      Rs. {item.price}
                    </Typography>
                  </td>
                  <td className={rowClass}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.quantity}
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
            Total Amount:
            <span className="text-xl ml-1 text-green-500">
              Rs. {totalAmount}
            </span>
          </Typography>
          <Button
            size="sm"
            className="rounded-md bg-[#F17228]  hover:opacity-100"
            onClick={createOrder}
          >
            Checkout
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TransactionsTable;
