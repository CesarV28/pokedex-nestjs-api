
export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    mongodbConnection: process.env.MONGO_CONNECTION,
    port: process.env.PORT || 3001,
    defaultLimit: Number(process.env.DEFAULT_LIMIT) || 10,
});