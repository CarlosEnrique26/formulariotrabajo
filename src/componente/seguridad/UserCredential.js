import React, { useState } from "react";
import {Container, Grid, TextField, Typography, Button, Checkbox, Box} from '@material-ui/core';
import style from '../Tool/Style';


const PlandeUsuario = () => {

    const [usuario, setUsuario] = useState({
        IdCredencial : '',
        PlanDeIdentificacion : '',
        Eliminar : '',
        FinDeFecha : ''
        });
    
    const IngresarValoresMemoria = e => {
        const{name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior, 
            [name] : value
        }))
    }

    const planusuario= e => {
        e.preventDefault();
        console.log("Imprime los valores de memoria temporal de usuario", usuario);
    }

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const defaultProps = {
        bgcolor: 'background.paper',
        m: 0,
        border: 1
    };

    return(
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <form style={style.form}>
                    <Box {...defaultProps} border={1}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Box {...defaultProps} borderBottom={1} borderTop={0} borderRight={0} borderLeft={0}>
                                <Typography component="h1" variant="h5" style={style.Typography}>
                                    Plan de Usuario
                                </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Id Credencial de Usuario
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="IdCredencial" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingrese Id credencial de usuario "/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Plan de Identificacion
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="PlanDeIdentificacion" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Plan de identificacion"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Eliminar
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="Eliminar" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Eliminar"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>
                        
                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Fin de Fecha
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField name="FinDeFecha" value={usuario.Id} onChange={IngresarValoresMemoria} variant="outlined" fullWidth label="Ingrese fin de fecha"/>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Es Gratis    
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box textAlign="center">
                                    <Checkbox name="checked" value={checked} color="primary" onChange={handleChange}/>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={12}>
                                <Box width="50%" margin="auto">
                                    <Button onClick={planusuario} color="primary" style={style.form} type="submit" variant="contained">
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

export default PlandeUsuario;