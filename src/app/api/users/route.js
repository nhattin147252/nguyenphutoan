import connectToMongoDB from "../../lib/mongdb";
import User from "../../models/user";

export async function GET() {
    await connectToMongoDB();
    const users = await User.find({});
    return new Response.json((users));
    //const user = await User.create({name: "nguyen van b", address: "hoc mon, hcm"});
    //return Response.json(user);
}
