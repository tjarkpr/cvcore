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


export const NavigationMobile: React.FC = () => {
    const selectedNavigationItems = _GetSelectedNavigationItems(usePathname());
    return (
        <nav className="flex md:hidden w-full py-5 px-10 flex-col flex-nowrap justify-center items-center">
            <div className="flex flex-col flex-nowrap justify-center items-center mb-8">
                <IconContainer size_in_px={44} path={"/icons/earth.png"} alt={"earth icon"}></IconContainer>
                <div className="flex flex-col flex-nowrap">
                    <h3 className="text-2xl font-extrabold">CVCore</h3>
                    <p className="text-xs font-light italic">by Tjark Prokoph</p>
                </div>
            </div>
            <ElementContainer>
                <div className="flex flex-row flex-nowrap items-center px-2" style={{height: "40px"}}>
                    <NavItem text={"Overview"} link_path={"/overview"} selected={selectedNavigationItems[0]} horizontal={false}>
                        { selectedNavigationItems[0] ? 
                            (<SolidEyeIcon width={15} height={15}></SolidEyeIcon>): 
                            (<OutlineEyeIcon width={15} height={15}></OutlineEyeIcon>)
                        }
                    </NavItem>
                    <NavItem text={"Experience"} link_path={"/experience"} selected={selectedNavigationItems[1]} horizontal={false}>
                        { selectedNavigationItems[1] ? 
                            (<SolidBriefcaseIcon width={15} height={15}></SolidBriefcaseIcon>): 
                            (<OutlineBriefcaseIcon width={15} height={15}></OutlineBriefcaseIcon>)
                        }
                    </NavItem>
                    <NavItem text={"Education"} link_path={"/education"} selected={selectedNavigationItems[2]} horizontal={false}>
                        { selectedNavigationItems[2] ? 
                            (<SolidAcademicCapIcon width={15} height={15}></SolidAcademicCapIcon>): 
                            (<OutlineAcademicCapIcon width={15} height={15}></OutlineAcademicCapIcon>)
                        }
                    </NavItem>
                    <NavItem text={"Projects"} link_path={"/projects"} selected={selectedNavigationItems[3]} horizontal={false}>
                        { selectedNavigationItems[3] ? 
                            (<SolidCubeTransparentIcon width={15} height={15}></SolidCubeTransparentIcon>): 
                            (<OutlineCubeTransparentIcon width={15} height={15}></OutlineCubeTransparentIcon>)
                        }
                    </NavItem>
                </div>
            </ElementContainer>
        </nav>
    )
};