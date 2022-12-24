
const errorHandlerMiddleware = (err, _, res, __) => {
    if (err) {
        return res.status(err.status).json({ status: err.status, message: err.error })
    }
}
export {
    errorHandlerMiddleware
}