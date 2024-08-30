import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, TextField, Chip, IconButton, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import editLogo from '../assets/editLogo.png';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const MyShop = () => {
    const [keywords, setKeywords] = useState(['Cloth', 'Mens', 'Shoes']);
    const [inputValue, setInputValue] = useState('');
    const [socialLinks, setSocialLinks] = useState([
        { platform: 'Facebook', url: 'https://www.facebook.com' },
        { platform: 'Instagram', url: 'https://www.instagram.com' },
        { platform: 'LinkedIn', url: 'https://www.linkedin.com' }
    ]);
    const [shopName, setShopName] = useState('');
    const [phone, setPhone] = useState('');
    const [opensAt, setOpensAt] = useState('');
    const [closesAt, setClosesAt] = useState('');
    const [address, setAddress] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');

    const mutation = useMutation({
        mutationFn: (data) => {
            const token = localStorage.getItem('token');
            return axios.post(`${import.meta.env.VITE_BACKEND_URL}/seller/createStore`, data, {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
        },
    });

    const handleDelete = (keywordToDelete) => {
        setKeywords((keywords) => keywords.filter((keyword) => keyword !== keywordToDelete));
    };

    const handleAddKeyword = () => {
        if (inputValue.trim() && !keywords.includes(inputValue)) {
            setKeywords([...keywords, inputValue]);
        }
        setInputValue('');
    };

    const handleAddLink = () => {
        setSocialLinks([...socialLinks, { platform: '', url: '' }]);
    };

    const handleRemoveLink = (index) => {
        const newLinks = socialLinks.filter((_, i) => i !== index);
        setSocialLinks(newLinks);
    };

    const handleLinkChange = (index, field, value) => {
        const newLinks = [...socialLinks];
        newLinks[index][field] = value;
        setSocialLinks(newLinks);
    };

    const handleSubmit = () => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const sellerId = userData?._id;
        console.log(sellerId)
        const payload = {
            sellerId,
            shopName,
            phone,
            opensAt,
            closesAt,
            address,
            seoContent: {
                metaTitle,
                metaDescription,
                metaKeywords: keywords
            },
            socialLinks: socialLinks.filter(link => link.platform && link.url)
        };
        // console.log("social link ---->",socialLinks.filter(link => link.platform && link.url))

        mutation.mutate(payload, {
            onSuccess: (response) => {
                console.log('Shop created successfully:', response);
                
                const shopId = response?.data?.data?.id;
                console.log(shopId)
                
                if (shopId) {
                    localStorage.setItem('shopId', shopId);
                    console.log('Shop ID stored in localStorage:', shopId);
                } else {
                    console.error('Shop ID not found in response');
                }
            },
            onError: (error) => {
                console.error('Error creating shop:', error);
            }
        });
        
    };

    return (
        <div className="flex flex-col p-4 min-h-screen h-100">
            <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } }}>
                Manage Shop
            </Typography>

            <Box
                component="div"
                sx={{
                    width: { xs: '100%', md: '90%' },
                    border: '2px solid #047857',
                    borderRadius: '20px',
                    padding: '16px',
                    backgroundColor: 'rgba(4, 120, 87, 0.1)',
                    height: { xs: 'auto', md: '400px' },
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h4" className="mb-4" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}>
                    Images
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginTop: '40px' }}>
                    <Card
                        sx={{
                            border: '2px solid #047857',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: '20px',
                            height: '100%',
                        }}
                    >
                        <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 0 }}>
                            <Typography variant="subtitle1" className="mb-2">
                                Logo
                            </Typography>
                            <img
                                src={editLogo}
                                alt="Logo"
                                className="w-full h-full object-cover"
                            />
                            <EditIcon
                                sx={{
                                    position: 'absolute',
                                    bottom: '8px',
                                    right: '8px',
                                    cursor: 'pointer',
                                    color: '#047857',
                                }}
                            />
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            border: '2px solid #047857',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: '20px',
                            height: '100%',
                            gridColumn: { xs: 'span 1', md: 'span 2' },
                        }}
                    >
                        <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 0 }}>
                            <Typography variant="subtitle1" className="mb-2">
                                Cover Photo
                            </Typography>
                            <img
                                src={editLogo}
                                alt="Cover Photo"
                                className="w-full h-full object-cover"
                            />
                            <EditIcon
                                sx={{
                                    position: 'absolute',
                                    bottom: '8px',
                                    right: '8px',
                                    cursor: 'pointer',
                                    color: '#047857',
                                }}
                            />
                        </CardContent>
                    </Card>
                </div>
            </Box>

            <Box
                component="div"
                sx={{
                    width: { xs: '100%', md: '90%' },
                    border: '2px solid #047857',
                    borderRadius: '20px',
                    padding: '16px',
                    backgroundColor: 'rgba(4, 120, 87, 0.1)',
                    mt: 10
                }}
            >
                <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}>
                    Basic Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {['Shop Name', 'Phone', 'Opens at', 'Closed at', 'Address'].map((label, index) => (
                        <Box key={label} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '200px' }, mr: 2, fontSize: { xs: '1rem', md: '1.5rem' }, mb: { xs: 1, md: 0 } }}>{label}</Typography>
                            <TextField 
                                variant="outlined" 
                                sx={{ width: { xs: '100%', md: '700px' }, borderRadius: '20px', ml: { xs: 0, md: 30 } }} 
                                size="large"
                                value={index === 0 ? shopName : index === 1 ? phone : index === 2 ? opensAt : index === 3 ? closesAt : address}
                                onChange={(e) => index === 0 ? setShopName(e.target.value) : index === 1 ? setPhone(e.target.value) : index === 2 ? setOpensAt(e.target.value) : index === 3 ? setClosesAt(e.target.value) : setAddress(e.target.value)}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box
                sx={{
                    width: { xs: '100%', md: '90%' },
                    border: '2px solid #047857',
                    borderRadius: '20px',
                    padding: '32px',
                    backgroundColor: 'rgba(4, 120, 87, 0.1)',
                    mt: 10,
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography variant="h4" sx={{ mb: 4, fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}>
                        SEO Contents
                    </Typography>
                    {['Meta Title', 'Meta Description'].map((label, index) => (
                        <Box key={label} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '200px' }, mr: 2, fontSize: { xs: '1rem', md: '1.5rem' }, mb: { xs: 1, md: 0 } }}>{label}</Typography>
                            <TextField
                                variant="outlined"
                                sx={{ width: { xs: '100%', md: '700px' }, borderRadius: '20px', ml: { xs: 0, md: 30 } }}
                                size="large"
                                multiline={index === 1}
                                rows={index === 1 ? 4 : 1}
                                value={index === 0 ? metaTitle : metaDescription}
                                onChange={(e) => index === 0 ? setMetaTitle(e.target.value) : setMetaDescription(e.target.value)}
                            />
                        </Box>
                    ))}
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Meta Keywords
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {keywords.map((keyword) => (
                            <Chip
                                key={keyword}
                                label={keyword}
                                onDelete={() => handleDelete(keyword)}
                                sx={{ fontSize: '1rem', backgroundColor: '#047857', color: '#fff' }}
                            />
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
                        <TextField
                            variant="outlined"
                            placeholder="Add a keyword"
                            size="small"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            sx={{ flexGrow: 1, borderRadius: '20px', mr: 1 }}
                        />
                        <Button
                            variant="contained"
                            onClick={handleAddKeyword}
                            sx={{ mt: { xs: 2, md: 0 }, width: 'fit-content', backgroundColor: '#047857' }}
                        >
                            <AddIcon />
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                component="div"
                sx={{
                    width: { xs: '100%', md: '90%' },
                    border: '2px solid #047857',
                    borderRadius: '20px',
                    padding: '32px',
                    backgroundColor: 'rgba(4, 120, 87, 0.1)',
                    mt: 10,
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography variant="h4" sx={{ mb: 4, fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}>
                        Social Links
                    </Typography>
                    {socialLinks.map((link, index) => (
                        <Box key={index} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, gap: 2, mb: 2 }}>
                            <TextField
                                label="Platform"
                                variant="outlined"
                                value={link.platform}
                                onChange={(e) => handleLinkChange(index, 'platform', e.target.value)}
                                sx={{ flexGrow: 1, borderRadius: '20px' }}
                            />
                            <TextField
                                label="URL"
                                variant="outlined"
                                value={link.url}
                                onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                                sx={{ flexGrow: 2, borderRadius: '20px' }}
                            />
                            <IconButton onClick={() => handleRemoveLink(index)} sx={{ color: '#047857' }}>
                                <RemoveIcon />
                            </IconButton>
                        </Box>
                    ))}
                    <Button
                        variant="contained"
                        onClick={handleAddLink}
                        sx={{ width: 'fit-content', backgroundColor: '#047857' }}
                    >
                        <AddIcon />
                    </Button>
                </Box>
            </Box>

            <Button
                variant="contained"
                color="primary"
                sx={{ mt: 5, alignSelf: 'center', backgroundColor: '#047857', width: '150px', height: '50px' }}
                onClick={handleSubmit}
            >
                Save Changes
            </Button>
        </div>
    );
};

export default MyShop;
