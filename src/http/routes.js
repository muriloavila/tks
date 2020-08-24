import express from 'express';
import SpaceController from '../database/controllers/space';
const routes = express.Router();
const spaceController = new SpaceController();


//GET
routes.get('/', (req, res) => spaceController.listAll(req, res));
routes.get('/space/next', (req, res) => spaceController.getNext(req, res));
routes.get('/space/', (req, res) => spaceController.findOneByName(req, res));
routes.get('/space/:id', (req, res) => spaceController.findOneById(req, res));
//POST
routes.post('/space', (req, res) => spaceController.create(req, res));

//PUT
routes.patch('/space', (req, res) => spaceController.update(req, res));
routes.patch('/space/:id', (req, res) => spaceController.updateById(req, res));

//DELETE
routes.delete('/space/:id', (req, res) => spaceController.delete(req, res));
export default routes;