import { ThemeProvider } from '@material-ui/styles';
import Main from "../dashboard/main";

const theme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

export default function Theming() {
    return (
        <ThemeProvider theme={theme}>
            <Main/>
        </ThemeProvider>
    );
}