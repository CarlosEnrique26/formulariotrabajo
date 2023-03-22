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
        
        const [ErrorTitulo, setErrorTitulo] = useState(0);
        const [ErrorLogo, setErrorLogo] = useState(0);
        const [ErrorDescripcion, setErrorDescripcion] = useState(0);
        const [ErrorVideoURL, setErrorVideoURL] = useState(0);
        const [ErrorIdEmpresa, setErrorIdEmpresa] = useState(0);
        const [ErrorTipoDeIngreso, setErrorTipoDeIngreso] = useState(0);
        const [ErrorSonidoCorrecto, setErrorSonidoCorrecto] = useState(0);
        const [ErrorSonidoIncorrecto, setErrorSonidoIncorrecto] = useState(0);
    
        const ValidateTitulo = e => {
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
                setErrorTitulo(1);
            } else if (!minValue) {
                setErrorTitulo(2);
            } else {
                setErrorTitulo(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorTitulo(0);
            }
            setUsuario(value);
        }
    
        const ValidateLogo = e => {
            const{name, value} = e.target;
            setUsuario( anterior => ({
                ...anterior,
                [name] : value
            }))
            console.log(value);
            const minValue=value.length>4;
            const maxValue=value.length<40;
            const onliLet=/\/(\w+)\/(\w+)(\?{1}.*){4,40}$/.test(value);
    
            console.log("min",minValue);
            console.log("maxValue",maxValue);
            console.log("onliLet",onliLet);
    
            if (onliLet === false) {
                setErrorLogo(1);
            } else if (!minValue) {
                setErrorLogo(2);
            } else {
                setErrorLogo(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorLogo(0);
            }
            setUsuario(value);
        }
    
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

        const ValidateVideoURL = e => {
            const{name, value} = e.target;
            setUsuario( anterior => ({
                ...anterior,
                [name] : value
            }))
            console.log(value);
            const minValue=value.length>4;
            const maxValue=value.length<40;
            const onliLet=/\/(\w+)\/(\w+)(\?{1}.*){4,40}$/.test(value);
    
            console.log("min",minValue);
            console.log("maxValue",maxValue);
            console.log("onliLet",onliLet);
    
            if (onliLet === false) {
                setErrorVideoURL(1);
            } else if (!minValue) {
                setErrorVideoURL(2);
            } else {
                setErrorVideoURL(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorVideoURL(0);
            }
            setUsuario(value);
        }

        const ValidateIdEmpresa = e => {
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
                setErrorIdEmpresa(1);
            } else if (!minValue) {
                setErrorIdEmpresa(2);
            } else {
                setErrorIdEmpresa(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorIdEmpresa(0);
            }
            setUsuario(value);
        }
        
        const ValidateTipoDeIngreso = e => {
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
                setErrorTipoDeIngreso(1);
            } else if (!minValue) {
                setErrorTipoDeIngreso(2);
            } else {
                setErrorTipoDeIngreso(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorTipoDeIngreso(0);
            }
            setUsuario(value);
        }

        const ValidateSonidoCorrecto = e => {
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
                setErrorSonidoCorrecto(1);
            } else if (!minValue) {
                setErrorSonidoCorrecto(2);
            } else {
                setErrorSonidoCorrecto(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorSonidoCorrecto(0);
            }
            setUsuario(value);
        }

        const ValidateSonidoIncorrecto = e => {
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
                setErrorSonidoIncorrecto(1);
            } else if (!minValue) {
                setErrorSonidoIncorrecto(2);
            } else {
                setErrorSonidoIncorrecto(3);
            }
    
            if (onliLet === true && minValue && maxValue) {
                setErrorSonidoIncorrecto(0);
            }
            setUsuario(value);
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
                                <TextField 
                                        id="Titulo"
                                        name="Titulo" 
                                        type="text" 
                                        error={ErrorTitulo}
                                        value={usuario.Titulo} 
                                        onChange={ValidateTitulo} 
                                        variant="outlined" 
                                        required
                                        fullWidth 
                                        label="Ingrese titulo"
                                        />
                                        {
                                        (ErrorTitulo===1) && (
                                            <label>
                                                El Titulo solo puede incluir letras.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorTitulo===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorTitulo===3) && (
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
                                    Logo
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="Logo"
                                        name="Logo" 
                                        type="url" 
                                        error={ErrorLogo}
                                        value={usuario.Logo} 
                                        onChange={ValidateLogo} 
                                        variant="outlined" 
                                        required
                                        fullWidth 
                                        label="Ingrese url del logo"
                                        />
                                        {
                                        (ErrorLogo===1) && (
                                            <label>
                                                El formato "url" no es valido.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorLogo===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorLogo===3) && (
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
                                    VideoURL
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="VideoURL"
                                        name="VideoURL" 
                                        type="url"
                                        error={ErrorVideoURL}
                                        value={usuario.VideoURL} 
                                        onChange={ValidateVideoURL} 
                                        variant="outlined" 
                                        requared
                                        fullWidth 
                                        label="Ingrese url"
                                        />
                                        {
                                        (ErrorVideoURL===1) && (
                                            <label>
                                                La descripcion solo puede incluir letras.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorVideoURL===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorVideoURL===3) && (
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
                                Id de la Empresa  
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="IdEmpresa"
                                        name="IdEmpresa" 
                                        type="text" 
                                        error={ErrorIdEmpresa}
                                        value={usuario.IdEmpresa} 
                                        onChange={ValidateIdEmpresa} 
                                        variant="outlined" 
                                        requared
                                        fullWidth 
                                        label="Ingrese Id de la empresa"
                                        />
                                        {
                                        (ErrorIdEmpresa===1) && (
                                            <label>
                                                La descripcion solo puede incluir letras.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorIdEmpresa===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorIdEmpresa===3) && (
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
                                    Tipo de Ingreso   
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="IdEmpresa"
                                        name="IdEmpresa" 
                                        type="select"
                                        error={ErrorTipoDeIngreso}  
                                        value={usuario.TipoDeIngreso} 
                                        onChange={ValidateTipoDeIngreso} 
                                        variant="outlined" 
                                        fullWidth 
                                        label="Selecione" 
                                        required
                                        />
                                        {
                                        (ErrorTipoDeIngreso===1) && (
                                            <label>
                                                La descripcion solo puede incluir letras.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorTipoDeIngreso===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorTipoDeIngreso===3) && (
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
                                    Sonido Correcto   
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="SonidoCorrecto"
                                        name="SonidoCorrecto" 
                                        type="text"
                                        error={ErrorSonidoCorrecto} 
                                        value={usuario.SonidoCorrecto} 
                                        nChange={ValidateSonidoCorrecto} 
                                        variant="outlined"
                                        required 
                                        fullWidth 
                                        label="Ingrese Id del sonido correcto"
                                        />
                                        {
                                        (ErrorSonidoCorrecto===1) && (
                                            <label>
                                                La descripcion solo puede incluir letras.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorSonidoCorrecto===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorSonidoCorrecto===3) && (
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
                                    Sonido Incorrecto   
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField 
                                        id="SonidoIncorrecto"
                                        name="SonidoIncorrecto" 
                                        type="text"
                                        error={ErrorSonidoIncorrecto} 
                                        value={usuario.SonidoIncorrecto} 
                                        onChange={ValidateSonidoIncorrecto} 
                                        variant="outlined" 
                                        required
                                        fullWidth 
                                        label="Ingrese Id del sonido incorrecto"
                                        />
                                        {
                                        (ErrorSonidoIncorrecto===1) && (
                                            <label>
                                                La descripcion solo puede incluir letras.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorSonidoIncorrecto===2) && (
                                            <label>
                                                El numero minimo es de 4 caracteres.
                                            </label>
                                        )
                                        }
                                        {
                                        (ErrorSonidoIncorrecto===3) && (
                                            <label>
                                                El numero maximo es de 40 caracteres.
                                            </label>
                                        )
                                        }
                            </Grid>
                            <Grid item xs={12} md={2}></Grid>

                            <Grid item xs={12} md={12}>
                                <Box width="50%" margin="auto">
                                    <Button onClick={game} color="primary" style={style.form} type="submit" variant="contained">
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