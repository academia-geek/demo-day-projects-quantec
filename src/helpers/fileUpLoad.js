
export const fileUpload = async(file) =>{
    const cloudUrl = 'https://api.Cloudinary.com/v1_1/ddxauuwcf/image/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'ejercicioCRUD');
    formData.append('file', file);
    
    const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData
    })
    const cloudResp = await resp.json();
    console.log(cloudResp);
    return cloudResp.secure_url

}