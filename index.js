const express= require('express')
const app = express()
const port = process.env.PORT || 8007
app.get('/',(req,res)=>{
    res.send({message:'Hello Word!!'})
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})
