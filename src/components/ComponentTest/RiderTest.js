import React from 'react';
import './RiderTest.css';
import { Eject, Info } from '@material-ui/icons'

export const RiderTest = () => {
    const name = 'Tom Dumolin'
    return (        
            <div className="rider">
            <div 
                style={{ 
                    textAlign: "center",
                    top: "10px"
                    }}>
                <b>{name}</b>
            </div>
                                            
            <Info 
                fontSize="small"
                style={{ color: "blue", position: "absolute", bottom: "10px", left: "10px" }}
                onClick={() => console.log(name)}
                />
            <Eject
                fontSize="small"
                style={{ position: "absolute", bottom: "10px", right: "10px" }}
                onClick={() => console.log(name)}
            />
            
            </div>        
    )
}