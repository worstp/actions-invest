import express from 'express';
import StartupService from './service';

export async function getAllStartups(req: express.Request, res: express.Response) {
    const startup = await StartupService.getAllStartups();

    res.status(200).send(startup);
};

export async function getOneStartup(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const startup = await StartupService.getOneStartups(id);

    res.status(200).send(startup);
};

export async function insertOneStartup(req: express.Request, res: express.Response) {
    const { body } = req;
    const startup = await StartupService.insertOneStartups(body);

    res.status(200).send(startup);
};

export async function updateOneStartup(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const { body } = req;

    const startup = await StartupService.updateOneStartups(id, body);

    res.status(200).send(startup);
};

export async function deleteOneStartup(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const startup = await StartupService.deleteOneStartups(id);

    res.status(200).send(startup);
};