import PageHeading from '@/components/PageHeading'

export default function Page() {
    return (<>
        <p className="text-center">This is Simeon Davenport's portfolio. Take a look and see what his ever-growing experience in the realm of Computer Science is.</p>
        <PageHeading text="Simeon's Latest Projects:" />
        <div>(Latest 3 projects)</div>
        <PageHeading text="Simeon's Latest Education:" />
        <div>(Latest 3 education)</div>
    </>)
}