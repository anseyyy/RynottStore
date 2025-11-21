import commonAPI from "./commonAPI";
import serverURL from "./serverURL";


export const newRegisterAPI = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/register`,reqBody)
}

export const loginAPI = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/login`,reqBody)
}

export const productAPI = async (reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/add-plant`,reqBody,reqHeader)
}

export const viewAllAPI = async ()=>{
    return await commonAPI('GET',`${serverURL}/all-plant`)
}

export const deleteProductAPI=async(productname)=>{
    return await commonAPI('DELETE',`${serverURL}/remove-plant/${productname}`)
}

export const updateProductAPI=async(productname,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/edit-plant/${productname}`,reqHeader)
}

