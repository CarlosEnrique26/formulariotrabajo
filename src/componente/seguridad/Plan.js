import React, { useState }from "react";
import { Container, Grid, TextField, Typography, Button, Checkbox, Box} from '@material-ui/core';
import style from '../Tool/Style';

const Plan = () => {

    const [usuario, setUsuario] = useState({
        Descripcion : '',
        Duracion : '',
        Precio : ''
        });
    
    const [ErrorDescripcion, setErrorDescripcion] = useState(0);
    const [ErrorDuracion, setErrorDuracion] = useState(0);
    const [ErrorPrecio, setErrorPrecio] = useState(0);

    const ValidateDescripcion = e => {
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
            setErrorDescripcion(1);
        } else if (!minValue) {
            setErrorDescripcion(2);
        } else {
            setErrorDescripcion(3);
        }

        if (onliLet === true && minValue && maxValue) {
            setErrorDescripcion(0);
        }
        setUsuario(value);
    }

    const ValidateDuracion = e => {
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
            setErrorDuracion(1);
        } else if (!minValue) {
            setErrorDuracion(2);
        } else {
            setErrorDuracion(3);
        }

        if (onliLet === true && minValue && maxValue) {
            setErrorDuracion(0);
        }
        setUsuario(value);
    }

    const ValidatePrecio = e => {
        const{name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior,
            [name] : value
        }))
        console.log(value);
        const minValue=value.length>2;
        const maxValue=value.length<20;
        const onliLet=/[0-9,]+[^.]/.test(value);

        console.log("min",minValue);
        console.log("maxValue",maxValue);
        console.log("onliLet",onliLet);

        if (onliLet === false) {
            setErrorPrecio(1);
        } else if (!minValue) {
            setErrorPrecio(2);
        } else {
            setErrorPrecio(3);
        }

        if (onliLet === true && minValue && maxValue) {
            setErrorPrecio(0);
        }
        setUsuario(value);
    }


    const planBoton = e => {
        e.preventDefault();
        console.log("Imprime los valores de memoria temporal de usuario", usuario);
    }

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const defaultProps = {
        m: 0,
        border: 1
    };

    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}> 
                <form style={style.form}>
                    <Box border={1} >
                        <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                                <Box {...defaultProps} borderTop={0} borderRight={0} borderBottom={1} borderLeft={0}>
                                    <Typography component="h1" variant="h5" style={style.Typography}>
                                        Plan
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={12}></Grid>
                    
                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Descripcion
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="Descripcion"
                                        name="Descripcion" 
                                        type="text"
                                        error={ErrorDescripcion}
                                        value={usuario.Descripcion} 
                                        onChange={ValidateDescripcion} 
                                        variant="outlined" 
                                        requared
                                        fullWidth 
                                        label="Ingrese descripcion"
                                        />
                                        {
                                        (ErrorDescripcion===1) && (
                                            <label>
                                                La descripcion solo puede incluir letras.
                                            </label>
                                        )
                                    }
                                    {
                                        (ErrorDescripcion===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                    }
                                    {
                                        (ErrorDescripcion===3) && (
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
                                    Duracion
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="Duracion"
                                        type="text"
                                        label="Ingrese duracion"
                                        requared
                                        name="Duracion"
                                        error={ErrorDuracion} 
                                        value={usuario.Duracion} 
                                        onChange={ValidateDuracion} 
                                        variant="outlined" 
                                        fullWidth 
                                        />
                                        {
                                        (ErrorDuracion===1) && (
                                            <label>
                                                El formato de duracion no es valido
                                            </label>
                                        )
                                    }
                                    {
                                        (ErrorDuracion===2) && (
                                            <label>
                                                El numero minimo es de 6 caracteres.
                                            </label>
                                        )
                                    }
                                    {
                                        (ErrorDuracion===3) && (
                                            <label>
                                                El numero maximo es de 8 caracteres.
                                            </label>
                                        )
                                    }
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Precio
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        name="Precio"
                                        id="Precio"
                                        type="text"
                                        requared 
                                        error={ErrorPrecio}
                                        value={usuario.Precio} 
                                        onChange={ValidatePrecio} 
                                        variant="outlined" 
                                        fullWidth 
                                        label="Ingrese precio"
                                        />
                                        {
                                        (ErrorPrecio===1) && (
                                            <label>
                                                El formato para precio no es valido.
                                            </label>
                                        )
                                    }
                                    {
                                        (ErrorPrecio===2) && (
                                            <label>
                                                El numero minimo es de 2 caracteres.
                                            </label>
                                        )
                                    }
                                    {
                                        (ErrorPrecio===3) && (
                                            <label>
                                                El numero maximo es de 20 caracteres.
                                            </label>
                                        )
                                    }
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <Typography component="h1" variant="h5">
                                    Activo
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box textAlign="center">
                                    <Checkbox name="checked" value={checked} color="primary" onChange={handleChange}  />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={12}>
                                <Box width="50%" margin="auto">
                                    <Button onClick={planBoton} type="submit" color="primary" style={style.form} variant="contained">
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

export default Plan;