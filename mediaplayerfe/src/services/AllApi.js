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

//delete video
export const deleteVideo = async (id) => {
    return await commonApi ('DELETE',`${serverURL}/videos/${id}`,"")
}

//Add to Watch History
export const addToHistory = async (reqBody) => {
    return await commonApi('POST',`${serverURL}/history`,reqBody)
}

//getall history
export const getHistory = async () => {
    return await commonApi('GET', `${serverURL}/history`,"")
}

//delete History by id

export const deleteHistory = async (id) => {
    return await commonApi('DELETE',`${serverURL}/history/${id}`,{})
}
    