/**
 * Created by test on 16/7/13.
 */
var config = {
    "name": "im",
    "version": "1.0.0",
    "env": "development",
    "port": 3000,
    "salt": "xRQKehMduqbXzpX8gIXu0jXBCtdfMu7U",
    "site_root_url":"http://192.168.100.110:3000/",
    "email_salt":"xRQKehMduqbXzpX8gIXu0jXBCtdfMx8U",
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
                "password":""
            }
        }
    },
    "mail_opts": {
        "host": 'smtp.163.com',
        "port": 25,
        "auth": {
            "user": 'appleshitman@163.com',
            "pass": 'shit120'
        }
    }
};

module.exports = config;