
import {dbconnect, insertnewsletter} from '../../lib/database'

async function  handler( req, res){

    if(req.method === 'POST'){

        const {email, name, message} = req.body ; 

        if(!email || 
            !email.includes('@') ||
            email.trim() == '' || 
            !name || 
            name.trim() == '' || 
            !message || 
            message.trim() == '' 
        ){

            res.status(422).json({message : 'Invalid Input'})
            return ;
        }
        const newsletter = {
            email, 
            name, 
            message
        }
        
        let client ; 

        try {

            client = await dbconnect();    
        } catch (error) {
            console.log(error.message)
            res.status(500).json({message : 'connection to the Database lose'}) ; 
            return ;     
        }

        try{

           const result = await insertnewsletter(client, blog , newsletter);
        }
        catch(error){
            client.close()
            res.status(500).json({message : 'Insertion loss'});  
        }

        res.status(201).json({message : 'sign up !!!'})
    }

}

export default handler ;