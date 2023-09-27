# Setting up a NextcloudPi instance with RAID on a Raspberry Pi 4 (With Troubleshooting Steps)
This guide includes setting up NCP with a Cloudflare tunnel to expose the pi outside your network without port forwarding, and it also includes setup instructions for a WiFi AP. It will include some troubleshooting steps as well for issues that I had while setting up.

## Materials needed
- Raspberry Pi 4 (you can use an older model but I have not tested with an older model!)
- 8GB SD card
- USB C cable (to power the Pi)
- External storage (I used two 2TB Seagate hard drives and a hard drive dock with USB 3)
- Ethernet cable + ethernet adaptor for your computer

## Downloading and Installing NextcloudPi
Download the latest NCP release from their [GitHub releases page](https://github.com/nextcloud/nextcloudpi/releases). (Pro tip: download the .zip with "RaspberryPi" in its name.)

Etcher is a tool you can use to easily flash images to an SD card. Download and install Etcher from [their website](https://etcher.balena.io/).

Once both Etcher and the NextcloudPi .zip file are downloaded, extract the .zip file and open it using Etcher, selecting your SD card that you'll be using in the Pi as the target. Flash the image, eject the SD card once it's done validating, insert it into the Pi you're using, and power it up!

## Setting up Nextcloud
Connect your pi to your computer with an ethenet cable. This will network your two devices together so that you can access the web console. Navigate to https://nextcloud.local in your web browser. If you have any warnings about proceeding being unsafe, ignore them and proceed.

Copy the username and password for both the admin panel and the web interface somewhere safe on your computer. You can change these passwords later, but you need them for now. Go ahead and press activate. After it's activated, navigate to https://nextcloudpi.local:4443 in your web browser (this is the admin panel). Log in with your username and password that you copied down.

Once you've logged in, scroll down on the menu on the left side of the page and click on "SSH." Set up a new user and password (make sure to enable sudo). If that change is successfully applied, you can now open up a terminal or SSH client on your computer and ssh to your Pi.

```
ssh <username>@nextcloudpi.local
```

## Networking Pt. 1
You can set up WiFi on the Pi with raspi-config if you are not planning on using the Pi as a wireless access point. This will be much easier than the alternative, which I chose to do as to not mess with any networking settings. So, if you are setting up WiFi with raspi-config, skip to the next section.

If you are setting up a wireless access point, which I chose to do as a low-cost alternative to buying a router for my dorm room, you will need to share internet from your computer to the Pi via ethernet. This is easily done on Windows from the Network Connections panel, and I'm sure it is fairly straightforward on macOS as well.

The reason I chose to go through the trouble of sharing internet from my computer is because I found when I used raspi-config to enable wifi and later set up the access point, there were conflicting services running and it just made my life easier to not mess with that.

## Timezone
You will need to ensure the time is set correctly on the RPi or you will not be able to use the apt package manager. Use
```
timedatectl
```
to check if your time and time zone is set correctly. If it is not, [this](https://www.howtogeek.com/782032/how-to-use-the-timedatectl-command-on-linux/) article will help you with the timedatectl command.

## External storage setup
I used two 2TB Seagate Barracuda HDDs with a cheap [docking station](https://www.bestbuy.ca/en-ca/product/insignia-usb-3-0-dual-hard-drive-docking-station-only-at-best-buy/15815030) from Best Buy. I just plugged the hard drives in, powered up the dock, and connected it to my Pi.

[This article](https://www.stewright.me/2017/08/create-raid-volume-raspberry-pi/) by Ste Wright describes in good detail how to set up a RAID volume with this setup.

Once you have mounted it to the directory where you'd like your files to live, navigate back to https://nextcloud.local:4443 and, under the "Config" section, select nc-datadir. Input your new directory where your storage is located and ensure the operation is successful.

## If you have come this far and all you want is a Nextcloud instance on your home network, you are done!
If you'd like to configure Cloudflare tunnels so that you can access your Pi outside of your home network without port forwarding, or if you'd like to set up a wireless AP with the same Pi, feel free to continue!