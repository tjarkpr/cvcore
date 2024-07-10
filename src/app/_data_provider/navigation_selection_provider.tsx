export function _GetSelectedNavigationItems(pathName: string): boolean[] 
{ 
    return [
        pathName == '/overview', 
        pathName == '/experience', 
        pathName == '/education', 
        pathName == '/projects'
    ];
}