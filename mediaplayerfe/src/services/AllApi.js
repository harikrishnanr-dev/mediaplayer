import { serverURL } from "./serverURL";
import { commonApi } from "./commonApi";
//upload video
export const UploadVideo = async(reqBody)=> {
    return await commonApi ('POST',`${serverURL}/videos`,reqBody)
}


//get all videos

export const getAllVideos = async () => {
    return await commonApi ('GET',`${serverURL}/videos`,"")
}