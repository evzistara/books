export default function Books () {
    return (
        <>
        <div className="bg-background h-dvh">
        <div className="max-w-6xl m-auto">
            <div className="flex justify-between pt-10 pb-10">
                <div>
                    <button className="px-4 py-2 bg-button-background">All</button>
                    <button className="px-4 py-2 bg-button-background">Unread</button>
                    <button className="px-4 py-2 bg-button-background">Read</button>
                </div>
                <button className="px-4 py-2 bg-CTA text-white font-semibold">+ Add book</button>
            </div>

        </div>
        </div>
        </>
    )
}
