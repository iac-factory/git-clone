import Package, { Remove } from ".";

describe( "Import System", () => {
    it( "Unit-Testing - Clone", async () => {
        const $ = await import(".").then(($) => $.default);

        expect($).toBeTruthy();
    } );
} );

describe( "Clone", () => {
    it( "Clones Repository (HTTPs)", async () => {
        const response = await Package.Clone(String("https://github.com/facebook/jest.git"), "testing/http");

        await Remove("testing/http");

        expect(response).toBeTruthy();
    } );
} );

describe( "Clone", () => {
    it( "Clones Repository (SSH)", async () => {
        const response = await Package.Clone(String("git@github.com:facebook/jest.git"), "testing/ssh");

        await Remove("testing/ssh");

        expect(response).toBeTruthy();
    } );
} );

void (() => jest.setTimeout(300000))();
