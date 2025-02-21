const API_BASE_URL="http://localhost:8080";
export async function makeApiCall (endpoint,method ="GET",body =null){
    try{
        const headers ={
            "Content-Type":"application/json",
        };
        const options ={
            method,
            headers,
        };
        if(body){
            options.body =JSON.stringify(body);
        }
        const response = await fetch (`${API_BASE_URL}${endpoint}`,options);
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message ||"API error")
        }
        return await response.json();
    }catch(error){
        console.error(`error in API call to ${endpoint}:`,error);
        throw error;
    }
}
export function getUsers(){
    return makeApiCall("/emp/list","GET");
}
export async function loginForRecruiter (data){
    console.log("Making api call");
    return await makeApiCall("/auth_recruiter/add","POST",data);
    
} 
export async function loginForEmployee (data){
    console.log("Making api call");
    return await makeApiCall("/auth/add","POST",data);
    
} 
export async function addEmployeeInformation(data){
    console.log("Making api call");
    return await makeApiCall("/emp/add","POST",data);
}


export async function addRecruiterInformation(data){
    console.log("Making api call");
    return await makeApiCall("/recruiter/add","POST",data);
}

export async function addContactUsInformtaion(data){
    console.log("Making api call");
    return await makeApiCall("/contact/add","POST",data);
}

export async function loginData (data){
    console.log("Making api call");
    return await makeApiCall("/logindata/add","POST",data);
    
} 

export async function deleteLoginData (id){
    console.log("Making api call");
    return await makeApiCall(`/logindata/delete/${id}`,"DELETE");
    
} 

export async function getLoggedInData (){
    console.log("Making api call");
    return await makeApiCall("/logindata/list","GET");
    
} 

export async function addJobDetails (data){
    console.log("Making api call");
    return await makeApiCall("/addjob/add","POST",data);
    
} 

export async function getJobDetails (){
    console.log("Making api call");
    return await makeApiCall("/addjob/list","GET");
    
} 


export async function addApplyJob(data){
    console.log("Making api call");
    return await makeApiCall("/applyjob/add","POST",data);
    
} 

export async function addFrontendJob(data){
    console.log("Making api call");
    return await makeApiCall("/frontendjob/add","POST",data);
    
} 

export async function addBackendJob(data){
    console.log("Making api call");
    return await makeApiCall("/backendjob/add","POST",data);
    
} 


export async function addDesignJob(data){
    console.log("Making api call");
    return await makeApiCall("/designjob/add","POST",data);
    
} 

export async function addDatascJob(data){
    console.log("Making api call");
    return await makeApiCall("/datascjob/add","POST",data);
    
} 

export async function addProductJob(data){
    console.log("Making api call");
    return await makeApiCall("/productjob/add","POST",data);
    
} 

export async function addFullstackJob(data){
    console.log("Making api call");
    return await makeApiCall("/fullstackjob/add","POST",data);
    
} 



export async function getFrontendJob (){
    console.log("Making api call");
    return await makeApiCall("/frontendjob/list","GET");
    
} 

export async function getBackendJob (){
    console.log("Making api call");
    return await makeApiCall("/backendjob/list","GET");
    
} 

export async function getFullstackJob (){
    console.log("Making api call");
    return await makeApiCall("/fullstackjob/list","GET");
    
} 

export async function getDesignJob (){
    console.log("Making api call");
    return await makeApiCall("/designjob/list","GET");
    
} 

export async function getDatascJob (){
    console.log("Making api call");
    return await makeApiCall("/datascjob/list","GET");
    
} 

export async function getProductJob (){
    console.log("Making api call");
    return await makeApiCall("/productjob/list","GET");
    
} 