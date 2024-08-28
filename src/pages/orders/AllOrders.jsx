import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, IconButton, Typography,
    Box, TextField, Button, useMediaQuery, useTheme
} from '@mui/material';
import { Search } from '@mui/icons-material';

const orders = [
    {
        orderId: 'KDO9ZMEMFK4T',
        date: '16 Jul, 2024 10:08 PM',
        customer: 'Markle Dlight',
        paymentVia: 'Upi',
        amount: '₹32.00',
        status: 'Active',
    },
    {
        orderId: 'KDO9ZMEMFK4T',
        date: '16 Jul, 2024 10:08 PM',
        customer: 'Markle Dlight',
        paymentVia: 'Upi',
        amount: '₹32.00',
        status: 'Active',
    },
    {
        orderId: 'KDO9ZMEMFK4T',
        date: '16 Jul, 2024 10:08 PM',
        customer: 'Markle Dlight',
        paymentVia: 'Upi',
        amount: '₹32.00',
        status: 'Active',
    },
    {
        orderId: 'KDO9ZMEMFK4T',
        date: '16 Jul, 2024 10:08 PM',
        customer: 'Markle Dlight',
        paymentVia: 'Upi',
        amount: '₹32.00',
        status: 'Active',
    },
    {
        orderId: 'KDO9ZMEMFK4T',
        date: '16 Jul, 2024 10:08 PM',
        customer: 'Markle Dlight',
        paymentVia: 'Upi',
        amount: '₹32.00',
        status: 'Active',
    },
    {
        orderId: 'KDO9ZMEMFK4T',
        date: '16 Jul, 2024 10:08 PM',
        customer: 'Markle Dlight',
        paymentVia: 'Upi',
        amount: '₹32.00',
        status: 'Active',
    },
    {
        orderId: 'KDO9ZMEMFK4T',
        date: '16 Jul, 2024 10:08 PM',
        customer: 'Markle Dlight',
        paymentVia: 'Upi',
        amount: '₹32.00',
        status: 'Active',
    },
    // Add more orders as needed
];

const AllOrders = () => {
    const [page, setPage] = useState(0);
    const rowsPerPage = 6;
    const [searchQuery, setSearchQuery] = useState('');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
        setPage(0);
    };

    const filteredOrders = orders.filter(
        (order) =>
            order.orderId.toLowerCase().includes(searchQuery) ||
            order.customer.toLowerCase().includes(searchQuery) ||
            order.paymentVia.toLowerCase().includes(searchQuery) ||
            order.amount.includes(searchQuery) ||
            order.status.toLowerCase().includes(searchQuery)
    );

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    return (
        <Box p={isMobile ? 1 : 3}>
            <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
                All Orders
            </Typography>
            <TableContainer component={Paper} sx={{
                border: '2px solid',
                borderColor: '#047857',
                padding: isMobile ? '8px' : '16px',
                borderRadius: '20px'
            }}>
                <Box 
                    display="flex" 
                    flexDirection={isMobile ? "column" : "row"}
                    justifyContent="space-between" 
                    alignItems={isMobile ? "stretch" : "center"} 
                    mb={2}
                    gap={isMobile ? 2 : 0}
                >
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 bg-emerald-700 text-white text-sm sm:text-lg md:text-xl">
                            Pages
                            <span className="ml-2">▼</span>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-emerald-700 rounded-box z-[1] w-32 sm:w-40 md:w-52 p-2 shadow">
                            <li><a>1</a></li>
                            <li><a>2</a></li>
                            <li><a>3</a></li>
                            <li><a>4</a></li>
                            <li><a>5</a></li>
                        </ul>
                    </div>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        fullWidth={isMobile}
                        InputProps={{
                            endAdornment: (
                                <IconButton sx={{ backgroundColor: '#047857', borderRadius: '5px' }}>
                                    <Search />
                                </IconButton>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#047857',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#047857',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#047857',
                                },
                            },
                        }}
                    />
                </Box>
                <Box sx={{ overflowX: 'auto' }}>
                    <Table aria-label="orders table">
                        <TableHead sx={{ backgroundColor: '#047857' }}>
                            <TableRow>
                                <TableCell><Typography fontWeight="bold">Order ID & Date</Typography></TableCell>
                                <TableCell><Typography fontWeight="bold">Customer</Typography></TableCell>
                                <TableCell><Typography fontWeight="bold">Payment Via</Typography></TableCell>
                                <TableCell><Typography fontWeight="bold">Amount</Typography></TableCell>
                                <TableCell><Typography fontWeight="bold">Status</Typography></TableCell>
                                <TableCell><Typography fontWeight="bold">Action</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Typography>{order.orderId}</Typography>
                                        <Typography variant="caption">{order.date}</Typography>
                                    </TableCell>
                                    <TableCell>{order.customer}</TableCell>
                                    <TableCell>{order.paymentVia}</TableCell>
                                    <TableCell>{order.amount}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    <TableCell>
                                        <Button sx={{
                                            color: 'white',
                                            backgroundColor: '#047857',
                                            '&:hover': {
                                                backgroundColor: 'rgba(4, 120, 87, 0.9)',
                                            },
                                        }}>
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
                <Box 
                    display="flex" 
                    flexDirection={isMobile ? "column" : "row"}
                    justifyContent={isMobile ? "center" : "flex-end"} 
                    alignItems="center" 
                    mt={2}
                    gap={isMobile ? 2 : 0}
                >
                    <Button
                        onClick={() => handleChangePage(page - 1)}
                        disabled={page === 0}
                        sx={{
                            marginRight: isMobile ? '0' : '20px', 
                            backgroundColor: '#047857', 
                            color: 'white', 
                            '&:hover': {
                                backgroundColor: 'rgba(4, 120, 87, 0.9)',
                            },
                        }}
                    >
                        Previous
                    </Button>
                    <Typography variant="body1">
                        Page {page + 1} of {Math.ceil(filteredOrders.length / rowsPerPage)}
                    </Typography>
                    <Button
                        onClick={() => handleChangePage(page + 1)}
                        disabled={page >= Math.ceil(filteredOrders.length / rowsPerPage) - 1}
                        sx={{
                            marginLeft: isMobile ? '0' : '20px', 
                            color: 'white', 
                            backgroundColor: '#047857', 
                            '&:hover': {
                                backgroundColor: 'rgba(4, 120, 87, 0.9)',
                            },
                        }}
                    >
                        Next
                    </Button>
                </Box>
            </TableContainer>
        </Box>
    );
};

export default AllOrders;