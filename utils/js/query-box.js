export default function(seletor) {
    return new Promise((resolve) => {
        const query = wx.createSelectorQuery()
            query.select(seletor).boundingClientRect()
             // query.selectViewport().scrollOffset()
            query.exec((res) => {
                // console.log(res[0].height)
                resolve(res[0].height)
                // res[0].top       // #the-id节点的上边界坐标
                // res[1].scrollTop // 显示区域的竖直滚动位置
        })
    })
}