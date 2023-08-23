require("express-async-errors");
const AppError = require("./utils/AppError");

const migrationsRun = require("./database/sqlite/migrations");

const express = require("express");
const app = express();
const PORT = 3333;

const routes = require("./Routes");

app.listen(PORT, () => console.log(`🚀Server is running on Port ${PORT}`));

app.use(express.json());

app.use(routes);

migrationsRun();

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})
