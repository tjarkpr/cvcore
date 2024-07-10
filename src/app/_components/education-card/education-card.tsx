import React from "react";
import Image from "next/image";
import Moment from "moment";
import "./education-card.css";
import { ActiveCircle } from "../active-circle/active-circle";


export const EducationCard: React.FC<EducationCardProps> = (
    { info, image, link }
) => {
    return (
        <div className="education-card" id={link}>
            <div className="bg-white dark:bg-black rounded-t-lg flex flex-col flex-nowrap justify-center px-3 py-2">
                <div className="flex flex-row justify-end mb-2">
                    {__ActiveSnippet(info)}
                    <div className="bg-slate-50 dark:bg-slate-700 px-1 rounded-lg text-xs font-extralight ms-auto">Education</div>
                </div>
                <div className="self-start flex flex-row flex-nowrap w-full items-center">
                    <Image
                        src={image}
                        alt="school icon"
                        width={60}
                        height={60}
                        className="bg-white rounded-lg me-4 object-contain school-icon"
                        priority={true}
                    />
                    <div className="flex flex-col flex-nowrap justify-center w-full">
                        <div className="text-xs font-light">{info.school}</div>
                        <div className="text-base font-semibold">{info.title}</div>
                    </div>
                </div>
            </div>
            <div className="info-box bg-slate-50 dark:bg-slate-700 dark:border-slate-800 rounded-b-lg border-slate-100 border-t-2 flex flex-row flex-nowrap justify-start items-center px-4">
                <div className="flex flex-row flex-nowrap justify-around w-full">
                    <div className="px-2">
                        {__LightInfoIconSnippet("date")}
                        {__DarkInfoIconSnippet("date")}
                        <p className="text-xs font-extralight text-slate-500 dark:text-slate-200 info-text">{info.getDate()}</p>
                    </div>
                    <div className="px-2">
                        {__LightInfoIconSnippet("location")}
                        {__DarkInfoIconSnippet("location")}
                        <p className="font-extralight text-slate-500 dark:text-slate-200 info-text">{info.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export type EducationCardProps = {
    info: EducationDescription,
    image: string,
    link: string
}

export class EducationDescription {
    private static readonly FORMAT: string = "MM/YY";

    constructor(
        public title: string,
        public school: string,
        public start_date: Date,
        public end_date: Date | null,
        public location: string
    ) {}

    public isActive(): boolean {
        return this.end_date === null;
    }

    public getDate(): string {
        if (this.end_date === null) {
            return Moment(this.start_date).format(EducationDescription.FORMAT);
        }
        return Moment(this.start_date).format(EducationDescription.FORMAT) + "-" + Moment(this.end_date).format(EducationDescription.FORMAT);
    }
}

function __ActiveSnippet(info: EducationDescription) {
    return info.isActive() ? (
        <div className="flex flex-row flex-nowrap justify-end items-center bg-slate-50 dark:bg-slate-700 px-1 rounded-lg">
            <ActiveCircle/>
            <span className="ms-1 text-xs font-extralight">Active</span>
        </div>
    ) : (null);
}

function __LightInfoIconSnippet(name: string) {
    return (<Image
        src={"/icons/" + name + "_light.svg"}
        alt={name + " icon"}
        width={20}
        height={20}
        className="mx-auto hidden dark:block info-icon"
        priority={false}
    />);
}

function __DarkInfoIconSnippet(name: string) {
    return (<Image
        src={"/icons/" + name + "_dark.svg"}
        alt={name + " icon"}
        width={20}
        height={20}
        className="mx-auto dark:hidden info-icon"
        priority={false}
    />);
}