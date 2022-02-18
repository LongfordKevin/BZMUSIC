import bzRequest from './index'
export function getTopMv(offset, limit=10) {
    return bzRequest.get("/top/mv", {
        offset,
        limit
    })
}
export function getMvInfo(mvid) {
    return bzRequest.get("/mv/detail", {
        mvid
    })
}
export function getMvPath(id, r) {
    return bzRequest.get("/mv/url", {
        id,
        r
    })
}
export function getRelateMv(id) {
    return bzRequest.get("/related/allvideo", {
        id
    })
}