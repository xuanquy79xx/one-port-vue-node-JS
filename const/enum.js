const SLASH = '/'
module.exports = {
    isImage: /gif|jpg|jpeg|png|tiff|webp|psd|svg+/gi,
    /**
 * @param {String} type 0, 1, 2
 * @param {String} date 
 * @example 0: +new Date() -> yyyy/mm/dd (1608301361443 -> '2020/12/18')
 *          1: ddmmyyy -> yyyy/mm/dd ('18122020' -> '2020/12/18')
 *          2: yyyymmdd -> dd/mm/yyyy ('20201218' -> '18122020')
 * ---------------
 */
    convertDate: function (type, date) {
        let DATE, MONTH, YEAR;
        switch (type) {
            case 0: {
                let d = new Date(date)
                DATE = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
                MONTH = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
                YEAR = d.getFullYear();
                return YEAR + SLASH + MONTH + SLASH + DATE;
            }
            case 1: {
                DATE = date.slice(0, 2)
                MONTH = date.slice(2, 4)
                YEAR = date.slice(4, date.length)
                return YEAR + SLASH + MONTH + SLASH + DATE;
            }
            case 2: {
                YEAR = date.slice(0, 4)
                MONTH = date.slice(4, 6)
                DATE = date.slice(6, date.length)
                return DATE + MONTH + YEAR;
            }
            default: return false;
        }
    },
    rangeWeek: function (timestamp) {
        const ONE_DAY = 1000 * 60 * 60 * 24
        if (!timestamp) timestamp = +new Date()
        let dt = new Date(Number(timestamp))
        dt = new Date(new Date().setHours(0, 0, 0, 0))
        dt = new Date(dt.getTime() - (dt.getDay() > 0 ? (dt.getDay() - 1) * ONE_DAY : 6 * ONE_DAY));
        return { start: dt, end: new Date(dt.getTime() + ONE_DAY * 7 - 1) };
    },
    rangeMonth: function (timestamp) {
        if (!timestamp) timestamp = new Date()
        let d = new Date(Number(timestamp))
        let start = new Date(d.getFullYear(), d.getMonth(), 1);
        let end = new Date(d.getFullYear(), d.getMonth() + 1, 0);
        return { start, end }
    },
    randomId() {
        return Math.random().toString(36).slice(2) + Math.random().toString(16).slice(2)
    },
    accentedLetters: function (str) {
        str = str.toLowerCase().trim()
        // str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
        // str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
        // str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
        // str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
        // str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
        // str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
        // str = str.replace(/\u0111/g, "d");
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/ /g, "_");
        str = str.replace(/\'|\"|\`/g, "");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
        return str;
    }
}