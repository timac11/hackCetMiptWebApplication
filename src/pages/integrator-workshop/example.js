import React, {Component} from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import Box from "@material-ui/core/Box";
import {createMuiTheme, makeStyles, MuiThemeProvider, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import './styles.css';
import Button from "@material-ui/core/Button/Button";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import {Search} from "@material-ui/icons";

const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            h5: {
                fontSize: '16px'
            },
            body1: {
                fontSize: '12px'
            },
            body2: {
                fontSize: '10px'
            }
        }
    }
})

export const products = [
    {
        id: 0,
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://hholdorf.files.wordpress.com/2015/09/physics-the-nature-of-sound.jpg',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20,
        keywords: ['Sound', 'Music', 'MP3', 'Voice Recognition'],
        averageRate: 4,
        type: 'библиотека'
    },
    {
        id: 1,
        name: 'Генерация лиц несуществующих людей',
        tariff: 'бессрочно',
        price: 50000,
        price2: 1000,
        avatarSrc: 'https://cameralabs.org/media/lab18/12/21-2/iskusstvennyy-intellekt-sozdaet-portrety-nesuschestvuyuschih-lyudey_4.jpg',
        description: 'Данный продукт представляет собой библиотеку для генерации лиц несуществующих людей в хорошем качестве',
        RAM: 5,
        cores: 1,
        performance: 1,
        memory: 10,
        keywords: ['ML', 'CV', 'Python'],
        averageRate: 4,
        type: 'библиотека'
    },
    {
        id: 2,
        name: 'Мессенджер с высокой степенью шифрования',
        tariff: 'ежедневный',
        price: 5000,
        price2: 200,
        avatarSrc: 'https://www.pngkey.com/png/detail/443-4438515_the-best-ressource-of-free-emoji-png-clipart.png',
        description: 'Это решение представляет собой проект для надежного обмена текстовыми и фаловыми сообщениями.',
        RAM: 1,
        cores: 1,
        performance: 1,
        memory: 2,
        keywords: ['Cryptography', 'Python', 'HTML'],
        averageRate: 5,
        type: 'продукт'
    },
    {
        id: 3,
        name: 'Центральная часть библиотеки для реализации дополненной реальности.',
        tariff: 'бессрочно',
        price: 5000,
        price2: 0,
        avatarSrc: 'https://www.ittechnologynews24.com/wp-content/uploads/2019/07/AR-VR.jpg',
        description: 'С помощью этой библиотеки можно создавать решения в сфере AR',
        RAM: 2.7,
        cores: 4,
        performance: 2,
        memory: 60,
        keywords: ['AI', 'ML', 'CV', 'Python', 'C++'],
        averageRate: 3,
        type: 'библиотека'
    },
    {
        id: 4,
        name: 'Система контроля электроэнергии в доме',
        tariff: 'бессрочно',
        price: 100000,
        price2: 1000,
        avatarSrc: 'https://northcyprussale.ru/uploads/s/d/o/n/don2antj3c4t/img/full_FzgLDdhq.jpg',
        description: 'Здесь реализован функционал для контроля электроэнергии (в том числе домашей) для девайсов Apple Home.',
        RAM: 1,
        cores: 1,
        performance: 1,
        memory: 10,
        keywords: ['Energetics', 'Radiotechnics', 'ML', 'C', 'C++'],
        averageRate: 2,
        type: 'библиотека'
    },
    {
        id: 5,
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20,
        keywords: ['A', 'D', 'C', 'D', 'E', 'R'],
        averageRate: 4,
        type: 'библиотека'
    },
    {
        id: 6,
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20,
        keywords: ['A', 'D', 'C', 'D', 'E', 'R'],
        averageRate: 4,
        type: 'библиотека'
    },
    {
        id: 7,
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20,
        keywords: ['A', 'D', 'C', 'D', 'E', 'R'],
        averageRate: 4,
        type: 'библиотека'
    },
    {
        id: 8,
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20,
        keywords: ['A', 'D', 'C', 'D', 'E', 'R'],
        averageRate: 4,
        type: 'библиотека'
    },
    {
        id: 9,
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20,
        keywords: ['A', 'D', 'C', 'D', 'E', 'R'],
        averageRate: 4,
        type: 'библиотека'
    },
]

// fake data generator
const getItems = (count, offset = 0) => {
    return Array.from({length: count}, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: <MuiThemeProvider theme={theme}><Paper>
            <Box display={'flex'} p={1}>
                <Box mx={1}>
                    <img src={products[k].avatarSrc} alt={'Product image'} className={'card'}/>
                </Box>
                <Box textOverflow={'ellipsis'} mr={1}>
                    <Typography variant={"h5"}>
                        {products[k].name}
                    </Typography>
                    <Typography variant={"body2"}>
                        {products[k].description}
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
                    <Box>
                        <Typography>
                            <b>Тарификация:</b>
                        </Typography>
                        <Typography>
                            {products[k].tariff}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>
                            <b>Стоимость:</b>
                        </Typography>
                        <Typography>
                            {products[k].price}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Paper></MuiThemeProvider>
    }));
}

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    margin: `0 0 ${grid}px 0`,
    // background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 350,

});

export class Example extends Component {

    state = {
        items: getItems(10),
        selected: getItems(0, 1)
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const {source, destination} = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = {items};

            if (source.droppableId === 'droppable2') {
                state = {selected: items};
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
            this.props.callback({
                items: result.droppable,
                selected: result.droppable2
            })
        }
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <>
                <Box display="flex" m={1}>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="input-with-icon-adornment">Поиск продуктов:</InputLabel>
                        <Input style={{marginTop: "8px"}}
                                id="input-with-icon-adornment"
                               startAdornment={
                                <InputAdornment position="start">
                                    <Search/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Box ml={1}>
                        <Button styles={{marginLeft: "8px"}}
                                variant={"contained"}
                                color={"secondary"}
                                onClick={() => window.open('http://localhost:5000')}>
                            Подобрать
                        </Button>
                    </Box>
                </Box>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Box p={1}>
                        <Box display={'flex'} justifyContent={'space-evenly'}>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                <Typography variant={"h5"}>
                                    Все продукты
                                </Typography>
                                <Droppable droppableId="droppable">
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            style={getListStyle(snapshot.isDraggingOver)}>
                                            {this.state.items.map((item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={getItemStyle(
                                                                snapshot.isDragging,
                                                                provided.draggableProps.style
                                                            )}
                                                        >
                                                            {item.content}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                <Typography variant={"h5"}>
                                    Собираемый набор
                                </Typography>
                                <Droppable droppableId="droppable2">
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            style={getListStyle(snapshot.isDraggingOver)}>
                                            {this.state.selected.map((item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={getItemStyle(
                                                                snapshot.isDragging,
                                                                provided.draggableProps.style
                                                            )}>
                                                            {item.content}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </Box>
                        </Box>
                    </Box>
                </DragDropContext>
            </>
        );
    }
}
