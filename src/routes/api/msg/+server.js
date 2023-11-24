import { error } from '@sveltejs/kit';



export function POST({ url, platform }) {
    console.log("handle msg");

    return new Response(null , {
        status: 200
    })
}