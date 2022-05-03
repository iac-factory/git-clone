import FS from "fs";

/***
 * Promisified Version of {@link FS.rm}
 * ---
 *
 * Asynchronously, recursively deletes the entire directory structure from target,
 * including subdirectories and files.
 *
 * @experimental
 *
 * @param {string} target
 * @returns {Promise<void>}
 *
 * @constructor
 *
 */
const Remove = async ( target: string ): Promise<Error | null> => {
    return new Promise( ( resolve ) => {
        FS.rm( target, { recursive: true, force: true }, resolve );
    } );
};

export { Remove };

export default Remove;
