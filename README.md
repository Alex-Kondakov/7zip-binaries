# Introduction

Module to include 7-zip binaries to your project. The key difference are binaries files. Most similar packages use 7za binary which is cut light-weight version of 7-zip. Full 7zz binary included to this package for Linux and Mac to guarantee support of the following formats:


|   Operations  |       Types        
|---------------|--------------------
|  pack/unpack  | 7z, XZ, BZIP2, GZIP, TAR, ZIP and WIM           
|    unpack     | AR, ARJ, Base64, CAB, CHM, CPIO, CramFS, DMG, EXT, FAT, GPT, HFS, IHEX, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, QCOW2, RAR, RPM, SquashFS, UDF, UEFI, VDI, VHD, VHDX, VMDK, XAR and Z 


Despite this package contain Windows binaries, target platforms are Mac and Linux. Windows ones are still cut 7za binaries.


# Installation

```shell
# cd /your/project/directory
# npm install 7zip-binaries --save
```

# Usage examples

Proceed to separate repository for examples: https://github.com/Alex-Kondakov/7zip-examples