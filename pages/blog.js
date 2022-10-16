import { getSession } from "next-auth/client"
import { redirect } from "next/dist/server/api-utils";
export default function Blog({data}) {
    return <h1>Blog- {data}</h1>
}

export async function getServerSideProps(context) {
    const session =  await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=http://localhost:300/blog`,
                permanent: false
            }
        }
    }
    let data = session ? 'Personalised 100 blog list': 'List of free blog';

    return {
        props: {
            data
        }
    }

}