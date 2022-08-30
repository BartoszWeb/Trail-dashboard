import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import ConvertedUsers from "./views/ConvertedUsers";
import BestPages from "./views/BestPages";
import Error from "./views/Error";
import { GlobalStyle } from "./styles/globalStyles";
import MainTemplate from "./components/templates/MainTemplate/MainTemplate";
import { ThemeProvider } from "./styles/themeProvider";
import { Provider } from "react-redux";
import { store } from "./store/store";


function App() {
    return (
        <Provider store={ store }>
            <ThemeProvider>
                <Router>
                    <GlobalStyle/>
                    <MainTemplate>
                        <Fragment>
                            <Routes>
                                <Route path="/" element={ <Dashboard/> }/>
                                <Route path="/converted-users" element={ <ConvertedUsers/> }/>
                                <Route path="/best-selling-pages" element={ <BestPages/> }/>
                                <Route path="*" element={ <Error/> }/>
                            </Routes>
                        </Fragment>
                    </MainTemplate>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;