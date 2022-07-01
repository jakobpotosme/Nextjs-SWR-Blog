import { supabase } from "../../utils/supabaseClient";

const PostsApi = async (req,res) =>{

    if(req.method === 'GET'){
        
        const {data,error} = await supabase.from('Posts')
                                    .select('*')

        if(error){
            return res.status(500).json({message: error})
        }

        return res.status(200).json(data)
    }

}


export default PostsApi