import express from 'express';
import jogos from './jogosRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('API de Jogos');
    });

    app.use(express.json(), jogos);
};

export default routes;
