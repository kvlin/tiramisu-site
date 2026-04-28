import { link } from "fs";
import { MapPin, CalendarDays, Clock } from "lucide-react";

const stallLocations = [
    {
        day: "Every Saturday",
        name: "Eastwood Night Market",
        time: "3:00 pm to 9:00 pm",
        link: "https://www.instagram.com/eastwoodnightmarkets/",
        color: "text-pink-600 bg-pink-100",
    },
    {
        day: "Every Thursday",
        name: "Hornsby Organic Food Market",
        time: "8:00 am to 2:30 pm",
        link: "https://www.instagram.com/hornsby_market/",
        color: "text-green-700 bg-green-100",
    },
    {
        day: "Last Friday of Each Month - Please check council updates for confirmed times.",
        name: "Hurstville Monthly Market",
        time: "3:00 pm to 9:00 pm",
        link: "https://www.instagram.com/grcouncil/",
        color: "text-blue-700 bg-blue-100",
    },
];

export default function StallLocationSection() {
    return (
        <section id="availability" className="bg-[#fff8ef] px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto mb-10 max-w-2xl text-center">

                    <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
                        Find us at local markets
                    </h2>
                    <p className="mt-4 text-base leading-7 text-stone-600">
                        Come say hello and pick up freshly made tiramisu and treats at our
                        weekly and monthly market stalls.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {stallLocations.map((stall) => (
                        <div
                            key={stall.name}
                            className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${stall.color}`}>
                                <MapPin size={22} />
                            </div>

                            <h3 className="text-xl font-semibold text-stone-900">
                                {stall.link ? (
                                    <a
                                        href={stall.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="transition hover:text-amber-700"
                                    >
                                        {stall.name}
                                    </a>
                                ) : (
                                    stall.name
                                )}
                            </h3>

                            <div className="mt-5 space-y-3 text-sm text-stone-600">
                                <div className="flex items-center gap-3">
                                    <CalendarDays size={17} className="text-amber-700" />
                                    <span>{stall.day}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Clock size={17} className="text-amber-700" />
                                    <span>{stall.time}</span>
                                </div>
                            </div>
                            {/* 
                            <p className="mt-5 text-sm leading-6 text-stone-500">
                                {stall.note}
                            </p> */}
                        </div>
                    ))}
                </div>

                <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-stone-500">
                    Market times may vary due to weather or event updates. Please check the respective market's social media for the latest information.
                </p>
            </div>
        </section>
    );
}