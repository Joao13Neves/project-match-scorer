function errorHandler(err, req, res, next) {
    return res.status(500).json({message: 'erro no servidor'})
}

module.exports = errorHandler