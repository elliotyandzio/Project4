const port = process.env.PORT || 4000;
const env = process.env.NODE_END || 'dev';
const dbURI = process.env.MONGODB_URI|| `mongodb://localhost/scoutingApp-${env}`;
const secret = process.env.SECRET || 'scoutingApp secret!';

module.exports = {port, dbURI, secret};
