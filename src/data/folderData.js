// name         - name of folder/file
// isFolder     - true => folder, false => file
// items        - folders/files inside the folder

export const folderData = {
    id : 98765434567,
    name : "root",
    isFolder : true,
    items : [
        {
            id : 1,
            name : "folder-structure-ui",
            isFolder : true,
            items : [
                {
                    id : 3,
                    name : "public",
                    isFolder : true,
                    items : [
                        {
                            id : 7,
                            name : "index.html",
                            isFolder : false,
                        }
                    ]
                },
                {
                    id : 4,
                    name : "src",
                    isFolder : true,
                    items : [
                        {
                            id : 8,
                            name : "App.js",
                            isFolder : false,
                        },
                        {
                            id : 9,
                            name : "Index.js",
                            isFolder : false,
                        },
                        {
                            id : 10,
                            name : "App.css",
                            isFolder : false,
                        },
                    ]
                },
                {
                    id : 11,
                    name : "Empty Folder",
                    isFolder : true,
                    items : []
                },
                {
                    id : 5,
                    name : "package-lock.json",
                    isFolder : false,
                },
                {
                    id : 6,
                    name : "package.json",
                    isFolder : false,
                },
            ]
        },
        {
            id : 2,
            name : "README.md",
            isFolder : false,
        }
    ]
}
