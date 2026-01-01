

import supabase  from '../db/dbSupabaseConnect.js';



export const  createRowSupa  = async (nameTable, objInsert) => {
        const { data, error } = await supabase.from(nameTable).insert(objInsert).select().single();
        if (error) throw error;
        return data;
    }

