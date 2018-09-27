class Helpers{
    static gettrue(val){
        if (val === true) {
            return 'Approved'
        }
        return 'Rejected'
    }

    static getDateF(val){
        return val.getFullYear();
    }
}

module.exports = Helpers