import AboutUs from "@/Components/AboutUs";
import ContentOne from "@/Components/ContentOne";
import Header from "@/Components/Header";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <div className="min-h-screen">
                <Head title="QTC LIMITED" />

                <Header />
                <ContentOne />
                <AboutUs/>
            </div>
        </>
    );
}
