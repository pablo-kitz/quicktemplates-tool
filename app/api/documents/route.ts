import {PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient();

type ResponseData = [
	{
		id: string;
		title: string;
		text: string;
	}
];

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	const docs = await prisma.document.findMany();
	console.log(docs);
}
