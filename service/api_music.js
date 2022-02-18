import bzRequest from './index'
export function getBanners(type) {
    return bzRequest.get('/banner', {
        type
    })
}
export function getMusicRanking(idx) {
    return bzRequest.get('/top/list', {
        idx
    })
}