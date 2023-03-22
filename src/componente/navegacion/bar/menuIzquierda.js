import React from "react";
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { Link } from "react-router-dom";

export const MenuIzquierda = ({classes}) => (
    <div className = {classes.list}>
                    <List>
                        <ListItem component={Link} button to="/auth/plan">
                            <i className="material-icons">account_box</i>
                            <ListItemText classes={{primary : classes.listItemText}} primary="Plan" />
                        </ListItem>
                        <Divider/>
                    </List>
                    <List>
                        <ListItem component={Link} button to="/auth/usergame">
                            <i className="material-icons">add_box</i>
                            <ListItemText classes={{primary : classes.listItemText}} primary="User Game" />
                        </ListItem>
                        <ListItem component={Link} button to="/auth/game">
                            <i className="material-icons">menu_book</i>
                            <ListItemText classes={{primary : classes.listItemText}} primary="Game" />
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem component={Link} button to="/auth/usercredential">
                            <i className="material-icons">person_add</i>
                            <ListItemText classes={{primary : classes.listItemText}} primary="User Credential" />
                        </ListItem>
                        <ListItem component={Link} button to="/auth/usercredential">
                            <i className="material-icons">people</i>
                            <ListItemText classes={{primary : classes.listItemText}} primary="User Credential" />
                        </ListItem>
                    </List>
                    
                </div>
)