import { pb } from "@/lib/pocketbase";


export  async function getHotel() {
    try {

        const record = await pb.collection('hotel').getOne('2hmryb47ss5sdq8', {
            expand: 'relField1,relField2.subRelField',
        });

        return record;
        
    } catch (error) {
        console.error('Error getting slider images:', error);
        return [];
        
    }
    
}