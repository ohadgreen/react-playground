import React from 'react';
import './RiderTest.css';
import { Eject, Info } from '@material-ui/icons'

export const RiderTest = (props) => {
    // const name = 'Tom Dumolin'
    return (        
            <div className="box">
                <b style={{ 
                    position: "absolute",
                    top: "3px",
                    marginLeft:"auto",
                    marginRight: "auto",
                    width: "120px"
                    }}>{props.name}</b> 
            
            <Info 
                fontSize="small"
                style={{ color: "green", position: "absolute", bottom: "0px", left: "10px", iconHoverColor: '#55ff55' }}
                onClick={() => console.log(props.name + ' info')}
                // onClick={() => props.onClick(console.log(props.name + ' info'))}
                />
            <Eject
                fontSize="small"
                style={{ position: "absolute", bottom: "0px", right: "10px" }}
                onClick={() => props.onClick(props, 'add')}
            />
            
            </div>        
    )
}