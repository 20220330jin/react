import path from 'path';
import fs from 'fs/promises';
import Link from "next/link";

function HomePage(props) {

    const {products} = props;

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>
            ))}
        </ul>
    );
}

export async function getStaticProps(context) {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json') //current working directory
    console.log('re-render');
    console.log(context);
    console.log(process.cwd());
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    // if (data.products.length === 0) {
    //     return {notFound: true};
    // }

    if (!data) {
        return {
            redirect: {
                destination: '/no-data'
            }
        }
    }

    return {
        props: {
            products: data.products
        },
        revalidate: 10,
        // notFound: true,
        // redirect:
    };
}

export default HomePage;
