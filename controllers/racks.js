const racksModel = require('../models/racks');

class RacksController{

    static async get(req,res){
        try {
            const racks = await racksModel.find();
            res.status(200).json({
                racks: racks,
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async addRacks(req,res){
        try {
            const{section, number, floor} = req.body;
            // const author ='Andrea Hirata';
            // const title ='Laskar Pelangi';
            // const published =2008;

            const racks = await racksModel.create({
                section: section,
                number: number,
                floor: floor
            });

            res.status(201).json({
                message: "rack created",
                racks: racks,
            })
        } catch (error) {
            res.status(500).json({
                error: error,
            })
        }
    }

    static async deleteRacks(req,res){
        try {
            // const temukanID = await booksModel.findById(req.params.id)
            // const del = await temukanID.deleteOne()
            const hapusID = await racksModel.findByIdAndDelete(req.params.id)

            res.status(201).json({
                message: "rack deleted",
                book: hapusID,
            })
        } 
        catch (error) {
            res.status(500).json({
                error: error,
            })
        }
    }

    static async editRacks(req,res){
        try {
            const editID = await racksModel.findByIdAndUpdate(req.params.id,{$set:req.body})


            res.status(201).json({
                message: "rack updated",
                book: editID,
            })
        
        } catch (error) {
            res.status(500).json({
                message: "filed",
                error: error,
            })  
        }
    }
}

module.exports = RacksController;
