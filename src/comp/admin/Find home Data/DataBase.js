import React, { useState } from 'react'
import { db, storage } from '../../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, FormControl, FormControlLabel, FormLabel, InputLabel, LinearProgress, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography, styled } from '@mui/material';
import ReactLoading from 'react-loading';
import 'react-phone-input-2/lib/style.css'
import { AddPhotoAlternate, Info } from '@mui/icons-material';
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function DataBase() {
    const [messege, setMessege] = React.useState(false);
    const nav = useNavigate()
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    // const [user] = useAuthState(auth);
    const [btn, setBtn] = useState(false);
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [type, setType] = React.useState('');
    const [area, setArea] = React.useState('');
    const [bed, setBed] = React.useState('');
    const [bath, setBath] = React.useState('');
    const [level, setLevel] = React.useState('');
    const [finsh, setFinsh] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [sale, setSale] = React.useState('');
    const [dis, setDis] = React.useState('');
    const [prog, setProg] = useState(0)
    const [country, setCountry] = React.useState('');
    const [url, setUrl] = useState([])

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleAreaChange = (event) => {
        setArea(event.target.value);
    };
    const handlebedChange = (event) => {
        setBed(event.target.value);
    };
    const handlebathChange = (event) => {
        setBath(event.target.value);
    };
    const handlelevelChange = (event) => {
        setLevel(event.target.value);
    };
    const handleFinshChange = (event) => {
        setFinsh(event.target.value);
    };
    const handlelocationChange = (event) => {
        setLocation(event.target.value);
    };
    const handleSaleChange = (event) => {
        setSale(event.target.value);
    };
    const handleDisChange = (event) => {
        setDis(event.target.value);
    };
    const handleFileChange = async (event) => {
        for (let i = 0; i < event.target.files.length; i++) {
            console.log(event.target.files.length)
            // console.log(i)
            const storageRef = ref(storage, event.target.files[i].name);
            const uploadTask = uploadBytesResumable(storageRef, event.target.files[i]);

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    // console.log('Upload is ' + progress + '% done');
                    setProg(progress);
                    if (i < event.target.files.length) {
                        setBtn(true)
                    }
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        console.log('File available at', downloadURL);
                        setUrl((old) => [...old, downloadURL]);
                        setBtn(false)
                        // Add a new document in collection "cities"
                    });
                }
            );
        }
    };

    const sendData = async () => {
        setBtn(true)

        try {
            await setDoc(doc(db, 'data', `${new Date().getTime()}`), {
                Name: name,
                id: `${new Date().getTime()}`,
                Phone: phone,
                Type: type,
                Area: area,
                Bed: bed,
                Bath: bath,
                Level: level,
                Finsh: finsh,
                Location: location,
                Sale: sale,
                Dis: dis,
                img: url
            });
        } catch (er) {
        }
        setBtn(false)
        setName('')
        setPhone('')
        setArea('')
        setBath('')
        setBed('')
        setType('')
        setDis('')
        setFinsh('')
        setLevel('')
        setSale('')
        setLocation('')
    }
    return (
        <>
            <Box style={{ width: '100%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '70px 0 0' }}>
                <Stack sx={{ alignItems: 'center', marginBottom: '10px' }}>
                    <Typography variant='h5'>
                        Resale
                    </Typography>
                </Stack>
                <Card sx={{ width: { xs: '90%', sm: '80%' }, display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '20px', margin: '10px 0 ' }}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                        Complete The Form
                    </Typography>
                    <Typography variant='caption'>
                        Your privacy is important to us. We won't publish or share your information with anyone
                    </Typography>
                    <Box component='form'
                        onSubmit={async (e) => {
                            e.preventDefault();
                            sendData();
                            setMessege(true);
                            setTimeout(() => {
                                setMessege(false)
                                nav('/')
                            }, 2000);
                        }}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', margin: '15px 0 0' }}>

                        <Stack sx={{ flexDirection: 'row', width: { xs: '100%', md: '50%' }, padding: '5px' }}>
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel id="demo-simple-select-label">Arya</InputLabel>
                                <Select
                                    required
                                    sx={{ minWidth: 'fit-content' }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Type"
                                    onChange={handleTypeChange}
                                >
                                    <MenuItem value='Apartment'>Apartment</MenuItem>
                                    <MenuItem value="Duplex">Duplex</MenuItem>
                                    <MenuItem value="Studio">Studio</MenuItem>
                                    <MenuItem value="Penthouse">Penthouse</MenuItem>
                                    <MenuItem value="Family">Family house</MenuItem>
                                    <MenuItem value="Standalone">Standalone</MenuItem>
                                    <MenuItem value="Twin house">Twin house
                                    </MenuItem>
                                    <MenuItem value="One storey Villa">One storey Villa</MenuItem>
                                    <MenuItem value="Chalet">Chalet</MenuItem>
                                    <MenuItem value="Townhouse">Townhouse</MenuItem>
                                    <MenuItem value="Cabin">Cabin</MenuItem>
                                    <MenuItem value="Clinic">Clinic</MenuItem>
                                    <MenuItem value="Office">Office</MenuItem>
                                    <MenuItem value="Retail">Retail</MenuItem>


                                </Select>
                            </FormControl>
                        </Stack>
                        <TextField
                            sx={{ margin: '10px', padding: '5px', width: { xs: '100%', md: '50%' } }}
                            value={name}
                            required
                            // edit
                            id="Arya" label="Arya"
                            variant="outlined" type="text"
                            onChange={(e) => {
                                handleNameChange(e)
                            }}
                        />
                        <TextField
                            sx={{ margin: '10px', padding: '5px', width: { xs: '100%', md: '50%' } }}
                            value={name}
                            required
                            // edite
                            id="Price" label="Price"
                            variant="outlined" type="text"
                            onChange={(e) => {
                                handleNameChange(e)
                            }}
                        />
                        <TextField
                            sx={{ margin: '10px', padding: '5px', width: { xs: '100%', md: '50%' } }}
                            value={name}
                            required
                            // edite
                            id="RefNum" label="RefNum"
                            variant="outlined" type="numper"
                            onChange={(e) => {
                                handleNameChange(e)
                            }}
                        />
                        <TextField
                            sx={{ margin: '10px', padding: '5px', width: { xs: '100%', md: '50%' } }}
                            value={name}
                            required
                            // edite
                            id="Delivery" label="Delivery"
                            variant="outlined" type="text"
                            onChange={(e) => {
                                handleNameChange(e)
                            }}
                        />

                        <Stack sx={{ flexDirection: 'row', width: { xs: '100%', md: '50%' }, padding: '5px' }}>
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    required
                                    sx={{ minWidth: 'fit-content' }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Type"
                                    onChange={handleTypeChange}
                                >
                                    <MenuItem value='Apartment'>Apartment</MenuItem>
                                    <MenuItem value="Duplex">Duplex</MenuItem>
                                    <MenuItem value="Studio">Studio</MenuItem>
                                    <MenuItem value="Penthouse">Penthouse</MenuItem>
                                    <MenuItem value="Family">Family house</MenuItem>
                                    <MenuItem value="Standalone">Standalone</MenuItem>
                                    <MenuItem value="Twin house">Twin house
                                    </MenuItem>
                                    <MenuItem value="One storey Villa">One storey Villa</MenuItem>
                                    <MenuItem value="Chalet">Chalet</MenuItem>
                                    <MenuItem value="Townhouse">Townhouse</MenuItem>
                                    <MenuItem value="Cabin">Cabin</MenuItem>
                                    <MenuItem value="Clinic">Clinic</MenuItem>
                                    <MenuItem value="Office">Office</MenuItem>
                                    <MenuItem value="Retail">Retail</MenuItem>


                                </Select>
                            </FormControl>
                        </Stack>

                        <TextField
                            sx={{ margin: '10px', padding: '5px', width: { xs: '100%', md: '50%' } }}
                            id="arya" label="Area(m)" variant="outlined" type="number"
                            required
                            value={area}
                            onChange={(e) => {
                                handleAreaChange(e)
                            }}
                        />

                        <Stack sx={{ flexDirection: 'row', width: { xs: '100%', md: '50%' }, padding: '5px' }}>
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel id="Bedrooms">Bedrooms</InputLabel>
                                <Select
                                    required
                                    sx={{ minWidth: 'fit-content' }}
                                    labelId="demo-simple-select-label"
                                    id="Bedroom"
                                    value={bed}
                                    label="Bedrooms"
                                    onChange={handlebedChange}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>

                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack sx={{ flexDirection: 'row', width: { xs: '100%', md: '50%' }, padding: '5px' }}>
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel id="Bathrooms">Bathrooms</InputLabel>
                                <Select
                                    required
                                    sx={{ minWidth: 'fit-content' }}
                                    labelId="demo-simple-select-label"
                                    id="Bathroom"
                                    value={bath}
                                    label="Bathrooms"
                                    onChange={handlebathChange}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack sx={{ flexDirection: 'row', width: { xs: '100%', md: '50%' }, padding: '5px' }}>
                        </Stack>
                        <Box sx={{ width: { xs: '100%', md: '50%' }, padding: '5px' }}>
                            <Typography variant='body2'>
                                Upload Your Images ...
                            </Typography>
                            <Button
                                component="label"
                                variant="outlined"
                                // tabIndex={-1}
                                sx={{ padding: '10px', margin: '15px' }}
                                startIcon={<AddPhotoAlternate />}
                                onChange={(e) => {
                                    handleFileChange(e)
                                }}
                            >
                                <VisuallyHiddenInput type="file" multiple />
                            </Button>
                            <LinearProgress variant="determinate" value={prog} />
                        </Box>
                        <FormControl sx={{ width: { xs: '100%', md: '50%' }, padding: '5px' }} >
                            <FormLabel required id="demo-row-radio-buttons-group-label">Finishing</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                itemProp='required'
                                name="row-radio-buttons-group"
                                value={finsh}
                                onChange={(e) => {
                                    handleFinshChange(e)
                                }}
                            >
                                <FormControlLabel value="Finished" control={<Radio />} label="Finished" />
                                <FormControlLabel value="Semi Finished" control={<Radio />} label="Semi Finished" />
                                <FormControlLabel value="Cor & Shell" control={<Radio />} label="Cor & Shell" />
                                <FormControlLabel value="Furnished" control={<Radio />} label="Furnished" />
                            </RadioGroup>
                        </FormControl>
                        <Box sx={{ width: { xs: '100%', md: '50%' }, padding: '5px' }}>
                            <Typography variant='body2'>
                                Layout Images ...
                            </Typography>
                            <Button
                                component="label"
                                variant="outlined"
                                // tabIndex={-1}
                                sx={{ padding: '10px', margin: '15px' }}
                                startIcon={<AddPhotoAlternate />}
                                onChange={(e) => {
                                    handleFileChange(e)
                                }}
                            >
                                <VisuallyHiddenInput type="file" multiple />
                            </Button>
                            <LinearProgress variant="determinate" value={prog} />
                        </Box>
                        <Box sx={{ width: { xs: '100%', md: '50%' }, padding: '5px' }}>
                            <Typography variant='body2'>
                                Master plan Images ...
                            </Typography>
                            <Button
                                component="label"
                                variant="outlined"
                                // tabIndex={-1}
                                sx={{ padding: '10px', margin: '15px' }}
                                startIcon={<AddPhotoAlternate />}
                                onChange={(e) => {
                                    handleFileChange(e)
                                }}
                            >
                                <VisuallyHiddenInput type="file" multiple />
                            </Button>
                            <LinearProgress variant="determinate" value={prog} />
                        </Box>
                        <TextField
                            sx={{ margin: '10px', padding: '5px', width: { xs: '100%', md: '50%' } }}
                            id="Location" label="Location" variant="outlined" type="text"
                            value={location}
                            required
                            onChange={(e) => {
                                handlelocationChange(e)
                            }}
                        />
                        <FormControl required sx={{ width: { xs: '100%', md: '50%' }, padding: '5px' }}>
                            <RadioGroup
                                row

                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={sale}
                                onChange={(e) => {
                                    handleSaleChange(e)
                                }}
                            >
                                <FormControlLabel value="Sale" control={<Radio />} label="Sale" />
                                <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
                            </RadioGroup>
                        </FormControl>


                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            required
                            value={dis}
                            rows={4}
                            sx={{ margin: '10px', padding: '5px', width: { xs: '100%', md: '50%' } }}
                            onChange={(e) => {
                                handleDisChange(e)
                            }}
                        />

                        <TextField
                            id="outlined-multiline-static"
                            label="TitleDescription"
                            // edite
                            multiline
                            required
                            value={dis}
                            rows={4}
                            sx={{ margin: '10px', padding: '5px', width: { xs: '100%', md: '50%' } }}
                            onChange={(e) => {
                                handleDisChange(e)
                            }}
                        />

                        <TextField
                            id="outlined-multiline-static"
                            label="About"
                            // edite
                            multiline
                            required
                            value={dis}
                            rows={4}
                            sx={{ margin: '10px', padding: '5px', width: { xs: '100%', md: '50%' } }}
                            onChange={(e) => {
                                handleDisChange(e)
                            }}
                        />


                        <Button disabled={btn} variant="contained" type="submit" style={{ width: '50%' }}

                            className="btn">
                            {btn ? <ReactLoading type={'spin'} height={'20px'} width={'20px'} /> : "Send"}
                        </Button>
                    </Box>
                </Card>
            </Box>
            <p style={{ zIndex: '10', backgroundColor: 'whitesmoke', display: 'flex', alignItems: 'center', color: 'black', padding: '10px', borderRadius: '6px', boxShadow: 'rgb(255 255 255 / 25%) 0px 5px 30px 0px', position: 'fixed', top: '100px', right: messege ? '20px' : '-230px', transition: '0.8s', scale: messege ? "1" : '0' }}>Data has been sent successfully <Info style={{ margin: '3px 0 0 10px', fontSize: '20px', color: 'teal' }} /></p>
        </>
    )
}

export default DataBase