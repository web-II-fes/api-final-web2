import * as express from 'express';
import { paqueteSchema } from '../schemas/paquete';

const router = express.Router();

router.get('/paquete', async (req, res) => {
	try {
		let paquete = await paqueteSchema.find();
		res.send(paquete);
	} catch (err) {
		throw err;
	}
});

router.get('/paqueteId/:id', async (req, res) => {
	let idPaquete = req.params.id;
	try {
		let paquetes = await paqueteSchema.findById(idPaquete);
		res.send(paquetes);
	} catch (err) {
		throw err;
	}
});

router.post('/paquete', async (req, res) => {
	try {
		const paquete = new paqueteSchema(req.body);
		let paqueteNuevo = await paquete.save();

		res.send(paqueteNuevo);
	} catch (err) {
		throw err;
	}
});

router.put('/paquete/:id', async (req, res, next) => {
	try {
		let paquete = await paqueteSchema.findByIdAndUpdate(req.params.id, req.body);

		res.send(paquete);
	} catch (err) {
		throw err;
	}
});
router.delete('/paquete/:_id', async (req, res, next) => {
	
	paqueteSchema.findByIdAndRemove(req.params._id, (err, curso) => {
	  if (err) {
		console.log('Error: ', err);
	  }
	  console.log('Paquete eliminado: ', curso);
	});
  });
  export = router;