import connectMongo from "@/database/conn";
import Users from "@/model/Schema";
import { hash } from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next'

const signupUser = async(req: NextApiRequest, res: NextApiResponse) => {
    connectMongo().catch(error => res.json({ error: "Connection failed...!"}))

    // Only post method is accepted
    if (req.method === "POST") {
        if (!req.body) return res.status(404).json({ message: "Form data not provided." });

        const { username, email, password } = req.body;

        // check duplicate users
        const checkExisting = await Users.findOne({ email });
        if (checkExisting) return res.status(422).json({ message: "User already exists." });

        // Hash password
        const result = await Users.create({ username, email, password: await hash(password, 12) });
        res.status(201).json({ status: true, user: result });
    } else {
        res.status(500).json({ message: "HTTP method not valid. Only POST method accepted."})
    }
}

export default signupUser;