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
            message: 'Error fetching employees:' + error,
        })
    }
}

const getSpecificEmployees = async (req, res) => {
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
            message: 'Error fetching employee:' + error,
        })
    }
}

const addNewEmployees = async (req, res) => {
    try {
        const { empName, empDateOfBirth, empAge, empHometown, empMilitaryRank, empPosition } = req.body;
        if(!empName || !empDateOfBirth || !empAge || !empHometown || !empMilitaryRank || !empPosition ){
            return res.status(400).send('All fields are required!')
        }
        const query = 'INSERT INTO Employees (empName, empDateOfBirth, empAge, empHometown, empMilitaryRank, empPosition, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())';
        const [results] = await connection.query(query, [empName, empDateOfBirth, empAge, empHometown, empMilitaryRank, empPosition]);
        return res.status(200).json({
            message: 'Successfully created',
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Error creating new employee:' + error,
        })
    }
}

const updateSpecificEmployee= async (req, res) => {
    try {
        const { empName, empDateOfBirth, empAge, empHometown, empMilitaryRank, empPosition } = req.body;
        const empId = req.params.empId;
        if(!empId || !empName || !empDateOfBirth || !empAge || !empHometown || !empMilitaryRank || !empPosition ){
            return res.status(400).send('All fields are required!')
        }
        const query = 'UPDATE Employees SET empName = ?, empDateOfBirth = ?, empAge = ?, empHometown = ?, empMilitaryRank = ?, empPosition = ?, updatedAt = NOW() WHERE empId = ?';
        const [results] = await connection.query(query, [empName, empDateOfBirth, empAge, empHometown, empMilitaryRank, empPosition, empId]);
        return res.status(200).json({
            message: 'Successfully updated',
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Error updating employee:' + error,
        })
    }
}

const deleteSpecificEmployees = async (req, res) => {
    try {
        const { empIds } = req.body;
        if(!empId){
            throw new Error ('There is no record to delete')
        }
        const query = 'DELETE FROM Employees WHERE empId IN (?)';
        const [results] = await connection.query(query, [empId]);
        return res.status(200).json({
            message: 'Successfully deleted',
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Error deleting employee:' + error,
        })
    }
}



module.exports = {
    getAllEmployees,
    getSpecificEmployees,
    addNewEmployees,
    updateSpecificEmployee,
    deleteSpecificEmployees
} 