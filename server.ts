
import 'dotenv/config';
import express from 'express';
// import cors from "cors";
import dotenv from 'dotenv';
import {main} from './src/ai.js'


const app=express();
app.use(express.json());

app.use(express.static("public"));

// app.get('/',(req,res)=>{
//     res.send("chatbot");
// })
function promptbuilder(usermsg:string)
{
    return `you are dsa teacher 
    Rules:
- Keep answers short
- Give examples
- Explain simply

User Question:
${usermsg}`
}

app.post('/chat',async(req,res)=>{
    try{
        const msg=req.body.message;
        const prompt=promptbuilder(msg);
        const ans=await main(prompt!);
        res.json({
            response:ans
        })
    }
    catch(error)
    {
        res.status(500).json({
            error:"something went wrong"
        })
    }
})



app.listen(3000,()=>{
    console.log(`server is running on the http://localhost:3000`);
})

