import React, { useState } from 'react'
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, doc, query, updateDoc, where } from "firebase/firestore";
import { Box, Card, CardContent, Checkbox, Container, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from './2238332.png'
import { db } from '../../firebase/config';
import './styles.css'
import ContactUsIcon from '../Contact Us/ContactUsIcon';
import MavLoading from '../Loading/MavLoading';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
function MaverickDeals() {

    const [dataHandel, setDataHandel] = useState(
        query(collection(db, 'Resell'))
    );
    const [value, loading, error] = useCollection(
        dataHandel
    );
    const [sale, setSale] = React.useState('All');
    const [type, setType] = React.useState('All');

    const [Finishing, setFinishing] = React.useState('All');

    if (value) {
        return (
            <Box sx={{ padding: '70px 0 0', minHeight: 'calc(100vh - 100px)' }}>
                <Container>
                    {/* <div className="mav-header">
                        <h4 style={{ fontWeight: 'bold' }}>Choose maverick deals Enjoy within days!</h4>
                        <p>The “Move Now Pay Later” service is a financing option offered by Nawy that not only allows you to choose your perfect home but move in immediately while setting up a flexible payment plan that suits you. Nawy has your back from the beginning of the buying process to the end and provides the hassle-free service of managing all paperwork. Here is how to better understand how this service works:</p>
                    </div>
                    <div className="mav-steps">
                        <div className="step">
                            <div className="step-number">
                                <span>1</span>
                                <span>Step</span>
                            </div>
                            <p>After requesting one of our property consultants’ assistance, you will be able to look at the ready to move properties available in our inventory and explore them thoroughly with your assigned sales representative</p>
                        </div>
                        <div className="step">
                            <div className="step-number">
                                <span>2</span>
                                <span>Step</span>
                            </div>
                            <p>Once settled on your desired property, then comes the step of setting up your flexible payment plan. Nawy is one of the few entities that offers plans extending up to 10 years.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">
                                <span>3</span>
                                <span>Step</span>
                            </div>
                            <p>As soon as you have your optimum payment plan in place, Nawy will proceed to handle all paperwork and logistics to obtain and provide your property for you. In under 45 days, your new home will be available for you to move in.</p>
                        </div>
                    </div> */}


                    <div style={{ margin: '20px 0' }}>
                        <h4 style={{
                            letterSpacing: '0px',
                            fontFamily: 'materialBold',
                            fontSize: '29px',
                            color: 'rgb(30, 65, 100)',
                            textTransform: 'uppercase',
                            letterSpacing: '4.14px',
                            fontWeight: 'bold'
                        }}>
                            Maverick deals
                        </h4>
                        <Typography sx={{
                            fontFamily: 'materialBold',
                            color: '',
                            fontSize: '20px',
                            verticalAlign: 'middle',
                            letterSpacing: '0px'
                        }}>
                            Choose the unit that suits your needs
                        </Typography>
                    </div>
                    <Stack sx={{ padding: '0 0 20px 0', flexDirection: 'row', gap: 2 }}>
                        <FormControl sx={{ width: '200px' }}>
                            <InputLabel id="Sale">Sale</InputLabel>
                            <Select
                                labelId="demo-Sale"
                                id="demo-simple-Sale"
                                value={sale}
                                label="Sale"
                                onChange={(event) => {
                                    if (event.target.value === 'All') {
                                        setDataHandel(query(collection(db, 'Resell')));
                                        setSale('All');
                                        setType('All')
                                        setFinishing('All')
                                    } else if (event.target.value === 'Resale') {
                                        setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale')));
                                        setSale('Resale');
                                        setType('All')
                                        setFinishing('All')
                                    } else if (event.target.value === 'Rent') {
                                        setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent')));
                                        setSale('Rent');
                                        setType('All')
                                        setFinishing('All')
                                    }
                                }}
                            >
                                <MenuItem value='All'>All</MenuItem>
                                <MenuItem value='Resale'>Resale</MenuItem>
                                <MenuItem value='Rent'>Rent</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ width: '200px' }}>
                            <InputLabel id="Type ">Type</InputLabel>
                            <Select
                                labelId="demo-type "
                                id="demo-simple-Type "
                                value={type}
                                label="Type"
                                onChange={(event) => {
                                    if (event.target.value === 'All') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent')));
                                        }
                                        setType('All');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Apartment') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Apartment')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Apartment')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Apartment')));
                                        }
                                        setType('Apartment');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Duplex') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Duplex')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Duplex')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Duplex')));
                                        }
                                        setType('Duplex');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Studio') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Studio')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Studio')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Studio')));
                                        }
                                        setType('Studio');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Penthouse') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Penthouse')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Penthouse')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Penthouse')));
                                        }
                                        setType('Penthouse');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Family house') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Family house')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Family houseuse')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Family house')));
                                        }
                                        setType('Family house');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Standalone') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Standalone')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Standalone')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Standalone')));
                                        }
                                        setType('Standalone');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Twin house') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Twin house')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Twin house')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Twin house')));
                                        }
                                        setType('Twin house');
                                        setFinishing('All')
                                    } else if (event.target.value === 'One storey Villa') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'One storey Villa')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'One storey Villa')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'One storey Villa')));
                                        }
                                        setType('One storey Villa');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Chalet') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Chalet')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Chalet')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Chalet')));
                                        }
                                        setType('Chalet');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Townhouse') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Townhouse')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Townhouse')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Townhouse')));
                                        }
                                        setType('Townhouse');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Cabin') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Cabin')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Cabin')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Cabin')));
                                        }
                                        setType('Cabin');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Clinic') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Clinic')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Clinic')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Clinic')));
                                        }
                                        setType('Clinic');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Office') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Office')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Office')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Office')));
                                        }
                                        setType('Office');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Retail') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Retail')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Retail')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Retail')));
                                        }
                                        setType('Retail');
                                        setFinishing('All')
                                    } else if (event.target.value === 'Villa') {
                                        if (sale === 'All') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Villa')));
                                        } else if (sale === 'Resale') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Villa')));
                                        } else if (sale === 'Rent') {
                                            setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Villa')));
                                        }
                                        setType('Villa');
                                        setFinishing('All')
                                    }
                                }}
                            >
                                <MenuItem value='All'>All</MenuItem>
                                <MenuItem value='Apartment'>Apartment</MenuItem>
                                <MenuItem value="Duplex">Duplex</MenuItem>
                                <MenuItem value="Studio">Studio</MenuItem>
                                <MenuItem value="Penthouse">Penthouse</MenuItem>
                                <MenuItem value="Family house">Family house</MenuItem>
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
                                <MenuItem value="Retail">Villa</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ width: '200px' }}>
                            <InputLabel id="Finishing ">Finishing</InputLabel>
                            <Select
                                labelId="demo-simple-select-labelFinishing "
                                id="demo-simple-selectFinishing "
                                value={Finishing}
                                label="Choose"
                                onChange={(event) => {
                                    if (event.target.value === 'All') {
                                        if (sale === 'All') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Apartment')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Duplex')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Studio')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Penthouse')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Family house')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Standalone')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Penthouse')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Family house')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Standalone')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Twin house')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'One storey Villa')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Chalet')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Townhouse')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Cabin')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Clinic')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Office')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Retail')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Villa')));
                                            }
                                        } else if (sale === 'Resale') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Apartment')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Duplex')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Studio')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Penthouse')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Family house')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Standalone')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Twin house')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'One storey Villa')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Chalet')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Townhouse')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Cabin')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Clinic')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Office')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Retail')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Villa')));
                                            }
                                        } else if (sale === 'Rent') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Apartment')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Duplex')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Studio')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Penthouse')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Family house')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Standalone')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Twin house')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'One storey Villa')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Chalet')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Townhouse')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Cabin')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Clinic')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Office')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Retail')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Villa')));
                                            }
                                        }
                                        setFinishing('All')
                                    } else if (event.target.value === 'Finished') {
                                        if (sale === 'All') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Apartment'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Duplex'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Studio'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Twin house'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'One storey Villa'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Chalet'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Townhouse'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Cabin'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Clinic'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Office'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Retail'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Villa'), where("Finsh", "==", 'Finished')));
                                            }
                                        } else if (sale === 'Resale') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Apartment'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Duplex'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Studio'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Twin house'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'One storey Villa'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Chalet'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Townhouse'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Cabin'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Clinic'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Office'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Retail'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Villa'), where("Finsh", "==", 'Finished')));
                                            }
                                        } else if (sale === 'Rent') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Apartment'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Duplex'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Studio'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Twin house'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'One storey Villa'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Chalet'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Townhouse'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Cabin'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Clinic'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Office'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Retail'), where("Finsh", "==", 'Finished')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Villa'), where("Finsh", "==", 'Finished')));
                                            }
                                        }
                                        setFinishing('Finished')
                                    } else if (event.target.value === 'Semi Finished') {
                                        if (sale === 'All') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Apartment'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Duplex'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Studio'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Twin house'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'One storey Villa'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Chalet'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Townhouse'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Cabin'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Clinic'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Office'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Retail'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Villa'), where("Finsh", "==", 'Semi Finished')));
                                            }
                                        } else if (sale === 'Resale') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Apartment'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Duplex'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Studio'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Twin house'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'One storey Villa'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Chalet'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Townhouse'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Cabin'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Clinic'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Office'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Retail'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Villa'), where("Finsh", "==", 'Semi Finished')));
                                            }
                                        } else if (sale === 'Rent') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Apartment'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Duplex'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Studio'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Twin house'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'One storey Villa'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Chalet'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Townhouse'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Cabin'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Clinic'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Office'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Retail'), where("Finsh", "==", 'Semi Finished')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Villa'), where("Finsh", "==", 'Semi Finished')));
                                            }
                                        }
                                        setFinishing('Semi Finished')
                                    } else if (event.target.value === 'Cor & Shell') {
                                        if (sale === 'All') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Apartment'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Duplex'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Studio'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Twin house'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'One storey Villa'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Chalet'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Townhouse'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Cabin'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Clinic'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Office'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Retail'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Villa'), where("Finsh", "==", 'Cor & Shell')));
                                            }
                                        } else if (sale === 'Resale') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Apartment'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Duplex'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Studio'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Twin house'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'One storey Villa'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Chalet'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Townhouse'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Cabin'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Clinic'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Office'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Retail'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Villa'), where("Finsh", "==", 'Cor & Shell')));
                                            }
                                        } else if (sale === 'Rent') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Apartment'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Duplex'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Studio'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Twin house'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'One storey Villa'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Chalet'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Townhouse'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Cabin'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Clinic'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Office'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Retail'), where("Finsh", "==", 'Cor & Shell')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Villa'), where("Finsh", "==", 'Cor & Shell')));
                                            }
                                        }
                                        setFinishing('Cor & Shell')
                                    } else if (event.target.value === 'Furnished') {
                                        if (sale === 'All') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Apartment'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Duplex'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Studio'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Twin house'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'One storey Villa'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Chalet'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Townhouse'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Cabin'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Clinic'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Office'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Retail'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Type", "==", 'Villa'), where("Finsh", "==", 'Furnished')));
                                            }
                                        } else if (sale === 'Resale') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Apartment'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Duplex'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Studio'), where("Finsh", "==", 'Furnishedl')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Twin house'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'One storey Villa'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Chalet'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Townhouse'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Cabin'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Clinic'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Office'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Retail'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Resale'), where("Type", "==", 'Villa'), where("Finsh", "==", 'Furnished')));
                                            }
                                        } else if (sale === 'Rent') {
                                            if (type === 'All') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Apartment') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Apartment'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Duplex') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Duplex'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Studio') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Studio'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Penthouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Penthouse'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Family house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Family house'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Standalone') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Standalone'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Twin house') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Twin house'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'One storey Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'One storey Villa'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Chalet') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Chalet'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Townhouse') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Townhouse'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Cabin') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Cabin'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Clinic') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Clinic'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Office') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Office'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Retail') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Retail'), where("Finsh", "==", 'Furnished')));
                                            } else if (type === 'Villa') {
                                                setDataHandel(query(collection(db, 'Resell'), where("Sale", "==", 'Rent'), where("Type", "==", 'Villa'), where("Finsh", "==", 'Furnished')));
                                            }
                                        }
                                        setFinishing('Furnished')
                                    }
                                }}
                            >
                                <MenuItem value='All'>All</MenuItem>
                                <MenuItem value='Finished'>Finished</MenuItem>
                                <MenuItem value='Semi Finished'>Semi Finished</MenuItem>
                                <MenuItem value='Cor & Shell'>Cor & Shell</MenuItem>
                                <MenuItem value='Furnished'>Furnished</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <Row>
                        {value.docs.map((item, index) => {
                            return (
                                <Col className=" col-sm-6 col-12 col-lg-4 col-md-6" style={{ marginBottom: '15px', position: 'relative', maxHeight: '100%' }} key={index}>
                                        <Card sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <Link to={`/maverickdeals/${item.data().id}`} style={{ textDecoration: 'none' }}>
                                            <Stack>
                                                <Box sx={{ height: '215px' }}>
                                                    <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={item.data().img[0]} alt='' />
                                                </Box>
                                                <CardContent style={{ padding: '15px 15px 0 15px' }}>
                                                    <Stack>
                                                        <Typography sx={{ lineHeight: '1.3', fontWeight: 'bold' }} variant="h6">
                                                            {`${item.data().imgtext} ${item.data().compoundName}`}
                                                        </Typography>
                                                        <Typography variant="caption" sx={{ color: " rgb(100, 100, 100) ", lineHeight: '1', padding: '0 0 0 5px' }}>
                                                            {item.data().Location}
                                                        </Typography>
                                                    </Stack>
                                                    <Typography sx={{ paddingTop: '10px' }}>
                                                        <img style={{ width: '25px', height: '25px' }} src={img} alt='' />
                                                        {` ${item.data().delivery}`}
                                                    </Typography>
                                                    <Stack sx={{ flexDirection: 'row', margin: '16px 0', gap: '0px 8px' }}>
                                                        <div className='svgicon'>
                                                            <p style={{ fontWeight: 'bold' }}>{item.data().Bed}</p>
                                                            <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill="#666666" stroke="#666666" strokeWidth="0.25"
                                                                    d="M20.5811 14.1659C20.5691 14.3825 20.545 14.563 20.545 14.7435C20.5209 15.5617 20.3525 15.7542 19.6305 15.7783C18.5476 15.8144 18.355 15.6941 18.2949 14.8037C18.2708 14.3705 18.1144 14.2261 17.6812 14.2261C13.5058 14.2381 9.34251 14.2381 5.16714 14.2261C4.69786 14.2261 4.5294 14.3584 4.54144 14.8398C4.55347 15.5497 4.31281 15.7542 3.60288 15.7783C3.44646 15.7783 3.278 15.7783 3.12157 15.7783C2.30334 15.7663 2.11082 15.5738 2.09879 14.7315C2.09879 14.575 2.08675 14.4186 2.07472 14.2261C1.94236 14.202 1.83407 14.1659 1.72577 14.1659C0.727052 14.1298 0.570627 13.9854 0.570627 13.0108C0.570627 11.988 0.522495 10.9652 0.618758 9.94242C0.84738 7.6562 2.4357 6.40479 4.70989 6.65748C4.81819 6.66951 4.93852 6.65748 4.98665 6.65748C4.98665 5.06916 4.98665 3.541 4.98665 2.0008C4.98665 1.90454 4.96258 1.79625 4.95055 1.69998C4.86632 0.845659 5.01071 0.76143 5.86504 0.773463C8.35582 0.809561 10.8346 0.809561 13.3133 0.773463C14.1436 0.76143 14.312 0.89379 14.1797 1.73608C14.1195 2.1091 14.0834 2.47008 14.0232 2.86716C14.9498 2.86716 15.8041 2.91529 16.6584 2.85513C17.5007 2.79497 17.6331 2.89123 17.5127 3.70946C17.4887 3.86588 17.4646 4.02231 17.4646 4.19077C17.4646 4.9729 17.4646 5.74299 17.4646 6.60935C17.8015 6.60935 18.1024 6.62138 18.3911 6.60935C20.2682 6.50106 21.7603 7.99312 21.9167 9.68974C22.025 10.9171 22.001 12.1685 21.9889 13.4079C21.9889 13.8651 21.7122 14.1539 21.2188 14.1539C21.0143 14.1659 20.8218 14.1659 20.5811 14.1659ZM20.0517 12.6739C20.0517 11.988 20.0276 11.3142 20.0637 10.6283C20.0878 10.171 19.8832 10.0507 19.4621 10.0507C14.0353 10.0628 8.60851 10.0628 3.18173 10.0507C2.74856 10.0507 2.56806 10.1831 2.56806 10.6283C2.5801 11.988 2.59213 13.3597 2.56806 14.7194C2.55603 15.2609 2.84482 15.309 3.25393 15.2729C3.62695 15.2489 4.07216 15.4294 4.07216 14.7435C4.07216 13.8892 4.26468 13.7327 5.11901 13.7327C9.29438 13.7327 13.4577 13.7327 17.6331 13.7327C18.5837 13.7327 18.7281 13.841 18.7642 14.7796C18.7882 15.3211 19.1131 15.2609 19.45 15.2729C19.823 15.285 20.0757 15.2368 20.0517 14.7676C20.0276 14.0817 20.0517 13.3838 20.0517 12.6739ZM21.5798 13.6605C21.4956 12.1685 21.5437 10.7005 21.291 9.28062C21.0504 7.92092 19.823 7.05456 18.5355 7.04253C17.3443 7.0305 16.153 7.0305 14.9618 7.04253C12.459 7.06659 9.96821 7.11473 7.4654 7.12676C6.57497 7.12676 5.67251 7.00643 4.78209 7.06659C3.99996 7.12676 3.15767 7.22302 2.48383 7.57197C1.54528 8.05328 1.13617 9.02793 1.076 10.0868C1.02787 11.0013 1.05194 11.9278 1.05194 12.8544C1.05194 13.7688 1.076 13.7929 2.07472 13.6244C2.07472 12.6618 2.07472 11.6872 2.07472 10.7125C2.07472 9.79803 2.26725 9.61754 3.15767 9.61754C5.25137 9.61754 7.34507 9.61754 9.4508 9.61754C12.7718 9.61754 16.0929 9.61754 19.4139 9.61754C20.2923 9.61754 20.5209 9.84616 20.5209 10.7246C20.5209 11.6992 20.5209 12.6859 20.5209 13.6846C20.8819 13.6605 21.1466 13.6605 21.5798 13.6605ZM11.5565 6.63342C11.5565 5.5625 11.5926 4.56378 11.5445 3.5771C11.5084 2.96342 11.5926 2.807 12.2063 2.8431C12.6395 2.86716 13.0606 2.91529 13.4938 2.95139C13.578 2.34975 13.6623 1.84438 13.7345 1.31494C10.9669 1.31494 8.22346 1.31494 5.50406 1.31494C5.50406 3.05969 5.50406 4.8285 5.50406 6.63342C7.57369 6.63342 9.5591 6.63342 11.5565 6.63342ZM16.9833 6.58528C16.9833 5.45421 16.9833 4.40736 16.9833 3.37254C15.3228 3.37254 13.6984 3.37254 12.11 3.37254C12.11 4.45549 12.11 5.50234 12.11 6.58528C13.7465 6.58528 15.3228 6.58528 16.9833 6.58528ZM12.4831 6.8861V6.89814C13.2892 6.89814 14.0954 6.89814 14.9016 6.89814V6.8861C14.0954 6.8861 13.2892 6.8861 12.4831 6.8861Z"
                                                                >
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div className='svgicon'>
                                                            <p style={{ fontWeight: 'bold' }}>
                                                                {item.data().Bath}
                                                            </p>
                                                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M0.841309 19.4389C1.0138 19.0859 1.30262 18.9816 1.68772 18.9897C2.98342 19.0057 4.2751 18.9977 5.5708 18.9977C5.643 18.9977 5.71521 18.9977 5.79945 18.9977C5.79945 18.749 5.79945 18.5203 5.79945 18.2796C5.68713 18.2596 5.57481 18.2435 5.4665 18.2154C4.8367 18.0309 4.42353 17.6298 4.27911 16.9879C4.04244 15.941 3.82582 14.894 3.60118 13.843C3.56909 13.6865 3.51293 13.5822 3.34846 13.506C2.95534 13.3215 2.75477 12.8682 2.85104 12.447C2.9433 12.0298 3.30032 11.7169 3.73356 11.7049C4.26708 11.6888 4.8006 11.6928 5.33412 11.7009C5.4665 11.7009 5.51464 11.6607 5.55475 11.5364C5.77538 10.8264 6.35704 10.3811 7.10317 10.3731C8.21033 10.3651 9.31748 10.3651 10.4246 10.3731C11.1788 10.3811 11.7645 10.8264 11.9891 11.5444C12.0011 11.5885 12.0172 11.6327 12.0332 11.6848C13.8223 11.6848 15.6074 11.6848 17.4046 11.6848C17.4086 11.6206 17.4166 11.5645 17.4166 11.5043C17.4166 8.47566 17.4206 5.44703 17.4166 2.41839C17.4166 1.39146 16.4258 0.729569 15.5152 1.13874C15.102 1.32326 14.8453 1.64819 14.741 2.08544C14.9215 2.16968 15.098 2.22985 15.2584 2.32612C15.6275 2.54675 15.8601 2.8797 15.9845 3.29288C16.0086 3.3691 16.0728 3.45735 16.1409 3.49345C16.5461 3.71007 16.7667 4.13127 16.6785 4.55247C16.5822 5.00176 16.2292 5.32267 15.7599 5.33069C14.8613 5.34674 13.9587 5.34273 13.0602 5.33069C12.6029 5.32267 12.2298 5.00176 12.1415 4.58055C12.0453 4.13528 12.2579 3.71408 12.6751 3.49746C12.7433 3.46136 12.8115 3.37712 12.8315 3.3009C13.012 2.70721 13.3931 2.3181 13.9908 2.13759C14.051 2.11753 14.1272 2.05334 14.1433 1.99718C14.3639 1.14676 14.8974 0.625272 15.7639 0.45278C15.7839 0.448768 15.8 0.436734 15.816 0.428711C15.9885 0.428711 16.161 0.428711 16.3375 0.428711C16.3495 0.436734 16.3576 0.448768 16.3696 0.45278C17.4928 0.733581 18.0223 1.41151 18.0223 2.57483C18.0223 5.53127 18.0223 8.4877 18.0223 11.4441C18.0223 11.5244 18.0223 11.6006 18.0223 11.7129C18.1788 11.7129 18.3192 11.7049 18.4556 11.7129C18.8848 11.741 19.2418 12.0499 19.33 12.467C19.4223 12.8923 19.2177 13.3375 18.8206 13.518C18.6641 13.5903 18.612 13.6905 18.5799 13.843C18.3553 14.906 18.1386 15.969 17.8939 17.0281C17.7455 17.6699 17.3163 18.063 16.6825 18.2315C16.5822 18.2596 16.4779 18.2676 16.3856 18.2836C16.3856 18.5323 16.3856 18.761 16.3856 19.0017C16.4819 19.0017 16.5622 19.0017 16.6424 19.0017C17.9822 19.0017 19.326 19.0017 20.6659 19.0017C21.0871 19.0017 21.3358 19.2544 21.3398 19.6756C21.3398 19.8441 21.3398 20.0086 21.3398 20.177C21.3398 20.6985 21.1111 20.9272 20.5816 20.9272C15.0177 20.9272 9.44986 20.9272 3.88599 20.9272C3.82582 20.9272 3.76565 20.9312 3.70548 20.9232C3.54101 20.8951 3.43671 20.8028 3.43671 20.6263C3.43671 20.4538 3.537 20.3535 3.70147 20.3295C3.77367 20.3174 3.84989 20.3255 3.9221 20.3255C9.44184 20.3255 14.9576 20.3255 20.4773 20.3255C20.5616 20.3255 20.6458 20.3255 20.73 20.3255C20.73 20.0727 20.73 19.8481 20.73 19.6154C14.2997 19.6154 7.87738 19.6154 1.45907 19.6154C1.45907 19.8601 1.45907 20.0888 1.45907 20.3255C1.80807 20.3255 2.14102 20.3255 2.47397 20.3255C2.69058 20.3255 2.82697 20.4418 2.83098 20.6183C2.835 20.8028 2.69459 20.9232 2.46594 20.9232C2.18514 20.9272 1.90434 20.9111 1.62354 20.9272C1.24245 20.9472 0.981709 20.7948 0.841309 20.4378C0.841309 20.1048 0.841309 19.7719 0.841309 19.4389ZM17.7335 14.9501C17.2281 14.9501 16.7467 14.9501 16.2693 14.9501C15.8682 14.9501 15.467 14.9501 15.0699 14.9501C14.8533 14.9501 14.7169 14.8298 14.7129 14.6533C14.7089 14.4728 14.8453 14.3564 15.0579 14.3484C15.106 14.3484 15.1501 14.3484 15.1983 14.3484C16.0126 14.3484 16.8269 14.3484 17.6412 14.3484C17.7134 14.3484 17.7816 14.3484 17.8619 14.3484C17.914 14.1037 17.9621 13.8751 18.0143 13.6344C15.1421 13.6344 12.286 13.6344 9.42178 13.6344C9.42178 13.8751 9.42178 14.1037 9.42178 14.3484C9.51003 14.3484 9.58224 14.3484 9.65445 14.3484C10.9822 14.3484 12.31 14.3484 13.6378 14.3484C13.706 14.3484 13.7702 14.3444 13.8384 14.3524C13.9948 14.3765 14.0911 14.4647 14.1031 14.6292C14.1152 14.8017 14.0189 14.906 13.8544 14.9421C13.7902 14.9582 13.722 14.9501 13.6539 14.9501C12.318 14.9501 10.9862 14.9501 9.65044 14.9501C9.57422 14.9501 9.498 14.9501 9.40574 14.9501C9.40574 15.1828 9.40975 15.3914 9.40574 15.596C9.39771 16.0092 9.13697 16.2739 8.7278 16.2739C7.87337 16.2779 7.01893 16.2739 6.16449 16.2739C5.75131 16.2739 5.49057 16.0132 5.48656 15.6C5.48255 15.3874 5.48656 15.1788 5.48656 14.9582C5.13355 14.9582 4.8006 14.9582 4.45562 14.9582C4.58398 15.5478 4.70433 16.1295 4.83269 16.7071C4.98112 17.3891 5.33412 17.6699 6.02409 17.6699C9.40574 17.6699 12.7914 17.6699 16.173 17.6699C16.2332 17.6699 16.2934 17.6699 16.3536 17.6659C16.8229 17.6378 17.204 17.349 17.3123 16.8957C17.4607 16.2619 17.5851 15.62 17.7335 14.9501ZM9.41376 12.2986C9.41376 12.5553 9.41376 12.7799 9.41376 13.0126C9.48195 13.0166 9.54213 13.0246 9.59829 13.0246C12.4905 13.0246 15.3828 13.0246 18.279 13.0246C18.3432 13.0246 18.4114 13.0206 18.4756 13.0046C18.6521 12.9564 18.7524 12.812 18.7404 12.6315C18.7283 12.455 18.608 12.3266 18.4235 12.3066C18.3513 12.2986 18.279 12.2986 18.2028 12.2986C15.3547 12.2986 12.5106 12.2986 9.66247 12.2986C9.58625 12.2986 9.51003 12.2986 9.41376 12.2986ZM8.796 13.0126C8.84414 12.3186 8.6556 11.6046 9.15302 11.0069C9.10889 10.9868 9.08883 10.9748 9.07279 10.9748C8.38683 10.9748 7.69686 10.9587 7.01091 10.9828C6.54157 10.9989 6.14444 11.3759 6.10031 11.8453C6.06421 12.2264 6.09229 12.6155 6.09229 13.0126C6.99486 13.0126 7.8854 13.0126 8.796 13.0126ZM14.3518 18.9856C14.3037 18.7971 14.2516 18.6326 14.2235 18.4642C14.1994 18.3037 14.1312 18.2636 13.9748 18.2636C12.0493 18.2676 10.1198 18.2676 8.19428 18.2676C8.13411 18.2676 8.07795 18.2676 8.00574 18.2676C7.94557 18.5123 7.88941 18.7409 7.82924 18.9856C10.0115 18.9856 12.1616 18.9856 14.3518 18.9856ZM14.404 4.00692C13.9708 4.00692 13.5375 4.00291 13.1043 4.01093C12.8596 4.01494 12.7192 4.15935 12.7232 4.37597C12.7272 4.58055 12.8716 4.72898 13.1003 4.73299C13.9708 4.737 14.8453 4.737 15.7157 4.73299C15.9364 4.73299 16.0768 4.58858 16.0928 4.39202C16.1089 4.1754 15.9524 4.01494 15.7037 4.01093C15.2705 4.00291 14.8372 4.00692 14.404 4.00692ZM8.79199 13.6424C7.8854 13.6424 6.99085 13.6424 6.10031 13.6424C6.10031 13.8871 6.10031 14.1158 6.10031 14.3364C7.0069 14.3364 7.89743 14.3364 8.79199 14.3364C8.79199 14.0957 8.79199 13.8711 8.79199 13.6424ZM8.79199 14.9662C7.8854 14.9662 6.99085 14.9662 6.10432 14.9662C6.10432 15.2109 6.10432 15.4395 6.10432 15.6602C7.01091 15.6602 7.90145 15.6602 8.79199 15.6602C8.79199 15.4195 8.79199 15.1948 8.79199 14.9662ZM5.47051 13.0246C5.47051 12.7679 5.47051 12.5393 5.47051 12.3026C4.90089 12.3026 4.35132 12.2986 3.79774 12.3066C3.57711 12.3106 3.44473 12.455 3.44072 12.6556C3.43671 12.8562 3.5731 13.0206 3.78571 13.0206C4.33929 13.0287 4.89688 13.0246 5.47051 13.0246ZM13.4573 3.39317C14.1031 3.39317 14.7289 3.39317 15.3627 3.39317C15.2544 2.96795 14.8372 2.6671 14.3879 2.67913C13.9427 2.69116 13.5375 2.99603 13.4573 3.39317ZM11.3834 11.6888C11.2751 11.2395 10.8298 10.9507 10.3444 10.9748C9.94327 10.9948 9.47794 11.404 9.498 11.6888C10.1198 11.6888 10.7456 11.6888 11.3834 11.6888ZM4.31923 14.3364C4.72037 14.3364 5.09344 14.3364 5.47051 14.3364C5.47051 14.0917 5.47051 13.863 5.47051 13.6384C5.03327 13.6384 4.60805 13.6384 4.17081 13.6384C4.22295 13.8751 4.27109 14.1037 4.31923 14.3364ZM6.42524 18.2796C6.42524 18.5203 6.42524 18.749 6.42524 18.9856C6.68999 18.9856 6.9387 18.9856 7.20747 18.9856C7.26363 18.757 7.3238 18.5243 7.38397 18.2796C7.05503 18.2796 6.74615 18.2796 6.42524 18.2796ZM15.7558 18.9856C15.7558 18.7409 15.7558 18.5163 15.7558 18.2796C15.4349 18.2796 15.1261 18.2796 14.7971 18.2796C14.8573 18.5243 14.9134 18.753 14.9736 18.9856C15.2384 18.9856 15.4871 18.9856 15.7558 18.9856Z" fill="#666666"
                                                                >
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M3.2555 2.8722C3.11743 2.8722 3.0055 2.98413 3.0055 3.1222L3.0055 5.3722C3.0055 5.51027 3.11743 5.6222 3.2555 5.6222C3.39357 5.6222 3.5055 5.51027 3.5055 5.3722L3.5055 3.3722L5.5055 3.3722C5.64357 3.3722 5.7555 3.26027 5.7555 3.1222C5.7555 2.98413 5.64357 2.8722 5.5055 2.8722L3.2555 2.8722ZM13.4195 12.9326L3.43228 2.94543L3.07873 3.29898L13.0659 13.2862L13.4195 12.9326Z" fill="#303030">
                                                                </path>
                                                                <path d="M13.243 13.3592C13.3811 13.3592 13.493 13.2473 13.493 13.1092L13.493 10.8592C13.493 10.7212 13.3811 10.6092 13.243 10.6092C13.105 10.6092 12.993 10.7212 12.993 10.8592L12.993 12.8592L10.993 12.8592C10.855 12.8592 10.743 12.9712 10.743 13.1092C10.743 13.2473 10.855 13.3592 10.993 13.3592L13.243 13.3592ZM3.07908 3.29885L13.0663 13.286L13.4198 12.9325L3.43264 2.94529L3.07908 3.29885Z" fill="#313131">
                                                                </path>
                                                                <rect x="0.682617" y="0.548828" width="15.9014" height="15.9014" rx="2.5" stroke="#313131"></rect>
                                                            </svg>
                                                            <p style={{ margin: '0 0 3px', fontWeight: 'bold' }}>{item.data().Area}
                                                                &nbsp;m²</p>
                                                        </div>
                                                    </Stack >
                                                    <Box sx={{ position: 'absolute', top: '16px', backgroundColor: 'rgb(255 145 77)', color: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <p style={{ fontWeight: 'bold', color: '#1e4164' }}>
                                                            {`${item.data().Sale}`}
                                                        </p>
                                                    </Box>
                                                    {item.data().sold === 'SOLD OUT' &&
                                                        <Box sx={{ position: 'absolute', top: '20px', right: '5px', backgroundColor: 'white', color: 'red', borderRadius: ' 5px ', border: '2px solid red', width: '100px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <p style={{ fontWeight: 'bold', color: 'white', backgroundColor: 'red', width: '95%', textAlign: 'center' }}>
                                                                {`${item.data().sold}`}
                                                            </p>
                                                        </Box>

                                                    }
                                                    <Typography sx={{ fontWeight: 'bold' }}>
                                                        {item.data().price} EGP
                                                    </Typography>
                                                </CardContent>
                                            </Stack>
                                        </Link >

                                        <Stack sx={{ padding: '0 10px 10px 0', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Stack sx={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <Checkbox checked={localStorage.getItem(item.data().id) === 'true' ? true : false} aria-label='like' icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />}
                                                    onChange={async (e) => {
                                                        if (e.target.checked) {
                                                            localStorage.setItem(item.data().id, true);
                                                            localStorage.setItem(item.data().refNum, item.data().id);
                                                            try {
                                                                await updateDoc(doc(db, 'Resell', item.data().id), {
                                                                    like: item.data().like + 1
                                                                });
                                                            } catch (er) {
                                                                console.log(er)
                                                            }
                                                        } else {
                                                            localStorage.removeItem(item.data().id);
                                                            localStorage.removeItem(item.data().refNum)
                                                            await updateDoc(doc(db, 'Resell', item.data().id), {
                                                                like: item.data().like - 1
                                                            });
                                                        }
                                                    }} />
                                                {/* <Typography>
                                                    {item.data().like}
                                                </Typography> */}
                                            </Stack>
                                                <ContactUsIcon />
                                        </Stack>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row> 
                </Container>

            </Box>
        )
    }
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 100px)' }}>
                <MavLoading />
            </div>
        )
    }

}

export default MaverickDeals