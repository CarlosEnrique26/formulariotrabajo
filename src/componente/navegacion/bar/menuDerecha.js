import { ListItem, List, ListItemText, Divider } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'



export const MenuDerecha = ({classes}) => (
    <div className = {classes.list}>
        <List>
            <List>
            <ListItem component={Link} button to="/auth/plan">
                <i className="material-icons">account_box</i>
            <ListItemText classes={{primary : classes.listItemText}} primary="Perfil" />
                </ListItem>
                <Divider/>
            </List>
            <List>
                <ListItem component={Link} button to="/curso/nuevo">
                    <i className="material-icons">add_box</i>
                    <ListItemText classes={{primary : classes.listItemText}} primary="Salir" />
                </ListItem>
            </List>
        </List>
    </div>
)