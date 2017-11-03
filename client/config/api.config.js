const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isPro ? 'http://vn.gaoxiaoming.top/api/' : 'api/'
}