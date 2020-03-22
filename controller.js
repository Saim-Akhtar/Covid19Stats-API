const fetch=require('node-fetch')
const router = require('express').Router()

const coronaStats=async(req,res,next)=>{
    const country=req.query.country
    console.log(country)
    let url='https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats'
    url= country !== undefined ? `${url}?country=${country}`: url
    console.log(url)
    try {
        const response=await fetch(url,{
                        headers: {
                                    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                                    "x-rapidapi-key": process.env.API_KEY
                                },
                        })
        const responseData=await response.json()
        res.status("200").json({
            data: responseData.data
        })

    } catch (error) {
        res.status('400').json({
            status:400,
            error:error
        })
    }
}

router.get('/',coronaStats)

module.exports=router