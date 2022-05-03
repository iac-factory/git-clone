import FS from "fs";

/***
 * Promisified Version of {@link FS.cp}
 * ---
 *
 * Asynchronously copies the entire directory structure from source to destination, including subdirectories and files.
 * - When copying a directory to another directory, globs are not supported.
 *
 * @experimental
 *
 * @param source {typeof import("fs").PathOrFileDescriptor} source path to copy.
 * @param target {typeof import("fs").PathOrFileDescriptor} destination path to copy to.
 * @returns {Promise<?>}
 *
 * @constructor
 *
 */
const Copy = async (source: string, target: string): Promise<string> => new Promise( (resolve) => {
    FS.cp( source, target, {
            recursive: true,
            dereference: false,
            preserveTimestamps: true,
            errorOnExist: false,
            force: true
        }, () => {
            resolve( target );
        }
    );
} );

const Dereference = async (source: string, target: string): Promise<string> => new Promise( (resolve) => {
    FS.cp( source, target, {
            recursive: true,
            dereference: true,
            preserveTimestamps: true,
            errorOnExist: false,
            force: true
        }, () => {
            resolve( target );
        }
    );
} );

export { Copy, Dereference };
export default Copy;
