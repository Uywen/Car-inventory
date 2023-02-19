import React  from "react"
import  {AppBar, Toolbar, Typography, Tab, Tabs} from "@mui/material"
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useState } from "react"
import {NavLink} from "react-router-dom"

const Header = () =>{

    // my navbar in my car app

    const [value,setValue] = useState()
    return(
        <div>
            {/* added the position of the navbar because all the info on cause kept
            displaying beneath */}
            <AppBar position="sticky">
                <Toolbar>
                <Typography><DirectionsCarIcon/>
                </Typography>
                {/* the design for the links in on the navbar */}
                <Tabs textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val) => setValue(val)}>
                    {/* all the links to the diferent webpages */}
                <Tab LinkComponent={NavLink} to="/add" label="Add Car"/>
                <Tab LinkComponent={NavLink} to="/cars" label=" Cars"/>
                </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header