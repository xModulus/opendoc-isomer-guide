(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "index.md",
                title: "Index",
                url: "/opendoc-isomer-guide/tutorial/",
                escapedPath: "tutorial/index.md",
                dir: "/tutorial/",
                tocId: "toc_/tutorial/",
                documentInfo: ["Tutorial",null,null]
            },
            
        {
                name: "index.md",
                title: "Index",
                url: "/opendoc-isomer-guide/new-folder/",
                escapedPath: "new-folder/index.md",
                dir: "/new-folder/",
                tocId: "toc_/new-folder/",
                documentInfo: ["New-folder",null,null]
            },
            
        {
                name: "index.md",
                title: "Sample page",
                url: "/opendoc-isomer-guide/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Isomer Guide","",["get-started.md"]]
            },
            
        
        
        {
                name: "get-started.md",
                title: "Welcome to Isomer!",
                url: "/opendoc-isomer-guide/get-started.html",
                escapedPath: "get-started.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Isomer Guide","",["get-started.md"]]
            },
            
        {
                name: "sample.md",
                title: "Test document",
                url: "/opendoc-isomer-guide/sample.html",
                escapedPath: "sample.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Isomer Guide","",["get-started.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()