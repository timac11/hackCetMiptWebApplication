import React from 'react';
import {Box, makeStyles} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Search} from "@material-ui/icons";
import {NavLink} from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import FullScreenDialog from "../dialog/Dialog";
import Button from "@material-ui/core/Button/Button";
import {products} from "../../pages/integrator-workshop/example";

const stubData = products

const useStyles = makeStyles(theme => ({
    content: {
        width: '60vw',
        height: '100vh',
        overflowY: 'scroll',
        position: 'fixed',
        left: '20vw',
        borderTop: '1px solid rgba(0,0,0,0.5)'
    },
    toolbar: {
        display: "flex"
    },
    createImageButton: {
        height: "34px",
        marginLeft: "12px",
        marginTop: "14px"
    }
}))

const ListOfProductsForDeveloper = () => {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = React.useState(false);
    return (
        <>
            <Box display="flex" m={1}>
                <FormControl fullWidth={true}>
                    <InputLabel htmlFor="input-with-icon-adornment">Поиск продуктов:</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <Search/>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button className={classes.createImageButton}
                        variant={"contained"}
                        color={"secondary"}
                        onClick={() => setOpenDialog(true)}>
                    Создать
                </Button>
            </Box>
            {
                stubData.map((value, index) => (
                    <NavLink to={`product/${value.id}`} key={index} style={{textDecoration: 'none'}}>
                        <ProductCard
                            {...value}
                        />
                    </NavLink>))
            }
            <FullScreenDialog open={openDialog} handleClose={() => setOpenDialog(false)}/>
        </>
    )
};


export default ListOfProductsForDeveloper;
