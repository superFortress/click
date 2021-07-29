/* E X P O R T */

export const getDate = () => {
    return Date.parse(new Date()) + new Date().getMilliseconds();
}