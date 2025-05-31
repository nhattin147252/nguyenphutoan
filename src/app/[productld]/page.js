export default async function Page({ params}) {
    const {productId} = await params
    return <div>My productId id:123 {productId}</div>
}