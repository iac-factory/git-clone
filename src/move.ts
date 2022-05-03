import FS from "fs";

/***
 * Promisified Version of {@link FS.rename}
 * ---
 *
 * Asynchronously rename file at `source` to the pathname provided as `destination`.
 * `destination` will be overwritten if already in existence. If there is a directory at `destination`, an
 * error will be raised instead.
 *
 * @experimental
 *
 * @param source {typeof import("fs").PathOrFileDescriptor} source path to copy.
 * @param destination {typeof import("fs").PathOrFileDescriptor} destination path to move to.
 * @returns {Promise<?>}
 *
 * @constructor
 *
 */
const Move = async ( source: string, destination: string ): Promise<void | null> => {
    return new Promise( ( resolve ) => {
        FS.rename( source, destination, () => resolve( null ) );
    } );
};

export { Move };
export default Move;
