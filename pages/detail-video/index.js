// pages/detail-video/index.js
import { getMvInfo, getMvPath, getRelateMv } from '../../service/api_video'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mvInfo: [],
        mvPath: [],
        mvRelated: [], 
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        const id = options.id
        getMvInfo(id).then(res => {
            console.log(res)
            this.setData({mvInfo: res.data.data})
        }).catch(err => {
            console.log(err)
        })
        getMvPath(id).then(res => {
            console.log(res)
            this.setData({mvPath: res.data.data})
        }).catch(err => {
            console.log(err)
        })
        getRelateMv(id).then(res => {
            console.log(res)
            this.setData({mvRelated: res.data.data})
        }).catch(err => {
            console.log(err)
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})