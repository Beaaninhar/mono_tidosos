import * as HealthcheckController from '../app/controllers/healthcheck/index';
import express from 'express';

const routes = express.Router();

routes.get("/healthcheck", HealthcheckController.healthcheck);

export default routes;
