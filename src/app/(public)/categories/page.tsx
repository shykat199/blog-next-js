import Container from '@/components/ui/container'

export default async function BlogPage() {

    return (
        <main className="flex-grow flex flex-col items-center w-full pb-section-padding">


            <header
                className="w-full max-w-container-max px-margin-mobile md:px-gutter py-16 md:py-24 flex flex-col items-center text-center">
                <h1 className="font-headline-xl text-headline-xl text-primary mb-4">Collections</h1>
                <p className="font-body-lg text-body-lg text-secondary max-w-2xl">Explore our curated collections of
                    thought-provoking essays and in-depth reporting across diverse disciplines.</p>
            </header>
            <div
                className="w-full max-w-container-max px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                <a className="group flex flex-col items-center text-center" href="#">
                    <div className="w-full aspect-[4/5] overflow-hidden rounded bg-surface-container-lowest mb-6">
                        <img alt="Architecture category"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            data-alt="minimalist brutalist concrete architecture with sharp shadows against clear blue sky"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbECLx8fKpdEV4Pbl2h8qH9LP4lD37wziz4n3shRF7F3ceL_Uz0dZ-prLHOSXsnRGpn1IJoJwVTbEy8b5TYU_45Q1IVtCRBCa_bkAWmmeJOsg6gmyv0e76AStY9ljQ6keRZHV0hn7UB0yGc3HQW587F8hLCnyPsSP7LnMAixXie-iOUUQ8JCLo2KlyxZLxW-CHuNVOAtnFORzmsWKSm7M-ujhhUlWprYOLCOLUrDw0VjYGuNfiX9UpElChWgLiIkuFr004A7cay1I" />
                    </div>
                    <h2
                        className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-primary-container transition-colors">
                        Architecture</h2>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">42 Essays</span>
                </a>
                <a className="group flex flex-col items-center text-center" href="#">
                    <div className="w-full aspect-[4/5] overflow-hidden rounded bg-surface-container-lowest mb-6">
                        <img alt="Design category"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            data-alt="clean modern interior design with minimalist furniture, warm sunlight, and soft shadows"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVThJVupWmKDF77bCe3HFESEK2nijni-e4ZQPANPrYvRDrqz08CHWdr9XQDcpc8uMuGwRmEcLcwgq-4a-C-L6HrOTSd8njJGvz7uZ3lMnkOMXlXRErdGnyxa5d-Oq9tvcysfEM_9tXzjQfeBlAT2FxVqJ684gmzaeQxqGOmbZH1NCAvru366nwSFA5McvQe7auSj8CezqJktOKKb5VQMV6xDg4QWhy5T_lWidnWNFrmxCidkapUuU1OIYx3jjiSbrzDlrpmNfRpPk" />
                    </div>
                    <h2
                        className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-primary-container transition-colors">
                        Design</h2>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">38 Essays</span>
                </a>
                <a className="group flex flex-col items-center text-center" href="#">
                    <div className="w-full aspect-[4/5] overflow-hidden rounded bg-surface-container-lowest mb-6">
                        <img alt="Technology category"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            data-alt="abstract macro photography of circuit board with soft glowing lights and dark green tones"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcGBSM_lPPweLl_mdQfiNwwls4Dxg2zqg5Mhfuo-gwiTV6NJvcFLweKu3Jkb20kVyUmeYkDAV7z-fPlU9DauXkOBT3nUhcQ4SsCa0IqNU6KqXLHplv3_nC84BP1-5R46mnphES1aPROPnKLT5r2C5-OngqXOpv0jeydmOCQKrex66biSeOZg7C4fn0eKG-NcDhNh1iUqp-WFZuH_m4r4fJOAKKm9_N_ch6QjXcv2jHXjdlwTxKb79tmykDyZlB4Xc-EkYXZfxLftc" />
                    </div>
                    <h2
                        className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-primary-container transition-colors">
                        Technology</h2>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">56 Essays</span>
                </a>
                <a className="group flex flex-col items-center text-center" href="#">
                    <div className="w-full aspect-[4/5] overflow-hidden rounded bg-surface-container-lowest mb-6 lg:mt-12">
                        <img alt="Culture category"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            data-alt="black and white candid street photography of people walking in a sunlit European city"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDHSriX9QmHzIXM3KJzsf__2IQWPwMC20-9Kn1HlgSPpLf-TbN7KztRd0tHYIvmepmgsCRKe_68tFGpz1LW5Xk-yJNjCNrhQXHb0ryqTIoeUklY7GUQPo38SXgXfqhv5jSdDHcl1ikfwGckbVUBLU_qaFIzF36xgkwy2Zd5_pgO5tzNOJDWiLyRsCN-HCGVCl-3bcMRrpE7480b98PkoW_nU4On2LFe3fkKnK2oVgiuYCTU2UGIC9r27WrKvlY4fmDQHpfg58HAwE" />
                    </div>
                    <h2
                        className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-primary-container transition-colors">
                        Culture</h2>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">64 Essays</span>
                </a>
                <a className="group flex flex-col items-center text-center" href="#">
                    <div className="w-full aspect-[4/5] overflow-hidden rounded bg-surface-container-lowest mb-6 lg:mt-12">
                        <img alt="Environment category"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            data-alt="aerial view of dense moody pine forest covered in soft morning mist"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfnRnmX24JfYILNe15dVilzrJtP4Lyd4qPRMbdA92Ox_bAZXnsf6lPWAaThsMYYYacRbI4XpVmRnIuM75mldfWVpEuGZweAh6PPzhOnsRRfD-FafIAZcn_0d8TuY4q0JcdC8B5Kk00vIH12XNc8jyz4KgVCOwLmuGkU4BerIz8fsSKRrZmR0T7mDgFvp8ZncnztBNDSAwlzswlfVrWbB7_a4SBhyBTxw46kWkvu2hLcoAv-qxAJzizk60FoBOWTAE0UKYolKlUctg" />
                    </div>
                    <h2
                        className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-primary-container transition-colors">
                        Environment</h2>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">29 Essays</span>
                </a>
                <a className="group flex flex-col items-center text-center" href="#">
                    <div className="w-full aspect-[4/5] overflow-hidden rounded bg-surface-container-lowest mb-6 lg:mt-12">
                        <img alt="Literature category"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            data-alt="close up of open antique book pages with elegant typography and soft warm light"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5jKxFACY4Hslf6JkVzK3na6K09BjvRt6sY-vga4MIz6DwrDUqESMjssS0r0zagzgBWIUFv4wMZALMI2km3dV5RjYut4_S2jc5mlKwMae8rjVh8ouV_pmU_6HgP8UE2hXCcrrkuf80VhvHYQoDcPwy6LzfwPGByIdGL3waJnhCcKykzAGg8B1d8WLKz0y-85xKCx1B6tiMtO8_-lGO5E8Ftv1dzl-r3tV999c-SNqoe6awNvHLwTIT2pp7VolSsU-2qWACa1pf-Ws" />
                    </div>
                    <h2
                        className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-primary-container transition-colors">
                        Literature</h2>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">47 Essays</span>
                </a>
            </div>
        </main>
    )
}