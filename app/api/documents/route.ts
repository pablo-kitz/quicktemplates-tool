import {PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	const docs = await prisma.document.findMany();
	return new Response("response");
}
