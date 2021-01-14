import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CardScreen from './screens/CardScreen'
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container className='p-l-r-0'>
                    <Route path='/login' component={ LoginScreen } exact />
                    <Route path='/register' component={ RegisterScreen } exact />
                    <Route path='/profile' component={ ProfileScreen } exact />
                    <Route path='/product/:id' component={ ProductScreen } exact />
                    <Route path='/cart/:id?' component={ CardScreen } exact />
                    <Route path='/' component={ HomeScreen } exact />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
