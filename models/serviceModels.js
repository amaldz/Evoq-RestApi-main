const con = require('../database/connector')

module.exports = class details {

    static async getServices() {
        try {
            const query = 'SELECT * FROM `service_type`';
            const [user] = await con.execute(query)
            return user;
            
        } catch (error) {
            return "error";
        }
    }
}