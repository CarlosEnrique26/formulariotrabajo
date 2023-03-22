import React, { useState } from 'react';
import { IconButton, makeStyles, Toolbar, Typography, Button, Avatar, Drawer } from '@material-ui/core';
import FotoUsuarioTemp from "../../../logo.svg";
import { MenuIzquierda } from './menuIzquierda';
import { MenuDerecha } from './menuDerecha';



const useStyles = makeStyles((theme) => ({
    seccionDesktop : {
        display : "none",
        [theme.breakpoints.up("md")] : {
            display : "flex"
        }
    },
    seccionMobile : {
        display : "flex",
        [theme.breakpoints.up("md")] : {
            display : "none" 
        }
    },
    grow :{
        flexGrow : 1
    },
    avatarSize : {
        width : 40,
        height : 40
    },
    list : {
        width : 250
    },
    listItemText : {
        fontSize : "14px",
        fontWeight : 600,
        paddingLeft : "15px",
        color : "#212121"
    }

}))

const BarSesion = () => {

    const classes = useStyles();
    const [abrirMenuIzquierda, setabrirMenuIzquierda] = useState(false);

    const [abrirMenuDerecha, setabrirMenuDerecha] = useState(false);


    const cerrarMenuIzquierda = () => {
        setabrirMenuIzquierda(false);
    }

    const abrirMenuIzquierdaAction = () => {
        setabrirMenuIzquierda(true);
    }

    const cerrarMenuDerecha = () => {
        setabrirMenuDerecha(false);
    }

    const abrirMenuDerechaAction = () => {
        setabrirMenuDerecha(true);
    }

    

    return (
        <React.Fragment>
            <Drawer
                open = {abrirMenuIzquierda}
                onClose = {cerrarMenuIzquierda}
                anchor = "left"
                >
                <div 
                    className = {classes.list} 
                    onKeyDown={cerrarMenuIzquierda} 
                    onClick={cerrarMenuIzquierda}
                    >
                    <MenuIzquierda 
                        classes={classes}
                        />
                </div>
            </Drawer>
            <Drawer
                open = {abrirMenuDerecha}
                onClose = {cerrarMenuDerecha}
                anchor = "right"
                >
                <div 
                    className = {classes.list} 
                    onClick={cerrarMenuDerecha} 
                    onKeyDown={cerrarMenuDerecha}
                    >
                    <MenuDerecha 
                        classes={classes} 
                        />
                </div>
            </Drawer>
            <Toolbar>
                <IconButton color="inherit" onClick={abrirMenuIzquierdaAction}>
                    <i className="material-icons">menu</i>
                </IconButton>

                <Typography variant="h6">Plan de Registro</Typography>
                <div className={classes.grow}></div>
                
                <div className={classes.seccionDesktop}>
                <Button color="inherit">
                    Salir
                </Button>
                <Button color="inherit">
                    {"Nombre de Usuario"}
                </Button>
                <Avatar src={FotoUsuarioTemp}>
                </Avatar>
                </div>

                <div className={classes.seccionMobile}>
                    <IconButton color="inherit" onClick={abrirMenuDerechaAction}>
                        <i className='material-icons'>more_vert</i>
                    </IconButton>
                </div>
            </Toolbar>
        </React.Fragment>
        
    );
};

export default BarSesion;