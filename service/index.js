const BASE_URL = "http://123.207.32.32:9001"
class BZRequest {
    request(url, methods, parmas){
        return new Promise((resolve, reject) => {
            wx.request({
              url: BASE_URL+url,
              method: methods,
              data: parmas,
              success: function(res) {
                  resolve(res)
              },
              fail: function(err) {
                  reject(err)
              }
            })
        }
        )
    }
    get(url, parmas) {
        return this.request(url, 'GET', parmas)
    }
    post(url, parmas) {
        return this.request(url, 'POST', parmas)
    }
}
const bzRequest = new BZRequest
export default bzRequest