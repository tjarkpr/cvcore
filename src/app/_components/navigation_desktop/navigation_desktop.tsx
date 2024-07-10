'use client';

import React from "react";
import { usePathname } from 'next/navigation'
import { IconContainer } from "../icon_container/icon_container";
import { ElementContainer } from "../element_container/element_container";
import { NavItem } from "../nav_item/nav_item";
import { 
    EyeIcon as SolidEyeIcon,
    AcademicCapIcon as SolidAcademicCapIcon, 
    BriefcaseIcon as SolidBriefcaseIcon, 
    CubeTransparentIcon as SolidCubeTransparentIcon
} from "@heroicons/react/24/solid";
import { 
    EyeIcon as OutlineEyeIcon,
    AcademicCapIcon as OutlineAcademicCapIcon, 
    BriefcaseIcon as OutlineBriefcaseIcon, 
    CubeTransparentIcon as OutlineCubeTransparentIcon 
} from "@heroicons/react/24/outline";
import { _GetSelectedNavigationItems } from "@/app/_data_provider/navigation_selection_provider";


export const NavigationDesktop: React.FC = () => {
    const selectedNavigationItems = _GetSelectedNavigationItems(usePathname());
    return (
        <nav className="hidden md:flex w-full py-5 px-10 flex-row flex-nowrap justify-between items-center">
            <div className="flex flex-row flex-nowrap items-center">
                <IconContainer size_in_px={44} path={"/icons/earth.png"} alt={"earth icon"}></IconContainer>
                <div className="ms-4 flex flex-col flex-nowrap">
                    <h3 className="text-2xl font-extrabold">CVCore</h3>
                    <p className="text-xs font-light italic">by Tjark Prokoph</p>
                </div>
            </div>
            <ElementContainer>
                <div className="flex flex-row flex-nowrap items-center px-2" style={{height: "40px"}}>
                    <NavItem text={"Overview"} link_path={"/overview"} selected={selectedNavigationItems[0]} horizontal={true}>
                        { selectedNavigationItems[0] ? 
                            (<SolidEyeIcon width={20} height={20}></SolidEyeIcon>): 
                            (<OutlineEyeIcon width={20} height={20}></OutlineEyeIcon>)
                        }
                    </NavItem>
                    <NavItem text={"Experience"} link_path={"/experience"} selected={selectedNavigationItems[1]} horizontal={true}>
                        { selectedNavigationItems[1] ? 
                            (<SolidBriefcaseIcon width={20} height={20}></SolidBriefcaseIcon>): 
                            (<OutlineBriefcaseIcon width={20} height={20}></OutlineBriefcaseIcon>)
                        }
                    </NavItem>
                    <NavItem text={"Education"} link_path={"/education"} selected={selectedNavigationItems[2]} horizontal={true}>
                        { selectedNavigationItems[2] ? 
                            (<SolidAcademicCapIcon width={20} height={20}></SolidAcademicCapIcon>): 
                            (<OutlineAcademicCapIcon width={20} height={20}></OutlineAcademicCapIcon>)
                        }
                    </NavItem>
                    <NavItem text={"Projects"} link_path={"/projects"} selected={selectedNavigationItems[3]} horizontal={true}>
                        { selectedNavigationItems[3] ? 
                            (<SolidCubeTransparentIcon width={20} height={20}></SolidCubeTransparentIcon>): 
                            (<OutlineCubeTransparentIcon width={20} height={20}></OutlineCubeTransparentIcon>)
                        }
                    </NavItem>
                </div>
            </ElementContainer>
        </nav>
    )
};