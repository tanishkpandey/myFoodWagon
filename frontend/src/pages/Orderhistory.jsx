import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { FaInfoCircle } from "react-icons/fa";

const dummyOrders = [
  {
    orderId: "ORD001",
    orderDate: "2023-10-01",
    items: [
      { foodName: "Pizza", quantity: 2, price: 200 },
      { foodName: "Burger", quantity: 1, price: 100 },
    ],
    totalAmount: 500,
    status: "Completed",
  },
  {
    orderId: "ORD002",
    orderDate: "2023-10-05",
    items: [
      { foodName: "Pasta", quantity: 1, price: 150 },
      { foodName: "Salad", quantity: 1, price: 100 },
    ],
    totalAmount: 250,
    status: "Completed",
  },
  {
    orderId: "ORD003",
    orderDate: "2023-10-10",
    items: [
      { foodName: "Sushi", quantity: 2, price: 300 },
      { foodName: "Miso Soup", quantity: 2, price: 80 },
    ],
    totalAmount: 760,
    status: "Completed",
  },
  {
    orderId: "ORD004",
    orderDate: "2023-10-15",
    items: [
      { foodName: "Fried Rice", quantity: 2, price: 120 },
      { foodName: "Spring Rolls", quantity: 3, price: 90 },
    ],
    totalAmount: 330,
    status: "Pending",
  },
  {
    orderId: "ORD005",
    orderDate: "2023-10-20",
    items: [
      { foodName: "Noodles", quantity: 1, price: 100 },
      { foodName: "Fried Chicken", quantity: 2, price: 180 },
    ],
    totalAmount: 460,
    status: "Pending",
  },
  {
    orderId: "ORD006",
    orderDate: "2023-10-25",
    items: [
      { foodName: "Steak", quantity: 1, price: 300 },
      { foodName: "Fries", quantity: 2, price: 120 },
    ],
    totalAmount: 420,
    status: "Completed",
  },
  {
    orderId: "ORD007",
    orderDate: "2023-10-30",
    items: [
      { foodName: "Tacos", quantity: 2, price: 150 },
      { foodName: "Nachos", quantity: 1, price: 100 },
    ],
    totalAmount: 400,
    status: "Completed",
  },
  {
    orderId: "ORD008",
    orderDate: "2023-11-01",
    items: [
      { foodName: "BBQ Ribs", quantity: 1, price: 250 },
      { foodName: "Cornbread", quantity: 1, price: 50 },
    ],
    totalAmount: 300,
    status: "Pending",
  },
];

function OrderHistory() {
  return (
    <Card className="max-w-[1200px] mx-auto my-8">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h5" color="blue-gray">
          Order History
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Here is a list of your past orders.
        </Typography>
      </CardHeader>

      <CardBody className="overflow-scroll h-[450px] px-4">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Order ID
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Order Date
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Total Amount
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Status
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order) => {
              const totalItems = order.items.reduce(
                (total, item) => total + item.quantity,
                0
              );

              return (
                <tr key={order.orderId}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {order.orderId}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {order.orderDate}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      Rs. {order.totalAmount}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {order.status}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className="flex items-center justify-end border-t border-blue-gray-50 p-4">
        <Button
          size="sm"
          className="rounded-md bg-[#F17228] hover:bg-[#FFB30E]"
        >
          Back to Food
        </Button>
      </CardFooter>
    </Card>
  );
}

export default OrderHistory;
