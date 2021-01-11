import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CardScreen from './screens/CardScreen'

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Route path='/' component={ HomeScreen } exact />
                    <Route path='/product/:id' component={ ProductScreen } exact />
                    <Route path='/cart/:id?' component={ CardScreen } exact />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
