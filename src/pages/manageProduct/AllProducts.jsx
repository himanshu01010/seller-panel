import React from 'react';
import img1 from '../../assets/editLogo.png';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TextField,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { Edit, Add, Search } from '@mui/icons-material';
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
    const products = [
        { id: 1, name: 'vegetable', price: 450.00, stock: 5, status: 'Pending' },
        { id: 2, name: 'vegetable', price: 450.00, stock: 5, status: 'Pending' },
        { id: 3, name: 'vegetable', price: 450.00, stock: 5, status: 'Pending' },
        { id: 4, name: 'vegetable', price: 450.00, stock: 5, status: 'Pending' },
        { id: 5, name: 'vegetable', price: 450.00, stock: 5, status: 'Pending' },
    ];

    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const create = () => {
        navigate('/ManageProduct/All Product/addNew')
    }

    return (
        <Box p={isMobile ? 1 : 3}>
            <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
                All Product
            </Typography>
            <Box display="flex" flexDirection={isMobile ? "column" : "row"} justifyContent="space-between" alignItems={isMobile ? "stretch" : "center"} mb={2}>
                <Box display="flex" gap={2} mb={isMobile ? 2 : 0}>
                </Box>
                <Box display="flex" gap={2} justifyContent={isMobile ? "space-between" : "flex-end"}>
                    <Button variant="contained" startIcon={<Add />} color="success" sx={{
                        backgroundColor: '#047857',
                        '&:hover': {
                            backgroundColor: 'rgba(4, 120, 87, 0.9)',
                        },
                        flex: isMobile ? 1 : 'none',
                    }} onClick={create}>
                        Add New
                    </Button>
                    <IconButton
                        sx={{
                            backgroundColor: '#047857',
                            borderRadius: '10px',
                            '&:hover': {
                                backgroundColor: '#047857',
                            },
                        }}
                    >
                        <RiDeleteBinLine style={{ color: 'white', }} />
                    </IconButton>
                </Box>
            </Box>
            <TableContainer component={Paper} sx={{
                border: '2px solid',
                borderColor: '#047857',
                padding: isMobile ? '8px' : '16px',
                borderRadius: '20px',
            }}>
                <Box display="flex" justifyContent="flex-end" mb={2}>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
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
                <TableContainer sx={{ overflowX: 'auto' }}>
                    <Table sx={{ minWidth: isMobile ? 300 : 650 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#047857' }}>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Thumbnail</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>In Stock</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>
                                        <img
                                            src={img1}
                                            alt={product.name}
                                            style={{ borderRadius: '8px', maxWidth: isMobile ? '50px' : 'none' }}
                                        />
                                    </TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.price.toFixed(2)}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <TableCell>{product.status}</TableCell>
                                    <TableCell>
                                        <IconButton sx={{
                                            backgroundColor: '#047857',
                                            borderRadius: '10px',
                                            '&:hover': {
                                                backgroundColor: 'rgba(4, 120, 87, 0.9)',
                                            },
                                        }}>
                                            <Edit style={{ color: 'white', }} />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                backgroundColor: '#047857',
                                                borderRadius: '10px',
                                                ml: isMobile ? 1 : 2,
                                                '&:hover': {
                                                    backgroundColor: 'rgba(4, 120, 87, 0.9)',
                                                },
                                            }}
                                        >
                                            <RiDeleteBinLine style={{ color: 'white', }} />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </TableContainer>
        </Box>
    );
};

export default AllProducts;