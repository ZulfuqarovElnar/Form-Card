import React, { useState } from 'react';
import { Box, Button, FormControl, MenuItem, Paper, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';

import "../css/table.css";

export default function FormTable() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: "",
        type: "",
        unit: "",
        quantity: "",
        note: ""
    });
    const [editingIndex, setEditingIndex] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddProduct = () => {
        if (Object.values(newProduct).some(value => value === "")) {
            return;
        }
        if (editingIndex !== null) {
            const updatedProducts = [...products];
            updatedProducts[editingIndex] = newProduct;
            setProducts(updatedProducts);
            setEditingIndex(null);
        } else {
            setProducts(prevProducts => [...prevProducts, newProduct]);
        }
        setNewProduct({
            name: "",
            type: "",
            unit: "",
            quantity: "",
            note: ""
        });
    };

    const handleEditProduct = (index) => {
        setNewProduct(products[index]);
        setEditingIndex(index);
    };

    const handleDeleteProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };

    return (
        <Box className="TableContainer">
            <Typography variant="h6">Məhsul Siyahısı</Typography>
            <Paper variant="outlined" className="Table">
                <Table borderAxis="bothBetween" stripe="odd" hoverRow>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 200 }}>Məhsul</TableCell>
                            <TableCell style={{ width: 200 }}>Məhsul Növü</TableCell>
                            <TableCell style={{ width: 200 }}>Vahid</TableCell>
                            <TableCell style={{ width: 200 }}>Miqdar</TableCell>
                            <TableCell style={{ width: 200 }}>Qeyd</TableCell>
                            <TableCell style={{ width: 200 }}>Əlavə et</TableCell>
                            <TableCell style={{ width: 200 }}>Dəyiş</TableCell>
                            <TableCell style={{ width: 200 }}>Sil</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.type}</TableCell>
                                <TableCell>{product.unit}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>{product.note}</TableCell>
                                <TableCell>
                                    <Button size="small" onClick={handleAddProduct}>Əlavə et</Button>
                                </TableCell>
                                <TableCell>
                                    <Button size="small" onClick={() => handleEditProduct(index)}>Dəyiş</Button>
                                </TableCell>
                                <TableCell>
                                    <Button size="small" onClick={() => handleDeleteProduct(index)}>Sil</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell>
                                <FormControl className='form-textfield' fullWidth>
                                    <Select
                                        sx={{ padding: '0px 8px', height: '40px' }}
                                        labelId="select-label1"
                                        id="custom-select1"
                                        name="name"
                                        value={newProduct.name}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <MenuItem value="Çay dəsti">Çay dəsti</MenuItem>
                                        <MenuItem value="Stəkan dəsti">Stəkan dəsti</MenuItem>
                                        <MenuItem value="Stəkan altlıq">Stəkan altlıq</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell>
                                <FormControl className='form-textfield' fullWidth>
                                    <Select
                                        sx={{ padding: '0px 8px', height: '40px' }}
                                        labelId="select-label1"
                                        id="custom-select1"
                                        name="type"
                                        value={newProduct.type}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <MenuItem value="Hazır Məhsul">Hazır Məhsul</MenuItem>
                                        <MenuItem value="Xammal">Xammal</MenuItem>
                                        <MenuItem value="Mal">Mal</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell>
                                <FormControl className='form-textfield' fullWidth>
                                    <Select
                                        sx={{ padding: '0px 8px', height: '40px' }}
                                        labelId="select-label1"
                                        id="custom-select1"
                                        name="unit"
                                        value={newProduct.unit}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <MenuItem value="kg">kg</MenuItem>
                                        <MenuItem value="qram">qram</MenuItem>
                                        <MenuItem value="litr">litr</MenuItem>
                                        <MenuItem value="sm">sm</MenuItem>
                                        <MenuItem value="km">km</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell>
                                <FormControl className='custom-textfield' fullWidth>
                                    <TextField
                                        fullWidth
                                        name="quantity"
                                        value={newProduct.quantity}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell>
                                <FormControl className='custom-textfield' fullWidth>
                                    <TextField
                                        fullWidth
                                        name="note"
                                        value={newProduct.note}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </FormControl>
                            </TableCell>
                            <TableCell>
                                <Button size="small" onClick={handleAddProduct}>Əlavə et</Button>
                            </TableCell>
                            <TableCell>
                                <Button size="small" >Dəyiş</Button>
                            </TableCell>
                            <TableCell>
                                <Button size="small" >Sil</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
}
