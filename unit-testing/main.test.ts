describe( "Import System", () => {
    it( "Unit-Testing - Default", async () => {
        const $ = await import(".");

        expect($).toBeTruthy();
    } );
} );

export {};