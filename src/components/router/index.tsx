import React, { useState } from "react";
import Dashboard from "../../pages/dashboard";
import Home from "../../pages/home";
import Login from "../../pages/login"
import Sobre from "../../pages/sobre";

enum RouterPages {
    'dashboard' = 'Dashboard',
    'home' = 'home',
    'sobre' = 'sobre',
    'login' = 'Login'
}

const Router = () => {
    const [getPaginaAtual, setPaginaAtual] = 
        useState<RouterPages>(RouterPages.home)
    
    const renderizarBotoes = () => (
        <div>
            <button onClick={() => setPaginaAtual(RouterPages.dashboard)}>Inicio</button>
            <button onClick={() => setPaginaAtual(RouterPages.home)}>Inicio</button>
            <button onClick={() => setPaginaAtual(RouterPages.sobre)}>Sobre</button>
        </div>
    )

    const renderizarPagina = () => {
        switch (getPaginaAtual) {
            case RouterPages.dashboard: return <Dashboard />
            case RouterPages.home: return <Home />
            case RouterPages.sobre: return <Sobre />
            case RouterPages.login: return <Login />
            default: return <Home />
        }
    }

    return (
        <div>
            {renderizarBotoes()}
            {renderizarPagina()}
        </div>
    )
}

export default Router;