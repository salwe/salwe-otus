#!/usr/bin/env node

const {Command} = require('commander');
const axios = require('axios');
const fs = require('fs');
const {version, proxy} = require('./package.json');
const program = new Command();
const FILE_NAME = 'temporary_token.txt';

const injectToken = callback => {
    fs.readFile(FILE_NAME, 'utf8', (err, token) => {
        if (err) {
            return console.error('No token defined. Please, authorize');
        }

        callback(token);
    });
};

program.version(version);

program
    .command('signup')
    .option('--login <login>', 'User login')
    .option('--password <password>', 'User password')
    .description('Signup at app')
    .action(({login, password}) => {
        axios.post(`${proxy}/api/v1/signup`, {login, password})
            .then(res => {
                if (res.status === 200) {
                    return console.info('You successfully signup! Now you can log in');
                }

                return console.warn('Something went wrong. Try again later');
            });
    });

program
    .command('login')
    .option('--login <login>', 'User login')
    .option('--password <password>', 'User password')
    .description('Login in app')
    .action(({login, password}) => {
        axios.post(`${proxy}/api/v1/login`, {login, password})
            .then(res => {
                if (res.status === 200) {
                    const token = res.headers['x-auth-token'];
                    fs.writeFile(FILE_NAME, token, err => {
                        if (err) return console.error(err);
                        else return console.info(`You successfully login as ${login}!`);
                    });
                } else {
                    return console.warn('Something went wrong. Try again later');
                }
            });
    });

program
    .command('user-info')
    .description('Show current user info  (you must be authorized)')
    .action(() => {
        injectToken(token => {
            axios.get(`${proxy}/api/v1/users/current`, {headers: {Authorization: token}})
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.data);
                    } else if (res.status === 401) {
                        return console.error('Access denied');
                    }

                    return console.warn('Something went wrong. Try again later');
                });
        });
    });

program
    .command('update-user')
    .option('--user-name <userName>', 'User name')
    .option('--surname <userSurname>', 'User surname')
    .option('--email <userEmail>', 'User email')
    .description('Update user info (you must be authorized)')
    .action(cmdObj => {
        const {userName: name, surname, email} = cmdObj;

        injectToken(token => {
            axios.put(`${proxy}/api/v1/users/current`, {name, surname, email}, {headers: {Authorization: token}})
                .then(res => {
                    if (res.status === 200) {
                        console.info('User data successfully updated! New data:');
                        console.log(res.data);
                    } else if (res.status === 401) {
                        return console.error('Access denied');
                    }

                    return console.warn('Something went wrong. Try again later');
                });
        });
    });

program
    .command('users-list')
    .description('Show users list  (you must be authorized)')
    .action(() => {
        injectToken(token => {
            axios.get(`${proxy}/api/v1/users`, {headers: {Authorization: token}})
                .then(res => {
                    if (res.status === 200) {
                        return console.log(res.data);
                    } else if (res.status === 401) {
                        return console.error('Access denied');
                    }

                    return console.warn('Something went wrong. Try again later');
                });
        });
    });

program.parse(process.argv);