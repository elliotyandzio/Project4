const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const secret = process.env.SECRET || 'scoutingApp secret!';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/scoutingApp-${env}`;

module.exports = {port, dbURI, secret};
