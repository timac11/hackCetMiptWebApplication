import React, {useState} from 'react';
import {Box, Checkbox, Divider, FormControlLabel, FormGroup, makeStyles, Typography} from "@material-ui/core";
import PricePicker from "../../PricePicker/PricePicker";
import IntervalPicker from "../../IntervalPicker/IntervalPicker";
import Button from "@material-ui/core/Button";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const useStyles = makeStyles(theme => ({
    checkBoxLabel: {
        fontSize: '12px'
    }
}))

function Customer(props) {
    const [startDate, setStartDate] = useState(new Date());
    const classes = useStyles()

    return (
        <>
            <Box>
                <Typography variant={"h5"}>
                    <b>Фильтры:</b>
                </Typography>
                <Typography>
                    Тип продукта:
                </Typography>
                <Box ml={1}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={true}/>}
                            label="Библиотека"
                            classes={{
                                label: classes.checkBoxLabel
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={true}/>}
                            label="Коммерческое решение"
                            classes={{
                                label: classes.checkBoxLabel
                            }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={true}/>
                            }
                            label="Код"
                            classes={{
                                label: classes.checkBoxLabel
                            }}
                        />
                    </FormGroup>
                </Box>
            </Box>
            <br />
            <Box>
                <Typography>
                    Минимальная средняя оценка:
                </Typography>
                <Rater />
            </Box>
            <br />
            <Box>
                <Typography>
                    Стоимость:
                </Typography>
                <PricePicker />
            </Box>
            <Box>
                <Typography>
                    Кол-во скачиваний:
                </Typography>
                <IntervalPicker/>
            </Box>
            <Divider/>
            <br />
            <Box alignSelf={'center'} >
                <Button variant={"contained"} color={"primary"}>
                    Применить
                </Button>
            </Box>
        </>
    );
}

export default Customer;
