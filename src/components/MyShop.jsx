import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, TextField, Chip, IconButton, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import editLogo from '../assets/editLogo.png';

const MyShop = () => {
    const [keywords, setKeywords] = useState(['Cloth', 'Mens', 'Shoes']);
    const [inputValue, setInputValue] = useState('');
    const [socialLinks, setSocialLinks] = useState([
        { platform: 'Facebook', url: 'https://www.facebook.com' },
        { platform: 'Instagram', url: 'https://www.instagram.com' },
        { platform: 'Linked In', url: 'https://www.linkedin.com' }
    ]);

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
    }

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
                    {['Shop Name', 'Phone', 'Opens at', 'Closed at', 'Address'].map((label) => (
                        <Box key={label} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '200px' }, mr: 2, fontSize: { xs: '1rem', md: '1.5rem' }, mb: { xs: 1, md: 0 } }}>{label}</Typography>
                            <TextField variant="outlined" sx={{ width: { xs: '100%', md: '700px' }, borderRadius: '20px', ml: { xs: 0, md: 30 } }} size="large" />
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
                    {['Meta Title', 'Meta Description'].map((label) => (
                        <Box key={label} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' } }}>
                            <Typography sx={{ width: { xs: '100%', md: '200px' }, mr: 2, fontSize: { xs: '1rem', md: '1.5rem' }, mb: { xs: 1, md: 0 } }}>{label}</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline={label === 'Meta Description'}
                                rows={label === 'Meta Description' ? 4 : 1}
                                sx={{ width: { xs: '100%', md: '700px' }, borderRadius: '20px', ml: { xs: 0, md: 30 } }}
                            />
                        </Box>
                    ))}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, width: '100%' }}>
                            <Typography sx={{ width: { xs: '100%', md: '200px' }, mr: 2, fontSize: { xs: '1rem', md: '1.5rem' }, mb: { xs: 1, md: 0 } }}>Meta Keywords</Typography>
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
                                sx={{ width: { xs: '100%', md: '700px' }, borderRadius: '20px', ml: { xs: 0, md: 30 } }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, ml: { xs: 0, md: 57 } }}>
                            {keywords.map((keyword, index) => (
                                <Chip
                                    key={index}
                                    label={keyword}
                                    onDelete={() => handleDelete(keyword)}
                                    color="success"
                                    sx={{ borderRadius: '20px' }}
                                />
                            ))}
                        </Box>
                    </Box>
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
                <Typography variant="h4" sx={{ mb: 4, fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}>
                    Social Links
                </Typography>
                {socialLinks.map((link, index) => (
                    <Box key={index} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, mb: 2 }}>
                        <TextField
                            variant="outlined"
                            label="Platform"
                            value={link.platform}
                            onChange={(e) => handleLinkChange(index, 'platform', e.target.value)}
                            sx={{ width: { xs: '100%', md: '200px' }, mr: { xs: 0, md: 2 }, mb: { xs: 1, md: 0 } }}
                        />
                        <TextField
                            variant="outlined"
                            label="URL"
                            value={link.url}
                            onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                            sx={{ width: { xs: '100%', md: '700px' }, ml: { xs: 0, md: 2 }, mb: { xs: 1, md: 0 } }}
                        />
                        <IconButton
                            sx={{
                                mt: { xs: 1, md: 0 },
                                ml: { xs: 0, md: 2 },
                                border: '1px solid #047857',
                                borderRadius: '8px',
                                padding: '4px',
                                width: { xs: '100%', md: '100px' },
                                height: '50px',
                            }}
                            onClick={() => handleRemoveLink(index)}
                        >
                            <RemoveIcon />
                        </IconButton>
                    </Box>
                ))}
                <Button
                    variant="outlined"
                    sx={{ mt: 2, borderColor: '#047857', color: '#047857' }}
                    onClick={handleAddLink}
                >
                    <AddIcon sx={{ mr: 1 }} /> Add New Link
                </Button>
            </Box>

            <Button
                sx={{
                    ml: { xs: 0, md: 2 },
                    border: '1px solid #047857',
                    borderRadius: '8px',
                    width: { xs: '100%', md: 1550 },
                    height: '50px',
                    mt: 5,
                    backgroundColor: '#047857',
                    '&:hover': {
                        backgroundColor: 'rgba(4, 120, 87, 0.4)'
                    },
                    color: 'white',
                    fontSize: '20px',
                }}
            >
                Save Changes
            </Button>
        </div>
    );
};

export default MyShop;