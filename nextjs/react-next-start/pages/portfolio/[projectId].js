import { useRouter } from 'next/router'

function PortFolioProjectPage() {

    const router = useRouter();
    console.log(router);

    const projectId = router.query.projectId;
    console.log(projectId)

    return (
        <div>
            <h1>The PortFolio Project Page</h1>
        </div>
    )
}

export default PortFolioProjectPage;