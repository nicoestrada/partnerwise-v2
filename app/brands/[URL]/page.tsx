import BrandHero from "@/components/BrandHero";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Testimonials11 from "@/components/Testimonials11";

export default function BrandPage({ params }: { params: { URL: string } }) {
    return (
        <>
            <Header />
            <div>
                Brand: {params.URL}
            </div>
            {/* <BrandHero />
            <Testimonials11 />
            <FAQ /> */}
            <Footer />
        </>
    )
}