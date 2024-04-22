import Header from '../components/Header'

function GeneralLayout({ children }: any) {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <main className="w-full">{children}</main>
        </div>
    )
}

export default GeneralLayout
