
import { Batch } from "../../models/batch.model.mjs";
import { Center } from "../../models/center.model.mjs";

async function getBatchEducatorController(req, res) {
    // const body = req.body
    const centerId = req.headers['centerid']
    console.log(centerId)
    if (!centerId) return res.json({msg:'null header'});
    
    try {
        const batches = await Batch.find({center:centerId});
        if(batches==null) return res.status(404).json({msg:'No Batches'});
        console.log(batches)
        return res.status(200).json(batches)
    } catch (error) {
        return res.json(error)
    }
}

// async function postBatchEducatorController(req, res) {
//     const centerId = req.headers['centerid']
//     const educatorId = req.headers['educatorid']
//     const { name, batchId , students=[], educators=[] } = req.body;
//     if(!name && !batchId) return res.status(400).json({msg:'no input'});

//     try {
//         const center = await Center.findOne({centerId:centerId})
//         if(!center) return console.log(center);
//         console.log(center)

//         // Create the batch object
//         const batch = await Batch.create({
//             name,
//             batchId,
//             center: center.toObject(),
//             creator: Object(educatorId),
//             educators,
//             students
//         });

//         const update = await center.updateOne({
//             batches:[
//                  batch.toObject()
//             ]
//         })

//         console.log(update)
//         return res.json(batch);
//     } catch (error) {
//         console.error("Error creating batch:", error);
//         return res.status(400).json({ error: error.message });
//     }
// }
async function postBatchEducatorController(req, res) {
    const centerId = req.headers['centerid'];
    const educatorId = req.headers['educatorid'];
    const { name, batchId, students = [], educators = [] } = req.body;

    if (!name || !batchId) {
        return res.status(400).json({ msg: 'Name and Batch ID are required' });
    }

    try {
        // Find the center by centerId
        const center = await Center.findOne({ _id: centerId });
        if (!center) {
            return res.status(404).json({ msg: 'Center not found' });
        }
        console.log(center)

        // Create the batch object
        const batch = await Batch.create({
            name,
            batchId,
            center: center._id,
            creator: educatorId,
            educators,
            students
        });

        // Update the center with the new batch
        center.batches.push(batch._id);
        await center.save();

        return res.status(201).json(batch);
    } catch (error) {
        console.error("Error creating batch:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}


function patchBatchEducatorController(req, res) {

    return res.json({ 'msg': 'patch Batch Educator controller' })

}
function deleteBatchEducatorController(req, res) {

    return res.json({ 'msg': 'delete Batch Educator controller' })

}

export { getBatchEducatorController, postBatchEducatorController, patchBatchEducatorController, deleteBatchEducatorController };