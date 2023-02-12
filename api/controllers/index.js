exports.getAllTodos = (req, res, next) => {
    res.status(201).json({
        status: "success",
        message: "get!",
    })
}

exports.createTodo = (req, res, next) => {
    res.status(201).json({
        status: "success",
        message: "created todo!",
    })
}

exports.updateTodo = (req, res, next) => {
    res.status(201).json({
        status: "success",
        message: "todo updated!",
    })
}