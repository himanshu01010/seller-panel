import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const DashboardCard = ({ title, value }) => (
  <div className="bg-black text-white p-4 rounded-[25px] shadow-md transform transition duration-300 ease-in-out hover:bg-emerald-700 hover:scale-105">
    <p className="text-4xl text-center font-bold">{value}</p>
    <p className="text-3xl text-center mt-1">{title}</p>
  </div>
);

function createData(orderDate, customer, orderId, amount, status) {
  return { orderDate, customer, orderId, amount, status };
}

const rows = [
  createData('16 Jul, 2024', 'Markle Dlight', 'KDO9ZMEMFK4T', '₹32.00 Pending', 'Pending'),
  createData('16 Jul, 2024', 'Markle Dlight', 'KDO9ZMEMFK4T', '₹32.00 Pending', 'Pending'),
  createData('16 Jul, 2024', 'Markle Dlight', 'KDO9ZMEMFK4T', '₹32.00 Pending', 'Pending'),
  createData('16 Jul, 2024', 'Markle Dlight', 'KDO9ZMEMFK4T', '₹32.00 Pending', 'Pending'),
  createData('16 Jul, 2024', 'Markle Dlight', 'KDO9ZMEMFK4T', '₹32.00 Pending', 'Pending'),
];

const Dashboard = () => {

  const url = import.meta.env.VITE_BACKEND_URL
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const orderCards = [
    { title: "Pending Orders", value: "41" },
    { title: "Processing Orders", value: "31" },
    { title: "Dispatched Orders", value: "8" },
    { title: "Delivered Orders", value: "10" },
    { title: "Cancelled Orders", value: "0" },
    { title: "COD Orders", value: "7" },
    { title: "Approved Products", value: "41" },
    { title: "Pending Products", value: "10" },
    { title: "Total Sold", value: "120" }
  ];

  const soldAmountCards = [
    { title: "Total", value: "₹0.00" },
    { title: "This Month", value: "₹0.00" },
    { title: "This Year", value: "₹0.00" }
  ];

  const MonthlyWithdrawalReport = [
    { title: "In  Wallet", value: "₹0.00" },
    { title: "Total Withdrawal", value: "₹0.00" },
    { title: "Pending Withdrawal", value: "9" }
  ];

  console.log("url------------------>",url)

  return (
    <div className="w-full max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {orderCards.map((card, index) => (
          <DashboardCard key={index} title={card.title} value={card.value} />
        ))}
      </div>
      <h2 className="text-5xl font-bold mt-8 mb-4">Sold Amount</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {soldAmountCards.map((card, index) => (
          <DashboardCard key={index} title={card.title} value={card.value} />
        ))}
      </div>
      <h2 className="text-5xl font-bold mt-8 mb-4">Monthly Withdrawal Report </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {MonthlyWithdrawalReport.map((card, index) => (
          <DashboardCard key={index} title={card.title} value={card.value} />
        ))}
      </div>

      <div className='mt-8 mb-4 overflow-x-auto'>
        <TableContainer component={Paper} sx={{
          border: '2px solid',
          borderColor: '#047857',
          padding: '16px',
          borderRadius: '20px'
        }}>
          <h2 className="text-5xl font-bold mt-2 mb-4">Latest Orders</h2>
          <Table sx={{ minWidth: isMobile ? 300 : 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: '#047857' }}>
              <TableRow>
                <TableCell>Order Date</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Order ID</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.orderDate}
                  </TableCell>
                  <TableCell align="right">{row.customer}</TableCell>
                  <TableCell align="right">{row.orderId}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right" sx={{color:'red'}}>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Dashboard;