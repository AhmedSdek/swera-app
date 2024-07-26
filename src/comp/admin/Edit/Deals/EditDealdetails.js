import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../../../firebase/config';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

function EditDealdetails() {
    const { editeDealdetailsId } = useParams()
    const [value, loading, error] = useDocument(doc(db, 'Resell', editeDealdetailsId));
    const [sold, setSold] = React.useState('');
    console.log(sold)
    const [btn, setBtn] = useState(false);
    if (value) {
        console.log(value.data())
        const sendData = async () => {
            setBtn(true);
            try {
                await updateDoc(doc(db, 'Resell', editeDealdetailsId), {
                    sold: sold
                });
            } catch (er) {
                console.log(er)
            }
            setBtn(false)
        }

        return (
            <Box sx={{ minHeight: 'calc(100vh - 100px)', padding: '70px 0' }}>
                EditDealdetails
                <Stack component='form'
                    onSubmit={(e) => {
                        e.preventDefault();
                        sendData();
                    }}>
                    <Stack sx={{ flexDirection: 'row', width: { xs: '100%', md: '50%' }, padding: '5px' }}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="sold-label">Dev</InputLabel>
                            <Select
                                sx={{ minWidth: 'fit-content' }}
                                labelId="soldlap"
                                id="demo-sold"
                                value={sold}
                                label="SOLD OUT"
                                onChange={(e) => {
                                    setSold(e.target.value)
                                }}
                            >
                                <MenuItem value={'SOLD OUT'}>SOLD OUT</MenuItem>
                                <MenuItem value={'Not'}>Not</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <Button disabled={btn} variant="contained" type="submit" style={{ width: '50%' }}
                        className="btn">
                        {btn ? <ReactLoading type={'spin'} height={'20px'} width={'20px'} /> : "Update"}
                    </Button>
                </Stack>
            </Box>
        )
    }
}

export default EditDealdetails