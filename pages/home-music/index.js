// pages/home-music/index.js
import { getBanners, getMusicRanking } from "../../service/api_music"
import queryBox from "../../utils/js/query-box"
import throttle from "../../utils/js/throttle"
import { recommendStore } from "../../store/index"
const newThrottle = throttle(queryBox)
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerInfo: [],
        bannerHeight: 0,
        recommendMusic: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        wx.setNavigationBarTitle({
            title: '云音乐',
          })
        getBanners(2).then(res => {
            this.setData({bannerInfo: res.data.banners})
        })
        // getMusicRanking(0).then(res => {
        //     console.log(res.data.playlist.tracks.slice(0,6))
        //     this.setData({recommendMusic: res.data.playlist.tracks.slice(0,6)})
        // })
        recommendStore.dispatch("getRecommendMusic", 0)
        recommendStore.onState("recommendMusic", (res) => {
            if(!res) return
            console.log(res)
            this.setData({recommendMusic: res})
        })
        // 微信原生框架中的this.setData({})方法在更改数据的值时是同步的，在渲染wxml时是异步的
        // 在react中，setData({})方法在数据更改的时候是异步的，为的是保持数据状态与渲染的页面一致
        
    },

    searchInput: function () {
        console.log("search-check")
        wx.navigateTo({
          url: '/pages/music-search/index',
        })
    },

    imageLoading: function () {
        newThrottle(".swiper-image").then(res => {
            console.log(res)
            this.setData({bannerHeight: res})
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