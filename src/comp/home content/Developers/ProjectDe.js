import React from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebase/config';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { Card, Container, Stack, Typography } from '@mui/material';

function ProjectDe() {
    const { devId } = useParams();
    const { projId } = useParams();
    console.log(projId)
    const [value, loading, error] = useDocument(doc(db, 'admin', devId));

    // console.log(projId)

    if (value) { 
        return (
            <>
                {value.data().dev.filter(person => person.proj === projId).map((fil) => {
                    console.log(fil)
                    return (
                        <div key={fil}>
                            <Container>
                                <Stack sx={{ flexDirection: 'row', gap: '10px' }}>
                                    {fil.projImgs.map((img, index) => {
                                        return (
                                            <Card key={index} >
                                                <img style={{ width: '400px' }} src={img} alt='' />

                                            </Card>
                                        )
                                    })}
                                </Stack>
                                <Typography>
                                    {fil.proj}
                                </Typography>
                                <Typography>
                                    {fil.Location}
                                </Typography>
                                <Typography>
                                    {fil.price}
                                </Typography>
                                <Typography>
                                    {fil.projDes}
                                </Typography>
                            </Container>
                        </div>
                    )
                })}
            </>

        )

    }

}

export default ProjectDe