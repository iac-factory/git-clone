import Subprocess from "child_process";

import { Remove } from "./remove";

/***
 * `git` Repository Clone Command
 * ---
 *
 * @param repository
 * @param directory
 * @param branch
 * @returns {Promise<void>}
 *
 * @constructor
 *
 */
const Clone = async (repository: string, directory?: string, branch?: string): Promise<boolean> => {
    console.log( "[Debug] Pulling Repository from VCS ..." );

    const options = (): readonly [string[]] => {
        console.log( " - Generating Command Partial(s) ..." );

        const partials = ( branch ) ? [
            "clone", repository, "--branch", branch
        ] : [ "clone", repository ];

        if ( directory != null ) {
            partials.push( directory as string );
        }

        const lexical = partials.join( " " )
            .replace( "$", "" )
            .replace( "{", "" )
            .replace( "}", "" )
            .replace( "(", "" )
            .replace( ")", "" );

        return [lexical.split( " " )];
    }

    if ( typeof directory === "string" ) {
        await Remove( directory );
    }

    return new Promise( (resolve, reject) => {
        console.log( " - Spawning Non-Interactive \"git\" Clone Sub-Process ..." );

        const subprocess = Subprocess.spawn( "git", ... options(), {
            shell: false, env: process.env, stdio: "ignore"
        } );

        subprocess.stdout?.on( "data", (chunk) => {
            const buffer = chunk.toString( "utf-8", 0, chunk.length );

            process.stdout.write( buffer );
        } );

        subprocess.stderr?.on( "data", (chunk) => {
            console.error( chunk.toString() );
        } );

        subprocess.on( "message", (message, handle) => {
            console.log( message, handle );
        } );

        subprocess.on( "error", (error) => {
            console.warn( error );

            reject( error );
        } );

        subprocess.on( "exit", (code, handle) => {
            ( code !== 0 ) && reject( { code, handle } );
        } );

        subprocess.on( "close", (code, handle) => {
            ( code !== 0 ) && reject( { code, handle } );

            console.log( "\n" + "[Log] Successfully Cloned Repository" );

            resolve( true );
        } );
    } );
};

export { Clone };

export default Clone;
