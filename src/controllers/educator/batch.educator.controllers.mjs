import { Batch } from "../../models/batch.model.mjs";

async function getBatchEducatorController(req, res){
    try {
        const batches = await Batch.all({})
        return res.json(batches)
    } catch (error) {
        return res.json(error)
    }
}

function postBatchEducatorController(req, res){

    return res.json({'msg':'post Batch Educator controller'})

}

function patchBatchEducatorController(req, res){

    return res.json({'msg':'patch Batch Educator controller'})

}
function deleteBatchEducatorController(req, res){

    return res.json({'msg':'delete Batch Educator controller'})

}

export {getBatchEducatorController, postBatchEducatorController, patchBatchEducatorController, deleteBatchEducatorController};