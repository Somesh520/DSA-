import axios from 'axios'

export const github=async(req ,res)=>{
    try {
        console.log("hey i am here ")
        const url=`https://github.com/login/oauth/authorize`+`?client_id=${process.env.GITHUB_CLIENT_ID}`

        res.redirect(url);
        
    } catch (error) {
        res.status(500).json({message:"something happen "})
        
    }
}

export const githubcallback=async(req ,res)=>{
    const {code}=req.query;

    try {
        console.log("githubcallback")
        if(!code) return res.status(400).json({message:"no code found"});
 console.log("11")
        const response= await axios.post("https://github.com/login/oauth/access_token",{
            client_id:process.env.GITHUB_CLIENT_ID,
            client_secret:process.env.GITHUB_SECRET_ID,
            code,
        },{Headers:{
            accept:"application/json"
        }}
    )


    if(response.status!=200) return res.status(400).json({message:"not get access token "})

        console.log(response.data)
        res.json(response.data);
        
    } catch (error) {
        
    }
}