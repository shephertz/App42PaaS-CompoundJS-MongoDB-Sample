module.exports = {
    development: {
        driver:   'mongodb',
        url:      'mongodb://localhost/compoundjs-dev'
    },
    test: {
        driver:   'mongodb',
        url:      'mongodb://localhost/compoundjs-test'
    },
    production: {
        driver:   'mongodb',
        url:      'mongodb://<User Name>:<Password>@<VM IP>:<VM PORT>/<Database name>'
    }
};
