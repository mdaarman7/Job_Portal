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
export async function login (data){
    console.log("Making api call");
    return await makeApiCall("/auth/add","POST",data);
} 