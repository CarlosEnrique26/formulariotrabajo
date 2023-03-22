import React, { useState } from "react";
import {Container, Grid, TextField, Typography, Button, Box} from '@material-ui/core';
import style from '../Tool/Style';

const Game = () => {
    const [usuario, setUsuario] = useState({
        Titulo : '',
        Logo : '',
        Descripcion : '',
        VideoURL : '',
        IdEmpresa : '',
        TipoDeIngreso : '',
        SonidoCorrecto : '',
        SonidoIncorrecto : ''
        });
    
    const IngresarValoresMemoria = e => {
        const{name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const game= e => {
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
                    <Box {...defaultProps} border={1}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                            <Box {...defaultProps} borderBottom={1} borderTop={0} borderRight={0} borderLeft={0} >
                                <Typography component="h1" variant="h5" style={style.Typography}>
                                    Juego
                                </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Titulo
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="Titulo" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingrese titulo"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Logo
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="Logo" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingrese url del logo" type="url"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Descripcion
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="Descripcion" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingrese descripcion"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>
                        
                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    VideoURL
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="VideoURL" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingrese url"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                Id de la Empresa  
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="IdEmpresa" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingrese Id de la empresa"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Tipo de Ingreso   
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="TipoDeIngreso" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Selecione" type="select"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Sonido Correcto   
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="SonidoCorrecto" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingrese Id del sonido correcto"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Sonido Incorrecto   
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="SonidoIncorrecto" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingrese Id del sonido incorrecto"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={12}>
                                <Box width="50%" margin="auto">
                                    <Button onClick={game} color="primary" style={style.Grid} type="submit" variant="contained">
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

export default Game;