const connection = require('../config/database');

const getAllEmployees = async (req, res) => {
    try {
        const query = 'SELECT * FROM Employees';
        const [results] = await connection.query(query);
        console.log(results)
        return res.status(200).json({
            message: "OK",
            data: results
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Error fetching users:' + error,
        })
    }
}

const getSpecificEmployees = async(req, res) => {
    try {
        const empId = req.params.empId;
        const query = 'SELECT * FROM Employees WHERE empId = ?';
        const [results] = await connection.query(query, [empId]);
        return res.status(200).json({
            message: 'ok',
            data: results
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Error fetching users:' + error,
        })
    }
}



module.exports = {
    getAllEmployees,
    getSpecificEmployees
} 