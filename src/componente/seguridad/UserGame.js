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
    
    const IngresarValoresMemoria = e => {
        const{name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior,
            [name] : value
        }))
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
                                <TextField name="IdJuego" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingrese Id del Juego"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>
                            
                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Email
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="Email" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingrese su email" type="email"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Nombre de Usuario
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="NombreDeUsuario" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingrese nombre de usuario"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>
                        
                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Contraseña
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="Contraseña" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingree contraseña" type="password"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={12}>
                                <Box width="50%" margin="auto">
                                    <Button onClick={usergame} type="submit" variant="contained" color="primary"  >
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