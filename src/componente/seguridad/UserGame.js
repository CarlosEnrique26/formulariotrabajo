import React, { useState } from "react";
import { Container, Grid, TextField, Typography, Button, Box } from '@material-ui/core';
import style from '../Tool/Style';

const UserGame = () => {
    const [usuario, setUsuario] = useState({
        IdJuego : '',
        Email : '',
        NombreDeUsuario : '',
        Contraseña : ''
        });
    
        const [ErrorIdJuego, setErrorIdJuego] = useState(0);
        const [ErrorEmail, setErrorEmail] = useState(0);
        const [ErrorNombreDeUsuario, setErrorNombreDeUsuario] = useState(0);
        const [ErrorContraseña, setErrorContraseña] = useState(0);
    
        const ValidateIdJuego = e => {
            const{name, value} = e.target;
            setUsuario( anterior => ({
                ...anterior,
                [name] : value
            }))
            console.log(value);
            const minValue=value.length>4;
            const maxValue=value.length<16;
            const onliLet=/^[a-zA-Z0-9\_\-]{4,16}$/.test(value);
    
            console.log("min",minValue);
            console.log("maxValue",maxValue);
            console.log("onliLet",onliLet);
    
            if (onliLet === false) {
                setErrorIdJuego(1);
            } else if (!minValue) {
                setErrorIdJuego(2);
            } else {
                setErrorIdJuego(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorIdJuego(0);
            }
            setUsuario(value);
        }

        const ValidateEmail = e => {
            const{name, value} = e.target;
            setUsuario( anterior => ({
                ...anterior,
                [name] : value
            }))
            console.log(value);
            const minValue=value.length>4;
            const maxValue=value.length<40;
            const onliLet=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
    
            console.log("min",minValue);
            console.log("maxValue",maxValue);
            console.log("onliLet",onliLet);
    
            if (onliLet === false) {
                setErrorEmail(1);
            } else if (!minValue) {
                setErrorEmail(2);
            } else {
                setErrorEmail(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorEmail(0);
            }
            setUsuario(value);
        }

        const ValidateNombreDeUsuario = e => {
            const{name, value} = e.target;
            setUsuario( anterior => ({
                ...anterior,
                [name] : value
            }))
            console.log(value);
            const minValue=value.length>4;
            const maxValue=value.length<40;
            const onliLet=/^[a-zA-ZÀ-ÿ\s]{4,40}$/.test(value);
    
            console.log("min",minValue);
            console.log("maxValue",maxValue);
            console.log("onliLet",onliLet);
    
            if (onliLet === false) {
                setErrorNombreDeUsuario(1);
            } else if (!minValue) {
                setErrorNombreDeUsuario(2);
            } else {
                setErrorNombreDeUsuario(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorNombreDeUsuario(0);
            }
            setUsuario(value);
        }

        const ValidateContraseña = e => {
            const{name, value} = e.target;
            setUsuario( anterior => ({
                ...anterior,
                [name] : value
            }))
            console.log(value);
            const minValue=value.length>4;
            const maxValue=value.length<16;
            const onliLet=/^.{4,16}$/.test(value);
    
            console.log("min",minValue);
            console.log("maxValue",maxValue);
            console.log("onliLet",onliLet);
    
            if (onliLet === false) {
                setErrorContraseña(1);
            } else if (!minValue) {
                setErrorContraseña(2);
            } else {
                setErrorContraseña(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorContraseña(0);
            }
            setUsuario(value);
        }

    const usergame= e => {
        e.preventDefault();
        console.log("Imprime los valores de memoria temporal de usuario", usuario);
    }

    const defaultProps = {
        bgcolor: 'background.paper',
        m: 0,
        border: 1,
    };

    return(
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <form style={style.form}>
                    <Box {...defaultProps} border={1} borderRadius={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                            <Box {...defaultProps} borderBottom={1} borderTop={0} borderRight={0} borderLeft={0}>
                                <Typography component="h1" variant="h5" style={style.Typography}>
                                    Usuario del Juego
                                </Typography>
                            </Box>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Id del Juego
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="IdJuego"
                                        name="IdJuego" 
                                        type="text"
                                        error={ErrorIdJuego}
                                        value={usuario.IdJuego} 
                                        onChange={ValidateIdJuego} 
                                        variant="outlined" 
                                        requared
                                        fullWidth 
                                        label="Ingrese Id del Juego"
                                        />
                                        {
                                        (ErrorIdJuego===1) && (
                                            <label>
                                                El formato de Id es incorrecto
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorIdJuego===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorIdJuego===3) && (
                                            <label>
                                                El numero maximo es de 16 caracteres.
                                            </label>
                                        )
                                        }
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>
                            
                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Email
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="Email"
                                        name="Email" 
                                        type="email"
                                        error={ErrorEmail}
                                        value={usuario.Email} 
                                        onChange={ValidateEmail} 
                                        variant="outlined" 
                                        requared
                                        fullWidth 
                                        label="Ingrese email"
                                        />
                                        {
                                        (ErrorEmail===1) && (
                                            <label>
                                                El formato del "email" no es valido ej: xxxx@xxxxx.xxx
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorEmail===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorEmail===3) && (
                                            <label>
                                                El numero maximo es de 40 caracteres.
                                            </label>
                                        )
                                        }
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Nombre de Usuario
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="NombreDeUsuario"
                                        name="NombreDeUsuario" 
                                        type="text"
                                        error={ErrorNombreDeUsuario}
                                        value={usuario.NombreDeUsuario} 
                                        onChange={ValidateNombreDeUsuario} 
                                        variant="outlined" 
                                        requared
                                        fullWidth 
                                        label="Ingrese Nombre de usuario"
                                        />
                                        {
                                        (ErrorNombreDeUsuario===1) && (
                                            <label>
                                                El formato del "nombre" es incorrecto
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorNombreDeUsuario===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorNombreDeUsuario===3) && (
                                            <label>
                                                El numero maximo es de 40 caracteres.
                                            </label>
                                        )
                                        }
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>
                        
                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Contraseña
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="Contraseña"
                                        name="Contraseña" 
                                        type="password"
                                        error={ErrorContraseña}
                                        value={usuario.Contraseña} 
                                        onChange={ValidateContraseña} 
                                        variant="outlined" 
                                        requared
                                        fullWidth 
                                        label="Ingrese contraseña"
                                        />
                                        {
                                        (ErrorContraseña===1) && (
                                            <label>
                                                El formato de contraseña no es valido
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorContraseña===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorContraseña===3) && (
                                            <label>
                                                El numero maximo es de 16 caracteres
                                            </label>
                                        )
                                        }
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={12}>
                                <Box width="50%" margin="auto">
                                    <Button onClick={usergame} type="submit" variant="contained" color="primary" style={style.form} >
                                        Enviar
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12}></Grid>
                        </Grid>
                    </Box>
                </form>
            </div>
        </Container>
    );
}

export default UserGame;