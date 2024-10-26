import PageHeading from '@/components/PageHeading'
import InstitutesList from '@/components/InstitutesList'
import getStrapi from '@/functions/getStrapi'

export default async function Page() {
    const education = await getStrapi("educations", "sort=start:desc")

    return (<>
        <PageHeading text="Simeon's Education" topMargin={false} />
        <InstitutesList institutes={education} />
    </>)
}