import Space from '../models/space';

class SpaceController {
    //create
    async create(req, res) {
        try {
            const space = await Space.create(req.body);
            return res.status(201).send({space: space});
        } catch (error) {
            return res.status(400).send({error: 'Space was not created', message: error});
        }
    }
    //listAll
    async listAll(req, res) {
        try {
            const spaces = await Space.find({});
            return res.status(200).send({spaces: spaces});
        } catch (error) {
            console.log(error);
            return res.status(404).send({ error: 'Spaces not found' });
        }
    }
    //findOne
    async findOneByName(req, res){
        try {
            const space = await Space.findOne({name: {$regex: new RegExp(req.query.name), $options: 'i'}});
            return res.status(200).send({space: space});
        } catch (error) {
            return res.status(404).send({ error: 'Spaces not found' });
        }
    }
    //findNext
    async getNext(req, res) {
        try {
            const nextSpace = await Space.findOne({projeto: ""});
            return res.status(200).send({space: nextSpace});
        } catch (error) {
            return res.status(404).send({ error: 'Space not found' });
        }
    }

    async update(req, res) {
        try {
            const space = await Space.findOneAndUpdate({name: req.body.name}, req.body, (err, doc) => {
                if(err){
                    return res.send(500, {error: 'Space not Updated'});
                }
                return res.status(202).send({space: doc});
            });
        } catch (error) {
            return res.status(404).send({ error: 'Space not find' });
        }
    }

    async delete(req, res) {
        try {
            const space = await Space.findOneAndRemove({_id: req.params.id});
            return res.status(200).send({});
        } catch (error) {
            return res.status(500).send({error: error.message});
        }
    }

    async findOneById(req, res) {
        try {
            const space = await Space.findById(req.params.id);
            return res.status(200).send(space);
        } catch (error) {
            return res.status(404).send({ error: 'Space not found' });
        }
    }
}

export default SpaceController;