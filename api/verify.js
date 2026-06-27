
export default function handler(req,res){

const MASTER_KEY="RIZII-2026-PRO";

if(req.method==="POST"){

const {key}=req.body;

if(key===MASTER_KEY){
return res.status(200).json({success:true});
}

return res.status(401).json({success:false});

}

res.status(405).end();

}
