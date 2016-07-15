/**
 * Created by test on 16/7/13.
 */
var config = {
    "name": "im",
    "version": "1.0.0",
    "env": "development",
    "port": 3000,
    "salt": "xRQKehMduqbXzpX8gIXu0jXBCtdfMu7U",
    "mysql": {
        "im": {
            "host": "127.0.0.1",
            "port": 3306,
            "database": "im",
            "username": "root",
            "password": "123456",
            "max": 10
        }
    },
    "redis": {
        "cache": {
            "host": "127.0.0.1",
            "port": 6379,
            "opts": {
                "password": ""
            }
        }
    }
};

module.exports = config;