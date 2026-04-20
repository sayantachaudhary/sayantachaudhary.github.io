---
title: "LUKS Encryption"
description: "Encrypt external and internal disks on Linux."
image: "/blog/javascript-for-frontend.png"
tags: ["frontend", "development", "javascript"]
date: "2025-06-06"
isPublished: true
---

LUKS (Linux Unified Key Setup) is a libre and free disk encryption standard which allows for the encryption of external and internal disks on Linux. Everything from an SD card to your root partition can be encrypted with LUKS, allowing you to keep your data secure.

LUKS works by utilizing a master encryption key protected by a user key, which in most cases will be a password.

## Table of Contents

- [External USB Drive](#external-usb-drive)
- [Accessing the external drive](#accessing-the-external-drive)
- [Encrypted Root Partition](#encrypted-root-partition)
- [Partition Setup](#partition-setup)
- [Installing Linux](#installing-linux)
- [mknitcpio Setup](#mknitcpio-setup)
- [Bootloader Setup](#bootloader-setup)

## External USB Drive

Suppose the device `/dev/sdb1` is a USB flash stick partition we wish to encrypt. To do so, simply run:

```bash
cryptsetup luksFormat /dev/sdb1
```

You will be prompted to enter a password and verify it. Make sure to pick a secure one!

### Accessing the external drive

To decrypt the partition, simply run:

```bash
cryptsetup open /dev/sdb1 cryptusb
```

This will make the partition device accessible in `/dev/mapper/cryptusb`. To use it properly, it must have a formatted filesystem:

```bash
mkfs.ext4 /dev/mapper/cryptusb
```

Now it may be mounted:

```bash
mount /dev/mapper/cryptusb /mnt
```

> Note: A filesystem daemon like GVFS will automatically know how to handle encrypted drives and prompt you for a password when accessing them.

## Encrypted Root Partition

Many Linux distributions with GUI installers like [Linux Mint](https://linuxmint.com/) and [Artix](https://artixlinux.org/) offer an an encrypted root partition option. Simply enable encryption and set a password in their GUI to be prompted at boot.

The rest of this guide will follow all the steps necessary to set up an encrypted root partition on a manual install distribution like [Archlinux](https://archlinux.org/) or [Gentoo](https://www.gentoo.org/).

### Partition Setup

Begin by setting up an encrypted partition as normal:

```bash
cryptsetup luksFormat /dev/sda2
# You will now be prompted for a password...

# Make note of where you open the encrypted partition!
cryptsetup open /dev/sda2 cryptroot
# You will once again be prompted for a password

# Format and mount the partition
mkfs.ext4 /dev/mapper/cryptroot
mount /dev/mapper/cryptroot /mnt
```

### Installing Linux

When installing Linux, make sure to install the packages containing the cryptroot and lvm2 commands.

You may now install Linux to the partition mounted to /mnt as normal. However, the partition will not boot if you leave it like this! Make sure to follow these steps:

### mknitcpio setup

If you are using dracut or booster for your initcpio, you can ignore this step!

If you are using Archlinux or Artix, the default initcpio software included with your distribution is `mkinitcpio`. This software does not support encryption by default. This can be corrected by editing `/etc/mkinitcpio.conf` and editing the `HOOKS=(...` line to include the following:

```bash
HOOKS=(base udev autodetect modconf kms keyboard keymap consolefont block encrypt lvm2 filesystems fsck)
```

After modifying the config, make sure to re-generate the initcpio:

```bash
mkinitcpio -P
```

### Bootloader setup

Your bootloader needs to be aware of your encrypted partition setup, or it won’t know where to look for your root partition.

Obtaining UUIDs

To set up encryption, you must obtain the UUIDs for both your encrypted partition `(cryptdevice)` and your unencrypted partition (root). To see these, use the `blkid` command with some special parameters:

```bash
## Obtain the UUID for cryptdevice:
blkid /dev/sda2 -o value -s UUID
## In this example, we'll use f4f9f9f6-222a-4018-b45a-9b86544890e4

## Obain the UUID for root:
blkid /dev/mapper/cryptroot -o value -s UUID
## In this example, we'll use 83276439-f9fa-4429-a2e2-91c072c02c4f
```

GRUB Setup

Set the following in `/etc/default/grub`:

```bash
GRUB_CMDLINE_LINUX_DEFAULT="loglevel=3 quiet cryptdevice=UUID=f4f9f9f6-222a-4018-b45a-9b86544890e4:cryptroot root=UUID=83276439-f9fa-4429-a2e2-91c072c02c4f"
```

rEFInd Setup

Set the following in /boot/refind_linux.conf:

```bash
"Boot with standard options"    "root=UUID=83276439-f9fa-4429-a2e2-91c072c02c4f ro cryptdevice=UUID=f4f9f9f6-222a-4018-b45a-9b86544890e4:cryptroot:allow-discards loglevel=3"
"Boot to single-user mode"      "root=UUID=83276439-f9fa-4429-a2e2-91c072c02c4f ro cryptdevice=UUID=f4f9f9f6-222a-4018-b45a-9b86544890e4:cryptroot:allow-discards quiet single"
"Boot with minimal options"     "root=UUID=83276439-f9fa-4429-a2e2-91c072c02c4f ro cryptdevice=UUID=f4f9f9f6-222a-4018-b45a-9b86544890e4:cryptroot:allow-discards
```

EFI Boot Stub Setup

This will only work if you mounted your EFI partition to /boot.

Create a shell script containing the following:

```bash
#!/bin/sh

params="cryptdevice=UUID=f4f9f9f6-222a-4018-b45a-9b86544890e4:cryptroot \
    root=UUID=83276439-f9fa-4429-a2e2-91c072c02c4f rootfstype=ext4 rw \
    initrd=\intel-ucode.img \
    initrd=\initramfs-linux.img \
    loglevel=3"

efibootmgr --create --label "Arch Linux" \
    --disk /dev/sda --part 1 \
    --loader /vmlinuz-linux \
    --unicode "${params}" \
    --verbose
```

Save it as `bootentry.sh` and make it executable:

```bash
chmod +x bootentry.sh
```

Finally, create a boot entry by running the script:

```bash
sh bootentry.sh
```

Congratulations! You should now be able to reboot and run your system with LUKS encryption!
