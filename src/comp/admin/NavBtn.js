import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';


export default function NavBtn() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const listData = [
        {
            text: 'Sale Data',
            to: ''
        },
        {
            text: 'Resell Form',
            to: 'resale'
        },
        {
            text: 'Database',
            to: 'database'
        },
        {
            text: 'New Launches',
            to: 'newlaunchesform'
        },
        {
            text: 'EditDeveloper',
            to: 'editDeveloper'
        },
        {
            text: 'EditDeals',
            to: 'editDeals'
        },
        {
            text: 'Editluanches',
            to: 'editluanches'
        },
        {
            text: 'Cityscape',
            to: 'cityscape'
        }
    ]
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {listData.map((item, index) => (
                    <Link key={index} style={{ textDecoration: 'none', color: 'inherit' }} to={`${item.to}`}>
                        <ListItem  >
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <div style={{ position: 'fixed', bottom: '16px', right: '16px', zIndex: '1000' }}>
            <Button variant='contained' onClick={toggleDrawer(true)}>+</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
