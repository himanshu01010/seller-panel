import React, { useState, useRef } from 'react';
import { Card, CardContent, Typography, Box, TextField, Chip, IconButton, Button, Input, useTheme, useMediaQuery } from '@mui/material';

const CreateProduct = () => {
    const [keywords, setKeywords] = useState(['Cloth', 'Mens', 'Shoes']);
    const [inputValue, setInputValue] = useState('');
    const [mainImage, setMainImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);
    const mainImageInputRef = useRef(null);
    const additionalImagesInputRef = useRef(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDelete = (keywordToDelete) => {
        setKeywords((keywords) => keywords.filter((keyword) => keyword !== keywordToDelete));
    };

    const handleAddKeyword = () => {
        if (inputValue.trim() && !keywords.includes(inputValue)) {
            setKeywords([...keywords, inputValue]);
        }   
        setInputValue('');
    };

    const handleMainImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setMainImage(URL.createObjectURL(file));
        }
    };

    const handleAdditionalImagesUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));
        setAdditionalImages(prevImages => [...prevImages, ...newImages]);
    };

    return (
        <Box className="flex flex-col p-4 min-h-screen h-100" sx={{ width: '100%' }}>
            <Typography variant={isMobile ? "h4" : "h3"}>
                Add New Product
            </Typography>
            <Box
                component="div"
                sx={{
                    width: '100%',
                    border: '2px solid #047857',
                    borderRadius: '20px',
                    padding: isMobile ? '12px' : '16px',
                    backgroundColor: 'rgba(4, 120, 87, 0.1)',
                    mt: isMobile ? 5 : 10
                }}
            >
                <Typography variant={isMobile ? "h5" : "h4"} sx={{ mb: 2 }}>
                    Basic Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {['Product Name', 'Product Model', 'Brand', 'Categories', 'Base Price'].map((label) => (
                        <Box key={label} sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center' }}>
                            <Typography sx={{ width: isMobile ? '100%' : '200px', mr: 2, fontSize: isMobile ? '18px' : '25px', mb: isMobile ? 1 : 0 }}>{label}</Typography>
                            <TextField variant="outlined" sx={{ width: '100%', maxWidth: isMobile ? 'none' : '700px', borderRadius: '20px', ml: isMobile ? 0 : 30 }} size="large" />
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    border: '2px solid #047857',
                    borderRadius: '20px',
                    padding: isMobile ? '24px' : '32px',
                    backgroundColor: 'rgba(4, 120, 87, 0.1)',
                    mt: isMobile ? 5 : 10,
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography variant={isMobile ? "h5" : "h4"} sx={{ mb: 4 }}>
                        SEO Contents
                    </Typography>
                    {['Meta Title', 'Meta Description'].map((label) => (
                        <Box key={label} sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center' }}>
                            <Typography sx={{ width: isMobile ? '100%' : '200px', mr: 2, fontSize: isMobile ? '18px' : '25px', mb: isMobile ? 1 : 0 }}>{label}</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline={label === 'Meta Description'}
                                rows={label === 'Meta Description' ? 4 : 1}
                                sx={{ width: '100%', maxWidth: isMobile ? 'none' : '700px', borderRadius: '20px', ml: isMobile ? 0 : 30 }}
                            />
                        </Box>
                    ))}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', width: '100%' }}>
                            <Typography sx={{ width: isMobile ? '100%' : '200px', mr: 2, fontSize: isMobile ? '18px' : '25px', mb: isMobile ? 1 : 0 }}>Meta Keywords</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleAddKeyword();
                                        e.preventDefault();
                                    }
                                }}
                                placeholder="Add a keyword and press Enter"
                                sx={{ width: '100%', maxWidth: isMobile ? 'none' : '700px', borderRadius: '20px', ml: isMobile ? 0 : 30 }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, ml: isMobile ? 0 : 57 }}>
                            {keywords.map((keyword, index) => (
                                <Chip
                                    key={index}
                                    label={keyword}
                                    onDelete={() => handleDelete(keyword)}
                                    color="success"
                                    sx={{ borderRadius: '20px', backgroundColor:'#047857'}}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    border: '2px solid #047857',
                    borderRadius: '20px',
                    padding: isMobile ? '24px' : '32px',
                    backgroundColor: 'rgba(4, 120, 87, 0.1)',
                    mt: isMobile ? 5 : 10,
                }}
            >
                <Typography variant={isMobile ? "h5" : "h4"} sx={{ mb: 4 }}>
                    Media Contents
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center' }}>
                        <Typography sx={{ width: isMobile ? '100%' : '200px', mr: 2, fontSize: isMobile ? '18px' : '25px', mb: isMobile ? 1 : 0 }}>Main Image</Typography>
                        <Box
                            onClick={() => mainImageInputRef.current.click()}
                            sx={{
                                width: '150px',
                                height: '150px',
                                border: '2px dashed #047857',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                ml: isMobile ? 0 : 30,
                                backgroundImage: mainImage ? `url(${mainImage})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {!mainImage && <Typography sx={{ fontSize: '40px', color: '#047857' }}>↑</Typography>}
                        </Box>
                        <Input
                            type="file"
                            inputRef={mainImageInputRef}
                            sx={{ display: 'none' }}
                            onChange={handleMainImageUpload}
                            inputProps={{ accept: 'image/*' }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center' }}>
                        <Typography sx={{ width: isMobile ? '100%' : '200px', mr: 2, fontSize: isMobile ? '18px' : '25px', mb: isMobile ? 1 : 0 }}>Additional Images</Typography>
                        <Box
                            onClick={() => additionalImagesInputRef.current.click()}
                            sx={{
                                width: '100%',
                                maxWidth: isMobile ? 'none' : '700px',
                                height: '100px',
                                border: '2px dashed #047857',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                ml: isMobile ? 0 : 30,
                                flexWrap: 'wrap',
                                overflow: 'hidden',
                            }}
                        >
                            {additionalImages.length === 0 ? (
                                <Typography sx={{ fontSize: '40px', color: '#047857' }}>↑</Typography>
                            ) : (
                                additionalImages.map((img, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            width: '80px',
                                            height: '80px',
                                            backgroundImage: `url(${img})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            m: 0.5,
                                        }}
                                    />
                                ))
                            )}
                        </Box>
                        <Input
                            type="file"
                            inputRef={additionalImagesInputRef}
                            sx={{ display: 'none' }}
                            onChange={handleAdditionalImagesUpload}
                            inputProps={{ accept: 'image/*', multiple: true }}
                        />
                    </Box>
                </Box>
            </Box>
            <Button 
                sx={{
                    backgroundColor:'#047857',
                    mt: 2,
                    fontSize: isMobile ? '18px' : '25px',
                    color:'white',
                    '&:hover':{backgroundColor:'rgba(4, 120, 87, 0.9)'},
                    width: '100%'
                }}
            >
                Add
            </Button>
        </Box>
    )
}

export default CreateProduct;