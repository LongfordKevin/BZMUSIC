import { HYEventStore } from "hy-event-store"
import { getMusicRanking } from "../service/api_music"
const recommendStore = new HYEventStore({
    state: {
        recommendMusic: []
    },
    actions: {
        getRecommendMusic(ctx, payload) {
            getMusicRanking(payload).then(res => {
                console.log(res)
                ctx.recommendMusic = res.data.playlist.tracks.slice(0,6)
            })
        }
    }
})
export {
    recommendStore
}