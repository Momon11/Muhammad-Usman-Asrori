export default function Users(){
    return (
        <div id="container" className="flex h-[100vh] bg-white">
            <section id="navigation" className="border-r-2 p-4 w-[200px]">
                <h1 className="text-3x1 text-center font-bold"> Connect</h1>
                <div className="mt-4 flex-col gap-2">
                    <button className="flex gap-2">
                        <iconUser/>Users</button>
                    <button className="flex gap-2">
                        <iconUser/>Hak Akses</button>
                    <button className="flex gap-2">
                        <iconUser/>Logout</button>
                </div>
            </section>
            <section id="content">
                <input placeholder="Cari Users"></input>
                <div id="list-users"></div>
            </section>
        </div>
    )
}