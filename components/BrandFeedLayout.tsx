"use client"
import Card from "./Card"

export default function BrandFeedLayout() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 mx-auto px-8 gap-4 md:gap-6 my-8 mx-8">
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
        </div>
    )
}