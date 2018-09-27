class Helpers {

    static getTrue (val) {
        if (val === true) {
            return 'Approved'
        }
        return 'Not Aprroved'
    }

    static getDateF(val) {
        return val.getFullYear();
    }
}

module.exports = Helpers