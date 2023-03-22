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

    const [ErrorIdCredencial, setErrorIdCredencial] = useState(0);
    const [ErrorPlanDeIdentificacion, setErrorPlanDeIdentificacion] = useState(0);
    const [ErrorEliminar, setErrorEliminar] = useState(0);
    const [ErrorFinDeFecha, setErrorFinDeFecha] = useState(0);
    
        const ValidateIdCredencial = e => {
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
                setErrorIdCredencial(1);
            } else if (!minValue) {
                setErrorIdCredencial(2);
            } else {
                setErrorIdCredencial(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorIdCredencial(0);
            }
            setUsuario(value);
        }

        const ValidatePlanDeIdentificacion = e => {
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
                setErrorPlanDeIdentificacion(1);
            } else if (!minValue) {
                setErrorPlanDeIdentificacion(2);
            } else {
                setErrorPlanDeIdentificacion(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorPlanDeIdentificacion(0);
            }
            setUsuario(value);
        }

        const ValidateEliminar = e => {
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
                setErrorEliminar(1);
            } else if (!minValue) {
                setErrorEliminar(2);
            } else {
                setErrorEliminar(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorEliminar(0);
            }
            setUsuario(value);
        }

        const ValidateFinDeFecha = e => {
            const{name, value} = e.target;
            setUsuario( anterior => ({
                ...anterior,
                [name] : value
            }))
            console.log(value);
            const minValue=value.length>4;
            const maxValue=value.length<16;
            const onliLet=/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(value);
    
            console.log("min",minValue);
            console.log("maxValue",maxValue);
            console.log("onliLet",onliLet);
    
            if (onliLet === false) {
                setErrorFinDeFecha(1);
            } else if (!minValue) {
                setErrorFinDeFecha(2);
            } else {
                setErrorFinDeFecha(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorFinDeFecha(0);
            }
            setUsuario(value);
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
                                <TextField 
                                        id="IdCredencial"
                                        name="IdCredencial" 
                                        type="text"
                                        error={ErrorIdCredencial}
                                        value={usuario.IdCredencial} 
                                        onChange={ValidateIdCredencial} 
                                        variant="outlined" 
                                        requared
                                        fullWidth 
                                        label="Ingrese Id credencial"
                                        />
                                        {
                                        (ErrorIdCredencial===1) && (
                                            <label>
                                                El formato de Id no es valido
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorIdCredencial===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorIdCredencial===3) && (
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
                                    Plan de Identificacion
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="PlanDeIdentificacion"
                                        name="PlanDeIdentificacion" 
                                        type="text"
                                        error={ErrorPlanDeIdentificacion}
                                        value={usuario.PlanDeIdentificacion} 
                                        onChange={ValidatePlanDeIdentificacion} 
                                        variant="outlined" 
                                        requared
                                        fullWidth 
                                        label="Ingrese identificacion"
                                        />
                                        {
                                        (ErrorPlanDeIdentificacion===1) && (
                                            <label>
                                                El formato ingresado no es valido
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorPlanDeIdentificacion===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorPlanDeIdentificacion===3) && (
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
                                    Eliminar
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                        id="Eliminar"
                                        name="Eliminar" 
                                        type="text"
                                        error={ErrorEliminar}
                                        value={usuario.Eliminar} 
                                        onChange={ValidateEliminar} 
                                        variant="outlined" 
                                        requared
                                        fullWidth 
                                        label="Ingrese valor a eliminar"
                                        />
                                        {
                                        (ErrorEliminar===1) && (
                                            <label>
                                                El formato ingresado no es valido
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorEliminar===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorEliminar===3) && (
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
                                    Fin de Fecha
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="FinDeFecha"
                                        name="FinDeFecha" 
                                        type="text"
                                        error={ErrorFinDeFecha}
                                        value={usuario.FinDeFecha} 
                                        onChange={ValidateFinDeFecha} 
                                        variant="outlined" 
                                        requared
                                        fullWidth 
                                        label="Ingrese fin de fecha"
                                        />
                                        {
                                        (ErrorFinDeFecha===1) && (
                                            <label>
                                                El formato ingresado no es valido
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorFinDeFecha===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorFinDeFecha===3) && (
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