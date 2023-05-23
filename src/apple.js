import { useNavigate } from "react-router-dom"
import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from '@mui/material/TextField';
//import { blue } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import { Popover } from "@mui/material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const Apple = () => {
    const[name, setName] = useState("Sormi");
    const[email, setEmail] = useState("sormi12@test.com");
    const[open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    

    const Navigate = useNavigate()
    const onHomepagebuttonclick = () => {
        console.log("Button Clicked") 
        console.log("Name: ", name)
        console.log("E-mail: ", email)
        Navigate("/");   
    };
    const handleClick = (event) => {
        console.log(123);
        setAnchorEl(event.currentTarget);
        setOpen(true);
      };
      const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
      };
    
    return (
    <><div style={{
            padding: 5,
        }}>
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer"
            }}
            
            >
            <div onClick={handleClick} style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                columnGap: "5px",
            }}>
                <Avatar sx={{ bgcolor: "blueviolet" }}>SG</Avatar>
                
            </div> 
            </div>
            <div style={{
                padding: 5,
                display: "flex",
                flexDirection: "column",
                rowGap: 8,
            }}>
                <TextField type="text" label="Name" variant="outlined" value={name} placeholder="Name" onChange={(e) => {
                    setName(e.target.value);
                } } />
                <TextField type="email" label="Email" variant="outlined" value={email} placeholder="E-mail" onChange={(e) => {
                    setEmail(e.target.value);
                } } />

                <Button variant="contained" onClick={onHomepagebuttonclick}>SUBMIT</Button>

                {/* <button onClick={onHomepagebuttonclick}>Navigate to Homepage</button> */}
            </div>
        </div><Popover
            open={open}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            anchorEl={anchorEl}
            onClose={handleClose}
        >
           <div style={{
            padding:5,
           }}>
            <h5>Sormi Gohil</h5>
           <Button variant="contained" onClick={onHomepagebuttonclick}>
           < LogoutOutlinedIcon/>
           </Button>
           </div>
            </Popover></>

)}
