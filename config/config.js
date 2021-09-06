const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "asdfghjkl",
    mongoUri: process.env.MONGO_URI  || 'mongodb://localhost:27017/mernproject'
}

export default config;