const connection = require("../db/config")

exports.getAllTodos = (req, res, next) => {
    connection.query("SELECT * FROM todolist", (err, data, fields) => {
        if (err) return next("No todo data found")
        res.status(200).json({
            status: "success",
            data: data,
        })
    })
}

exports.createTodo = (req, res, next) => {
    if (!req.body) return next("No form data found")
    const values = [req.body.name, "pending"]
    connection.query(
        "INSERT INTO todolist (name, status) VALUES(?)",
        [values],
        (err, data, fields) => {
            if (err) return next(err)
            res.status(201).json({
                status: "success",
                message: "todo created!",
            })
        }
    )
}

exports.updateTodo = (req, res, next) => {
    if (!req.params.id) {
        return next("No todo id found", 404)
    }
    connection.query(
        "UPDATE todolist SET status='completed' WHERE id=?",
        [req.params.id],
        (err, data, fields) => {
            if (err) return next(err)
            res.status(201).json({
                status: "success",
                message: "todo updated!",
            })
        }
    )
}