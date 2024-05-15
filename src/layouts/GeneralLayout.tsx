import Header from '../components/Header'

function GeneralLayout({ children }: any) {
    return (
        <div className="flex h-screen w-full flex-col">
            <Header />
            <main className="w-full h-full">{children}</main>
        </div>
    )
}

export default GeneralLayout
