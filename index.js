// (c) Alex Kondakov
// 7-zip binaries module

const path = require("path");

//Static flag switches to version compiled with static system library linking (actual for linux platform). Function returns path to your platform 7-zip binary
exports.bin = (static=false) => {
    const platform = process.platform;
    const arch = (process.arch == 'x32') ? 'ia32' : process.arch;
    const s = (static) ? 's' : '';

    switch (platform) {
        case 'win32':
            return path.join(__dirname, 'bin', platform, arch, '7za.exe');
        break;

        case 'darwin':
            return path.join(__dirname, 'bin', platform, '7zz');
        break;

        case 'linux':
            return path.join(__dirname, 'bin', platform, arch, '7zz' + s);
        break;

        //No binaries for current platform
        default:
            return null;
        break;
    }
}